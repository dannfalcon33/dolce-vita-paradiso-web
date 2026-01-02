import { motion } from "framer-motion";
import { COMPANY_INFO } from "../../constants";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // 2 seconds total roughly

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(onComplete, 500); // Wait a bit after 100% to exit
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-paradiso-dark flex flex-col items-center justify-center text-white"
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-white">
            {COMPANY_INFO.name}
          </h1>
          <p className="text-paradiso-gold tracking-[0.3em] text-xs md:text-sm uppercase mt-2">
            {COMPANY_INFO.tagline}
          </p>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden mx-auto">
          {/* Progress Bar */}
          <motion.div
            className="absolute top-0 left-0 h-full bg-paradiso-gold"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-white/30 text-xs font-mono">{progress}%</div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
