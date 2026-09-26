"use client";

import {
  ArrowRight,
  CalendarDays,
  Car,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  Flower2,
  HandHeart,
  MapPin,
  Menu,
  MessageCircle,
  Play,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import DestinationsSection from "./DestinationsSection";

const navLinks = [
  { href: "#experience", label: "Experience", icon: Flower2 },
  { href: "#destinations", label: "Destinations", icon: MapPin },
  { href: "#journey", label: "Journey", icon: Route },
  { href: "#guide", label: "Your Guide", icon: Users },
];

const oneDay = [
  {
    time: "10:00 AM",
    title: "Depart Agra",
    text: "Begin the road journey from Agra towards Kannauj.",
  },
  {
    time: "Around Lunch",
    title: "Arrive in Kannauj",
    text: "Lunch in Kannauj before beginning the fragrance-focused experience.",
  },
  {
    time: "Post Lunch",
    title: "Traditional Attar Visit",
    text: "Visit a traditional perfume unit and discover rose, jasmine and mitti attar.",
  },
  {
    time: "Afternoon",
    title: "Perfume Market",
    text: "Explore local perfume vendors and the fragrance trade environment.",
  },
  {
    time: "After Visits",
    title: "Tea Break",
    text: "Pause for tea after the factory and market experience.",
  },
  {
    time: "Thereafter",
    title: "Return to Agra",
    text: "Depart Kannauj and travel back towards Agra.",
  },
];

const extendedDays = [
  {
    day: "DAY 01",
    title: "Arrival, Perfumer Connection & Heritage",
    items: [
      "Depart Agra / Lucknow after lunch",
      "Hotel check-in and settle in",
      "Hi-tea with a perfumer family",
      "Evening visit to Gauri Shankar Temple",
    ],
  },
  {
    day: "DAY 02",
    title: "From Flower Fields to Attar",
    items: [
      "Early morning rose / jasmine flower-field visit",
      "Breakfast and freshen up",
      "Traditional attar experience",
      "Kannauj perfume market",
      "Incense-stick factory visit",
      "Dinner at the hotel",
    ],
  },
  {
    day: "DAY 03",
    title: "Breakfast & Departure",
    items: [
      "Breakfast",
      "Hotel check-out",
      "Continue towards Agra or Lucknow",
    ],
  },
];

const attarProcess = [
  {
    step: "01",
    title: "Flower",
    text: "Fresh rose and jasmine botanicals gathered at dawn.",
    image: "/flowerfield.jpg",
    position: "65% 95%",
    size: "230%",
  },
  {
    step: "02",
    title: "Deg",
    text: "Petals are slow-distilled inside a traditional copper still.",
    image: "/traditional attar.jpg",
    position: "78% 42%",
    size: "320%",
  },
  {
    step: "03",
    title: "Chonga",
    text: "A bamboo pipe carries the fragrant vapour onward.",
    image: "/traditional attar.jpg",
    position: "8% 8%",
    size: "320%",
  },
  {
    step: "04",
    title: "Bhapka",
    text: "The receiver captures and condenses the fragrance.",
    image: "/traditional attar.jpg",
    position: "2% 100%",
    size: "320%",
  },
  {
    step: "05",
    title: "Attar",
    text: "The final essence — centuries of craft in a single drop.",
    image: "/traditional attar.jpg",
    position: "8% 68%",
    size: "320%",
  },
];

const confirmations = [
  "Final pickup point and departure time",
  "Vehicle type and confirmed group size",
  "Hotel and meal arrangements for the extended programme",
  "Availability and coordination of flower-field visits",
  "Factory, perfumer-family and perfume-market visit coordination",
  "Any dietary, mobility or other special guest requirements",
];

const audiences = [
  {
    title: "Culture Seekers",
    text: "For travellers looking for authentic Indian craft and living heritage.",
  },
  {
    title: "Families",
    text: "A meaningful short escape from Agra with something different to discover.",
  },
  {
    title: "Students & Groups",
    text: "A practical look at heritage, agriculture, craftsmanship and industry.",
  },
  {
    title: "Fragrance Lovers",
    text: "A rare opportunity to experience Kannauj's perfume culture at its source.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("one-day");
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "How long does the Agra to Kannauj journey take?",
      a: "The supplied programme estimates approximately 2.5 hours by car and approximately 4 hours by bus. Final travel time should be confirmed operationally.",
    },
    {
      q: "Can I choose between a one-day and extended experience?",
      a: "Yes. The programme includes a compact one-day Kannauj Fragrance Escape as well as a two-night immersive experience.",
    },
    {
      q: "What kind of attar will I experience?",
      a: "The programme specifically highlights traditional rose, jasmine and mitti (clay) attar.",
    },
    {
      q: "Who guides the experience?",
      a: "The journey is personally guided by Mr. Shailendra Mehrotra, who brings more than 25 years of guiding experience.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f3e9] text-[#082f4f] selection:bg-[#ef8b19] selection:text-white">
      {/* NAVBAR */}
     <header className="relative z-20 w-full bg-[#faf6ec] m-0 p-0">
  <nav className="relative flex w-full items-center justify-between bg-white/95 py-1.5 pl-2 pr-3 shadow-[0_8px_24px_rgba(8,47,79,0.1)] backdrop-blur-sm md:pl-3 md:pr-6">

    {/* Logo */}
    <a href="#" className="badge-scallop relative flex shrink-0 items-center gap-2.5 rounded-[18px] bg-[#fffdf7] py-1.5 pl-2.5 pr-4 md:pl-3 md:pr-5">
      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-[#ef8b19]/30">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #f9c876 0%, #ef8b19 38%, #c9601c 58%, #082f4f 100%)",
          }}
        />
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <circle cx="50" cy="22" r="6" fill="#fff6e2" opacity="0.9" />
          <path
            d="M14 88 L14 64 L20 64 L20 52 L26 52 L26 42 Q26 34 33 34 Q33 24 42 24 L42 20 Q42 15 50 15 Q58 15 58 20 L58 24 Q67 24 67 34 Q74 34 74 42 L74 52 L80 52 L80 64 L86 64 L86 88 Z"
            fill="#fdf6e8"
          />
          <rect x="30" y="70" width="6" height="18" fill="#c9601c" opacity="0.55" />
          <rect x="64" y="70" width="6" height="18" fill="#c9601c" opacity="0.55" />
        </svg>
      </div>

      <div className="leading-none">
        <div className="font-serif text-sm font-bold tracking-[0.04em] text-[#082f4f]">
          GHUMO
        </div>

        <div className="font-serif text-sm font-bold tracking-[0.04em] text-[#ef8b19]">
          BHARAT
        </div>

        <svg viewBox="0 0 90 8" className="mt-0.5 h-1.5 w-[60px]">
          <path d="M0 4 Q22 -2 45 4 T90 4" stroke="#ef8b19" strokeWidth="2.4" fill="none" />
          <path d="M0 5.5 Q22 -0.5 45 5.5 T90 5.5" stroke="#ffffff" strokeWidth="1.6" fill="none" />
          <path d="M0 7 Q22 1 45 7 T90 7" stroke="#0a8a4a" strokeWidth="1.6" fill="none" />
        </svg>
      </div>
    </a>

    {/* Desktop Menu */}
    <div className="hidden items-center md:flex">
      {navLinks.map((link, index) => {
        const Icon = link.icon;

        return (
          <div key={link.href} className="flex items-center">
            {index !== 0 && <span className="mx-3 h-6 w-px bg-[#082f4f]/10 lg:mx-4" />}

            <a
              href={link.href}
              className="group flex items-center gap-1.5 px-1 text-[#082f4f]"
            >
              <Icon
                size={15}
                strokeWidth={1.8}
                className={
                  index === 0
                    ? "text-[#ef8b19] transition group-hover:scale-110"
                    : "text-[#082f4f]/70 transition group-hover:scale-110 group-hover:text-[#ef8b19]"
                }
              />

              <span className="flex items-center gap-0.5 text-sm font-semibold text-[#082f4f]/85 transition group-hover:text-[#082f4f]">
                {link.label}
                <ChevronDown size={13} strokeWidth={2} className="text-[#082f4f]/40" />
              </span>
            </a>
          </div>
        );
      })}
    </div>

    {/* CTA */}
    <a
      href="#book"
      className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#f3a349] to-[#d9711a] py-2 pl-2 pr-4 text-sm font-bold text-white shadow-[0_10px_25px_rgba(217,113,26,0.35)] transition hover:shadow-[0_14px_32px_rgba(217,113,26,0.45)] md:flex"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
        <Compass size={14} strokeWidth={2} />
      </span>
      Plan Your Journey
      <ArrowRight size={14} strokeWidth={2.2} />
    </a>

    {/* Mobile Menu Toggle */}
    <button
      type="button"
      onClick={() => setMenuOpen((open) => !open)}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#082f4f]/15 text-[#082f4f] md:hidden"
    >
      {menuOpen ? <X size={18} /> : <Menu size={18} />}
    </button>

  </nav>

  {/* Mobile Menu Drawer */}
  {menuOpen && (
    <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-[#082f4f]/10 bg-white p-4 shadow-xl md:hidden">
      <div className="flex flex-col gap-1">
        {navLinks.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#082f4f]/80 transition hover:bg-[#082f4f]/5 hover:text-[#082f4f]"
            >
              <Icon size={17} strokeWidth={1.8} className="text-[#ef8b19]" />
              {link.label}
            </a>
          );
        })}

        <a
          href="#book"
          onClick={() => setMenuOpen(false)}
          className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#f3a349] to-[#d9711a] px-4 py-3 text-center text-sm font-bold text-white"
        >
          <Compass size={16} />
          Plan Your Journey
        </a>
      </div>
    </div>
  )}
</header>
      {/* HERO */}
 <section className="w-full overflow-hidden">
  {/* Desktop Banner */}
  <img
    src="/desktopbanner.webp"
    alt="Ghumo Bharat - Kannauj Fragrance Trail"
    className="hidden w-full h-auto md:block "
  />

  {/* Mobile Banner */}
  <img
    src="/mobilebanner.webp"
    alt="Ghumo Bharat - Kannauj Fragrance Trail"
    className="block w-full h-auto md:hidden"
  />
</section>

      {/* DESTINATIONS */}
      <DestinationsSection />

      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden bg-[#fdf8ee]">
        {/* ================= DESKTOP ================= */}
        <div className="relative mx-auto hidden max-w-[1850px] md:block">
          <div className="relative w-full" style={{ aspectRatio: "1850 / 850" }}>
            <img
              src="/aboutbanner.webp"
              alt="A traveller looking out over Amber Fort, with the Taj Mahal, a Kerala houseboat, the Thar desert and the Himalayas"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Legibility scrim behind the text column */}
            <div className="absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-[#fdf8ee] via-[#fdf8ee]/85 to-transparent" />

            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-[44%] pl-[6%] pr-6">
                <div className="mb-3 flex items-center gap-4">
                  <Flower2 size={22} strokeWidth={1.6} className="text-[#ef8b19]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#ef8b19]">
                    About Ghumo Bharat
                  </span>
                  <span className="h-px flex-1 bg-[#ef8b19]/50" />
                </div>

                <h2 className="font-serif text-4xl leading-[1.05] tracking-tight lg:text-5xl xl:text-[54px]">
                  <span className="text-[#082f4f]">Travel deeper</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#ef8b19] to-[#b3311c] bg-clip-text text-transparent">
                    into India.
                  </span>
                </h2>

                <div className="my-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#ef8b19]/50" />
                  <Flower2 size={14} className="text-[#ef8b19]" />
                  <span className="h-px w-10 bg-[#ef8b19]/50" />
                </div>

                <p className="max-w-md text-[15px] leading-7 text-[#31516a] xl:text-base xl:leading-8">
                  Ghumo Bharat designs slow, curated journeys across
                  India&apos;s heritage, flavours and living traditions —
                  from the forts of Rajasthan to the backwaters of Kerala.
                  Every itinerary is personally guided, not mass-produced,
                  so you experience India the way people who call it home
                  actually see it.
                </p>

                <div className="mt-6 flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fdf0dd] shadow-sm">
                    <HandHeart size={18} strokeWidth={1.7} className="text-[#ef8b19]" />
                  </div>

                  <div>
                    <p className="font-serif text-base italic text-[#082f4f]">
                      Dekho Apna Desh.
                    </p>
                    <p className="mt-0.5 text-sm leading-5 text-[#31516a]">
                      Bano Desh Ka Mehmaan — see your own country, become
                      India&apos;s guest.
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-6">
                  <a
                    href="#destinations"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#082f4f] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#061f35]"
                  >
                    Explore Our Journeys
                    <ArrowRight size={17} />
                  </a>

                
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="relative overflow-hidden md:hidden" style={{ minHeight: "760px" }}>
          <img
            src="/mobileaboutbanner.png"
            alt="Sunrise over the Himalayas, with a waterfall feeding a turquoise river"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />

          {/* Legibility scrim — content sits on the photo, with a short clear reveal at the bottom */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #fdf8ee 0%, #fdf8ee 34%, rgba(253,248,238,0.92) 46%, rgba(253,248,238,0.68) 58%, rgba(253,248,238,0.4) 70%, rgba(253,248,238,0.15) 82%, rgba(253,248,238,0) 90%)",
            }}
          />

          <div className="relative px-6 pb-8 pt-10">
            <div className="mb-3 flex items-center gap-3">
              <Flower2 size={20} strokeWidth={1.6} className="text-[#ef8b19]" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#ef8b19]">
                About Ghumo Bharat
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-[1.05] tracking-tight">
              <span className="text-[#082f4f]">Travel deeper</span>
              <br />
              <span className="bg-gradient-to-r from-[#ef8b19] to-[#b3311c] bg-clip-text text-transparent">
                into India.
              </span>
            </h2>

            <div className="my-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#ef8b19]/50" />
              <Flower2 size={14} className="text-[#ef8b19]" />
              <span className="h-px w-10 bg-[#ef8b19]/50" />
            </div>

            <p className="text-base leading-7 text-[#31516a]">
              Ghumo Bharat designs slow, curated journeys across India&apos;s
              heritage, flavours and living traditions — from the forts of
              Rajasthan to the backwaters of Kerala. Every itinerary is
              personally guided, not mass-produced, so you experience India
              the way people who call it home actually see it.
            </p>

            <div className="mt-6 flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fdf0dd] shadow-sm">
                <HandHeart size={18} strokeWidth={1.7} className="text-[#ef8b19]" />
              </div>

              <div>
                <p className="font-serif text-base italic text-[#082f4f]">
                  Dekho Apna Desh.
                </p>
                <p className="mt-0.5 text-sm leading-5 text-[#31516a]">
                  Bano Desh Ka Mehmaan — see your own country, become
                  India&apos;s guest.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-6">
              <a
                href="#destinations"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#082f4f] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#061f35]"
              >
                Explore Our Journeys
                <ArrowRight size={17} />
              </a>

             
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
    <section
  id="experience"
  className="relative overflow-hidden bg-[#f7f0e3] px-6 pt-16 md:pt-20 lg:px-8"
>
  {/* Main Content */}
  <div className="relative z-10 mx-auto max-w-7xl">
    <div>

      {/* Eyebrow */}
      <div className="mb-7 flex items-center gap-4">
        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#ef8b19]">
          What You Will Experience
        </span>

        <span className="h-px w-16 bg-[#ef8b19]" />
      </div>

      {/* Main Heading */}
      <h2 className="w-full font-serif text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl text-[#082f4f]">
        A journey you{" "}
        <span className="text-[#ef8b19]">can smell, see &</span> remember.
      </h2>

      {/* Description */}
      <p className="mt-6 w-full max-w-3xl text-base leading-8 text-[#31516a] md:text-lg">
        Kannauj is not simply another destination. It is an experience
        built around India&apos;s traditional attar culture — connecting
        travellers with flowers, craftsmen, perfume markets and living
        heritage.
      </p>

      {/* Small divider */}
      <div className="mt-8 h-[3px] w-16 rounded-full bg-[#ef8b19]" />

      {/* Supporting statement */}
      <div className="mt-8 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#082f4f]/10 bg-white/70 shadow-sm backdrop-blur-sm">
          <Flower2
            size={19}
            strokeWidth={1.7}
            className="text-[#ef8b19]"
          />
        </div>

        <div>
          <p className="font-serif text-lg italic text-[#082f4f]">
            Not just a destination.
          </p>

          <p className="mt-1 text-sm leading-6 text-[#31516a]">
            An experience that stays with you.
          </p>
        </div>
      </div>
    </div>

    {/* ================= EXPERIENCE SHOWCASE ================= */}
    <div className="mt-10 grid  items-start gap-2  md:mt-14 md:grid-cols-4 md:gap-6">
      {["/image1.png", "/image2.png", "/image3.png", "/image4.png"].map(
        (src, index) => (
          <div
            key={src}
            className={`group rounded-[28px] bg-white/95 p-2.5 shadow-[0_20px_50px_rgba(8,47,79,0.15)] ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_65px_rgba(8,47,79,0.25)] ${
              index % 2 === 1 ? "md:mt-10" : ""
            }`}
          >
            <div className="overflow-hidden rounded-[20px]">
              <img
                src={src}
                alt="Kannauj fragrance trail experience"
                className="aspect-[27/50] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        )
      )}
    </div>

    {/* ================= BOTTOM INFO BAR ================= */}
    <div className="mt-10 overflow-hidden rounded-[28px] border border-white/20 bg-[#082f4f]/95 shadow-2xl backdrop-blur-xl md:mt-14">
      <div className="grid divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">

        {/* Route */}
        <div className="flex items-center gap-4 px-6 py-5 md:px-7">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ef8b19] text-white">
            <MapPin size={19} />
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
              Route
            </p>

            <p className="mt-1 text-sm font-bold text-white">
              Agra → Kannauj
            </p>

            <p className="text-xs text-white/50">
              Curated Heritage Route
            </p>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-4 px-6 py-5 md:px-7">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ef8b19] text-white">
            <CalendarDays size={19} />
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
              Duration
            </p>

            <p className="mt-1 text-sm font-bold text-white">
              1 Day / 2 Nights
            </p>

            <p className="text-xs text-white/50">
              Flexible options
            </p>
          </div>
        </div>

        {/* Groups */}
        <div className="flex items-center gap-4 px-6 py-5 md:px-7">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ef8b19] text-white">
            <Users size={19} />
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
              Experience
            </p>

            <p className="mt-1 text-sm font-bold text-white">
              Small Groups
            </p>

            <p className="text-xs text-white/50">
              Personalised journey
            </p>
          </div>
        </div>

        {/* Guide */}
        <div className="flex items-center gap-4 px-6 py-5 md:px-7">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ef8b19] text-white">
            <Star size={19} />
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
              Expertise
            </p>

            <p className="mt-1 text-sm font-bold text-white">
              25+ Years
            </p>

            <p className="text-xs text-white/50">
              Guiding experience
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* ================= HERITAGE STRIP ================= */}
  <div className="relative -mx-6 mt-8 h-[150px] md:mt-10 md:h-[220px] lg:-mx-8">
    <img
      src="/intro.webp"
      alt="Taj Mahal at sunrise on the Yamuna, the journey's starting point"
      className="absolute inset-0 h-full w-full object-cover object-bottom"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#f7f0e3] via-transparent to-[#eee8d9]" />
  </div>
</section>

      {/* JOURNEY SELECTOR */}
<section
  id="journey"
  className="relative overflow-hidden bg-[#f7f3e9] px-6 py-24 md:py-32 lg:px-8"
>
  {/* Subtle background decoration */}
  <div className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-[#ef8b19]/5 blur-3xl" />
  <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#082f4f]/5 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">

    {/* ================= HEADER ================= */}
    <div className="flex flex-col gap-8">

      <div>
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-[#ef8b19]" />
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#ef8b19]">
            Choose Your Pace
          </p>
        </div>

        <h2 className="font-serif text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl text-[#082f4f]">
          One destination.{" "}
          <span className="text-[#ef8b19]">Two ways to experience it.</span>
        </h2>
      </div>

      {/* Premium Tabs */}
      <div className="inline-flex w-fit rounded-full border border-[#082f4f]/10 bg-white/70 p-1.5 shadow-[0_12px_35px_rgba(8,47,79,0.08)] backdrop-blur">
        <button
          onClick={() => setActiveTab("one-day")}
          className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 md:px-6 ${
            activeTab === "one-day"
              ? "bg-[#082f4f] text-white shadow-[0_8px_20px_rgba(8,47,79,0.22)]"
              : "text-[#082f4f] hover:bg-[#082f4f]/5"
          }`}
        >
          <span className="text-base">☀</span>
          1-Day Escape
        </button>

        <button
          onClick={() => setActiveTab("extended")}
          className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 md:px-6 ${
            activeTab === "extended"
              ? "bg-[#082f4f] text-white shadow-[0_8px_20px_rgba(8,47,79,0.22)]"
              : "text-[#082f4f] hover:bg-[#082f4f]/5"
          }`}
        >
          <span className="text-base">☾</span>
          2-Night Immersive
        </button>
      </div>
    </div>

    {/* ================= 1 DAY ================= */}
    {activeTab === "one-day" ? (
      <div className="mt-14 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">

        {/* ================= LEFT DECORATIVE CARD ================= */}
        <div className="group relative min-h-[620px] overflow-hidden rounded-[38px] bg-gradient-to-br from-[#0c3a5e] via-[#082f4f] to-[#061f35] shadow-[0_25px_70px_rgba(8,47,79,0.18)]">

          {/* Background image */}
          <img
            src="/traditional attar.jpg"
            alt="Traditional attar being prepared in Kannauj"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-70 transition-transform duration-700 group-hover:scale-105"
          />

          {/* Colour + legibility overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#061f35] via-[#082f4f]/75 to-[#082f4f]/35" />

          {/* Decorative pattern */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />

          {/* Decorative rings */}
          <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border border-[#ef8b19]/25" />
          <div className="absolute -right-4 -top-4 h-52 w-52 rounded-full border border-white/10" />
          <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full border border-white/10" />

          {/* Soft highlight */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/20 to-transparent" />

          {/* Content */}
          <div className="relative flex min-h-[620px] flex-col justify-end p-8 md:p-10">

            {/* Badge */}
            <span className="mb-5 w-fit rounded-full bg-[#ef8b19] px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-lg">
              01 Day
            </span>

            {/* Heading */}
            <h3 className="font-serif text-5xl leading-[0.95] text-white md:text-6xl">
              Fragrance
              <br />
              Escape
            </h3>

            {/* Decorative line */}
            <div className="mt-5 flex items-center gap-2">
              <span className="h-px w-14 bg-[#ef8b19]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#ef8b19]" />
            </div>

            <p className="mt-5 max-w-md text-[15px] leading-7 text-white/75">
              A compact heritage escape connecting Agra with the living
              perfume traditions of Kannauj.
            </p>

            {/* Bottom Meta */}
            <div className="mt-8 grid grid-cols-2 border-t border-white/20 pt-6">

              <div className="flex items-start gap-3 border-r border-white/15 pr-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ef8b19]/70">
                  <Car size={18} className="text-[#ef8b19]" />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    By Car
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Approx. 2.5 hrs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pl-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ef8b19]/70">
                  <MapPin size={18} className="text-[#ef8b19]" />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Agra → Kannauj
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Return to Agra
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ================= RIGHT TIMELINE ================= */}
        <div className="relative lg:py-2">

          {/* Timeline vertical line */}
          <div className="absolute bottom-6 left-[20px] top-6 w-px bg-gradient-to-b from-[#ef8b19]/20 via-[#082f4f]/15 to-[#ef8b19]/20" />

          <div className="space-y-5">

            {oneDay.map((item, index) => (
              <div
                key={item.title}
                className="group relative pl-[52px]"
              >

                {/* Number */}
                <div className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[#f7f3e9] bg-[#ef8b19] text-[10px] font-black text-white shadow-[0_5px_18px_rgba(239,139,25,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#082f4f]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Card */}
                <div className="relative overflow-hidden rounded-[26px] border border-[#082f4f]/8 bg-white px-6 py-6 shadow-[0_8px_30px_rgba(8,47,79,0.07)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_45px_rgba(8,47,79,0.12)] md:px-7">

                  {/* Accent */}
                  <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#ef8b19] opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <div className="min-w-0">
                      <h3 className="text-[17px] font-bold tracking-tight text-[#082f4f] md:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-[#31516a]">
                        {item.text}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 md:border-l md:border-[#082f4f]/10 md:pl-6">
                      <Clock3
                        size={14}
                        className="text-[#ef8b19]"
                      />

                      <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ef8b19]">
                        {item.time}
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

    ) : (

      /* ================= EXTENDED ================= */
      <div className="mt-14 space-y-5">

        {extendedDays.map((day, index) => (
          <div
            key={day.day}
            className="group overflow-hidden rounded-[30px] border border-[#082f4f]/8 bg-white shadow-[0_8px_30px_rgba(8,47,79,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(8,47,79,0.1)]"
          >

            <div className="grid lg:grid-cols-[220px_1fr]">

              {/* Day */}
              <div
                className={`relative flex min-h-[170px] flex-col justify-center overflow-hidden p-7 ${
                  index === 0
                    ? "bg-[#ef8b19]"
                    : "bg-[#082f4f]"
                }`}
              >

                {/* Decorative circle */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/10" />
                <div className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full border border-white/10" />

                <span className="relative text-[10px] font-black uppercase tracking-[0.25em] text-white/60">
                  {day.day}
                </span>

                <h3 className="relative mt-3 font-serif text-3xl text-white">
                  {index === 0
                    ? "Arrival"
                    : index === 1
                      ? "Discovery"
                      : "Departure"}
                </h3>
              </div>

              {/* Details */}
              <div className="p-7 md:p-9">

                <h3 className="text-xl font-bold text-[#082f4f] md:text-2xl">
                  {day.title}
                </h3>

                <div className="mt-6 grid gap-3 md:grid-cols-2">

                  {day.items.map((item) => (
                    <div
                      key={item}
                      className="group/item flex items-start gap-3 rounded-2xl bg-[#f7f3e9] p-4 transition-colors hover:bg-[#ef8b19]/10"
                    >
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                        <Check
                          size={15}
                          className="text-[#ef8b19]"
                        />
                      </div>

                      <span className="text-sm leading-6 text-[#31516a]">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}

  </div>
</section>

      {/* ATTAR STORY */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1f38] via-[#081527] to-[#050f1e] px-6 py-24 text-white md:py-32 lg:px-8">

        {/* Subtle dot texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* Left atmospheric photo bleed */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[40%] md:block">
          <img
            src="/traditional attar.jpg"
            alt=""
            className="h-full w-full object-cover object-left opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#081527]/70 to-[#081527]" />
        </div>

        {/* Right decorative flourish + Kannauj mark */}
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[36%] md:block">
          <svg
            viewBox="0 0 400 500"
            fill="none"
            className="absolute inset-0 h-full w-full opacity-[0.14]"
          >
            <path
              d="M110 470 L110 300 Q110 260 150 260 L190 260 Q220 260 220 230 L220 120"
              stroke="#d8b979"
              strokeWidth="1.5"
            />
            <path
              d="M400 500 L400 350 Q260 350 260 250 L260 40"
              stroke="#d8b979"
              strokeWidth="1.5"
            />
            <circle cx="220" cy="105" r="16" stroke="#d8b979" strokeWidth="1.5" />
            <circle cx="260" cy="26" r="12" stroke="#d8b979" strokeWidth="1.5" />
            <path
              d="M60 500 Q60 400 140 380 Q210 360 230 470"
              stroke="#d8b979"
              strokeWidth="1.5"
            />
          </svg>

          <div className="absolute right-10 top-12 text-right lg:right-16">
            <p className="font-script text-5xl leading-none text-[#d8b979]">
              Kannauj
            </p>
            <div className="ml-auto mt-4 h-px w-16 bg-[#d8b979]/40" />
            <p className="mt-3 text-[11px] font-bold uppercase leading-relaxed tracking-[0.25em] text-[#d8b979]/70">
              India&apos;s
              <br />
              Fragrance
              <br />
              Capital
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl text-center">

          {/* Top flourish */}
          <Sparkles size={22} strokeWidth={1.5} className="mx-auto text-[#d8b979]" />

          {/* Eyebrow */}
          <div className="mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#d8b979]/50" />
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#d8b979]">
              The Heart of the Journey
            </p>
            <span className="h-px w-10 bg-[#d8b979]/50" />
          </div>

          {/* Heading */}
          <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            The art of{" "}
            <span className="bg-gradient-to-r from-[#f3d9a4] via-[#d8b979] to-[#c9a24d] bg-clip-text text-transparent">
              traditional attar.
            </span>
          </h2>

          {/* Small ornamental divider */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d8b979]/40" />
            <Flower2 size={14} className="text-[#d8b979]" />
            <span className="h-px w-10 bg-[#d8b979]/40" />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/65">
            Rose. Jasmine. Mitti. From flower to final essence, Kannauj&apos;s
            perfumers still follow the same centuries-old distillation
            process.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Rose", "Jasmine", "Mitti"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#d8b979]/30 bg-white/5 px-6 py-2.5 text-sm font-bold text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative mx-auto mt-20 max-w-6xl">
          <div className="absolute left-0 right-0 top-12 hidden border-t-2 border-dotted border-[#d8b979]/30 md:block" />

          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
            {attarProcess.map((item, index) => {
              const isLast = index === attarProcess.length - 1;

              return (
                <div
                  key={item.step}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div
                    role="img"
                    aria-label={item.title}
                    className={`relative h-30 w-30 shrink-0 overflow-hidden rounded-full bg-[#0c3a5e] shadow-[0_15px_35px_rgba(0,0,0,0.45)] ring-2 ring-offset-4 transition-transform duration-500 group-hover:-translate-y-1 ${
                      isLast
                        ? "ring-[#ef8b19] ring-offset-[#081527]"
                        : "ring-[#d8b979]/70 ring-offset-[#081527]"
                    }`}
                    style={{
                      backgroundImage: `url('${item.image}')`,
                      backgroundSize: item.size,
                      backgroundPosition: item.position,
                    }}
                  >
                    <span
                      className={`absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#081527] text-[10px] font-black ${
                        isLast
                          ? "bg-[#ef8b19] text-white"
                          : "bg-[#f3e6c8] text-[#081527]"
                      }`}
                    >
                      {item.step}
                    </span>
                  </div>

                  {!isLast && (
                    <ArrowRight
                      size={16}
                      className="absolute left-[calc(50%+3rem)] top-12 hidden -translate-y-1/2 text-[#d8b979]/60 md:block"
                    />
                  )}

                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>

                  <div className="mx-auto mt-2 h-px w-8 bg-[#d8b979]/50" />

                  <p className="mt-2 max-w-[12rem] text-sm leading-6 text-white/55">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GUIDE */}
      <section id="guide" className="px-6 py-24 md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[40px] bg-[#eee8d9] lg:grid-cols-[0.75fr_1.25fr]">
            <div className="relative flex min-h-[480px] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0c3a5e] via-[#082f4f] to-[#061f35] p-10">
              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
                  backgroundSize: "22px 22px",
                }}
              />

              <div className="absolute -right-14 -top-14 h-56 w-56 rounded-full border border-white/10" />
              <div className="absolute -bottom-20 -left-14 h-64 w-64 rounded-full border border-[#ef8b19]/20" />

              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-4 border-[#ef8b19] bg-[#0c3a5e] font-serif text-5xl font-bold text-white shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
                SM
              </div>

              <p className="relative mt-6 text-center text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                Shailendra Mehrotra
              </p>

              <div className="relative mt-3 flex items-center gap-1.5 text-[#ef8b19]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#ef8b19]" />
                ))}
              </div>
            </div>

            <div className="p-8 md:p-12 lg:p-16">
              <p className="eyebrow">LOCAL KNOWLEDGE MATTERS</p>

              <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl text-[#082f4f]">
                Meet your guide.
              </h2>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#082f4f] px-5 py-3 text-sm font-bold text-white">
                <Star size={16} className="fill-[#ef8b19] text-[#ef8b19]" />
                25+ years of guiding experience
              </div>

              <h3 className="mt-10 text-3xl font-black text-[#082f4f]">
                Mr Shailendra Mehrotra
              </h3>

              <p className="mt-5 text-lg leading-8 text-[#31516a]">
                A seasoned guide bringing depth, context and personal
                storytelling to the journey — helping guests connect with
                Kannauj beyond the usual tourist route.
              </p>

              <div className="mt-9 grid gap-3">
                {[
                  "Local insight",
                  "Heritage storytelling",
                  "Smooth guest coordination",
                  "Personal travel experience",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white p-4"
                  >
                    <Check size={18} className="text-[#ef8b19]" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRE-DEPARTURE CONFIRMATION */}
      <section className="px-6 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-[#082f4f]/10 bg-white shadow-[0_20px_60px_rgba(8,47,79,0.08)]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col justify-center bg-[#eee8d9] p-8 md:p-12 lg:p-14">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082f4f] text-[#ef8b19]">
                <ShieldCheck size={26} strokeWidth={1.8} />
              </div>

              <p className="mt-7 eyebrow">CONFIRMED BEFORE EVERY DEPARTURE</p>

              <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl text-[#082f4f]">
                Every detail,{" "}
                <span className="text-[#ef8b19]">arranged in advance.</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#31516a]">
                Nothing is left to chance. Ghumo Bharat confirms every
                operational detail with you before the journey begins.
              </p>
            </div>

            <div className="grid gap-px bg-[#082f4f]/8 p-px sm:grid-cols-2">
              {confirmations.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 bg-white p-6 md:p-7"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ef8b19]/10">
                    <Check size={16} className="text-[#ef8b19]" />
                  </div>

                  <span className="text-sm leading-6 text-[#082f4f]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="bg-[#062f50] px-6 py-24 text-white md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow !text-[#ef8b19]">WHO IS THIS FOR?</p>

              <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Not just tourists.{" "}
                <span className="text-[#ef8b19]">Curious travellers.</span>
              </h2>

              <p className="mt-7 max-w-md leading-7 text-white/60">
                Small groups, private tours and curated heritage experiences
                for people who want to travel deeper.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <span className="text-xs font-black tracking-[0.2em] text-[#ef8b19]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-8 text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOUR INFO */}
      <section className="px-6 py-24 md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                icon: MapPin,
                title: "Route",
                value: "Agra → Kannauj",
              },
              {
                icon: Clock3,
                title: "One-Day Drive",
                value: "Approx. 2.5 hrs by car",
              },
              {
                icon: CalendarDays,
                title: "Extended",
                value: "2 nights / 3 days",
              },
              {
                icon: Users,
                title: "Style",
                value: "Private & curated",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[26px] border border-[#082f4f]/10 bg-white p-7 shadow-sm"
                >
                  <Icon className="text-[#ef8b19]" size={23} />

                  <p className="mt-6 text-xs font-black uppercase tracking-widest text-[#31516a]/60">
                    {item.title}
                  </p>

                  <p className="mt-2 font-serif text-2xl text-[#082f4f]">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#eee8d9] px-6 py-24 md:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="eyebrow">GOOD TO KNOW</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl text-[#082f4f]">
              Before you travel.
            </h2>
          </div>

          <div className="mt-14 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl bg-[#f9f6ef]"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-bold">{faq.q}</span>

                  <ChevronDown
                    size={19}
                    className={`shrink-0 transition ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-7 text-[#31516a]">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="px-6 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#ef8b19]">
          <div className="relative px-7 py-16 md:px-14 md:py-20 lg:px-20">
            <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

            <div className="relative max-w-6xl">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-white/60">
                YOUR JOURNEY, PERSONALLY GUIDED
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl text-white">
                From Taj to Attar
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                Discover the fragrance, craft and stories of Kannauj with
                Ghumo Bharat.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-full bg-[#082f4f] px-7 py-4 font-bold text-white transition hover:bg-[#041f35]"
                >
                  <MessageCircle size={19} />
                  Enquire on WhatsApp
                </a>

                <a
                  href="mailto:hello@ghumobharat.com"
                  className="flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white/20"
                >
                  Plan My Experience
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
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
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
      >
        <MessageCircle size={25} />
      </a>

      {/* TAILWIND LOCAL STYLES */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        .nav-link {
          position: relative;
          color: rgba(255, 255, 255, 0.72);
          font-size: 13px;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: white;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -7px;
          height: 1px;
          transform: scaleX(0);
          transform-origin: center;
          background: #ef8b19;
          transition: transform 0.25s ease;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .eyebrow {
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.24em;
          color: #ef8b19;
        }
      `}</style>
    </main>
  );
}