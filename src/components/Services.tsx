import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, ShoppingCart, Rocket } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary-500" />,
      title: "Landing Page Express",
      description: "Páginas de captura otimizadas para converter visitantes em clientes. Design moderno e responsivo, formulários de contato e integração com WhatsApp.",
      features: [
        "Design moderno e responsivo",
        "Formulário de contato",
        "Integração com WhatsApp",
        "Otimização para conversão",
        "Entrega em 7 dias úteis"
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary-500" />,
      title: "Site Institucional",
      description: "Site profissional para sua empresa com múltiplas páginas, blog e área administrativa. Ideal para estabelecer presença online e gerar credibilidade.",
      features: [
        "Até 5 páginas",
        "Blog integrado",
        "Área administrativa",
        "Formulário de contato",
        "Integração com WhatsApp"
      ]
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-primary-500" />,
      title: "Loja Simples",
      description: "E-commerce básico com catálogo de produtos, carrinho de compras e integração com meios de pagamento. Perfeito para começar a vender online.",
      features: [
        "Catálogo de produtos",
        "Carrinho de compras",
        "Integração com PIX",
        "Área do cliente",
        "Painel administrativo"
      ]
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
    <section id="services" className="bg-white dark:bg-neutral-900 section-padding">
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
            Soluções web personalizadas para impulsionar seu negócio online
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
            >
              <div className="card bg-neutral-50 dark:bg-neutral-800 h-full">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/20 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-neutral-700 dark:text-neutral-300">
                      <Rocket className="h-5 w-5 text-primary-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="btn-primary w-full text-center"
                >
                  Solicitar orçamento
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;