import type { Hotel } from './types';
import { seo } from './seo';
export const hotel: Hotel = {
  name:'DEMO HOTEL', legalName:'DEMO HOTEL PRIVATE LIMITED', shortName:'DEMO', tagline:'A quieter way to stay.', propertyType:'Boutique Hotel',
  shortDescription:'DEMO CONTENT — REPLACE BEFORE PRODUCTION. A refined hospitality template built around place, comfort and thoughtful service.',
  longDescription:'DEMO CONTENT — REPLACE BEFORE PRODUCTION. This master property demonstrates how a hotel can tell a compelling story through architecture, rooms, experiences, food and local discovery without hard-coding hotel information into reusable components.',
  logo:'/images/logo/logo-mark.svg', favicon:'/favicon.svg', primaryImage:'/images/hero/hero-demo.svg', mobileHeroImage:'/images/hero/hero-demo.svg',
  address:{address:'DEMO ADDRESS — REPLACE BEFORE PRODUCTION',locality:'Demo Locality',city:'Demo City',district:'Demo District',state:'Demo State',country:'India',postalCode:'000000'},
  contact:{phone:'+91 00000 00000',whatsapp:'+91 00000 00000',email:'hello@examplehotel.invalid',reservationsEmail:'reservations@examplehotel.invalid',enquiryEmail:'hello@examplehotel.invalid',website:'https://example-hotel.invalid',bookingUrl:'https://example-hotel.invalid/book'},
  booking:{mode:'directContact'}, trustNotice:{enabled:true,message:'Please use only the official website and verified contact channels for bookings and payments.'},
  seo
};
