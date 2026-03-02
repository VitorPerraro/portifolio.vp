export interface Content {
  nav: {
    about: string
    projects: string
    skills: string
    contact: string
  }
  hero: {
    name: string
    subtitle: string
  }
  about: {
    tagline1: string
    tagline2: string
  }
  projects: {
    title: string
    heroProject: {
      title: string
      description: string
      tech: string[]
      github: string
      deploy: string
    }
    viewProject: string
    github: string
    deploy: string
    items: Array<{
      title: string
      description: string
      tech: string[]
      image: string
      github?: string
      deploy?: string
    }>
  }
  skills: {
    title: string
    cyberSecurity: string
    items: string[]
  }
  contact: {
    headline: string
    cta: string
    email: string
    button: string
  }
}

export const content: Record<'pt' | 'en', Content> = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      skills: 'Skills',
      contact: 'Contato',
    },
    hero: {
      name: 'Vitor Perraro Rosa',
      subtitle: 'Full Stack Developer | Especialista Front-end',
    },
    about: {
      tagline1: 'Desenvolvedor apaixonado por criar experiências digitais que unem',
      tagline2: 'performance, design e inovação.',
    },
    projects: {
      title: 'Projetos',
      heroProject: {
        title: 'Projeto Destaque',
        description: 'Aplicativo Denincore GoDrive com foco em utilizar para gestão de carros e propostas atráves do site.',
        tech: ['TypeScript', 'CSS', 'HTML', 'JavaScript'],
        github: 'GitHub',
        deploy: 'Deploy',
      },
      viewProject: 'Ver projeto',
      github: 'GitHub',
      deploy: 'Deploy',
      items: [
        {
          title: 'Denincore',
          description: 'Landing page para apresentação da minha empresa.',
          tech: ['TypeScript', 'Shell', 'CSS', 'Perl', 'JavaScript'],
          image: '/assets/Screenshot_2.png',
          github: 'https://github.com/VitorPerraro/Denincore',
          deploy: 'https://denincore.vercel.app/',
        },
        {
          title: 'Tax Solutions',
          description: 'Sistema para soluções fiscais e gestão tributária.',
          tech: ['TypeScript', 'CSS'],
          image: '/assets/Screenshot_3.png',
          github: 'https://github.com/VitorPerraro/nexus-tax-solutions',
          deploy: 'https://nexus-tax-solutions.vercel.app/',
        },
        {
          title: 'Denincore Food',
          description: 'Sistema de gestão para restaurantes e pedidos de comida.',
          tech: ['Next.js', 'Tailwind'],
          image: '/assets/Screenshot_4.png',
          github: 'https://github.com/VitorPerraro/denincore-food',
          deploy: 'https://denincore-food.vercel.app/',
        },
        {
          title: 'ReVista CRM',
          description: 'Sistema de CRM para gestão de clientes e vendas.',
          tech: ['Node.js', 'Express'],
          image: '/assets/Screenshot_5.png',
          github: 'https://github.com/VitorPerraro/revista-crm',
          deploy: 'https://revista-crm.vercel.app/',
        },
        {
          title: 'MDN Sports',
          description: 'Site para apresentação de uma empresa esportiva.',
          tech: ['React', 'Framer Motion'],
          image: '/assets/Screenshot_6.png',
          github: 'https://github.com/VitorPerraro/mdn-sports',
          deploy: 'https://mdn-sports.vercel.app/',
        },
        {
          title: 'Intensivo Bruno Augusto',
          description: 'Empresa de treinamento intensivo com força ou com bola.',
          tech: ['Next.js', 'Three.js'],
          image: '/assets/Screenshot_7.png',
          github: 'https://github.com/VitorPerraro/intensivo.ba',
          deploy: 'https://intensivo-ba.vercel.app/',
        },
      ],
    },
    skills: {
      title: 'Skills & Expertise',
      cyberSecurity: 'React',
      items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Git', 'REST API', 'Framer Motion'],
    },
    contact: {
      headline: 'Desenvolvedor Junior',
      cta: 'Competência, sede de inovação.',
      email: 'contato@vitorperraro.dev',
      button: 'Enviar e-mail',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      name: 'Vitor Perraro Rosa',
      subtitle: 'Full Stack Developer | Front-end Specialist',
    },
    about: {
      tagline1: 'Developer passionate about creating digital experiences that combine',
      tagline2: 'performance, design and innovation.',
    },
    projects: {
      title: 'Projects',
      heroProject: {
        title: 'Featured Project',
        description: 'Full-stack application focused on performance and UX. Modern and scalable stack.',
        tech: ['TypeScript', 'CSS', 'HTML', 'JavaScript'],
        github: 'GitHub',
        deploy: 'Deploy',
      },
      viewProject: 'View project',
      github: 'GitHub',
      deploy: 'Deploy',
      items: [
        {
          title: 'Denincore',
          description: 'Landing page to present my company.',
          tech: ['TypeScript', 'Shell', 'CSS', 'Perl', 'JavaScript'],
          image: '/assets/Screenshot_2.png',
          github: 'https://github.com/VitorPerraro/Denincore',
          deploy: 'https://denincore.vercel.app/',
        },
        {
          title: 'Tax Solutions',
          description: 'System for tax solutions and fiscal management.',
          tech: ['TypeScript', 'CSS'],
          image: '/assets/Screenshot_3.png',
          github: 'https://github.com/VitorPerraro/nexus-tax-solutions',
          deploy: 'https://nexus-tax-solutions.vercel.app/',
        },
        {
          title: 'Denincore Food',
          description: 'Restaurant management system and food orders.',
          tech: ['Next.js', 'Tailwind'],
          image: '/assets/Screenshot_4.png',
          github: 'https://github.com/VitorPerraro/denincore-food',
          deploy: 'https://denincore-food.vercel.app/',
        },
        {
          title: 'ReVista CRM',
          description: 'CRM system for customer and sales management.',
          tech: ['Node.js', 'Express'],
          image: '/assets/Screenshot_5.png',
          github: 'https://github.com/VitorPerraro/revista-crm',
          deploy: 'https://revista-crm.vercel.app/',
        },
        {
          title: 'MDN Sports',
          description: 'Website for presenting a sports company.',
          tech: ['React', 'Framer Motion'],
          image: '/assets/Screenshot_6.png',
          github: 'https://github.com/VitorPerraro/mdn-sports',
          deploy: 'https://mdn-sports.vercel.app/',
        },
        {
          title: 'Intensivo Bruno Augusto',
          description: 'Company for intensive training with strength or equipment.',
          tech: ['Next.js', 'Three.js'],
          image: '/assets/Screenshot_7.png',
          github: 'https://github.com/VitorPerraro/intensivo.ba',
          deploy: 'https://intensivo-ba.vercel.app/',
        },
      ],
    },
    skills: {
      title: 'Skills & Expertise',
      cyberSecurity: 'React',
      items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Git', 'REST API', 'Framer Motion'],
    },
    contact: {
      headline: 'Available for opportunities as Junior Developer.',
      cta: 'Extreme competence, thirst for innovation.',
      email: 'contact@vitorperraro.dev',
      button: 'Send email',
    },
  },
}
