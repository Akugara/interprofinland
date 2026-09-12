"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[90] bg-primary lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex h-full flex-col"
          >
            <div className="flex items-center justify-end px-6 py-5">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="focus-ring rounded-full p-2 text-white"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-6">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "focus-ring w-full min-h-[44px] rounded-full px-4 py-3 text-center text-xl font-semibold text-white/90 transition-colors",
                      isActive ? "bg-white/15 text-white" : "hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-6 w-full max-w-xs">
                <Button href="/get-involved" variant="white" className="w-full" onClick={onClose}>
                  Join Us
                </Button>
              </div>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
