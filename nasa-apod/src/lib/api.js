import axios from "axios";

export function getAPOD(data = "") {
  return axios.get(
    "https://api.nasa.gov/planetary/apod?api_key=ZSUYITbQXUFWaug1ELWN5akc3Gp6wq6SobFDsHqC"
  );
}
