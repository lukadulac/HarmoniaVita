// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://harmoniavita.com';

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/O-nama`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
        url: `${baseUrl}/O-nama/MirjanaPajic`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: `${baseUrl}/O-nama/SvetlanaBelancic`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
      url: `${baseUrl}/psiholoske-teme`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Add more pages as needed
  ];
}