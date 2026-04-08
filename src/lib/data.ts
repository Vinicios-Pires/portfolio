import type {
  SiteConfig,
  NavLink,
  SkillGroup,
  Experience,
  Project,
  Education,
} from "@/types";

export const siteConfig: SiteConfig = {
  name: "Vinícios Pires",
  title: {
    pt: "Desenvolvedor Full Stack",
    en: "Full Stack Developer",
  },
  tagline: {
    pt: "Construindo aplicações web escaláveis com foco em qualidade e performance.",
    en: "Building scalable web applications focused on quality and performance.",
  },
  location: "Dois Córregos, SP – Brasil",
  email: "contato.viniciospires@gmail.com",
  phone: "+55 (14) 98196-8226",
  github: "https://github.com/Vinicios-Pires",
  linkedin: "https://www.linkedin.com/in/viniciospires/",
};

export const navLinks: NavLink[] = [
  { label: { pt: "Início", en: "Home" }, href: "#hero" },
  { label: { pt: "Sobre", en: "About" }, href: "#about" },
  { label: { pt: "Habilidades", en: "Skills" }, href: "#skills" },
  { label: { pt: "Experiência", en: "Experience" }, href: "#experience" },
  { label: { pt: "Projetos", en: "Projects" }, href: "#projects" },
];

export const aboutContent = {
  paragraphs: {
    pt: [
      "Desenvolvedor Full Stack Pleno com 2+ anos de experiência profissional no desenvolvimento de aplicações web escaláveis, atuando em ambientes ágeis com foco em qualidade, performance e entrega contínua.",
      "Possuo experiência sólida em React, Node.js, TypeScript e PostgreSQL, com aplicações dockerizadas e deploy em AWS. Atuei no desenvolvimento de sistemas corporativos (ERP), APIs REST, integrações e testes automatizados.",
      "Tenho forte colaboração em times multidisciplinares, prezando por clean code, versionamento com Git e revisão de código. Atualmente cursando Bacharelado em Ciência de Dados pela UNIVESP.",
    ],
    en: [
      "Mid-level Full Stack Developer with 2+ years of professional experience building scalable web applications in agile environments, focused on quality, performance, and continuous delivery.",
      "Solid experience with React, Node.js, TypeScript, and PostgreSQL, with dockerized applications deployed on AWS. Background in corporate systems (ERP), REST APIs, integrations, and automated testing.",
      "Strong collaborator in multidisciplinary teams, committed to clean code, Git versioning, and code reviews. Currently pursuing a Bachelor's degree in Data Science at UNIVESP.",
    ],
  },
};

export const skillGroups: SkillGroup[] = [
  {
    category: { pt: "Front-end", en: "Front-end" },
    skills: [
      "React",
      "Next.js",
      "Redux",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: { pt: "Back-end", en: "Back-end" },
    skills: ["Node.js", "Express", "REST APIs", "Python"],
  },
  {
    category: { pt: "Banco de Dados", en: "Databases" },
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: { pt: "Testes Automatizados", en: "Testing" },
    skills: ["Jest", "Cypress", "SuperTest"],
  },
  {
    category: { pt: "DevOps & Ferramentas", en: "DevOps & Tools" },
    skills: ["Docker", "GitHub Actions", "AWS", "Git", "GitHub", "Figma"],
  },
  {
    category: { pt: "Mobile", en: "Mobile" },
    skills: ["React Native"],
  },
];

export const experiences: Experience[] = [
  {
    role: {
      pt: "Analista de Desenvolvimento Pleno (Full Stack Developer)",
      en: "Mid-level Development Analyst (Full Stack Developer)",
    },
    company: "TDP Sistemas de Informação",
    period: {
      pt: "Jun/2023 – Atual",
      en: "Jun/2023 – Present",
    },
    current: true,
    description: {
      pt: [
        "Desenvolvimento full stack em aplicações web corporativas utilizando React no front-end e Node.js no back-end.",
        "Desenvolvimento e manutenção de funcionalidades críticas de ERP: contas a pagar/receber, emissão de notas fiscais e rotinas financeiras.",
        "Implementação de APIs REST integradas a bancos de dados PostgreSQL, garantindo consistência e performance.",
        "Criação e manutenção de aplicações dockerizadas com deploy e gerenciamento em ambiente AWS.",
        "Escrita e manutenção de testes automatizados (unitários, integração e E2E) utilizando Jest, Cypress e SuperTest.",
        "Participação ativa em metodologia Scrum: dailies, planejamento e revisões de sprint.",
        "Colaboração com foco em clean code, versionamento com Git e revisão de código.",
      ],
      en: [
        "Full stack development in corporate web applications using React on the front-end and Node.js on the back-end.",
        "Development and maintenance of critical ERP features: accounts payable/receivable, invoice issuance, and financial routines.",
        "Implementation of REST APIs integrated with PostgreSQL databases, ensuring consistency and performance.",
        "Creation and maintenance of dockerized applications with deployment and management on AWS.",
        "Writing and maintaining automated tests (unit, integration, and E2E) using Jest, Cypress, and SuperTest.",
        "Active participation in Scrum methodology: dailies, sprint planning and reviews.",
        "Collaboration focused on clean code, Git versioning, and code reviews.",
      ],
    },
    tech: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Jest",
      "Cypress",
      "Git",
    ],
  },
  {
    role: {
      pt: "Desenvolvedor Web Freelance",
      en: "Freelance Web Developer",
    },
    company: "Projetos Independentes",
    period: {
      pt: "2022 – Atual",
      en: "2022 – Present",
    },
    current: true,
    description: {
      pt: [
        "Desenvolvimento de e-commerces personalizados com integração de meios de pagamento e painéis administrativos.",
        "Criação de sistemas de gestão empresarial (ERP) com controle de estoque, cadastro de clientes e relatórios financeiros.",
        "Implementação de soluções full stack com React, Node.js e PostgreSQL, com deploy em ambientes de produção.",
      ],
      en: [
        "Development of custom e-commerce platforms with payment integration and admin panels.",
        "Creation of business management systems (ERP) with inventory control, client registration, and financial reports.",
        "Implementation of full stack solutions with React, Node.js, and PostgreSQL, deployed to production environments.",
      ],
    },
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL"],
  },
];

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: {
      pt: "Plataforma de e-commerce personalizada com integração de meios de pagamento, catálogo de produtos, carrinho de compras e painel administrativo completo para gestão de pedidos e estoque.",
      en: "Custom e-commerce platform with payment gateway integration, product catalog, shopping cart, and a full admin panel for order and inventory management.",
    },
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    title: "ERP System",
    description: {
      pt: "Sistema de gestão empresarial completo com módulos de controle de estoque, cadastro de clientes e fornecedores, emissão de notas fiscais e relatórios financeiros.",
      en: "Comprehensive ERP system with inventory control, client and supplier management, invoice issuance, and financial reporting modules.",
    },
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "Express"],
  },
  {
    title: "Admin Dashboard",
    description: {
      pt: "Painel administrativo responsivo com autenticação, controle de permissões por perfil, gráficos analíticos e tabelas de dados com filtros avançados.",
      en: "Responsive admin dashboard with authentication, role-based access control, analytics charts, and data tables with advanced filters.",
    },
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
  },
];

export const education: Education[] = [
  {
    degree: {
      pt: "Bacharelado em Ciência de Dados (cursando)",
      en: "Bachelor's in Data Science (in progress)",
    },
    institution: "UNIVESP – Universidade Virtual do Estado de São Paulo",
    period: "2025 – 2029",
    notes: {
      pt: "Ênfase em estatística, programação, machine learning e análise de dados.",
      en: "Focus on statistics, programming, machine learning, and data analysis.",
    },
  },
  {
    degree: {
      pt: "Bacharelado e Licenciatura em Matemática (incompleto)",
      en: "Bachelor's in Mathematics (incomplete)",
    },
    institution: "UNESP – Universidade Estadual Paulista",
    period: "2019",
    notes: {
      pt: "Base sólida em lógica, álgebra, cálculo e matemática discreta.",
      en: "Strong foundation in logic, algebra, calculus, and discrete mathematics.",
    },
  },
  {
    degree: {
      pt: "Formação Full Stack Web Developer",
      en: "Full Stack Web Developer Bootcamp",
    },
    institution: "Driven Education",
    period: "Jan/2022 – Out/2022",
    notes: {
      pt: "Desenvolvimento web completo com React, Node.js, TypeScript, Prisma, PostgreSQL, MongoDB, Redis, Docker e AWS. Testes unitários, de integração e E2E.",
      en: "Full web development with React, Node.js, TypeScript, Prisma, PostgreSQL, MongoDB, Redis, Docker, and AWS. Unit, integration, and E2E testing.",
    },
  },
];
