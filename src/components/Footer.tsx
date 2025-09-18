import React from "react";
import { Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo/Branding */}
        <div className="col-span-full md:col-span-1 text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-2xl font-bold text-white mb-2">
            Ana Pais Arquitetura
          </h3>
          <p className="text-sm">
            Transformando ambientes em refúgios de bem-estar.
          </p>
        </div>

        {/* Links Rápidos */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-brand-color transition-colors">
                Sobre
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-brand-color transition-colors">
                Serviços
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-brand-color transition-colors">
                Portfólio
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-brand-color transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
          <ul className="space-y-2">
            <li className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-brand-color" />
              Belo Horizonte, MG
            </li>
            <li className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-brand-color" />
              <a href="mailto:contato@anapaisarq.com.br" className="hover:text-brand-color transition-colors">
                contato@anapaisarq.com.br
              </a>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-brand-color" />
              <a href="tel:+5531999999999" className="hover:text-brand-color transition-colors">
                (31) 99999-9999
              </a>
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Siga-nos</h4>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com/anapaisarquitetura"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-brand-color transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://facebook.com/anapaisarquitetura"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-brand-color transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ana Pais Arquitetura. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;