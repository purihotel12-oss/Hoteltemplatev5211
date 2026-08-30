import type { Policy } from './types';
export const policies: Record<string,Policy> = {
privacy:{title:'Privacy Policy',intro:'DEMO CONTENT — REPLACE AND REVIEW BEFORE PRODUCTION.',requiresReview:true,sections:[{heading:'Information we collect',body:'DEMO CONTENT — REPLACE BEFORE PRODUCTION.'},{heading:'Contact and booking services',body:'DEMO CONTENT — REPLACE BEFORE PRODUCTION.'}]},
refund:{title:'Refund & Cancellation Policy',requiresReview:true,sections:[{heading:'Cancellation',body:'DEMO CONTENT — REPLACE BEFORE PRODUCTION.'},{heading:'Refunds',body:'DEMO CONTENT — REPLACE BEFORE PRODUCTION.'}]},
terms:{title:'Terms & Conditions',requiresReview:true,sections:[{heading:'Website use',body:'DEMO CONTENT — REPLACE BEFORE PRODUCTION.'},{heading:'Bookings',body:'DEMO CONTENT — REPLACE BEFORE PRODUCTION.'}]},
cookies:{title:'Cookie Policy',requiresReview:true,sections:[{heading:'Cookies',body:'DEMO CONTENT — REPLACE BEFORE PRODUCTION.'},{heading:'Third-party services',body:'DEMO CONTENT — REPLACE BEFORE PRODUCTION.'}]}
};
