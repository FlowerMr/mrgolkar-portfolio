"use client";

import { motion } from "framer-motion";

export default function TOEFLScore() {
  const score = 4.5;
  const percentage = (score / 6) * 100;

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-white/[0.03] p-8 backdrop-blur-xl">

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative flex flex-col items-center gap-8 md:flex-row">

            {/* Score Circle */}
            <div className="relative h-40 w-40 shrink-0">

              <svg
                className="h-40 w-40 -rotate-90"
                viewBox="0 0 160 160"
              >
                <circle
                  cx="80"
                  cy="80"
                  r="68"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="10"
                  className="text-white/10"
                />

                <motion.circle
                  cx="80"
                  cy="80"
                  r="68"
                  fill="none"
                  stroke="url(#toeflGradient)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 68}
                  initial={{ strokeDashoffset: 2 * Math.PI * 68 }}
                  animate={{
                    strokeDashoffset:
                      2 * Math.PI * 68 * (1 - percentage / 100),
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />

                <defs>
                  <linearGradient
                    id="toeflGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-white">
                  4.5
                </span>
                <span className="text-sm text-gray-500">
                  / 6
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="text-center md:text-left">

              <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                English Proficiency
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                TOEFL iBT
              </h2>

              <p className="mt-3 max-w-xl text-gray-400">
                TOEFL iBT score based on the new 2026 scoring scale.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">

                <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                  4.5 / 6.0
                </span>

                <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-400">
                  ≈ 90 / 120
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                  CEFR B2
                </span>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}