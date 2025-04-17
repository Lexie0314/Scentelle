import { Helmet } from 'react-helmet'
import Header from "../components/Header"
import Footer from "../components/Footer"
import BrandContent from "../components/BrandContent";
import { theme } from 'antd';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Brand() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();

}

export default Brand;