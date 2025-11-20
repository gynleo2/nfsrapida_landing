import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NFSRápida - Emissão de NFS-e em Goiânia',
    short_name: 'NFSRápida',
    description: 'Sistema homologado para emissão de nota fiscal de serviço eletrônica (NFS-e) em Goiânia. Emita NFS-e rápido e fácil.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#16a34a',
    orientation: 'portrait-primary',
    categories: ['business', 'finance', 'productivity'],
    icons: [
      {
        src: '/favicon/android-icon-36x36.png',
        sizes: '36x36',
        type: 'image/png',
      },
      {
        src: '/favicon/android-icon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/favicon/android-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: '/favicon/android-icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/favicon/android-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/favicon/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}

