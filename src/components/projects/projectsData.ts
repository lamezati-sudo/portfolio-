export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  period: string;
  description: string;
  detail?: string;
  impact?: string;
  technologies: string[];
  imageUrl?: string;
  imageAlt?: string;
  githubUrl?: string;
  externalUrl?: string;
  linkLabel?: string;
  requestAccess?: boolean;
}

const asset = (file: string) => `${import.meta.env.BASE_URL}images/${file}`;

export const personalProjects: Project[] = [
  {
    id: 'cad',
    number: '01',
    title: 'AI-native CAD assistant',
    category: 'AI × Engineering',
    period: '2026 · In development',
    description: 'From a reference image to a model you can actually edit.',
    detail: 'An experimental FreeCAD copilot that turns a screenshot into a parametric part. Refine geometry through chat, preview each change, and decide what to accept.',
    impact: 'Editable geometry. Human-reviewed changes.',
    technologies: ['Python', 'FreeCAD', 'AI agents'],
    imageUrl: asset('cad-demo.jpg'),
    imageAlt: 'The SOLIDWORKS mounting-bracket reference used in the CAD assistant demonstration',
    externalUrl: 'https://www.linkedin.com/posts/leonelmezatio_artificialintelligence-cad-engineering-activity-7503967519171346432-PG3A/',
    linkLabel: 'Watch the project demo',
  },
  {
    id: 'hooly',
    number: '02',
    title: 'Hooly AI',
    category: 'Mobile × Applied AI',
    period: '2026 · Published',
    description: 'A little more confidence in every conversation.',
    detail: 'An Android keyboard with context-aware replies in Rizz, Casual, or Formal tones. Grammar help and a local clipboard fit right into the typing flow, with no chat history stored on Hooly’s servers.',
    impact: 'Built, shipped, and used by 850 people.',
    technologies: ['Kotlin', 'Android', 'Android Studio'],
    imageUrl: asset('hooly-keyboard.png'),
    imageAlt: 'Official Hooly screenshot showing the Android keyboard, tone selector, and AI reply button',
    externalUrl: 'https://play.google.com/store/apps/details?id=dev.leonel.hooly',
    linkLabel: 'Explore on Google Play',
  },
  {
    id: 'portfolio',
    number: '03',
    title: 'This portfolio',
    category: 'Web development',
    period: '2026',
    description: 'A home for my work, built with React and TypeScript. Responsive, accessible, and connected with EmailJS.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/lamezati-sudo/portfolio-',
    linkLabel: 'View source',
  },
];

export const academicProjects: Project[] = [
  {
    id: 'wolf-tracker',
    number: '04',
    title: 'Wolf Tracker',
    category: 'Academic project',
    period: 'NC State',
    description: 'A student progress tracking system, with a focus on Java development, automated testing, and continuous integration.',
    technologies: ['Java', 'JUnit', 'Jenkins'],
    requestAccess: true,
    linkLabel: 'Request repository access',
  },
];
