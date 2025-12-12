import { useEffect, useRef } from 'react';
import PageWrapper from '../components/animated/PageWrapper';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ABOUT_CONTENT } from '../constants';
import interiorAbout from '../assets/images/interior_about_1765550308063.png';
import chefRossi from '../assets/images/chef-rossi-about.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        // Parallax Effect
        gsap.to(imageRef.current, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        // Text Parallax (slower)
        gsap.to(textRef.current, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageWrapper className="pt-32 pb-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 min-h-screen flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-[600px] overflow-hidden relative">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <img 
                ref={imageRef}
                src={interiorAbout}
                alt="Restaurant Interior" 
                className="w-full h-[120%] object-cover -mt-[10%]"
            />
        </div>

        {/* Text Section */}
        <div ref={textRef} className="w-full md:w-1/2 md:pl-12 z-20">
            <span className="text-paradiso-gold text-sm tracking-widest uppercase block mb-4">Our Story</span>
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-8 leading-tight">
                Tradition meets <br/> <span className="italic text-gray-500">Innovation</span>
            </h2>
            <p className="text-gray-300 font-light leading-relaxed mb-6 text-lg">
                {ABOUT_CONTENT.story.p1}
            </p>
            <p className="text-gray-300 font-light leading-relaxed mb-8">
                {ABOUT_CONTENT.story.p2}
            </p>
             <div className="flex gap-12 border-t border-white/10 pt-8 mt-12">
                {ABOUT_CONTENT.stats.map((stat, index) => (
                    <div key={index}>
                        <span className="block text-3xl font-serif text-white mb-2">{stat.value}</span>
                        <span className="text-xs text-paradiso-gold uppercase tracking-wider">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>

      </div>
      
       {/* Chef Section */}
       <div className="max-w-7xl mx-auto px-4 md:px-8 mt-32 flex flex-col-reverse md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 md:pr-12">
            <h2 className="text-4xl font-serif text-white mb-6">{ABOUT_CONTENT.chef.name}</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
                {ABOUT_CONTENT.chef.description}
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[500px] overflow-hidden">
             <img src={chefRossi} alt={ABOUT_CONTENT.chef.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
       </div>

    </PageWrapper>
  );
};

export default About;
