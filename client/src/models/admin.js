import Model from "./model";

export default class Admin extends Model {
  static database = "admins";

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
