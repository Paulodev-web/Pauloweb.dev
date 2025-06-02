import React from 'react';
import { Link } from 'react-scroll';
import { Code, Heart, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { name: 'Início', to: 'hero' },
    { name: 'Sobre', to: 'about' },
    { name: 'Serviços', to: 'services' },
    { name: 'Portfólio', to: 'portfolio' },
    { name: 'Contato', to: 'contact' },
  ];
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: 'https://github.com/' },
    { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com/' },
    { icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com/' },
  ];
  
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Code className="h-8 w-8 text-primary-400 mr-2" />
              <span className="text-xl font-bold">Paulo Ricardo</span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md">
              Desenvolvimento de sites profissionais com foco em conversão para pequenos negócios 
              que desejam escalar sua presença online e conquistar mais clientes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-800 hover:bg-primary-500 p-2 rounded-full transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Links rápidos</h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <div className="space-y-4 text-neutral-400">
              <p>WhatsApp: (54) 99940-8078</p>
              <p>Email: paulodev.website@gmail.com</p>
              <p>Fontoura Xavier, RS - Brasil</p>
            </div>
          </div>
        </div>
        
        <hr className="border-neutral-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Paulo Ricardo. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center text-neutral-500 text-sm">
            <span>Desenvolvido com</span>
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            <span>usando</span>
            <div className="flex items-center ml-2 space-x-2">
              <span className="text-primary-400">React</span>
              <span>&</span>
              <span className="text-primary-400">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;