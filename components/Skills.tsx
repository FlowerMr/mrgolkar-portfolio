"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
    ],
  },
  {
    title: "LLM & Agentic AI",
    skills: [
      "LLMs",
      "RAG",
      "AI Agents",
      "LangGraph",
      "Prompt Engineering",
    ],
  },
  {
    title: "Computer Vision",
    skills: [
      "CNN",
      "EfficientNet",
      "Vision Transformer",
      "Grad-CAM",
      "SHAP",
    ],
  },
  {
    title: "Development",
    skills: [
      "Python",
      "SQL",
      "FastAPI",
      "Git",
      "Linux",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="mb-12">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
          Skills
        </p>

        <h2 className="text-4xl font-bold sm:text-5xl">
          Technologies I Work With
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            <h3 className="mb-6 text-2xl font-semibold">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}