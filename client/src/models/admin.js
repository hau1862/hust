import Model from "./model";

export default class Admin extends Model {
  static database = "admins";

  constructor(adminData) {
    super({});
    const { id, accountId } = adminData;
    this.id = id;
    this.accountId = accountId;
  }

  getAllData() {
    return {
      accountId: this.accountId
    };
  }
}
