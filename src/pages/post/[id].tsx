import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import { Resume } from "../../components/Resume";

export default function Product() {
  const { query } = useRouter();
  return <Layout children={<Resume />} />;

  // return <Layout children={<h1>Product: {JSON.stringify(query)}</h1>} />;
}
