import LayoutComponent from "../components/layout-component";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutComponent>
      <Component {...pageProps} />;
    </LayoutComponent>
  );
}

export default MyApp;
