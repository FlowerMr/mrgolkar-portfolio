import { getRepositories } from "@/lib/github";
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

export default async function ProjectsPage() {
  const repositories: Repository[] = await getRepositories();

  const projects = repositories.filter(
    (repo) => repo && !repo.fork
  );

  return (
    <main className="min-h-screen px-6 pb-32 pt-32">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
            GitHub Projects
          </p>

          <h1 className="text-5xl font-bold sm:text-6xl">
            My Projects
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            A collection of my artificial intelligence,
            machine learning, research, and software projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((repo) => (
            <ProjectCard
              key={repo.id}
              repo={repo}
            />
          ))}
        </div>

      </div>
    </main>
  );
}