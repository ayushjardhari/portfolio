/* ═══════════════════════════════════════════════════
   AYUSH NEGI PORTFOLIO — data.js
═══════════════════════════════════════════════════ */

const DATA = {

  supabaseUrl: "https://sdabzuqkhkpjdaopygmk.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkYWJ6dXFraGtwamRhb3B5Z21rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwNTUwODMsImV4cCI6MjA5MjYzMTA4M30.BNMvgQxVyaTBV1iRKFLPn59IvMcFzStYCe5JzfHalj8",

  navIds: ['home', 'about', 'skills', 'projects', 'certification', 'contact'],

  /* PDF in /assets — opens in a new tab */
  resumePdf: 'assets/resume__1_ (3).pdf',

  roles: [
    'Blockchain Developer',
    'Systems Programmer',
    'Full-Stack Engineer',
    'CS Student @ GEHU',
    'GATE 2026 Qualifier',
  ],

  /* ── STATS (about section) ── */
  stats: [
    { val: '7.91', lbl: 'CGPA / 10' },
    { val: '3+',   lbl: 'Projects Built' },
    { val: '2027', lbl: 'Graduating Year' },
    { val: 'GATE', lbl: '2026 Qualified' },
  ],

  /* ── TRAITS ── */
  traits: [
    { icon: '⛓️', name: 'Blockchain Development',  desc: 'Solidity, Smart Contracts, Web3.js — tamper-proof decentralised systems on Ethereum.' },
    { icon: '⚙️', name: 'Systems Programming',     desc: 'C, TCP/IP, Multithreading, POSIX sockets — high-performance low-level network software.' },
    { icon: '📐', name: 'Algorithms & DSA',         desc: 'C++ STL, competitive problem-solving — strong foundations backed by GATE 2026.' },
    { icon: '🌐', name: 'Full-Stack Development',   desc: 'Java, REST APIs, SQL, HTML/CSS/JS — end-to-end application design & delivery.' },
    { icon: '🗄️', name: 'Databases',                desc: 'SQL & MongoDB — schema design, query optimisation, and scalable data management.' },
  ],

  /* ── SKILLS (bars) ── */
  skills: [
    { name: 'C / Systems Programming', level: 88, color: '#00ffaa' },
    { name: 'Blockchain & Solidity',    level: 84, color: '#00c8ff' },
    { name: 'Java & REST APIs',         level: 80, color: '#00ffaa' },
    { name: 'Data Structures & Algo',   level: 86, color: '#00c8ff' },
    { name: 'SQL & Databases',          level: 78, color: '#00ffaa' },
    { name: 'HTML / CSS / JavaScript',  level: 82, color: '#00c8ff' },
    { name: 'Web3.js',                  level: 76, color: '#00ffaa' },
    { name: 'MongoDB',                  level: 72, color: '#00c8ff' },
  ],

  /* ── CHIPS ── */
  chips: [
    'Solidity','Truffle','Ganache','IPFS','Web3.js',
    'Node.js','Express','PostgreSQL','MongoDB',
    'Socket.js','Linux','Bash','Wireshark','Postman',
    'VS Code','Git','GitHub','Docker (basic)',
    'C++','Java','Python (basic)','Figma',
  ],

  /* ── PROJECTS ── */
  projects: [
    {
      emoji:  '🗳️',
      color:  '#00ffaa',
      title:  'Decentralized Voting System',
      sub:    'Blockchain · Ethereum · DApp',
      desc:   'Tamper-proof voting DApp on Ethereum using Solidity smart contracts, Web3.js, and Truffle. Enforces one-vote-per-address cryptographically — zero central authority.',
      tags:   ['Solidity', 'Web3.js', 'Truffle', 'Ganache'],
      github: '#',
    },
    {
      emoji:  '⚡',
      color:  '#00c8ff',
      title:  'Multithreaded HTTP Proxy',
      sub:    'Systems · C · Networking',
      desc:   'High-performance caching HTTP/HTTPS proxy server in C with POSIX thread pooling, mutex synchronisation, and LRU cache — reduces latency by ~40%.',
      tags:   ['C', 'POSIX Threads', 'TCP/IP', 'Sockets'],
      github: '#',
    },
    {
      emoji:  '✈️',
      color:  '#ffd166',
      title:  'Smart Tour Planner',
      sub:    'Full-Stack · Java · REST',
      desc:   'End-to-end travel planning app with user auth, itinerary builder, and hotel search powered by Java REST APIs, SQL, and a responsive frontend.',
      tags:   ['Java', 'REST API', 'SQL', 'HTML/CSS/JS'],
      github: '#',
    },
  ],

  /* ── TIMELINE ── */
  timeline: [
    {
      type:  'edu',
      title: 'B.Tech Computer Science & Engineering',
      org:   'Graphic Era Hill University, Dehradun',
      year:  '2023 – 2027',
      desc:  'CGPA 7.91/10 · Focus on systems programming, blockchain, and full-stack development.',
    },
    {
      type:  'cert',
      title: 'GATE 2026 Qualified',
      org:   'IIT Bombay — Graduate Aptitude Test in Engineering',
      year:  '2026',
      desc:  'Demonstrated strong CS fundamentals at a national competitive level.',
    },
    {
      type:  'cert',
      title: 'Blockchain Fundamentals',
      org:   'Online Certification',
      year:  '2024',
      desc:  'Ethereum, smart contracts, cryptographic primitives, and DApp development.',
    },
    {
      type:  'cert',
      title: 'Data Structures & Algorithms',
      org:   'Online Certification',
      year:  '2024',
      desc:  'Advanced DSA in C++ — graphs, dynamic programming, and competitive techniques.',
    },
  ],

  /* ── PESE ── */
  /*
   * HOW TO ADD YOUR YOUTUBE VIDEO
   * ─────────────────────────────
   * For each module below, set videoId to the 11-character
   * YouTube video ID found in the URL after "?v="
   * 
   *
   * Example URL : https://www.youtube.com/watch?v=dQw4w9WgXcQ
   * videoId     : "dQw4w9WgXcQ"
   *
   * Leave videoId as null/falsy to hide the flip behaviour for that card.
   * You can paste the raw 11-character ID OR a full youtube.com / youtu.be link.
  
  pese: [
    {
      num: '01', title: 'Self Introduction',
      videoId: 'https://youtube.com/shorts/5ALiBl3dDEs?feature=share',
      items: [
        'Figured out how to introduce myself without sounding robotic.',
        'Learned to keep it brief but impactful.',
        'Realized how much body language and eye contact matter.',
        'Focused on highlighting my actual strengths.',
        'Stopped oversharing unnecessary personal stuff.',
        'Practiced it over and over again in class.',
        'Made different versions for interviews and GDs.',
      ],
    },
    {
      num: '02', title: 'Resume Building',
      videoId: null,
      items: [
        'Finally got a good structure for my resume.',
        'Learned about ATS and why formatting matters so much.',
        'Kept it clean and simple instead of using crazy designs.',
        'Figured out how to properly explain my projects.',
        'Started using better action verbs.',
        'Removed a bunch of fluff I didn\'t need.',
        'Actually built my resume and got it reviewed.',
        'It looks way more professional now.',
      ],
    },
    {
      num: '03', title: 'Essay Writing',
      videoId: null,
      items: [
        'Brushed up on the classic intro-body-conclusion structure.',
        'Worked on making my points flow better.',
        'Tried to fix some common grammar mistakes I make.',
        'Learned to stop repeating the same point.',
        'Started backing up my points with actual examples.',
        'Practiced writing under a time limit.',
        'Started proofreading properly before submitting.',
      ],
    },
    {
      num: '04', title: 'Group Discussion',
      videoId: null,
      items: [
        'Learned the right way to jump into a GD without being rude.',
        'Practiced speaking up confidently.',
        'Realized listening is just as important as speaking.',
        'Learned how to agree or disagree politely.',
        'Focused on bringing actual logic to the table.',
        'Made sure not to hog all the speaking time.',
        'Got better at staying calm when people argue.',
      ],
    },
    {
      num: '05', title: 'Interview Skills', full: true,
      videoId: null,
      items: [
        'Went over common HR questions (like "tell me about yourself").',
        'Practiced answering without rambling.',
        'Learned to explain my projects using the STAR method.',
        'Realized the importance of making eye contact.',
        'Talked about what to wear to look professional.',
        'Did mock interviews which really helped with the nerves.',
        'Found out I should always ask them a question at the end.',
      ],
    },
  ],
   */

  /* ── SOCIALS ── */
  socials: [
    { icon: '🐙', label: 'GitHub',   detail: 'github.com/ayushnegi',   href: 'https://github.com/' },
    { icon: '💼', label: 'LinkedIn', detail: 'linkedin.com/in/ayush',   href: 'https://linkedin.com/' },
    { icon: '📧', label: 'Email',    detail: 'ayush@example.com',        href: 'mailto:ayush@example.com' },
    { icon: '𝕏',  label: 'Twitter',  detail: '@ayush_negi',              href: 'https://twitter.com/' },
  ],

  /* ── HERO FLIP CARD — front stats ── */
  heroStats: [
    { val: '7.91', lbl: 'CGPA' },
    { val: '3+',   lbl: 'Projects' },
    { val: '2027', lbl: 'Graduating' },
    { val: 'GATE', lbl: '2026 ✓' },
  ],
};
