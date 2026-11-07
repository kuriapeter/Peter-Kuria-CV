import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Network,
  ShieldCheck,
  X,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import workbench from "@/assets/portfolio-workbench.jpg";

const email = "sheriffdigitalsolutions@gmail.com";
const phone = "254111903519";
const github = "https://github.com/kuriapeter";
const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
];

type Project = {
  number: string;
  category: string;
  name: string;
  summary: string;
  technologies: string[];
  highlights: string[];
  live?: string;
  source?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    category: "PUBLIC SERVICE · FULL-STACK WEB",
    name: "Murang’a County Service Request System",
    summary:
      "A public-service request platform concept that lets residents submit a request, follow its progress and see a clearer path to county services.",
    technologies: ["Python", "Flask", "PostgreSQL", "Bootstrap"],
    highlights: [
      "Citizen registration and service request submission",
      "Request categories, location details and optional image upload",
      "Administrative dashboard, status tracking and analytics",
    ],
    live: "https://muranga-service-portal.vercel.app/",
    source: "https://github.com/kuriapeter/muranga-service-portal.git",
    featured: true,
  },
  {
    number: "02",
    category: "FINANCE · WEB APPLICATION",
    name: "Company Finance Tracker",
    summary:
      "A financial management application for organizing company finances, monitoring budgets and preparing useful reports.",
    technologies: ["Python", "Flask", "MySQL"],
    highlights: [
      "Role-based access for different team responsibilities",
      "Financial dashboards and budget monitoring",
      "Reporting and payroll-related functionality",
    ],
  },
  {
    number: "03",
    category: "EDUCATION · WEB APPLICATION",
    name: "School Management System",
    summary:
      "A web application concept for organizing school information and supporting everyday administrative activities.",
    technologies: ["React", "Node.js", "MySQL"],
    highlights: ["School information management", "Administrative support"],
  },
  {
    number: "04",
    category: "BUSINESS · PAYROLL",
    name: "Payroll Overview Module",
    summary:
      "A concise payroll monitoring module built to surface key payroll information, performance indicators and helpful alerts.",
    technologies: ["Web application", "KPI reporting"],
    highlights: ["Payroll overview", "KPI tracking", "Automated alerts"],
  },
  {
    number: "05",
    category: "SELECTED WEB WORK",
    name: "More web development",
    summary:
      "Additional work exploring Django, Flask and front-end web development, including InclusiFit, KMH Website and Women’s Protection Application.",
    technologies: ["Django", "Flask", "HTML", "CSS", "JavaScript"],
    highlights: ["InclusiFit", "KMH Website", "Women’s Protection Application"],
  },
];

const experience = [
  {
    period: "CURRENT",
    title: "Cyber & E-commerce / Pickup Station Assistant",
    organization: "Customer and digital services",
    details: [
      "Provide printing, photocopying, scanning and document processing services.",
      "Assist customers with online government services, including KRA, NTSA and eCitizen processes.",
      "Handle enquiries and digital service requests while supporting pickup operations and parcel handling.",
    ],
  },
  {
    period: "PREVIOUS ROLE",
    title: "Fibre Technician",
    organization: "SNET Internet",
    details: [
      "Installed and maintained fibre internet connections.",
      "Diagnosed connectivity problems and troubleshot network equipment.",
      "Helped customers resolve internet connectivity issues.",
    ],
  },
  {
    period: "MAY — JUL 2025",
    title: "IT Attachment Trainee",
    organization: "Kenneth Matiba Eye & Dental Hospital · County Government of Murang’a",
    details: [
      "Supported day-to-day ICT operations and routine technical activities.",
      "Assisted with computer troubleshooting and basic staff support.",
    ],
  },
];

const skillGroups: { icon: LucideIcon; title: string; skills: string[] }[] = [
  {
    icon: Code2,
    title: "Programming & web",
    skills: ["Python", "Flask", "Django", "HTML5", "CSS3", "JavaScript", "React", "MySQL", "PostgreSQL"],
  },
  {
    icon: BriefcaseBusiness,
    title: "IT support & systems",
    skills: ["Hardware & software troubleshooting", "Windows", "Software setup", "Technical support", "Computer maintenance"],
  },
  {
    icon: Network,
    title: "Networking",
    skills: ["LAN / WAN fundamentals", "Router & switch fundamentals", "Network troubleshooting", "IP configuration", "Fibre connectivity", "Wi-Fi support"],
  },
  {
    icon: ShieldCheck,
    title: "Security & digital",
    skills: ["Endpoint security fundamentals", "Cybersecurity practices", "Network security awareness", "Graphic design", "Adobe Illustrator", "Microsoft Office", "Customer support"],
  },
];

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow"><span>{index}</span> / {eyebrow}</p>
      <div className="section-heading-row">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const senderEmail = String(form.get("email") ?? "").trim();
    const subject = String(form.get("subject") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const body = `Name: ${name}\nEmail: ${senderEmail}\n\n${message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="topline"><div className="site-container topline-inner"><span>NAKURU, KENYA</span><span>OPEN TO IT & SOFTWARE OPPORTUNITIES <span className="status-dot" aria-hidden="true" /></span></div></div>

      <header className="site-header">
        <div className="site-container nav-inner">
          <a className="wordmark" href="#home" aria-label="Peter Ndung’u Kuria home">
            <span className="wordmark-mark">PK<span>.</span></span>
            <span className="wordmark-name">Peter Ndung’u Kuria<small>IT PROFESSIONAL</small></span>
          </a>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
            <a href="#contact" className="nav-contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight aria-hidden="true" /></a>
          </nav>
          <Button variant="ghost" size="icon" className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      <main id="main">
        <section className="hero-section" id="home" aria-labelledby="hero-title">
          <div className="site-container hero-layout">
            <div className="hero-copy">
              <p className="hero-kicker"><span className="status-dot" aria-hidden="true" /> INFORMATION TECHNOLOGY · SOFTWARE · SUPPORT</p>
              <h1 id="hero-title">Building technology solutions<span>.</span><br /><span className="hero-title-outline">Solving real-world problems.</span></h1>
              <p className="hero-description">I’m Peter Ndung’u Kuria, an IT graduate who brings software development, networking and hands-on technical support together to make technology work for people.</p>
              <div className="hero-actions">
                <Button asChild className="button-primary"><a href="#projects">Explore my work <ArrowRight aria-hidden="true" /></a></Button>
                <Button asChild variant="outline" className="button-outline"><a href="#contact">Contact me <ArrowUpRight aria-hidden="true" /></a></Button>
              </div>
              <a className="hero-scroll" href="#about"><span className="scroll-icon"><ArrowDown aria-hidden="true" /></span> SCROLL TO EXPLORE</a>
            </div>
            <div className="hero-visual">
              <img src={workbench} alt="Laptop displaying code beside a network switch and fibre cables" width={1536} height={1024} fetchPriority="high" />
              <div className="image-caption"><span className="status-dot" aria-hidden="true" /> PRACTICAL THINKING. REAL-WORLD TECHNOLOGY.</div>
              <div className="hero-id"><span>BASED IN</span><strong>Nakuru, Kenya</strong><span>BUILDING WHAT’S NEXT</span></div>
            </div>
          </div>
          <div className="hero-bottom site-container"><span>PYTHON&nbsp; / &nbsp;NETWORKING&nbsp; / &nbsp;IT SUPPORT</span><a href="#projects">SELECTED WORK <ArrowDown aria-hidden="true" /></a></div>
        </section>

        <section className="about-section section-light" id="about" aria-labelledby="about-title">
          <div className="site-container">
            <SectionHeading index="01" eyebrow="A LITTLE ABOUT ME" title="Practical skills. People-first thinking." description="A versatile IT professional who enjoys solving problems at the intersection of technology, service and business." />
            <div className="about-grid">
              <div className="about-copy"><p className="about-lead" id="about-title">I turn technical ideas into useful, working solutions.</p><p>A Zetech University IT graduate with practical experience across software development, computer troubleshooting, network support and fibre connectivity. I combine a solid technical foundation with the confidence to work directly with customers and their real needs.</p><p>From building web applications to helping people access digital services, I’m motivated by technology that makes everyday work more reliable and accessible. I keep learning, take ownership and bring an entrepreneurial spirit to every challenge.</p><a className="inline-link" href="#experience">Explore my experience <ArrowRight aria-hidden="true" /></a></div>
              <div className="about-aside"><p className="about-aside-label">HOW I WORK</p><div className="approach-row"><span>01</span><div><strong>Understand the problem</strong><p>Listen first. Get clear on what needs to work better.</p></div></div><div className="approach-row"><span>02</span><div><strong>Build & troubleshoot</strong><p>Apply practical technical skills to move things forward.</p></div></div><div className="approach-row"><span>03</span><div><strong>Support people</strong><p>Deliver clear, considerate help all the way through.</p></div></div><div className="about-education"><GraduationCap aria-hidden="true" /><span>BS Information Technology<small>Zetech University · 2022 — 2025</small></span></div></div>
            </div>
          </div>
        </section>

        <section className="projects-section section-dark" id="projects" aria-labelledby="projects-title">
          <div className="site-container">
            <SectionHeading index="02" eyebrow="SELECTED WORK" title="Projects with a purpose." description="Applications and ideas built around practical needs. Lead project first." />
            <div className="sr-only" id="projects-title">Selected software and web projects</div>
            <div className="featured-project">
              <div className="featured-meta"><span>FEATURED PROJECT</span><span className="featured-number">{projects[0].number} / 05</span></div>
              <div className="featured-grid"><div className="featured-title-block"><span className="project-category">{projects[0].category}</span><h3>{projects[0].name}</h3><p>{projects[0].summary}</p><div className="project-actions"><Button asChild className="button-primary"><a href={projects[0].live} target="_blank" rel="noreferrer">Visit live site <ExternalLink aria-hidden="true" /></a></Button><a className="project-source" href={projects[0].source} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> Source code <ArrowUpRight aria-hidden="true" /></a></div></div><div className="featured-details"><span className="details-label">WHAT IT DOES</span><ul>{projects[0].highlights.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul><span className="details-label technologies-label">BUILT WITH</span><div className="technology-list">{projects[0].technologies.map((item) => <span key={item}>{item}</span>)}</div></div></div>
            </div>
            <div className="project-grid">{projects.slice(1).map((project) => <article className="project-card" key={project.number}><div className="project-card-top"><span>{project.number} / 05</span><span>{project.category}</span></div><h3>{project.name}</h3><p>{project.summary}</p><div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><ul className="project-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><div className="project-card-footer">{project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live site <ArrowUpRight aria-hidden="true" /></a> : <span>SELECTED WORK</span>}{project.source && <a href={project.source} target="_blank" rel="noreferrer" aria-label={`View source for ${project.name}`}><Github aria-hidden="true" /></a>}</div></article>)}</div>
          </div>
        </section>

        <section className="experience-section section-light" id="experience" aria-labelledby="experience-title">
          <div className="site-container"><SectionHeading index="03" eyebrow="ON THE GROUND" title="Experience that meets people where they are." description="Hands-on work across customer service, internet connectivity and day-to-day IT support." /><div className="experience-list" id="experience-title">{experience.map((role) => <article className="experience-item" key={role.title}><div className="experience-period"><span className={role.period === "CURRENT" ? "experience-current" : ""}>{role.period === "CURRENT" && <i aria-hidden="true" />}{role.period}</span></div><div className="experience-main"><h3>{role.title}</h3><p className="experience-org">{role.organization}</p><ul>{role.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div><ChevronRight className="experience-chevron" aria-hidden="true" /></article>)}</div></div>
        </section>

        <section className="venture-section section-dark" id="sheriff" aria-labelledby="venture-title"><div className="site-container venture-layout"><div className="venture-index"><span>04 / ENTREPRENEURSHIP</span><div className="venture-monogram">SD<span>.</span></div><span>INDEPENDENT INITIATIVE</span></div><div className="venture-content"><p className="section-eyebrow"><span>SHERIFF DIGITAL SOLUTIONS</span></p><h2 id="venture-title">We Fix It.<br />We Protect It.<br /><span>We Care.</span></h2><p className="venture-description">A digital services initiative focused on ICT support, graphic design, computer services and online assistance—with people at the centre of every solution.</p><div className="venture-services"><span>ICT support</span><span>Graphic design</span><span>Computer troubleshooting</span><span>Digital services</span><span>Custom apparel coordination</span></div><div className="venture-contact"><a href={`mailto:${email}`}><Mail aria-hidden="true" />{email}<ArrowUpRight aria-hidden="true" /></a><a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />WhatsApp <ArrowUpRight aria-hidden="true" /></a></div></div></div></section>

        <section className="skills-section section-dark" id="skills" aria-labelledby="skills-title"><div className="site-container"><SectionHeading index="05" eyebrow="TOOLKIT" title="Skills I bring to the table." description="A practical range built through study, hands-on experience and a habit of continued learning." /><div className="sr-only" id="skills-title">Technical skills</div><div className="skills-grid">{skillGroups.map(({ icon: Icon, title, skills }) => <article className="skill-card" key={title}><div className="skill-card-heading"><Icon aria-hidden="true" /><h3>{title}</h3><ArrowUpRight aria-hidden="true" /></div><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div><div className="skills-addendum"><div><span>LANGUAGES</span><strong>English <i>Fluent</i><b>/</b> Kiswahili <i>Fluent</i></strong></div><div><span>ALSO ME</span><strong>Football <b>/</b> Community service <b>/</b> Emerging tech</strong></div></div></div></section>

        <section className="credentials-section section-light" id="education" aria-labelledby="credentials-title"><div className="site-container"><SectionHeading index="06" eyebrow="FOUNDATIONS" title="Education & certifications." /><div className="credentials-grid" id="credentials-title"><article className="education-block"><span className="credential-label">EDUCATION</span><div className="credential-item"><GraduationCap aria-hidden="true" /><div><h3>Bachelor of Science in Information Technology</h3><p>Zetech University</p><span>SEPTEMBER 2022 — APRIL 2025</span></div></div><div className="credential-item"><GraduationCap aria-hidden="true" /><div><h3>Kenya Certificate of Secondary Education</h3><p>Gituru Secondary School</p><span>2021 · MEAN GRADE C+</span></div></div></article><article className="certification-block"><span className="credential-label">CERTIFICATIONS</span><ul><li><span>01</span><div><strong>Endpoint Security</strong><small>Cisco Networking Academy</small></div><ArrowUpRight aria-hidden="true" /></li><li><span>02</span><div><strong>Transition to Web3</strong><small>Rise In Academy</small></div><ArrowUpRight aria-hidden="true" /></li><li><span>03</span><div><strong>Computer Applications</strong><small>Vosky Tech Computer Training Centre</small></div><ArrowUpRight aria-hidden="true" /></li></ul></article></div></div></section>

        <section className="contact-section section-dark" id="contact" aria-labelledby="contact-title"><div className="site-container contact-layout"><div className="contact-copy"><SectionHeading index="07" eyebrow="GET IN TOUCH" title="Have a challenge in mind?" description="Open to IT support roles, software development opportunities and practical collaborations." /><a className="contact-email" href={`mailto:${email}`}>{email}<ArrowUpRight aria-hidden="true" /></a><a className="contact-phone" href={`tel:+${phone}`}>+254 111 903 519 <span>PHONE / WHATSAPP</span></a><a className="contact-location" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" />Nakuru, Kenya <ArrowUpRight aria-hidden="true" /></a><a className="contact-github" href={github} target="_blank" rel="noreferrer"><Github aria-hidden="true" />View GitHub profile <ArrowUpRight aria-hidden="true" /></a></div><form className="contact-form" onSubmit={handleContact}><div className="form-heading"><span>01 — 04</span><h3>Send a message</h3></div><label htmlFor="contact-name">Your name</label><Input id="contact-name" name="name" autoComplete="name" placeholder="Name" required /><div className="form-row"><div><label htmlFor="contact-email">Email address</label><Input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></div><div><label htmlFor="contact-subject">Subject</label><Input id="contact-subject" name="subject" placeholder="What’s it about?" required /></div></div><label htmlFor="contact-message">Message</label><Textarea id="contact-message" name="message" placeholder="Tell me a little about it…" required /><div className="form-footer"><Button type="submit" className="button-primary">{sent ? "Open email app again" : "Send message"} <ArrowRight aria-hidden="true" /></Button>{sent && <span className="form-note">Your email app should open with your message ready.</span>}</div></form></div></section>
      </main>

      <footer className="site-footer"><div className="site-container"><div className="footer-main"><a className="wordmark footer-wordmark" href="#home"><span className="wordmark-mark">PK<span>.</span></span><span className="wordmark-name">Peter Ndung’u Kuria<small>INFORMATION TECHNOLOGY · SOFTWARE · SUPPORT</small></span></a><p>Building solutions<br />through technology.</p><div className="footer-links"><a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github aria-hidden="true" /></a><a href={`mailto:${email}`} aria-label="Email"><Mail aria-hidden="true" /></a><a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle aria-hidden="true" /></a><a href="#home" aria-label="Back to top"><ArrowDownToLine aria-hidden="true" /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} PETER NDUNG’U KURIA</span><span>NAKURU, KENYA</span><a href="#home">BACK TO TOP ↑</a></div></div></footer>
    </div>
  );
};

export default Index;