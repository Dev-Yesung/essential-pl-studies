const tag = "[Controller]";

export default class Controller {
  constructor(store, { seachFormView }) {
    console.log(tag);
    this.store = store;

    this.seachFormView = seachFormView;
  }
}
