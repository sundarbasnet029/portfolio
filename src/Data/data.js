import testBg from '../Assets/testBg.png';

export const SOCIALS = [
    { id: 'email', name: 'Email', href: 'mailto:hello@sundarbasnet.com', external: false },
    { id: 'x', name: 'Twitter(X)', href: 'https://x.com/', external: true },
    { id: 'linkedIn', name: 'Linkedin', href: 'https://www.linkedin.com/', external: true },
    { id: 'behance', name: 'Behance', href: 'https://www.behance.net/', external: true },
  ];

  export const projectArray = [
    {
      id: "project-1",
      title: "Dialaxy",
      category: "Product Design",
      year: "2026",
      description:
        "A cloud telephony platform redesigned to make business communication simpler and more intuitive.",
      role: "Product Designer",
      duration: "6 months",
      tools: ["Figma", "FigJam", "React"],
  
      heroImage: testBg,
  
      sections: [
        {
          type: "text",
          title: "Overview",
          content:
            "Dialaxy is a cloud-based business communication platform that helps teams manage calls, messages, and customer conversations.",
        },
        {
          type: "image",
          src: "/images/dialaxy-overview.png",
          alt: "Dialaxy product overview",
        },
        {
          type: "text",
          title: "The Problem",
          content:
            "The existing experience had become difficult to navigate as more features and settings were added to the product.",
        },
        {
          type: "image",
          src: "/images/dialaxy-design.png",
          alt: "Dialaxy redesigned interface",
        },
      ],
    },
  
    {
      id: "project-2",
      title: "AirChannel",
      category: "Product Design",
      year: "2026",
      description:
        "An omnichannel communication platform that brings customer conversations into one unified workspace.",
      role: "Product Designer",
      duration: "4 months",
      tools: ["Figma", "FigJam"],
  
      heroImage: testBg,
  
      sections: [
        {
          type: "text",
          title: "Overview",
          content:
            "AirChannel brings conversations from different communication channels into a unified inbox for support and sales teams.",
        },
        {
          type: "image",
          src: "/images/airchannel-inbox.png",
          alt: "AirChannel unified inbox",
        },
        {
          type: "text",
          title: "The Challenge",
          content:
            "Users needed a clear way to manage conversations coming from multiple channels without losing context.",
        },
        {
          type: "image",
          src: "/images/airchannel-design.png",
          alt: "AirChannel interface",
        },
      ],
    },
  
    {
      id: "project-3",
      title: "Assignment Tracker",
      category: "Product Design",
      year: "2025",
      description:
        "An AI-powered student workspace for managing assignments, announcements, and classroom discussions.",
      role: "Product Designer",
      duration: "3 months",
      tools: ["Figma", "FigJam", "React"],
  
      heroImage: testBg,
  
      sections: [
        {
          type: "text",
          title: "Overview",
          content:
            "Assignment Tracker helps students keep track of coursework, deadlines, college announcements, and classroom discussions in one place.",
        },
        {
          type: "image",
          src: "/images/assignment-dashboard.png",
          alt: "Assignment Tracker dashboard",
        },
        {
          type: "text",
          title: "The Problem",
          content:
            "Students often rely on multiple platforms to keep track of assignments, announcements, and conversations.",
        },
        {
          type: "image",
          src: "/images/assignment-flow.png",
          alt: "Assignment Tracker user flow",
        },
      ],
    },
  
    {
      id: "project-4",
      title: "MovieShelf",
      category: "Web Design",
      year: "2025",
      description:
        "A movie marketplace that lets users buy or rent movies from different platforms without another subscription.",
      role: "Product Designer",
      duration: "2 months",
      tools: ["Figma", "React", "Tailwind CSS"],
  
      heroImage: testBg,
  
      sections: [
        {
          type: "text",
          title: "Overview",
          content:
            "MovieShelf is a movie discovery and rental platform designed around one-time purchases instead of recurring subscriptions.",
        },
        {
          type: "image",
          src: "/images/movieshelf-home.png",
          alt: "MovieShelf homepage",
        },
        {
          type: "text",
          title: "The Idea",
          content:
            "Instead of subscribing to multiple streaming services, users can discover a movie and choose where to buy or rent it.",
        },
        {
          type: "image",
          src: "/images/movieshelf-details.png",
          alt: "MovieShelf movie details page",
        },
      ],
    },
  ];