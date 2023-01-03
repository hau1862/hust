import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./App";
import Layout from "./pages/layout";
import Home from "./pages/index";
import Error from "./pages/error";
import Products from "./pages/products/index";
import NewProduct from "./pages/products/new";
import Product from "./pages/products/id";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="products">
              <Route index element={<Products />} />
              <Route path="new" element={<NewProduct />} />
              <Route path=":id" element={<Product />} />
            </Route>

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
