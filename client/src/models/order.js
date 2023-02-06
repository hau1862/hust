import Model from "./model";

export default class Order extends Model {
  static database = "orders";

  constructor(id, userId, shippingFee, createdDate, modifiedDate) {
    this.id = id;
    this.userId = userId;
    this.shippingFee = shippingFee;
    this.createdDate = createdDate;
    this.modifiedDate = modifiedDate;
  }

  getAllData() {
    return {
      userId: this.userId,
      shippingFee: this.shippingFee,
      createdDate: this.createdDate,
      modifiedDate: this.modifiedDate
    };
  }
}
