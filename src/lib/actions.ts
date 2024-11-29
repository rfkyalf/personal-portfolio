import axios from 'axios';
import axiosRetry from 'axios-retry';
import { BASE_URL } from './constants';

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
});

axiosRetry(axiosInstance, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
});

export const getProjects = async (query: string) => {
  try {
    const res = await axiosInstance.get(`/projects?query=${query}`);

    if (!res.data) return null;

    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getProject = async (slug: string) => {
  try {
    const res = await axiosInstance.get(`/projects/${slug}`);

    if (!res.data) return null;

    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getSummary = async () => {
  try {
    const res = await axiosInstance.get('/summary');

    if (!res.data) return null;

    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getExperiences = async () => {
  try {
    const res = await axiosInstance.get('/experiences');

    if (!res.data) return null;

    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getExperience = async (slug: string) => {
  try {
    const res = await axiosInstance.get(`/experiences/${slug}`);

    if (!res.data) return null;

    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getSkills = async () => {
  try {
    const res = await axiosInstance.get('/skills');

    if (!res.data) return null;

    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getCertificates = async (query: string) => {
  try {
    const res = await axiosInstance.get(`/certificates?query=${query}`);

    if (!res.data) return null;

    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getGetInTouch = async () => {
  try {
    const res = await axiosInstance.get('/get-in-touch');

    if (!res.data) return null;

    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getArticles = async (query: string) => {
  try {
    const res = await axiosInstance.get(`/articles?query=${query}`);

    if (!res.data) return null;

    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
