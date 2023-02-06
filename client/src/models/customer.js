import Model from "./model";

export default class Customer extends Model {
  static database = "customers";

  constructor(customerData) {
    super({});
    const { id, accountId, address, birthday } = customerData;
    this.id = id;
    this.accountId = accountId;
    this.address = address;
    this.birthday = birthday;
  }

  getAllData() {
    return {
      accountId: this.accountId,
      address: this.address,
      birthday: this.birthday
    };
  }
}
