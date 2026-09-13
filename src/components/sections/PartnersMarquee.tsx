import Image from "next/image";
import { Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partners, networkMemberships } from "@/lib/data/partners";

export function PartnersMarquee() {
  return (
    <section className="section-y border-t border-gray-100 bg-white">
      <div className="container-page">
        <SectionHeading eyebrow="Community" title="Our Partners & Networks" />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-16 items-center justify-center grayscale transition-all duration-200 hover:grayscale-0"
            >
              {partner.logo ? (
                <div className="relative h-full w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="140px"
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2 text-gray-400">
                  <Building2 className="h-5 w-5" aria-hidden="true" />
                  <span className="text-sm font-medium">{partner.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-gray-100 pt-12">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
            Also affiliated with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {networkMemberships.map((network) => (
              <div key={network.name} className="relative h-14 w-36">
                <Image
                  src={network.logo}
                  alt={network.name}
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
