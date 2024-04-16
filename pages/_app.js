import dynamic from "next/dynamic";
import { RecoilEnv, RecoilRoot } from "recoil";
import Head from "next/head";
import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import axiosClient from "@/api/axiosClient";
import { SWRConfig } from "swr";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

function App({ Component, pageProps }) {
  const themeConfig = {
    token: {
      colorPrimary: "#f68632",
    },
  };

  const fetcher = async (url) => {
    const res = await axiosClient.get(url);
    return res.data;
  };

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
      <RecoilRoot>
        <ConfigProvider theme={themeConfig}>
          <SWRConfig
            value={{
              fetcher,
              revalidateOnFocus: false,
              shouldRetryOnError: false,
            }}
          >
            <Component {...pageProps} />
          </SWRConfig>
        </ConfigProvider>
      </RecoilRoot>
    </>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
