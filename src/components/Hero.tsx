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
              <div className="flex items-center mb-4">
                <h2 className="text-lg font-medium text-primary-600 dark:text-primary-400">
                  Olá, eu sou Paulo Ricardo 👋
                </h2>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Desenvolvedor de <span className="text-primary">Sites que Convertem</span>
              </h1>
              <p className="text-xl mb-8 max-w-xl text-neutral-600 dark:text-neutral-300">
                Estudante de Engenharia de Software especializado em criar landing pages e sites profissionais 
                que transformam visitantes em clientes reais para o seu negócio.
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
              {/* Background Effects */}
              <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-primary-400 to-primary-500 rounded-full opacity-10 blur-lg"></div>
              
              {/* Photo Container */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-full p-2 max-w-md mx-auto">
                  <div className="relative bg-white dark:bg-neutral-800 rounded-full overflow-hidden aspect-square w-full max-w-sm mx-auto">
                    {/* High Quality Image */}
                    <picture>
                      <source srcSet="/imagemprofissional.webp" type="image/webp" />
                      <img 
                        src="/imagemprofissional.jpg"
                        alt="Paulo Ricardo - Desenvolvedor Web"
                        className="w-full h-full object-cover"
                        style={{
                          objectPosition: 'center 25%',
                          imageRendering: 'auto',
                          filter: 'contrast(1.05) saturate(1.02)',
                          WebkitBackfaceVisibility: 'hidden',
                          backfaceVisibility: 'hidden'
                        }}
                        loading="lazy"
                        decoding="async"
                        width={400}
                        height={400}
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;