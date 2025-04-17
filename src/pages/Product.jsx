import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json"; // 從本地 JSON 載入所有產品
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

function Product() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();

  const { productId } = useParams();
  // 假設 productId 是字串，記得 products 裡的 id 也要是字串（或轉型）
  const product = products.find((x) => String(x.id) === productId);

  return (
    <div className="maincontainer mainLayout">
      <ScrollToTopOnMount />
      <Helmet>
        <title>商品</title>
        <style>{`
          body { 
            background-color: ${colorBgBase}; 
            color: ${colorTextBase}
          }
        `}</style>
      </Helmet>
      <Header className="layoutHeader" slogan="An example made by Vite." />
      
      {product ? (
        <ProductDetail product={product} isLoading={false} className="layoutContent" />
      ) : (
        <div style={{ padding: "4rem", textAlign: "center" }}>
          <h2>找不到這個商品 🫠</h2>
        </div>
      )}

      <Footer className="layoutFooter" />
    </div>
  );
}

export default Product;
