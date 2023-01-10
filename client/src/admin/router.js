import { Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Error from "./pages/error";

export default function Router() {
  return <Route path="/admin" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path="*" element={<Error />} />
  </Route>;
}