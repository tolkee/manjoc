import * as React from "react";
import { NextPage } from "next";
import styled from "styled-components";
import { Grid, Paper, AppBar, Toolbar } from "@material-ui/core";
import { onlyLoggedOut } from "../src/guards/auth";
import Manjoc from "../components/Manjoc";
import FlexSeparator from "../components/FlexSeparator";
import Link from "next/link";

const IndexWrapper = styled(Grid)`
  background-image: url(https://www.hdwallpapers.in/download/scenic_landscape_4k-1920x1080.jpg);
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
`;

const MainPaper = styled(Paper)`
  height: 300px;
  width: 400px;
`;

const CustomLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 17px;
  margin-right: 10px;
  font-weight: 600;

  :hover {
    color: #00D394;
  }
`;

const IndexPage: NextPage = () => {
  return (
    <IndexWrapper>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar>
          <Manjoc style={{ marginRight: "10px" }} flou={true} />
          <FlexSeparator />
          <div>
            <Link href="/sessions" passHref>
              <CustomLink>SIGN UP</CustomLink>
            </Link>
            <Link href="/sessions" passHref>
              <CustomLink>SIGN IN</CustomLink>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Grid style={{ minHeight: "100vh" }} container title="Manjoc">
        <Grid item xs xl></Grid>
        <Grid item xs xl container alignItems="center" justify="center">
          <MainPaper elevation={6} />
        </Grid>
      </Grid>
    </IndexWrapper>
  );
};

// IndexPage.getInitialProps = () => {
//   return { title: "Hey" };
// };

export default onlyLoggedOut(IndexPage);
