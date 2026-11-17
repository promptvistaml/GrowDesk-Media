import { MetadataRoute } from 'next';
import { AGENCY_INFO } from '@/data/seo-data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin', '/api/'],
      },
    ],
    sitemap: `${AGENCY_INFO.url}/sitemap.xml`,
    host: AGENCY_INFO.url,
  };
}
