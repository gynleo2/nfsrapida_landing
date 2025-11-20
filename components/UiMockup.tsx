import React from 'react';
import { Check, User, FileText, Send } from 'lucide-react';

const UiMockup = () => {
  return (
    <div className="relative mx-auto w-full max-w-[600px] perspective-1000 px-4 sm:px-0">
      {/* Main Interface Window */}
      <div className="relative z-20 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform rotate-x-6 transition-transform hover:scale-[1.02] duration-500">
        {/* Header Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2">
          <div className="flex gap-1 sm:gap-1.5">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-amber-400"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="ml-2 sm:ml-4 bg-white border border-slate-200 rounded-md px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[10px] text-slate-400 flex-1 text-center font-mono truncate">
            app.nfsrapida.com.br/emitir
          </div>
        </div>

        {/* App Content */}
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-secondary">Nova Nota Fiscal</h3>
              <p className="text-[10px] sm:text-xs text-slate-500">Preencha os dados para emitir</p>
            </div>
            <div className="bg-green-100 text-primary px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-bold whitespace-nowrap">
              Ambiente Seguro
            </div>
          </div>

          {/* Form Simulation */}
          <div className="space-y-3 sm:space-y-4">
            {/* Cliente Input */}
            <div className="space-y-1 sm:space-y-1.5">
              <label className="text-[10px] sm:text-xs font-semibold text-slate-600 flex items-center gap-1">
                <User className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Cliente
              </label>
              <div className="h-8 sm:h-10 bg-slate-50 border border-slate-200 rounded-lg w-full flex items-center px-2 sm:px-3 text-xs sm:text-sm text-slate-800">
                Empresa Exemplo LTDA
              </div>
            </div>

            {/* Serviço Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
               <div className="col-span-2 space-y-1 sm:space-y-1.5">
                <label className="text-[10px] sm:text-xs font-semibold text-slate-600 flex items-center gap-1">
                  <FileText className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Serviço
                </label>
                <div className="h-8 sm:h-10 bg-slate-50 border border-slate-200 rounded-lg w-full flex items-center px-2 sm:px-3 text-xs sm:text-sm text-slate-400">
                  Consultoria...
                </div>
               </div>
               <div className="space-y-1 sm:space-y-1.5">
                <label className="text-[10px] sm:text-xs font-semibold text-slate-600">Valor (R$)</label>
                <div className="h-8 sm:h-10 bg-slate-50 border border-slate-200 rounded-lg w-full flex items-center px-2 sm:px-3 text-xs sm:text-sm font-bold text-slate-800">
                  1.500,00
                </div>
               </div>
            </div>

            {/* Button */}
            <div className="pt-1 sm:pt-2">
               <div className="h-9 sm:h-11 bg-primary rounded-lg w-full flex items-center justify-center text-white font-bold text-xs sm:text-sm gap-1.5 sm:gap-2 shadow-lg shadow-green-500/20">
                 <Send className="w-3 h-3 sm:w-4 sm:h-4" /> Emitir Nota Fiscal Agora
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Success Card */}
      <div className="absolute -right-2 sm:-right-4 md:-right-12 top-16 sm:top-20 z-30 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-xl border-l-4 border-primary animate-bounce-slow hidden xs:block sm:block">
         <div className="flex items-start gap-2 sm:gap-3">
            <div className="bg-green-100 p-1.5 sm:p-2 rounded-full">
               <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <div>
               <p className="text-xs sm:text-sm font-bold text-gray-800">Nota Emitida!</p>
               <p className="text-[10px] sm:text-xs text-gray-500">Enviada por e-mail</p>
            </div>
         </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default UiMockup;

