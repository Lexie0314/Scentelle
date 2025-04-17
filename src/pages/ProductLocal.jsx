import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json";
import HotList from "../components/HotList";
import { theme } from 'antd';
import { Helmet } from 'react-helmet'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ProductLocal() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();

  const { productId } = useParams();
  const product = products.find(
     (x) => x.id === productId
  );

  
  return (
    <div className="maincontainer mainLayout">
      <ScrollToTopOnMount/>
      <Helmet>
            <title>商品</title>
            <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
         </Helmet>
      <Header
        className="layoutHeader"
        slogan="An example made by Vite."
      />
      {/* <h1 style={{color:"#000" ,margin:"100px"}}>這是購物車頁</h1> */}

      {/* <ProductList products={products} className="layoutContent" /> */}
      <ProductDetail product={product} className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>
  );
}

export default ProductLocal;