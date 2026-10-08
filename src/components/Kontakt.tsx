"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Reveal from "./Reveal";

const INTEREST_OPTIONS = [
  { value: "", label: "Vyberte…" },
  { value: "individual", label: "Individuální lekce" },
  { value: "skupina", label: "Skupinové lekce" },
  { value: "workshop", label: "Workshop / seminář" },
  { value: "firma", label: "Firemní workshop" },
  { value: "web", label: "Web na míru" },
  { value: "jine", label: "Jiné / obecný dotaz" },
] as const;

const PREFILL_MESSAGES: Record<string, string> = {
  individual:
    "Ahoj, mám zájem o individuální lekci v Plzni. Dej mi prosím vědět, jaké máš volné termíny.",
  skupina:
    "Ahoj, zajímají mě skupinové lekce ve studiu. Můžeš mi napsat víc?",
  workshop:
    "Ahoj, mám zájem o workshop / seminář. Rád/a bych věděl/a více o možnostech.",
  firma:
    "Ahoj, zajímá nás firemní pohybový workshop. Rádi bychom probrali formát a termín.",
  web: "Ahoj, hledám někoho na web na míru. Rád/a bych probral/a detaily.",
};

type Status = "idle" | "loading" | "success" | "error";

function resolveZajem(raw: string | null) {
  if (!raw || !INTEREST_OPTIONS.some((o) => o.value === raw)) return "";
  return raw;
}

export default function Kontakt() {
  const searchParams = useSearchParams();
  const urlZajem = resolveZajem(searchParams.get("zajem"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
    website: "",
  });
  const [interestTouched, setInterestTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const interest = interestTouched
    ? formData.interest
    : formData.interest || urlZajem;
  const message = messageTouched
    ? formData.message
    : formData.message || (urlZajem ? PREFILL_MESSAGES[urlZajem] || "" : "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          interest,
          message,
          website: formData.website,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Odeslání se nepovedlo.");
        return;
      }

      setStatus("success");
      setInterestTouched(true);
      setMessageTouched(true);
      setFormData({
        name: "",
        email: "",
        interest: "",
        message: "",
        website: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage("Odeslání se nepovedlo. Zkontrolujte připojení.");
    }
  };

  return (
    <section id="kontakt" className="py-16 sm:py-24 lg:py-36">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl lg:text-5xl">
              Kontakt
            </h2>
            <p className="mt-4 text-base text-foreground/70 sm:mt-6 sm:text-lg">
              Chcete se domluvit na individuální lekci, máte zájem o web, nebo
              se jen chcete na něco zeptat? Napište mi.
            </p>
          </Reveal>

          <div className="mt-12 space-y-8">
            <Reveal delay={80}>
              <a href="mailto:jiri.sedivec@seznam.cz" className="group block">
                <p className="text-sm tracking-[0.2em] text-teal uppercase">E-mail</p>
                <p className="mt-1 font-display text-2xl text-foreground group-hover:text-teal">
                  jiri.sedivec@seznam.cz
                </p>
              </a>
            </Reveal>

            <Reveal delay={140}>
              <a
                href="https://www.instagram.com/jirka_sedivec"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <p className="text-sm tracking-[0.2em] text-teal uppercase">Instagram</p>
                <p className="mt-1 font-display text-2xl text-foreground group-hover:text-teal">
                  @jirka_sedivec
                </p>
              </a>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120}>
          {status === "success" ? (
            <div className="space-y-4 py-8">
              <p className="font-display text-2xl text-foreground">Díky za zprávu.</p>
              <p className="text-foreground/70">
                Ozvu se co nejdřív na e-mail, který jste uvedli.
              </p>
              <button
                type="button"
                onClick={() => {
                  setInterestTouched(false);
                  setMessageTouched(false);
                  setStatus("idle");
                }}
                className="pt-2 text-teal underline-offset-4 hover:underline"
              >
                Poslat další zprávu
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-foreground/60">
                  Jméno
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-foreground/20 bg-transparent py-3 transition-colors outline-none focus:border-teal"
                  placeholder="Vaše jméno"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-foreground/60">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-foreground/20 bg-transparent py-3 transition-colors outline-none focus:border-teal"
                  placeholder="vas@email.cz"
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="mb-2 block text-sm text-foreground/60"
                >
                  Zájem
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={interest}
                  onChange={(e) => {
                    const nextInterest = e.target.value;
                    const currentMessage = message;
                    const isTemplate =
                      !currentMessage ||
                      Object.values(PREFILL_MESSAGES).includes(currentMessage);
                    const nextMessage =
                      isTemplate && PREFILL_MESSAGES[nextInterest]
                        ? PREFILL_MESSAGES[nextInterest]
                        : isTemplate && !nextInterest
                          ? ""
                          : currentMessage;

                    setInterestTouched(true);
                    if (isTemplate) setMessageTouched(false);
                    setFormData((prev) => ({
                      ...prev,
                      interest: nextInterest,
                      message: nextMessage,
                    }));
                  }}
                  className="w-full border-b border-foreground/20 bg-transparent py-3 transition-colors outline-none focus:border-teal"
                >
                  {INTEREST_OPTIONS.map((option) => (
                    <option key={option.value || "empty"} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-foreground/60"
                >
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => {
                    setMessageTouched(true);
                    setFormData({ ...formData, message: e.target.value });
                  }}
                  className="w-full resize-none border-b border-foreground/20 bg-transparent py-3 transition-colors outline-none focus:border-teal"
                  placeholder="Vaše zpráva..."
                />
              </div>

              {/* Honeypot — hidden from users */}
              <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden>
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="group inline-flex items-center gap-2 pt-4 text-lg text-foreground disabled:opacity-50"
              >
                {status === "loading" ? "Odesílám…" : "Odeslat zprávu"}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              {status === "error" && (
                <p className="text-sm text-red-700" role="alert">
                  {errorMessage}
                </p>
              )}

              <p className="text-sm text-foreground/45">
                Zpráva přijde přímo na můj e-mail. Odpovím co nejdřív.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
