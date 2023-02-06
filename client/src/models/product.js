import Model from "./model";

export default class Product extends Model {
  static database = "products";

  constructor(id, name, price, imageUrl) {
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
