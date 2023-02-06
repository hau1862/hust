import Model from "./model";

export default class Cart extends Model {
  static database = "carts";

  constructor(cartData) {
    super({});
    const { id, accountId } = cartData;
    this.id = id;
    this.accountId = accountId;
  }

  getAllData() {
    return {
      accountId: this.accountId
    };
  }
}
