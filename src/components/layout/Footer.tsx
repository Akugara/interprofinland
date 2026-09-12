import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_GET_INVOLVED_LINKS,
  EXTERNAL_LINKS,
  CONTACT,
  SITE,
} from "@/lib/constants";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/icons/SocialIcons";

const socialLinks = [
  { label: "Facebook", href: EXTERNAL_LINKS.facebookPage, Icon: FacebookIcon },
  { label: "Instagram", href: EXTERNAL_LINKS.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: EXTERNAL_LINKS.linkedin, Icon: LinkedinIcon },
  { label: "WhatsApp", href: EXTERNAL_LINKS.whatsapp, Icon: WhatsappIcon },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-page grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/logos/logo-full-white.png"
            alt="InterProFinland"
            width={140}
            height={119}
            className="h-16 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-white/70">
            Helping international professionals in Finland overcome barriers,
            utilize their skills, and build meaningful careers.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="focus-ring text-sm text-white/85 transition-colors hover:text-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Get Involved
          </h3>
          <ul className="mt-4 space-y-3">
            {FOOTER_GET_INVOLVED_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="focus-ring text-sm text-white/85 transition-colors hover:text-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Connect
          </h3>
          <div className="mt-4 flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-secondary"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
          <div className="mt-5 flex items-start gap-2 text-sm text-white/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{CONTACT.address}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SITE.fullName}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="focus-ring hover:text-secondary">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="focus-ring hover:text-secondary">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
