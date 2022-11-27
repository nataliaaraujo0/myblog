import { Layout } from "../components/Layout";
import { ListRepositories } from "../components/ListRepositories";

export default function Home() {
  return <Layout children={<ListRepositories />} />;
}
