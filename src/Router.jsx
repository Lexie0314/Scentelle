import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import { useSelector } from "react-redux";
import { Helmet } from 'react-helmet'
import Home from './pages/Home'
import Category from './pages/Category';
import Product from './pages/Product';
import ProductLocal from './pages/ProductLocal';
import Store from './pages/Store';
import Store2 from './pages/Store2';
import Store3 from './pages/Store3';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Brand from './pages/Brand';
import { darkTheme, lightTheme } from './theme';
import { selectLightMode } from "./redux/colorSlice";

function Router() {
  const lightMode = useSelector(selectLightMode);
  const theme = lightMode ? lightTheme : darkTheme;

  return (
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Brand" element={<Brand />} />
          <Route path="products">
            <Route path="category" element={<Category />} />
            <Route path="id/:productId" element={<Product />} />
          </Route>
          <Route path="products/:sort">
            <Route path="id/:productId" element={<ProductLocal />} />
          </Route>
          <Route path="All">
            <Route path="AllCategory" element={<Category />} />
            <Route path="AllCategory1/:sort" element={<Category />} />
          </Route>
          <Route path="store">
            <Route path="store" element={<Store />} />
            <Route path="store1/:sort" element={<Store />} />
          </Route>
          <Route path="store2">
            <Route path="hippun" element={<Store2 />} />
            <Route path="hippun2/:sort" element={<Store2 />} />
          </Route>
          <Route path="store3">
            <Route path="yiihotang" element={<Store3 />} />
            <Route path="yiihotang3/:sort" element={<Store3 />} />
          </Route>
          <Route path="auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}


export default Router;