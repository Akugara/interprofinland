import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CONTACT, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie Policy for ${SITE.fullName}.`,
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero title="Cookie Policy" />
      <section className="section-y bg-white">
        <div className="container-page max-w-3xl">
          <p className="text-sm italic text-gray-400">
            This is a template policy prepared for launch. It should be
            reviewed by the association&apos;s legal counsel before
            publishing.
          </p>

          <p className="mt-6 text-body text-gray-600">
            Last updated: January 2026
          </p>

          <div className="mt-8 space-y-8">
            <div>
              <h2 className="text-h3-lg font-semibold text-ink">
                1. What Are Cookies
              </h2>
              <p className="mt-3 text-body-lg text-gray-600">
                Cookies are small text files stored on your device that help
                websites remember information about your visit, such as
                preferences and whether you&apos;ve interacted with certain
                features.
              </p>
            </div>

            <div>
              <h2 className="text-h3-lg font-semibold text-ink">
                2. Cookies We Use
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-body-lg text-gray-600">
                <li>
                  <strong className="text-ink">Essential cookies</strong> —
                  required for core site functionality, such as remembering
                  your cookie consent choice.
                </li>
                <li>
                  <strong className="text-ink">Analytics cookies</strong> —
                  help us understand how visitors use the site so we can
                  improve it (only set with your consent).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-h3-lg font-semibold text-ink">
                3. Managing Cookies
              </h2>
              <p className="mt-3 text-body-lg text-gray-600">
                You can accept or decline non-essential cookies via the
                cookie banner shown on your first visit. You can also
                manage or delete cookies at any time through your browser
                settings.
              </p>
            </div>

            <div>
              <h2 className="text-h3-lg font-semibold text-ink">
                4. Contact
              </h2>
              <p className="mt-3 text-body-lg text-gray-600">
                Questions about this policy can be directed to{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="focus-ring text-secondary underline underline-offset-2"
                >
                  {CONTACT.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
