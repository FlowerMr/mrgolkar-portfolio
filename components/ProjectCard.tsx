interface ProjectCardProps {
  repo: {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    stargazers_count: number;
  };
}

export default function ProjectCard({
  repo,
}: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40">

      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold">
          {repo.name}
        </h3>

        <span className="text-sm text-gray-500">
          ★ {repo.stargazers_count}
        </span>
      </div>

      <p className="mt-4 min-h-20 text-gray-400">
        {repo.description || "No description available."}
      </p>

      {repo.language && (
        <span className="mt-6 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
          {repo.language}
        </span>
      )}

      <div className="mt-8 flex items-center gap-5">

        <a
          href={`/projects/${repo.name}`}
          className="text-sm font-medium text-white hover:text-blue-400"
        >
          View Project →
        </a>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-white"
        >
          GitHub ↗
        </a>

        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white"
          >
            Demo ↗
          </a>
        )}

      </div>

    </article>
  );
}