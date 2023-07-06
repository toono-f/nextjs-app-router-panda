import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <div>
      <button
        className={css({
          fontSize: "2xl",
          fontWeight: "bold",
          margin: "30px",
          cursor: "pointer",
          bg: { base: "red.500", _hover: "red.700" },
          md: { fontSize: "4xl" },
          _hover: {
            color: "blue.500",
          },
          _first: { color: "green.500" },
          _before: { content: '"👋"' },
          "& span": {
            color: "pink.400",
          },
          "@media (min-width: 768px)": {
            color: "red.300",
          },
        })}
      >
        Hello 🐼
        <span>!</span>
      </button>
      <div
        className={css({
          fontSize: "2xl",
          fontWeight: "bold",
          margin: "30px",
        })}
      >
        Panda 🐼!
      </div>
    </div>
  );
}
