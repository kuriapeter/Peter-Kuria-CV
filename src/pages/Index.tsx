import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, GraduationCap, Briefcase, Award, Languages, Shield, User } from "lucide-react";

const Index = () => {
  const contact = {
    address: "P.O BOX 4061-20100, Nakuru, Kenya",
    phone: "+254 111 903 519",
    email: "kuriapeterndungu@gmail.com",
  };

  const education = [
    { period: "Sep 2022 – Present", school: "Zetech University", award: "BSc. Information Technology" },
    { period: "2021 – 2022", school: "Gituru Secondary School", award: "KCSE (C+)" },
    { period: "2017 – 2020", school: "Bavuni Secondary School", award: "KCSE (C)" },
    { period: "2009 – 2016", school: "Muriundu Primary School", award: "KCPE (305 marks)" },
  ];

  const certifications = [
    { period: "May 2022 – Jul 2022", org: "Vosky Tech Computer Training Centre", title: "Certification in Computer Applications" },
    { period: "Jan 2024 – Feb 2024", org: "Rise In Academy", title: "Certification in Transition to Web3" },
    { period: "Nov 2024 – Mar 2025", org: "Cisco Networking Academy (Zetech University)", title: "Certification in Endpoint Security" },
  ];

  const skills = [
    "Network troubleshooting",
    "Router configuration",
    "OS installation",
    "Windows & Office activation",
    "PC diagnosing",
  ];

  const personalSkills = [
    "Entrepreneurial mindset",
    "Excellent communication",
    "Fast learner",
    "Interpersonal skills",
    "Self-driven",
    "Adaptability",
    "Decision making",
    "Problem solving",
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
          <a href="#home" className="font-display text-xl font-semibold story-link">Peter Ndung'u Kuria</a>
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
            Peter Ndung'u Kuria
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground animate-fade-in">
            Information Technology professional focused on networking, endpoint security, and practical problem-solving.
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
                <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5" /> Career Objective</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                To pursue a challenging, productive, and rewarding career in Information Technology, applying technical knowledge and problem-solving to create meaningful impact and drive innovation within organizations and across Kenya.
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
                <span className="inline-flex items-center gap-2"><Briefcase className="h-5 w-5" /> Kenneth Matiba Eye and Dental Hospital</span>
                <span className="text-xs text-muted-foreground">May 2025 – Jul 2025</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Attachment under the County Government of Murang’a.
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
                <Badge>English</Badge>
                <Badge>Kiswahili</Badge>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>Hobbies</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <Badge variant="outline">Playing football</Badge>
                <Badge variant="outline">Meeting new people</Badge>
                <Badge variant="outline">Voluntary community work</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="referees" className="container mx-auto py-12 md:py-16">
          <h2 className="font-display text-2xl mb-6">Referees</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {referees.map((r) => (
              <Card key={r.name} className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-base">{r.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>{r.role}</p>
                  <p className="mt-2 inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {r.phone}</p>
                </CardContent>
              </Card>
            ))}
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
        © {new Date().getFullYear()} Peter Ndung'u Kuria. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;

