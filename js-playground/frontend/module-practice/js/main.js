import { qs } from "./util/queryUtils.js";

const searchBtn = qs("#searchBtn");
searchBtn.addEventListener("click", () => {
  console.log(searchBtn);
});

const title = qs("#title");
console.log(title);
