import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Zap, PenTool, Search, Code, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const technologies = [
    { name: 'React', icon: <Code className="w-5 h-5" /> },
    { name: 'Tailwind', icon: <PenTool className="w-5 h-5" /> },
    { name: 'SEO', icon: <Search className="w-5 h-5" /> },
    { name: 'Performance', icon: <Zap className="w-5 h-5" /> },
  ];

  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <motion.div variants={item} className="mb-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Desenvolvedor de <span className="text-primary">Sites que Convertem</span>
              </h1>
              <p className="text-xl mb-8 max-w-xl">
                Landing pages e sites profissionais para escalar negócios digitais com foco em performance e conversão.
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="btn-primary"
              >
                Quero um site assim
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="btn-outline"
              >
                Ver serviços
              </Link>
            </motion.div>

            <motion.div variants={item}>
              <p className="text-sm text-muted mb-3">Especialista em:</p>
              <div className="flex flex-wrap gap-4">
                {technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex items-center bg-muted px-4 py-2 rounded-lg border border-muted"
                  >
                    {tech.icon}
                    <span className="ml-2 font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={item} className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 md:-inset-6 bg-primary-500 rounded-full opacity-10 blur-xl"></div>
              <div className="relative bg-muted rounded-full overflow-hidden aspect-square max-w-md mx-auto">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Paulo Ricardo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;