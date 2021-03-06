import axios from "axios";

class APIHandler {
  constructor() {
    this.name = "APIHandler";
    if (!process.env.REACT_APP_BACKEND_URL)
      throw new Error("A target backend URL must be specified in .env");
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,

      withCredentials: true
    });
  }

  checkRoute(route, config) {
    try {
      if (!route) throw new Error("please provide the requested server route");
      if (config && typeof config !== "object")
        throw new Error("Config must be an object");
    } catch (err) {
      return console.error(err);
    }
  }

  post(route, payload, config) {
    this.checkRoute(route, config);
    if (payload && typeof payload !== "object")
      throw new Error(
        `${this.name} post() function expects payload argument to be of type Object`
      );
    return this.api.post(route, payload, config);
  }

  get(route, query, config) {
    this.checkRoute(route, config);
    var queryString = "";
    if (query) {
      if (typeof query !== "object")
        throw new Error(
          `${this.name} get() function expects query argument to be of type Object`
        );
      let count = 0;
      let keyCount = Object.keys(query);
      for (let key in query) {
        if (!count) queryString += "?";
        if (count && count < keyCount) queryString += "&";
        queryString += `${key}=${query[key]}`;
        count++;
      }
    }

    return this.api.get(route + (queryString || ""), config);
  }

  patch(route, payload, config) {
    this.checkRoute(route, config);
    if (!payload || typeof payload !== "object")
      throw new Error(
        `${this.name} patch() function expects payload argument to be of type Object`
      );
    return this.api.patch(route, payload, config);
  }

  replace(route, payload, config) {
    this.checkRoute(route, config);
    if (!payload || typeof payload !== "object")
      throw new Error(
        `${this.name} replace() function expects payload argument to be of type Object`
      );
    return this.api.put(route, payload, config);
  }

  delete(route, id, config) {
    this.checkRoute(route, config);
    if (!id)
      throw new Error(
        `${this.name} delete() function expects the id of the ressource targeted for deletion`
      );
    return this.api.delete(`${route}`);
  }
}

export default new APIHandler();
