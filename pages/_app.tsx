import type { AppProps } from "next/app";
import Head from "next/head";
import PropTypes from "prop-types";
import { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../src/util/styles";
import { urlFor } from "../src/util/utils";
import "./app.global.css";

const Footer = styled.footer`
  display: none;
`;

export default function App({ Component, pageProps }: AppProps) {
  // Below is for MUI integration with Next.js SSR
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <>
      {/* prettier-ignore */}
      <Head>
        <title>My App</title>
        <link rel="icon" href={urlFor("/favicon.ico")} />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer>My App</Footer>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
