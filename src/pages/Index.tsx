import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, GraduationCap, Briefcase, Award, Languages, Shield, User } from "lucide-react";

const Index = () => {
  const contact = {
    address: "Nakuru, Kenya",
    phone: "0111 903 519",
    email: "kuriapeterndungu@gmail.com",
  };

  const education = [
    { period: "Sept 2022 – Present", school: "Zetech University, Kenya", award: "Bachelor of Science in Information Technology" },
    { period: "2022", school: "Gituru Secondary School", award: "KCSE (Mean Grade: C+)" },
  ];

  const certifications = [
    { period: "May 2022 – Jul 2022", org: "Vosky Tech Computer Training Centre", title: "Certification in Computer Applications" },
    { period: "Jan 2024 – Feb 2024", org: "Rise In Academy", title: "Certification in Transition to Web3" },
    { period: "Nov 2024 – Mar 2025", org: "Cisco Networking Academy (Zetech University)", title: "Certification in Endpoint Security" },
  ];

  const skills = [
    "Network troubleshooting & router configuration",
    "OS installation & activation (Windows, Linux)",
    "PC diagnostics & maintenance",
    "Cybersecurity basics (Endpoint Security, Firewall Configuration)",
    "HTML, CSS, JavaScript, Python, MySQL, Flask",
    "Website hosting and domain management",
    "Data backup and recovery procedures",
    "Version control using Git & GitHub",
    "Network cabling and physical infrastructure setup",
    "Remote desktop support and troubleshooting",
    "Cybersecurity awareness training for end-users",
    "Database design and optimization (MySQL)",
    "Mobile app testing and debugging (Android Studio)",
    "Microsoft Excel data analysis (pivot tables, charts)",
  ];

  const personalSkills = [
    "Strong communication & presentation skills",
    "Problem-solving & decision-making",
    "Team collaboration & adaptability",
    "Entrepreneurial and self-driven mindset",
    "Quick learner and adaptable to new technologies",
  ];

  const referees = [
    { name: "Mr. John Mbaruku", role: "Teacher, Mwiteithie", phone: "0725 721 306" },
    { name: "Madam Hellen Nyambura", role: "Lecturer, Zetech University", phone: "0701 224 160" },
    { name: "Mr. David Kanyi", role: "Head, ICT & Engineering Dept., Zetech University", phone: "0723 054 541" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <a href="#home" className="font-display text-xl font-semibold story-link">Peter Ndung’u Kuria</a>
          <div className="hidden gap-6 md:flex">
            {[
              { href: "#about", label: "About" },
              { href: "#education", label: "Education" },
              { href: "#experience", label: "Experience" },
              { href: "#skills", label: "Skills" },
              { href: "#referees", label: "Referees" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground story-link">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="home" className="bg-hero">
        <section className="container mx-auto py-20 md:py-28 text-center">
          <h1 className="text-gradient font-display text-4xl leading-tight md:text-6xl md:leading-tight animate-enter">
            Peter Ndung’u Kuria
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground animate-fade-in">
            Motivated IT student skilled in networking, system administration, web development, and IT support.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {contact.address}</span>
            <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {contact.phone}</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> {contact.email}</span>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Button asChild>
              <a href={`mailto:${contact.email}`}>Email Me</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href={`tel:+254111903519`}>Call</a>
            </Button>
          </div>
        </section>

        <section id="about" className="container mx-auto py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><User className="h-5 w-5" /> Personal Details</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground grid gap-2">
                <div className="flex justify-between"><span>Date of birth</span><span>18th August 2003</span></div>
                <div className="flex justify-between"><span>Sex</span><span>Male</span></div>
                <div className="flex justify-between"><span>Nationality</span><span>Kenyan</span></div>
                <div className="flex justify-between"><span>Religion</span><span>Christian</span></div>
                <div className="flex justify-between"><span>Residence</span><span>Nakuru, Kenya</span></div>
                <div className="flex justify-between"><span>Marital status</span><span>Single</span></div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5" /> Professional Summary</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Motivated Information Technology student with strong technical knowledge in networking, system administration, web development, and IT support. Skilled in diagnosing and resolving hardware/software issues, with additional training in cybersecurity, Web3, and computer applications. Passionate about applying technology to solve real-world problems and enhance organizational productivity.
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="education" className="container mx-auto py-12 md:py-16">
          <h2 className="font-display text-2xl mb-6">Education</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((ed) => (
              <Card key={ed.school} className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-base">
                    <span className="inline-flex items-center gap-2"><GraduationCap className="h-5 w-5" /> {ed.school}</span>
                    <span className="text-xs text-muted-foreground">{ed.period}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{ed.award}</CardContent>
              </Card>
            ))}
          </div>

          <h3 className="font-display text-xl mt-10 mb-4">Other Education Qualifications</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {certifications.map((c) => (
              <Card key={c.title} className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-base">
                    <span className="inline-flex items-center gap-2"><Award className="h-5 w-5" /> {c.title}</span>
                    <span className="text-xs text-muted-foreground">{c.period}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{c.org}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="experience" className="container mx-auto py-12 md:py-16">
          <h2 className="font-display text-2xl mb-6">Working Experience</h2>
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span className="inline-flex items-center gap-2"><Briefcase className="h-5 w-5" /> IT Attachment – Kenneth Matiba Eye and Dental Hospital</span>
                <span className="text-xs text-muted-foreground">May 2025 – Jul 2025</span>
              </CardTitle>
              <p className="text-xs text-muted-foreground">County Government of Murang’a</p>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>Configured and maintained routers and network connections for hospital systems.</li>
                <li>Installed and activated Windows OS and Microsoft Office suites.</li>
                <li>Diagnosed and repaired hardware/software issues on multiple PCs.</li>
                <li>Provided IT support to staff, ensuring minimal downtime.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-scale mt-6">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span className="inline-flex items-center gap-2"><Briefcase className="h-5 w-5" /> Freelance IT Support</span>
                <span className="text-xs text-muted-foreground">2023 – Present</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>Assisted small businesses and individuals in troubleshooting network and system issues.</li>
                <li>Designed and deployed websites using HTML, CSS, and Python Flask.</li>
                <li>Set up secure Wi‑Fi networks and trained users on safe internet practices.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-scale mt-6">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span className="inline-flex items-center gap-2"><Briefcase className="h-5 w-5" /> Academic Projects – Zetech University</span>
                <span className="text-xs text-muted-foreground">2022 – Present</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>Developed a Company Finance Tracker Website integrating MySQL database for user roles and permissions.</li>
                <li>Built a Branching Storyline Website with HTML, CSS, and SQL backend.</li>
                <li>Implemented M‑Pesa STK Push payment integration in a Flask application.</li>
                <li>Created a Payroll Overview module with automated alerts and KPI tracking.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="skills" className="container mx-auto py-12 md:py-16">
          <h2 className="font-display text-2xl mb-6">Skills</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <Badge key={s} variant="secondary">{s}</Badge>
                ))}
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>Personal Skills</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {personalSkills.map((s) => (
                  <Badge key={s} variant="secondary">{s}</Badge>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Languages className="h-5 w-5" /> Spoken & Written Languages</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <Badge>English (Fluent)</Badge>
                <Badge>Kiswahili (Fluent)</Badge>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>Hobbies</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <Badge variant="outline">Playing football</Badge>
                <Badge variant="outline">Community volunteer work</Badge>
                <Badge variant="outline">Networking and meeting new people</Badge>
                <Badge variant="outline">Learning emerging technologies</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="referees" className="container mx-auto py-12 md:py-16">
          <h2 className="font-display text-2xl mb-6">Referees</h2>
          <div className="max-w-2xl">
            <Card className="hover-scale">
              <CardContent className="text-sm text-muted-foreground p-6">
                Referees available upon request.
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="container mx-auto py-12 md:py-20">
          <Card className="max-w-3xl mx-auto hover-scale" aria-labelledby="contact-heading">
            <CardHeader>
              <CardTitle id="contact-heading">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4 text-sm text-muted-foreground">
              <p className="text-center max-w-prose">
                I'm open to internships, attachments, and entry-level opportunities in IT where I can contribute and grow.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" /> {contact.email}
                </a>
                <span className="hidden md:inline">•</span>
                <a href={`tel:+254111903519`} className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" /> {contact.phone}
                </a>
                <span className="hidden md:inline">•</span>
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Nakuru, Kenya</span>
              </div>
              <div className="mt-2 flex gap-3">
                <Button asChild>
                  <a href={`mailto:${contact.email}`}>Email Me</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href={`tel:+254111903519`}>Call</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Peter Ndung’u Kuria. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;

