import { useParams } from "react-router-dom";

export default function ProductItem() {
  const params = useParams();
  console.log(params);

  return <div className="ProductItem">Product Item</div>;
}
