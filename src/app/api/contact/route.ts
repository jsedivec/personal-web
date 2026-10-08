import { Resend } from "resend";
import { NextResponse } from "next/server";

const INTEREST_LABELS: Record<string, string> = {
  individual: "Individuální lekce",
  skupina: "Skupinové lekce",
  workshop: "Workshop / seminář",
  firma: "Firemní workshop",
  web: "Web na míru",
  jine: "Jiné / obecný dotaz",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "E-mailová služba není nakonfigurovaná." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Neplatný požadavek." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Neplatný požadavek." }, { status: 400 });
  }

  const {
    name,
    email,
    message,
    interest,
    website,
  } = body as Record<string, unknown>;

  // Honeypot — bots fill this, humans leave it empty
  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json({ error: "Vyplňte všechna pole." }, { status: 400 });
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();
  const interestKey =
    typeof interest === "string" && interest in INTEREST_LABELS ? interest : "";

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return NextResponse.json({ error: "Vyplňte všechna pole." }, { status: 400 });
  }

  if (trimmedName.length > 120 || trimmedMessage.length > 5000) {
    return NextResponse.json({ error: "Zpráva je příliš dlouhá." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail) || trimmedEmail.length > 200) {
    return NextResponse.json({ error: "Neplatný e-mail." }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "jiri.sedivec@seznam.cz";
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Jirka Šedivec <kontakt@nalekci.cz>";
  const interestLabel = interestKey ? INTEREST_LABELS[interestKey] : null;

  const subject = interestLabel
    ? `Zájem: ${interestLabel} — ${trimmedName}`
    : `Zpráva z webu — ${trimmedName}`;

  const text = [
    `Jméno: ${trimmedName}`,
    `E-mail: ${trimmedEmail}`,
    interestLabel ? `Zájem: ${interestLabel}` : null,
    "",
    trimmedMessage,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const html = `
    <p><strong>Jméno:</strong> ${escapeHtml(trimmedName)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(trimmedEmail)}</p>
    ${
      interestLabel
        ? `<p><strong>Zájem:</strong> ${escapeHtml(interestLabel)}</p>`
        : ""
    }
    <p style="white-space:pre-wrap">${escapeHtml(trimmedMessage)}</p>
  `;

  const resend = new Resend(apiKey);
  const idempotencyKey = `contact/${Date.now()}-${crypto.randomUUID()}`;

  const { data, error } = await resend.emails.send(
    {
      from,
      to: [to],
      replyTo: trimmedEmail,
      subject,
      text,
      html,
    },
    { idempotencyKey },
  );

  if (error) {
    console.error("Resend error:", error.message);
    return NextResponse.json(
      { error: "Odeslání se nepovedlo. Zkuste to prosím znovu." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, id: data?.id });
}
