import { withOGImage } from "next-api-og-image";

export default withOGImage({
  template: {
    react: ({ color }) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          background: `#${color}`,
        }}
      >
        <h1>#{color}</h1>
      </div>
    ),
  },
});
