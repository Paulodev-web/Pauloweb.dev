import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Beauty Care - Landing Page",
      category: "Landing Page",
      image: "https://images.pexels.com/photos/3373332/pexels-photo-3373332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Landing page para marca de cosméticos naturais com foco em captação de leads."
    },
    {
      title: "Restaurante Sabor & Arte",
      category: "Site Institucional",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Site completo para restaurante com cardápio online e sistema de reservas."
    },
    {
      title: "FitLife Academia",
      category: "Landing Page",
      image: "https://images.pexels.com/photos/4761779/pexels-photo-4761779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Landing page para academia com foco em captação de leads para planos mensais."
    },
    {
      title: "Tech Solutions",
      category: "Site Institucional",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Site para empresa de soluções tecnológicas com múltiplas páginas e blog."
    },
    {
      title: "Moda Elegante",
      category: "E-commerce",
      image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Loja virtual para marca de roupas com catálogo de produtos e checkout integrado."
    },
    {
      title: "Consultoria Financeira",
      category: "Site Institucional",
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Site para consultoria financeira com formulário de captação de leads."
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="portfolio" className="bg-neutral-50 section-padding">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="section-title">Portfólio</h2>
          <p className="section-subtitle">
            Conheça alguns dos projetos desenvolvidos com foco em design, usabilidade e conversão
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 }
                }
              }}
            >
              <div className="card h-full flex flex-col overflow-hidden group-hover:shadow-medium transition-all duration-300">
                <div className="relative overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary-500 bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white text-primary-500 px-4 py-2 rounded-lg flex items-center">
                      Ver detalhes
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="inline-block bg-primary-100 text-primary-600 text-xs font-medium px-2.5 py-0.5 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-neutral-600 mb-4 flex-grow">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;