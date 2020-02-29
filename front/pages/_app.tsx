import React, { useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AppProps } from "next/app";
import useSettingsStore from "../src/stores/SettingsStore";
import { observer } from "mobx-react";
// import ToggleWithIcons from '../components/ToggleWithIcons';

export default observer(({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const settingsStore = useSettingsStore();

  // const toggleAction = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
  //   const themeName = checked ? "LIGHT" : "DARK";
  //   settingsStore.handleTheme(themeName);
  // };

  return (
    <React.Fragment>
      <Head>
        <meta
          name="theme-color"
          content={settingsStore.theme.palette.primary.main}
        />
        <title>{settingsStore.theme.palette.primary.main}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <ThemeProvider theme={settingsStore.theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
        {/* <ToggleWithIcons checked={settingsStore.themeName === "LIGHT"} onChange={toggleAction} /> */}
      </ThemeProvider>
    </React.Fragment>
  );
});
