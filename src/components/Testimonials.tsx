import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      position: "CEO, Restaurante Sabor & Arte",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      testimonial: "O Paulo transformou completamente nossa presença online. Nosso site agora não só é bonito, mas também funcional. Tivemos um aumento de 40% nas reservas online desde o lançamento.",
      stars: 5
    },
    {
      name: "Ana Ferreira",
      position: "Proprietária, Beauty Care",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      testimonial: "A landing page criada pelo Paulo superou todas as minhas expectativas. O design é incrível e a página realmente converte! Em apenas 2 meses, já captamos mais de 300 novos leads qualificados.",
      stars: 5
    },
    {
      name: "Marcos Oliveira",
      position: "Diretor, Tech Solutions",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      testimonial: "Contratar o Paulo foi uma das melhores decisões que tomamos. Ele entendeu perfeitamente nossas necessidades e entregou um site que comunica exatamente o que precisávamos. Profissional, pontual e extremamente talentoso.",
      stars: 5
    },
    {
      name: "Júlia Santos",
      position: "Fundadora, FitLife Academia",
      image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      testimonial: "O Paulo não apenas criou um site bonito, mas também nos ajudou a entender como converter visitantes em clientes. O resultado foi um aumento de 35% nas matrículas em apenas 3 meses.",
      stars: 5
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
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="section-title">Depoimentos</h2>
          <p className="section-subtitle">
            O que meus clientes dizem sobre os resultados alcançados com seus novos sites
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card"
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
              <div className="flex flex-col h-full">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <p className="text-neutral-700 italic mb-6 flex-grow">"{testimonial.testimonial}"</p>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;