import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { EXTERNAL_LINKS } from "@/lib/constants";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icons/SocialIcons";

const socialLinks = [
  { label: "Facebook", href: EXTERNAL_LINKS.facebookPage, Icon: FacebookIcon },
  { label: "Instagram", href: EXTERNAL_LINKS.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: EXTERNAL_LINKS.linkedin, Icon: LinkedinIcon },
];

export function NewsletterCTA() {
  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <RevealOnScroll className="mx-auto max-w-xl text-center">
          <h2 className="text-h2 font-bold tracking-tight text-ink">Stay Connected</h2>
          <p className="mt-3 text-body-lg text-gray-600">
            Get program updates, event invites, and community stories in your
            inbox.
          </p>
          <div className="mt-8">
            <NewsletterForm />
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
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
        </RevealOnScroll>
      </div>
    </section>
  );
}
