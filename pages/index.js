import Head from "next/head";
import Layout from "../components/Layout/Layout";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | HKU Cricket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
      <main>
          <h1 className="text-black-400 text-8xl font-serif">
            This is the main text
          </h1>
        </main>
      </Layout>

    </div>
  );
}
