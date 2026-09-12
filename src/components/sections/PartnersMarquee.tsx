import Image from "next/image";
import { Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partners, networkMemberships } from "@/lib/data/partners";

export function PartnersMarquee() {
  const track = [...partners, ...partners];

  return (
    <section className="section-y overflow-hidden bg-gray-50">
      <div className="container-page">
        <SectionHeading eyebrow="Community" title="Our Partners & Networks" />
      </div>
      <div className="relative mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track">
          {track.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="mx-4 flex h-20 w-48 shrink-0 items-center justify-center gap-2 rounded-card bg-white p-4 grayscale transition-all duration-200 hover:grayscale-0"
            >
              {partner.logo ? (
                <div className="relative h-full w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="180px"
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
      </div>
      <div className="container-page mt-10 flex flex-col items-center gap-4">
        <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
          Also affiliated with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {networkMemberships.map((network) => (
            <div key={network.name} className="relative h-8 w-24">
              <Image
                src={network.logo}
                alt={network.name}
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
