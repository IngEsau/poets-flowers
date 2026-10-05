import { Fragment } from "react";

type Props = {
  id: string;
  className: string;
  lines: readonly string[];
  pace?: "slow" | "normal";
};

export default function LineHeading({ id, className, lines, pace = "normal" }: Props) {
  return (
    <h2 id={id} className={className} data-story-heading={pace}>
      {lines.map((line, index) => (
        <Fragment key={line}>
          {index > 0 && <br />}
          <span data-story-line>{line}</span>
        </Fragment>
      ))}
    </h2>
  );
}
