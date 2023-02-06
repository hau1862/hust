import { serverHost } from "./constants";

export default class Model {
  static database = "";

  constructor(modelData) {
    this.id = 0;
  }

  static getApiBaseUrl() {
    return `${serverHost}/api/${this.database}`;
  }


  static async findAll() {
    const apiUrl = `${this.getApiBaseUrl()}/all`;
    const response = await fetch(apiUrl);
    return await response.json();
  }

  static async findById(id) {
    const apiUrl = `${this.getApiBaseUrl()}}/${id}/show`;
    const response = await fetch(apiUrl);
    return await response.json();
  }

  getAllData() {
    return {};
  }

  static async create(data) {
    const apiUrl = `${this.constructor.getApiBaseUrl()}/create`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    const response = await fetch(apiUrl, options);

    if (response.ok) {
      const responseData = await response.json();

      if (responseData.success) {
        responseData.data = new this(responseData.data);
      }

      return responseData;
    } else {
      return { success: false, message: "Fetch data failure" };
    }
  }

  async update() {
    const apiUrl = `${this.constructor.getApiBaseUrl()}/${this.id}/update`;
    const data = this.getAllData();
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    const response = await fetch(apiUrl, options);

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      return { success: false, message: "Fetch data failure" };
    }
  }

  async delete() {
    const apiUrl = `${this.constructor.getApiBaseUrl()}/${this.id}/delete`;
    const options = {
      method: "DELETE"
    };
    const response = await fetch(apiUrl, options);

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      return { success: false, message: "Fetch data failure" };
    }
  }
}
