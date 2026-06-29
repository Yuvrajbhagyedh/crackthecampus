import type { IconName } from "@/components/ui/Icon";

export type Feature = {
  icon: IconName;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: "target",
    title: "Adaptive Mock Tests",
    description:
      "Full-length, timed mocks that adjust difficulty to your level and mirror the exact pattern of TCS, Infosys, Wipro and 40+ recruiters.",
  },
  {
    icon: "code",
    title: "Coding & DSA Practice",
    description:
      "1,200+ curated problems with an in-browser editor, hidden test cases and editorial walkthroughs for every difficulty band.",
  },
  {
    icon: "chart",
    title: "Aptitude Mastery",
    description:
      "Quantitative, logical and verbal modules broken into bite-sized concepts, shortcuts and topic-wise accuracy tracking.",
  },
  {
    icon: "mic",
    title: "AI Mock Interviews",
    description:
      "Practice HR and technical rounds with instant feedback on clarity, pace and content, plus a library of real interview questions.",
  },
  {
    icon: "spark",
    title: "Personalised Roadmaps",
    description:
      "Tell us your target role and timeline; we generate a day-by-day study plan that adapts as your strengths and gaps change.",
  },
  {
    icon: "shield",
    title: "Resume & ATS Review",
    description:
      "Build a recruiter-ready resume with a guided editor and an ATS scanner that scores keywords against each job description.",
  },
];

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export const stats: Stat[] = [
  { value: "2.4L+", label: "Students prepared", detail: "across 900+ campuses" },
  { value: "18,500+", label: "Placements landed", detail: "in the last 12 months" },
  { value: "92%", label: "Improved test scores", detail: "within their first month" },
  { value: "₹14.2 LPA", label: "Highest package", detail: "secured by a learner" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accent: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I went from clearing zero aptitude rounds to cracking five. The topic-wise analytics showed me exactly where I was losing marks, and the daily plan kept me consistent.",
    name: "Ananya Reddy",
    role: "Placed as SDE-1 at a product company",
    initials: "AR",
    accent: "from-brand-500 to-brand-700",
  },
  {
    quote:
      "The coding tracks felt like the real test environment. By placement season I had solved every pattern at least twice — the on-campus drive felt familiar instead of scary.",
    name: "Rohan Mehta",
    role: "Computer Science, transitioned to backend dev",
    initials: "RM",
    accent: "from-accent-500 to-brand-500",
  },
  {
    quote:
      "Mock interviews were a turning point. The feedback on how I was structuring answers helped me sound confident, and I converted my dream internship into a PPO.",
    name: "Sneha Iyer",
    role: "Intern → full-time at a fintech firm",
    initials: "SI",
    accent: "from-brand-600 to-accent-500",
  },
  {
    quote:
      "As a tier-3 college student I never had access to good mentors. CrackTheCampus levelled the field — structured prep, real questions, and a community that pushes you.",
    name: "Karthik Nair",
    role: "First placement offer in his batch",
    initials: "KN",
    accent: "from-brand-400 to-brand-600",
  },
];

export type Company = {
  name: string;
  // monogram-style wordmarks keep the section trademark-safe while still recognisable
  short: string;
};

export const companies: Company[] = [
  { name: "Infosys", short: "Infosys" },
  { name: "TCS", short: "TCS" },
  { name: "Wipro", short: "Wipro" },
  { name: "Accenture", short: "Accenture" },
  { name: "Cognizant", short: "Cognizant" },
  { name: "Capgemini", short: "Capgemini" },
  { name: "Deloitte", short: "Deloitte" },
  { name: "Zoho", short: "Zoho" },
];

export type Course = {
  tag: string;
  title: string;
  description: string;
  duration: string;
  modules: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  featured?: boolean;
  highlights: string[];
};

export const courses: Course[] = [
  {
    tag: "Aptitude",
    title: "Aptitude Crash Course",
    description:
      "Master quantitative, logical reasoning and verbal ability with shortcut techniques used by top scorers.",
    duration: "6 weeks",
    modules: 42,
    level: "Beginner",
    highlights: ["120+ timed quizzes", "Concept cheat sheets", "Accuracy analytics"],
  },
  {
    tag: "Placement Track",
    title: "Complete Placement Bootcamp",
    description:
      "An end-to-end track covering DSA, core CS, aptitude and interviews — the flagship path students use to go offer-ready.",
    duration: "16 weeks",
    modules: 96,
    level: "Intermediate",
    featured: true,
    highlights: ["1,200+ coding problems", "Weekly live doubt clearing", "Company-wise mock sets"],
  },
  {
    tag: "Coding",
    title: "DSA Interview Series",
    description:
      "Pattern-based data structures and algorithms with editorials, complexity analysis and FAANG-style problem sets.",
    duration: "10 weeks",
    modules: 64,
    level: "Advanced",
    highlights: ["Pattern playbooks", "In-browser judge", "Contest simulations"],
  },
];
