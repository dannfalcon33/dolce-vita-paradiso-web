import PageWrapper from '../components/animated/PageWrapper';
import { motion, LayoutGroup } from 'framer-motion';
import { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../constants';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <PageWrapper className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Our Menu</h1>
        <div className="w-24 h-[1px] bg-paradiso-gold mx-auto"></div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {MENU_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm tracking-[0.2em] uppercase transition-colors duration-300 relative py-2 ${
              activeCategory === category ? 'text-paradiso-gold' : 'text-gray-500 hover:text-white'
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
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer"
            >
              <div className="flex justify-between items-baseline border-b border-white/10 pb-4 mb-4 group-hover:border-paradiso-gold/50 transition-colors duration-500">
                <h3 className="text-2xl font-serif text-white group-hover:text-paradiso-gold transition-colors duration-300">{item.name}</h3>
                <span className="text-paradiso-gold font-sans text-lg">${item.price}</span>
              </div>
              <p className="text-gray-400 font-light text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </LayoutGroup>
    </PageWrapper>
  );
};

export default Menu;
