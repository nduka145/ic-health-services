import Image from "next/image";
import Link from "next/link";
import {
  Cloud,
  Network,
  LifeBuoy,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

/* ---------- Small typed card component ---------- */
type TeaserProps = {
  Icon: LucideIcon;
  title: string;
  blurb: string;
  href: string;
};

function Teaser({ Icon, title, blurb, href }: TeaserProps) {
  return (
    <article className="w-full max-w-md rounded-2xl border border-zinc-200 bg-[#001F3F] p-6 shadow-sm backdrop-blur transition hover:bg-[#002B5B] hover:shadow-md">
      <div className="mb-3 flex items-center gap-3">
        <span className="rounded-xl bg-white/20 p-3 text-white" aria-hidden="true">
          <Icon size={24} />
        </span>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-white/90">{blurb}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/30 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
        aria-label={`Learn more about ${title}`}
      >
        Learn more
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}

/* ---------- Page ---------- */
export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/hero/new-background.jpg"
          alt="Human and robotic hand connecting with AI circuitry in background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* improved overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/70 via-[#002B5B]/60 to-[#004080]/50"
          aria-hidden="true"
        />
        {/* subtle vignette for depth */}
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
        {/* Copy */}
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Pioneering Technology</h1>
            <p className="mx-auto mt-3 max-w-2xl text-white/90">
              Secure cloud, DevOps automation, and digital health solutions that deliver outcomes.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 rounded-2xl bg-white/90 px-5 py-3 text-sm font-semibold text-zinc-900 shadow hover:bg-white"
              >
                What we do
                <ArrowRight size={18} aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

{/* Intro & Teasers */}
<section className="container mx-auto px-4 py-12 lg:px-48">
  <p className="mx-auto max-w-3xl text-center text-zinc-700 font-semibold">
    We help regulated teams design, secure, and automate hybrid infrastructures across cloud and onpremise 
    environments so you can innovate faster, stay compliant, and reduce operational risk.
  </p>

        {/* Services teaser */}
        <div className="mt-10 grid grid-cols-1 place-items-center gap-6 md:grid-cols-3">
          <Teaser
            Icon={Network}
            title="CIO Advisory"
            blurb="Strategy, governance, and vendor selection translated into measurable business results."
            href="/what-we-do#cio-advisory"
          />
          <Teaser
            Icon={Cloud}
            title="Cloud & DevOps"
            blurb="Secure landing zones, CI/CD, and infra-as-code to deliver reliably at scale."
            href="/what-we-do#cloud-devops"
          />
          <Teaser
            Icon={LifeBuoy}
            title="Health IT"
            blurb="Interoperability and reliability engineering tailored to healthcare and compliance."
            href="/what-we-do#health-it"
          />
        </div>

        {/* Trust strip */}
        <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-zinc-200 bg-white/70 p-5 text-center text-sm text-zinc-600">
          <span className="font-semibold text-zinc-900">Results:</span> –30% cloud spend in 90 days •
          99.95% uptime • STIG/Policy-as-Code pipelines
        </div>

        {/* Secondary CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg"
          >
            Schedule a Free Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}