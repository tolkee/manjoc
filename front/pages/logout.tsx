import React, { useEffect } from "react";
import { onlyLoggedIn } from "../src/guards/auth";
import { deleteJwt } from "../src/utils/auth";
import redirect from "../src/utils/redirect";
import useAuthStore from "../src/stores/AuthStore";

function LogoutPage() {
  const auth = useAuthStore();

  useEffect(() => {
    deleteJwt();
    auth.disconnect();
    redirect("/");
  }, []);

  return <div>Logout</div>;
}

export default onlyLoggedIn(LogoutPage);
