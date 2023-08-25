import { css } from "@/../styled-system/css";

export default function Home() {
  return (
    <div
      className={css({
        fontSize: "24px",
        fontWeight: "bold",
        margin: "15px",
      })}
    >
      Panda 🐼
    </div>
  );
}
