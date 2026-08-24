import { getRepositories } from "@/lib/github";
import { projectMetadata } from "@/lib/project-metadata";
import ProjectCard from "@/components/ProjectCard";

type Repository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  fork?: boolean;
};

export default async function FeaturedProjects() {
  const repositories: Repository[] = await getRepositories();

  const featuredProjects = repositories.filter(
    (repo) =>
      repo &&
      !repo.fork &&
      projectMetadata[repo.name]?.featured
  );

  return (
    <section
      id="projects"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            A selection of projects focused on artificial intelligence,
            machine learning, research, and agentic systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((repo) => (
            <ProjectCard
              key={repo.id}
              repo={repo}
            />
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/projects"
            className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            View all projects →
          </a>
        </div>

      </div>
    </section>
  );
}