import { useEffect, useRef, useState } from "react";
import ReservationModal from "../components/ReservationModal";
import ThankYouModal from "../components/ThankYouModal";
import PageWrapper from "../components/animated/PageWrapper";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  COMPANY_INFO,
  POPULAR_DISHES,
  TEAM_MEMBERS,
  WINE_SELECTION,
  LOCATIONS,
} from "../constants";
import heroHome from "../assets/images/hero_home_1765550275725.png";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const heroTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // GSAP Reveal for Hero Text
    if (heroTextRef.current) {
      const chars = heroTextRef.current.querySelectorAll(".char");
      gsap.fromTo(
        chars,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          ease: "power4.out",
          delay: 0.5,
        }
      );
    }
  }, []);

  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const handleReservationSubmit = () => {
    setIsReservationOpen(false);
    setIsThankYouOpen(true);
  };

  return (
    <>
      {/* Modals */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        onSubmit={handleReservationSubmit}
      />
      <ThankYouModal
        isOpen={isThankYouOpen}
        onClose={() => setIsThankYouOpen(false)}
      />

      <PageWrapper>
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src={heroHome}
              alt="Chef plating pasta"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-paradiso-dark via-paradiso-dark/50 to-transparent" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <p className="text-paradiso-gold tracking-[0.3em] text-sm md:text-base uppercase mb-4 font-medium">
              Experience the Art of
            </p>
            <h1
              ref={heroTextRef}
              className="text-5xl md:text-8xl lg:text-9xl font-serif text-white leading-tight overflow-hidden"
            >
              <span className="block overflow-hidden">
                {COMPANY_INFO.name
                  .split(" ")
                  .slice(0, 2)
                  .map((word, i) => (
                    <span key={i} className="inline-block mr-4">
                      {word.split("").map((char, j) => (
                        <span key={j} className="char inline-block">
                          {char}
                        </span>
                      ))}
                    </span>
                  ))}
              </span>
              <span className="block text-paradiso-gold italic font-light overflow-hidden">
                {COMPANY_INFO.name
                  .split(" ")
                  .slice(2)
                  .map((word, i) => (
                    <span key={i} className="char inline-block">
                      {word}
                    </span>
                  ))}
              </span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-8 flex flex-col items-center gap-4"
            >
              <p className="max-w-md mx-auto text-gray-300 font-light leading-relaxed">
                {COMPANY_INFO.description}
              </p>
              <div className="mt-8 relative group">
                <div className="absolute -inset-1 rounded-full bg-paradiso-gold opacity-20 group-hover:opacity-40 blur transition duration-500 pointer-events-none"></div>
                <button
                  onClick={() => setIsReservationOpen(true)}
                  className="relative z-20 px-8 py-3 bg-transparent border border-white/20 text-white font-sans uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                >
                  Reserve a Table
                </button>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col gap-2 items-center"
          >
            <span className="text-[10px] tracking-widest text-white/50 uppercase">
              Scroll
            </span>
            <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
              <div className="w-full h-1/2 bg-paradiso-gold animate-scroll-down"></div>
            </div>
          </motion.div>
        </section>

        {/* Popular Dishes - Horizontal Scroll Carousel */}
        <section className="py-32 bg-paradiso-dark relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Culinary Highlights
            </h2>
            <div className="w-16 h-[1px] bg-paradiso-gold"></div>
          </div>
          <div className="flex overflow-x-auto gap-8 px-4 md:px-8 pb-12 snap-x snap-mandatory hide-scrollbar">
            {POPULAR_DISHES.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 md:w-96 snap-center group"
              >
                <div className="h-[400px] bg-neutral-900 overflow-hidden relative mb-6">
                  {dish.image ? (
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center text-white/10 font-serif text-6xl">
                      {index + 1}
                    </div>
                  )}
                </div>
                <div className="pr-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-2xl font-serif text-white group-hover:text-paradiso-gold transition-colors">
                      {dish.name}
                    </h3>
                    <span className="text-paradiso-gold font-sans">
                      ${dish.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {dish.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <span className="text-paradiso-gold text-xs tracking-widest uppercase">
                The Artisans
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">
                Meet the Team
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {TEAM_MEMBERS.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-full aspect-[3/4] overflow-hidden mb-6 relative grayscale group-hover:grayscale-0 transition-all duration-700">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-700">
                        No Image
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-paradiso-gold text-xs tracking-widest uppercase mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Wine Selection */}
        <section
          className="py-32 bg-paradiso-dark"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #1a1a1a 0%, #0a0a0a 100%)",
          }}
        >
          <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-12">
              Curated Cellar
            </h2>
            <div className="grid grid-cols-1 gap-8 text-left">
              {WINE_SELECTION.map((wine, index) => (
                <motion.div
                  key={wine.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center justify-between border-b border-white/10 pb-6 group"
                >
                  <div className="flex items-center gap-6">
                    {wine.image && (
                      <div className="w-12 h-16 overflow-hidden rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                        <img
                          src={wine.image}
                          alt={wine.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-paradiso-gold transition-colors">
                        {wine.name}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        {wine.origin} • {wine.year}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-paradiso-gold text-lg">
                      ${wine.price}
                    </span>
                    <span className="text-xs text-gray-600 uppercase tracking-wider">
                      {wine.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <button className="mt-16 px-8 py-3 bg-transparent border border-paradiso-gold text-paradiso-gold hover:bg-paradiso-gold hover:text-white transition-all duration-300 uppercase tracking-widest text-xs">
              View Full Wine List
            </button>
          </div>
        </section>

        {/* Locations */}
        <section className="py-32 bg-neutral-900 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-white">
                  Global Presence
                </h2>
                <p className="text-gray-400 mt-4 max-w-md">
                  Find us in the world's most vibrant culinary capitals.
                </p>
              </div>
              <div className="w-full md:w-auto h-[1px] bg-white/20 flex-grow md:mx-12"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {LOCATIONS.map((loc, index) => (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-paradiso-dark border border-white/5 hover:border-paradiso-gold/30 transition-all duration-500 group overflow-hidden"
                >
                  <div className="h-64 overflow-hidden relative">
                    {loc.image ? (
                      <img
                        src={loc.image}
                        alt={loc.city}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-neutral-800" />
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-serif text-white mb-6">
                      {loc.city}
                    </h3>
                    <div className="text-gray-400 space-y-4 text-sm font-light">
                      <p>{loc.address}</p>
                      <p className="text-paradiso-gold">{loc.phone}</p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center cursor-pointer">
                      <span className="text-xs tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors">
                        Get Directions
                      </span>
                      <span className="text-paradiso-gold group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
};

export default Home;
