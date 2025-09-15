export const projects = [
  {
    id: 'quick-ai',
    title: 'Quick-AI',
    description: 'A full-stack AI SaaS for content creators, featuring text generation (Google Gemini API) and AI image editing/background removal (ClipDrop API).',
    details: [
      'Developed a full-stack AI SaaS for content creators, featuring text generation (Google Gemini API) and AI image editing/background removal (ClipDrop API).',
      'Implemented a secure auth & subscription system with Clerk and Stripe on Neon PostgreSQL, enabling free and premium tiers.',
      'Optimized media storage and delivery using Cloudinary; the platform automates workflows and improves content creation efficiency by up to 35%.'
    ],
    technologies: ['PERN Stack', 'AI SaaS', 'Gemini API', 'ClipDrop API', 'Clerk', 'Stripe', 'PostgreSQL', 'Cloudinary'],
    image: '/images/quick-ai.jpg',
    demoLink: 'https://quick-ai-zeta-ashen.vercel.app/ ',
    githubLink: 'https://github.com/Anushkaguptaaaa/quick-ai',
    featured: true
  },
  {
    id: 'quickstay',
    title: 'QuickStay',
    description: 'A full-stack booking platform with two distinct dashboards: for users to manage bookings and for owners to handle listings, reservations, and view revenue analytics.',
    details: [
      'Built a full-stack booking platform with two distinct dashboards: for users to manage bookings and for owners to handle listings, reservations, and view revenue analytics.',
      'Integrated Stripe for secure payment processing and Nodemailer for automated booking confirmation emails.',
      'Managed over 100+ hotel and room images efficiently with Cloudinary for optimized storage and fast delivery.'
    ],
    technologies: ['MERN Stack', 'Hotel Booking', 'Stripe', 'Nodemailer', 'Cloudinary', 'MongoDB'],
    image: '/images/quickstay.jpg',
    demoLink: 'https://quickstay-sand.vercel.app/',
    githubLink: 'https://github.com/Anushkaguptaaaa/hotel-booking',
    featured: true
  },
  {
    id: 'kahu',
    title: 'Kahu',
    description: 'A TypeScript web app identifying cat breeds via Cat API, with responsive UI and curated breed gallery.',
    details: [
      'Built a TypeScript web app identifying cat breeds via Cat API, with responsive UI and curated breed gallery.',
      'Planned feature: An AI chatbot trained on 100+ pet-care FAQs to offer interactive guidance and answer veterinary questions.'
    ],
    technologies: ['TypeScript', 'Cat API', 'Responsive Design', 'Web App'],
    image: '/images/kahu.jpg',
    githubLink: 'https://github.com/Anushkaguptaaaa/KahuWebApp',
    featured: false
  }
];