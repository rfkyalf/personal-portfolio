export const getProjects = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/projects', {
      cache: 'no-cache',
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getSummary = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/summary', {
      cache: 'no-cache',
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getExperiences = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/experiences', {
      cache: 'no-cache',
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getSkills = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/skills', {
      cache: 'no-cache',
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCertificates = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/certificates', {
      cache: 'no-cache',
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
