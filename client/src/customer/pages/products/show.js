import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../../models/product";

export default function ShowProduct() {
  const { id } = useParams();
  const { product, setProduct } = useState({});

  useEffect(function () {
    const productData = Product.findById(id);
    setProduct(productData);
  }, [setProduct, id]);

  return <div className="show-product">{product}</div>;
}