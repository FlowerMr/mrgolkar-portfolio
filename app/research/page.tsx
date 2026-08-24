import Link from "next/link";

const researchAreas = [
  "Large Language Models",
  "Multi-Agent Systems",
  "Retrieval-Augmented Generation",
  "Explainable AI",
  "Computer Vision",
  "Medical AI",
  "Fair Machine Learning",
  "Deep Learning",
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-32">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Research
        </p>

        <h1 className="mt-4 text-5xl font-bold sm:text-6xl">
          Research & Academic Work
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          My research interests focus on building trustworthy,
          explainable, and practical artificial intelligence systems.
        </p>

        <section className="mt-20">
          <h2 className="text-3xl font-bold">
            Research Interests
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {researchAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-500/40"
              >
                {area}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
            Master Thesis
          </p>

          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
            Fair and Explainable Deep Learning for Skin Lesion
            Classification Across Fitzpatrick Skin Types
          </h2>

          <p className="mt-6 leading-7 text-gray-400">
            A research project focused on medical image classification,
            fairness across skin types, and explainability using deep
            learning and XAI techniques such as Grad-CAM and SHAP.
          </p>

          <Link
            href="https://github.com/FlowerMr/FlowerMr-FlowerMr-ExplainableAi-Final-Project"
            target="_blank"
            className="mt-8 inline-block text-blue-400 hover:text-blue-300"
          >
            View Thesis Project on GitHub →
          </Link>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold">
            Publications
          </h2>

          <div className="mt-8 rounded-2xl border border-dashed border-white/10 p-8">
            <p className="text-gray-400">
              Publications will be added here as research work is
              published.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}