import Model from "./model";

export default class Account extends Model {
  static database = "accounts";

  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }

  getAllData() {
    return {
      username: this.username,
      password: this.password
    };
  }
}
