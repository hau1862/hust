import { useParams } from "react-router-dom";
import Product from "../../../models/product";

export default function ShowProduct() {
  const { id } = useParams();

  Product.findById(id);

  return <div className="show-product">Show Products</div>;
}