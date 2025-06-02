import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Building, ShoppingCart, Check } from 'lucide-react';
import { Link } from 'react-scroll';

const Services: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      icon: <Rocket className="h-12 w-12 text-primary-500" />,
      title: "Landing Page Express",
      price: "R$300+",
      description: "Página única e eficiente para captar leads e converter visitantes.",
      features: [
        "Entrega em até 5 dias",
        "Responsiva (mobile e desktop)",
        "Até 5 seções personalizadas",
        "Formulário de captura de leads",
        "Otimização básica de SEO",
      ],
      color: "bg-gradient-to-br from-blue-50 to-indigo-50"
    },
    {
      icon: <Building className="h-12 w-12 text-primary-500" />,
      title: "Site Profissional",
      price: "R$700+",
      description: "Presença online completa para empresas que buscam credibilidade.",
      features: [
        "Entrega em até 10 dias",
        "Até 5 páginas personalizadas",
        "Design moderno e responsivo",
        "Blog integrado (opcional)",
        "Otimização avançada de SEO",
        "Integração com Google Analytics",
        "Suporte por 30 dias"
      ],
      color: "bg-gradient-to-br from-primary-50 to-blue-50",
      highlighted: true
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-primary-500" />,
      title: "Loja Simples",
      price: "R$1500+",
      description: "Solução e-commerce para pequenos negócios iniciarem vendas online.",
      features: [
        "Entrega em até 15 dias",
        "Catálogo de até 50 produtos",
        "Checkout integrado",
        "Painel administrativo",
        "Relatórios de vendas",
        "Integração com meios de pagamento",
        "Treinamento básico de operação",
        "Suporte por 60 dias"
      ],
      color: "bg-gradient-to-br from-blue-50 to-indigo-50"
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="section-title">Serviços</h2>
          <p className="section-subtitle">
            Soluções completas para sua presença online, com foco em conversão e resultados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`card ${service.color} overflow-hidden ${
                service.highlighted 
                  ? 'border-2 border-primary-400 transform md:-translate-y-4' 
                  : 'border border-neutral-200'
              } bg-white`}
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
              {service.highlighted && (
                <div className="bg-primary-500 text-white text-center py-1 text-sm font-medium">
                  Mais Popular
                </div>
              )}
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-white p-3 rounded-lg shadow-soft">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-neutral-500">A partir de</span>
                    <div className="text-2xl font-bold text-primary-500">{service.price}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 !text-black">{service.title}</h3>
                <p className="!text-neutral-600 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`btn ${
                    service.highlighted ? 'btn-primary' : 'btn-outline'
                  } w-full`}
                >
                  Solicitar orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;