import { CircularProgress } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "react-query";
import { useRepos } from "../api/api";

import { Empty } from "../components/Empty";
import { Layout } from "../components/Layout";
import { ListRepositories } from "../components/ListRepositories";
import { Pagination } from "../components/Pagination";
import { Experience } from "../components/Resume";
import { SkeletonRepo } from "../components/SkeletonRepo";
import { useMyExperiencesQuery } from "../generated/graphql";
export default function Home() {
  const [page, setPage] = useState(1);
  const per_page = 9;

  const {
    data: repos,
    isLoading,
    isFetching,
    error,
  } = useRepos(page, per_page);

  console.log(repos, "repos");
  /*   const { isLoading, data: repos } = useQuery("repo", api.getRepos(page));
   */
  //  const { isLoading, data: repos } = useQuery("repo", api.getRepos);

  const [{ data: experiences }] = useMyExperiencesQuery();

  return (
    <>
      <Layout
        firstChild={
          isLoading ? <SkeletonRepo /> : <ListRepositories repos={repos} />
        }
        secondChild={<Experience experiences={experiences?.experiences} />}
        thirdChild={
          <Pagination
            totalCountOfRegisters={30}
            currentPage={page}
            onPageChange={setPage}
          />
        }
      />
    </>
  );
}
