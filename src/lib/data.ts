// ------------------------------------------------------------------
// All your information is here. Modify this file, not the components.
// ------------------------------------------------------------------

export const profile = {
  name: "Salma El Mamouni",
  role: "AI Engineer | Data Science · ML · DL · NLP",
  headline: "Building intelligent solutions with Data, ML & Deep Learning.",
  lede:
    "AI Engineer and Data Scientist specialized in NLP, Deep Learning, and time-series forecasting. I develop end-to-end solutions, from data preparation and modeling to evaluation and deployment.",
  email: "salmaelmamouni501@gmail.com",
  phone: "+212 6 61 63 89 02",
  location: "Béni Mellal, Morocco",
  availability:
    "Open to opportunities in Artificial Intelligence | AI Engineering | Data Science | Machine Learning | Deep Learning | NLP",
  education:
    "Master's Degree in AI & Digital Computing — FST Béni Mellal, USMS (2024–2026)",
  socials: [
    // Replace the link below with your exact LinkedIn profile URL.
    { label: "LinkedIn", url: "https://www.linkedin.com/in/salma-el-mamouni" },
  ],
  stats: [
    { value: "6", label: "Deep Learning architectures compared" },
    { value: "95.9%", label: "Accuracy — best-performing model" },
    { value: "166K+", label: "Hourly observations evaluated" },
    { value: "6", label: "AI / Data projects" },
  ],
  about: [
    "I hold a Master's Degree in Artificial Intelligence and Digital Computing, with experience working on large-scale text data processing and Deep Learning forecasting projects — from data cleaning and preprocessing to model evaluation.",
    "My final-year project combines multilingual NLP (French, Arabic, English, and Darija) with photovoltaic power forecasting using hybrid Transformer–LSTM/GRU/BiLSTM architectures across Moroccan solar sites.",
  ],
};

export type Project = {
  title: string;
  category: "Dl" | "nlp" | "ml" | "data" | "bi";
  tags: string[];
  description: string;
  demoUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Public Perception Analysis of Solar Energy",
    category: "nlp",
    tags: ["XLM-RoBERTa", "BERTopic", "Zero-shot"],
    description:
      "Final-year project — NLP component. Built a multilingual corpus (FR/AR/EN/Darija) from 25,938 articles and 604,257 comments, reduced after cleaning to 16,642 articles and 114,560 usable comments. Applied XLM-RoBERTa, BERTopic, and zero-shot classification to analyze sentiment and identify key topics related to solar energy.",
  },
  {
    title: "Photovoltaic Forecasting with Deep Learning",
    category: "Dl",
    tags: ["Transformer", "LSTM", "GRU", "BiLSTM"],
    description:
      "Final-year project — forecasting component. Designed and compared 6 hybrid Transformer–LSTM/GRU/BiLSTM architectures across 3 Moroccan solar sites (NOOR Ouarzazate, Midelt, and Boujdour), achieving up to 95.9% accuracy (10% tolerance) with the RNN-Transformer-BiLSTM model. Evaluated cross-site generalization on more than 166,000 hourly observations per site.",
  },
  {
    title: "Heart Disease Prediction",
    category: "ml",
    tags: ["Random Forest", "KNN", "AdaBoost", "LASSO"],
    description:
      "Supervised classification using KNN-based missing-value imputation, feature standardization, feature selection with Relief and LASSO, followed by a comparison of multiple models including Random Forest, KNN, and AdaBoost to identify the best-performing approach.",
  },
  {
    title: "Real-Time News Monitoring System",
    category: "data",
    tags: ["Kafka", "Neo4j", "Cypher", "Streamlit"],
    description:
      "Big Data pipeline with continuous data collection using Kafka, relationship modeling with Neo4j, and interactive visualization through Streamlit.",
  },
  {
    title: "Business Intelligence Solution",
    category: "bi",
    tags: ["SSAS", "OLAP", "MDX", "Power BI"],
    description:
      "Designed an OLAP cube using SSAS, performed multidimensional analysis with MDX, and developed interactive Power BI dashboards for business data analysis.",
  },
  {
    title: "Multivariate Data Analysis",
    category: "data",
    tags: ["ANOVA", "PCA", "LDA"],
    description:
      "Performed multivariate statistical analyses including ANOVA, PCA, and LDA, with interpretation of results and supporting data visualizations.",
  },
];

export const filters: {
  label: string;
  value: "all" | Project["category"];
}[] = [
  { label: "All", value: "all" },
  { label: "NLP & Deep Learning", value: "nlp" },
  { label: "Deep Learning", value: "Dl" },
  { label: "Machine Learning", value: "ml" },
  { label: "Data & Big Data", value: "data" },
  { label: "Business Intelligence", value: "bi" },
];

export type ExperienceItem = {
  when: string;
  title: string;
  org: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    when: "2024 · 2 months",
    title: "Final-Year Internship — Full-Stack Development",
    org: "ALTEN Morocco — Fès",
    bullets: [
      "Analyzed requirements and designed a secure web application for centralized visitor registration, tracking, and management.",
      "Developed React interfaces, REST APIs with Spring Boot, authentication, role-based access control, and data persistence using MySQL.",
    ],
  },
  {
    when: "2024 — 2026",
    title: "Master's Degree — Artificial Intelligence & Digital Computing",
    org: "FST Béni Mellal, USMS",
    bullets: [
      "Machine Learning, Deep Learning, NLP, Computer Vision, Reinforcement Learning, Time Series, Big Data, and Cloud Computing.",
    ],
  },
  {
    when: "2023 — 2024",
    title: "Bachelor's Degree in Computer Science",
    org: "FST Béni Mellal",
    bullets: [],
  },
  {
    when: "2021 — 2023",
    title: "DEUST — Mathematics, Computer Science & Physics",
    org: "FST Béni Mellal",
    bullets: [],
  },
];

export const skills: { category: string; items: string }[] = [
  {
    category: "Machine Learning",
    items:
      "Classification, regression, preprocessing, feature selection, model evaluation",
  },
  {
    category: "Deep Learning",
    items: "RNN, LSTM, GRU, BiLSTM, Transformer architectures",
  },
  {
    category: "NLP",
    items:
      "Sentiment analysis, topic modeling, zero-shot classification, XLM-RoBERTa, BERTopic",
  },
  {
    category: "Time Series",
    items:
      "Sequence preparation, forecasting, model evaluation, cross-site generalization",
  },
  {
    category: "Python",
    items:
      "Python, Pandas, NumPy, Scikit-learn, TensorFlow, Keras, Matplotlib",
  },
  {
    category: "Databases",
    items: "SQL, MySQL, MongoDB, Neo4j",
  },
  {
    category: "Development",
    items: "Java, Spring Boot, Spring Security, React.js, REST APIs, Git",
  },
  {
    category: "Big Data & BI",
    items:
      "Kafka, Hadoop, HDFS, Spark, Hive, YARN, Power BI, SSAS, OLAP, MDX",
  },
];