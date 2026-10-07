import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <Logo markClassName="h-8 w-8" />
        <p className="text-sm text-foreground/50">© {currentYear}</p>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://www.instagram.com/jirka_sedivec"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 transition-colors hover:text-foreground"
          >
            Instagram
          </a>
          <a
            href="mailto:jiri.sedivec@seznam.cz"
            className="text-foreground/60 transition-colors hover:text-foreground"
          >
            E-mail
          </a>
        </div>
      </div>
    </footer>
  );
}
