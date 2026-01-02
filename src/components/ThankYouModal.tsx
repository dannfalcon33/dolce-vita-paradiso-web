import Modal from "./ui/Modal";
import { motion } from "framer-motion";

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThankYouModal = ({ isOpen, onClose }: ThankYouModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-12 md:p-16 text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
          className="w-20 h-20 rounded-full border-2 border-paradiso-gold flex items-center justify-center mb-8 text-paradiso-gold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </motion.div>

        <h2 className="text-4xl font-serif text-white mb-4">
          Reservation Confirmed
        </h2>
        <p className="text-gray-400 mb-8 max-w-md">
          Thank you for choosing Dolce Vita Paradiso. We look forward to serving
          you.
        </p>

        <button
          onClick={onClose}
          className="px-8 py-3 bg-transparent border border-white/20 text-white font-sans uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ThankYouModal;
