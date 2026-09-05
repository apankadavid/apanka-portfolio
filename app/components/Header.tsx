"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-deep-green text-paper">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-fraunces text-lg tracking-tight">
          Apanka David
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-paper/80 hover:text-cream transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-cream text-deep-green px-5 py-2 text-sm font-semibold hover:bg-cream/90 transition-colors"
          >
            Let&apos;s Work Together
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-deep-green px-6 pb-6 flex flex-col gap-1" aria-label="Mobile">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-paper/90 hover:bg-paper/10"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-cream text-deep-green px-5 py-3 text-center text-sm font-semibold"
          >
            Let&apos;s Work Together
          </Link>
        </nav>
      )}
    </header>
  );
}