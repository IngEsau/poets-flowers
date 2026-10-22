import { Fragment } from "react";

export default function TextLines({ lines, breakClassName }: { lines: readonly string[]; breakClassName?: string }) {
  return lines.map((line, index) => (
    <Fragment key={index}>
      {index > 0 && <><br className={breakClassName} />{" "}</>}
      {line}
    </Fragment>
  ));
}
