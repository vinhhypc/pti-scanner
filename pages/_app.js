import dynamic from "next/dynamic";
import Head from "next/head";
import { ConfigProvider } from "antd";
import { RecoilRoot, RecoilEnv } from "recoil";
import "@/styles/globals.css";
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ConfigProvider>
        <Head>
          <title>Chụp ảnh xe</title>
          <link rel="icon" href="/favicon.png" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Mulish"
          />
        </Head>
        <Component {...pageProps} />
      </ConfigProvider>
    </RecoilRoot>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
