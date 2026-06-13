const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAbout = async () => {
  const res = await fetch(`${API_URL}/api/about/`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Failed to fetch about");

  return res.json();
};

export const getProjects = async () => {
  const res = await fetch(`${API_URL}/api/projects/`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch projects");

  return res.json();
};

export const getExperience = async () => {
  const res = await fetch(`${API_URL}/api/experiences/`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch experiences");

  return res.json();
};
