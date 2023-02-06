import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import CustomerLayout from "./customer/pages/layout";
import CustomerHome from "./customer/pages/home";
import CustomerLogin from "./customer/pages/accounts/login";
import CustomerRegister from "./customer/pages/accounts/register";
import CustomerAllProducts from "./customer/pages/products/all";
import CustomerShowProduct from "./customer/pages/products/show";

import AdminLayout from "./admin/pages/layout";
import AdminHome from "./admin/pages/home";
import AdminLogin from "./admin/pages/login";

import Error from "./commons/pages/error";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<CustomerHome />} />

          <Route path="accounts">
            <Route path="login" element={<CustomerLogin />} />
            <Route path="register" element={<CustomerRegister />} />
          </Route>

          <Route path="products">
            <Route index element={<CustomerAllProducts />} />
            <Route path=":id/show" element={<CustomerShowProduct />} />
          </Route>
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="login" element={<AdminLogin />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
