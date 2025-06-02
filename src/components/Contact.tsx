import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    siteType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formsubmit.co/paulodev.website@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          whatsapp: formData.whatsapp,
          siteType: formData.siteType,
          message: formData.message,
          _subject: 'Novo contato do site!',
          _template: 'table',
          _captcha: 'false',
          _next: 'https://pauloweb-dev.vercel.app/obrigado',
          _autoresponse: 'Recebemos sua mensagem! Em breve entraremos em contato.',
          _replyto: 'paulodev.website@gmail.com',
          _format: 'plain'
        })
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem. Por favor, tente novamente.');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        whatsapp: '',
        siteType: '',
        message: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao enviar mensagem. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary-500" />,
      title: "WhatsApp",
      info: "(54) 99940-8078",
      link: "https://wa.me/5554999408078"
    },
    {
      icon: <Mail className="h-5 w-5 text-primary-500" />,
      title: "Email",
      info: "paulodev.website@gmail.com",
      link: "mailto:paulodev.website@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary-500" />,
      title: "Localização",
      info: "Fontoura Xavier, RS - Brasil",
      link: "#"
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
    <section id="contact" className="bg-neutral-50 dark:bg-neutral-900 section-padding">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="section-title">Contato</h2>
          <p className="section-subtitle">
            Vamos conversar sobre o seu projeto e como posso ajudar a impulsionar seu negócio online
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
          >
            <div className="card bg-white dark:bg-neutral-800">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Envie uma mensagem</h3>
              
              {isSubmitted ? (
                <motion.div 
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-lg p-4 mb-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-medium">Mensagem enviada com sucesso!</p>
                  <p>Obrigado pelo contato. Retornarei em breve.</p>
                </motion.div>
              ) : null}

              {error ? (
                <motion.div 
                  className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded-lg p-4 mb-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-medium">Erro ao enviar mensagem</p>
                  <p>{error}</p>
                </motion.div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-800 focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-all bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-800 focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-all bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="siteType" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Tipo de site *
                  </label>
                  <select
                    id="siteType"
                    name="siteType"
                    required
                    value={formData.siteType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-800 focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-all bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="site-profissional">Site Profissional</option>
                    <option value="loja-simples">Loja Simples</option>
                    <option value="outro">Outro (especifique na mensagem)</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-800 focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-all bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                </button>
              </form>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
          >
            <div className="card bg-white dark:bg-neutral-800 h-full">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Informações de contato</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-primary-500 transition-colors"
                  >
                    <div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 dark:text-white">{item.title}</p>
                      <p className="text-neutral-600 dark:text-neutral-300">{item.info}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-neutral-900 dark:text-white">Horário de atendimento:</h4>
                <p className="text-neutral-600 dark:text-neutral-300">Segunda a Sexta: 9h às 18h</p>
                <p className="text-neutral-600 dark:text-neutral-300">Sábado: 9h às 12h</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

 