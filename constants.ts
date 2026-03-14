import { Project, ExperienceItem } from './types';

export const PERSONAL_INFO = {
  name: "Samet Salim",
  username: "MR ROBOT",
  title: "AI & Data Science Practitioner",
  tagline: "Bridging linguistic gaps with Technology",
  location: "Alger / Tébessa, Algeria",
  email: "salimsamet00@gmail.com",
  github: "https://github.com/Mrrobot-rx",
  phone: "+213 669 98 97 86",
  availability: "Open to Work",
  bio: "Transitioning from Law to Technology through intensive self-directed learning. I specialize in Natural Language Processing (NLP) for low-resource languages like Algerian Derja. My goal is to democratize AI access in the MENA region."
};

export const PROJECTS: Project[] = [
  {
    id: "sentiment-analysis",
    title: "Algerian Arabic Sentiment Analysis",
    description: "Interactive web app analyzing emotions in Algerian Arabic dialect (Derja).",
    tech: ["Python", "Streamlit", "NLP", "Scikit-learn"],
    link: "https://algerian-sentiment-ggnh57jracm8pq3dxyccvj.streamlit.app/",
    github: "https://github.com/Mrrobot-rx/algerian-sentiment",
    impact: "85% accuracy on test dataset of 200+ labeled comments.",
    details: "The core challenge was the lack of labeled datasets for Algerian Derja. I built a custom tokenizer that handles Arabizi (Latin script) and Arabic script. I used TF-IDF for feature extraction and trained a logistic regression model, optimizing for high recall on negative sentiment to help businesses identify complaints."
  },
  {
    id: "portfolio-v1",
    title: "Glassmorphism Portfolio",
    description: "A futuristic personal site with an integrated AI agent.",
    tech: ["React", "TypeScript", "Tailwind", "Gemini API"],
    link: "#",
    github: "https://github.com/Mrrobot-rx",
    impact: "Showcases frontend skills alongside AI integration.",
    details: "Implemented a custom 'God Mode' AI agent using Google Gemini. The UI uses a backdrop-blur engine to simulate frosted glass, optimized for performance on mobile devices."
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "military-hospital",
    role: "Administrative Secretary Assistant",
    company: "Military Hospital Project",
    location: "Staoueli, Alger",
    period: "May 2023 - Jan 2024",
    description: [
      "Identified inefficiencies in manual data processing workflows.",
      "Self-learned automation techniques to streamline repetitive tasks.",
      "Managed digital and physical archives with high precision."
    ]
  }
];

export const SKILLS = {
  programming: ["Python (Pandas, Numpy)", "TypeScript", "React"],
  ai: ["NLP", "Prompt Engineering", "Hugging Face", "OpenAI/Gemini API"],
  tools: ["VS Code", "Git", "Streamlit"],
  languages: ["Arabic (Native)", "Algerian Derja (Native)", "English (B2)", "French (B1)"]
};

export const DERJA_RESPONSES: Record<string, string> = {
  "salam": "Wa alaykom salam sahbi! Wach rak? Kech code wla walou?",
  "wach rak": "Hamdoullah ya kho, rani 100% online w ready.",
  "chkoun nta": "Ana Bubble, l'assistant ta3 Samet. N3awnek f ay haja tkhos l'portfolio wla AI.",
  "cv": "Rak hab tchouf cv ta3i? chouf l'section ta3 Experience l'teht.",
  "hello": "Hello! Welcome to Samet's digital space. How can I help you today?",
  "hi": "Hi there! I'm Bubble, Samet's AI assistant."
};