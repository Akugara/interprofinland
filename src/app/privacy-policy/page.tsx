import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CONTACT, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.fullName}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="section-y bg-white">
        <div className="container-page max-w-3xl">
          <p className="text-sm italic text-gray-400">
            This is a template policy prepared for launch. It should be
            reviewed by the association&apos;s legal counsel before
            publishing to ensure full compliance with the EU GDPR and Finnish
            data protection law.
          </p>

          <p className="mt-6 text-body text-gray-600">
            Last updated: January 2026
          </p>

          <div className="mt-8 space-y-8">
            <div>
              <h2 className="text-h3-lg font-semibold text-ink">
                1. Who We Are
              </h2>
              <p className="mt-3 text-body-lg text-gray-600">
                {SITE.fullName} (&quot;InterProFinland&quot;, &quot;we&quot;,
                &quot;us&quot;) is a registered association (ry) based in
                Pori, Finland. This policy explains how we collect, use, and
                protect personal data when you interact with our website,
                programs, and community.
              </p>
            </div>

            <div>
              <h2 className="text-h3-lg font-semibold text-ink">
                2. Data We Collect
              </h2>
              <p className="mt-3 text-body-lg text-gray-600">
                We may collect information you provide directly, such as your
                name, email address, and message content when you fill out a
                contact form, apply for membership or mentorship, or subscribe
                to our newsletter. We also collect limited technical data
                (such as browser type and pages visited) via cookies — see
                our{" "}
                <a href="/cookie-policy" className="focus-ring text-secondary underline underline-offset-2">
                  Cookie Policy
                </a>{" "}
                for details.
              </p>
            </div>

            <div>
              <h2 className="text-h3-lg font-semibold text-ink">
                3. How We Use Your Data
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-body-lg text-gray-600">
                <li>To respond to inquiries and process applications</li>
                <li>To administer membership, mentoring, and program participation</li>
                <li>To send newsletters and community updates you&apos;ve opted into</li>
                <li>To improve our website and services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-h3-lg font-semibold text-ink">
                4. Third-Party Services
              </h2>
              <p className="mt-3 text-body-lg text-gray-600">
                Our contact and membership forms are processed via
                third-party form services (such as Formspree, Web3Forms, or
                JotForm). Please review their respective privacy policies for
                how they handle submitted data.
              </p>
            </div>

            <div>
              <h2 className="text-h3-lg font-semibold text-ink">
                5. Your Rights
              </h2>
              <p className="mt-3 text-body-lg text-gray-600">
                Under the GDPR, you have the right to access, correct, or
                request deletion of your personal data, and to object to or
                restrict certain processing. To exercise these rights,
                contact us at{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="focus-ring text-secondary underline underline-offset-2"
                >
                  {CONTACT.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-h3-lg font-semibold text-ink">
                6. Contact
              </h2>
              <p className="mt-3 text-body-lg text-gray-600">
                Questions about this policy can be directed to{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="focus-ring text-secondary underline underline-offset-2"
                >
                  {CONTACT.email}
                </a>{" "}
                or {CONTACT.address}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
