import Model from "./model";

export default class User extends Model {
  static database = "users";

  getAllData() {
    return {};
  }
}
