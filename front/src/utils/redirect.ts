import { NextPageContext } from "next";
import Router from "next/router";

function redirect(to: string, context?: NextPageContext) {
  if (context && context.res) {
    // if on server
    context.res.writeHead(302, { Location: to });
    context.res.end();
  } else {
    // if on client
    Router.push(to);
  }
}

export default redirect;
