export const socialLinks = {
  email: "chandanapotipally@gmail.com",
  phone: "+91 8341828981",
  location: "Hyderabad, India",
  github: "https://github.com/chandana2624",
  linkedin: "https://www.linkedin.com/in/chandana-pottipally/",
  leetcode: "#",
  hackerrank: "#",
  kaggle: "#",
  instagram: "#",
  twitter: "#",
  portfolio: "#"
};

export const experiences = [
  {
    role: "AI Intern",
    company: "EdiGlobe Pvt Ltd",
    location: "Bangalore",
    duration: "Sep 2025 – Nov 2025",
    description: [
      "Developed a machine learning system to detect depression from EEG signals using Python, improving automated mental health analysis through signal-based classification.",
      "Preprocessed EEG datasets by handling missing values, normalizing data, and extracting 972 signal features, improving dataset quality and model training efficiency.",
      "Implemented and compared SVM (Support Vector Machine) and Convolutional Neural Network (CNN) models to classify EEG signals into Normal and Depressed."
    ],
    certificate: "/ediglobe_internship_certificate.pdf"
  }
];

export const projects = [
  {
    title: "Real-time Source Code Analyzer",
    description:
      "A production-ready FastAPI inference service that analyzes source code quality in real-time, detecting issues and returning actionable improvement suggestions with a quality score. Built for the ScholarX ML Engineer Internship.",
    tech: ["FastAPI", "Python", "Pydantic", "Docker", "Machine Learning"],
    image: "/images/projects/code-analyzer.png",
    github: "https://github.com/chandana2624/realtime-source-code-analyzer",
    live: "#",
    readMore: "#"
  },
  {
    title: "AI-Powered MindMapr",
    description:
      "Intelligent Concept Linking & Revision Tool. Developed an AI-driven concept map generator to link related AI/ML concepts automatically. Used Tkinter, Sentence Transformers, and NetworkX to model and visualise semantic relationships.",
    tech: ["Python", "Tkinter", "Sentence Transformers", "NetworkX", "AI/ML Graphs"],
    image: "/images/projects/mental-health.png",
    github: "https://github.com/chandana2624",
    live: "#",
    readMore: "#"
  },
  {
    title: "Blockchain Cryptocurrency Simulator",
    description:
      "Developed a blockchain-based cryptocurrency simulator using Python, implementing secure transaction storage and decentralised ledger concepts. Implemented SHA-256 hashing and Proof-of-Work mining mechanism, ensuring secure block generation and maintaining blockchain integrity.",
    tech: ["Python", "Blockchain", "SHA-256", "Cryptography"],
    image: "/images/projects/code-analyzer.png",
    github: "https://github.com/chandana2624",
    live: "#",
    readMore: "#"
  },
  {
    title: "Social Media Impact on Teen Mental Health",
    description:
      "Developed an end-to-end machine learning pipeline to predict the impact of social media usage on adolescent mental health using structured behavioural and demographic data. Performed exploratory data analysis and visualization to uncover relationships among social media usage, sleep, academic performance, and mental health indicators.",
    tech: ["Python", "Machine Learning", "Pandas", "Matplotlib", "Data Analytics"],
    image: "/images/projects/mental-health.png",
    github: "https://github.com/chandana2624/social-media-impact-on-teen-mental-health",
    live: "#",
    readMore: "#"
  },
  {
    title: "IPL Analytics Dashboard",
    description:
      "Developed an interactive IPL Analytics Dashboard using Power BI by analysing IPL data from 2008-2025. Performed end-to-end data preprocessing, cleaning, transformation, and exploratory data analysis (EDA) on multi-season IPL datasets using Pandas and NumPy. Designed an interactive dashboard using Streamlit.",
    tech: ["Power BI", "Streamlit", "Python", "SQL", "Data Analytics", "Pandas", "NumPy"],
    image: "/images/projects/ipl-dashboard.png",
    github: "#",
    live: "#",
    readMore: "#"
  }
];

export const skills = {
  programming: ["Python", "SQL", "Java", "JavaScript"],
  libraries: [
    "Pandas",
    "NumPy",
    "Scikit-Learn",
    "Matplotlib",
    "Sentence Transformers",
    "NetworkX"
  ],
  databases: ["MongoDB", "PostgreSQL"],
  tools: ["Visual Studio Code", "Git", "GitHub", "Power BI"]
};

export const certifications = [
  { name: "YUVA AI for ALL", issuer: "TCS iON", link: "/tcs_yuva_ai_certificate.jpg" },
  { name: "Artificial Intelligence", issuer: "EdiGlobe", link: "/ediglobe_ai_certificate.jpg" },
  { name: "SQL for Beginners: Learn SQL using MySQL and Database Design", issuer: "Scaler", link: "/scaler_sql_certificate.jpg" },
  { name: "Introduction to Generative AI", issuer: "Google CLOUD", link: "/google_cloud_genai_certificate.jpg" },
  { name: "Data Analytics Essentials", issuer: "CISCO", link: "/cisco_data_analytics_certificate.jpg" },
  { name: "Generative AI and CHATGPT", issuer: "GeeksforGeeks", link: "/geeksforgeeks_genai_certificate.jpg" }
];

export const achievements = {
  projectsCompleted: 6,
  gitHubRepos: 10,
  technologies: 15,
  certificates: 3,
  contributions: 120
};
