import { Outlet } from "react-router-dom";

export default function ProductList() {
  return (
    <div className="ProductList">
      Product List
      <Outlet />
    </div>
  );
}
