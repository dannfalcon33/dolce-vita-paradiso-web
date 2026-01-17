import PageWrapper from "../components/animated/PageWrapper";
import { motion, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { MENU_CATEGORIES, MENU_ITEMS } from "../constants";
import type { MenuItem, Wine } from "../types";
import DetailModal from "../components/DetailModal";
import ReservationModal from "../components/ReservationModal";
import ThankYouModal from "../components/ThankYouModal";
import heroImage from "../assets/images/hero_home_1765550275725.webp"; // Reusing home hero as fallback

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | Wine | null>(
    null,
  );
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory,
  );

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsDetailModalOpen(true);
  };

  const handleReservationSubmit = () => {
    setIsReservationOpen(false);
    setIsThankYouOpen(true);
  };

  const handleReserveFromModal = () => {
    setIsDetailModalOpen(false);
    setIsReservationOpen(true);
  };

  return (
    <>
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        onSubmit={handleReservationSubmit}
      />
      <ThankYouModal
        isOpen={isThankYouOpen}
        onClose={() => setIsThankYouOpen(false)}
      />
      <DetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        item={selectedItem}
        onReserve={handleReserveFromModal}
      />

      <PageWrapper>
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center mb-16">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Italian Cuisine"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-paradiso-dark via-paradiso-dark/50 to-transparent" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-6">
              Our Menu
            </h1>
            <div className="w-24 h-[1px] bg-paradiso-gold mx-auto"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              A culinary journey through the authentic flavors of Italy, crafted
              with passion and the finest ingredients.
            </p>
          </div>
        </div>

        <div className="px-4 md:px-8 max-w-7xl mx-auto pb-20">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm tracking-[0.2em] uppercase transition-colors duration-300 relative py-2 ${
                  activeCategory === category
                    ? "text-paradiso-gold"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-paradiso-gold"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <LayoutGroup>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto"
            >
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="h-64 bg-neutral-900/50 mb-6 overflow-hidden relative rounded-sm">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/10 font-serif text-4xl group-hover:scale-105 transition-transform duration-700 bg-neutral-800">
                        {item.name[0]}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-500" />
                  </div>

                  <div className="flex justify-between items-baseline border-b border-white/10 pb-4 mb-4 group-hover:border-paradiso-gold/50 transition-colors duration-500">
                    <h3 className="text-2xl font-serif text-white group-hover:text-paradiso-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="text-paradiso-gold font-sans text-lg">
                      ${item.price}
                    </span>
                  </div>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </LayoutGroup>
        </div>
      </PageWrapper>
    </>
  );
};

export default Menu;
