"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "ipf-cookie-consent";

const noopSubscribe = () => () => {};
const getSnapshot = () => window.localStorage.getItem(STORAGE_KEY);
const getServerSnapshot = () => null;

export function CookieConsent() {
  const storedConsent = useSyncExternalStore(
    noopSubscribe,
    getSnapshot,
    getServerSnapshot
  );
  const [dismissed, setDismissed] = useState(false);
  const visible = storedConsent === null && !dismissed;

  const respond = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-[95] border-t border-black/5 bg-white/95 px-6 py-5 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur"
        >
          <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-600">
              We use cookies to improve your experience. Read our{" "}
              <Link href="/cookie-policy" className="focus-ring underline underline-offset-2 hover:text-secondary">
                Cookie Policy
              </Link>{" "}
              to learn more.
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => respond("rejected")}
                className="focus-ring min-h-[44px] rounded-btn px-4 py-2 text-sm font-medium text-gray-600 hover:text-ink"
              >
                Manage
              </button>
              <Button size="md" onClick={() => respond("accepted")}>
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
