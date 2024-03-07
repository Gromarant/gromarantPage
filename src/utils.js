export const isEven = index => index % 2 === 0;
export const isNotLast = ( projects, index) => index < projects?.length-1;
export const lang_en = lang => lang  === 'en';

export const scrollUp = () => window.scrollTo({ 
  top: 0,  
  behavior: 'smooth'
});

export const setInitialState = () => {
  const dropdown = document.querySelector('.dropdown');
  const contactIcons = document.querySelector('.contact_icons');
  dropdown.classList.remove('menu');
  contactIcons.classList.add('hidden');
};

export const isTheSameAs = (condition, element) => condition === element;