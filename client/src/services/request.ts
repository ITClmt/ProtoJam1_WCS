import axios from "axios";

const getAllGladiators = () => {
  return axios
    .get("http://localhost:3310/api/gladiator")
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

const getGladiatorById = (firstname: string) => {
  return axios
    .get(`http://localhost:3310/api/gladiator/${firstname}`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export { getAllGladiators, getGladiatorById };
