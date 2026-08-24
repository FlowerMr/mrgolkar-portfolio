import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import { getRepositories } from "@/lib/github";
import { featuredProjects } from "@/lib/featured-projects";
import FeaturedProjects from "@/components/FeaturedProjects";
import TOEFLScore from "@/components/TOEFLScore";

type Repository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
};

export default async function Home() {
  const repositories: Repository[] = await getRepositories();

  const featured = repositories.filter((repo: Repository) =>
    featuredProjects.includes(repo.name.toLowerCase())
  );

  return (
    <main>
      <Hero />

      <About />

      <Skills />
         <FeaturedProjects />
         <TOEFLScore />
      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-32"
      >
        <div className="mb-12">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Featured Work
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Selected projects from my GitHub portfolio.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((repo) => (
            <ProjectCard
              key={repo.id}
              repo={repo}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
