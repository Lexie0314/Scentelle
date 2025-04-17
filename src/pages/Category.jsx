import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import AllStoreContent from '../components/AllStoreContent';
import productsData from "../json/products.json"; // 直接讀 JSON
import MySelect from "../components/MySelect";
import { theme } from 'antd';
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"; // ✅ 要加 useParams

function ScrollToTopOnMount() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Category() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();

  const { sort } = useParams(); // ✅ 抓 sort 參數

  // ✅ 用 sort 篩選資料
  const filteredProducts = !sort
    ? productsData
    : productsData.filter(
        p => p?.sort?.toUpperCase() === sort.toUpperCase()
      );

  return (
    <div className="maincontainer mainLayout">
      <ScrollToTopOnMount />
      <Helmet>
        <title>全部商品</title>
        <style>{`
          body { 
            background-color: ${colorBgBase}; 
            color: ${colorTextBase};
          }
        `}</style>
      </Helmet>

      <Header className="layoutHeader" slogan="An example made by Vite." />
      <AllStoreContent/>    
      <MySelect products={filteredProducts} isLoading={false} />

      <Footer className="layoutFooter" />
    </div>
  );
}

export default Category;
