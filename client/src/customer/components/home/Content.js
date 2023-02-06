import contentStyle from "../../styles/home/Content.module.css";
import { productData } from "../../data/fake";

export default function Content() {
  return <div className={contentStyle.content}>
    {productData.map(function (product) {
      return <a className={contentStyle.product} href={`/products/${product.id}/show`} key={product.name + product.id}>
        <img className={contentStyle.productImage} src={product.imageUrl} alt={product.name} />
        <div className={contentStyle.productName}>{product.name}</div>
        <div className={contentStyle.productPrice}>{product.price}</div>
      </a>;
    })}
  </div>;
}
