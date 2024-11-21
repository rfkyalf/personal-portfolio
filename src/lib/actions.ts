export const getProjects = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/projects', {
      cache: 'force-cache',
      next: { revalidate: 100000 },
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
      cache: 'force-cache',
      next: { revalidate: 100000 },
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
      cache: 'force-cache',
      next: { revalidate: 100000 },
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
      cache: 'force-cache',
      next: { revalidate: 100000 },
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
      next: { revalidate: 1000 },
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
