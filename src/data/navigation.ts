export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Courses", href: "#courses" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "Companies", href: "#companies" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "#features" },
      { label: "Test Series", href: "#courses" },
      { label: "Mock Interviews", href: "#features" },
      { label: "Pricing", href: "#courses" },
    ],
  },
  {
    title: "Prepare",
    links: [
      { label: "Aptitude", href: "#courses" },
      { label: "Coding (DSA)", href: "#courses" },
      { label: "Core CS", href: "#courses" },
      { label: "Group Discussions", href: "#features" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#stats" },
      { label: "Success Stories", href: "#testimonials" },
      { label: "Hiring Partners", href: "#companies" },
      { label: "Careers", href: "#footer" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#footer" },
      { label: "Contact Us", href: "#footer" },
      { label: "Privacy Policy", href: "#footer" },
      { label: "Terms of Service", href: "#footer" },
    ],
  },
];
