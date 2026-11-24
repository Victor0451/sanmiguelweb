/**
 * Central site data: business info, contact channels, social links.
 * Source: user-provided data (feature doc S5).
 */

export const site = {
  name: 'San Miguel Sepelios',
  legalName: 'San Miguel Servicios Sociales',
  title: 'San Miguel Sepelios — Servicios de sepelios en Jujuy',
  description:
    'Te acompañamos en los momentos más difíciles. Brindamos servicios de sepelios para todo el grupo familiar, desde el profesionalismo, calidad y respeto que nos caracteriza.',
  lang: 'es',
} as const;

export const contact = {
  /** Display format for the single public phone number. */
  phoneDisplay: '+54 9 388 430-1608',
  /** tel: href (digits only, international format). */
  phoneHref: '+5493884301608',
  /** WhatsApp deep link with a default message. */
  whatsapp: 'https://wa.me/5493884301608?text=Hola%2C%20quiero%20consultar%20por%20los%20planes%20de%20sepelio',
  email: 'sanmiguelssociales@gmail.com',
  address: {
    street: 'España 379',
    city: 'Monterricos',
    region: 'Jujuy',
    country: 'AR',
    display: 'España 379, Monterricos, Jujuy',
  },
  hours: 'Lunes a viernes de 9:00 a 13:00 hs',
} as const;

export const social = {
  facebook: 'https://www.facebook.com/p/San-Miguel-Servicios-Sociales-61576559660002/',
  // TODO(backend): user provided a single-post URL; replace with the profile URL
  // once the Instagram username is confirmed.
  instagram: 'https://www.instagram.com/p/DZaEUUZxRx1/',
} as const;

/**
 * Formspree endpoint for the "¿Como Afiliarme?" form.
 * TODO(forms): register https://formspree.io with sanmiguelssociales@gmail.com
 * and paste the form id here, e.g. "https://formspree.io/f/xxxxxxxx".
 */
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/TODO_FORM_ID';
