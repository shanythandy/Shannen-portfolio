/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  BookOpen, 
  Code, 
  Briefcase, 
  Heart,
  ChevronDown,
  ExternalLink,
  Terminal,
  Cpu,
  Layout,
  MessageSquare,
  PenTool,
  Utensils,
  Sparkles,
  Users,
  Globe,
  Compass,
  Camera,
  Phone,
  FileText,
  Download
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold italic tracking-tighter"
        >
          STM.
        </motion.div>
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
          {['About', 'Leadership', 'Hobbies', 'Connect'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-emerald-600 transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const DynamicHero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 5]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Text Marquee */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-[0.03] z-0 select-none">
        <div className="animate-marquee flex gap-20 text-[25vw] font-display font-black italic uppercase leading-none">
          <span>Shannen Thandiswa Muchemwa</span>
          <span>Shannen Thandiswa Muchemwa</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 font-mono text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              Digital Portfolio 2026
            </span>
            <h1 className="text-7xl md:text-[10rem] font-display font-black italic leading-[0.85] tracking-tighter mb-10">
              Shannen <br />
              <span className="text-gradient">Thandiswa</span> <br />
              Muchemwa
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <p className="max-w-md text-black/50 text-xl font-light leading-relaxed">
                A visionary Computer Scientist and Business Strategist at the <span className="text-black font-medium">College of Idaho</span>.
              </p>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="hidden md:block"
              >
                <ChevronDown className="w-8 h-8 text-emerald-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2 relative">
          <motion.div
            style={{ y: y2, rotate }}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border-[16px] border-white relative group">
              <img 
                src="/shannen-headshot.jpg" 
                alt="Shannen Thandiswa Muchemwa" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-emerald-900/5 mix-blend-multiply pointer-events-none" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl shadow-2xl hidden md:block z-30"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-black/30 leading-none mb-1">Status</p>
                  <p className="text-xs font-bold text-black/80">Innovation & Impact</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative Circles */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-20">
    <div className="flex items-center gap-4 mb-4">
      <div className="h-[2px] w-12 bg-emerald-600" />
      <span className="text-emerald-600 font-mono text-[10px] font-bold tracking-[0.4em] uppercase">
        {subtitle}
      </span>
    </div>
    <h2 className="text-5xl md:text-7xl font-display font-black italic tracking-tighter">{title}</h2>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeading title="The Foundation" subtitle="Background" />
      
      <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <p className="text-3xl text-black/80 leading-tight font-light">
              Learning at the <span className="text-emerald-600 font-medium italic">College of Idaho</span>, 
              I am crafting a unique path at the intersection of logic and strategy.
            </p>
            <p className="text-xl text-black/50 leading-relaxed font-light">
              Born in Harare, Zimbabwe, shaped by my years completing high school in Wales, United Kingdom, and now studying 
              in the United States at the College of Idaho, my journey has been one of curiosity, adaptability, and global perspective.
               As a Computer Science and Business Administration major with a minor in Data Science, I am crafting a unique path at the intersection of 
               logic and strategy, where technology meets impact. I thrive in complex environments that challenge me to think creatively and act decisively. Passionate about giving
                back, I see myself as an international globetrotter and emerging changemaker, eager to blend business, social entrepreneurship, and computer science to uplift communities.
                 Through creativity, hard work, strong leadership, communication, and teamwork, I strive to turn ideas into meaningful solutions that make the world a better place.

            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Technical Skills */}
            <div className="p-10 md:p-16 rounded-[3rem] bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-12 text-emerald-600">
                <div className="p-4 bg-emerald-50 rounded-2xl">
                  <Code className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-[0.3em] text-xs mb-1">Expertise</h3>
                  <h4 className="text-3xl font-display font-black italic tracking-tight">Technical Skills</h4>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="space-y-4">
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600/60">Programming</h5>
                  <p className="text-black/70 text-sm leading-relaxed">Python, Assembly (introductory), HTML</p>
                </div>
                <div className="space-y-4">
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600/60">Data & Analytics</h5>
                  <p className="text-black/70 text-sm leading-relaxed">Data Analysis in Python, Statistical Reasoning, Data Visualization (Matplotlib)</p>
                </div>
                <div className="space-y-4">
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600/60">Computer Science</h5>
                  <p className="text-black/70 text-sm leading-relaxed">Algorithm Analysis (Big-O), Basic Data Structures, Computational Problem Solving</p>
                </div>
                <div className="space-y-4">
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600/60">Tools</h5>
                  <p className="text-black/70 text-sm leading-relaxed">Git, GitHub, VS Code, Command Line</p>
                </div>
                <div className="space-y-4">
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600/60">Web Development</h5>
                  <p className="text-black/70 text-sm leading-relaxed">HTML, Responsive Layout Design</p>
                </div>
              </div>
            </div>

            {/* Business Skills */}
            <div className="p-10 md:p-16 rounded-[3rem] bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-12 text-teal-600">
                <div className="p-4 bg-teal-50 rounded-2xl">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-[0.3em] text-xs mb-1">Professional</h3>
                  <h4 className="text-3xl font-display font-black italic tracking-tight">Business & Professional Skills</h4>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="space-y-4">
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600/60">Business Knowledge</h5>
                  <p className="text-black/70 text-sm leading-relaxed">Financial Accounting, Managerial Accounting, Business Fundamentals</p>
                </div>
                <div className="space-y-4">
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600/60">Tools</h5>
                  <p className="text-black/70 text-sm leading-relaxed">Microsoft Office Suite (Excel, Word, PowerPoint), Slack</p>
                </div>
                <div className="space-y-4">
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600/60">Strategy & Analysis</h5>
                  <p className="text-black/70 text-sm leading-relaxed">Strategic Thinking, Data-Driven Decision Making, Business Problem Solving</p>
                </div>
                <div className="space-y-4">
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600/60">Leadership</h5>
                  <p className="text-black/70 text-sm leading-relaxed">Social Entrepreneurship, Team Collaboration, Project Coordination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

const LeadershipSection = () => {
  const experiences = [
    {
      title: "Social Media & Marketing Coordinator",
      org: "College of Idaho Peer Health Advocates",
      icon: <Users className="w-8 h-8" />,
      desc: "Leading digital strategy to foster a healthier, more connected campus community through creative outreach."
    },
    {
      title: "Social Entrepreneur",
      org: "Autism Awareness Initiative",
      icon: <Heart className="w-8 h-8" />,
      desc: "Spearheaded a transformative autism awareness event at 18, bridging gaps in understanding and community support."
    }
  ];

  return (
    <section id="leadership" className="py-32 bg-[#F7F6F0]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Leading with Purpose" subtitle="Impact" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -15 }}
              className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-20 h-20 rounded-3xl bg-emerald-50 flex items-center justify-center mb-10 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                {exp.icon}
              </div>
              <h3 className="text-3xl font-display font-black italic mb-4">{exp.title}</h3>
              <p className="text-emerald-600 font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-8">{exp.org}</p>
              <p className="text-black/50 text-lg leading-relaxed font-light">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HobbiesSection = () => {
  const hobbies = [
    { 
      name: "Photography", 
      icon: <Camera />, 
      color: "bg-orange-50 text-orange-600",
      image: "/photographer.jpeg",
      desc: "I have always loved photography and that i have always loved photography hence my social media and marketing role, i love capturing places and people in their happiest moments. I love that creativity that it brings me."
    },
    { 
      name: "Outdoor Explorer", 
      icon: <Compass />, 
      color: "bg-blue-50 text-blue-600",
      image: "/adventure-pic.jpeg",
      desc: "I love being outdoors and immersing myself in nature. Whether it's hiking through scenic trails, whitewater rafting, or exploring new and different places, adventure is where I feel most alive."
    },
    { 
      name: "Reading", 
      icon: <BookOpen />, 
      color: "bg-emerald-50 text-emerald-600",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=800",
      desc: "Reading is my window to the world. It expands my creativity and is my primary way of acquiring new knowledge and perspectives."
    },
    { 
      name: "Creative Writing", 
      icon: <PenTool />, 
      color: "bg-purple-50 text-purple-600",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
      desc: "I have always loved writing. It's been a lifelong passion of mine, and I even wrote my very first book when I was just 10 years old."
    }
  ];

  return (
    <section id="hobbies" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeading title="The Creative Soul" subtitle="Lifestyle" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {hobbies.map((hobby, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5 flex flex-col md:flex-row"
          >
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img 
                src={hobby.image} 
                alt={hobby.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 ${hobby.color.split(' ')[0]} opacity-20 mix-blend-multiply`} />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <div className={`w-12 h-12 rounded-2xl ${hobby.color} flex items-center justify-center mb-6`}>
                {hobby.icon}
              </div>
              <h3 className="text-2xl font-display font-black italic mb-4">{hobby.name}</h3>
              <p className="text-black/50 leading-relaxed font-light">
                {hobby.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ConnectSection = () => {
  const socials = [
    { name: "LinkedIn", icon: <Linkedin />, url: "https://www.linkedin.com/in/shannen-muchemwa", color: "hover:text-blue-600" },
    { name: "GitHub", icon: <Github />, url: "https://github.com/shanythandy", color: "hover:text-black" },
    { name: "Instagram", icon: <Instagram />, url: "https://www.instagram.com/shany_thandy/", color: "hover:text-pink-600" },
    { name: "Email", icon: <Mail />, url: "mailto:shannen.muchemwa@yotes.collegeofidaho.edu", color: "hover:text-emerald-600" },
    { name: "Phone", icon: <Phone />, url: "tel:+12087402109", color: "hover:text-blue-500" }
  ];

  return (
    <section id="connect" className="py-32 px-6 max-w-7xl mx-auto text-center">
      <SectionHeading title="Start a Conversation" subtitle="Contact" />
      
      <div className="flex flex-wrap justify-center gap-16 mb-24">
        {socials.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -10 }}
            className={`flex flex-col items-center gap-6 group transition-colors ${social.color}`}
          >
            <div className="w-24 h-24 rounded-[2rem] border border-black/5 bg-white flex items-center justify-center shadow-sm group-hover:shadow-xl group-hover:border-current transition-all duration-500">
              {React.cloneElement(social.icon as React.ReactElement, { size: 32 })}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100">{social.name}</span>
          </motion.a>
        ))}
      </div>

      <div className="bg-emerald-600 p-16 md:p-24 rounded-[4rem] text-white relative overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
          <Sparkles size={200} />
        </div>
        <h3 className="text-4xl md:text-6xl font-display font-black italic mb-8 tracking-tighter">Let's create something <br /> extraordinary.</h3>
        <p className="text-emerald-100 text-xl mb-12 max-w-xl mx-auto font-light">
          I'm always looking for new opportunities to merge technology with meaningful business impact.
        </p>
        <a 
          href="mailto:shanythandy@gmail.com"
          className="inline-flex items-center gap-3 bg-white text-emerald-600 px-12 py-5 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg"
        >
          Get in Touch <ExternalLink size={20} />
        </a>
      </div>
    </section>
  );
};

const ResumeSection = () => {
  return (
    <section id="resume" className="py-32 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-sm border border-black/5 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <FileText size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-600">Professional Profile</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black italic mb-8 tracking-tighter">My Resume</h2>
            <p className="text-black/60 text-xl max-w-xl font-light leading-relaxed">
              Download my latest resume to learn more about my professional background, skills, and experience in marketing, social media, and technology.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <motion.a
              href="/Shannen Muchemwa Resume 2026.pdf"
              download="Shannen_Muchemwa_Resume_2026.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 bg-black text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-black/80 transition-all duration-300 shadow-xl"
            >
              Download Resume <Download size={24} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-16 px-6 text-center text-black/20 text-[10px] font-bold uppercase tracking-[0.4em]">
    <p>© 2026 Shannen Thandiswa Muchemwa. Built with passion.</p>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-200">
      <Navbar />
      <main>
        <DynamicHero />
        <AboutSection />
        <LeadershipSection />
        <HobbiesSection />
        <ConnectSection />
        <ResumeSection />
      </main>
      <Footer />
    </div>
  );
}
