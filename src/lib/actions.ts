import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export const getProjects = async (query: string) => {
  try {
    const res = await axiosInstance.get(`/projects?query=${query}`);

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getProject = async (slug: string) => {
  try {
    const res = await axiosInstance.get(`/projects/${slug}`);

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getSummary = async () => {
  try {
    const res = await axiosInstance.get('/summary');

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getExperiences = async () => {
  try {
    const res = await axiosInstance.get('/experiences');

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getSkills = async () => {
  try {
    const res = await axiosInstance.get('/skills');

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCertificates = async (query: string) => {
  try {
    const res = await axiosInstance.get(`/certificates?query=${query}`);

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getGetInTouch = async () => {
  try {
    const res = await axiosInstance.get('/get-in-touch');

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
