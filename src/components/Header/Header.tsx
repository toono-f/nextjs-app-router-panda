import { css } from "@/../styled-system/css";

type Props = {
  name: string;
};

export const Header = ({ name }: Props) => {
  return (
    <div
      className={css({
        // fontSize: "24px",
        // fontWeight: "bold",
        // margin: "15px",
      })}
    >
      Hello {name}!
    </div>
  );
};
