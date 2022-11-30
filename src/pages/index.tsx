import { CircularProgress } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { api } from "../api/api";
import { Empty } from "../components/Empty";
import { Layout } from "../components/Layout";
import { ListRepositories } from "../components/ListRepositories";
import { PaginationItem } from "../components/PaginationItem/PaginationItem";
import { Experience, Resume } from "../components/Resume";
import { SkeletonRepo } from "../components/SkeletonRepo";
import { useMyExperiencesQuery } from "../generated/graphql";

export default function Home() {
  const { isLoading, data: repos } = useQuery("repo", api.getRepos);
  const [{ data: experiences }] = useMyExperiencesQuery();

  console.log(repos, "data");
  console.log(experiences, "experiences");
  return (
    <>
      <Layout
        /* children={
        data?.length === 0 ? <Empty /> : <ListRepositories repos={data} />
      } */

        firstChild={
          isLoading ? <SkeletonRepo /> : <ListRepositories repos={repos} />
        }
        secondChild={<Experience experiences={experiences?.experiences} />}
      />
    </>
  );
}
