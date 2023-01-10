import { serverHost } from "../commons/constants";

export default class Model {
  constructor(database) {
    this.database = database;
    this.url = `${serverHost}/${database}`;
    this.id = 0;
  }

  getAllData() {
    return {};
  }

  static findAll() {
    const api = `${this.url}/all`;

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
    const api = `${this.url}}/${id}/show`;

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

  save() {
    const api = `${this.url}/create`;
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
    const api = `${this.url}/${this.id}/update`;
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
    const api = `${this.url}/${this.id}/delete`;
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