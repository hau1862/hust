import { serverHost } from "../commons/constants";

export default class Model {
  static database = "";

  constructor() {
    this.id = 0;
  }

  static getApiBaseUrl() {
    return `${serverHost}/api/${this.database}`;
  }


  static async findAll() {
    const api = `${this.getApiBaseUrl()}/all`;
    const response = await fetch(api);
    return await response.json();
  }

  static async findById(id) {
    const api = `${this.getApiBaseUrl()}}/${id}/show`;
    const response = await fetch(api);
    return await response.json();
  }

  getAllData() {
    return {};
  }

  async save() {
    const api = `${this.constructor.getApiBaseUrl()}/create`;
    const data = this.getAllData();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    const response = await fetch(api, options);
    return await response.json();
  }

  async update() {
    const api = `${this.constructor.getApiBaseUrl()}/${this.id}/update`;
    const data = this.getAllData();
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    const response = await fetch(api, options);
    return await response.json();
  }

  async delete() {
    const api = `${this.constructor.getApiBaseUrl()}/${this.id}/delete`;
    const options = {
      method: "DELETE"
    };
    const response = await fetch(api, options);
    return await response.json();
  }
}
