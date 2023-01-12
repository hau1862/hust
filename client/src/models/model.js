import { serverHost } from "../commons/constants";

export default class Model {
  static database = "";

  constructor(database) {
    this.id = 0;
  }

  static getApiBaseUrl() {
    return `${serverHost}/api/${this.database}`;
  }


  static findAll() {
    const api = `${this.getApiBaseUrl()}/all`;

    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static findById(id) {
    const api = `${this.getApiBaseUrl()}}/${id}/show`;

    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getAllData() {
    return {};
  }

  save() {
    const api = `${this.constructor.getApiBaseUrl()}/create`;
    const data = this.getAllData();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    fetch(api, options)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  update() {
    const api = `${this.constructor.getApiBaseUrl()}/${this.id}/update`;
    const data = this.getAllData();
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    fetch(api, options)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  delete() {
    const api = `${this.constructor.getApiBaseUrl()}/${this.id}/delete`;
    const options = {
      method: "DELETE"
    };

    fetch(api, options)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}