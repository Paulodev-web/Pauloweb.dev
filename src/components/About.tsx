import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Code2 } from 'lucide-react';

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cards = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary-500" />,
      title: "Engenharia de Software",
      description: "Estudante com foco em arquitetura moderna e clean code"
    },
    {
      icon: <Users className="h-10 w-10 text-primary-500" />,
      title: "Experiência Real",
      description: "Sites para diversos segmentos de mercado e tamanhos de empresa"
    },
    {
      icon: <Award className="h-10 w-10 text-primary-500" />,
      title: "Resultados Comprovados",
      description: "Aumento médio de 37% na conversão de sites otimizados"
    },
    {
      icon: <Code2 className="h-10 w-10 text-primary-500" />,
      title: "Tecnologias Modernas",
      description: "Stack atualizada com as melhores práticas do mercado"
    }
  ];

  return (
    <section id="about" className="bg-neutral-50 dark:bg-neutral-900 section-padding">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="section-title text-neutral-900 dark:text-white">Sobre Mim</h2>
          <p className="section-subtitle text-neutral-700 dark:text-neutral-200">
            Desenvolvimento web com foco em conversão, design e experiência do usuário
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-16">
          <motion.div 
            className="w-full md:w-2/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <div className="rounded-xl overflow-hidden">
              <img 
                src="ImagemSobre.png" 
                alt="Paulo Ricardo trabalhando" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Ajudo pequenas empresas a crescerem na internet
            </h3>
            
            <div className="space-y-4 text-neutral-800 dark:text-neutral-100">
              <p>
                Sou Paulo Ricardo, desenvolvedor web especializado em criar sites que realmente funcionam para pequenos negócios.
                Estudo Engenharia de Software e utilizo inteligência artificial avançada para acelerar e aprimorar o processo de desenvolvimento, 
                unindo design, performance e estratégia em cada projeto.
              </p>
              
              <p>
                <strong className="text-primary-500">Minha missão:</strong> Criar sites que não apenas pareçam bonitos, 
                mas que realmente convertam visitantes em clientes.
              </p>
              
              <p>
                Trabalho com tecnologias modernas como React, Tailwind CSS e ferramentas de IA para entregar sites rápidos, 
                responsivos e otimizados para buscadores. Minha experiência com diversos nichos me permite entender as necessidades reais de cada negócio.
              </p>
            </div>
            
            <div className="mt-6">
              <div className="inline-block bg-primary-500 text-white px-4 py-2 rounded-lg font-medium shadow-md">
                Projetos em Andamento
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="card bg-white dark:bg-neutral-800 text-center p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 }
                }
              }}
            >
              <div className="inline-flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">{card.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-200">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;