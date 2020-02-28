import React from 'react';
import { AppBar, Toolbar, Typography, Slide } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

type LayoutProps = {
  title?: string,
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  const triggerScroll = useScrollTrigger();
  return (
    <div>
      <Slide appear={false} direction="down" in={!triggerScroll}>
        <AppBar color="transparent" elevation={0}>
          <Toolbar>
            <Typography variant="h5">MANJOC</Typography>
          </Toolbar>
        </AppBar>
      </Slide>
      {props.children}
    </div>
  );
};


export default Layout;
