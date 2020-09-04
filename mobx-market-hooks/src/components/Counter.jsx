import { observable } from "mobx";

const counter = observabel({
  number: 1,
  increase() {
    this.number++;
  },
  decrease() {
    this.number--;
  },
});

export { counter };
