"use client";

import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Compass,
  Flower2,
  HandHeart,
  MapPin,
  Menu,
  MessageCircle,
  Play,
  Quote,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import DestinationsSection from "./DestinationsSection";
import Link from "next/link";

function GoogleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.08 3.56-5.14 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29A11.94 11.94 0 000 12c0 1.94.46 3.77 1.29 5.38l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.77c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.94 6.73-4.94z"
      />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="#1877F2" {...props}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <defs>
        <linearGradient id="igGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDC80" />
          <stop offset="25%" stopColor="#FCAF45" />
          <stop offset="50%" stopColor="#E1306C" />
          <stop offset="75%" stopColor="#C13584" />
          <stop offset="100%" stopColor="#833AB4" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#igGradient)" />
      <rect
        x="6.5"
        y="6.5"
        width="11"
        height="11"
        rx="3.5"
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
      />
      <circle cx="17.5" cy="6.5" r="1.1" fill="#fff" />
    </svg>
  );
}

const platformMeta = {
  google: {
    label: "Google Reviews",
    Icon: GoogleIcon,
    ring: "ring-[#4285F4]/25",
    bar: "from-[#4285F4] via-[#34A853] to-[#FBBC05]",
  },
  facebook: {
    label: "Facebook",
    Icon: FacebookIcon,
    ring: "ring-[#1877F2]/25",
    bar: "from-[#1877F2] to-[#0a58c9]",
  },
  instagram: {
    label: "Instagram",
    Icon: InstagramIcon,
    ring: "ring-[#c13584]/25",
    bar: "from-[#FCAF45] via-[#E1306C] to-[#833AB4]",
  },
};

const reviews = [
  {
    initials: "R.S.",
    trip: "Kannauj Fragrance Trail",
    platform: "google",
    quote:
      "A side of India we didn't know existed. Walking through the attar workshops and flower fields felt like stepping into another century — and our guide made every stop feel personal.",
  },
  {
    initials: "A.K.",
    trip: "Classical Rajasthan",
    platform: "facebook",
    quote:
      "Every fort, every meal, every stop was thought through. Nothing felt rushed or generic — it genuinely felt like travelling with someone who knows India, not a standard tour package.",
  },
  {
    initials: "M.I.",
    trip: "Srinagar & Ladakh",
    platform: "instagram",
    quote:
      "From the houseboat mornings to the mountain passes, the pacing was perfect. Small details, like timing the drives around the light, made the whole trip feel curated, not just booked.",
  },
];

const navLinks = [
  { href: "#experience", label: "Experience", icon: Flower2 },
  { href: "#destinations", label: "Destinations", icon: MapPin },
  { href: "#journey", label: "Journey", icon: Route },
  { href: "#guide", label: "Your Guide", icon: Users },
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

const travelModes = [
  {
    key: "taxi",
    label: "By Road",
    image: "/vehicle-taxi.png",
    title: "Door-to-door comfort",
    text: "From the moment you land, a private cab is ready — smooth transfers, no waiting, no hassle.",
  },
  {
    key: "train",
    label: "By Rail",
    image: "/train.png",
    mobileImage: "/mobile-train.png",
    title: "The classic Indian rail",
    text: "Watch the country roll by from a train window — the way millions of journeys across India begin.",
  },
  {
    key: "houseboat",
    label: "By Water",
    image: "/vehicle-houseboat.png",
    title: "Drift through the backwaters",
    text: "Spend a night aboard a traditional Kerala houseboat, drifting past palm groves and quiet villages.",
  },
  {
    key: "airplane",
    label: "By Air",
    image: "/vehicle-airplane.png",
    title: "Wherever you want to go",
    text: "When distance calls for speed, we get you there by air — so more of your trip is spent exploring, not travelling.",
  },
];

// Coordinate space the snake path is authored in. Positions are converted
// to percentages, so the track scales responsively at any rendered size.
// There is one more dot than travel modes: each mode travels exactly one
// dot-to-dot segment, and vehicles swap only while parked on a dot.
// Mobile: vertical snake (top to bottom)
const TRACK_VIEW_W = 260;
const TRACK_VIEW_H = 680;
const TRACK_DOTS = [
  { x: 90, y: 40 },
  { x: 170, y: 195 },
  { x: 90, y: 350 },
  { x: 170, y: 505 },
  { x: 90, y: 660 },
];
const TRACK_PATH_D =
  "M90,40 C90,117.5 170,117.5 170,195 C170,272.5 90,272.5 90,350 C90,427.5 170,427.5 170,505 C170,582.5 90,582.5 90,660";

// Desktop: horizontal snake (left to right)
const TRACK_VIEW_W_H = 700;
const TRACK_VIEW_H_H = 260;
const TRACK_DOTS_H = [
  { x: 40, y: 90 },
  { x: 195, y: 170 },
  { x: 350, y: 90 },
  { x: 505, y: 170 },
  { x: 660, y: 90 },
];
const TRACK_PATH_D_H =
  "M40,90 C117.5,90 117.5,170 195,170 C272.5,170 272.5,90 350,90 C427.5,90 427.5,170 505,170 C582.5,170 582.5,90 660,90";

// Loop timeline (fraction of the 0 -> 1 progress cycle). The vehicle rests
// briefly on each dot (where the swap happens), travels between dots, then
// flies off after reaching the last dot.
const DOT_ARRIVALS = [0, 0.21, 0.42, 0.63, 0.84];
const DOT_HOLD = 0.02;

function TrackDot({ progress, arriveAt, left, top, className }) {
  const active = useTransform(
    progress,
    [0, arriveAt, arriveAt + 0.01, 1],
    [arriveAt === 0 ? 1 : 0, arriveAt === 0 ? 1 : 0, 1, 1]
  );
  const backgroundColor = useTransform(active, [0, 1], ["#f7f3e9", "#ef8b19"]);
  const borderColor = useTransform(
    active,
    [0, 1],
    ["rgba(8,47,79,0.2)", "#ef8b19"]
  );
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left, top }}
    >
      <motion.div
        className={`rounded-full border-2 ${className}`}
        style={{ backgroundColor, borderColor }}
      />
    </div>
  );
}

function JourneyMotionSection() {
  const pathRefDesktop = useRef(null);
  const pathRefMobile = useRef(null);

  // Self-playing progress (0 -> 1, looping) — not tied to scroll at all.
  const progress = useMotionValue(0);

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 13,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });
    return () => controls.stop();
  }, [progress]);

  // Fraction of the path length covered: moves dot to dot, pausing on each
  // dot (all segments have equal length, so dot i sits at i/4), and is held
  // at 1 afterwards, leaving room for the fly-off at the end of each cycle.
  const segments = DOT_ARRIVALS.length - 1;
  const travelInput = [0];
  const travelOutput = [0];
  DOT_ARRIVALS.forEach((at, i) => {
    if (i > 0) {
      travelInput.push(at);
      travelOutput.push(i / segments);
    }
    if (i < segments) {
      travelInput.push(at + DOT_HOLD);
      travelOutput.push(i / segments);
    }
  });
  travelInput.push(1);
  travelOutput.push(1);
  const travelProgress = useTransform(progress, travelInput, travelOutput);

  // ---- Desktop: follow the horizontal path ----
  const vehiclePointDesktop = useTransform(travelProgress, (t) => {
    const path = pathRefDesktop.current;
    if (!path) return TRACK_DOTS_H[0];
    const length = path.getTotalLength();
    return path.getPointAtLength(t * length);
  });
  const vehicleLeftDesktop = useTransform(
    vehiclePointDesktop,
    (p) => `${(p.x / TRACK_VIEW_W_H) * 100}%`
  );
  const vehicleTopDesktop = useTransform(
    vehiclePointDesktop,
    (p) => `${(p.y / TRACK_VIEW_H_H) * 100}%`
  );

  // ---- Mobile: follow the vertical path ----
  const vehiclePointMobile = useTransform(travelProgress, (t) => {
    const path = pathRefMobile.current;
    if (!path) return TRACK_DOTS[0];
    const length = path.getTotalLength();
    return path.getPointAtLength(t * length);
  });
  const vehicleLeftMobile = useTransform(
    vehiclePointMobile,
    (p) => `${(p.x / TRACK_VIEW_W) * 100}%`
  );
  const vehicleTopMobile = useTransform(
    vehiclePointMobile,
    (p) => `${(p.y / TRACK_VIEW_H) * 100}%`
  );

  // Fly-off, layered on top of the path position via a separate transform.
  const flyX = useTransform(progress, [0, 0.88, 1], [0, 0, 210]);
  const flyY = useTransform(progress, [0, 0.88, 1], [0, 0, -150]);
  const flyRotate = useTransform(progress, [0, 0.88, 1], [0, 0, -22]);
  const flyScale = useTransform(progress, [0, 0.88, 0.95, 1], [1, 1, 1.1, 0.7]);

  // Progress line reveal (SVG line-draw technique) — desktop and mobile
  // paths have different lengths, so each gets its own measurement.
  const [pathLengthDesktop, setPathLengthDesktop] = useState(1600);
  const [pathLengthMobile, setPathLengthMobile] = useState(1600);
  useEffect(() => {
    if (pathRefDesktop.current) {
      setPathLengthDesktop(pathRefDesktop.current.getTotalLength());
    }
    if (pathRefMobile.current) {
      setPathLengthMobile(pathRefMobile.current.getTotalLength());
    }
  }, []);
  const dashOffsetDesktop = useTransform(
    travelProgress,
    [0, 1],
    [pathLengthDesktop, 0]
  );
  const dashOffsetMobile = useTransform(
    travelProgress,
    [0, 1],
    [pathLengthMobile, 0]
  );

  // Vehicle image crossfades — only while the vehicle is parked on a dot.
  const [, swap1, swap2, swap3] = DOT_ARRIVALS;
  const taxiOpacity = useTransform(
    progress,
    [0, swap1, swap1 + DOT_HOLD, 1],
    [1, 1, 0, 0]
  );
  const trainOpacity = useTransform(
    progress,
    [0, swap1, swap1 + DOT_HOLD, swap2, swap2 + DOT_HOLD, 1],
    [0, 0, 1, 1, 0, 0]
  );
  const houseboatOpacity = useTransform(
    progress,
    [0, swap2, swap2 + DOT_HOLD, swap3, swap3 + DOT_HOLD, 1],
    [0, 0, 1, 1, 0, 0]
  );
  const airplaneOpacity = useTransform(
    progress,
    [0, swap3, swap3 + DOT_HOLD, 0.97, 1],
    [0, 0, 1, 1, 0.4]
  );
  const opacityByKey = {
    taxi: taxiOpacity,
    train: trainOpacity,
    houseboat: houseboatOpacity,
    airplane: airplaneOpacity,
  };

  // Text crossfades snap quickly at the midpoint of each image transition
  // instead of dissolving across it — two overlapping stacked paragraphs
  // read as garbled text, unlike images which blend fine.
  const [snap1, snap2, snap3] = [swap1, swap2, swap3].map(
    (at) => at + DOT_HOLD / 2
  );
  const taxiTextOpacity = useTransform(
    progress,
    [0, snap1 - 0.001, snap1 + 0.001, 1],
    [1, 1, 0, 0]
  );
  const trainTextOpacity = useTransform(
    progress,
    [0, snap1 - 0.001, snap1 + 0.001, snap2 - 0.001, snap2 + 0.001, 1],
    [0, 0, 1, 1, 0, 0]
  );
  const houseboatTextOpacity = useTransform(
    progress,
    [0, snap2 - 0.001, snap2 + 0.001, snap3 - 0.001, snap3 + 0.001, 1],
    [0, 0, 1, 1, 0, 0]
  );
  const airplaneTextOpacity = useTransform(
    progress,
    [0, snap3 - 0.001, snap3 + 0.001, 1],
    [0, 0, 1, 1]
  );
  const textOpacityByKey = {
    taxi: taxiTextOpacity,
    train: trainTextOpacity,
    houseboat: houseboatTextOpacity,
    airplane: airplaneTextOpacity,
  };

  return (
    <section id="journey" className="relative overflow-hidden bg-[#f7f3e9] px-6 py-18 md:py-24 md:px-10 lg:px-[120px]">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#ef8b19]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#082f4f]/5 blur-3xl" />

      <div className="relative mx-auto w-full">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#ef8b19]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#ef8b19]">
              However You Like To Travel
            </p>
            <span className="h-px w-10 bg-[#ef8b19]" />
          </div>

          <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#082f4f] md:text-4xl lg:text-5xl">
            One journey.{" "}
            <span className="text-[#ef8b19]">Every mode of travel.</span>
          </h2>
        </div>

        {/* ================= DESKTOP: horizontal snake ================= */}
        <div className="relative mx-auto mt-16 hidden h-[420px] w-full md:block">
          {/* Track on top, content in a single row below it */}
          <div
            className="absolute inset-x-0 top-0"
            style={{ height: TRACK_VIEW_H_H }}
          >
            <svg
              viewBox={`0 0 ${TRACK_VIEW_W_H} ${TRACK_VIEW_H_H}`}
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full overflow-visible"
            >
              <path
                d={TRACK_PATH_D_H}
                fill="none"
                stroke="rgba(8,47,79,0.12)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <motion.path
                ref={pathRefDesktop}
                d={TRACK_PATH_D_H}
                fill="none"
                stroke="url(#journeyGradientH)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={pathLengthDesktop}
                style={{ strokeDashoffset: dashOffsetDesktop }}
              />
              <defs>
                <linearGradient id="journeyGradientH" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef8b19" />
                  <stop offset="100%" stopColor="#082f4f" />
                </linearGradient>
              </defs>
            </svg>

            {TRACK_DOTS_H.map((dot, i) => (
              <TrackDot
                key={i}
                progress={progress}
                arriveAt={DOT_ARRIVALS[i]}
                left={`${(dot.x / TRACK_VIEW_W_H) * 100}%`}
                top={`${(dot.y / TRACK_VIEW_H_H) * 100}%`}
                className="h-4 w-4"
              />
            ))}

            <motion.div
              style={{ left: vehicleLeftDesktop, top: vehicleTopDesktop }}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                style={{ x: flyX, y: flyY, rotate: flyRotate, scale: flyScale }}
                className="relative w-[170px] lg:w-[200px]"
              >
                <div className="relative aspect-[3/2]">
                  {travelModes.map((m) => (
                    <motion.img
                      key={m.key}
                      src={m.image}
                      alt={m.title}
                      style={{ opacity: opacityByKey[m.key] }}
                      className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_18px_24px_rgba(8,47,79,0.28)]"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Content — always below the track */}
          {travelModes.map((m, i) => (
            <motion.div
              key={m.key}
              style={{
                opacity: textOpacityByKey[m.key],
                // Centered over the dot-to-dot segment this mode travels
                left: `${
                  ((TRACK_DOTS_H[i].x + TRACK_DOTS_H[i + 1].x) / 2 / TRACK_VIEW_W_H) * 100
                }%`,
              }}
              className="absolute top-[280px] w-60 -translate-x-1/2 text-center"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#ef8b19]">
                {m.label}
              </p>
              <h3 className="mt-2 font-serif text-xl text-[#082f4f] lg:text-2xl">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#31516a]">{m.text}</p>
            </motion.div>
          ))}
        </div>

        {/* ================= MOBILE: vertical snake ================= */}
        <div className="mt-10 md:hidden">
          <div className="relative mx-auto h-[440px] w-[220px]">
            <svg
              viewBox={`0 0 ${TRACK_VIEW_W} ${TRACK_VIEW_H}`}
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full overflow-visible"
            >
              <path
                d={TRACK_PATH_D}
                fill="none"
                stroke="rgba(8,47,79,0.12)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <motion.path
                ref={pathRefMobile}
                d={TRACK_PATH_D}
                fill="none"
                stroke="url(#journeyGradientV)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={pathLengthMobile}
                style={{ strokeDashoffset: dashOffsetMobile }}
              />
              <defs>
                <linearGradient id="journeyGradientV" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ef8b19" />
                  <stop offset="100%" stopColor="#082f4f" />
                </linearGradient>
              </defs>
            </svg>

            {TRACK_DOTS.map((dot, i) => (
              <TrackDot
                key={i}
                progress={progress}
                arriveAt={DOT_ARRIVALS[i]}
                left={`${(dot.x / TRACK_VIEW_W) * 100}%`}
                top={`${(dot.y / TRACK_VIEW_H) * 100}%`}
                className="h-3.5 w-3.5"
              />
            ))}

            <motion.div
              style={{ left: vehicleLeftMobile, top: vehicleTopMobile }}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                style={{ x: flyX, y: flyY, rotate: flyRotate, scale: flyScale }}
                className="relative w-[140px]"
              >
                <div className="relative aspect-[3/2]">
                  {travelModes.map((m) => (
                    <motion.img
                      key={m.key}
                      src={m.mobileImage ?? m.image}
                      alt={m.title}
                      style={{ opacity: opacityByKey[m.key] }}
                      className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_12px_16px_rgba(8,47,79,0.28)]"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="relative mt-6 h-28 text-center">
            {travelModes.map((m) => (
              <motion.div
                key={m.key}
                style={{ opacity: textOpacityByKey[m.key] }}
                className="absolute inset-0"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#ef8b19]">
                  {m.label}
                </p>
                <h3 className="mt-2 font-serif text-xl text-[#082f4f]">{m.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#31516a]">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <a href="#" className="relative flex shrink-0 items-center">
      <img
        src="/logo.png"
        alt="Ghumo Bharat"
        className="h-14 w-auto object-contain md:h-16"
      />
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

      {/* JOURNEY MOTION */}
      <JourneyMotionSection />

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
      <section id="guide" className="px-6 py-18 md:py-24 lg:px-8">
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
      <section className="px-6 pb-18 md:px-8 md:pb-24">
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
      <section className="bg-[#062f50] px-6 py-18 text-white md:py-20 lg:px-8">
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

      {/* REVIEWS */}
      <section className="relative overflow-hidden bg-[#fdf8ee] px-6 py-18 md:py-20 lg:px-8">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#ef8b19]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#082f4f]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Traveller Stories</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-[#082f4f] md:text-4xl lg:text-5xl">
              Loved by those who{" "}
              <span className="text-[#ef8b19]">travelled with us.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-[#31516a] md:text-lg">
              Real feedback from travellers who chose a curated journey
              over a standard tour package.
            </p>
          </div>

          <div className="mt-14 grid items-start gap-8 md:grid-cols-3">
            {reviews.map((review, index) => {
              const meta = platformMeta[review.platform];
              const PlatformIcon = meta.Icon;

              return (
                <div
                  key={review.initials}
                  className={`group relative flex flex-col overflow-hidden rounded-[28px] bg-white p-8 pt-9 shadow-[0_15px_45px_rgba(8,47,79,0.08)] ring-1 ring-[#082f4f]/5 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(8,47,79,0.16)] ${
                    index === 1 ? "md:mt-8" : ""
                  }`}
                >
                  {/* Platform accent bar */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${meta.bar}`}
                  />

                  {/* Platform badge */}
                  <div className="absolute right-6 top-6 flex items-center gap-1.5 rounded-full border border-[#082f4f]/8 bg-[#fdf8ee] px-3 py-1.5 shadow-sm">
                    <PlatformIcon />
                    <span className="text-[11px] font-bold text-[#082f4f]/70">
                      {meta.label}
                    </span>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082f4f]/5">
                    <Quote size={22} className="text-[#ef8b19]" fill="currentColor" />
                  </div>

                  <div className="mt-5 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#ef8b19] text-[#ef8b19]"
                      />
                    ))}
                  </div>

                  <p className="mt-4 flex-1 font-serif text-lg italic leading-7 text-[#082f4f]">
                    &ldquo;{review.quote}&rdquo;
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-[#082f4f]/8 pt-5">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#082f4f] text-sm font-bold text-white ring-4 ${meta.ring}`}
                    >
                      {review.initials}
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#082f4f]">
                        Verified Traveller
                      </p>
                      <p className="text-xs text-[#31516a]/70">{review.trip}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#eee8d9] px-6 py-18 md:py-20 lg:px-8">
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
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0c3a5e] via-[#0a1f38] to-[#050f1e] shadow-[0_35px_80px_rgba(5,15,30,0.35)]">
          {/* Dot texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
              backgroundSize: "26px 26px",
            }}
          />

          {/* Decorative glow + rings */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#ef8b19]/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#d8b979]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 -top-10 hidden h-56 w-56 rounded-full border border-[#d8b979]/20 md:block" />
          <Flower2
            size={200}
            strokeWidth={0.6}
            className="pointer-events-none absolute -bottom-8 -left-8 hidden text-[#d8b979]/10 md:block"
          />

          <div className="relative px-7 py-16 text-center md:px-14 md:py-20 lg:px-20">
            <Sparkles size={22} strokeWidth={1.5} className="mx-auto text-[#d8b979]" />

            <div className="mt-5 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#d8b979]/50" />
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#d8b979]">
                Your Journey, Personally Guided
              </p>
              <span className="h-px w-10 bg-[#d8b979]/50" />
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-[56px]">
              From Taj to{" "}
              <span className="bg-gradient-to-r from-[#f3d9a4] via-[#d8b979] to-[#ef8b19] bg-clip-text text-transparent">
                Attar.
              </span>
            </h2>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#d8b979]/40" />
              <Flower2 size={14} className="text-[#d8b979]" />
              <span className="h-px w-10 bg-[#d8b979]/40" />
            </div>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/65">
              Discover the fragrance, craft and stories of Kannauj with
              Ghumo Bharat.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#f3a349] to-[#d9711a] px-8 py-4 font-bold text-white shadow-[0_15px_35px_rgba(217,113,26,0.35)] transition hover:shadow-[0_20px_45px_rgba(217,113,26,0.45)] sm:w-auto"
              >
                <MessageCircle size={19} />
                Enquire on WhatsApp
              </a>

              <a
                href="mailto:hello@ghumobharat.com"
                className="flex w-full items-center justify-center gap-3 rounded-full border border-[#d8b979]/30 bg-white/5 px-8 py-4 font-bold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Plan My Experience
                <ArrowRight size={18} />
              </a>
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
            © {new Date().getFullYear()} Ghumo Bharat. All rights reserved | Powered By <Link target="_blank" href="https://www.cybertricksmedia.com/">Cybertricksmedia Pvt Ltd</Link>
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