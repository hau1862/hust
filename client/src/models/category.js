import Model from "./model";

export default class Category extends Model {
  static database = "categories";

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getAllData() {
    return {
      name: this.name
    };
  }
}
