const skills = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "Machine Learning",
  "Deep Learning",
  "LLMs",
  "AI Agents",
  "RAG",
  "LangGraph",
  "Computer Vision",
  "Explainable AI",
  "FastAPI",
  "Git",
  "Linux",
  "SQL",
];

export default function CVPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-32">
      <div className="mx-auto max-w-5xl">

        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-12 sm:flex-row">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Curriculum Vitae
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              Mohammadreza Golkar
            </h1>

            <p className="mt-4 text-xl text-gray-400">
              AI Research Engineer
            </p>
          </div>

          <a
            href="/resume.pdf"
            download
            className="h-fit rounded-xl bg-blue-600 px-6 py-3 text-center font-medium hover:bg-blue-500"
          >
            Download CV
          </a>
        </div>

        <section className="border-b border-white/10 py-12">
          <h2 className="text-3xl font-bold">
            Education
          </h2>

          <div className="mt-8">
            <h3 className="text-xl font-semibold">
              M.Sc. in Artificial Intelligence
            </h3>

            <p className="mt-2 text-gray-400">
              Islamic Azad University, Khomeinishahr Branch
            </p>

            <p className="mt-2">
              GPA: 19.91 / 20
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold">
              B.Sc. in Information Technology Engineering
            </h3>
          </div>
        </section>

        <section className="border-b border-white/10 py-12">
          <h2 className="text-3xl font-bold">
            Research
          </h2>

          <h3 className="mt-8 text-xl font-semibold">
            Fair and Explainable Deep Learning for Skin Lesion
            Classification Across Fitzpatrick Skin Types
          </h3>

          <p className="mt-3 text-gray-400">
            Master Thesis
          </p>
        </section>

        <section className="border-b border-white/10 py-12">
          <h2 className="text-3xl font-bold">
            Skills
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="border-b border-white/10 py-12">
          <h2 className="text-3xl font-bold">
            Languages
          </h2>

          <div className="mt-6 space-y-3 text-gray-400">
            <p>English — Professional</p>
            <p>German — B2</p>
          </div>
        </section>

      </div>
    </main>
  );
}