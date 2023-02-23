interface Props {
  color: string;
}

const Preview = ({ color }: Props) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      backgroundColor: `#${color}`,
      color: "#fff",
    }}
  >
    <h1
      style={{
        fontSize: "3rem",
        mixBlendMode: "difference",
      }}
    >
      #{color}
    </h1>
  </div>
);

export default Preview;
