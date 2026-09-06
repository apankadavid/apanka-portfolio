"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-deep-green text-paper shadow-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-fraunces text-xl tracking-tight">
          Apanka David
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV.map((n) => {
            const isActive = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-cream" : "text-paper/75 hover:text-paper"
                }`}
              >
                {n.label}
                {isActive && (
                  <span className="absolute left-3 right-3 -bottom-1 h-[2px] bg-cream" />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-4 rounded-lg bg-cream text-deep-green px-5 py-2 text-sm font-semibold hover:bg-cream/90 transition-colors"
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
        <nav className="lg:hidden bg-deep-green px-6 pb-6 flex flex-col gap-1 border-t border-paper/10 pt-4" aria-label="Mobile">
          {NAV.map((n) => {
            const isActive = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-3 text-base font-medium ${
                  isActive ? "text-cream bg-paper/10" : "text-paper/90 hover:bg-paper/10"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
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