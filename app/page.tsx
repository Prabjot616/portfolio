'use client';

import { Mail, ExternalLink, Code2, Award, Briefcase, GraduationCap, ArrowUpRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const AnimatedSignature = () => {
  return (
    <div className="inline-block w-full max-w-4xl">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" className="w-full h-auto" preserveAspectRatio="xMinYMin meet">
        <style>
          {`
            .signature-text {
              font-family: 'Caveat', cursive;
              font-size: 100px;
              fill: transparent;
              stroke: #111111;
              stroke-width: 2.5;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              text-anchor: start;
            }

            .first-name {
              animation: write-and-fill 1.8s ease-in-out forwards;
              animation-delay: 0.2s;
            }

            .last-name {
              animation: write-and-fill 1.5s ease-in-out forwards;
              animation-delay: 1.6s;
            }

            @keyframes write-and-fill {
              50% {
                stroke-dashoffset: 0;
                fill: rgba(17, 17, 17, 0);
              }
              100% {
                stroke-dashoffset: 0;
                fill: #111111;
              }
            }
          `}
        </style>
        <text x="10" y="100" className="signature-text first-name">Prabjot</text>
        <text x="10" y="220" className="signature-text last-name">Kaur</text>
      </svg>
    </div>
  );
};

const personalInfo = {
  name: 'PRABJOT KAUR',
  title: 'Lead Software Engineer',
  email: 'prabjotkaur4@gmail.com',
  linkedin: 'https://www.linkedin.com/in/prabjot-kaur-10b6874b/',
  github: 'https://github.com/Prabjot616',
};

const experience = [
  {
    title: 'Lead Software Engineer',
    company: 'Tech Wishes Solutions',
    location: 'Kolkata, West Bengal, India',
    period: 'Oct 2024 – Present',
    points: [
      'Lead architecture decisions for Shopify app development, full-stack web, mobile (React Native), and AI/agent-based systems',
      'Review Shopify platform updates as they roll out and coordinate technical execution across the engineering team',
      'Handle infrastructure work including server hardening, deployment pipelines, and production troubleshooting',
      'Build tools and systems that improve delivery consistency and velocity for client projects',
    ],
    skills: 'Product Engineering · Team Leadership · API Design · Shopify Apps · AI Agent Systems'
  },
  {
    title: 'Senior Software Engineer',
    company: 'Tech Wishes Solutions',
    location: 'India',
    period: 'Oct 2021 – Sep 2024',
    points: [
      'Built and maintained backend APIs and database systems supporting scalable commerce platforms',
      'Developed Shopify applications and integrations for e-commerce clients',
      'Optimized application architecture and database queries to improve system performance and reliability',
    ],
    skills: 'Full-Stack Development · Shopify APIs · Database Architecture'
  },
  {
    title: 'Software Engineer',
    company: 'Tech Wishes Solutions',
    location: 'India',
    period: 'Aug 2020 – Sep 2021',
    points: [
      'Built backend modules and application features using modern web frameworks',
      'Designed and implemented database schemas and API integrations for client projects',
      'Collaborated with team on e-commerce platform development',
    ],
    skills: 'Backend Development · API Integration · Database Design'
  },
  {
    title: 'Engineering Intern',
    company: 'Tech Wishes Solutions',
    location: 'Kolkata Area, India',
    period: 'Jun 2019 – Jul 2020',
    points: [
      'Assisted in developing and maintaining web application modules',
      'Gained hands-on experience in backend architectures and software engineering practices',
      'Contributed to client projects under senior engineer mentorship',
    ],
    skills: 'Software Development · Backend Systems'
  },
];

const projects = [
  {
    title: 'CrowdGuard: Real-Time Crowd Safety Monitoring',
    subtitle: 'Cohort 2, Google APAC Hackathon',
    description: 'Joint project with colleague Sougata Chattapadhay (submitted under participant name Dhatri). CrowdGuard detects and flags crowd safety risks in real-time using computer vision and generative AI to interpret live video feeds. Runs on Gemini 2.5 Flash via Vertex AI for scene analysis, with Cloud Run for serving, AlloyDB for structured data, and Cloud Storage for media.',
    tech: ['Vertex AI', 'Gemini 2.5 Flash', 'Cloud Run', 'AlloyDB', 'Cloud Storage'],
    colSpan: 'col-span-1 md:col-span-2',
  },
  {
    title: 'Multi-Agent AI SEO/GEO Analysis Pipeline',
    subtitle: 'Top 100 - Google APAC Hackathon',
    description: 'Built a multi-agent AI system on Google Cloud (ADK, Vertex AI, AlloyDB) that analyzes websites and generates comprehensive SEO, GEO, and competitor insights. Placed in top 100 at Google APAC hackathon.',
    tech: ['Google Cloud', 'Vertex AI', 'AlloyDB', 'Python', 'AI Agents'],
    colSpan: 'col-span-1',
  },
  {
    title: 'Shopify App Ecosystem',
    subtitle: 'E-commerce Platform Development',
    description: 'Led architecture and development for Shopify applications serving e-commerce merchants. Coordinated platform updates, team execution, and infrastructure reliability across multiple production apps.',
    tech: ['Shopify APIs', 'React', 'Node.js', 'PostgreSQL'],
    colSpan: 'col-span-1 md:col-span-2',
  },
  {
    title: 'Pomodoro Pulse',
    subtitle: 'Mobile Productivity App',
    description: 'Published a Pomodoro productivity timer mobile application on Google Play Store built with React Native.',
    tech: ['React Native', 'Mobile Development'],
    link: 'https://play.google.com/store/apps/details?id=com.pomodoropulse',
    colSpan: 'col-span-1',
  },
];

const allSkills = [
  'Shopify App Development', 'AI Agent Systems', 'React Native', 'Full-Stack Engineering',
  'Google Cloud Platform', 'Vertex AI', 'AWS', 'Product Engineering',
  'Team Leadership', 'API Design', 'REST APIs', 'Node.js', 'React',
  'Python', 'JavaScript', 'PostgreSQL', 'AlloyDB', 'MySQL',
  'Docker', 'CI/CD', 'Server Hardening', 'Infrastructure', 'Git'
];

const education = [
  {
    degree: 'Master of Computer Applications (MCA), Computer Science',
    school: 'RCC Institute of Information Technology',
    location: 'Kolkata, West Bengal',
    period: '2017 – 2020',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA), Computer Science',
    school: 'Nopany Institute of Professional Studies',
    location: 'Kolkata, West Bengal',
    period: '2014 – 2017',
  },
];

const certifications = [
  { name: 'Google Cloud Gen AI Academy APAC Edition', issuer: 'Google', date: 'Jul 2026', id: '2026H2S07GCGENAIAPACC2-P02586', skills: 'Google Agent Development Kit (ADK)' },
  { name: 'AWS AI Practitioner Challenge', issuer: 'Udacity', date: 'May 2026', skills: 'AI Productivity · Responsible AI' },
  { name: 'Build AI Agents with Enterprise Databases', issuer: 'Google', date: 'Jun 2026', id: '25090841', skills: 'Vertex AI · Google Agent Development Kit (ADK)' },
  { name: 'Software Architecture Foundations', issuer: 'LinkedIn', date: 'Aug 2025', skills: 'Software Architecture' },
  { name: 'Introduction to Artificial Intelligence', issuer: 'LinkedIn', date: 'May 2025', skills: 'Artificial Intelligence (AI)' },
  { name: 'Career Essentials in Generative AI by Microsoft and LinkedIn', issuer: 'Microsoft', date: 'May 2025', skills: 'Prompt Engineering' },
  { name: 'Ethics in the Age of Generative AI', issuer: 'LinkedIn', date: 'Apr 2025', skills: 'Responsible AI · Computer Ethics · Generative AI' },
  { name: 'Learning Microsoft 365 Copilot and Business Chat', issuer: 'LinkedIn', date: 'Apr 2025', skills: 'Office 365 · Microsoft Copilot' },
  { name: 'Streamlining Your Work with Microsoft Copilot', issuer: 'LinkedIn', date: 'Apr 2025', skills: 'AI for Business · AI Productivity · Generative AI' },
  { name: 'Generative AI: The Evolution of Thoughtful Online Search', issuer: 'LinkedIn', date: 'Apr 2025', skills: 'Search Engine Technology · AI for Business' },
  { name: 'What Is Generative AI?', issuer: 'LinkedIn', date: 'Apr 2025', skills: 'Generative AI Tools · Artificial Intelligence (AI)' },
  { name: 'AI Algorithms for Gaming', issuer: 'LinkedIn', date: 'Apr 2025', skills: 'Algorithms' },
  { name: 'SSL Certificates for Web Developers', issuer: 'LinkedIn', date: 'Nov 2023', skills: 'Transport Layer Security (TLS)' },
  { name: 'Learning Docker', issuer: 'LinkedIn', date: 'Jul 2023', skills: 'Docker Products' },
  { name: 'Game Development Foundations: Game-Related Math', issuer: 'LinkedIn', date: 'Apr 2023', skills: 'Game Development' },
  { name: 'Learning 3D Graphics on the Web with Three.js', issuer: 'LinkedIn', date: 'Apr 2023', skills: 'Three.js · 3D Graphics' },
  { name: 'Generative AI Imaging: What Creative Pros Need to Know', issuer: 'LinkedIn', date: 'Apr 2023', skills: 'Conditional Image Generation · Generative AI' },
  { name: 'Nano Tips for Using Generative AI Tools for Better Marketing Outcomes', issuer: 'LinkedIn', date: 'Apr 2023', skills: 'Artificial Intelligence (AI) · Generative AI' },
  { name: 'Game Development for Modern Platforms', issuer: 'Coursera', date: 'Jul 2020', id: 'C5FKFZ22NL38' },
  { name: 'Code Gladiator 2019 Semifinalist', issuer: 'TechGig', date: 'Jun 2019', id: 'THFZbDA3VHB5NEd3eU1ObEhNNGJkQ01nMUlPREo2RjlrejEwc3VGVGVIK0xHa1JIN1hKcVRSTG9UUVNj' },
];

const achievements = [
  'Mentor of the Year 2025-26 – Tech Wishes Solutions',
  'Top 100 Finalist – Google APAC Hackathon (AI/SEO Analysis Pipeline)',
  'AWS AI Practitioner Certified – 2024',
  'Employee of the Year 2022-23 – Tech Wishes Solutions',
  'Star Performer 2020-21 – Tech Wishes Solutions',
  'Employee of the Year 2020-21 – Tech Wishes Solutions',
  'Academic Excellence Award - BCA 2017-18',
  'Progressed from Intern → Software Engineer → Senior Software Engineer → Lead Software Engineer at Tech Wishes Solutions (2019-Present)'
];

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const leftColRef = useRef<HTMLDivElement>(null);
  const [rightHeight, setRightHeight] = useState<string>('600px');

  useEffect(() => {
    setMounted(true);

    const updateHeight = () => {
      if (leftColRef.current) {
        if (window.innerWidth >= 1024) {
          setRightHeight(`${leftColRef.current.offsetHeight}px`);
        } else {
          setRightHeight('600px');
        }
      }
    };

    setTimeout(updateHeight, 100);
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <main className="relative flex flex-col w-full min-h-screen bg-white overflow-x-clip font-body">

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="mb-8">
              <AnimatedSignature />
            </div>

            <p className="text-base md:text-lg text-[#333333] max-w-xl mb-12 leading-relaxed animate-slide-up delay-100">
              Lead Software Engineer specializing in Shopify app architecture, AI agent systems, and full-stack engineering. Building multi-agent AI pipelines on Google Cloud and leading technical execution for e-commerce platforms.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 items-start animate-slide-up delay-200">
              <a href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-white font-medium rounded-full hover-bg hover:bg-[#000000] border-2 border-[#111111] font-mono text-sm button-press transition-all duration-200">
                <Mail className="h-5 w-5 transition-transform duration-200 group-hover:rotate-12" />
                <span>Get in Touch</span>
              </a>

              <div className="flex gap-4">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener" className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#222222] text-[#222222] hover-border hover:border-[#111111] hover:text-[#111111] transition-all duration-300 icon-hover">
                  <LinkedInIcon />
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener" className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#222222] text-[#222222] hover-border hover:border-[#111111] hover:text-[#111111] transition-all duration-300 icon-hover">
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 order-1 lg:order-2 animate-fade-in">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto">
              <img
                src="/images/hero-portrait.png"
                alt="Prabjot Kaur"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Marquee Section */}
      <section className="py-24 border-y-2 border-[#111111] bg-[#fcfcfc] overflow-hidden">
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap min-w-full">
            {[...allSkills, ...allSkills, ...allSkills].map((skill, index) => (
              <span key={`1-${index}`} className="mx-3 flex items-center justify-center h-11 px-5 rounded-full border-2 border-[#222222] text-[#111111] text-sm font-medium whitespace-nowrap bg-white font-mono skill-badge cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-48">
        <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-[#111111] mb-24 tracking-tight">
          Featured Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className={`${project.colSpan} scroll-reveal group relative flex flex-col bg-white border-2 border-[#222222] p-8 md:p-10 hover-lift hover-border hover:border-[#111111] transition-all duration-300 cursor-pointer`}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-heading text-[#111111] mb-2">{project.title}</h3>
                  <p className="text-sm text-[#555555] uppercase tracking-wide font-mono">{project.subtitle}</p>
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-[#222222] flex items-center justify-center hover-border hover:border-[#111111] flex-shrink-0 group/link transition-all duration-300">
                    <ArrowUpRight size={18} className="text-[#333333] group-hover/link:text-[#111111] transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                )}
              </div>

              <p className="text-[#333333] leading-relaxed flex-grow mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, techIdx) => (
                  <span key={tech} className={`px-3 py-1.5 border-2 border-[#222222] text-xs font-medium text-[#111111] font-mono transition-all duration-200 hover:bg-[#111111] hover:text-white cursor-default stagger-${(techIdx % 6) + 1}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-48">
        <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-[#111111] mb-32 tracking-tight">
          Experience
        </h2>

        <div className="relative border-l-2 border-[#222222] ml-0 space-y-24">
          {experience.map((job, idx) => (
            <div key={idx} className="scroll-reveal relative pl-12 md:pl-16 group">
              <div className="absolute left-[-9px] top-2 w-4 h-4 bg-[#111111] transition-all duration-300 group-hover:scale-125 group-hover:rotate-45" />

              <div className="bg-white border-2 border-[#222222] p-8 md:p-10 hover-border group-hover:border-[#111111] transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-3">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading text-[#111111] mb-2">{job.title}</h3>
                    <h4 className="text-base text-[#333333] font-medium">{job.company}</h4>
                  </div>
                  <span className="inline-block text-sm text-[#555555] uppercase tracking-wide font-mono">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {job.points.map((point, i) => (
                    <li key={i} className="text-[#333333] flex items-start gap-3 leading-relaxed">
                      <span className="text-[#222222] mt-0.5 block w-4 flex-shrink-0">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {job.skills && (
                  <div className="pt-6 border-t-2 border-[#dddddd] flex items-center gap-3">
                    <span className="text-xs text-[#555555] uppercase tracking-wider font-mono">Skills</span>
                    <p className="text-sm text-[#111111]">{job.skills}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-48 border-t-2 border-[#222222]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">

          {/* Education */}
          <div ref={leftColRef}>
            <h2 className="font-heading text-4xl md:text-5xl text-[#111111] mb-24 tracking-tight">
              Education
            </h2>
            <div className="space-y-16">
              {education.map((edu, idx) => (
                <div key={idx} className="scroll-reveal border-l-2 border-[#222222] pl-6">
                  <h3 className="text-xl font-heading text-[#111111] mb-2">{edu.degree}</h3>
                  <p className="text-[#333333] font-medium mb-1">{edu.school}</p>
                  <p className="text-sm text-[#555555] font-mono">{edu.location} • {edu.period}</p>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <h2 className="font-heading text-4xl md:text-5xl text-[#111111] mb-16 mt-32 tracking-tight">
              Achievements
            </h2>
            <ul className="space-y-8">
              {achievements.map((achieve, idx) => (
                <li key={idx} className="scroll-reveal flex gap-4 items-start p-6 bg-white border-2 border-[#222222] hover-border hover:border-[#111111] transition-all duration-300 hover:shadow-md group cursor-default">
                  <span className="text-[#111111] text-lg mt-0.5 transition-transform duration-300 group-hover:scale-125">■</span>
                  <span className="text-[#111111] leading-relaxed">{achieve}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="flex flex-col h-full min-h-0" style={{ height: rightHeight }}>
            <h2 className="font-heading text-4xl md:text-5xl text-[#111111] mb-24 tracking-tight flex-shrink-0">
              Certifications
            </h2>
            <div className="scroll-reveal bg-white border-2 border-[#222222] p-8 flex-1 min-h-0 overflow-y-auto">
              <div className="space-y-6">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="group relative pb-6 border-b-2 border-[#dddddd] last:border-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-[#111111] font-heading text-base max-w-[85%]">{cert.name}</h3>
                    </div>
                    {cert.skills && <p className="text-xs text-[#555555] mb-2 font-mono">Skills: {cert.skills}</p>}
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm text-[#333333]">{cert.issuer}</span>
                      <span className="text-xs text-[#555555] font-mono">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-[#555555] mt-4 uppercase tracking-wide font-mono">Scroll to view all {certifications.length} certifications</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#111111] text-white pt-40 pb-24 mt-32 border-t-2 border-[#111111]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-12 font-mono">
            FOR ENQUIRIES OR COLLABORATION REQUESTS, FEEL FREE TO REACH OUT
          </p>

          <h2 className="font-heading text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[140px] text-white mb-20 leading-[0.85] tracking-tight">
            GET IN TOUCH
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t-2 border-[#333333] pt-12">
            <div className="space-y-4">
              <a href={`mailto:${personalInfo.email}`} className="block text-2xl md:text-3xl text-[#dddddd] hover:text-white transition-all duration-300 link-underline">
                {personalInfo.email}
              </a>
            </div>

            <div className="flex gap-6">
              <a href={personalInfo.github} target="_blank" rel="noopener" className="text-sm uppercase tracking-wide text-[#888888] hover:text-white transition-all duration-300 font-mono link-underline">
                GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener" className="text-sm uppercase tracking-wide text-[#888888] hover:text-white transition-all duration-300 font-mono link-underline">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-between items-center mt-20 pt-8 border-t-2 border-[#333333]">
            <p className="text-xs text-[#888888] font-mono">
              ©{new Date().getFullYear()} PRABJOT KAUR
            </p>
            <p className="text-xs text-[#888888] uppercase tracking-wide font-mono">
              DESIGNED & DEVELOPED BY PRABJOT KAUR
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
