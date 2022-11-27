import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";

export default function Product() {
  const { query } = useRouter();

  return <Layout children={<h1>Product: {JSON.stringify(query)}</h1>} />;
}
