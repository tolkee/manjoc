import { NextPage } from "next";
import { redirectIf } from ".";
import cookies from "next-cookies";

export const onlyLoggedIn = (c: NextPage) =>
  redirectIf(
    c,
    ctx => {
      const token = cookies(ctx).token;
      return !(token && token.length);
    },
    "/login"
  );

export const onlyLoggedOut = (c: NextPage) =>
  redirectIf(
    c,
    ctx => {
      const token = cookies(ctx).token;
      return !!(token && token.length);
    },
    "/"
  );
