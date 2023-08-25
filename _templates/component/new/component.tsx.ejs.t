---
to: src/components/<%= componentName %>/<%= componentName %>.tsx
---
import { css } from "@/../styled-system/css";

type Props = {
  name: string;
}

export const <%= componentName %> = ({ name }: Props) => {
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
