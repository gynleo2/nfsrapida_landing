import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Página não encontrada</h2>
        <p className="text-slate-600 mb-8">A página que você está procurando não existe.</p>
        <Link 
          href="/" 
          className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}

