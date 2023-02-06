import Model from "./model";

export default class Cart extends Model {
  static database = "carts";

  constructor(id, userId) {
    this.id = id;
    this.userId = userId;
  }

  getAllData() {
    return {
      userId: this.userId
    };
  }
}
