import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { values } from "@/lib/data/values";
import { team, chairperson } from "@/lib/data/team";
import { LinkedinIcon } from "@/components/icons/SocialIcons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind InterProFinland and learn about our mission, vision, values, and founding story.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" />

      {/* Our Story */}
      <section className="section-y bg-white">
        <div className="container-page mx-auto max-w-3xl text-center">
          <RevealOnScroll>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-secondary">
              Changing the Narrative
            </p>
            <h2 className="text-h2 md:text-h2-lg font-bold tracking-tight text-ink">
              Our Story
            </h2>
            <p className="mt-5 text-left text-body-lg text-gray-600">
              When our founder, Olivia Kumpula, moved to Finland, she spent
              the first few years trying to find her place in her new home
              country. Through her expat blog and YouTube channel, &lsquo;My
              Finland Story&rsquo;, she documented her life and experiences
              in Finland and shared tips for integrating into Finland&apos;s
              society and culture. She also started an interactive club on
              Clubhouse called &lsquo;The Finns and Foreigners Club&rsquo;.
            </p>
            <p className="mt-4 text-left text-body-lg text-gray-600">
              Through connections made in the club, she realized that almost
              all international professionals encounter similar challenges
              which hinder them from utilizing their skills and transitioning
              into the Finnish workforce. Although a number of resources are
              available, many internationals still have trouble locating
              these resources and applying them to their personal situations.
              In 2021, Olivia assembled a team of professionals and
              International Professionals Finland ry was established.
            </p>
            <a
              href="https://www.oliviakumpula.com"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary"
            >
              Read more at oliviakumpula.com <ArrowUpRight className="h-4 w-4" />
            </a>
          </RevealOnScroll>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-y bg-gray-50">
        <div className="container-page grid grid-cols-1 gap-6 md:grid-cols-2">
          <RevealOnScroll>
            <Card className="h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-btn bg-primary/10 text-primary">
                <Target className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h2 className="mt-5 text-h3-lg font-semibold text-ink">
                Our Mission
              </h2>
              <p className="mt-3 text-body-lg text-gray-600">
                Providing a support network and tailored guidance to help
                international professionals in Finland overcome barriers,
                utilize their skills, and build meaningful careers.
              </p>
            </Card>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <Card className="h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-btn bg-secondary/10 text-secondary">
                <Eye className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h2 className="mt-5 text-h3-lg font-semibold text-ink">
                Our Vision
              </h2>
              <p className="mt-3 text-body-lg text-gray-600">
                An inclusive Finland with a balanced workforce that thrives
                on both local and international expertise.
              </p>
            </Card>
          </RevealOnScroll>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="What We Stand For" title="Our Values" />
          <div className="mt-14 flex snap-x gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible">
            {values.map((value, i) => (
              <RevealOnScroll key={value.title} delay={i * 0.06} className="w-64 shrink-0 snap-start lg:w-auto">
                <Card hover={false} className="h-full">
                  <p className="text-sm font-semibold text-secondary">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-h3 font-semibold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-body text-gray-600">
                    {value.description}
                  </p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-y bg-gray-50">
        <div className="container-page mx-auto max-w-3xl text-center">
          <RevealOnScroll>
            <SectionHeading title="What We Do" />
            <p className="mt-5 text-body-lg text-gray-600">
              Through a diverse range of programs and services, we assist
              international professionals qualified for a profession abroad
              to overcome obstacles hindering them from utilizing their
              skills in Finland. We provide customised support as well as
              mentorship and networking opportunities. We also offer
              one-on-one guidance as they take huge career steps toward
              transitioning into the Finnish workforce and advancing their
              skillset to contribute to the society they now call home.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
                In English
              </p>
              <div className="overflow-hidden rounded-card">
                <video
                  controls
                  preload="none"
                  playsInline
                  className="aspect-video w-full bg-primary"
                  aria-label="About InterProFinland in 60 seconds, English"
                >
                  <source src="/assets/videos/about-us-en.mp4" type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
                In Finnish
              </p>
              <div className="overflow-hidden rounded-card">
                <video
                  controls
                  preload="none"
                  playsInline
                  className="aspect-video w-full bg-primary"
                  aria-label="About InterProFinland in 60 seconds, Finnish subtitles"
                >
                  <source src="/assets/videos/about-us-fi.mp4" type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Meet our Chairperson */}
      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Leadership" title="Meet Our Chairperson" />
          <RevealOnScroll delay={0.1} className="mx-auto mt-12 max-w-3xl">
            <Card className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src={chairperson.photo}
                  alt={chairperson.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-h3-lg font-semibold text-ink">
                  {chairperson.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-secondary">
                  {chairperson.role}
                </p>
                <p className="mt-3 text-body-lg text-gray-600">
                  {chairperson.bio}
                </p>
              </div>
            </Card>
          </RevealOnScroll>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section-y bg-gray-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="The People Behind It"
            title="Meet the Team"
            description="We are made up of an amazing team of staff, interns and volunteers, working either backstage or upfront to help bring the association's vision to light. You are welcome to join the team."
          />
          <div className="mx-auto mt-14 max-w-3xl space-y-6">
            {team.map((member, i) => (
              <RevealOnScroll key={member.name} delay={i * 0.05}>
                <Card className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-white">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h3 font-semibold text-ink">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-secondary">
                      {member.role}
                    </p>
                    <p className="mt-2 text-body text-gray-600">{member.bio}</p>
                  </div>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                  )}
                </Card>
              </RevealOnScroll>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button href="/get-involved" size="lg">
              Join the Team
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
