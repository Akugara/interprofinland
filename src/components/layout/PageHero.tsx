import Link from "next/link";
import { ChevronRight } from "lucide-react";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumbLabel?: string;
};

export function PageHero({ title, subtitle, breadcrumbLabel }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white pb-14 pt-32 md:pt-36">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-secondary/[0.07] blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative text-center">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center justify-center gap-1.5 text-sm text-gray-400">
          <Link href="/" className="focus-ring hover:text-secondary">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-gray-600">{breadcrumbLabel ?? title}</span>
        </nav>
        <h1 className="text-h1 md:text-h1-lg font-bold tracking-tight text-primary">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-gray-600">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
