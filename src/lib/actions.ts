import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
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
