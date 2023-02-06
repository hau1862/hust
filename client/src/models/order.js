import Model from "./model";

export default class Order extends Model {
  static database = "orders";

  constructor(orderData) {
    super({});
    const { id, userId, shippingFee } = orderData;
    this.id = id;
    this.userId = userId;
    this.shippingFee = shippingFee;
  }

  getAllData() {
    return {
      userId: this.userId,
      shippingFee: this.shippingFee,
      createdDate: this.createdDate,
    };
  }
}
