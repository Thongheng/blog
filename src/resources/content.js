import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Thongheng",
  lastName: "Heu",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Offensive Security Engineer",
  avatar: "/images/avatar.jpg",
  email: "thongheng2108@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Security Newsletter</>,
  description: (
    <>
      I occasionally write about cybersecurity, penetration testing, and share insights on the latest
      offensive security techniques and threat intelligence.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/thonghengheu",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/thonghengheu/",
  },
  {
    name: "Twitter",
    icon: "twitter",
    link: "https://twitter.com/thonghengheu",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Breaking security to make it stronger</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Network Pentesting Framework</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Thongheng, an offensive security engineer specializing in penetration testing, vulnerability assessment,
      <br /> and red team operations. I find security weaknesses before attackers do.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Thongheng is an offensive security engineer with a passion for identifying and
        exploiting vulnerabilities. His expertise spans network penetration testing,
        web application security, and red team operations, helping organizations strengthen their
        security posture against evolving threats.
      </>
    ),
  },
  certificates: {
    display: true,
    title: "Certificates",
    certifications: [
      {
        name: "Offensive Security Certified Professional (OSCP)",
        issuer: "Offensive Security",
        date: "2022",
        description: <>Industry-recognized penetration testing certification demonstrating practical skills in identifying and exploiting vulnerabilities.</>,
        link: "https://www.offensive-security.com/pwk-oscp/",
        image: "/images/projects/project-01/cover-01.jpg",
      },
      {
        name: "GIAC Penetration Tester (GPEN)",
        issuer: "SANS Institute",
        date: "2021",
        description: <>Advanced certification validating skills in penetration testing methodologies, tools, and legal issues.</>,
        link: "https://www.giac.org/certification/penetration-tester-gpen",
        image: "/images/projects/project-01/cover-02.jpg",
      },
      {
        name: "Certified Ethical Hacker (CEH)",
        issuer: "EC-Council",
        date: "2020",
        description: <>Certification focusing on ethical hacking tools, techniques, and methodologies to identify vulnerabilities in systems.</>,
        link: "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/",
        image: "/images/projects/project-01/cover-03.jpg",
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Blogs",
  description: `Read what ${person.name} has been up to in the world of cybersecurity`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Security Projects – ${person.name}`,
  description: `Offensive security projects and tools by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work };
