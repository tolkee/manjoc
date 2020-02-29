import { NextPage, NextPageContext } from "next";
import redirect from "../utils/redirect";

export function redirectIf(
  Component: NextPage,
  predicate: (context: NextPageContext) => boolean | Promise<boolean>,
  to: string
) {
  const getInitialProps = Component.getInitialProps;

  Component.getInitialProps = async (context: NextPageContext) => {
    const oldProps = getInitialProps ? await getInitialProps(context) : {};

    const result = await Promise.resolve(predicate(context));
    if (result) {
      redirect(to, context);
    }

    return { ...oldProps };
  };

  return Component;
}
