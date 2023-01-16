import Model from "./model";

export default class Customer extends Model {
  static database = "customers";

  constructor(id, userId, address) {
    this.id = id;
    this.userId = userId;
    this.address = address;
  }

  getAllData() {
    return {
      userId: this.userId,
      address: this.address
    };
  }
}
