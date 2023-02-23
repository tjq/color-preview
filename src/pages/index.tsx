import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [color, setColor] = useState<string>("");

  return (
    <>
      <Head>
        <title>Color Preview</title>
        <meta
          name="description"
          content={`View, share, and save colors with convenient thumbnail previews`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={`/api/og-image?color=${color}`} />
      </Head>
      <main
        style={{ backgroundColor: "black", height: "100vh", width: "100vw" }}
      >
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            router.push(color);
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100vh",
              flexDirection: "column",
              maxWidth: "240px",
              margin: "auto",
              gap: "0.5rem",
            }}
          >
            <input
              placeholder="Enter hex code"
              style={{ height: "1rem" }}
              name="color"
              value={color}
              onChange={({ target: { value } }) => setColor(value)}
            />
            <button type="submit">Preview</button>
          </div>
        </form>
      </main>
    </>
  );
}
