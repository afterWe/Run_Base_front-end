import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import MyPage from './pages/MyPage/MyPage';
import OrderInfo from './pages/OrderInfo/OrderInfo';
import Paid from './pages/Paid/Paid';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import SignIn from './pages/SignIn/SignIn';
import AppLayout from './layout/AppLayout';
import Payment from './pages/Payment/Payment';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/order-info" element={<OrderInfo />} />
          <Route path="/paid" element={<Paid />} />
          <Route path="/payment" element={<Payment />} />
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail />}
          />
          <Route path="/product-list/:id" element={<ProductList />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
