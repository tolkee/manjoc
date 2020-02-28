import * as React from 'react';
import { NextPage } from 'next';
import styled from "styled-components";
import { Grid, Paper } from '@material-ui/core';

const IndexWrapper = styled(Grid)`
  background-image: url(https://www.hdwallpapers.in/download/scenic_landscape_4k-2560x1440.jpg);
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
`;

const MainPaper = styled(Paper)`
  height: 500px;
  width: 500px;
`;

const IndexPage: NextPage = () => {
  return (
    <IndexWrapper container title="Manjoc">
      <Grid item xs xl>

      </Grid>
      <Grid item xs xl alignItems="center">
        <MainPaper elevation={6} />
      </Grid>
    </IndexWrapper>
  )
};

IndexPage.getInitialProps = () => {
  return ({ title: "Hey" });
}

export default IndexPage;
