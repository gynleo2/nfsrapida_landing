'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover:scale-105">
             <Image src="/logo.jpg" alt="NFSRápida Logo" fill className="object-contain rounded-lg" />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight">
            <span className="text-blue-600">NFS</span>
            <span className="text-primary">Rápida</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link 
            href="/" 
            className={`hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${
              pathname === '/' 
                ? 'text-primary font-bold after:w-full' 
                : 'after:w-0'
            }`}
          >
            Início
          </Link>
          <Link 
            href="/nfs-e-prestadores-goiania" 
            className={`hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${
              pathname === '/nfs-e-prestadores-goiania' 
                ? 'text-primary font-bold after:w-full' 
                : 'after:w-0'
            }`}
          >
            Para Prestadores
          </Link>
          <Link 
            href="/nfs-e-contabilidade-goiania" 
            className={`hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${
              pathname === '/nfs-e-contabilidade-goiania' 
                ? 'text-primary font-bold after:w-full' 
                : 'after:w-0'
            }`}
          >
            Para Contabilidade
          </Link>
          <Link 
            href="/fim-emissor-gratuito-goiania" 
            className={`hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${
              pathname === '/fim-emissor-gratuito-goiania' 
                ? 'text-primary font-bold after:w-full' 
                : 'after:w-0'
            }`}
          >
            Mudança em Goiânia
          </Link>
          <Link 
            href="/como-emitir-nota-fiscal-servico-goiania" 
            className={`hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${
              pathname === '/como-emitir-nota-fiscal-servico-goiania' 
                ? 'text-primary font-bold after:w-full' 
                : 'after:w-0'
            }`}
          >
            Como Emitir
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link 
            href="https://app.nfsrapida.com.br/auth/signin" 
            className="hidden md:block text-sm font-bold text-secondary hover:text-primary transition-colors px-3 sm:px-4 py-2"
          >
            Entrar
          </Link>
          <Link 
            href="https://app.nfsrapida.com.br/auth/signup/escolher-tipo" 
            className="hidden sm:inline-flex bg-primary text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-0.5"
          >
            Começar grátis
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-secondary hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden glass border-t border-slate-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <Link 
              href="/" 
              className={`px-4 py-2 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors ${
                pathname === '/' 
                  ? 'text-primary font-bold bg-green-50' 
                  : 'text-slate-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              href="/nfs-e-prestadores-goiania" 
              className={`px-4 py-2 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors ${
                pathname === '/nfs-e-prestadores-goiania' 
                  ? 'text-primary font-bold bg-green-50' 
                  : 'text-slate-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Para Prestadores
            </Link>
            <Link 
              href="/nfs-e-contabilidade-goiania" 
              className={`px-4 py-2 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors ${
                pathname === '/nfs-e-contabilidade-goiania' 
                  ? 'text-primary font-bold bg-green-50' 
                  : 'text-slate-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Para Contabilidade
            </Link>
            <Link 
              href="/fim-emissor-gratuito-goiania" 
              className={`px-4 py-2 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors ${
                pathname === '/fim-emissor-gratuito-goiania' 
                  ? 'text-primary font-bold bg-green-50' 
                  : 'text-slate-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Mudança em Goiânia
            </Link>
            <Link 
              href="/como-emitir-nota-fiscal-servico-goiania" 
              className={`px-4 py-2 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors ${
                pathname === '/como-emitir-nota-fiscal-servico-goiania' 
                  ? 'text-primary font-bold bg-green-50' 
                  : 'text-slate-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Como Emitir
            </Link>
            <div className="pt-2 border-t border-slate-200 flex flex-col gap-2 sm:hidden">
              <Link 
                href="https://app.nfsrapida.com.br/auth/signin" 
                className="text-center px-4 py-2 text-secondary font-bold hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Entrar
              </Link>
              <Link 
                href="https://app.nfsrapida.com.br/auth/signup/escolher-tipo" 
                className="text-center bg-primary text-white px-4 py-2.5 rounded-full text-sm font-bold hover:bg-green-600 transition-all shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Começar grátis
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
