// Everything the site shows lives here. Edit this, not the components.

export const profile = {
  name: 'Miroszlava',
  fullName: 'Miroszlava Bokotej',
  initials: 'M.B',
  role: 'Graduate Software Engineer',
  location: 'East Grinstead, UK',
  lead: "I'm a graduate Computer Science student and full-stack developer, comfortable across the stack and into cloud and DevOps.",
  now: "At IRCEF I develop and maintain a production website end to end — building features, writing tests, managing deployments, and resolving issues in production. I'm now seeking a graduate software engineering role where I can keep working on reliable, well-tested systems.",
}

export const links = {
  email: 'mirosyabokotey@gmail.com',
  github: 'https://github.com/mirrosyaa',
  githubLabel: 'github.com/mirrosyaa',
  linkedin: 'https://www.linkedin.com/in/myr3',
  linkedinLabel: 'linkedin.com/in/myr3',
  phone: '+44 (0)7493 059025',
  phoneHref: 'tel:+447493059025',
  cv: '/Miroszlava_Bokotej_CV_Optimized.docx',
}

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { number: 2, suffix: '', label: 'Degrees' },
  { number: 5, suffix: '+', label: 'Projects shipped' },
  { number: 5, suffix: '', label: 'Languages' },
]

export const work = [
  {
    name: 'FileLabs',
    link: { label: 'GitHub', href: 'https://github.com/mirrosyaa/filelabs' },
    blurb:
      'A full-stack file-processing web app: a component-based React front end on a Node.js/Express REST API, with MySQL for storage. Authentication is handled with JWT and Bcrypt-hashed passwords. A GitHub Actions pipeline builds the project into artifacts, stores them, then deploys to AWS EC2 and S3. Tested through to User Acceptance Testing.',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'AWS', 'GitHub Actions'],
  },
  {
    name: 'IRCEF website',
    link: { label: 'Live site', href: 'https://ircef.org' },
    blurb:
      "The production site for the Interreligious and Environmental Civil Forum of Eastern Europe. I build and maintain its front-end component library, added Ukrainian-language locales for the organisation's outreach, and run a version-controlled deploy workflow with safe rollbacks. Requirements come straight from the communications team and I see them through testing to release.",
    tags: ['React', 'Node.js', 'Git', 'i18n', 'SDLC'],
  },
  {
    name: 'This portfolio',
    link: { label: 'GitHub', href: 'https://github.com/mirrosyaa/portfolio-website' },
    blurb:
      'Built with React and Vite in a component-based layout, no UI framework. The background is a canvas scene that responds to the cursor. Version-controlled with Git.',
    tags: ['React', 'Vite', 'Canvas', 'CSS'],
  },
  {
    name: 'Currency Converter',
    link: { label: 'GitHub', href: 'https://github.com/mirrosyaa/currency-converter' },
    blurb:
      'A converter that pulls live exchange rates from a public API and converts between currencies, with a small responsive interface and sensible handling of failed requests.',
    tags: ['JavaScript', 'REST API', 'HTML/CSS'],
  },
  {
    name: 'Random Message Generator',
    link: { label: 'GitHub', href: 'https://github.com/mirrosyaa' },
    blurb:
      'A small command-line app that builds dynamic message combinations using array manipulation and randomisation. Modest in scope, but it is where I got comfortable with Git and a clean commit history.',
    tags: ['JavaScript', 'Node.js', 'Git'],
  },
]

export const skills = [
  { title: 'Languages', items: ['Java', 'JavaScript', 'Python', 'SQL', 'HTML/CSS'] },
  {
    title: 'Frameworks & libraries',
    items: ['React', 'Node.js', 'Express', 'JavaFX', 'JUnit', 'Bootstrap', 'Tailwind'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS (EC2, S3)', 'CI/CD pipelines', 'GitHub Actions', 'Git/GitHub'],
  },
  {
    title: 'Ways of working',
    items: ['Full SDLC', 'Testing & UAT', 'Requirements gathering', 'Documentation'],
  },
]

export const about = [
  "I'm a graduate Computer Science student at Anglia Ruskin University, and I hold a BSc in Computer and Business Mathematics from Uzhhorod National University in Ukraine.",
  'I relocated to the UK partway through the Ukrainian degree and completed it remotely while beginning my studies at Anglia Ruskin, managing both programmes concurrently. It taught me to prioritise effectively and deliver consistently under pressure.',
  'My experience spans full-stack development, cloud infrastructure, and CI/CD: implementing features, writing tests, and taking work through the full software development lifecycle to deployment. I focus on the practices that keep software reliable — testing, structured deployment workflows, and diagnosing issues in production.',
  'I keep my skills current by working with new tools and technologies, and I contribute to community projects where time allows.',
]

export const experience = [
  { role: 'Full Stack Developer', place: 'IRCEF', when: 'Jul 2024 — Present' },
  { role: 'Waitress', place: 'Aromi Caffe', when: 'Sep 2023 — Jan 2024' },
  {
    role: 'Volunteer',
    place: 'Salvation Army Charity Shop',
    when: 'Aug 2026 — Present',
  },
  { role: 'Volunteer', place: 'Filoksenia RY Trapesa, Finland', when: 'Aug 2021 — Dec 2021' },
]

export const learning = [
  'GitHub Foundations (GH-900) — in progress',
  'Microsoft Azure Fundamentals (AZ-900) — in progress',
  'Codecademy Full-Stack Developer',
  'UK full driving licence',
]
