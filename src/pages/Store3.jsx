import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import Header from "../components/Header"
import Footer from "../components/Footer"
import YiiHoTangList from "../components/YiiHoTangList";
import yiihotang from "../json/yiihotang.json";
import StoreContent3 from '../components/StoreContent3';
import MySelectL from '../components/MySelectL';
import { theme } from 'antd';
// import _ from 'lodash';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Store3() {
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();

    const { sort } = useParams();
    const _yiihotang = !sort
    ? yiihotang
    :yiihotang.filter(
        x => x?.sort.toUpperCase() === sort.toUpperCase()
    );
    // const title = _.startCase(categoryName);

  return (

    <div className="maincontainer mainLayout">
      <ScrollToTopOnMount/>
      <Helmet>
        <title>室內擴香</title>
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
      <StoreContent3/>
      <MySelectL/>         
      <YiiHoTangList yiihotang={_yiihotang} className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Store3;