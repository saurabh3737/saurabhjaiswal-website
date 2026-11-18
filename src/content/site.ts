export const site = {
  name: "Saurabh Jaiswal",
  url: "https://www.saurabhjaiswal.com",

  role: "Freelance AI Consultant & AI Strategy Advisor",
  skills: "AI · Python · AWS · Azure · GenAI",
  tagline: "AI strategy that ships to production.",

  description:
    "Saurabh Jaiswal is a freelance AI consultant and AI strategy advisor based in Belgium, working worldwide. 15+ years across AI, Python, AWS and Azure for Amazon, KBC, ING, JPMorgan Chase and DRDO research. Founder of AIMates and author of AI for Real Work.",

  email: "saurabh.jaiswal37@gmail.com",

  location: {
    label: "Belgium · working worldwide",
    country: "BE",
  },

  availability: "Open to freelance engagements, partnerships and speaking",

  // Put the PDF in public/resume/ and set the path here to show the download buttons.
  resumeUrl: "",

  book: {
    title: "AI for Real Work",
    subtitle: "How to Think, Decide, and Build with AI",
    amazonUrl: "https://www.amazon.com/dp/B0GP9QF3YZ",
    formats: ["Kindle", "Paperback", "Hardcover"],
    pages: 237,
    published: "March 2026",
    datePublished: "2026-03-09",
  },

  social: {
    linkedin: "https://www.linkedin.com/in/saurabh-jaiswal-ai/",
    github: "https://github.com/saurabh3737",
    x: "https://twitter.com/saurabh3737",
    python: "https://www.python.org/users/saurabh37/",
  },

  ventures: {
    aimates: "https://www.aimates.org",
    aimatesVision: "https://www.aimates.org/vision",
    blogmates: "https://www.blogmates.org",
    pythonmates: "https://www.pythonmates.com",
  },

  images: {
    hero: "/images/home/saurabh-hero-composition.png",
    portrait: "/images/about/saurabh-jaiswal-suit.jpg",
    bookCover: "/images/book/ai-for-real-work-3d_old2.png",
    aimatesMug: "/images/brand/aimates-mug.png",
  },
} as const;

export type LeadReason =
  | "consulting"
  | "aimates"
  | "speaking"
  | "other";

export const leadReasons: {
  id: LeadReason;
  label: string;
  subject: string;
}[] = [
  {
    id: "consulting",
    label: "Freelance consulting / AI advisory",
    subject: "Consulting enquiry",
  },
  {
    id: "aimates",
    label: "AIMates partnership",
    subject: "AIMates partnership",
  },
  {
    id: "speaking",
    label: "Speaking, training or workshop",
    subject: "Speaking / workshop invitation",
  },
  {
    id: "other",
    label: "Something else",
    subject: "Hello",
  },
];

export function contactHref(reason: LeadReason) {
  return `/contact/?reason=${reason}`;
}

export const ctas = {
  bookCall: {
    label: "Book a call",
    longLabel: "Book a discovery call",
    href: contactHref("consulting"),
  },
  partner: {
    label: "Partner with AIMates",
    href: contactHref("aimates"),
  },
  speak: {
    label: "Invite me to speak",
    href: contactHref("speaking"),
  },
} as const;

export const navItems = [
  { label: "Work With Me", href: "/work-with-me/" },
  { label: "Case Studies", href: "/work/" },
  { label: "Speaking", href: "/speaking/" },
  { label: "AIMates", href: "/aimates/" },
  { label: "Book", href: "/book/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
] as const;

export const footerColumns = [
  {
    title: "Work with me",
    links: [
      { label: "Services", href: "/work-with-me/" },
      { label: "Case studies", href: "/work/" },
      { label: "Experience", href: "/experience/" },
      { label: "Book a call", href: contactHref("consulting") },
    ],
  },
  {
    title: "Ideas & talks",
    links: [
      { label: "Speaking", href: "/speaking/" },
      { label: "AI for Real Work", href: "/book/" },
      { label: "Invite me to speak", href: contactHref("speaking") },
    ],
  },
  {
    title: "Building",
    links: [
      { label: "AIMates", href: "/aimates/" },
      { label: "My ventures journey", href: "/aimates/#venture-journey" },
      { label: "Partner with AIMates", href: contactHref("aimates") },
      { label: "About me", href: "/about/" },
    ],
  },
] as const;
