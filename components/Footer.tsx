import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Shield, CheckCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
          {/* Brand Column */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3">
               <div className="relative w-7 h-7 sm:w-8 sm:h-8">
                  <Image src="/logo.jpg" alt="NFSRápida Logo" fill className="object-contain rounded-lg" />
               </div>
               <span className="text-lg sm:text-xl font-bold text-white tracking-tight">NFSRápida</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
              Sistema homologado para emissão de NFS-e (Nota Fiscal de Serviço Eletrônica) em Goiânia. Substitua o sistema gratuito da prefeitura com segurança.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="bg-slate-800 p-2 rounded-lg" title="Site Seguro">
                <Shield className="w-5 h-5 text-green-500" />
              </div>
              <div className="bg-slate-800 p-2 rounded-lg" title="Homologado">
                <CheckCircle className="w-5 h-5 text-blue-500" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-4 sm:mb-6 text-base sm:text-lg">Navegação</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/nfs-e-prestadores-goiania" className="hover:text-primary transition-colors">Para Prestadores</Link></li>
              <li><Link href="/nfs-e-contabilidade-goiania" className="hover:text-primary transition-colors">Para Contabilidade</Link></li>
              <li><Link href="/fim-emissor-gratuito-goiania" className="hover:text-primary transition-colors">Mudança em Goiânia</Link></li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="font-bold text-white mb-4 sm:mb-6 text-base sm:text-lg">Links Úteis</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><Link href="#contato" className="hover:text-primary transition-colors">Suporte</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Área do Cliente</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4 sm:mb-6 text-base sm:text-lg">Contato</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Goiânia - GO</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                 <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                 <a href="https://wa.me/5562982181715" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                   (62) 98218-1715
                 </a>
              </li>
              <li className="text-slate-500 text-xs pt-4 border-t border-slate-800 mt-4">
                Direct Consultoria Comercial<br/>
                CNPJ: 31.437.761/0001-39
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500">
          <p className="text-center sm:text-left">© {currentYear} NFSRápida. Todos os direitos reservados.</p>
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <a href="https://app.nfsrapida.com.br/termos/privacidade" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Política de Privacidade</a>
            <span className="hidden sm:inline">•</span>
            <a href="https://app.nfsrapida.com.br/termos/adesao" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Termos de Adesão</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
