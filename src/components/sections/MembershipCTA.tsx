import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { EXTERNAL_LINKS } from "@/lib/constants";

const benefits = [
  "Qualifications Recognition Handbook",
  "A personal mentor",
  "Members-only webinars & workshops",
  "Labour market insights",
];

export function MembershipCTA() {
  return (
    <section className="relative overflow-hidden border-y border-gray-100 bg-white py-16 md:py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/[0.06] blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative text-center">
        <RevealOnScroll>
          <h2 className="mx-auto max-w-2xl text-h2 md:text-h2-lg font-bold tracking-tight text-ink">
            Join a community that understands your journey
          </h2>
          <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2 text-sm font-medium text-gray-600"
              >
                <Check className="h-4 w-4 text-secondary" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button
              href={EXTERNAL_LINKS.membershipApplication}
              external
              size="lg"
            >
              Apply for Membership
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
