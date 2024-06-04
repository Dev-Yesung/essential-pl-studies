import Controller from "./Controller.js";
import Store from "./Store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFormView.js";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", () => {
  console.log(tag, "main");

  const store = new Store(storage);

  const views = {
    SearchFormView: new SearchFormView(),
  };

  new Controller(store, views);
});
