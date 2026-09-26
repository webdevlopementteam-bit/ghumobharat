import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Download,
  MapPin,
  MessageCircle,
  Sparkles,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  badgeStyles,
  destinations,
  formatINR,
  getDestination,
  inclusionIcons,
} from "../data";

const WHATSAPP = "https://wa.me/919999999999";

export function generateStaticParams() {
  return destinations.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getDestination(slug);

  if (!item) return {};

  return {
    title: `${item.title} · ${item.duration} | Ghumo Bharat`,
    description: item.summary,
  };
}

export default async function DestinationPage({ params }) {
  const { slug } = await params;
  const item = getDestination(slug);

  if (!item) notFound();

  const hasPrice = item.price && item.originalPrice;
  const discount = hasPrice
    ? Math.round((1 - item.price / item.originalPrice) * 100)
    : 0;
  const enquiry = `${WHATSAPP}?text=${encodeURIComponent(
    `Hi Ghumo Bharat, I'd like to book the ${item.title} (${item.duration}).`
  )}`;
  const others = destinations.filter((d) => d.id !== item.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f7f3e9] text-[#082f4f] selection:bg-[#ef8b19] selection:text-white">
      {/* NAVBAR */}
      <header className="w-full bg-[#062f50] px-4 py-4 md:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-[#062f50] px-5 py-3 shadow-xl">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4efe3] text-lg font-bold text-[#082f4f]">
              G
            </div>
            <div className="leading-none">
              <div className="text-sm font-black tracking-[0.18em] text-white">
                GHUMO
              </div>
              <div className="text-[10px] font-bold tracking-[0.25em] text-[#ef8b19]">
                BHARAT
              </div>
            </div>
          </Link>

          <Link
            href="/#destinations"
            className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-white"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">All Destinations</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative h-[420px] w-full overflow-hidden md:h-[520px]">
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061f35] via-[#082f4f]/45 to-[#082f4f]/10" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-12 md:pb-16 lg:px-8">
          <span
            className={`flex w-fit items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-lg ${
              badgeStyles[item.badgeColor] ?? badgeStyles.orange
            }`}
          >
            <Sparkles size={13} fill="currentColor" />
            {item.badge}
          </span>

          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            {item.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-white/85 md:text-base">
            <span className="flex items-center gap-2">
              <MapPin size={17} className="text-[#ef8b19]" />
              {item.region}
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays size={17} className="text-[#ef8b19]" />
              {item.duration}
            </span>
            <span className="flex items-center gap-2">
              <Utensils size={16} className="text-[#ef8b19]" />
              {item.meals}
            </span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="px-6 py-16 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_380px] lg:gap-14">
          {/* Left */}
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#ef8b19]">
              Overview
            </p>
            <p className="mt-4 text-lg leading-8 text-[#31516a]">
              {item.summary}
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#082f4f]/5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ef8b19] text-white">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#082f4f]/40">
                  Route
                </p>
                <p className="mt-1 font-bold text-[#082f4f]">{item.route}</p>
              </div>
            </div>

            {/* Highlights */}
            <h2 className="mt-14 font-serif text-3xl leading-tight tracking-tight text-[#082f4f] md:text-4xl">
              Trip <span className="text-[#ef8b19]">highlights</span>
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {item.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-[#082f4f]/5"
                >
                  <Sparkles size={16} className="shrink-0 text-[#ef8b19]" />
                  <span className="font-semibold text-[#082f4f]">{h}</span>
                </div>
              ))}
            </div>

            {/* Itinerary */}
            <h2 className="mt-14 font-serif text-3xl leading-tight tracking-tight text-[#082f4f] md:text-4xl">
              Day-by-day <span className="text-[#ef8b19]">itinerary</span>
            </h2>
            <ol className="relative mt-8 space-y-4 border-l-2 border-[#ef8b19]/25 pl-8">
              {item.days.map((d) => (
                <li
                  key={d.day}
                  className="relative rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#082f4f]/5"
                >
                  <span className="absolute -left-[41px] top-6 h-4 w-4 rounded-full border-[3px] border-[#f7f3e9] bg-[#ef8b19]" />
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ef8b19]">
                    {d.day}
                  </p>
                  <p className="mt-1 text-lg font-bold text-[#082f4f]">
                    {d.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#31516a]">
                    {d.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: booking card */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-[24px] bg-white p-6 shadow-[0_20px_50px_rgba(8,47,79,0.12)] ring-1 ring-[#082f4f]/5">
              {hasPrice ? (
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-3xl font-extrabold text-[#0f172a]">
                      {formatINR(item.price)}
                      <span className="ml-1 text-sm font-medium text-[#94a3b8]">
                        / person
                      </span>
                    </p>
                    <p className="text-sm text-[#94a3b8] line-through">
                      {formatINR(item.originalPrice)}
                    </p>
                  </div>
                  <span className="rounded-full bg-[#16a34a] px-3 py-1.5 text-xs font-extrabold text-white">
                    {discount}% OFF
                  </span>
                </div>
              ) : (
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
                    Price
                  </p>
                  <p className="text-2xl font-extrabold text-[#0f172a]">
                    On request
                  </p>
                </div>
              )}

              <div className="mt-6 space-y-3 border-t border-[#082f4f]/10 pt-6 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-[#64748b]">Duration</span>
                  <span className="text-right font-bold">{item.duration}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[#64748b]">Meals</span>
                  <span className="text-right font-bold">{item.meals}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[#64748b]">Region</span>
                  <span className="text-right font-bold">{item.region}</span>
                </div>
              </div>

              <p className="mt-6 text-[11px] font-black uppercase tracking-[0.18em] text-[#082f4f]/40">
                Inclusions
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.inclusions.map((name) => {
                  const { icon: Icon, color } = inclusionIcons[name];

                  return (
                    <span
                      key={name}
                      className="flex items-center gap-1.5 rounded-lg border border-[#ef8b19]/15 bg-[#fdf6ec] px-2.5 py-1.5 text-[13px] font-semibold text-[#1e293b]"
                    >
                      <Icon size={14} className={color} />
                      {name}
                    </span>
                  );
                })}
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={enquiry}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#e07b1f] px-6 py-4 font-bold text-white shadow-[0_10px_25px_rgba(224,123,31,0.35)] transition hover:bg-[#c96a12]"
                >
                  Book Now
                  <ArrowRight size={18} />
                </a>

                {item.pdf ? (
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-[#082f4f]/15 px-6 py-4 font-bold text-[#082f4f] transition hover:bg-[#082f4f]/5"
                  >
                    <Download size={18} />
                    Full Itinerary (PDF)
                  </a>
                ) : (
                  <Link
                    href={item.link}
                    className="flex items-center justify-center gap-2 rounded-xl border border-[#082f4f]/15 px-6 py-4 font-bold text-[#082f4f] transition hover:bg-[#082f4f]/5"
                  >
                    Explore the Full Experience
                    <ArrowRight size={18} />
                  </Link>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* OTHER JOURNEYS */}
      <section className="bg-[#eee8d9] px-6 py-16 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#082f4f] md:text-4xl">
              More <span className="text-[#ef8b19]">journeys</span>
            </h2>
            <Link
              href="/#destinations"
              className="flex items-center gap-2 text-sm font-bold text-[#082f4f] transition hover:text-[#ef8b19]"
            >
              View all
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((d) => (
              <Link
                key={d.id}
                href={`/destinations/${d.id}`}
                className="group overflow-hidden rounded-[20px] bg-white shadow-sm ring-1 ring-[#082f4f]/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#ef8b19]">
                    {d.region}
                  </p>
                  <p className="mt-1 text-lg font-bold text-[#082f4f]">
                    {d.title}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-[#475569]">
                    <CalendarDays size={15} className="text-[#ef8b19]" />
                    {d.duration}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#062f50] px-6 py-12 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-lg font-black tracking-[0.2em]">GHUMO</div>
            <div className="text-sm font-bold tracking-[0.25em] text-[#ef8b19]">
              BHARAT
            </div>
            <p className="mt-5 text-sm text-white/45">
              From Taj to Attar · Travel deeper into India.
            </p>
          </div>
          <div className="text-sm text-white/40">
            © {new Date().getFullYear()} Ghumo Bharat. All rights reserved.
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
      >
        <MessageCircle size={25} />
      </a>
    </main>
  );
}
