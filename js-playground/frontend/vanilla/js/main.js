import Controller from "./Controller.js";
import Store from "./Store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFormView.js";
import SearchResultView from "./views/SearchResultView.js";
import Tabview from "./views/TabView.js";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", () => {
  console.log(tag, "main");

  const store = new Store(storage);

  const views = {
    searchFormView: new SearchFormView(),
    searchResultView: new SearchResultView(),
    tabView: new Tabview(),
  };

  new Controller(store, views);
});
