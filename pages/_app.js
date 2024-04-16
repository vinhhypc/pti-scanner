import dynamic from "next/dynamic";
import Head from "next/head";
import "@/styles/globals.css";
import { ConfigProvider } from "antd";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Chụp ảnh xe</title>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Mulish"
        />
      </Head>
      <ConfigProvider>
        <Component {...pageProps} />
      </ConfigProvider>
    </>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
