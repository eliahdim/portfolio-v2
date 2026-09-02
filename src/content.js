export const profile = {
  name: 'Eliah Bäckström Dimmed',
  shortName: 'Eliah Dimmed',
  email: 'eliah.dimmed@gmail.com',
  location: 'Tyringe, Skåne',
  github: 'https://github.com/eliahdim',
  linkedin: 'https://www.linkedin.com/in/eliah-dimmed/',
  // Temporary fallback to the current CV on Portfolio V1 until a new PDF is added to this repository.
  cv: 'https://eliahdimmed.vercel.app/files/eliah-dimmed-cv.pdf',
};

const sharedProjects = {
  trustscribe: {
    slug: 'trustscribe',
    number: '01',
    year: '2025',
    accent: 'lime',
    image: 'trustscribe',
    links: {
      github: 'https://github.com/NTIG-Helsingborg/TE4_25-26_Skolverket-transkribering',
    },
    stack: ['Python', 'PyWebView', 'Whisper', 'ffmpeg', 'Local AI'],
  },
  campaignforge: {
    slug: 'campaignforge',
    number: '02',
    year: '2026',
    accent: 'cobalt',
    image: 'campaignforge',
    links: {},
    stack: ['JavaScript', 'AI workflows', 'Prompt design', 'E-commerce', 'UX'],
  },
  '1percent': {
    slug: '1percent',
    number: '03',
    year: '2026',
    accent: 'coral',
    image: 'one-percent',
    links: {
      github: 'https://github.com/eliahdim/1Percent',
    },
    stack: ['React', 'React Flow', 'Express', 'SQLite', 'Vite'],
  },
};

export const content = {
  sv: {
    meta: {
      title: 'Eliah Bäckström Dimmed — IT-support & IT-tekniker',
      description:
        'Junior IT-support och IT-tekniker i Skåne med erfarenhet av praktisk felsökning, fiber, nätverk, kundkontakt och mjukvaruutveckling.',
    },
    nav: {
      work: 'Projekt',
      experience: 'Erfarenhet',
      about: 'Om mig',
      contact: 'Kontakt',
      menu: 'Meny',
      close: 'Stäng',
      language: 'English',
      languageLabel: 'Byt till engelska',
    },
    hero: {
      eyebrow: 'IT-support · IT-tekniker · Skåne',
      titleBefore: 'Jag får teknik att fungera',
      titleAccent: 'för människor.',
      intro:
        'Jag kombinerar praktisk erfarenhet av fiber, nätverk och kundnära felsökning med en bakgrund inom mjukvaruutveckling. Nu söker jag en junior roll inom IT-support, onsite IT eller som IT-tekniker där jag får kombinera teknisk problemlösning med kontakt med användare.',
      primary: 'Se min erfarenhet',
      secondary: 'Utvalda projekt',
      cv: 'Ladda ner CV',
      status: 'Öppen för juniora roller',
      statusDetail: 'IT-support · Onsite-IT · Teknisk service',
      portraitAlt: 'Platshållare för porträtt av Eliah Bäckström Dimmed',
      portraitLabel: 'Porträtt kommer',
    },
    proof: [
      { value: '1 år', label: 'praktiskt arbete med fiber och nätverk' },
      { value: '2', label: 'internationella och yrkesnära praktikperioder' },
      { value: '7', label: 'utvalda projekt från idé till fungerande lösning' },
      { value: 'SV / EN', label: 'professionell kommunikation på två språk' },
    ],
    diagnostic: {
      eyebrow: 'Min arbetsmetod',
      title: 'Felsökning är inte att gissa snabbare.',
      intro:
        'Det handlar om att skapa en tydlig bild, isolera orsaken och verifiera att användaren faktiskt kan arbeta vidare. Klicka igenom ett typiskt scenario.',
      scenarioLabel: 'Scenario 01',
      scenario: 'En användare har nätverk men kommer inte åt företagets system.',
      previous: 'Föregående steg',
      next: 'Nästa steg',
      restart: 'Börja om',
      steps: [
        {
          number: '01',
          verb: 'Förstå',
          title: 'Avgränsa problemet',
          body: 'Jag börjar med användaren: Vad fungerar, vad fungerar inte och när började det? Sedan kontrollerar jag om felet gäller en person, en enhet eller hela miljön.',
          signal: 'Omfattning identifierad',
          command: 'scope → user / device / service',
        },
        {
          number: '02',
          verb: 'Isolera',
          title: 'Kontrollera lagren',
          body: 'Fysisk anslutning, IP-konfiguration, gateway, DNS och åtkomst till tjänsten kontrolleras i ordning. Varje test ska minska antalet möjliga orsaker.',
          signal: 'DNS-fel isolerat',
          command: 'link ✓  ip ✓  gateway ✓  dns ✕',
        },
        {
          number: '03',
          verb: 'Åtgärda',
          title: 'Gör minsta säkra förändring',
          body: 'Jag korrigerar den felaktiga inställningen utan att skapa nya risker, testar först själv och låter därefter användaren prova samma arbetsflöde.',
          signal: 'Åtkomst återställd',
          command: 'resolve dns → verify service → user test',
        },
        {
          number: '04',
          verb: 'Säkra',
          title: 'Verifiera och dokumentera',
          body: 'Ett ärende är inte klart förrän lösningen är bekräftad. Jag dokumenterar symptom, orsak och åtgärd så att nästa liknande fel kan lösas snabbare.',
          signal: 'Lösning verifierad',
          command: 'document → handover → prevent recurrence',
        },
      ],
    },
    projects: {
      eyebrow: 'Utvalda arbeten',
      title: 'Teknik med ett tydligt syfte.',
      intro:
        'Tre projekt som visar olika sidor av hur jag arbetar: integritet och AI, produktutveckling för e-handel och ett fullstackverktyg för personliga mål.',
      open: 'Öppna case study',
      github: 'Visa på GitHub',
      live: 'Öppna demo',
      roleLabel: 'Min roll',
      problemLabel: 'Utmaningen',
      approachLabel: 'Arbetet',
      resultLabel: 'Resultatet',
      back: 'Tillbaka till alla projekt',
      next: 'Nästa case study',
      placeholder: 'Projektbild kommer',
      items: [
        {
          ...sharedProjects.trustscribe,
          title: 'TrustScribe',
          category: 'Lokal AI · Integritet · Desktop',
          summary:
            'Ett lokalt transkriptionsverktyg för känsliga svenska och engelska inspelningar – utan att materialet lämnar datorn.',
          role: 'Utvecklare i TE4-team',
          problem:
            'Skolverkets Innovationslabb behövde kunna transkribera ljud och video utan att känsligt material skickades till externa molntjänster.',
          approach:
            'Vi byggde ett desktopverktyg med lokal Whisper-transkribering, köhantering, tydlig förloppsvisning, modellhantering och sparad historik. Jag arbetade med att översätta ett komplext AI-flöde till ett gränssnitt som känns begripligt även för en icke-teknisk användare.',
          result:
            'Projektet kombinerade integritet, AI, desktop-UI och verkliga krav från en extern uppdragsgivare. Lösningen presenterades även i sammanhanget Veckans AI inför cirka 80 personer.',
          highlights: ['Lokal behandling', 'Svenska och engelska', 'Presenterat för cirka 80 personer'],
        },
        {
          ...sharedProjects.campaignforge,
          title: 'CampaignForge / CopyForge',
          category: 'AI-flöden · E-handel · Produktdesign',
          summary:
            'En sammanhängande arbetsyta som hjälper e-handlare gå från produktinformation till användbart kampanjmaterial.',
          role: 'Utvecklare under praktik hos ZYNQ Media Group',
          problem:
            'Att skapa konsekvent och säljande innehåll för flera marknadsföringskanaler tar mycket tid och kräver ofta upprepade manuella steg. Utmaningen var därför att effektivisera arbetet utan att tappa varumärkets ton, kvalitet eller möjligheten att iterera på innehållet.',
          approach:
            'Jag utvecklade CopyForge för produkt- och kanaltexter samt CampaignForge för kompletta marknadsföringskampanjer. Arbetet omfattade bland annat AI-generering, versionshantering, regenerering och förfining av enskilda delar, sparade produkter och kampanjer, varumärkesanpassning, användarkonton samt förbättringar av UI/UX utifrån återkommande feedback.',
          result:
            'Resultatet blev två fungerande AI-baserade produkter där fokus inte bara ligger på att generera innehåll, utan på hela arbetsflödet kring att skapa, förbättra, spara och återanvända material. Projekten visar hur jag kan kombinera teknisk utveckling, AI, produktdesign och affärstänk för att bygga lösningar som faktiskt kan användas och säljas till företag.',
          highlights: ['Versionshantering och förfining', 'Varumärkesanpassade flöden', 'Produkt- och affärsfokus'],
        },
        {
          ...sharedProjects['1percent'],
          title: '1Percent',
          category: 'Fullstack · Visualisering · Produktidé',
          summary:
            'Ett visuellt verktyg som bryter ner stora ambitioner till konkreta delmål i interaktiva målträd.',
          role: 'Idé, design och utveckling',
          problem:
            'Stora mål blir lätt abstrakta. Vanliga checklistor visar vad som ska göras, men sällan hur små steg hänger ihop med den större riktningen.',
          approach:
            'Jag byggde en interaktiv arbetsyta med nästlade delmål, dragbara noder, automatisk layout, framsteg, inställningar och beständig lagring via ett Express-API och SQLite.',
          result:
            'Projektet visar fullstack-tänkande, tillståndshantering och hur en personlig idé kan formas till en produkt som är enkel att förstå och använda.',
          highlights: ['Interaktiv nodvy', 'Beständig data', 'Frontend och backend'],
        },
      ],
    },
    experience: {
      eyebrow: 'Erfarenhet',
      title: 'Från fiber i fält till AI-produkter.',
      intro:
        'Jag började med praktiskt arbete inom fiber, nätverk och kundnära felsökning. Under TE4 breddade jag erfarenheten med mjukvaruutveckling, lokala AI-verktyg, e-handel och praktik i både Sverige och Malta.',
      previous: 'Föregående erfarenhet',
      next: 'Nästa erfarenhet',
      placeholder: 'Bild kommer',
      items: [
        {
          period: '2021 — 2024',
          title: 'Teknikprogrammet',
          place: 'Hässleholms tekniska skola',
          type: 'Utbildning',
          description:
            'Byggde en bred teknisk grund inom programmering, webbutveckling och digital teknik. Avslutade utbildningen med ett egenutvecklat 2D-spel i Unity.',
          skills: ['Programmering', 'Webb', 'C# / Unity'],
          image: 'hts',
        },
        {
          period: 'JUL 2024 — JUL 2025',
          title: 'Fibertekniker',
          place: 'Bara Montage Sverige AB',
          type: 'Arbete',
          description:
            'Arbetade med installation, driftsättning och felsökning av fiber- och nätverksinfrastruktur i bostadsmiljöer. Arbetet omfattade fiberblåsning och fibersvetsning, CAT6, mediaskåp, routrar, TV-utrustning, felavhjälpning och direkt kundkontakt.',
          skills: ['Fiber', 'CAT6', 'Felsökning', 'Kundkontakt'],
          image: 'fiber',
        },
        {
          period: 'AUG 2025 — JUN 2026',
          title: 'Gymnasieingenjör, TE4',
          place: 'NTI Gymnasiet Helsingborg',
          type: 'Utbildning',
          description:
            'Ett intensivt år med mjukvarudesign, databaser, API:er, arkitektur, agila arbetssätt och projekt för verkliga användningsområden.',
          skills: ['React', 'Python', 'Databaser', 'Agilt arbete'],
          image: 'nti',
        },
        {
          period: 'SEP — NOV 2025',
          title: 'Skolverkets Innovationslabb',
          place: 'TrustScribe',
          type: 'Projekt / praktik',
          description:
            'Utvecklade ett lokalt AI-verktyg för säker transkribering tillsammans med ett TE4-team och arbetade utifrån krav från en extern uppdragsgivare.',
          skills: ['Python', 'Lokal AI', 'Kravarbete', 'Presentation'],
          image: 'trustscribe',
        },
        {
          period: 'FEB — MAR 2026',
          title: 'Internationell IT-praktik',
          place: 'Ascencia Malta',
          type: 'Erasmus+',
          description:
            'Arbetade med webb, visuell design och planering av ett internt skolsystem för närvaro och schemaläggning i en engelskspråkig miljö.',
          skills: ['Engelska', 'Webb', 'Design', 'Anpassningsförmåga'],
          image: 'malta',
        },
        {
          period: 'MAR — MAJ 2026',
          title: 'AI- och e-handelsutveckling',
          place: 'ZYNQ Media Group',
          type: 'Praktik',
          description:
            'Utvecklade CopyForge, ConversionLens och CampaignForge från idé och krav till prototyp, test och förbättring efter feedback.',
          skills: ['AI-flöden', 'E-handel', 'UX', 'Självständigt arbete'],
          image: 'zynq',
        },
      ],
    },
    skills: {
      eyebrow: 'Teknisk profil',
      groups: [
        {
          number: '01',
          title: 'Support & service',
          items: ['Användarsupport', 'Kundkontakt', 'Ärendedokumentation', 'Hårdvara', 'Microsoft 365'],
        },
        {
          number: '02',
          title: 'System & nätverk',
          items: ['Windows', 'Linux', 'TCP/IP', 'DNS & DHCP', 'Fiber', 'CAT6'],
        },
        {
          number: '03',
          title: 'Utveckling',
          items: ['JavaScript', 'React', 'Python', 'Node / Express', 'SQL', 'API:er'],
        },
      ],
    },
    archive: {
      eyebrow: 'Fler projekt',
      title: 'Byggt under utbildning, praktik och på eget initiativ.',
      open: 'Öppna projekt',
      items: [
        {
          title: 'Home-E',
          year: '2026',
          type: 'Hackathon · Vue / Electron',
          description: 'En familjehubb för uppgifter, måltider, inköp och aktiviteter – byggd av ett tremannateam under tidspress.',
          href: 'https://github.com/Mykyta-G/Home-E',
        },
        {
          title: 'Ragazzi dei Profumi',
          year: '2026',
          type: 'Frontend · React / Vite',
          description: 'Ett visuellt produktkoncept för parfymprover med responsiv navigering och separata produktsidor.',
          href: 'https://ragazzi-dei-profumi.vercel.app/',
        },
        {
          title: 'Hypixel Skyblock Tracker',
          year: '2025',
          type: 'API · React',
          description: 'Sökning och dynamisk filtrering av extern speldata med bildhantering, favoriter och driftsatt frontend.',
          href: 'https://github.com/NTIG-Helsingborg/TE4_25-26_React-API',
        },
        {
          title: 'Pootis Adventures',
          year: '2024',
          type: 'Spel · C# / Unity',
          description: 'Ett 2D-plattformsspel med fyra banor som blev mitt första större projekt från idé till färdig leverans.',
          href: 'https://github.com/eliahdim/GA_Game',
        },
      ],
    },
    about: {
      eyebrow: 'Personen bakom tekniken',
      title: 'Problemlösare på jobbet. Fotboll, gym och musik på fritiden.',
      paragraphs: [
        'Jag är 21 år och bor i Tyringe i Skåne. Jag gillar IT eftersom jag får kombinera teknik, logik och kontakt med människor. Jag trivs särskilt när jag får sätta mig in i ett problem, hitta orsaken och se till att lösningen fungerar i praktiken.',
        'På fritiden spelar och följer jag fotboll, tränar på gym och lyssnar mycket på musik. Jag tycker också om att prova nya tekniska verktyg och bygga mindre lösningar när jag får en idé.',
      ],
      cards: [
        { label: 'Bas', value: 'Tyringe / Hässleholm' },
        { label: 'Språk', value: 'Svenska & engelska' },
        { label: 'Arbetssätt', value: 'Lugn, metodisk & nyfiken' },
        { label: 'På fritiden', value: 'Fotboll, gym & musik' },
      ],
    },
    contact: {
      eyebrow: 'Nästa steg',
      title: 'Har ni ett problem som behöver en lugn problemlösare?',
      intro:
        'Jag är öppen för juniora roller inom IT-support, onsite-IT och teknisk service i Skåne. Berätta gärna om rollen eller bara säg hej.',
      email: 'Skicka e-post',
      linkedin: 'LinkedIn',
      formTitle: 'Skriv ett meddelande',
      name: 'Ditt namn',
      emailField: 'Din e-postadress',
      message: 'Meddelande',
      send: 'Skicka meddelande',
      sending: 'Skickar…',
      success: 'Tack! Meddelandet är skickat. Jag återkommer så snart jag kan.',
      error: 'Något gick fel. Mejla mig gärna direkt i stället.',
      privacy: 'Uppgifterna används endast för att kunna svara på ditt meddelande.',
    },
    footer: {
      top: 'Till toppen',
      note: 'Designad och byggd med omtanke i Skåne.',
    },
  },
  en: {
    meta: {
      title: 'Eliah Bäckström Dimmed — IT Support & IT Technician',
      description:
        'Junior IT support and IT technician in southern Sweden with hands-on experience in troubleshooting, fibre, networks, customer service and software development.',
    },
    nav: {
      work: 'Work',
      experience: 'Experience',
      about: 'About',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close',
      language: 'Svenska',
      languageLabel: 'Switch to Swedish',
    },
    hero: {
      eyebrow: 'IT support · IT technician · Southern Sweden',
      titleBefore: 'I make technology work',
      titleAccent: 'for people.',
      intro:
        'I combine hands-on experience in fibre, networks and customer-facing troubleshooting with a software engineering background. I am now looking for a junior role in IT support, onsite IT or as an IT technician where I can combine technical problem-solving with user contact.',
      primary: 'See my experience',
      secondary: 'Selected work',
      cv: 'Download résumé',
      status: 'Open to junior roles',
      statusDetail: 'IT support · Onsite IT · Technical service',
      portraitAlt: 'Placeholder for a portrait of Eliah Bäckström Dimmed',
      portraitLabel: 'Portrait coming',
    },
    proof: [
      { value: '1 year', label: 'hands-on fibre and networking experience' },
      { value: '2', label: 'international and industry work placements' },
      { value: '7', label: 'selected projects from idea to working solution' },
      { value: 'SV / EN', label: 'professional communication in two languages' },
    ],
    diagnostic: {
      eyebrow: 'My approach',
      title: 'Troubleshooting is not guessing faster.',
      intro:
        'It is about building a clear picture, isolating the cause and confirming that the user can actually move forward. Step through a typical scenario.',
      scenarioLabel: 'Scenario 01',
      scenario: 'A user has a network connection but cannot access a business system.',
      previous: 'Previous step',
      next: 'Next step',
      restart: 'Start again',
      steps: [
        {
          number: '01', verb: 'Understand', title: 'Define the scope',
          body: 'I start with the user: what works, what does not and when did it begin? Then I establish whether the issue affects one person, one device or the entire environment.',
          signal: 'Scope identified', command: 'scope → user / device / service',
        },
        {
          number: '02', verb: 'Isolate', title: 'Check the layers',
          body: 'Physical connection, IP configuration, gateway, DNS and service access are checked in order. Every test should reduce the number of possible causes.',
          signal: 'DNS issue isolated', command: 'link ✓  ip ✓  gateway ✓  dns ✕',
        },
        {
          number: '03', verb: 'Resolve', title: 'Make the smallest safe change',
          body: 'I correct the faulty setting without introducing new risk, test it myself and then ask the user to repeat their original workflow.',
          signal: 'Access restored', command: 'resolve dns → verify service → user test',
        },
        {
          number: '04', verb: 'Secure', title: 'Verify and document',
          body: 'A ticket is not finished until the solution is confirmed. I document symptoms, cause and resolution so the next similar issue can be solved faster.',
          signal: 'Solution verified', command: 'document → handover → prevent recurrence',
        },
      ],
    },
    projects: {
      eyebrow: 'Selected work',
      title: 'Technology with a clear purpose.',
      intro: 'Three projects showing different parts of how I work: privacy and AI, product development for e-commerce, and a full-stack tool for personal goals.',
      open: 'Open case study', github: 'View on GitHub', live: 'Open live demo',
      roleLabel: 'My role', problemLabel: 'The challenge', approachLabel: 'The work', resultLabel: 'The outcome',
      back: 'Back to all projects', next: 'Next case study', placeholder: 'Project image coming',
      items: [
        {
          ...sharedProjects.trustscribe,
          title: 'TrustScribe', category: 'Local AI · Privacy · Desktop',
          summary: 'A local transcription tool for sensitive Swedish and English recordings — without the material leaving the computer.',
          role: 'Developer in a TE4 team',
          problem: 'The Swedish National Agency for Education innovation lab needed a way to transcribe audio and video without sending sensitive material to external cloud services.',
          approach: 'We built a desktop tool with local Whisper transcription, queue management, clear progress feedback, model handling and saved history. I helped translate a complex AI workflow into an interface that feels understandable to non-technical users.',
          result: 'The project combined privacy, AI, desktop UI and real requirements from an external stakeholder. The solution was also presented as part of Veckans AI to an audience of roughly 80 people.',
          highlights: ['Local processing', 'Swedish and English', 'Presented to roughly 80 people'],
        },
        {
          ...sharedProjects.campaignforge,
          title: 'CampaignForge / CopyForge', category: 'AI workflows · E-commerce · Product design',
          summary: 'A connected workspace helping e-commerce teams move from product information to useful campaign assets.',
          role: 'Developer during a placement at ZYNQ Media Group',
          problem: 'Creating consistent and persuasive content across several marketing channels takes time and often requires repetitive manual work. The challenge was to make that process more efficient without losing the brand voice, quality or the ability to iterate on the material.',
          approach: 'I developed CopyForge for product and channel copy and CampaignForge for complete marketing campaigns. The work included AI generation, version management, regenerating and refining individual assets, saved products and campaigns, brand adaptation, user accounts, and recurring UI/UX improvements based on feedback.',
          result: 'The result was two functioning AI-based products focused not only on generating content, but on the complete workflow for creating, improving, saving and reusing material. The projects show how I combine technical development, AI, product design and commercial thinking to build tools that can genuinely be used and sold to businesses.',
          highlights: ['Versioning and refinement', 'Brand-aware workflows', 'Product and commercial focus'],
        },
        {
          ...sharedProjects['1percent'],
          title: '1Percent', category: 'Full stack · Visualisation · Product idea',
          summary: 'A visual tool that breaks ambitious goals into concrete subgoals using interactive goal trees.',
          role: 'Concept, design and development',
          problem: 'Large goals easily become abstract. Standard checklists show what needs doing, but rarely show how small steps connect to the bigger direction.',
          approach: 'I built an interactive canvas with nested subgoals, draggable nodes, automatic layout, progress, settings and persistent storage through an Express API and SQLite.',
          result: 'The project demonstrates full-stack thinking, state management and how a personal idea can become a product that is easy to understand and use.',
          highlights: ['Interactive node canvas', 'Persistent data', 'Frontend and backend'],
        },
      ],
    },
    experience: {
      eyebrow: 'Experience', title: 'From fibre in the field to AI products.',
      intro: 'I started with hands-on work in fibre, networks and customer-facing troubleshooting. During TE4, I broadened that experience with software development, local AI tools, e-commerce and work placements in both Sweden and Malta.',
      previous: 'Previous experience', next: 'Next experience', placeholder: 'Image coming',
      items: [
        { period: '2021 — 2024', title: 'Technology Programme', place: 'Hässleholm Technical School', type: 'Education', description: 'Built a broad technical foundation in programming, web development and digital technology. Finished with a self-developed 2D game in Unity.', skills: ['Programming', 'Web', 'C# / Unity'], image: 'hts' },
        { period: 'JUL 2024 — JUL 2025', title: 'Fibre Technician', place: 'Bara Montage Sverige AB', type: 'Employment', description: 'Installed, commissioned and troubleshot fibre and network infrastructure in residential environments. The role included fibre blowing and splicing, CAT6, media cabinets, routers, TV equipment, fault resolution and direct customer contact.', skills: ['Fibre', 'CAT6', 'Troubleshooting', 'Customers'], image: 'fiber' },
        { period: 'AUG 2025 — JUN 2026', title: 'Graduate Engineer, TE4', place: 'NTI Gymnasiet Helsingborg', type: 'Education', description: 'An intensive year covering software design, databases, APIs, architecture, agile methods and projects created for real-world use cases.', skills: ['React', 'Python', 'Databases', 'Agile'], image: 'nti' },
        { period: 'SEP — NOV 2025', title: 'Innovation Lab', place: 'TrustScribe', type: 'Project / placement', description: 'Developed a local AI tool for secure transcription in a TE4 team, working from the requirements of an external stakeholder.', skills: ['Python', 'Local AI', 'Requirements', 'Presentation'], image: 'trustscribe' },
        { period: 'FEB — MAR 2026', title: 'International IT Placement', place: 'Ascencia Malta', type: 'Erasmus+', description: 'Worked on web development, visual design and planning an internal attendance and scheduling system in an English-speaking environment.', skills: ['English', 'Web', 'Design', 'Adaptability'], image: 'malta' },
        { period: 'MAR — MAY 2026', title: 'AI & E-commerce Development', place: 'ZYNQ Media Group', type: 'Placement', description: 'Developed CopyForge, ConversionLens and CampaignForge from idea and requirements through prototype, testing and feedback-led improvement.', skills: ['AI workflows', 'E-commerce', 'UX', 'Independent work'], image: 'zynq' },
      ],
    },
    skills: {
      eyebrow: 'Technical profile',
      groups: [
        { number: '01', title: 'Support & service', items: ['User support', 'Customer contact', 'Ticket documentation', 'Hardware', 'Microsoft 365'] },
        { number: '02', title: 'Systems & networks', items: ['Windows', 'Linux', 'TCP/IP', 'DNS & DHCP', 'Fibre', 'CAT6'] },
        { number: '03', title: 'Development', items: ['JavaScript', 'React', 'Python', 'Node / Express', 'SQL', 'APIs'] },
      ],
    },
    archive: {
      eyebrow: 'More work', title: 'Built through education, work placements and personal initiative.', open: 'Open project',
      items: [
        { title: 'Home-E', year: '2026', type: 'Hackathon · Vue / Electron', description: 'A family hub for tasks, meals, shopping and activities — built by a three-person team under time pressure.', href: 'https://github.com/Mykyta-G/Home-E' },
        { title: 'Ragazzi dei Profumi', year: '2026', type: 'Frontend · React / Vite', description: 'A visual product concept for fragrance samples with responsive navigation and individual product pages.', href: 'https://ragazzi-dei-profumi.vercel.app/' },
        { title: 'Hypixel Skyblock Tracker', year: '2025', type: 'API · React', description: 'Search and dynamic filtering of external game data with image handling, favourites and a deployed frontend.', href: 'https://github.com/NTIG-Helsingborg/TE4_25-26_React-API' },
        { title: 'Pootis Adventures', year: '2024', type: 'Game · C# / Unity', description: 'A four-level 2D platformer and my first larger project taken from idea to finished delivery.', href: 'https://github.com/eliahdim/GA_Game' },
      ],
    },
    about: {
      eyebrow: 'The person behind the technology', title: 'Problem-solver at work. Football, training and music outside it.',
      paragraphs: [
        'I am 21 and based in Tyringe in southern Sweden. I enjoy IT because it lets me combine technology, logic and contact with people. I am at my best when I can understand a problem, identify the cause and make sure the solution works in practice.',
        'Outside work, I play and follow football, train at the gym and listen to a lot of music. I also enjoy exploring new technical tools and building smaller solutions whenever I get an idea.',
      ],
      cards: [
        { label: 'Based in', value: 'Tyringe / Hässleholm' }, { label: 'Languages', value: 'Swedish & English' },
        { label: 'Approach', value: 'Calm, methodical & curious' }, { label: 'Outside work', value: 'Football, training & music' },
      ],
    },
    contact: {
      eyebrow: 'Next step', title: 'Have a problem that needs a calm problem-solver?',
      intro: 'I am open to junior IT support, onsite IT and technical service roles in southern Sweden. Tell me about the role or simply say hello.',
      email: 'Send an email', linkedin: 'LinkedIn', formTitle: 'Write a message', name: 'Your name', emailField: 'Your email', message: 'Message', send: 'Send message', sending: 'Sending…', success: 'Thank you! Your message has been sent. I will get back to you as soon as I can.', error: 'Something went wrong. Please email me directly instead.', privacy: 'Your details are only used to reply to this message.',
    },
    footer: { top: 'Back to top', note: 'Designed and built with care in southern Sweden.' },
  },
};

export function getProject(lang, slug) {
  return content[lang].projects.items.find((project) => project.slug === slug);
}
