import React from 'react';
import { AGENCY_INFO, SERVICES_SEO, ServiceSEO, LocationSEO } from '@/data/seo-data';

export function GlobalAgencySchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness', 'MarketingAgency'],
    '@id': `${AGENCY_INFO.url}/#agency`,
    name: AGENCY_INFO.name,
    alternateName: AGENCY_INFO.alternateNames,
    url: AGENCY_INFO.url,
    logo: `${AGENCY_INFO.url}/images/growdesk-w-logo.png`,
    image: `${AGENCY_INFO.url}/images/growdesk-w-logo.png`,
    description:
      'GrowDesk Media is Central India and Chhattisgarh’s premier digital marketing, paid advertising, web development, SEO, and business automation agency. Serving Raipur, Bilaspur, Durg, Bhilai, Nagpur, MP & Odisha.',
    telephone: AGENCY_INFO.phone,
    email: AGENCY_INFO.email,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, UPI, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: AGENCY_INFO.address.streetAddress,
      addressLocality: AGENCY_INFO.address.addressLocality,
      addressRegion: AGENCY_INFO.address.addressRegion,
      postalCode: AGENCY_INFO.address.postalCode,
      addressCountry: AGENCY_INFO.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: AGENCY_INFO.geo.latitude,
      longitude: AGENCY_INFO.geo.longitude,
    },
    areaServed: AGENCY_INFO.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area.city,
      containedInPlace: {
        '@type': 'State',
        name: area.state,
      },
    })),
    sameAs: [
      AGENCY_INFO.socialLinks.instagram,
      AGENCY_INFO.socialLinks.facebook,
      AGENCY_INFO.socialLinks.linkedin,
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '19:30',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'GrowDesk Media Marketing & Technology Services',
      itemListElement: SERVICES_SEO.map((srv, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: srv.title,
          description: srv.tagline,
          url: `${AGENCY_INFO.url}/services/${srv.slug}`,
        },
        position: idx + 1,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({ service }: { service: ServiceSEO }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${AGENCY_INFO.url}/services/${service.slug}#service`,
    name: service.title,
    serviceType: service.shortTitle,
    description: service.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: AGENCY_INFO.name,
      url: AGENCY_INFO.url,
      telephone: AGENCY_INFO.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: AGENCY_INFO.address.addressLocality,
        addressRegion: AGENCY_INFO.address.addressRegion,
        addressCountry: AGENCY_INFO.address.addressCountry,
      },
    },
    areaServed: AGENCY_INFO.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area.city,
      containedInPlace: {
        '@type': 'State',
        name: area.state,
      },
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: service.deliverables.map((item, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item,
        },
        position: idx + 1,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocationJsonLd({ location }: { location: LocationSEO }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService', 'MarketingAgency'],
    '@id': `${AGENCY_INFO.url}/locations/${location.slug}#localbusiness`,
    name: `${AGENCY_INFO.name} - ${location.city}`,
    alternateName: [`Growdex Media ${location.city}`, `GrowDesk ${location.city}`],
    url: `${AGENCY_INFO.url}/locations/${location.slug}`,
    telephone: AGENCY_INFO.phone,
    email: AGENCY_INFO.email,
    description: location.metaDescription,
    image: `${AGENCY_INFO.url}/images/growdesk-w-logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.latitude,
      longitude: location.coordinates.longitude,
    },
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedInPlace: {
        '@type': 'State',
        name: location.state,
      },
    },
    priceRange: '₹₹',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbsJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${AGENCY_INFO.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
