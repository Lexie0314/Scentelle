import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import Header from "../components/Header"
import Footer from "../components/Footer"
import GreenBakeryList from "../components/GreenBakeryList";
import greenbakery from "../json/greenbakery.json";
import StoreContent from '../components/StoreContent';
import MySelectL from '../components/MySelectL';
import { theme } from 'antd';
import _ from 'lodash';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Store() {
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();

    const { sort } = useParams();
    const _greenbakery = !sort
        ? greenbakery
        :greenbakery.filter(
            x => x?.sort.toUpperCase() === sort.toUpperCase()
        );
    // const title = _.startCase(categoryName);

  return (

    <div className="maincontainer mainLayout">
      <ScrollToTopOnMount/>
      <Helmet>
        <title>香氛蠟燭</title>
        <style>{`
            body { 
                background-color: ${colorBgBase}; 
                color: ${colorTextBase}
            }
        `}</style>
      </Helmet>
      <Header
        className="layoutHeader"
      />
      <StoreContent/>
      <MySelectL/>         
      <GreenBakeryList greenbakery={_greenbakery} className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Store;