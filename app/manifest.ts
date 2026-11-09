import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tiffny',
    short_name: 'Tiffny',
    description: 'A simpler way for tiffin customers and food businesses to manage everyday meals.',
    start_url: '/',
    display: 'browser',
    background_color: '#FAF7F0',
    theme_color: '#1F4D3A',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
