export const isEven = index => index % 2 === 0;
export const isNotLast = ( projects, index) => index < projects?.length-1;
export const lang_en = lang => lang  === 'en';

export const scrollUp = () => window.scrollTo({ 
  top: 0,  
  behavior: 'smooth'
});