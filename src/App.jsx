import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, Link, useLocation, useParams } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  Clock3,
  Leaf,
  Plus,
  Minus,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    n: "01",
    title: "Residential & deep cleaning",
    desc: "Detailed cleaning for apartments, houses and private residences, including kitchens, bathrooms, bedrooms, living rooms and other areas.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    tag: "FOR YOUR HOME",
  },
  {
    n: "02",
    title: "Home organising & decluttering",
    desc: "Create calmer, more functional rooms with help sorting, decluttering and organising wardrobes, kitchen cabinets, pantries, bedrooms, storage areas and everyday household essentials.",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85",
    tag: "FOR A MORE ORGANISED HOME",
  },
  {
    n: "03",
    title: "Office & commercial cleaning",
    desc: "Careful cleaning for offices, workspaces and business premises, including furniture, floors, restrooms and shared areas.",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    tag: "FOR YOUR BUSINESS",
  },
  {
    n: "04",
    title: "Upholstery, sofa & carpet cleaning",
    desc: "Refresh sofas, chairs, rugs and carpets with suitable cleaning methods and equipment selected for the material.",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85",
    tag: "FOR YOUR INTERIORS",
  },
  {
    n: "05",
    title: "Swimming pool cleaning",
    desc: "Pool care can include removing debris, vacuuming floors, brushing walls and tiles, and cleaning pool edges.",
    img: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1000&q=85",
    tag: "FOR YOUR POOL",
  },
  {
    n: "06",
    title: "Fumigation & pest control",
    desc: "Fumigation for suitable properties, with treatment methods and re-entry guidance explained for the service arranged.",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=85",
    tag: "FOR PEACE OF MIND",
  },
  {
    n: "07",
    title: "Post-construction cleaning",
    desc: "Remove construction dust and clean affected surfaces, cabinets, windows and floors before a property is put to use.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    tag: "AFTER RENOVATION",
  },
  {
    n: "08",
    title: "Move-in & move-out cleaning",
    desc: "A detailed property clean before new occupants move in or after previous occupants move out.",
    img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    tag: "FOR A FRESH START",
  },
  {
    n: "09",
    title: "Kitchen & bathroom detailing",
    desc: "Focused attention for sinks, fittings, cabinets, appliances, showers, toilets and hard-to-reach surfaces.",
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
    tag: "DETAIL-FOCUSED CARE",
  },
  {
    n: "10",
    title: "Curtain, blind & window cleaning",
    desc: "Cleaning for curtains, blinds and windows based on the material and installation type. Motorised curtains are cleaned in place.",
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=85",
    tag: "FOR THE FINISHING TOUCH",
  },
  {
    n: "11",
    title: "Event & specialised cleaning",
    desc: "Cleaning support for event spaces and suitable industrial or specialised premises, subject to inspection and an agreed scope.",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    tag: "TAILORED TO YOUR SPACE",
  },
];
function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => setOpen(false), [loc]);
  const nav = [
    ["Home", "/"],
    ["Services", "/services"],
    ["About", "/about"],
    ["Our work", "/our-work"],
    ["Contact", "/contact"],
  ];
  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 sm:px-7">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-white/70 bg-paper/90 px-5 py-3 shadow-[0_8px_32px_rgba(24,37,31,.05)] backdrop-blur-xl sm:px-7">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-moss text-lime">
            <Sparkles size={18} />
          </span>
          <span className="leading-none">
            <b className="font-[Manrope] text-[15px] font-extrabold tracking-[-.04em]">
              GSHOME<span className="text-moss">.</span>
            </b>
            <small className="mt-1 block text-[9px] font-bold uppercase tracking-[.2em] text-muted">
              G.S Home Cleaning Services
            </small>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-[13px] font-semibold text-ink/80 lg:flex">
          {nav.map(([label, to]) => (
            <Link
              key={to}
              className={`nav-link ${loc.pathname === to ? "text-moss" : ""}`}
              to={to}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-bold text-white transition hover:bg-moss md:flex"
        >
          Request a Quote <ArrowUpRight size={15} />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-full bg-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="mx-auto mt-2 grid max-w-[1440px] gap-1 rounded-3xl border border-white bg-paper p-4 shadow-soft lg:hidden">
          {nav.map(([label, to]) => (
            <Link
              key={to}
              className={`rounded-xl px-4 py-3 ${loc.pathname === to ? "bg-[#e9eee3] text-moss font-bold" : ""}`}
              to={to}
            >
              {label}
            </Link>
          ))}
          <Link
            className="rounded-xl bg-moss px-4 py-3 font-semibold text-white"
            to="/contact"
          >
            Request a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
function Eyebrow({ children, light = false }) {
  return (
    <div
      className={`mb-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] ${light ? "text-lime" : "text-moss"}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </div>
  );
}
function Home() {
  const root = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.15,
      });
      gsap.from(".hero-image", {
        scale: 1.12,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.1,
      });
      gsap.utils.toArray(".reveal").forEach((el) =>
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }),
      );
      gsap.to(".float-note", {
        y: -10,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <main ref={root}>
      <section className="px-4 pb-16 pt-28 sm:px-7 sm:pb-24 sm:pt-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[.88fr_1.12fr] lg:items-stretch">
            <div className="hero-copy flex flex-col items-start justify-center py-8 sm:py-14 lg:py-16">
              <Eyebrow>G.S Home Cleaning Services · Abuja</Eyebrow>
              <h1 className="display max-w-[720px] text-[clamp(3.5rem,8vw,7.8rem)] font-semibold leading-[.91]">
                Your space deserves
                <br />
                <span className="text-moss">the G.S Home</span>
                <br />
                <span className="relative inline-block">
                  touch.
                  <svg
                    className="absolute -bottom-3 left-1 w-[94%]"
                    viewBox="0 0 420 18"
                    fill="none"
                  >
                    <path
                      d="M4 12C110 2 270 2 416 10"
                      stroke="#d8f36a"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p className="mt-8 max-w-md text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Thoughtful cleaning for the places you live, work and unwind. We
                take care of the details, so you can get back to what matters.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-4 rounded-full bg-moss px-6 py-4 text-sm font-bold text-white transition hover:bg-ink"
                >
                  Request a Quote{" "}
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-lime text-ink transition group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-4 py-4 text-sm font-bold"
                >
                  Explore services <ArrowDownRight size={16} />
                </a>
              </div>
              <div className="mt-12 flex items-center gap-4 border-t border-black/10 pt-5">
                <div className="flex -space-x-2">
                  <img
                    className="h-9 w-9 rounded-full border-2 border-paper object-cover"
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=100&q=80"
                  />
                  <img
                    className="h-9 w-9 rounded-full border-2 border-paper object-cover"
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=100&q=80"
                  />
                  <img
                    className="h-9 w-9 rounded-full border-2 border-paper object-cover"
                    src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=100&q=80"
                  />
                </div>
                <div>
                  <div className="flex gap-1 text-[#7d9b3c]">★★★★★</div>
                  <p className="text-xs text-muted">
                    Your Satisfaction, Our Priority!
                  </p>
                </div>
              </div>
            </div>
            <div className="hero-image relative min-h-[480px] overflow-hidden rounded-[2rem] bg-[#dfe4d8] sm:min-h-[620px] lg:min-h-[700px]">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90"
                alt="Sunlit, beautifully maintained living room"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10251b]/55 via-transparent to-black/5" />
              <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-white backdrop-blur-md sm:left-7 sm:top-7">
                The feeling of fresh
              </div>
              <div className="float-note absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/40 bg-paper/90 p-5 backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-[330px] sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-lime">
                    <Sparkles size={19} />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[.18em] text-muted">
                    The GSHOME promise
                  </span>
                </div>
                <p className="display text-2xl font-semibold leading-tight">
                  Your space deserves
                  <br />
                  the G.S Home touch.
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Detailed work, clear communication and care for every space.
                </p>
              </div>
              <div className="absolute bottom-8 right-7 hidden text-right text-white sm:block">
                <p className="display text-5xl font-semibold">
                  01<span className="text-lime">.</span>
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[.2em]">
                  Clean space, clear mind
                </p>
              </div>
            </div>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl bg-white px-5 py-5">
              <p className="text-xs text-muted">We care for</p>
              <p className="mt-1 font-bold">Homes & families</p>
            </div>
            <div className="rounded-2xl bg-white px-5 py-5">
              <p className="text-xs text-muted">We care for</p>
              <p className="mt-1 font-bold">Offices & teams</p>
            </div>
            <div className="rounded-2xl bg-white px-5 py-5">
              <p className="text-xs text-muted">We take on</p>
              <p className="mt-1 font-bold">Cleaning & home organising</p>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-lime px-5 py-5">
              <div>
                <p className="text-xs text-ink/70">Based in</p>
                <p className="mt-1 font-bold">Abuja</p>
              </div>
              <MapPin size={19} />
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="px-4 py-20 sm:px-7 sm:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>What we take care of</Eyebrow>
              <h2 className="display max-w-3xl text-5xl font-semibold leading-[1.02] sm:text-7xl">
                Every space has
                <br />a <span className="text-moss">fresh-start</span> button.
              </h2>
            </div>
            <p className="max-w-sm pb-1 text-sm leading-7 text-muted">
              From a lived-in home to a busy workplace, our services are
              designed around your space, your schedule and the finish you want.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.n}
                className="service-card reveal group overflow-hidden rounded-[1.6rem] bg-white"
              >
                <div className="relative h-[260px] overflow-hidden sm:h-[300px]">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-2 text-[9px] font-bold tracking-[.14em]">
                    {s.tag}
                  </span>
                  <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-lime text-ink transition group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-moss">{s.n}</span>
                    <span className="h-px w-12 bg-black/10" />
                  </div>
                  <h3 className="display mt-4 text-2xl font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{s.desc}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold"
                  >
                    Ask about this service{" "}
                    <ArrowRight
                      size={14}
                      className="transition group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="approach"
        className="bg-ink px-4 py-20 text-paper sm:px-7 sm:py-28"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="reveal relative min-h-[440px] overflow-hidden rounded-[2rem] sm:min-h-[600px]">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85"
              alt="Cleaning professional carefully preparing a space"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
              <p className="display text-3xl font-semibold sm:text-4xl">
                Care you can see.
                <br />
                <span className="text-lime">Comfort you can feel.</span>
              </p>
            </div>
          </div>
          <div className="reveal lg:pl-8">
            <Eyebrow light>Not just clean. Considered.</Eyebrow>
            <h2 className="display text-5xl font-semibold leading-[1.02] sm:text-7xl">
              A good clean
              <br />
              changes the
              <br />
              <span className="text-lime">whole feeling.</span>
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-white/65">
              We believe the best cleaning is the kind you notice without having
              to think about it. We show up, take care with your space and pay
              attention to the little things that make a real difference.
            </p>
            <div className="mt-9 space-y-0">
              {[
                {
                  icon: ShieldCheck,
                  title: "Respect for your space",
                  text: "Careful, considered service from the first hello to the final check.",
                },
                {
                  icon: Clock3,
                  title: "Clear booking arrangements",
                  text: "We operate Monday to Saturday. Sundays are not part of our regular schedule.",
                },
                {
                  icon: Leaf,
                  title: "Quality checks",
                  text: "We check the agreed areas against the scope of work before wrapping up.",
                },
              ].map((x, i) => (
                <div
                  key={x.title}
                  className="flex gap-4 border-t border-white/15 py-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-lime">
                    <x.icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-bold">{x.title}</h3>
                    <p className="mt-1 max-w-md text-sm leading-6 text-white/55">
                      {x.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-lime px-6 py-4 text-sm font-bold text-ink transition hover:bg-white"
            >
              Let’s plan your clean <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <section id="results" className="px-4 py-20 sm:px-7 sm:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="reveal flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <Eyebrow>Before you put your feet up</Eyebrow>
              <h2 className="display text-5xl font-semibold sm:text-7xl">
                Care you can see
                <br />
                <span className="text-moss">in the details.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted">
              A fresh space isn’t only about what’s gone. It’s about how
              everything feels when we’re done.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-12">
            <div className="reveal relative min-h-[400px] overflow-hidden rounded-[1.7rem] md:col-span-7 md:min-h-[520px]">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
                alt="Bright, clean modern home"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-lime">
                  A little more room to breathe
                </p>
                <h3 className="display mt-2 text-3xl font-semibold sm:text-4xl">
                  Home, cleaned with care.
                </h3>
              </div>
            </div>
            <div className="reveal relative min-h-[400px] overflow-hidden rounded-[1.7rem] md:col-span-5">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85"
                alt="Fresh, organised commercial workspace"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-lime">
                  Ready for what’s next
                </p>
                <h3 className="display mt-2 text-3xl font-semibold">
                  Workspaces, refreshed.
                </h3>
              </div>
            </div>
          </div>
          <div className="reveal mt-5 flex flex-col justify-between gap-4 rounded-[1.5rem] bg-[#e9eee3] p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-lime">
                <Check size={22} />
              </span>
              <div>
                <p className="font-bold">Your space. Your standards.</p>
                <p className="mt-1 text-sm text-muted">
                  Tell us your service needs, property type and location to
                  begin.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 self-start rounded-full bg-ink px-6 py-4 text-sm font-bold text-white sm:self-auto"
            >
              Request a Cleaning Quote <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <section id="areas" className="px-4 py-16 sm:px-7 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="reveal flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <Eyebrow>Cleaning services in Abuja</Eyebrow>
              <h2 className="display text-4xl font-semibold sm:text-6xl">
                Local care, wherever you are.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted">
              Based in Lokogoma, GSHOME serves homes, offices and other
              properties across Abuja. Inter-state requests may be arranged
              subject to availability and travel requirements.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Lokogoma & Northstar Garden Estate",
              "Dakwo",
              "Wuse 2",
              "Maitama",
              "Katampe",
              "Gwarinpa",
              "Idu",
              "Garki",
              "Lifecamp",
              "Jabi",
            ].map((area) => (
              <div
                key={area}
                className="rounded-2xl bg-white px-5 py-4 text-sm font-semibold"
              >
                {area}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-muted">
            Outside Abuja? Ask about service availability in Benin City and
            Owerri. Travel and scheduling are confirmed before a booking is
            accepted.
          </p>
        </div>
      </section>
      <section
        id="booking-process"
        className="bg-ink px-4 py-16 text-paper sm:px-7 sm:py-24"
      >
        <div className="mx-auto max-w-[1440px]">
          <Eyebrow light>How booking works</Eyebrow>
          <h2 className="display max-w-3xl text-4xl font-semibold sm:text-6xl">
            From first enquiry to final checks.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              [
                "01",
                "Make an enquiry",
                "Call or WhatsApp us and describe your property, location and required cleaning service.",
              ],
              [
                "02",
                "Property assessment",
                "We may arrange an inspection or an initial video assessment. A ₦10,000 inspection fee may apply where confirmed in advance.",
              ],
              [
                "03",
                "Receive a quotation",
                "Your quote is based on the property, its condition, the requested service and the agreed scope.",
              ],
              [
                "04",
                "Confirm your booking",
                "The stated arrangement is a 30% deposit, with the balance payable on completion. Confirm these terms with GSHOME before paying.",
              ],
              [
                "05",
                "Cleaning & quality checks",
                "Our team completes the agreed work and checks the relevant areas against the service scope.",
              ],
            ].map(([n, title, desc]) => (
              <article
                key={n}
                className="rounded-2xl border border-white/15 bg-white/5 p-5"
              >
                <span className="text-sm font-bold text-lime">{n}</span>
                <h3 className="display mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{desc}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-xs leading-6 text-white/55">
            Booking policy note: the inspection fee and 30% deposit/balance
            arrangement are shown as the currently stated terms and should be
            confirmed by GSHOME before publication as final policies. The final
            quotation and agreed scope should be clear before work starts.
          </p>
        </div>
      </section>
      <section id="testimonials" className="px-4 py-16 sm:px-7 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="reveal flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <Eyebrow>Reviews & testimonials</Eyebrow>
              <h2 className="display max-w-3xl text-4xl font-semibold sm:text-6xl">
                A fresh space.
                <br />
                <span className="text-moss">A better feeling.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted">
              Every space has a story. Explore moments of care, detail and fresh
              starts from the world of GSHOME.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {[
              {
                image: "/testimonials/testimonial-2.jpeg",
                title: "Ready for business",
                detail: "Office, Residential & commercial cleaning",
              },
              {
                image: "/testimonials/testimonial-3.jpeg",
                title: "Comfort, refreshed",
                detail: "Sofa & upholstery care",
              },
              {
                image: "/testimonials/testimonial-4.jpeg",
                title: "Clear, calm ",
                detail: "Swimming pool maintenance",
              },
              // { image: "/testimonials/testimonial-1.jpeg", title: "A happier home", detail: "Residential cleaning" },
              // { image: "/testimonials/testimonial-5.jpg", title: "A fresh beginning", detail: "Move-in & move-out cleaning" },
              // { image: "/testimonials/testimonial-6.jpg", title: "Details that matter", detail: "Deep cleaning" },
            ].map((item, index) => (
              <article
                key={item.image}
                className={`reveal group relative min-h-[300px] overflow-hidden rounded-[1.4rem] bg-[#e8e8e2] sm:min-h-[420px] lg:min-h-[440px] ${index === 0 ? "lg:col-span-2 lg:min-h-[520px]" : ""}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-100 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/0 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-6">
                  <p className="text-[9px] font-bold uppercase tracking-[.18em] text-lime sm:text-[10px]">
                    GSHOME care
                  </p>
                  <h3 className="display mt-2 text-xl font-semibold sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/75 sm:text-sm">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-black/10 p-5 sm:flex-row sm:items-center sm:p-7">
            <div>
              <h3 className="display text-2xl font-semibold">
                Had a great experience with us?
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                We’d love to hear your feedback. Message our team to share your
                experience or ask about a cleaning service.
              </p>
            </div>
            <a
              href="https://wa.me/2348102845967?text=Hello%20GSHOME%2C%20I%20would%20like%20to%20share%20feedback%20about%20your%20cleaning%20service."
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-moss px-6 py-4 text-sm font-bold text-white transition hover:bg-ink"
            >
              Share feedback <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <section className="px-4 pb-20 sm:px-7 sm:pb-28">
        <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] bg-lime px-6 py-12 sm:px-12 sm:py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="reveal">
              <Eyebrow>Make space for better</Eyebrow>
              <h2 className="display max-w-3xl text-5xl font-semibold leading-[1] sm:text-7xl">
                Your next fresh start
                <br />
                is one conversation away.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-ink/70">
                Tell us about your home, office or outdoor space. We’ll help you
                figure out the right clean for it.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-between gap-8 rounded-full bg-ink px-6 py-4 text-sm font-bold text-white transition hover:bg-moss"
            >
              Request a Quote{" "}
              <span className="grid h-8 w-8 place-items-center rounded-full bg-lime text-ink">
                <ArrowUpRight size={17} />
              </span>
            </a>
          </div>
        </div>
      </section>
      <section id="contact" className="px-4 pb-8 sm:px-7">
        <div className="mx-auto grid max-w-[1440px] gap-8 rounded-[2rem] bg-white p-6 shadow-soft sm:p-10 lg:grid-cols-[.8fr_1.2fr] lg:p-14">
          <div className="reveal">
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="display text-5xl font-semibold leading-[1.02] sm:text-6xl">
              Request a quote
              <br />
              for your space
              <br />
              <span className="text-moss">from GSHOME.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
              Call or WhatsApp us to describe your property and required
              service. You can also send an enquiry below and request a tailored
              quote.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="tel:08102845967"
                className="flex items-center gap-3 text-sm font-semibold"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#edf2e9] text-moss">
                  <Phone size={17} />
                </span>
                0810 284 5967
              </a>
              <a
                href="https://wa.me/2348102845967"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-semibold"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#edf2e9] text-moss">
                  <Mail size={17} />
                </span>
                WhatsApp: 0810 284 5967
              </a>
              <div className="flex items-center gap-3 text-sm font-semibold">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#edf2e9] text-moss">
                  <MapPin size={17} />
                </span>
                House E50, Classic Street, Northstar Garden Estate, Lokogoma,
                Abuja, FCT, Nigeria
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image,
  number = "01",
}) {
  return (
    <section className="px-4 pb-14 pt-32 sm:px-7 sm:pb-20 sm:pt-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="page-intro py-6">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="display max-w-3xl text-[clamp(3.3rem,7vw,6.8rem)] font-semibold leading-[.94]">
              {title}
              <br />
              <span className="text-moss">{accent}</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-moss px-6 py-4 text-sm font-bold text-white hover:bg-ink"
              >
                Request a Quote <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-4 text-sm font-bold"
              >
                Explore services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] sm:min-h-[500px]">
            <img
              src={image}
              alt="G.S Home Cleaning Services"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            <span className="absolute left-6 top-6 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-white backdrop-blur">
              G.S Home Cleaning Services
            </span>
            <span className="display absolute bottom-5 right-6 text-5xl font-semibold text-white">
              {number}
              <span className="text-lime">.</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.title.toLowerCase().replaceAll("&", "and").replaceAll(" ", "-").replaceAll("--", "-")}`}
      className="service-card group overflow-hidden rounded-[1.6rem] bg-white"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-2 text-[9px] font-bold uppercase tracking-[.16em]">
          {service.n} / 11
        </span>
        <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-lime text-ink transition group-hover:rotate-45">
          <ArrowUpRight size={19} />
        </span>
      </div>
      <div className="p-6 sm:p-7">
        <p className="text-[10px] font-bold uppercase tracking-[.18em] text-moss">
          {service.tag}
        </p>
        <h3 className="display mt-3 text-2xl font-semibold sm:text-3xl">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted">{service.desc}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">
          Explore service <ArrowRight size={15} />
        </span>
      </div>
    </Link>
  );
}
function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="A service for every space"
        title="Professional cleaning for"
        accent="your space."
        description="Explore residential and deep cleaning, home organising and decluttering, office cleaning, upholstery care, move-in/move-out, post-construction, kitchen and bathroom detailing, window cleaning, fumigation, event and swimming pool services. Quotes are tailored to your property and requirements."
        image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=85"
        number="02"
      />
      <section className="px-4 py-10 sm:px-7 sm:py-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>Our services</Eyebrow>
              <h2 className="display text-4xl font-semibold sm:text-6xl">
                Explore our cleaning services.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted">
              Choose a service to learn more about what’s included and request a
              tailored quote.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.n} service={service} />
            ))}
          </div>
        </div>
      </section>
      <Callout />
    </main>
  );
}
function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(
    (s) =>
      s.title
        .toLowerCase()
        .replaceAll("&", "and")
        .replaceAll(" ", "-")
        .replaceAll("--", "-") === slug,
  );
  if (!service) return <NotFound />;
  return (
    <main>
      <PageHero
        eyebrow={service.tag}
        title="A thoughtful clean for"
        accent={service.title.toLowerCase() + "."}
        description={
          service.desc +
          " We tailor each visit to your space, priorities and preferred schedule, with care taken over the details that make the G.S Home touch."
        }
        image={service.img}
        number={service.n}
      />
      <section className="px-4 py-12 sm:px-7 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <Eyebrow>What to expect</Eyebrow>
            <h2 className="display text-4xl font-semibold sm:text-5xl">
              A clear plan.
              <br />
              <span className="text-moss">A careful finish.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted">
              Every space is different. We start by understanding what you need,
              then shape the service around your priorities and the condition of
              the space.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              [
                "01",
                "Understand your space",
                "Contact us by phone or WhatsApp and explain the property and service you need.",
              ],
              [
                "02",
                "Build your clean",
                "We arrange an inspection or initial video assessment where appropriate.",
              ],
              [
                "03",
                "Careful execution",
                "We provide a quotation based on the property, condition, requested service and agreed scope.",
              ],
              [
                "04",
                "A fresh finish",
                "The team completes the agreed work and checks the relevant areas against the scope.",
              ],
            ].map(([n, t, d]) => (
              <div key={n} className="rounded-2xl bg-white p-6">
                <span className="text-xs font-bold text-moss">{n}</span>
                <h3 className="display mt-4 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Callout />
    </main>
  );
}
function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="G.S Home Cleaning Services · Abuja"
        title="We believe clean"
        accent="changes how life feels."
        description="G.S Home Cleaning Services helps homes, workplaces and shared spaces feel fresher, calmer and ready for what matters next. We bring thoughtful service and attention to the small things."
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=85"
        number="03"
      />
      <section className="px-4 py-12 sm:px-7 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Our point of view</Eyebrow>
            <h2 className="display text-4xl font-semibold sm:text-6xl">
              Your space deserves the G.S Home touch.
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-8 text-muted">
            <p>
              It’s the relief of walking into a room that feels right. It’s a
              workspace that welcomes your team, a home that gives you room to
              breathe, and the peace of mind that comes from knowing the details
              have been considered.
            </p>
            <p>
              That’s the standard we aim for: clear communication, a service
              shaped around your needs, and care for the spaces people depend on
              every day.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-moss px-6 py-4 font-bold text-white"
            >
              Meet your cleaning partner <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-14 grid max-w-[1200px] gap-4 sm:grid-cols-3">
          {[
            [
              "Thoughtful",
              "We discuss your property, priorities and service needs before quoting.",
            ],
            [
              "Consistent",
              "We agree on the scope and check the work against it.",
            ],
            [
              "Respectful",
              "We respect your property and do not share photos without permission.",
            ],
          ].map(([t, d]) => (
            <div key={t} className="rounded-[1.5rem] bg-white p-7">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-lime">
                <Check size={20} />
              </span>
              <h3 className="display mt-5 text-2xl font-semibold">{t}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <Callout />
    </main>
  );
}
function WorkPage() {
  const projects = [
    [
      "Home, cleaned with care.",
      "Residential & deep cleaning",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    ],
    [
      "A place for everything.",
      "Home organising & decluttering",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    ],
    [
      "Workspaces, refreshed.",
      "Office & commercial cleaning",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    ],
    [
      "A fresh finish.",
      "Upholstery, sofa & carpet care",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85",
    ],
    [
      "Poolside, refreshed.",
      "Swimming pool cleaning",
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=85",
    ],
    [
      "Ready for what’s next.",
      "Post-construction cleaning cleaning",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    ],
  ];
  return (
    <main>
      <PageHero
        eyebrow="Cleaning results & project gallery"
        title="Care you can see"
        accent="in the details."
        description="See examples of the kinds of spaces GSHOME can care for. Authentic client project images and videos should be added only with the customer’s approval."
        image={projects[0][2]}
        number="04"
      />
      <section className="px-4 py-10 sm:px-7 sm:py-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10">
            <Eyebrow>Our work</Eyebrow>
            <h2 className="display text-4xl font-semibold sm:text-6xl">
              Fresh spaces. Better feelings.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
              A visual look at the environments and service types we care for.
              Images are illustrative; replace with your own project photography
              when available.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map(([title, tag, img], i) => (
              <article
                key={title}
                className={`group relative min-h-[360px] overflow-hidden rounded-[1.7rem] ${i === 0 ? "md:row-span-2 md:min-h-[740px]" : ""}`}
              >
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[.2em] text-lime">
                    {tag}
                  </p>
                  <h3 className="display mt-2 text-3xl font-semibold sm:text-4xl">
                    {title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Callout />
    </main>
  );
}
function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="G.S Home Cleaning Services · Abuja"
        title="Tell us what"
        accent="needs a fresh start."
        description="Tell us about the property, location and cleaning service you need. We’ll discuss the scope, arrange an assessment where necessary and prepare a tailored quotation."
        image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1500&q=85"
        number="05"
      />
      <section className="px-4 pb-12 sm:px-7 sm:pb-20">
        <div className="mx-auto grid max-w-[1440px] gap-8 rounded-[2rem] bg-white p-6 shadow-soft sm:p-10 lg:grid-cols-[.75fr_1.25fr] lg:p-14">
          <div>
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="display text-4xl font-semibold sm:text-6xl">
              Request a Quote from GSHOME
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted">
              Request a quote for your home, office, pool or specialised
              cleaning needs.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="tel:08102845967"
                className="flex items-center gap-3 text-sm font-semibold"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#edf2e9] text-moss">
                  <Phone size={17} />
                </span>
                0810 284 5967
              </a>
              <a
                href="https://wa.me/2348102845967"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-semibold"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#edf2e9] text-moss">
                  <Mail size={17} />
                </span>
                WhatsApp: 0810 284 5967
              </a>
              <div className="flex items-center gap-3 text-sm font-semibold">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#edf2e9] text-moss">
                  <MapPin size={17} />
                </span>
                House E50, Classic Street, Northstar Garden Estate, Lokogoma,
                Abuja, FCT, Nigeria
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
function Callout() {
  return (
    <section className="px-4 py-10 sm:px-7 sm:py-16">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] bg-lime px-6 py-10 sm:px-12 sm:py-14">
        <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Eyebrow>Make space for better</Eyebrow>
            <h2 className="display max-w-3xl text-4xl font-semibold leading-[1] sm:text-6xl">
              Your next fresh start is one conversation away.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-ink/70">
              Tell us about your space and we’ll help you figure out the right
              clean for it.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-between gap-8 rounded-full bg-ink px-6 py-4 text-sm font-bold text-white"
          >
            Request a Quote{" "}
            <span className="grid h-8 w-8 place-items-center rounded-full bg-lime text-ink">
              <ArrowUpRight size={17} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Residential & deep cleaning",
    details: "",
  });
  const [sent, setSent] = useState(false);
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const msg = `Hello G.S Home Cleaning Services, I'd like to request a quote.\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nDetails: ${form.details || "Not specified"}`;
    window.open(
      `https://wa.me/2348102845967?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };
  return (
    <form
      onSubmit={submit}
      className="reveal rounded-[1.5rem] bg-paper p-5 sm:p-8"
    >
      <div className="mb-7 flex items-center justify-between">
        <div>
          <h3 className="display text-2xl font-semibold">
            Tell us what you need.
          </h3>
          <p className="mt-1 text-xs text-muted">
            Tell us a little about your property.
          </p>
        </div>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-lime">
          <ArrowDownRight size={20} />
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-bold">
          Your name
          <input
            required
            name="name"
            value={form.name}
            onChange={change}
            placeholder="e.g. Amaka"
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm font-normal outline-none transition focus:border-moss"
          />
        </label>
        <label className="text-xs font-bold">
          Phone number
          <input
            required
            name="phone"
            value={form.phone}
            onChange={change}
            placeholder="080…"
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm font-normal outline-none transition focus:border-moss"
          />
        </label>
        <label className="text-xs font-bold sm:col-span-2">
          Which service do you need?
          <select
            name="service"
            value={form.service}
            onChange={change}
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm font-normal outline-none focus:border-moss"
          >
            {services.map((s) => (
              <option key={s.n}>{s.title}</option>
            ))}
          </select>
        </label>
        <label className="text-xs font-bold sm:col-span-2">
          Property details and location?{" "}
          <span className="font-normal text-muted">(optional)</span>
          <textarea
            name="details"
            value={form.details}
            onChange={change}
            rows="3"
            placeholder="Property type, Abuja area, size/condition, preferred day and any special requirements…"
            className="mt-2 w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm font-normal outline-none focus:border-moss"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 flex w-full items-center justify-between rounded-full bg-moss px-6 py-4 text-sm font-bold text-white transition hover:bg-ink"
      >
        Request a Quote on WhatsApp <ArrowUpRight size={17} />
      </button>
      {sent && (
        <p className="mt-3 text-xs text-moss">
          WhatsApp should open with your message ready to send.
        </p>
      )}
      <p className="mt-3 text-center text-[10px] leading-5 text-muted">
        Submitting opens WhatsApp so you can review and send your enquiry
        directly.
      </p>
    </form>
  );
}
function Footer() {
  return (
    <footer className="px-4 pb-5 pt-8 sm:px-7">
      <div className="mx-auto max-w-[1440px] rounded-[2rem] bg-ink px-6 py-8 text-white sm:px-10 sm:py-10">
        <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-8 md:flex-row md:items-center">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-lime text-ink">
              <Sparkles size={20} />
            </span>
            <span>
              <b className="font-[Manrope] text-lg font-extrabold tracking-[-.04em]">
                GSHOME.
              </b>
              <small className="block text-[9px] uppercase tracking-[.2em] text-white/55">
                G.S Home Cleaning Services
              </small>
            </span>
          </Link>
          <p className="display max-w-xl text-2xl font-medium leading-snug sm:text-3xl">
            Your space deserves the G.S Home touch.{" "}
            <span className="text-lime">better things.</span>
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 self-start rounded-full bg-white/10 px-5 py-3 text-xs font-bold hover:bg-white/20"
          >
            Book a Cleaning <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="flex flex-col justify-between gap-5 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://wa.me/2348140393937"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition-colors"
            >
              Osh_la
            </a>
          </p>
          <div className="flex flex-wrap gap-5">
            <Link to="/services" className="hover:text-white">
              Services
            </Link>
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <Link to="/our-work" className="hover:text-white">
              Our work
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
            <a href="tel:08102845967" className="hover:text-white">
              Call us
            </a>
          </div>
          <div className="flex gap-3">
            <a
              aria-label="Instagram"
              href="https://instagram.com"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <Instagram size={15} />
            </a>
            <a
              aria-label="Facebook"
              href="https://facebook.com"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <Facebook size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
function NotFound() {
  return (
    <div className="grid min-h-[70vh] place-items-center px-6 pt-24 text-center">
      <div>
        <Eyebrow>Oops, wrong turn</Eyebrow>
        <h1 className="display text-6xl font-semibold">Let’s get you back.</h1>
        <Link
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-moss px-6 py-4 text-sm font-bold text-white"
          to="/"
        >
          Back to home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const ctx = gsap.context(() => {
      gsap.from(".page-intro > *", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.12,
      });
      gsap.from(".page-intro + div", {
        scale: 1.025,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.1,
      });
    });
    return () => ctx.revert();
  }, [pathname]);
  return null;
}
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
