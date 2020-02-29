import React, { useEffect } from "react";
import { onlyLoggedIn } from "../src/guards/auth";
import { deleteJwt } from "../src/utils/auth";
import redirect from "../src/utils/redirect";

function LogoutPage() {
  useEffect(() => {
    deleteJwt();
    redirect("/login");
  }, []);

  return <div>Logout</div>;
}

export default onlyLoggedIn(LogoutPage);
