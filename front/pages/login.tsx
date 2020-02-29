import React from "react";
import { setJwt } from "../src/utils/auth";
import { onlyLoggedOut } from "../src/guards/auth";
import redirect from "../src/utils/redirect";
import withLayout from "../components/Layout";

export default onlyLoggedOut(
  withLayout(() => {
    return (
      <div>
        Login
        <button
          onClick={() => {
            setJwt("test");
            redirect("/");
          }}
        >
          Login
        </button>
      </div>
    );
  })
);
