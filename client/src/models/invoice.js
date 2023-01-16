import Model from "./model";

export default class Invoice extends Model {
  static database = "invoices";

  constructor(id, orderId, totalAmount) {
    this.id = id;
    this.orderId = orderId;
    this.totalAmount = totalAmount;
  }

  getAllData() {
    return {
      orderId: this.orderId,
      totalAmount: this.totalAmount
    };
  }
}
