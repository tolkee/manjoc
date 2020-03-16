import React from "react";
import { setJwt } from "../src/utils/auth";
import { onlyLoggedOut } from "../src/guards/auth";
import redirect from "../src/utils/redirect";
import withLayout from "../components/Layout";
import useAuthStore from "../src/stores/AuthStore";

export default onlyLoggedOut(
  withLayout(() => {
    const auth = useAuthStore();
    return (
      <div>
        Login
        <button
          onClick={() => {
            setJwt("test");
            auth.connect();
            redirect("/sessions");
          }}
        >
          Login
        </button>
      </div>
    );
  })
);
