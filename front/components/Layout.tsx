import React from "react";
import { NextPage } from "next";
import ManjocAppBar from "./ManjocAppBar";

type LayoutProps = {
  title?: string;
};

const Layout = (props: React.PropsWithChildren<LayoutProps>) => {
  return (
    <div>
      <ManjocAppBar />
      {props.children}
    </div >
  );
};

function withLayout(Component: NextPage) {
  const page: NextPage = props => (
    <Layout>
      <Component {...props} />
    </Layout>
  );

  page.getInitialProps = Component.getInitialProps;
  return page;
}

export default withLayout;
