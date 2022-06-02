import Head from "next/head";
import Layout from "../components/Layout";
import dynamic from "next/dynamic";

const AppNoSSR = dynamic(() => import("../components/App"), {
  ssr: false,
});

export default function Index() {
  return (
    <>
      <Layout home>
        <Head>
          <title>付箋×付箋</title>
        </Head>
        <AppNoSSR />
      </Layout>
    </>
  );
}
