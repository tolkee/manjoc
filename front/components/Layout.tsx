import React from "react";
// import { AppBar, Toolbar, Typography, Slide } from "@material-ui/core";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import NextLink from "next/link";
import { NextPage } from "next";

type LayoutProps = {
  title?: string;
};

const Layout = (props: React.PropsWithChildren<LayoutProps>) => {
  // const triggerScroll = useScrollTrigger();
  return (
    <div>
      {/* <Slide appear={false} direction="down" in={!triggerScroll}>
        <AppBar color="transparent" elevation={0}>
          <Toolbar>
            <Typography variant="h5">MANJOC</Typography>
          </Toolbar>
        </AppBar>
      </Slide> */}

      {props.children}

      <nav>
        <NextLink href="/">
          <a>Home</a>
        </NextLink>
        <NextLink href="/login">
          <a>Login</a>
        </NextLink>
        <NextLink href="/logout">
          <a>Logout</a>
        </NextLink>
      </nav>
    </div>
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
