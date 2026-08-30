import { hotel } from '../data/hotel';

export function bookingHref(context = 'general') {
  const c = hotel.booking;
  if (c.mode === 'externalBooking') {
    return c.externalBookingUrl || hotel.contact.bookingUrl || directContactHref(context);
  }
  if (c.mode === 'enquiry') {
    return c.enquiryEndpoint || `/contact?context=${encodeURIComponent(context)}`;
  }
  return directContactHref(context);
}

function directContactHref(context: string) {
  if (hotel.contact.whatsapp) {
    return `https://wa.me/${hotel.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello, I would like to enquire about staying at ${hotel.name}. Context: ${context}.`)}`;
  }
  if (hotel.contact.reservationsEmail || hotel.contact.email) {
    const email = hotel.contact.reservationsEmail || hotel.contact.email;
    return `mailto:${email}?subject=${encodeURIComponent(`Stay enquiry — ${hotel.name}`)}`;
  }
  if (hotel.contact.phone) return `tel:${hotel.contact.phone.replace(/[^+\d]/g, '')}`;
  return '/contact';
}

export function bookingLabel() {
  return hotel.booking.mode === 'externalBooking' ? 'Book your stay' : hotel.booking.mode === 'enquiry' ? 'Enquire now' : 'Talk to us';
}
