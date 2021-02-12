import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import React from "react";
import { useHistory, useLocation } from "react-router";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  // console.info("You clicked a breadcrumb.");
}

export const MyBreadcrumbs = () => {
  const location = useLocation();
  // console.log("location=", location);
  const { pathname } = location;
  // console.log("pathname=", pathname);
  const pathnames = pathname.split("/").filter((pathname) => pathname);
  // console.log("pathnames=", pathnames);
  const history = useHistory();

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        {pathnames.length > 0 ? (
          <Link
            color="inherit"
            href="/"
            onClick={(
              event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
            ) => {
              handleClick(event);
              history.push("/");
            }}
          >
            Home
          </Link>
        ) : (
          <Typography>Home</Typography>
        )}
        {pathnames.map((name, index) => {
          const pathTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography>{name}</Typography>
          ) : (
            <Link
              color="inherit"
              href={pathTo}
              onClick={(
                event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
              ) => {
                handleClick(event);
                history.push(pathTo);
              }}
            >
              {name}
            </Link>
          );
        })}

        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
    </div>
  );
};
