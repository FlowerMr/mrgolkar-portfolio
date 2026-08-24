import { Mail } from "lucide-react";
export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-32">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Contact
        </p>

        <h1 className="mt-4 text-5xl font-bold sm:text-6xl">
          Let&apos;s Connect
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          I am open to research collaborations, PhD opportunities,
          and AI/ML engineering positions.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">

        <a
  href="mailto:Mrgolkar94@gmail.com"
  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500/40"
>
            <Mail className="text-blue-400" />

            <h2 className="mt-5 font-semibold">
              Email
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Get in touch
            </p>
          </a>

          <a
            href="https://github.com/FlowerMr"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500/40"
          >
           <div className="text-2xl text-blue-400">GH</div>

            <h2 className="mt-5 font-semibold">
              GitHub
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              View my projects
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/rezagolkar"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500/40"
          >
           <div className="text-2xl text-blue-400">in</div>

            <h2 className="mt-5 font-semibold">
              LinkedIn
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Connect with me
            </p>
          </a>

        </div>

      </div>
    </main>
  );
}