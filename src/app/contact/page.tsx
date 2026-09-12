import type { Metadata } from "next";
import { Mail, Clock, MapPin, CalendarClock } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ContactForm } from "@/components/forms/ContactForm";
import { CONTACT, EXTERNAL_LINKS } from "@/lib/constants";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/icons/SocialIcons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with InterProFinland — email, WhatsApp, office hours, and location in Pori, Finland.",
};

const socialLinks = [
  { label: "Facebook", href: EXTERNAL_LINKS.facebookPage, Icon: FacebookIcon },
  { label: "Instagram", href: EXTERNAL_LINKS.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: EXTERNAL_LINKS.linkedin, Icon: LinkedinIcon },
];

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" />

      <section className="section-y bg-white">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2">
          <RevealOnScroll>
            <h2 className="text-h2 font-bold tracking-tight text-ink">Send us a message</h2>
            <p className="mt-3 text-body-lg text-gray-600">
              We usually respond within one to two business days.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="space-y-8">
            <div>
              <h2 className="text-h2 font-bold tracking-tight text-ink">Contact Details</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <p className="font-semibold text-ink">General Inquiries</p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="focus-ring text-body text-gray-600 hover:text-secondary"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <p className="font-semibold text-ink">Degree Recognition</p>
                    <a
                      href={`mailto:${CONTACT.degreeEmail}`}
                      className="focus-ring text-body text-gray-600 hover:text-secondary"
                    >
                      {CONTACT.degreeEmail}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <WhatsappIcon className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <p className="font-semibold text-ink">WhatsApp</p>
                    <a
                      href={EXTERNAL_LINKS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring text-body text-gray-600 hover:text-secondary"
                    >
                      {CONTACT.whatsappDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <p className="font-semibold text-ink">Office</p>
                    <p className="text-body text-gray-600">{CONTACT.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <p className="font-semibold text-ink">Hours</p>
                    <p className="text-body text-gray-600">{CONTACT.hours}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CalendarClock className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <p className="font-semibold text-ink">Visits</p>
                    <p className="text-body text-gray-600">{CONTACT.visits}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-ink transition-colors hover:bg-primary hover:text-white"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-card">
              <iframe
                title="InterProFinland office location"
                src={CONTACT.mapEmbedSrc}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
