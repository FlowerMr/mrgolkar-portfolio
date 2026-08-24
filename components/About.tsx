"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="grid gap-12 lg:grid-cols-2"
      >
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            AI Engineer with a Research Mindset
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-gray-400">
          <p>
            I am an Artificial Intelligence engineer interested in
            building practical and reliable intelligent systems.
          </p>

          <p>
            My main interests include Machine Learning, Deep Learning,
            Large Language Models, AI Agents, Computer Vision,
            Explainable AI, and Retrieval-Augmented Generation.
          </p>

          <p>
            I am particularly interested in research opportunities
            where AI can be applied to meaningful real-world problems.
          </p>
        </div>
      </motion.div>
    </section>
  );
}