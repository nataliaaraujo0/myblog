import axios from "axios";
import { useQuery } from "react-query";
import { RepoProps } from "../interfaces/repo.interface";
import { api } from "./testeApi";
// const URL = "https://api.github.com/users/nataliaaraujo0/";

/* export async function getRepos(): Promise<RepoProps[]> {
  const response = await axios.get<RepoProps[]>(
    `${URL}repos?&page=2&per_page=9`
  );

  return response.data;
} */

type GetUserResponse = {
  repos: RepoProps[];
};

export async function getRepos(page: number, per_page: number): Promise<any> {
  const { data } = await api.get("repos", {
    params: {
      page,
      per_page,
    },
  });

  const repos = data?.map((repo) => {
    return {
      id: repo.id,
      name: repo.name,
      full_name: repo.full_name,
      description: repo.description,
      language: repo.language,
      homepage: repo.homepage,
    };
  });

  return { repos };
}

export function useRepos(page: number, per_page: number) {
  return useQuery(["repos", page, per_page], () => getRepos(page, per_page), {
    staleTime: 1000 * 60 * 10,
  });
}
