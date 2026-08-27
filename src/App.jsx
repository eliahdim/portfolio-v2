import { useEffect, useMemo, useRef, useState } from 'react';
import { content, getProject, profile } from './content.js';
import { Icon } from './icons.jsx';

const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xeelnlog';

function readRoute() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  const stored = window.localStorage.getItem('portfolio-language');
  const detected = navigator.language?.toLowerCase().startsWith('sv') ? 'sv' : 'en';
  const lang = parts[0] === 'sv' || parts[0] === 'en' ? parts[0] : stored || detected;
  const slug = parts[1] === 'case' ? parts[2] : null;
  return { lang, slug, needsRedirect: !['sv', 'en'].includes(parts[0]) };
}

function useRoute() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    if (route.needsRedirect) {
      window.history.replaceState({}, '', `/${route.lang}${window.location.hash}`);
      setRoute({ ...route, needsRedirect: false });
    }
  }, [route]);

  useEffect(() => {
    const onPopState = () => setRoute(readRoute());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setRoute(readRoute());
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const setLanguage = (lang) => {
    window.localStorage.setItem('portfolio-language', lang);
    const suffix = route.slug ? `/case/${route.slug}` : '';
    navigate(`/${lang}${suffix}${window.location.hash}`);
  };

  return { ...route, navigate, setLanguage };
}

function usePageMeta(lang, data, project) {
  useEffect(() => {
    const title = project ? `${project.title} — ${profile.shortName}` : data.meta.title;
    const description = project?.summary || data.meta.description;
    document.documentElement.lang = lang;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${window.location.pathname}`;
  }, [lang, data, project]);
}

function useRevealAnimations(dependency) {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12, rootMargin: '0px 0px -50px' },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [dependency]);
}

function LinkButton({ href, children, variant = 'primary', external = false, download = false, onClick }) {
  return (
    <a
      className={`button button--${variant}`}
      href={href}
      onClick={onClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      download={download || undefined}
    >
      <span>{children}</span>
      <Icon name={download ? 'download' : external ? 'arrowUpRight' : 'arrowRight'} size={18} />
    </a>
  );
}

function Header({ lang, data, setLanguage, navigate, isCaseStudy = false }) {
  const [open, setOpen] = useState(false);
  const home = `/${lang}`;
  const links = [
    { label: data.nav.work, href: `${home}#work` },
    { label: data.nav.experience, href: `${home}#experience` },
    { label: data.nav.about, href: `${home}#about` },
    { label: data.nav.contact, href: `${home}#contact` },
  ];

  const onInternal = (event, href) => {
    event.preventDefault();
    setOpen(false);
    if (isCaseStudy) {
      navigate(href);
      setTimeout(() => document.querySelector(window.location.hash || '#top')?.scrollIntoView(), 0);
      return;
    }
    const hash = href.split('#')[1];
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState({}, '', href);
  };

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <a className="wordmark" href={home} onClick={(event) => { event.preventDefault(); navigate(home); }} aria-label={`${profile.name} home`}>
          <span className="wordmark-mark">E</span>
          <span className="wordmark-name">Eliah <em>Dimmed</em></span>
        </a>
        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={(event) => onInternal(event, link.href)}>
              {link.label}
            </a>
          ))}
          <button className="language-switch" type="button" onClick={() => setLanguage(lang === 'sv' ? 'en' : 'sv')} aria-label={data.nav.languageLabel}>
            <span>{lang.toUpperCase()}</span>
            {data.nav.language}
          </button>
        </nav>
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? data.nav.close : data.nav.menu}>
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>
    </header>
  );
}

function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow ${light ? 'eyebrow--light' : ''}`}><span aria-hidden="true" />{children}</p>;
}

function PlaceholderVisual({ label, variant = 'default', image, alt = '' }) {
  if (image) {
    return <img className="placeholder-image" src={image} alt={alt} loading="lazy" />;
  }
  return (
    <div className={`placeholder placeholder--${variant}`} role="img" aria-label={label}>
      <div className="placeholder-grid" />
      {variant === 'portrait' && <div className="portrait-silhouette"><span /><i /></div>}
      {variant === 'trustscribe' && (
        <div className="visual-window visual-window--audio">
          <div className="visual-window-bar"><i /><i /><i /></div>
          <div className="waveform">{Array.from({ length: 28 }, (_, index) => <i key={index} style={{ '--h': `${20 + ((index * 17) % 64)}%` }} />)}</div>
          <div className="visual-copy"><span /><span /><span /></div>
        </div>
      )}
      {variant === 'campaignforge' && (
        <div className="visual-window visual-window--campaign">
          <div className="visual-sidebar"><i /><i /><i /><i /></div>
          <div className="visual-canvas"><span /><div><i /><i /></div><span /></div>
        </div>
      )}
      {variant === '1percent' && (
        <div className="goal-map"><span className="goal-root">1%</span><span className="goal-node goal-node--one" /><span className="goal-node goal-node--two" /><span className="goal-node goal-node--three" /><i className="goal-line goal-line--one" /><i className="goal-line goal-line--two" /><i className="goal-line goal-line--three" /></div>
      )}
      <span className="placeholder-label">{label}</span>
    </div>
  );
}

function Hero({ data }) {
  return (
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <Eyebrow>{data.hero.eyebrow}</Eyebrow>
        <h1>{data.hero.titleBefore} <em>{data.hero.titleAccent}</em></h1>
        <p className="hero-intro">{data.hero.intro}</p>
        <div className="hero-actions">
          <LinkButton href="#method" onClick={(event) => { event.preventDefault(); document.getElementById('method')?.scrollIntoView({ behavior: 'smooth' }); }}>{data.hero.primary}</LinkButton>
          <LinkButton href="#work" variant="text" onClick={(event) => { event.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}>{data.hero.secondary}</LinkButton>
        </div>
        <a className="cv-link" href={profile.cv} download><Icon name="download" size={17} />{data.hero.cv}</a>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <PlaceholderVisual label={data.hero.portraitLabel} variant="portrait" alt={data.hero.portraitAlt} />
          <div className="portrait-caption">
            <span className="status-dot" />
            <div><strong>{data.hero.status}</strong><small>{data.hero.statusDetail}</small></div>
          </div>
        </div>
        <div className="hero-coordinate hero-coordinate--top">56.1622° N</div>
        <div className="hero-coordinate hero-coordinate--bottom">13.5987° E</div>
      </div>
    </section>
  );
}

function ProofBar({ items }) {
  return (
    <section className="proof-bar" aria-label="Quick facts">
      <div className="shell proof-grid">
        {items.map((item) => <div className="proof-item" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
      </div>
    </section>
  );
}

function Diagnostic({ data }) {
  const [active, setActive] = useState(0);
  const step = data.steps[active];
  return (
    <section className="diagnostic section section--dark" id="method">
      <div className="shell">
        <div className="section-heading section-heading--split reveal">
          <div><Eyebrow light>{data.eyebrow}</Eyebrow><h2>{data.title}</h2></div>
          <p>{data.intro}</p>
        </div>
        <div className="diagnostic-console reveal">
          <div className="diagnostic-scenario">
            <span>{data.scenarioLabel}</span><p>{data.scenario}</p>
          </div>
          <div className="diagnostic-progress" role="tablist" aria-label={data.title}>
            {data.steps.map((item, index) => (
              <button key={item.number} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
                <span>{item.number}</span><strong>{item.verb}</strong>
              </button>
            ))}
          </div>
          <div className="diagnostic-body" aria-live="polite">
            <div className="diagnostic-terminal">
              <div className="terminal-top"><span /><span /><span /><small>eliah@support:~</small></div>
              <div className="terminal-content">
                <p><span>$</span> {step.command}</p>
                <p className="terminal-status"><Icon name="check" size={16} /> {step.signal}</p>
                <div className="terminal-pulse"><i /><i /><i /><i /></div>
              </div>
            </div>
            <div className="diagnostic-explanation">
              <span className="step-number">{step.number} / 04</span>
              <h3>{step.title}</h3><p>{step.body}</p>
              <div className="diagnostic-controls">
                <button type="button" disabled={active === 0} onClick={() => setActive((value) => Math.max(0, value - 1))} aria-label={data.previous}><Icon name="arrowLeft" /></button>
                <button type="button" onClick={() => setActive((value) => value === data.steps.length - 1 ? 0 : value + 1)}>
                  {active === data.steps.length - 1 ? data.restart : data.next}<Icon name="arrowRight" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects({ lang, data, navigate }) {
  return (
    <section className="projects-section section" id="work">
      <div className="shell">
        <div className="section-heading section-heading--split reveal">
          <div><Eyebrow>{data.eyebrow}</Eyebrow><h2>{data.title}</h2></div><p>{data.intro}</p>
        </div>
        <div className="featured-projects">
          {data.items.map((project, index) => (
            <article className={`featured-project featured-project--${project.accent} reveal`} key={project.slug}>
              <div className="project-visual-wrap">
                <span className="project-number">{project.number}</span>
                <PlaceholderVisual label={data.placeholder} variant={project.slug} image={project.image} alt={project.title} />
              </div>
              <div className="project-copy">
                <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
                <h3>{project.title}</h3><p>{project.summary}</p>
                <ul className="tag-list" aria-label={`${project.title} technologies`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                <a className="project-link" href={`/${lang}/case/${project.slug}`} onClick={(event) => { event.preventDefault(); navigate(`/${lang}/case/${project.slug}`); }}>
                  {data.open}<span><Icon name="arrowUpRight" size={19} /></span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience({ data }) {
  const [active, setActive] = useState(1);
  const item = data.items[active];
  const railRef = useRef(null);

  useEffect(() => {
    railRef.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [active]);

  const move = (direction) => setActive((value) => (value + direction + data.items.length) % data.items.length);

  return (
    <section className="experience section section--paper" id="experience">
      <div className="shell">
        <div className="section-heading section-heading--split reveal">
          <div><Eyebrow>{data.eyebrow}</Eyebrow><h2>{data.title}</h2></div><p>{data.intro}</p>
        </div>
        <div className="timeline reveal">
          <div className="timeline-rail" ref={railRef} role="tablist" aria-label={data.title}>
            {data.items.map((entry, index) => (
              <button key={`${entry.period}-${entry.title}`} data-index={index} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
                <span className="timeline-dot" /><small>{entry.period.split('—')[0]}</small><strong>{entry.title}</strong>
              </button>
            ))}
          </div>
          <div className="timeline-card" aria-live="polite">
            <div className="timeline-media"><PlaceholderVisual label={data.placeholder} variant="experience" image={item.image} alt={item.title} /><span>{String(active + 1).padStart(2, '0')} / {String(data.items.length).padStart(2, '0')}</span></div>
            <div className="timeline-copy">
              <div className="timeline-card-meta"><span>{item.type}</span><span>{item.period}</span></div>
              <h3>{item.title}</h3><p className="timeline-place"><Icon name="location" size={17} />{item.place}</p><p>{item.description}</p>
              <ul className="tag-list tag-list--dark">{item.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              <div className="timeline-controls">
                <button type="button" onClick={() => move(-1)} aria-label={data.previous}><Icon name="arrowLeft" /></button>
                <button type="button" onClick={() => move(1)} aria-label={data.next}><Icon name="arrowRight" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills({ data }) {
  return (
    <section className="skills section">
      <div className="shell">
        <div className="section-heading reveal"><Eyebrow>{data.eyebrow}</Eyebrow><h2>{data.title}</h2></div>
        <div className="skill-groups">
          {data.groups.map((group) => (
            <article className="skill-group reveal" key={group.number}>
              <div className="skill-group-head"><span>{group.number}</span><Icon name={group.number === '01' ? 'spark' : group.number === '02' ? 'terminal' : 'arrowUpRight'} /></div>
              <h3>{group.title}</h3><p>{group.description}</p>
              <ul>{group.items.map((item) => <li key={item}><span />{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Archive({ data }) {
  return (
    <section className="archive section section--dark">
      <div className="shell">
        <div className="section-heading reveal"><Eyebrow light>{data.eyebrow}</Eyebrow><h2>{data.title}</h2></div>
        <div className="archive-list">
          {data.items.map((project, index) => (
            <a className="archive-item reveal" key={project.title} href={project.href} target="_blank" rel="noreferrer">
              <span className="archive-index">{String(index + 4).padStart(2, '0')}</span>
              <div><h3>{project.title}</h3><p>{project.description}</p></div>
              <div className="archive-meta"><span>{project.type}</span><span>{project.year}</span></div>
              <span className="archive-arrow"><Icon name="arrowUpRight" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ data }) {
  return (
    <section className="about section section--paper" id="about">
      <div className="shell about-grid">
        <div className="about-title reveal"><Eyebrow>{data.eyebrow}</Eyebrow><h2>{data.title}</h2><div className="about-signature">ED</div></div>
        <div className="about-copy reveal">{data.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="about-cards">{data.cards.map((card) => <div key={card.label}><span>{card.label}</span><strong>{card.value}</strong></div>)}</div>
        </div>
      </div>
    </section>
  );
}

function Contact({ lang, data }) {
  const [state, setState] = useState('idle');
  const [message, setMessage] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    setState('sending'); setMessage('');
    const form = event.currentTarget;
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('Form submission failed');
      form.reset(); setState('success'); setMessage(data.success);
    } catch {
      setState('error'); setMessage(data.error);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="shell contact-grid">
        <div className="contact-copy reveal">
          <Eyebrow>{data.eyebrow}</Eyebrow><h2>{data.title}</h2><p>{data.intro}</p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><Icon name="mail" /><span><small>{data.email}</small>{profile.email}</span><Icon name="arrowUpRight" /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /><span><small>{data.linkedin}</small>linkedin.com/in/eliah-dimmed</span><Icon name="arrowUpRight" /></a>
          </div>
        </div>
        <form className="contact-form reveal" action={FORMSPREE_ENDPOINT} method="POST" onSubmit={submit}>
          <div className="form-top"><h3>{data.formTitle}</h3><span>SV / EN</span></div>
          <label>{data.name}<input name="name" type="text" autoComplete="name" required /></label>
          <label>{data.emailField}<input name="email" type="email" autoComplete="email" required /></label>
          <label>{data.message}<textarea name="message" rows="5" required /></label>
          <input className="form-honeypot" type="text" name="_gotcha" tabIndex="-1" autoComplete="off" aria-hidden="true" />
          <input type="hidden" name="_subject" value={`Portfolio V2 contact (${lang.toUpperCase()})`} />
          <button className="button button--primary" type="submit" disabled={state === 'sending'}>{state === 'sending' ? data.sending : data.send}<Icon name="arrowRight" size={18} /></button>
          <small className="form-privacy">{data.privacy}</small>
          {message && <p className={`form-message form-message--${state}`} role="status">{message}</p>}
        </form>
      </div>
    </section>
  );
}

function Footer({ data }) {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div><span className="footer-mark">E</span><p>© {new Date().getFullYear()} {profile.name}<small>{data.note}</small></p></div>
        <div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href="#top">{data.top} ↑</a></div>
      </div>
    </footer>
  );
}

function CaseStudyPage({ lang, data, project, navigate, setLanguage }) {
  const projectIndex = data.projects.items.findIndex((item) => item.slug === project.slug);
  const nextProject = data.projects.items[(projectIndex + 1) % data.projects.items.length];
  return (
    <>
      <Header lang={lang} data={data} setLanguage={setLanguage} navigate={navigate} isCaseStudy />
      <main id="main-content" className={`case-study case-study--${project.accent}`}>
        <section className="case-hero section">
          <div className="shell">
            <a className="case-back" href={`/${lang}#work`} onClick={(event) => { event.preventDefault(); navigate(`/${lang}#work`); setTimeout(() => document.getElementById('work')?.scrollIntoView(), 0); }}><Icon name="arrowLeft" size={18} />{data.projects.back}</a>
            <div className="case-heading"><span>{project.number} / 03</span><div><p>{project.category} · {project.year}</p><h1>{project.title}</h1><p className="case-summary">{project.summary}</p></div></div>
            <div className="case-main-visual"><PlaceholderVisual label={data.projects.placeholder} variant={project.slug} image={project.image} alt={project.title} /></div>
          </div>
        </section>
        <section className="case-content section section--paper">
          <div className="shell case-content-grid">
            <aside><span>{data.projects.roleLabel}</span><strong>{project.role}</strong><ul>{project.highlights.map((item) => <li key={item}><Icon name="check" size={16} />{item}</li>)}</ul></aside>
            <div className="case-story">
              <article><span>01</span><div><h2>{data.projects.problemLabel}</h2><p>{project.problem}</p></div></article>
              <article><span>02</span><div><h2>{data.projects.approachLabel}</h2><p>{project.approach}</p></div></article>
              <article><span>03</span><div><h2>{data.projects.resultLabel}</h2><p>{project.result}</p></div></article>
              <div className="case-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="case-actions">
                {project.links.github && <LinkButton href={project.links.github} external>{data.projects.github}</LinkButton>}
                {project.links.live && <LinkButton href={project.links.live} external variant="secondary">{data.projects.live}</LinkButton>}
              </div>
            </div>
          </div>
        </section>
        <section className="next-case">
          <a href={`/${lang}/case/${nextProject.slug}`} onClick={(event) => { event.preventDefault(); navigate(`/${lang}/case/${nextProject.slug}`); }}>
            <span>{data.projects.next}</span><strong>{nextProject.title}</strong><Icon name="arrowUpRight" size={36} />
          </a>
        </section>
      </main>
      <Footer data={data.footer} />
    </>
  );
}

export default function App() {
  const { lang, slug, navigate, setLanguage } = useRoute();
  const data = content[lang];
  const project = useMemo(() => slug ? getProject(lang, slug) : null, [lang, slug]);

  usePageMeta(lang, data, project);
  useRevealAnimations(`${lang}-${slug || 'home'}`);

  useEffect(() => {
    if (!slug && window.location.hash) setTimeout(() => document.querySelector(window.location.hash)?.scrollIntoView(), 20);
  }, [slug]);

  useEffect(() => {
    if (slug && !project) navigate(`/${lang}`);
  }, [slug, project, lang]);

  if (slug && !project) {
    return null;
  }

  if (project) return <CaseStudyPage lang={lang} data={data} project={project} navigate={navigate} setLanguage={setLanguage} />;

  return <HomeWithLanguage lang={lang} data={data} navigate={navigate} setLanguage={setLanguage} />;
}

function HomeWithLanguage({ lang, data, navigate, setLanguage }) {
  return (
    <>
      <Header lang={lang} data={data} setLanguage={setLanguage} navigate={navigate} />
      <main id="main-content">
        <Hero data={data} /><ProofBar items={data.proof} /><Diagnostic data={data.diagnostic} />
        <FeaturedProjects lang={lang} data={data.projects} navigate={navigate} />
        <Experience data={data.experience} /><Skills data={data.skills} /><Archive data={data.archive} />
        <About data={data.about} /><Contact lang={lang} data={data.contact} />
      </main>
      <Footer data={data.footer} />
    </>
  );
}
