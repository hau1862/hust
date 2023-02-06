import Model from "./model";

export default class Product extends Model {
  static database = "products";

  constructor(productData) {
    super({});
    const { id, name, price, imageUrl } = productData;
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  getAllData() {
    return {
      name: this.name,
      price: this.price,
      imageUrl: this.imageUrl
    };
  }
}
