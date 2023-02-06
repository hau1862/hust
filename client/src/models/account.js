import Model from "./model";

export default class Account extends Model {
  static database = "accounts";

  constructor(accountData) {
    super({});
    const { id, username, password, fullName } = accountData;
    this.id = id;
    this.username = username;
    this.password = password;
    this.fullName = fullName;
    this.role = "customer";
  }

  getAllData() {
    return {
      username: this.username,
      password: this.password
    };
  }

  static async login(username, password) {
    const apiUrl = `${this.getApiBaseUrl()}/login`;
    const data = {
      username, password
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    const response = await fetch(apiUrl, options);
    return await response.json();
  }
}
