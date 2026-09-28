"use client";

import {
  ArrowRight,
  CalendarDays,
  Heart,
  MapPin,
  Sparkles,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  badgeStyles,
  destinations,
  formatINR,
  inclusionIcons,
} from "./destinations/data";

export default function DestinationsSection() {
  const [liked, setLiked] = useState([]);

  return (
    <section
      id="destinations"
      className="bg-[#f7f3e9] px-6 py-18 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">OUR DESTINATIONS</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-[#082f4f] md:text-4xl lg:text-5xl">
            Six journeys.{" "}
            <span className="text-[#ef8b19]">One incredible India.</span>
          </h2>
          <p className="mt-6 text-base leading-6 text-[#31516a] md:text-lg">
            Tap any journey to see its route, highlights and day-by-day
            itinerary.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((item) => (
            <DestinationCard
              key={item.id}
              item={item}
              liked={liked.includes(item.id)}
              onToggleLike={() =>
                setLiked((ids) =>
                  ids.includes(item.id)
                    ? ids.filter((id) => id !== item.id)
                    : [...ids, item.id]
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ item, liked, onToggleLike }) {
  const hasPrice = item.price && item.originalPrice;
  const discount = hasPrice
    ? Math.round((1 - item.price / item.originalPrice) * 100)
    : 0;
  const enquiry = `https://wa.me/919999999999?text=${encodeURIComponent(
    `Hi Ghumo Bharat, I'd like to book the ${item.title} (${item.duration}).`
  )}`;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_10px_35px_rgba(8,47,79,0.08)] ring-1 ring-[#082f4f]/5 transition-all duration-500 focus-within:ring-2 focus-within:ring-[#ef8b19] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(8,47,79,0.18)]">
      {/* Image */}
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

        {/* Badge */}
        <span
          className={`absolute left-4 top-4 flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-lg ${
            badgeStyles[item.badgeColor] ?? badgeStyles.orange
          }`}
        >
          <Sparkles size={13} fill="currentColor" />
          {item.badge}
        </span>

        {/* Wishlist */}
        <button
          type="button"
          onClick={onToggleLike}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={liked}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-lg transition hover:scale-110"
        >
          <Heart
            size={19}
            className={liked ? "text-[#e5484d]" : "text-[#082f4f]/60"}
            fill={liked ? "currentColor" : "none"}
          />
        </button>

        {/* Region */}
        <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
          <MapPin size={13} className="text-[#ef8b19]" />
          {item.region}
        </span>

        {/* Discount */}
        {discount > 0 && (
          <span className="absolute bottom-4 right-4 rounded-full bg-[#16a34a] px-3 py-1.5 text-xs font-extrabold text-white shadow-lg">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="line-clamp-2 text-xl font-bold leading-snug text-[#0f172a]">
          <Link
            href={`/destinations/${item.id}`}
            className="focus:outline-none after:absolute after:inset-0 after:content-['']"
          >
            {item.title}
          </Link>
        </h3>

        <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#475569]">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={16} className="text-[#ef8b19]" />
            {item.duration}
          </span>
          <span className="h-4 w-px bg-[#082f4f]/15" />
          <span className="flex items-center gap-1.5">
            <Utensils size={15} className="text-[#ef8b19]" />
            {item.meals}
          </span>
        </div>

        {/* Inclusions */}
        <div className="no-scrollbar mb-6 mt-5 flex flex-nowrap gap-1 overflow-x-auto">
          {item.inclusions.map((name) => {
            const { icon: Icon, color } = inclusionIcons[name];

            return (
              <span
                key={name}
                className="flex shrink-0 items-center gap-[3px] whitespace-nowrap rounded-lg border border-[#ef8b19]/15 bg-[#fdf6ec] px-1.5 py-1.5 text-[12px] font-semibold text-[#1e293b]"
              >
                <Icon size={12} className={color} />
                {name}
              </span>
            );
          })}
        </div>

        {/* Price + CTA */}
        <div className="mt-auto flex items-end justify-between gap-3 border-t border-[#082f4f]/10 pt-5">
          <div>
            {hasPrice ? (
              <>
                <p className="text-2xl font-extrabold text-[#0f172a]">
                  {formatINR(item.price)}
                  <span className="ml-1 text-sm font-medium text-[#94a3b8]">
                    / person
                  </span>
                </p>
                <p className="text-sm text-[#94a3b8] line-through">
                  {formatINR(item.originalPrice)}
                </p>
              </>
            ) : (
              <>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#94a3b8]">
                  Price
                </p>
                <p className="text-lg font-extrabold text-[#0f172a]">
                  On request
                </p>
              </>
            )}
          </div>

          <a
            href={enquiry}
            target="_blank"
            rel="noreferrer"
            className="relative z-10 flex shrink-0 items-center gap-2 rounded-xl bg-[#e07b1f] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(224,123,31,0.35)] transition hover:bg-[#c96a12] md:text-base"
          >
            Book Now
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
