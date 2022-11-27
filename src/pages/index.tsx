import { CircularProgress } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { api } from "../api/api";
import { Empty } from "../components/Empty";
import { Layout } from "../components/Layout";
import { ListRepositories } from "../components/ListRepositories";
import { PaginationItem } from "../components/PaginationItem/PaginationItem";
import { Resume } from "../components/Resume";
import { SkeletonRepo } from "../components/SkeletonRepo";

export default function Home() {
  const { data, isLoading } = useQuery("repo", api.getRepos);
  // const data = [];
  return (
    <>
      <Layout
        /* children={
        data?.length === 0 ? <Empty /> : <ListRepositories repos={data} />
      } */

        firstChild={
          isLoading ? <SkeletonRepo /> : <ListRepositories repos={data} />
        }
        secondChild={<Resume />}
      />
    </>
  );
}
