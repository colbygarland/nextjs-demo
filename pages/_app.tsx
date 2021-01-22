import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { Menu } from "../components/Menu";
import { Page } from "../components/Page";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu />
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default MyApp;
