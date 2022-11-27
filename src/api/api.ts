import axios from "axios";
import { RepoProps } from "../interfaces/repo.interface";
const URL = "https://api.github.com/users/nataliaaraujo0/";

async function getRepos(): Promise<RepoProps[]> {
  const response = await axios.get<RepoProps[]>(
    `${URL}repos?&page=1&per_page=9`
  );

  return response.data;
}

export const api = {
  getRepos,
};
