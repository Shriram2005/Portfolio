export const contact = {
  email: 'mange.shriram@gmail.com',
  phone: '+91 78218 51927',
  whatsapp: 'https://wa.me/917821851927',
  telegram: 'https://t.me/Shrirammange',
  github: 'https://github.com/Shriram2005',
  linkedin: 'https://linkedin.com/in/shriram-mange',
  site: 'https://shrirammange.me',
}

export type Project = {
  name: string
  kind: 'Android' | 'Web' | 'AI / IoT'
  tag: string
  stack: string[]
  desc: string
  points?: string[]
  live?: string
  repo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'HappenGrid',
    kind: 'Web',
    tag: 'Client · Event platform',
    stack: ['Django', 'Python', 'PostgreSQL', 'AWS Lightsail', 'Coolify', 'S3', 'SES', 'Razorpay', 'CI/CD'],
    desc: 'End-to-end event management platform where organizers host and manage events while attendees explore, register and follow communities.',
    points: [
      'Attendee portal — discovery, paid/free ticketing, community follows',
      'Organizer dashboard — event lifecycle, ticket tracking, payout requests',
      'Admin console — organizers, events, blogs, reports & payout disbursement',
      'Razorpay payments, push-to-deploy CI/CD, daily Postgres backups to S3',
    ],
    live: 'https://happengrid.com',
    featured: true,
  },
  {
    name: 'Stepo',
    kind: 'Android',
    tag: 'Solo build · 150+ students',
    stack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Retrofit', 'FCM', 'iText7', 'Material 3'],
    desc: 'Native Android school management system — timetables, test engine, assignments, fee payments with PDF receipts, circulars and a help desk.',
    points: [
      'Interactive test & exercise engine with instant feedback',
      'Secure fee gateway with automated iText7 PDF receipts',
      'FCM-powered circulars and in-app updates via Play Core',
    ],
    repo: 'https://github.com/Shriram2005',
    featured: true,
  },
  {
    name: 'Zervista',
    kind: 'Android',
    tag: 'Live on Play Store',
    stack: ['Flutter', 'Dart', 'Firebase', 'Google Cloud'],
    desc: 'Salon & parlour management system with customer and staff management, analytics and inventory tracking. Built solo in 4 months.',
    live: 'https://play.google.com/store/apps/details?id=com.zervista&pcampaignid=web_share',
    featured: true,
  },
  {
    name: 'Smart Assistant for the Visually Impaired',
    kind: 'AI / IoT',
    tag: 'Raspberry Pi · OCR',
    stack: ['Python', 'Tesseract OCR', 'Raspberry Pi 4B', 'GCP', 'AWS'],
    desc: 'IoT assistant that reads printed text aloud using OCR and text-to-speech to help blind individuals.',
    repo: 'https://github.com/Shriram2005/Smart-Assistant-for-Blind-People-using-Raspberry-Pi',
  },
  {
    name: 'House of Deepak',
    kind: 'Web',
    tag: 'E-commerce',
    stack: ['React', 'Tailwind CSS', 'Firebase'],
    desc: 'Fashion brand website for Indian and Western wear with a refined, responsive shopping experience.',
    live: 'https://houseofdeepak.in',
  },
  {
    name: 'MyDhruva Mentors',
    kind: 'Web',
    tag: 'Live site',
    stack: ['React', 'Responsive Design'],
    desc: 'Mentorship platform with student-centric content, programs, outcomes and easy contact flows.',
    live: 'https://mydhruvamentors.com',
  },
  {
    name: 'MediScribe OCR',
    kind: 'AI / IoT',
    tag: 'Healthcare',
    stack: ['Python', 'Paddle OCR', 'Database'],
    desc: 'Digitizes handwritten medical prescriptions accurately using Paddle OCR.',
    repo: 'https://github.com/Shriram2005/MediScribe-OCR',
  },
  {
    name: 'Pdfdroid',
    kind: 'Web',
    tag: 'PDF toolkit',
    stack: ['JavaScript', 'PDF.js'],
    desc: 'Merge, split, compress and convert PDFs right in the browser.',
    live: 'https://pdfdroid.netlify.app',
    repo: 'https://github.com/Shriram2005/Pdfdroid',
  },
  {
    name: 'QR-Barcode Scanner',
    kind: 'Android',
    tag: 'ML Kit',
    stack: ['Kotlin', 'Jetpack Compose', 'Google ML Kit'],
    desc: 'Multi-purpose real-time scanner app built with Compose and ML Kit.',
    repo: 'https://github.com/Shriram2005/QR-Barcode-Scanner-App',
  },
  {
    name: 'Barcode Product Scanner',
    kind: 'Android',
    tag: 'Inventory',
    stack: ['Android', 'Barcode', 'Database'],
    desc: 'E-commerce product image manager with barcode scanning and inventory tracking.',
    repo: 'https://github.com/Shriram2005/Barcode-Product-Scanner',
  },
  {
    name: 'Calculator App',
    kind: 'Android',
    tag: 'Compose UI',
    stack: ['Kotlin', 'Jetpack Compose'],
    desc: 'Calculator with modern UI design and smooth animations.',
    repo: 'https://github.com/Shriram2005/Calculator-App-Jetpack-Compose',
  },
  {
    name: 'Neutralise',
    kind: 'Web',
    tag: 'E-commerce',
    stack: ['HTML', 'CSS', 'JavaScript'],
    desc: 'E-commerce platform with product catalog, user management and shopping cart.',
    live: 'https://shriram2005.github.io/Neutralise/',
    repo: 'https://github.com/Shriram2005/Neutralise',
  },
  {
    name: 'GTA Maharashtra Mods',
    kind: 'Web',
    tag: 'Community',
    stack: ['Web', 'Modding'],
    desc: 'Curated collection of GTA modifications and creative modding projects.',
    live: 'https://gtamaharashtramods.in',
  },
]

export const experience = [
  {
    role: 'Freelance Android & Full-stack Developer',
    org: 'Self-employed',
    when: '2025 — Present',
    where: 'Remote',
    points: [
      'Delivered 7+ end-to-end web and mobile apps for small businesses',
      'Own the full lifecycle: requirements, UI, development, testing, cloud deployment',
    ],
    stack: ['React', 'Flutter', 'Firebase', 'Node.js', 'MySQL'],
  },
  {
    role: 'Full Stack Developer Intern',
    org: 'Wind Hans Technology',
    when: 'Jan 2026',
    where: 'Nashik · On-site',
    points: [
      'Built an Employee Attendance Android app in Kotlin + Compose',
      'Check-in/out, attendance tracking and automated reporting',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Android SDK'],
  },
  {
    role: 'Android Intern',
    org: 'S.T.R.E.A.M. Edutech',
    when: 'Sep 2024 — Feb 2025',
    where: 'Mumbai · Remote',
    points: [
      'Architected Stepo solo — a school management app used by 150+ students',
      'Payments, FCM notifications, assessments, ticketing, MVVM + Material 3',
    ],
    stack: ['Kotlin', 'Compose', 'Retrofit', 'Firebase', 'MySQL'],
  },
  {
    role: 'Android Developer',
    org: 'Techentrance',
    when: 'Aug 2024 — Jan 2025',
    where: 'Nashik · Remote',
    points: [
      'Built and maintained Android apps with a focus on UX and clean design',
      'Integrated REST APIs and efficient local persistence',
    ],
    stack: ['Java', 'Kotlin', 'Firebase'],
  },
]

export const skills: Record<string, string[]> = {
  Languages: ['Kotlin', 'Java', 'Python', 'Dart', 'JavaScript', 'PHP', 'SQL', 'HTML5', 'CSS3'],
  Mobile: ['Jetpack Compose', 'Android SDK', 'Flutter', 'Room DB', 'Material Design', 'ML Kit', 'MVVM / MVI'],
  Web: ['React.js', 'Node.js', 'Django', 'Tailwind CSS', 'PDF.js', 'Responsive Design'],
  'Data & Cloud': ['MySQL', 'PostgreSQL', 'Firebase', 'Supabase', 'GCP', 'AWS'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Canva', 'Tesseract', 'Paddle OCR', 'Raspberry Pi'],
}

export const services = [
  ['Mobile Apps', 'Native Android with Compose, Material Design, Firebase and Play Store deployment.'],
  ['Web Solutions', 'React apps, PWAs, API integration and cloud deployment.'],
  ['UI/UX Design', 'Wireframes, prototypes, user research and design systems.'],
  ['SEO & Performance', 'Technical SEO, schema markup, analytics and speed work.'],
  ['Technical Consulting', 'Architecture review, stack selection and code review.'],
  ['Digital Design', 'Logos, brand identity, marketing and social graphics.'],
]

export const achievements = [
  ['1st', 'Winner — TechTrek 2k24 Coding Competition', 'Sandip University · Feb 2024'],
  ['2nd', '1st Runner Up — LogicHunt Coding Competition', 'KKWIEER · Oct 2025'],
  ['FIN', 'Finalist — Avishkar Project Presentation', 'KKWIEER · Sep 2025'],
  ['HAK', 'NASA Space Apps 2025 — CityScope, AI smart-city issue reporting', 'Also Sunhacks 2024 · VCET 2023 (blockchain certificate verification)'],
  ['OSS', 'Hacktoberfest 2024 contributor', 'UI/UX improvements to a Kotlin Android game'],
  ['LEAD', 'Design Committee Head — TechTrek 2k24 · Co-Head — Ascend 2k26', 'Branding, event website, automated certificate distribution'],
]

export const certs = [
  ['Kotlin Complete App Development Masterclass', 'Udemy · 67 hrs · Apr 2026'],
  ['Postman API Beginner Path', 'Postman · Jul 2026'],
  ['GitHub Foundations', 'GitHub · 82% · Jan 2025'],
  ['Jetpack Compose Fundamentals', 'Mind Luster · Jul 2024'],
  ['Programming in Java', 'NPTEL · 71% · 2024'],
]

export const education = [
  ['MCA', 'K.K. Wagh Institute of Engineering Education & Research', '2025 — Present', 'CGPA 8.05'],
  ['BCA', 'Sandip University, Nashik', '2022 — 2025', 'CGPA 8.41'],
  ['HSC', 'KTMH College, Nashik', '2020 — 2022', 'Science'],
  ['SSC', 'K.K. Wagh English School, Nashik', '2019 — 2020', '76%'],
]
