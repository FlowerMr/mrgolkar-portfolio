export type ProjectMetadata = {
  title?: string;
  shortDescription?: string;
  category?: string;
  techStack?: string[];
  featured?: boolean;
};

export const projectMetadata: Record<string, ProjectMetadata> = {
  "researchmatch-ai": {
    title: "ResearchMatch AI",
    shortDescription:
      "A multi-agent AI system for assisting PhD applicants in discovering, analyzing, and matching with research positions.",
    category: "AI / Agentic AI",
    techStack: [
      "Python",
      "LangGraph",
      "LLMs",
      "RAG",
      "FastAPI",
      "Sentence Transformers",
    ],
    featured: true,
  },

  "my-thesis-paper": {
    title: "Fair & Explainable Deep Learning",
    shortDescription:
      "A research project on fairness and explainability in skin lesion classification across different skin tone groups.",
    category: "AI Research / Explainable AI",
    techStack: [
      "Python",
      "PyTorch",
      "EfficientNet",
      "Grad-CAM",
      "SHAP",
    ],
    featured: true,
  },
    "Multilingual-PDF-Summarizer-Local-LLM-": {
    title: "Multilingual PDF Summarizer — Local LLM",
    shortDescription:
      "A multilingual PDF summarization system powered by local large language models.",
    category: "LLM / NLP",
    featured: true,
  },

  "llm-interview-summarization-analysis": {
    title: "LLM Interview Summarization & Analysis",
    shortDescription:
      "An LLM-based system for summarizing and analyzing interview conversations.",
    category: "LLM / NLP",
    featured: true,
  },

  "heart-attack-prediction-ml": {
    title: "Heart Attack Prediction",
    shortDescription:
      "A machine learning project for predicting heart attack risk from clinical and demographic features.",
    category: "Machine Learning",
    featured: true,
  },

  "Rag-enterprise-chatbot": {
    title: "RAG Enterprise Chatbot",
    shortDescription:
      "An enterprise-oriented retrieval-augmented generation chatbot for question answering over private knowledge.",
    category: "RAG / LLM",
    featured: true,
  },

  "Author-publications-finder": {
    title: "Author Publications Finder",
    shortDescription:
      "A system for discovering and retrieving academic publications associated with researchers and authors.",
    category: "AI / Research Tools",
    featured: true,
  },

  "SemanticSearch-Chatbot": {
    title: "Semantic Search Chatbot",
    shortDescription:
      "A semantic-search-based chatbot designed to retrieve relevant information using natural-language queries.",
    category: "NLP / Semantic Search",
    featured: true,
  },

  "FlowerMr-FlowerMr-ExplainableAi-Final-Project": {
    title: "Explainable AI Final Project",
    shortDescription:
      "An explainable artificial intelligence project focused on understanding and interpreting machine learning predictions.",
    category: "Explainable AI",
    featured: true,
  },
};