"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-xl transition-shadow duration-300",
        scrolled && "border-b border-black/[0.04] shadow-sm"
      )}
    >
      <div className="container-page flex h-[72px] items-center justify-between md:h-20">
        <Link href="/" className="focus-ring flex shrink-0 items-center rounded-btn" aria-label="InterProFinland home">
          <Image
            src="/logos/logo-full.png"
            alt="InterProFinland"
            width={168}
            height={142}
            priority
            className="hidden h-14 w-auto lg:block"
          />
          <Image
            src="/logos/logo-icon.png"
            alt="InterProFinland"
            width={44}
            height={51}
            priority
            className="block h-10 w-auto lg:hidden"
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "focus-ring relative py-2 text-sm font-medium text-ink transition-colors hover:text-secondary",
                  isActive &&
                    "text-secondary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/get-involved">Join Us</Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="focus-ring rounded-btn p-2 text-ink lg:hidden"
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
