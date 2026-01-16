import { motion, AnimatePresence } from "framer-motion";
import type { MenuItem, Wine } from "../types";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | Wine | null;
  onReserve?: () => void;
}

const DetailModal = ({
  isOpen,
  onClose,
  item,
  onReserve,
}: DetailModalProps) => {
  if (!item) return null;

  const isWine = "origin" in item;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-neutral-900 border border-white/10 w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-white/50 hover:text-white transition-colors p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-neutral-800">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/10 font-serif text-4xl">
                  {item.name[0]}
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-paradiso-gold text-xs tracking-widest uppercase block mb-2">
                  {isWine ? (item as Wine).type : (item as MenuItem).category}
                </span>
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 leading-tight">
                  {item.name}
                </h3>
                {isWine && (
                  <p className="text-gray-400 text-sm mb-4">
                    {(item as Wine).origin} • {(item as Wine).year}
                  </p>
                )}
                <span className="text-2xl text-paradiso-gold font-serif">
                  ${item.price}
                </span>
              </div>

              <div className="space-y-6">
                {/* Description */}
                {isWine ? (
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-gray-400 text-sm">Origin</span>
                      <span className="text-white text-sm">
                        {(item as Wine).origin}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-gray-400 text-sm">Year</span>
                      <span className="text-white text-sm">
                        {(item as Wine).year}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-gray-400 text-sm">Type</span>
                      <span className="text-white text-sm">
                        {(item as Wine).type}
                      </span>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-300 leading-relaxed font-light">
                    {(item as MenuItem).description}
                  </p>
                )}

                {/* Actions */}
                <div className="pt-8 flex gap-4">
                  {onReserve && (
                    <button
                      onClick={() => {
                        onClose();
                        onReserve();
                      }}
                      className="flex-1 bg-paradiso-gold text-black px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors"
                    >
                      Reserve Table
                    </button>
                  )}
                  <button
                    onClick={onClose}
                    className={`px-6 py-3 border border-white/20 text-white uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors ${
                      onReserve ? "flex-1" : "w-full"
                    }`}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;
