export const profile = {
  name: 'Om Jee Pandey',
  role: 'Aspiring HR & People Operations Professional',
  headline: 'Building people-centric workplaces through HR, engagement, and strategy.',
  location: 'Patna, Bihar, India',
  email: 'omjeepandey112@gmail.com',
  linkedin: 'https://www.linkedin.com/in/omjeepandey929',
  resumeUrl: '/resume.pdf',
  photoUrl: '/profile_photo.jpg',
  heroRotatingWords: ['HR Intern', 'People Operations', 'Talent Acquisition', 'Employee Engagement', 'Organizational Culture'],
}

export const about = {
  summary:
    'I am an aspiring HR and People Operations professional with a people-first mindset, grounded in recruitment, employee engagement, onboarding, and organizational growth. My experience spans internship work in HR, retail operations, and AI-data research, which has sharpened my communication, analytical thinking, and ability to collaborate across diverse environments.',
  highlights: [
    'HR internship experience across education and learning organizations',
    'Retail operations exposure through a Tata-linked environment',
    'A strong grounding in employee experience, communication, and reliability',
  ],
}

export const experience = [
  {
    title: 'Retail Management Intern',
    company: 'CaratLane – A TATA Product',
    period: 'Sep 2025 – Oct 2025',
    location: 'Patna, Bihar',
    bullets: [
      'Supported customer engagement, merchandising, billing coordination, and backstage retail operations.',
      'Developed a practical understanding of team coordination, service excellence, and people-centered delivery.',
      'Strengthened professionalism, communication, and adaptability in a fast-paced environment.',
    ],
  },
  {
    title: 'Intern, Project VAANI',
    company: 'Google',
    period: 'Jul 2024',
    location: 'Remote / Collaborative',
    bullets: [
      'Contributed to AI-driven language research through data collection and validation.',
      'Worked on quality assurance and attention-to-detail in a research-oriented environment.',
      'Built strong familiarity with accuracy, responsibility, and collaborative execution.',
    ],
  },
  {
    title: 'Human Resources Intern',
    company: 'ADM Education & Welfare Society',
    period: 'May 2024 – Jul 2024',
    location: 'Patna, Bihar',
    bullets: [
      'Assisted with recruitment support, onboarding coordination, and employee engagement initiatives.',
      'Contributed to documentation and day-to-day HR operations with a structured approach.',
      'Learned how thoughtful processes shape employee experience and team culture.',
    ],
  },
  {
    title: 'Human Resources Intern',
    company: 'iLearnings',
    period: 'Jun 2024',
    location: 'Patna, Bihar',
    bullets: [
      'Supported talent acquisition and HR operations activities in a learning-focused environment.',
      'Contributed to employee engagement and collaborative team workflows.',
      'Built confidence in balancing structure, empathy, and execution.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'People & Culture',
    items: [
      {
        label: 'Recruitment',
        value: 92,
        description: 'Identifying talent, matching roles, and supporting a smooth candidate experience.',
      },
      {
        label: 'Onboarding',
        value: 88,
        description: 'Welcoming new hires with clarity, support, and a strong first impression.',
      },
      {
        label: 'Employee Engagement',
        value: 90,
        description: 'Designing initiatives that keep teams motivated, connected, and productive.',
      },
    ],
  },
  {
    title: 'Operations & Insights',
    items: [
      {
        label: 'HR Operations',
        value: 86,
        description: 'Streamlining HR processes so teams can focus on people, not paperwork.',
      },
      {
        label: 'People Analytics',
        value: 82,
        description: 'Using data signals to inform decisions and improve team performance.',
      },
      {
        label: 'Documentation',
        value: 84,
        description: 'Creating accurate records, guides, and reports that teams can trust.',
      },
    ],
  },
  {
    title: 'Communication & Thinking',
    items: [
      {
        label: 'Communication',
        value: 94,
        description: 'Clear, respectful dialogue that keeps stakeholders aligned and engaged.',
      },
      {
        label: 'Teamwork',
        value: 91,
        description: 'Collaborating across roles and departments with empathy and focus.',
      },
      {
        label: 'Problem Solving',
        value: 89,
        description: 'Breaking down issues and finding practical solutions in people-driven systems.',
      },
    ],
  },
  {
    title: 'Business Exposure',
    items: [
      {
        label: 'BFSI Exposure',
        value: 78,
        description: 'Experience within finance-focused environments and customer-centric operations.',
      },
      {
        label: 'Data Analysis',
        value: 80,
        description: 'Reviewing trends and performance to inform HR and process decisions.',
      },
      {
        label: 'Reporting',
        value: 76,
        description: 'Crafting concise insights that leadership can use with confidence.',
      },
    ],
  },
]

export const skills = skillGroups.flatMap((group) => group.items.map((item) => item.label))

export const education = [
  {
    degree: 'Bachelor of Business Administration (BBA)',
    institution: 'International School of Management, Patna',
    period: '2023',
    details: 'Focused on business administration, management fundamentals, and the organizational skills that support HR and people operations work.',
    highlights: [
      'Management principles and team leadership foundations',
      'Business communication and reporting clarity',
      'Process-oriented project work for organizational efficiency',
    ],
  },
  {
    degree: 'Intermediate, Commerce',
    institution: 'RPS College, Patna',
    period: '2021 – 2023',
    details: 'Built a strong foundation in commerce, analytical thinking, and early business exposure that shaped my professional direction.',
    highlights: [
      'Commerce fundamentals with practical business awareness',
      'Analytical reasoning applied to financial contexts',
      'Early exposure to structured workplace thinking',
    ],
  },
]

export const certifications = [
  {
    title: 'Aspire Leaders Program Fellow',
    issuer: 'Aspire Institute',
    date: '2025',
    details: 'Focused on leadership skills, people engagement, and collaborative project outcomes.',
    image: '/certificates/aspire_leaders_program_2025.png',
  },
  {
    title: 'EY Technology Risk Virtual Job Simulation',
    issuer: 'EY via Forage',
    date: '2026',
    details: 'Explored risk assessment, process controls, and business-facing technology workflows.',
    image: '/certificates/ey_technology_risk_simulation.png',
  },
  {
    title: 'Bajaj Finserv HR Workshop',
    issuer: 'Bajaj Finserv',
    date: '2026',
    details: 'Developed practical HR skills in recruitment, onboarding, and workforce communication.',
    image: '/certificates/bajaj_finserv_hr_workshop.png',
  },
  {
    title: 'Bajaj Finserv Beyond Program',
    issuer: 'Bajaj Finserv',
    date: '2026',
    details: 'Built confidence through business exposure and learnings from a leading financial services program.',
    image: '/certificates/bajaj_finserv_beyond.png',
  },
  {
    title: 'Deloitte Australia Data Analytics Job Simulation',
    issuer: 'Deloitte via Forage',
    date: '2026',
    details: 'Worked on analytics-driven problem solving for business operations and reporting.',
    image: '/certificates/deloitte_data_analytics.png',
  },
  {
    title: 'National Financial Literacy Quiz 2025',
    issuer: 'NISM',
    date: '2025',
    details: 'Validated understanding of personal finance, regulation, and responsible decision-making.',
    image: '/certificates/nism_financial_literacy_quiz.png',
  },
  {
    title: 'CaratLane S4U Internship',
    issuer: 'CaratLane – A TATA Product',
    date: '2025',
    details: 'Recognized for retail operations support, customer engagement, and hands-on service delivery.',
    image: '/certificates/caratlane_s4u_internship.png',
  },
  {
    title: 'Project VAANI Internship',
    issuer: 'Google',
    date: '2024',
    details: 'Contributed to AI-driven language research through data collection and quality assurance.',
    image: '/certificates/project_vaani_internship.png',
  },
  {
    title: 'ADM HR Internship Certificate',
    issuer: 'ADM Education & Welfare Society',
    date: '2024',
    details: 'Completed HR internship tasks in recruitment, onboarding coordination, and employee engagement support.',
    image: '/certificates/adm_hr_internship.png',
  },
  {
    title: 'iLearnings HR Internship',
    issuer: 'iLearnings',
    date: '2024',
    details: 'Applied HR operations support and collaboration within a learning-focused environment.',
    image: '/certificates/ilearnings_hr_internship.png',
  },
  {
    title: 'Knowlens Leap Year Insurance Program',
    issuer: 'Knowlens',
    date: '2025',
    details: 'Gained knowledge in insurance operations, policy details, and customer-focused sales concepts.',
    image: '/certificates/knowlens_leap_year_insurance.png',
  },
  {
    title: 'Knowlens Salesman Program',
    issuer: 'Knowlens',
    date: '2025',
    details: 'Completed a practical sales challenge focused on product understanding and customer communication.',
    image: '/certificates/knowlens_salesman.png',
  },
  {
    title: 'Manzil Bancassurance Program',
    issuer: 'Manzil',
    date: '2025',
    details: 'Developed insight into bancassurance products, customer journeys, and financial service delivery.',
    image: '/certificates/manzil_bancassurance.png',
  },
  {
    title: 'McKinsey Forward Program',
    issuer: 'McKinsey',
    date: '2025',
    details: 'Enhanced business awareness and professional readiness through a premier learning program.',
    image: '/certificates/mckinsey_forward_program.png',
  },
]
