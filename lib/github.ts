const GITHUB_USERNAME = "FlowerMr";

export async function getRepositories() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub repositories");
  }

  return response.json();
}

export async function getRepository(repoName: string) {
  const response = await fetch(
    `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export async function getRepositoryReadme(repoName: string) {
  const response = await fetch(
    `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/readme`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  if (!data.content) {
    return null;
  }

  return Buffer.from(data.content, "base64").toString("utf-8");
}