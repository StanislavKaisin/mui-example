import React from "react";
import { useHistory } from "react-router-dom";
import Link from "@material-ui/core/Link";

export const Jobs = () => {
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();
  const history = useHistory();
  return (
    <div>
      Jobs page
      <div>
        <Link
          href="/engineer"
          onClick={(event: React.SyntheticEvent) => {
            preventDefault(event);
            history.push("/jobs/engineer");
          }}
        >
          Engineer
        </Link>
        <Link
          href="/jobs/marketer"
          onClick={(event: React.SyntheticEvent) => {
            preventDefault(event);
            history.push("/jobs/marketer");
          }}
        >
          Marketer
        </Link>
        <Link
          href="/jobs/designer"
          onClick={(event: React.SyntheticEvent) => {
            preventDefault(event);
            history.push("/jobs/designer");
          }}
        >
          Designer
        </Link>
      </div>
    </div>
  );
};
