import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import CustomerLayout from "./customer/pages/layout";
import CustomerHome from "./customer/pages/home";
import CustomerLogin from "./customer/pages/login";
import AllProducts from "./customer/pages/products/index";
import ShowProduct from "./customer/pages/products/show";

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
          <Route path="login" element={<CustomerLogin />} />

          <Route path="products">
            <Route index element={<AllProducts />} />
            <Route path=":id/show" element={<ShowProduct />} />
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
