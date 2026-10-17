import { useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'How we help', href: '#clients' },
  { label: 'Our clients', href: '#clients' },
  { label: 'Articles', href: '#articles' },
];

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="group relative py-1 text-xs font-bold uppercase tracking-[0.22em] text-ink"
  >
    {children}
    <span
      aria-hidden
      className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-flame transition-transform duration-300 ease-luxe group-hover:scale-x-100"
    />
  </a>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const go = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/85 backdrop-blur-md">
      <div className="shell relative flex items-center justify-between py-4 text-ink md:py-5">
        {/* Left — nav links on desktop, burger on mobile */}
        <div className="flex items-center">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg
              className={`h-5 w-5 transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}
                strokeLinecap="round"
              />
            </svg>
          </button>
          <nav className="hidden items-center gap-7 md:flex lg:gap-9" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.label} href={l.href}>
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Center — logotype */}
        <Link
          href="/"
          className="display italic absolute left-1/2 -translate-x-1/2 tracking-[0.04em] text-2xl md:text-3xl"
        >
          PILOT
        </Link>

        {/* Right — contact pill */}
        <a
          href="mailto:hello@pilot.studio"
          className="group relative inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] transition-colors duration-300 hover:border-flame hover:bg-flame hover:text-white"
        >
          Contact
          <span
            aria-hidden
            className="transition-transform duration-300 ease-luxe group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
      </div>

      <div
        id="mobile-nav"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 md:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <nav className="flex flex-col gap-1 overflow-hidden px-5 pb-4 pt-1" aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={go}
              className="py-3 text-sm font-bold uppercase tracking-[0.2em] hover:text-flame"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
