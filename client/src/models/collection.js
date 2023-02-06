import Model from "./model";

export default class Collection extends Model {
  static database = "collections";

  constructor(collectionData) {
    super({});
    const { id, name, createdDate, expiredDate } = collectionData;
    this.id = id;
    this.name = name;
    this.createdDate = createdDate;
    this.expiredDate = expiredDate;
  }

  getAllData() {
    return {
      name: this.name,
      createdDate: this.createdDate,
      expiredDate: this.expiredDate
    };
  }
}
