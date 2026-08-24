import { getRepositories, getRepositoryReadme } from "@/lib/github";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { projectMetadata } from "@/lib/project-metadata";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type Repository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const repositories: Repository[] = await getRepositories();

  const repo = repositories.find(
    (item: Repository) =>
      item.name.toLowerCase() === slug.toLowerCase()
  );

  if (!repo) {
    return (
      <main className="mx-auto flex min-h-screen max-w-5xl items-center px-6">
        <div>
          <p className="text-blue-400">404</p>

          <h1 className="mt-4 text-4xl font-bold">
            Project Not Found
          </h1>

          <Link
            href="/projects"
            className="mt-8 inline-block text-blue-400 hover:text-blue-300"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const readme = await getRepositoryReadme(repo.name);
  const metadata = projectMetadata[repo.name];

  return (
    <main className="mx-auto max-w-5xl px-6 pb-32 pt-40">

      <Link
        href="/projects"
        className="text-sm text-gray-400 transition hover:text-white"
      >
        ← Back to Projects
      </Link>

      {/* Project Header */}
      <div className="mt-10">

        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          GitHub Project
        </p>

        <h1 className="mt-4 text-5xl font-bold">
        {metadata?.title || repo.name}
          </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
       {metadata?.shortDescription ||
          repo.description ||
        "No description available."}
          </p>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-3">

  {metadata?.category && (
    <span className="rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-400">
      {metadata.category}
    </span>
  )}

  {repo.language && (
    <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
      {repo.language}
    </span>
  )}

  <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
    ★ {repo.stargazers_count}
  </span>

</div>
  {metadata?.techStack && metadata.techStack.length > 0 && (
  <div className="mt-8">
    <p className="mb-3 text-sm font-medium uppercase tracking-wider text-gray-500">
      Tech Stack
    </p>

    <div className="flex flex-wrap gap-2">
      {metadata.techStack.map((tech) => (
        <span
          key={tech}
          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
)}
        {/* Links */}
        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
          >
            View on GitHub ↗
          </a>

          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 px-6 py-3 font-medium transition hover:bg-white/5"
            >
              Live Demo ↗
            </a>
          )}

        </div>

      </div>

      {/* README */}
      {readme && (
        <section className="mt-24 border-t border-white/10 pt-12">

          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-blue-400">
            Documentation
          </p>

          <article className="space-y-6 text-gray-300">

            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="mt-10 mb-6 text-4xl font-bold text-white">
                    {children}
                  </h1>
                ),

                h2: ({ children }) => (
                  <h2 className="mt-10 mb-5 text-3xl font-bold text-white">
                    {children}
                  </h2>
                ),

                h3: ({ children }) => (
                  <h3 className="mt-8 mb-4 text-2xl font-semibold text-white">
                    {children}
                  </h3>
                ),

                p: ({ children }) => (
                  <p className="leading-8 text-gray-300">
                    {children}
                  </p>
                ),

                ul: ({ children }) => (
                  <ul className="ml-6 list-disc space-y-2 text-gray-300">
                    {children}
                  </ul>
                ),

                ol: ({ children }) => (
                  <ol className="ml-6 list-decimal space-y-2 text-gray-300">
                    {children}
                  </ol>
                ),

                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    {children}
                  </a>
                ),

                code: ({ children }) => (
                  <code className="rounded bg-white/10 px-2 py-1 text-sm text-blue-300">
                    {children}
                  </code>
                ),

                pre: ({ children }) => (
                  <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-5 text-sm">
                    {children}
                  </pre>
                ),

                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 pl-5 text-gray-400">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {readme}
            </ReactMarkdown>

          </article>

        </section>
      )}

    </main>
  );
}