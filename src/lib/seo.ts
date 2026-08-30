import { hotel } from '../data/hotel';
export function absoluteUrl(path:string){return new URL(path,hotel.seo.siteUrl).toString()}
export function pageSEO(title?:string,description?:string,canonical?:string){return {title:title?`${title} | ${hotel.shortName}`:hotel.seo.title,description:description||hotel.seo.description,canonical:absoluteUrl(canonical||'/'),ogImage:absoluteUrl(hotel.seo.ogImage||hotel.primaryImage)}}
