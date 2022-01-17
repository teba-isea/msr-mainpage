import { useState } from "react";
import Layout from "../components/global/Layout";
import { UserProvider } from "../contexts/UserContext";
import "bootstrap/dist/css/bootstrap-reboot.css";
import { useWindowWidth } from "@react-hook/window-size";

function MyApp({ Component, pageProps }) {
  const onlyWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(onlyWidth < 768);
  return !isMobile ? (
    <>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </>
  ) : (
    <>
      <br />
      <h1 align="center" bk>
        Ops!
      </h1>
      <h3 align="left">
        Sorry, this website is not available on mobile devices for the moment.
        Please use a desktop.
      </h3>
      <br />
      <h3>Thank you!, Esteban Isea</h3>
    </>
  );
}

export default MyApp;
