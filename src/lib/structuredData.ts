import { hotel } from '../data/hotel';
import { absoluteUrl } from './seo';

export function hotelJsonLd() {
  const h: Record<string, unknown> = {
    '@context': 'https://schema.org', '@type': 'Hotel', name: hotel.name, url: hotel.seo.siteUrl,
    description: hotel.seo.description, image: [absoluteUrl(hotel.primaryImage)]
  };
  if (hotel.contact.phone) h.telephone = hotel.contact.phone;
  if (hotel.contact.email) h.email = hotel.contact.email;
  const a = hotel.address;
  const address: Record<string, unknown> = { '@type': 'PostalAddress' };
  if (a.address) address.streetAddress = a.address;
  if (a.city) address.addressLocality = a.city;
  if (a.state) address.addressRegion = a.state;
  if (a.postalCode) address.postalCode = a.postalCode;
  if (a.country) address.addressCountry = a.country;
  if (Object.keys(address).length > 1) h.address = address;
  if (a.latitude != null && a.longitude != null) h.geo = { '@type': 'GeoCoordinates', latitude: a.latitude, longitude: a.longitude };
  return h;
}

export function breadcrumbJsonLd(items: { name: string; url?: string }[]) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.name, ...(x.url ? { item: absoluteUrl(x.url) } : {}) })) };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map(x => ({ '@type': 'Question', name: x.question, acceptedAnswer: { '@type': 'Answer', text: x.answer } })) };
}
