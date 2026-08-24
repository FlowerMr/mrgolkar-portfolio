"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-blue-400"
          >
            AI Research Engineer
          </motion.p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-8xl">
            Building
            <span className="block text-blue-500">
              Intelligent Systems
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
            I build AI systems with a focus on Machine Learning,
            Large Language Models, AI Agents, Computer Vision,
            and Explainable AI.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/projects"
                className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-500"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/research"
                className="inline-block rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium hover:bg-white/10"
              >
                Research
              </Link>
            </motion.div>
          </div>

          <div className="mt-10">
            <a
              href="https://github.com/FlowerMr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-white"
            >
              GitHub →
            </a>
          </div>
          <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.4, duration: 0.7 }}
  className="mt-12 flex items-center gap-4"
>
  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-lg font-bold text-blue-400">
    MG
  </div>

  <div>
    <p className="font-medium">
      Mohammadreza Golkar
    </p>

    <p className="text-sm text-gray-500">
      AI Research Engineer
    </p>
  </div>
</motion.div>
        </motion.div>
      </div>
    </section>
  );
}