import { CircularProgress } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { api } from "../api/api";
import { Empty } from "../components/Empty";
import { Layout } from "../components/Layout";
import { ListRepositories } from "../components/ListRepositories";
import { Experience } from "../components/Resume";
import { SkeletonRepo } from "../components/SkeletonRepo";
import { useMyExperiencesQuery } from "../generated/graphql";
export default function Home() {
  const { isLoading, data: repos } = useQuery("repo", api.getRepos);
  const [{ data: experiences }] = useMyExperiencesQuery();

  return (
    <>
      <Layout
        firstChild={
          isLoading ? <SkeletonRepo /> : <ListRepositories repos={repos} />
        }
        secondChild={<Experience experiences={experiences?.experiences} />}
      />
    </>
  );
}
