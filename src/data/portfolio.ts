/**
 * All portfolio content lives in this file.
 * To change text, links, projects or skills, edit here — components only render this data.
 * Every visible sentence has an Indonesian (id) and English (en) version.
 */

export type Lang = "id" | "en";
export type L = Record<Lang, string>;

/** Shorthand for a bilingual string: tr("indonesia", "english"). */
const tr = (id: string, en: string): L => ({ id, en });
/** Shorthand for a term that is the same in both languages (Python, GitHub, ...). */
const same = (text: string): L => ({ id: text, en: text });

/* -------------------------------------------------------------------------- */
/*  Profile                                                                   */
/* -------------------------------------------------------------------------- */

export const profile = {
  fullName: "Muhamad Fitra Kurnia",
  displayName: "Fitra",
  siteUrl: "https://mfitrakurnia.dev",
  email: "mfitrakurnia3115@gmail.com",
  github: "https://github.com/TreiNouva",
  linkedin: "https://www.linkedin.com/in/m-fitra-kurnia-10aaa0224",
  photo: "/images/profile.webp",
  headline: tr("Mahasiswa Computer Science", "Computer Science Student"),
  intro: tr(
    "Saya kuliah Computer Science di BINUS University dengan peminatan System Intelligence. Saya membuat proyek machine learning dan web, dan sedang mencari magang untuk terus belajar sambil mengerjakan proyek nyata.",
    "I study Computer Science at BINUS University, specializing in System Intelligence. I build machine learning and web projects, and I'm looking for an internship where I can keep learning by working on real projects.",
  ),
  focus: [
    tr("AI / Machine Learning", "AI / Machine Learning"),
    tr("Pengembangan web", "Web development"),
    tr("System Intelligence", "System Intelligence"),
  ],
  about: [
    tr(
      "Saya mahasiswa Computer Science di BINUS University dengan peminatan System Intelligence. Saya tertarik pada Natural Language Processing, Computer Vision, Machine Learning, dan kecerdasan buatan secara umum.",
      "I'm a Computer Science student at BINUS University, specializing in System Intelligence. I'm interested in Natural Language Processing, Computer Vision, Machine Learning, and AI more broadly.",
    ),
    tr(
      "Selama kuliah saya aktif di organisasi kampus dan mengerjakan proyek tim, mulai dari platform komunitas berbasis Next.js sampai aplikasi machine learning untuk mendeteksi komentar judi online dan memprediksi kestabilan pernikahan.",
      "Since starting university I've joined campus organizations and worked on team projects, from a Next.js community platform to machine learning apps that detect online gambling comments and predict marriage stability.",
    ),
    tr(
      "Saya nyaman bekerja dalam tim, punya inisiatif, dan cepat belajar dengan bimbingan yang tepat. Saya juga memahami bahasa Inggris dengan baik.",
      "I work well in a team, take initiative, and learn quickly with the right guidance. I also have a solid working understanding of English.",
    ),
  ],
  facts: [
    { label: tr("Universitas", "University"), value: tr("BINUS University", "BINUS University") },
    { label: tr("Program studi", "Program"), value: tr("S1 Computer Science", "Bachelor of Computer Science") },
    { label: tr("Peminatan", "Specialization"), value: tr("System Intelligence", "System Intelligence") },
    { label: tr("Semester", "Semester"), value: tr("5", "5") },
    { label: tr("Angkatan", "Started"), value: tr("2024", "2024") },
    { label: tr("Perkiraan lulus", "Expected graduation"), value: tr("2028", "2028") },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Interface text                                                            */
/* -------------------------------------------------------------------------- */

export const ui = {
  skipToContent: tr("Lewati ke konten utama", "Skip to main content"),
  nav: {
    home: tr("Beranda", "Home"),
    about: tr("Tentang saya", "About me"),
    education: tr("Pendidikan", "Education"),
    skills: tr("Keahlian", "Skills"),
    projects: tr("Proyek", "Projects"),
    experience: tr("Pengalaman", "Experience"),
    contact: tr("Kontak", "Contact"),
  },
  controls: {
    language: tr("Bahasa", "Language"),
    switchToLight: tr("Ganti ke mode terang", "Switch to light mode"),
    switchToDark: tr("Ganti ke mode gelap", "Switch to dark mode"),
    openMenu: tr("Buka menu", "Open menu"),
    closeMenu: tr("Tutup menu", "Close menu"),
    mainNav: tr("Navigasi utama", "Main navigation"),
    social: tr("Tautan profil", "Profile links"),
  },
  hero: {
    photoAlt: tr("Foto Muhamad Fitra Kurnia", "Portrait of Muhamad Fitra Kurnia"),
    viewProjects: tr("Lihat proyek", "View projects"),
    contactMe: tr("Hubungi saya", "Contact me"),
    focusLabel: tr("Fokus saat ini", "Current focus"),
    studying: {
      title: tr("Sedang menempuh", "Currently studying"),
      body: tr("Semester 5, System Intelligence di BINUS University", "Semester 5, System Intelligence at BINUS University"),
    },
    featured: {
      title: tr("Proyek unggulan", "Featured project"),
      body: tr("BINUSphere, sebagai Project Manager", "BINUSphere, as Project Manager"),
    },
    certificate: {
      title: tr("Sertifikat terbaru", "Latest certificate"),
      body: tr("Azure AI Fundamentals (AI-900), Maret 2026", "Azure AI Fundamentals (AI-900), March 2026"),
    },
  },
  about: {
    title: tr("Tentang saya", "About me"),
    factsTitle: tr("Ringkasan akademik", "Academic summary"),
  },
  education: {
    title: tr("Pendidikan", "Education"),
    items: [
      {
        school: tr("BINUS University", "BINUS University"),
        program: tr(
          "S1 Computer Science, peminatan System Intelligence",
          "Bachelor of Computer Science, System Intelligence specialization",
        ),
        period: tr("2024 sampai 2028 (perkiraan lulus)", "2024 to 2028 (expected graduation)"),
        note: tr("Saat ini di semester 5.", "Currently in semester 5."),
      },
      {
        school: tr("SMAI Al-Azhar Kelapa Gading", "SMAI Al-Azhar Kelapa Gading"),
        program: tr("SMA, peminatan MIPA", "Senior high school, Science (MIPA) track"),
        period: null,
        note: null,
      },
    ],
  },
  skills: {
    title: tr("Keahlian", "Skills"),
    groups: [
      {
        title: tr("Bahasa pemrograman", "Programming languages"),
        items: [same("C"), same("Python"), same("SQL"), same("Java"), same("JavaScript")],
      },
      {
        title: tr("Pengembangan web", "Web development"),
        items: [same("HTML"), same("CSS"), same("JavaScript"), same("React"), same("Next.js"), same("TypeScript"), same("Tailwind CSS")],
      },
      {
        title: tr("AI dan machine learning", "AI and machine learning"),
        items: [same("Natural Language Processing"), same("Computer Vision"), same("Machine Learning"), same("Scikit-learn"), same("Pandas")],
      },
      {
        title: tr("Tools dan platform", "Tools and platforms"),
        items: [same("GitHub"), same("Supabase"), same("Streamlit"), same("Vercel")],
      },
      {
        title: tr("Keahlian profesional", "Professional skills"),
        items: [
          same("UI/UX Design"),
          tr("Bahasa Inggris", "English"),
          tr("Komunikasi", "Communication"),
          tr("Kepemimpinan", "Leadership"),
          tr("Kerja sama tim", "Teamwork"),
          tr("Inisiatif", "Initiative"),
          tr("Kemampuan belajar", "Ability to learn"),
        ],
      },
    ],
  },
  projects: {
    title: tr("Proyek", "Projects"),
    intro: tr(
      "Empat proyek dengan peran yang berbeda: memimpin tim, membangun model, dan memastikan kualitas.",
      "Four projects with different roles: leading a team, building models, and making sure things work.",
    ),
    role: tr("Peran", "Role"),
    details: tr("Detail", "Details"),
    hideDetails: tr("Sembunyikan detail", "Hide details"),
    liveDemo: tr("Buka demo", "Live demo"),
    source: tr("Kode di GitHub", "Source on GitHub"),
    status: {
      deployed: tr("Sudah dirilis", "Deployed"),
      completed: tr("Selesai", "Completed"),
    },
  },
  experience: {
    title: tr("Pengalaman dan sertifikasi", "Experience and certifications"),
    organizationTitle: tr("Organisasi", "Organization"),
    activitiesTitle: tr("Kegiatan lain", "Other activities"),
    certificatesTitle: tr("Sertifikat", "Certificates"),
    learningHours: tr("jam belajar", "learning hours"),
    viewCertificate: tr("Lihat sertifikat", "View certificate"),
  },
  contact: {
    title: tr("Hubungi saya", "Get in touch"),
    body: tr(
      "Saya terbuka untuk peluang magang. Cara tercepat menghubungi saya adalah lewat email.",
      "I'm open to internship opportunities. The fastest way to reach me is by email.",
    ),
    send: tr("Kirim email", "Send an email"),
    copy: tr("Salin alamat email", "Copy email address"),
    copied: tr("Alamat email tersalin", "Email address copied"),
    subject: tr("Halo Fitra, saya ingin menghubungi Anda", "Hello Fitra, I'd like to get in touch"),
  },
  footer: tr("Dibuat dengan Next.js dan Tailwind CSS.", "Built with Next.js and Tailwind CSS."),
};

/* -------------------------------------------------------------------------- */
/*  Projects                                                                  */
/* -------------------------------------------------------------------------- */

export type ProjectStatus = "deployed" | "completed";

export type Project = {
  slug: string;
  name: string;
  featured?: boolean;
  role: L;
  status: ProjectStatus;
  description: L;
  tech: string[];
  sections: { title: L; items: L[] }[];
  links: { live?: string; github?: string };
};

export const projects: Project[] = [
  {
    slug: "binusphere",
    name: "BINUSphere",
    featured: true,
    role: tr("Project Manager", "Project Manager"),
    status: "deployed",
    description: tr(
      "Platform komunitas digital khusus mahasiswa BINUS yang menggabungkan interaksi sosial dan pertukaran informasi.",
      "A digital community platform exclusively for BINUS students that combines social interaction and information exchange.",
    ),
    tech: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "Lucide React"],
    sections: [
      {
        title: tr("Fitur", "Features"),
        items: [
          tr("Autentikasi", "Authentication"),
          tr("Beranda dan feed sosial", "Home and social feed"),
          tr("Diskusi forum", "Forum discussion"),
          tr("Profil", "Profile"),
          tr("Pesan", "Messages"),
          tr("Notifikasi", "Notifications"),
        ],
      },
      {
        title: tr("Kontribusi saya", "My contribution"),
        items: [
          tr("Menjaga tim tetap sejalan dengan arah proyek", "Kept the team aligned with the project direction"),
          tr("Memberi ide dan masukan selama pengembangan", "Contributed ideas and feedback throughout development"),
          tr("Memeriksa apakah proyek sudah benar dan siap dirilis", "Checked that the project was correct and ready to release"),
          tr("Membantu proyek bergerak menuju penyelesaian", "Helped move the project toward completion"),
        ],
      },
    ],
    links: {
      live: "https://binussphere-e3tz3ekxa-christinaangelaj-1924s-projects.vercel.app",
      github: "https://github.com/zcleips/binussphere.git",
    },
  },
  {
    slug: "judolguard",
    name: "JudolGuard",
    role: tr("Developer Machine Learning / NLP", "Machine Learning / NLP Developer"),
    status: "completed",
    description: tr(
      "Aplikasi Machine Learning dan NLP untuk mendeteksi promosi judi online pada komentar berbahasa Indonesia.",
      "A Machine Learning and NLP application that detects online gambling promotion in Indonesian comments.",
    ),
    tech: ["Python", "Streamlit", "Scikit-learn", "TF-IDF", "SVM", "Pandas"],
    sections: [
      {
        title: tr("Fitur", "Features"),
        items: [
          tr("Deteksi komentar satuan", "Individual comment detection"),
          tr("Moderasi massal dari file CSV/Excel", "Bulk CSV/Excel moderation"),
          tr("Preprocessing teks", "Text preprocessing"),
          tr("Klasifikasi berbasis maksud (intent)", "Intent-based classification"),
          tr("Analitik performa model", "Model performance analytics"),
        ],
      },
    ],
    links: { github: "https://github.com/TreiNouva/ML-Online-Gambling-Detection.git" },
  },
  {
    slug: "upgma",
    name: "Interactive UPGMA Phylogenetic Tree Builder",
    role: tr("Quality Assurance", "Quality Assurance"),
    status: "completed",
    description: tr(
      "Aplikasi bioinformatika interaktif berbasis Python dan Streamlit untuk membandingkan sekuens DNA dan memvisualisasikan pohon filogenetik.",
      "An interactive bioinformatics application built with Python and Streamlit to compare DNA sequences and visualize phylogenetic trees.",
    ),
    tech: ["Python", "Streamlit", "Pandas", "Matplotlib", "FASTA", "Levenshtein Distance", "UPGMA"],
    sections: [
      {
        title: tr("Implementasi teknis", "Technical implementation"),
        items: [
          tr("Jarak Levenshtein ternormalisasi", "Normalized Levenshtein distance"),
          tr("Clustering UPGMA buatan sendiri", "Custom UPGMA clustering"),
          tr("Visualisasi dendrogram", "Dendrogram visualization"),
        ],
      },
    ],
    links: { github: "https://github.com/TreiNouva/UPGMA-Phylogenetic-Tree-Builder.git" },
  },
  {
    slug: "matrimonymetric",
    name: "MatrimonyMetric",
    role: tr("Quality Assurance", "Quality Assurance"),
    status: "deployed",
    description: tr(
      "Aplikasi web Machine Learning yang memprediksi kestabilan pernikahan dari data survei hubungan.",
      "A Machine Learning web application that predicts marriage stability from relationship survey data.",
    ),
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Plotly", "Logistic Regression", "Random Forest", "SMOTE", "PCA", "Joblib"],
    sections: [
      {
        title: tr("Implementasi teknis", "Technical implementation"),
        items: [
          tr("Preprocessing data dan seleksi fitur", "Data preprocessing and feature selection"),
          tr("Logistic Regression dan Random Forest", "Logistic Regression and Random Forest"),
          tr("Cross-validation", "Cross-validation"),
          tr("Eksperimen SMOTE", "SMOTE experimentation"),
          tr("PCA", "PCA"),
          tr("Deployment interaktif dengan Streamlit", "Interactive Streamlit deployment"),
        ],
      },
    ],
    links: { live: "https://matrimony-metric.streamlit.app/" },
  },
];

/* -------------------------------------------------------------------------- */
/*  Experience and certificates                                               */
/* -------------------------------------------------------------------------- */

export const organization = {
  role: tr("Anggota", "Member"),
  name: "Majelis Taklim Al-Khawarizmi",
  place: "BINUS University",
  points: [
    tr("Ikut serta dalam kepanitiaan beberapa proyek organisasi", "Took part in committees for several organizational projects"),
    tr("Aktif dalam kegiatan organisasi", "Actively involved in organizational activities"),
  ],
};

export const otherActivities: L[] = [
  tr("Mengikuti webinar kampus", "Attended campus webinars"),
];

export type Certificate = {
  title: string;
  kind: L;
  issuer: string;
  hours: number;
  date: string; // ISO date
  file: string;
};

export const certificates: Certificate[] = [
  {
    title: "Pelatihan Azure AI Fundamentals: Microsoft AI-900T00-A Belajar AI dari Dasar",
    kind: tr("Sertifikat penyelesaian", "Certificate of completion"),
    issuer: "Microsoft Elevate AI Training Session, BINUS University x GreatNusa",
    hours: 15,
    date: "2026-03-30",
    file: "/certificates/azure-ai-fundamentals-completion.pdf",
  },
  {
    title: "Kelas Pemantapan Kisi-Kisi Microsoft Azure AI-900T00-A",
    kind: tr("Sertifikat apresiasi (peserta)", "Certificate of appreciation (participant)"),
    issuer: "Microsoft Elevate AI Training Session, BINUS University x GreatNusa",
    hours: 3,
    date: "2026-03-07",
    file: "/certificates/azure-ai-kisi-kisi-appreciation.pdf",
  },
];
