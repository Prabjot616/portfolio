'use client';

import { Mail, ExternalLink, Code2, Award, Briefcase, GraduationCap, ArrowUpRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
  </svg>
);

const personalInfo = {
  name: 'PRABJOT KAUR',
  title: 'Lead Software Engineer',
  phone: '8582870608',
  email: 'prabjotkaur4@gmail.com',
  linkedin: 'https://www.linkedin.com/in/prabjot-kaur-10b6874b/',
  github: 'https://github.com/Prabjot616',
};

const experience = [
  {
    title: 'Lead Software Engineer',
    company: 'Tech Wishes Solutions',
    location: 'Kolkata, West Bengal, India · Hybrid',
    period: 'Oct 2024 – Present',
    points: [
      'Developed scalable e-commerce and web applications using PHP frameworks and MVC architecture, improving maintainability',
      'Led development and architectural decisions for Shopify and custom web platforms',
      'Integrated third-party APIs routing and shipping services',
    ],
    skills: 'Model-View-Controller (MVC) · PHP Frameworks'
  },
  {
    title: 'Senior Software Engineer',
    company: 'Tech Wishes Solutions',
    location: 'India · Hybrid',
    period: 'Oct 2021 – Sep 2024',
    points: [
      'Built and maintained backend APIs and database systems supporting scalable commerce platforms',
      'Optimized application architecture and database queries to improve system performance',
    ],
    skills: 'Model-View-Controller (MVC) · PHP Frameworks'
  },
  {
    title: 'Software Engineer',
    company: 'Tech Wishes Solutions',
    location: 'India',
    period: 'Aug 2020 – Sep 2021',
    points: [
      'Built backend modules and application features using PHP MVC frameworks',
      'Designed and implemented database schemas and API integrations',
    ],
    skills: 'Model-View-Controller (MVC) · PHP Frameworks'
  },
  {
    title: 'Internship',
    company: 'Tech Wishes Solutions',
    location: 'Kolkata Area, India',
    period: 'Jun 2019 – Jul 2020',
    points: [
      'Assisted in developing and maintaining web application modules',
      'Gained hands-on experience in backend architectures and MVC principles',
    ],
    skills: 'Model-View-Controller (MVC) · PHP Frameworks'
  },
];

const projects = [
  {
    title: 'AI Website SEO Analyzer',
    subtitle: 'Automated AI SEO & GEO Audit Tool',
    description: 'Built an AI-powered system that analyzes websites and generates SEO, GEO, and competitor insights automatically. Integrates Google ADK and Notion APIs.',
    tech: ['Python', 'Google ADK', 'AI Agents'],
    colSpan: 'col-span-1 md:col-span-2',
  },
  {
    title: 'Shopify Merchant Tools',
    subtitle: 'Scalable E-commerce Apps',
    description: 'Developed custom Shopify applications and backend tools for e-commerce stores.',
    tech: ['PHP', 'Shopify APIs', 'MySQL'],
    colSpan: 'col-span-1',
  },
  {
    title: 'Pomodoro Pulse',
    subtitle: 'Focus & Productivity Timer',
    description: 'Published a Pomodoro productivity timer mobile application on Google Play.',
    tech: ['React Native'],
    link: 'https://play.google.com/store/apps/details?id=com.pomodoropulse',
    colSpan: 'col-span-1 md:col-span-3',
  },
];

const allSkills = [
  'PHP', 'JavaScript', 'Python', 'HTML', 'CSS', 'Shopify Liquid',
  'PHP Frameworks', 'MVC Architecture', 'REST APIs', 'MySQL',
  'Docker', 'Git', 'Prompt Engineering', 'Generative AI', 'Agentic Workflows'
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
  { name: 'Software Architecture Foundations', issuer: 'LinkedIn', date: 'Aug 2025', skills: 'Software Architecture' },
  { name: 'Introduction to Artificial Intelligence', issuer: 'LinkedIn', date: 'May 2025', skills: 'Artificial Intelligence (AI)' },
  { name: 'Career Essentials in Generative AI', issuer: 'Microsoft', date: 'May 2025', skills: 'Prompt Engineering' },
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
  { name: 'Nano Tips for Using Generative AI Tools for Better Marketing', issuer: 'LinkedIn', date: 'Apr 2023', skills: 'Artificial Intelligence (AI) · Generative AI' },
  { name: 'Game Development for Modern Platforms', issuer: 'Coursera', date: 'Jul 2020', id: 'C5FKFZ22NL38' },
  { name: 'Business of Games and Entrepreneurship', issuer: 'Coursera', date: 'Jul 2020', id: '4CN5ABSDLNEZ' },
  { name: 'Principles of Game Design', issuer: 'Coursera', date: 'Jun 2020', id: '7LVLBPBBAXH3' },
  { name: 'Introduction to Game Development', issuer: 'Coursera', date: 'May 2020', id: '2EPRZ7FGZ2MR' },
  { name: 'Code Gladiator 2019 Semifinalist', issuer: 'TechGig', date: 'Jun 2019', id: 'THFZbDA3VHB...' },
  { name: 'Master the Mainframe 2018 - Part 2', issuer: 'IBM', date: 'Jan 2019', link: 'https://www.credly.com/badges/692d4ee2-5f2e-49dc-8ef1-ffec7b0061c4', image: '/images/ibm-badge.png' },
  { name: 'Android Application development', issuer: 'Techtree Technologies', date: '' },
  { name: 'Diploma in Computer Hardware', issuer: 'Independent', date: '' },
];

const achievements = [
  'Mentor of the Year 2026 – Tech Wishes Solutions',
  'Employee of the Year 2022-23 – Tech Wishes Solutions',
  'Employee of the Year 2020-21 – Tech Wishes Solutions',
  'Code Gladiator 2019 Semifinalist – TechGig coding competition',
  'Earned multiple certifications in Artificial Intelligence, Generative AI, and Software Architecture',
  'Progressed internally from Intern → Software Engineer → Senior Software Engineer → Lead Software Engineer at Tech Wishes Solutions'
];

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const leftColRef = useRef<HTMLDivElement>(null);
  const [rightHeight, setRightHeight] = useState<string>('600px');

  useEffect(() => {
    setMounted(true);
    
    const updateHeight = () => {
      if (leftColRef.current) {
        // On desktop (lg), match left column precisely. On mobile, default to 600px.
        if (window.innerWidth >= 1024) {
          setRightHeight(`${leftColRef.current.offsetHeight}px`);
        } else {
          setRightHeight('600px');
        }
      }
    };

    // Small delay to ensure images/fonts loaded
    setTimeout(updateHeight, 100);
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative flex flex-col w-full min-h-screen bg-zinc-50 overflow-x-clip pt-16 font-sans">
      
      {/* Aurora Background Effect (21st.dev style) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="aurora-bg animate-aurora"></div>
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[30px] w-full h-full"></div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full max-w-6xl mx-auto px-6 py-24 md:py-40 flex flex-col items-center text-center animate-fade-in-up">
        {/* Dynamic Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-600 text-sm font-medium mb-8 hover:bg-blue-500/10 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.15)] animate-float">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          Available for New Opportunities
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 mb-6 drop-shadow-sm delay-150">
          Hi, I am <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-400 animate-gradient-x">
            {personalInfo.name}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-600 font-medium max-w-3xl mb-12 delay-300">
          Lead Software Engineer with 6+ years building scalable web frameworks, Shopify ecosystems, and emerging AI technologies.
        </p>
        
        {/* MagicUI Style glowing buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center delay-500">
          <a href={`mailto:${personalInfo.email}`} 
             className="relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-blue-600 px-8 font-medium text-white shadow-[0_0_40px_-5px_rgba(59,130,246,0.4)] transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-[0_0_60px_-10px_rgba(59,130,246,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
            <Mail className="mr-2 h-5 w-5" />
            Connect With Me
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
          </a>
          
          <div className="flex gap-4">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener" className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:text-blue-600 hover:shadow-lg transition-all hover:-translate-y-1">
              <LinkedInIcon className="transition-transform group-hover:scale-110" />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener" className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:text-blue-600 hover:shadow-lg transition-all hover:-translate-y-1">
              <GitHubIcon className="transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Marquee Section (21st.dev Style Infinite Scroll) */}
      <section className="py-12 border-y border-zinc-200/50 bg-white/50 backdrop-blur-sm overflow-hidden flex flex-col gap-4">
        {/* Track 1: Left */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap min-w-full">
            {[...allSkills, ...allSkills, ...allSkills].map((skill, index) => (
              <span key={`1-${index}`} className="mx-4 flex items-center justify-center h-12 px-6 rounded-2xl bg-zinc-100/80 border border-zinc-200 text-zinc-700 font-medium whitespace-nowrap">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Projects Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-inner">
            <Code2 size={24} />
          </div>
          Featured Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className={`${project.colSpan} group relative flex flex-col overflow-hidden rounded-[2rem] bg-white border border-zinc-200/60 p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]`}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400 opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-sm font-semibold text-blue-500 mt-1">{project.subtitle}</p>
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all flex-shrink-0 group/link">
                    <ArrowUpRight size={20} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </div>
              
              <p className="text-zinc-600 leading-relaxed max-w-md flex-grow mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/50 text-xs font-semibold text-zinc-700 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 mb-24 relative">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center shadow-inner">
            <Briefcase size={24} />
          </div>
          Experience
        </h2>
        
        <div className="relative border-l border-zinc-200 ml-4 md:ml-6 space-y-12">
          {experience.map((job, idx) => (
            <div key={idx} className="relative pl-8 md:pl-16 group">
              <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-primary shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all group-hover:scale-125 group-hover:border-blue-500 group-hover:shadow-[0_0_0_6px_rgba(59,130,246,0.2)]" />
              
              <div className="bg-white border border-zinc-200 rounded-3xl p-6 md:p-8 shadow-sm transition-all group-hover:shadow-lg group-hover:border-blue-200 relative overflow-hidden">
                <div className="absolute -right-16 -top-16 bg-blue-50 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2 relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-900">{job.title}</h3>
                  <span className="inline-block px-3 py-1 bg-zinc-100 rounded-full text-sm font-medium text-zinc-600 border border-zinc-200 w-fit">
                    {job.period}
                  </span>
                </div>
                <h4 className="text-blue-600 font-semibold mb-4 bg-blue-50 inline-block px-3 py-1 rounded-lg">{job.company}</h4>
                
                <ul className="space-y-3 relative z-10 mb-6">
                  {job.points.map((point, i) => (
                    <li key={i} className="text-zinc-600 flex items-start gap-3 leading-relaxed">
                      <span className="text-blue-500 font-bold mt-0.5 opacity-50 block w-4 flex-shrink-0">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                
                {/* @ts-ignore */}
                {job.skills && (
                  <div className="relative z-10 pt-4 border-t border-zinc-100 flex items-center gap-2">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex-shrink-0">Skills</span>
                    <p className="text-sm font-medium text-blue-600 leading-snug">{job.skills}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certs */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education */}
          <div ref={leftColRef}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-inner">
                <GraduationCap size={24} />
              </div>
              Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-indigo-100 pb-2">
                  <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-indigo-400" />
                  <h3 className="text-xl font-bold text-zinc-900">{edu.degree}</h3>
                  <p className="text-indigo-600 font-semibold mt-1">{edu.school}</p>
                  <p className="text-zinc-500 text-sm mt-2">{edu.location} • {edu.period}</p>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 mt-16 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shadow-inner">
                <Award size={24} />
              </div>
              Achievements
            </h2>
            <ul className="space-y-4">
              {achievements.map((achieve, idx) => (
                <li key={idx} className="flex gap-4 items-start p-4 bg-white border border-zinc-200/60 rounded-2xl shadow-sm">
                  <span className="text-orange-500 text-xl font-bold">★</span>
                  <span className="text-zinc-700 leading-relaxed">{achieve}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications Box */}
          <div className="flex flex-col h-full min-h-0" style={{ height: rightHeight }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 flex items-center gap-4 flex-shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center shadow-inner">
                <Award size={24} />
              </div>
              Certifications
            </h2>
            <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 md:p-8 shadow-sm flex-1 min-h-0 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-transparent">
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="group relative flex flex-col p-4 rounded-2xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-200">
                    <div className="flex justify-between items-start">
                      <h3 className="text-zinc-900 font-semibold group-hover:text-fuchsia-600 transition-colors max-w-[85%]">{cert.name}</h3>
                      {/* @ts-ignore */}
                      {cert.image && (
                        <div className="w-10 h-10 flex-shrink-0 opacity-90 group-hover:opacity-100 transition-opacity ml-2">
                          {/* @ts-ignore */}
                          <img src={cert.image} alt={cert.name} className="w-full h-full object-contain drop-shadow-sm rounded-full" />
                        </div>
                      )}
                    </div>
                    {/* @ts-ignore */}
                    {cert.skills && <p className="text-xs text-fuchsia-600 mt-1 line-clamp-1" title={cert.skills}>Skills: {cert.skills}</p>}
                    {/* @ts-ignore */}
                    {cert.id && <p className="text-xs text-zinc-500 font-mono mt-1">ID: {cert.id}</p>}
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm font-medium text-zinc-500 bg-zinc-100 px-3 py-1 rounded-lg">{cert.issuer}</span>
                      <span className="text-xs text-zinc-400 font-medium">{cert.date}</span>
                    </div>
                    {/* @ts-ignore */}
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 text-zinc-400 hover:text-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity" title="View Credential">
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-zinc-500 mt-4 italic text-center">Scroll to view all {certifications.length} certifications</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-zinc-50 border-t border-zinc-200 pt-20 pb-12 mt-auto">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center justify-center p-3 bg-white border border-zinc-200 shadow-sm rounded-2xl mb-4">
            <Code2 className="text-blue-500 w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-zinc-900">Ready to collaborate?</h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Available for new opportunities. Let's discuss your next project or exploring the frontiers of AI.
          </p>
          
          <div className="flex justify-center gap-4 pt-4">
            <a href={`mailto:${personalInfo.email}`} className="text-zinc-500 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-full transition-colors">
              <Mail />
            </a>
            <a href={personalInfo.linkedin} className="text-zinc-500 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-full transition-colors">
              <LinkedInIcon />
            </a>
            <a href={personalInfo.github} className="text-zinc-500 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-full transition-colors">
              <GitHubIcon />
            </a>
          </div>
          
          <p className="text-zinc-400 text-sm pt-12">
            © {new Date().getFullYear()} Prabjot Kaur. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}
