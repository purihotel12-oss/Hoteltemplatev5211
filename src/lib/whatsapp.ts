import { hotel } from '../data/hotel';

export function whatsappHref(message?: string) {
  if (!hotel.contact.whatsapp) return undefined;
  return `https://wa.me/${hotel.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message || `Hello, I would like to enquire about staying at ${hotel.name}.`)}`;
}
