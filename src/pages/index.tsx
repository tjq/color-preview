import Head from "next/head";

export async function getServerSideProps({ query }) {
  return {
    props: { ...query }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Color Preview</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={`/api/og-image?color=${props.color}`}
        />
      </Head>
      <main></main>
    </>
  );
}
