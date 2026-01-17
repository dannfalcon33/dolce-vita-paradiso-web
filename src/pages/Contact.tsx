import PageWrapper from "../components/animated/PageWrapper";
import { motion } from "framer-motion";
import heroContact from "../assets/images/hero_contact_new.webp";

const Contact = () => {
  return (
    <PageWrapper className="pb-20 bg-neutral-900/50">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center mb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={heroContact}
            alt="Contact Us"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-paradiso-dark via-paradiso-dark/50 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="text-paradiso-gold text-xs tracking-[0.3em] uppercase block mb-4">
            Reservations & Inquiries
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-6">
            Get in Touch
          </h1>
          <div className="w-24 h-[1px] bg-paradiso-gold mx-auto"></div>
        </div>
      </div>

      <div className="w-full max-w-2xl mx-auto px-4">
        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <InputGroup label="Name" type="text" />
            <InputGroup label="Email" type="email" />
          </div>
          <InputGroup label="Phone" type="tel" />
          <InputGroup label="Message" type="textarea" />

          <div className="flex justify-center pt-8">
            <button className="px-12 py-4 bg-white text-black font-sans uppercase tracking-[0.2em] text-xs hover:bg-paradiso-gold hover:text-white transition-colors duration-300">
              Send Request
            </button>
          </div>
        </form>
      </div>
    </PageWrapper>
  );
};

const InputGroup = ({ label, type }: { label: string; type: string }) => {
  return (
    <div className="relative group">
      {type === "textarea" ? (
        <textarea
          placeholder=" "
          className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-paradiso-gold transition-colors duration-300 h-32 resize-none peer"
        />
      ) : (
        <input
          type={type}
          placeholder=" "
          className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-paradiso-gold transition-colors duration-300 peer"
        />
      )}
      <label className="absolute left-0 top-4 text-gray-500 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-paradiso-gold peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs">
        {label}
      </label>
      <motion.div
        layoutId={`underline-${label}`}
        className="absolute bottom-0 left-0 w-0 h-[1px] bg-paradiso-gold group-focus-within:w-full transition-all duration-500"
      />
    </div>
  );
};

export default Contact;
