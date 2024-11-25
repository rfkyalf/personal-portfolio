import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';
import axiosRetry from 'axios-retry';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = setupCache(
  axios.create({
    baseURL: `${BASE_URL}/api`,
  })
);

axiosRetry(axiosInstance, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
});

export const getProjects = async (query: string) => {
  try {
    const res = await axiosInstance.get(`/projects?query=${query}`, {
      cache: {
        ttl: 1000 * 60 * 5,
      },
    });

    if (!res.data) return null;

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getProject = async (slug: string) => {
  try {
    const res = await axiosInstance.get(`/projects/${slug}`, {
      cache: {
        ttl: 1000 * 60 * 5,
      },
    });

    if (!res.data) return null;

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getSummary = async () => {
  try {
    const res = await axiosInstance.get('/summary', {
      cache: {
        ttl: 1000 * 60 * 5,
      },
    });

    if (!res.data) return null;

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getExperiences = async () => {
  try {
    const res = await axiosInstance.get('/experiences', {
      cache: {
        ttl: 1000 * 60 * 5,
      },
    });

    if (!res.data) return null;

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getExperience = async (slug: string) => {
  try {
    const res = await axiosInstance.get(`/experiences/${slug}`, {
      cache: {
        ttl: 1000 * 60 * 5,
      },
    });

    if (!res.data) return null;

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getSkills = async () => {
  try {
    const res = await axiosInstance.get('/skills', {
      cache: {
        ttl: 1000 * 60 * 5,
      },
    });

    if (!res.data) return null;

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCertificates = async (query: string) => {
  try {
    const res = await axiosInstance.get(`/certificates?query=${query}`, {
      cache: {
        ttl: 1000 * 60 * 5,
      },
    });

    if (!res.data) return null;

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getGetInTouch = async () => {
  try {
    const res = await axiosInstance.get('/get-in-touch', {
      cache: {
        ttl: 1000 * 60 * 5,
      },
    });

    if (!res.data) return null;

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
