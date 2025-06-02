import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const CallToAction: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-primary-500 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white"></div>
        <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-white"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Seu negócio precisa de um site que vende.
            <br />Vamos começar hoje?
          </h2>
          
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Tenha um site profissional que gera resultados reais para seu negócio.
            Entre em contato agora e vamos transformar sua presença online.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="btn bg-white text-primary-500 hover:bg-primary-50 hover:shadow-lg"
            >
              Solicitar orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <a 
              href="https://wa.me/5554999408078" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary-500 transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;