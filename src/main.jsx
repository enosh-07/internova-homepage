import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, Braces, ChartNoAxesCombined,
  Check, ChevronDown, Code2, Compass, GraduationCap, Layers3, Menu, Monitor,
  ShieldCheck, Sparkles, Star, Users, X, Zap, Play, BookOpen, CalendarDays,
  CircleHelp, MoveUpRight, Rocket, Terminal, BadgeCheck, MessageCircle, Send,
} from "lucide-react";
import "./styles.css";

const programs = [
  { id: "web", code: "D-01", category: "Development", title: "Web Development", description: "Turn ideas into polished, responsive digital experiences.", skills: ["HTML & CSS", "JavaScript", "React", "Git & GitHub"], icon: Code2, tone: "blue", level: "Beginner friendly" },
  { id: "ai", code: "D-02", category: "AI & Data", title: "Artificial Intelligence", description: "Explore intelligent systems, ML fundamentals and practical AI tools.", skills: ["Python", "ML basics", "AI APIs", "Mini project"], icon: BrainCircuit, tone: "violet", level: "Project based" },
  { id: "analytics", code: "D-03", category: "AI & Data", title: "Data Analytics", description: "Find the signal in data and communicate insights with confidence.", skills: ["Excel", "SQL", "Power BI", "Dashboards"], icon: ChartNoAxesCombined, tone: "cyan", level: "Practical track" },
  { id: "security", code: "D-04", category: "Security", title: "Cybersecurity", description: "Build security awareness and learn the foundations of safer systems.", skills: ["Networking", "Security basics", "Threat awareness", "Labs"], icon: ShieldCheck, tone: "green", level: "Guided learning" },
  { id: "python", code: "D-05", category: "Development", title: "Python Programming", description: "Build confidence with Python, automation and useful applications.", skills: ["Python", "Automation", "APIs", "Projects"], icon: Terminal, tone: "orange", level: "Beginner friendly" },
  { id: "java", code: "D-06", category: "Development", title: "Java Development", description: "Strengthen programming fundamentals and object-oriented thinking.", skills: ["Core Java", "OOP", "JDBC", "Application project"], icon: Braces, tone: "pink", level: "Project based" },
];

const steps = [
  { number: "01", title: "Choose your path", text: "Explore domains, understand the learning outcomes, and pick a track that matches your goals.", icon: Compass },
  { number: "02", title: "Learn by doing", text: "Work through structured tasks that turn concepts into repeatable, practical skills.", icon: BookOpen },
  { number: "03", title: "Build your proof", text: "Create projects you can explain, improve, and showcase in your portfolio.", icon: Rocket },
  { number: "04", title: "Take the next step", text: "Reflect on your progress and prepare to communicate your skills with confidence.", icon: GraduationCap },
];

const faqs = [
  { q: "Do I need prior experience to get started?", a: "Many learning tracks are designed to be beginner-friendly. Check each program's prerequisites and learning outcomes before applying." },
  { q: "How do the internship programs work?", a: "Programs typically combine structured learning tasks with practical project work. Follow the official program page for the current schedule, deliverables and mentor-support details." },
  { q: "Will I receive a certificate?", a: "Certificate eligibility and completion requirements depend on the program. Confirm the current terms on the official InternNova website before enrolling." },
  { q: "Are the internships paid?", a: "Compensation varies by opportunity. Do not assume a role is paid unless the specific official listing explicitly states the stipend or salary." },
  { q: "Can I include my projects in my portfolio?", a: "You can generally showcase original work you are permitted to share. Respect any program rules, confidentiality requirements and third-party licenses." },
];

const testimonials = [
  { quote: "The weekly tasks gave me a clear path to practice concepts instead of only watching tutorials.", name: "Student perspective", role: "Web development track", initials: "SP" },
  { quote: "Working on a project helped me connect what I learned in class with how a real deliverable comes together.", name: "Student perspective", role: "Data analytics track", initials: "DA" },
  { quote: "A structured learning plan made it easier to keep track of progress and identify what to improve next.", name: "Student perspective", role: "Programming track", initials: "PT" },
];

function Brand({ footer = false }) {
  return <a className={`brand ${footer ? "brand-footer" : ""}`} href="#home" aria-label="InternNova home">
    <span className="brand-mark"><Sparkles size={19} strokeWidth={2.3} /></span>
    <span className="brand-name">intern<span>nova</span><small>LEARN. BUILD. BECOME.</small></span>
  </a>;
}

function Button({ href, children, variant = "primary", onClick, type = "button" }) {
  return <a href={href} className={`button button-${variant}`} onClick={onClick} type={type}>
    {children}<ArrowUpRight size={16} aria-hidden="true" />
  </a>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [["Programs", "#programs"], ["How it works", "#journey"], ["Community", "#community"], ["FAQ", "#faq"]];
  return <header className="site-header">
    <div className="container nav-wrap">
      <Brand />
      <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-mobile-cta" href="#programs" onClick={() => setMenuOpen(false)}>Explore programs <ArrowRight size={15} /></a>
      </nav>
      <div className="nav-actions">
        <a className="nav-login" href="https://internnova.co.in/" target="_blank" rel="noreferrer">Official site <ArrowUpRight size={14} /></a>
        <a className="button button-small" href="#programs">Find your track <ArrowUpRight size={15} /></a>
      </div>
      <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>
    </div>
  </header>;
}

function HeroVisual() {
  return <div className="hero-visual" aria-label="Illustration of a learning dashboard" role="img">
    <div className="visual-grid"></div>
    <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
    <div className="core-orb"><span className="core-inner"><Sparkles size={35} /></span></div>
    <div className="float-card float-card-top">
      <span className="float-icon float-icon-purple"><BrainCircuit size={18} /></span>
      <div><strong>AI / ML</strong><small>Explore what's possible</small></div><span className="live-dot"></span>
    </div>
    <div className="float-card float-card-bottom">
      <span className="float-icon float-icon-blue"><Code2 size={18} /></span>
      <div><strong>Project milestone</strong><small>Portfolio progress</small><div className="progress-track"><span></span></div></div>
      <span className="progress-value">72%</span>
    </div>
    <div className="float-chip chip-left"><span className="chip-spark">✳</span> Learn by building</div>
    <div className="float-chip chip-right"><Check size={13} /> Skills in motion</div>
    <div className="visual-caption"><span className="caption-line"></span> YOUR NEXT CHAPTER STARTS HERE</div>
  </div>;
}

function Hero() {
  return <section className="hero section-anchor" id="home">
    <div className="container hero-layout">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot"></span> A platform for your next step <span className="eyebrow-divider">/</span> Learn by doing</div>
        <h1>Your ambition<br />deserves <span className="gradient-text">momentum.</span></h1>
        <p className="hero-description">Build practical skills. Work on meaningful projects. Turn what you learn today into the confidence to create what comes next.</p>
        <div className="hero-actions"><Button href="#programs">Explore programs</Button><a className="text-link" href="#journey"><span className="play-icon"><Play size={13} fill="currentColor" /></span> See how it works</a></div>
        <div className="hero-proof">
          <div className="avatar-stack" aria-hidden="true"><span>IN</span><span>AI</span><span>WD</span><span>+</span></div>
          <div><div className="proof-stars"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></div><p><strong>Built around progress</strong><span>Skills first. Projects always.</span></p></div>
        </div>
      </div>
      <HeroVisual />
    </div>
    <div className="container hero-bottom">
      <span className="hero-bottom-label">A clearer path from learning to doing</span>
      <div className="hero-bottom-items"><span><Check size={15} /> Structured learning</span><span><Check size={15} /> Hands-on projects</span><span><Check size={15} /> Portfolio mindset</span></div>
    </div>
  </section>;
}

function SectionHeading({ eyebrow, title, highlight, description, align = "left" }) {
  return <div className={`section-heading heading-${align}`}>
    <div className="section-eyebrow"><span></span>{eyebrow}</div>
    <h2>{title} {highlight && <span className="gradient-text">{highlight}</span>}</h2>
    {description && <p>{description}</p>}
  </div>;
}

function Programs() {
  const [filter, setFilter] = useState("All tracks");
  const [query, setQuery] = useState("");
  const filters = ["All tracks", "Development", "AI & Data", "Security"];
  const filtered = useMemo(() => programs.filter(p => (filter === "All tracks" || p.category === filter) && `${p.title} ${p.description} ${p.skills.join(" ")}`.toLowerCase().includes(query.toLowerCase())), [filter, query]);
  return <section className="section programs-section section-anchor" id="programs">
    <div className="container">
      <div className="section-top-row">
        <SectionHeading eyebrow="Find your direction" title="Learn skills that" highlight="move you forward." description="Explore practical learning tracks designed to help you build a foundation, apply what you know, and make your next project count." />
        <a className="arrow-link" href="https://internnova.co.in/internships" target="_blank" rel="noreferrer">View official programs <ArrowUpRight size={16} /></a>
      </div>
      <div className="program-controls">
        <div className="filter-tabs" role="group" aria-label="Filter internship tracks">
          {filters.map(item => <button key={item} className={filter === item ? "filter-active" : ""} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
        <label className="program-search"><span className="sr-only">Search programs</span><Compass size={16} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search a skill or track..." /></label>
      </div>
      <div className="program-grid">
        {filtered.map(program => {
          const Icon = program.icon;
          return <article className="program-card" key={program.id}>
            <div className="program-card-top"><span className={`program-icon tone-${program.tone}`}><Icon size={22} /></span><span className="program-code">{program.code}</span></div>
            <div className="program-meta"><span className="program-category">{program.category}</span><span className="program-level">{program.level}</span></div>
            <h3>{program.title}</h3><p className="program-description">{program.description}</p>
            <div className="skill-list">{program.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
            <a className="program-link" href="https://internnova.co.in/internships" target="_blank" rel="noreferrer">Explore track <ArrowUpRight size={16} /></a>
          </article>;
        })}
        {filtered.length === 0 && <div className="no-results"><CircleHelp size={22} /><strong>No tracks found</strong><span>Try a different search or category.</span><button onClick={() => {setFilter("All tracks");setQuery("");}}>Clear filters</button></div>}
      </div>
      <div className="program-note"><ShieldCheck size={17} /><span>Program details, eligibility, dates and certificate terms can change. Confirm the latest information on InternNova's official website.</span></div>
    </div>
  </section>;
}

function About() {
  return <section className="section about-section section-anchor" id="about">
    <div className="container about-layout">
      <div className="about-visual">
        <div className="about-visual-top"><span className="mini-label">THE INTERNNOVA APPROACH</span><span className="tiny-status"><span></span> Progress over perfection</span></div>
        <div className="stack-illustration">
          <div className="stack-card stack-card-back"><span className="stack-code">01 / LEARN</span><div className="stack-lines"><i></i><i></i><i></i></div></div>
          <div className="stack-card stack-card-mid"><span className="stack-code">02 / APPLY</span><div className="stack-window"><span></span><span></span><span></span><div className="window-lines"><i></i><i></i><i></i></div></div></div>
          <div className="stack-card stack-card-front"><div className="stack-front-icon"><Layers3 size={21} /></div><strong>Make knowledge<br />tangible.</strong><span>LEARN → BUILD → GROW</span></div>
          <div className="stack-badge"><Zap size={16} fill="currentColor" /> Hands-on first</div>
        </div>
        <div className="about-visual-bottom"><span>CURIOUS MINDS</span><span>REAL-WORLD THINKING</span><span>CONTINUOUS GROWTH</span></div>
      </div>
      <div className="about-copy">
        <SectionHeading eyebrow="A little about us" title="Learning should lead" highlight="somewhere." description="InternNova is positioned around helping learners move beyond passive tutorials and into practical, project-led learning experiences." />
        <p className="about-detail">The strongest progress happens when you can apply a concept, work through a challenge, and explain what you built. That's the mindset behind this learning journey.</p>
        <div className="about-points">
          <div><span className="check-circle"><Check size={15} /></span><div><strong>Learn with direction</strong><p>Understand the goal behind each task and what it helps you practice.</p></div></div>
          <div><span className="check-circle"><Check size={15} /></span><div><strong>Build with intention</strong><p>Practice through projects that demonstrate your thinking and effort.</p></div></div>
          <div><span className="check-circle"><Check size={15} /></span><div><strong>Grow with reflection</strong><p>Review what worked, what didn't, and what you want to improve next.</p></div></div>
        </div>
        <a className="arrow-link" href="https://internnova.co.in/" target="_blank" rel="noreferrer">Learn about InternNova <ArrowUpRight size={16} /></a>
      </div>
    </div>
  </section>;
}

function Journey() {
  return <section className="section journey-section section-anchor" id="journey">
    <div className="container">
      <SectionHeading eyebrow="A process that makes sense" title="From first step to" highlight="finished project." description="A simple framework for making learning active, measurable, and easier to talk about." align="center" />
      <div className="journey-grid">
        {steps.map((step, i) => { const Icon = step.icon; return <article className="journey-card" key={step.number}>
          <div className="journey-card-top"><span className="journey-number">{step.number}</span><span className="journey-icon"><Icon size={21} /></span></div>
          {i < steps.length - 1 && <div className="journey-connector"><span></span></div>}
          <h3>{step.title}</h3><p>{step.text}</p>
        </article>; })}
      </div>
    </div>
  </section>;
}

function WhyUs() {
  const benefits = [
    { icon: Monitor, title: "Practical by design", text: "Move from concepts to deliverables with tasks that encourage real application." },
    { icon: Users, title: "Learn in a community", text: "Share progress, ask better questions, and learn from different perspectives." },
    { icon: MessageCircle, title: "Feedback that helps", text: "Use review and reflection to understand where you can improve your work." },
    { icon: BadgeCheck, title: "Show your progress", text: "Organize your work into projects you can discuss in interviews and portfolios." },
  ];
  return <section className="section why-section">
    <div className="container why-layout">
      <div className="why-copy"><SectionHeading eyebrow="Why InternNova" title="More than just" highlight="another course." description="A learning experience should leave you with more than notes. It should leave you with work you understand and skills you can keep building." />
        <a className="arrow-link" href="#programs">Find your learning track <ArrowRight size={16} /></a>
      </div>
      <div className="benefits-grid">{benefits.map(({icon: Icon,title,text},i)=><article className="benefit-card" key={title}><span className="benefit-icon"><Icon size={20}/></span><span className="benefit-index">0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div>
  </section>;
}

function LearningExtras() {
  return <section className="section extras-section">
    <div className="container">
      <div className="extras-banner">
        <div className="extras-orb extras-orb-one"></div><div className="extras-orb extras-orb-two"></div>
        <div className="extras-content"><div className="section-eyebrow"><span></span> Keep exploring</div><h2>Curiosity is a career<br />skill. <span className="gradient-text">Keep feeding it.</span></h2><p>Explore workshops, guided learning and resources that help you stay curious beyond your current track.</p><div className="extras-actions"><Button href="https://internnova.co.in/" variant="light">Explore learning resources</Button><a href="https://internnova.co.in/" target="_blank" rel="noreferrer" className="extras-secondary">See official updates <ArrowUpRight size={15}/></a></div></div>
        <div className="extras-tiles"><div className="extra-tile tile-workshop"><span><CalendarDays size={19}/></span><div><small>LEARN TOGETHER</small><strong>Workshops & events</strong><p>Discover new ideas and perspectives.</p></div><ArrowUpRight size={17}/></div><div className="extra-tile tile-resources"><span><BookOpen size={19}/></span><div><small>BUILD YOUR BASE</small><strong>Student resources</strong><p>Support for your next learning step.</p></div><ArrowUpRight size={17}/></div><div className="extra-tile tile-community"><span><Users size={19}/></span><div><small>GROW WITH OTHERS</small><strong>Community learning</strong><p>Turn questions into momentum.</p></div><ArrowUpRight size={17}/></div></div>
      </div>
    </div>
  </section>;
}

function Impact() {
  const stats = [
    { value: "01", label: "Clear learning path", note: "A practical starting point" },
    { value: "06", label: "Example learning tracks", note: "Explore different directions" },
    { value: "04", label: "Project journey steps", note: "Learn, apply, build, reflect" },
    { value: "∞", label: "Room to keep growing", note: "Your learning doesn't stop" },
  ];
  return <section className="impact-section"><div className="container impact-layout"><div className="impact-intro"><div className="section-eyebrow"><span></span> Progress, not promises</div><h2>Make every learning<br />step <span className="gradient-text">count.</span></h2><p>Build a body of work you can reflect on, improve, and share.</p></div><div className="impact-stats">{stats.map(s=><div className="impact-stat" key={s.label}><strong>{s.value}</strong><span>{s.label}</span><small>{s.note}</small></div>)}</div></div></section>;
}

function Community() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];
  return <section className="section community-section section-anchor" id="community">
    <div className="container community-layout">
      <div className="community-copy"><SectionHeading eyebrow="Learning is a journey" title="Small wins. Real" highlight="momentum." description="A good learning experience helps you see progress, not just consume content." /><p className="community-note"><ShieldCheck size={17}/> This redesign uses illustrative student perspectives, not attributed real reviews.</p></div>
      <div className="testimonial-card">
        <div className="testimonial-top"><span className="quote-mark">“</span><span className="testimonial-label"><span className="live-dot"></span> STUDENT PERSPECTIVE</span></div>
        <div className="testimonial-stars">{[1,2,3,4,5].map(n=><Star key={n} size={15} fill="currentColor"/>)}</div>
        <blockquote>{item.quote}</blockquote>
        <div className="testimonial-bottom"><div className="testimonial-person"><span className="testimonial-avatar">{item.initials}</span><div><strong>{item.name}</strong><span>{item.role}</span></div></div><div className="testimonial-controls">{testimonials.map((t,i)=><button key={t.role} aria-label={`Show testimonial ${i+1}`} aria-pressed={active===i} className={active===i?"testimonial-dot active":"testimonial-dot"} onClick={()=>setActive(i)}></button>)}</div></div>
      </div>
    </div>
  </section>;
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return <section className="section faq-section section-anchor" id="faq"><div className="container faq-layout">
    <div className="faq-intro"><SectionHeading eyebrow="Good questions" title="A few things you" highlight="might be wondering." description="Need program-specific information? Check the official listing before making a decision." /><a className="arrow-link" href="https://internnova.co.in/" target="_blank" rel="noreferrer">Visit official website <ArrowUpRight size={16}/></a></div>
    <div className="faq-list">{faqs.map((faq,i)=><div className={`faq-item ${open===i?"faq-open":""}`} key={faq.q}><button className="faq-question" aria-expanded={open===i} onClick={()=>setOpen(open===i?-1:i)}><span><small>0{i+1}</small>{faq.q}</span><span className="faq-chevron"><ChevronDown size={18}/></span></button>{open===i&&<div className="faq-answer"><p>{faq.a}</p></div>}</div>)}</div>
  </div></section>;
}

function FinalCTA() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function submit(event) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setMessage("Enter a valid email address."); return; }
    setMessage("Thanks — this demo form is working locally. Connect a form service to receive submissions.");
    setEmail("");
  }
  return <section className="section final-cta-section"><div className="container"><div className="final-cta">
    <div className="cta-glow"></div><div className="cta-content"><div className="section-eyebrow"><span></span> Your next chapter</div><h2>Don't wait to feel ready.<br /><span className="gradient-text">Start building.</span></h2><p>Choose a direction, take the first step, and let the work teach you what comes next.</p><div className="cta-actions"><Button href="#programs">Explore learning tracks</Button><a className="text-link" href="https://internnova.co.in/" target="_blank" rel="noreferrer">Visit InternNova <ArrowUpRight size={15}/></a></div></div>
    <form className="updates-form" onSubmit={submit}><div className="updates-icon"><Send size={19}/></div><h3>Keep your curiosity close.</h3><p>Leave your email in this interface demo to test the interaction.</p><label className="sr-only" htmlFor="updates-email">Email address</label><div className="email-field"><input id="updates-email" type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/><button aria-label="Submit email" type="submit"><ArrowRight size={18}/></button></div><small className={message?"form-message":"form-disclaimer"} aria-live="polite">{message || "Demo only — no email is stored or sent."}</small></form>
  </div></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-main"><div className="footer-brand-col"><Brand footer/><p>Helping curious learners turn skills into projects and projects into momentum.</p><a className="footer-official" href="https://internnova.co.in/" target="_blank" rel="noreferrer">Official InternNova website <ArrowUpRight size={14}/></a></div>
    <div className="footer-col"><h4>Explore</h4><a href="#programs">Learning tracks</a><a href="#journey">How it works</a><a href="#community">Community</a><a href="#faq">FAQs</a></div>
    <div className="footer-col"><h4>Domains</h4><a href="#programs">Web development</a><a href="#programs">Artificial intelligence</a><a href="#programs">Data analytics</a><a href="#programs">Cybersecurity</a></div>
    <div className="footer-col"><h4>Get in touch</h4><a href="https://internnova.co.in/" target="_blank" rel="noreferrer">Official website <ArrowUpRight size={13}/></a><a href="https://internnova.co.in/internships" target="_blank" rel="noreferrer">Internship listings <ArrowUpRight size={13}/></a><span className="footer-disclaimer">Independent redesign concept</span></div></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} InternNova homepage redesign concept.</span><span>Designed to learn. Built to improve.</span><a href="#home">Back to top ↑</a></div>
  </div></footer>;
}

function App() {
  return <><Header/><main><Hero/><div className="trust-strip"><div className="container trust-strip-inner"><span>DESIGNED AROUND PRACTICAL PROGRESS</span><i></i><span>PROJECT-LED LEARNING</span><i></i><span>CAREER-READY MINDSET</span><i></i><span>CURIOUS BY NATURE</span></div></div><Programs/><About/><Journey/><WhyUs/><LearningExtras/><Impact/><Community/><FAQ/><FinalCTA/></main><Footer/></>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
