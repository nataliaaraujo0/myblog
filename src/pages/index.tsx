import { useQuery } from "react-query";
import { api } from "../api/api";
import { Layout } from "../components/Layout";
import { ListRepositories } from "../components/ListRepositories";

export default function Home() {
  const { data, isLoading } = useQuery("repo", api.getRepos);

  return (
    <>
      <Layout
        children={
          isLoading ? <h1>carregando</h1> : <ListRepositories repoData={data} />
        }
      />
    </>
  );
}
