import Head from "next/head";
import Preview from "components/preview";
import { GetServerSidePropsContext } from "next";

interface Props {
  color: string;
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext<{ [K in keyof Props]: Props[K] }>) {
  return {
    props: { ...params },
  };
}

export default function Color({ color }: Props) {
  return (
    <>
      <Head>
        <title>#{color}</title>
        <meta name="description" content={`#${color}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={`/api/og-image?color=${color}`} />
      </Head>
      <main>
        <Preview color={color} />
      </main>
    </>
  );
}
