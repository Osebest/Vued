// Utilities
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 1,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 1;
    },
    setValue(value) {
      if (!value) alert("Enter a valid value");
      if (value) {
        this.count = value;
      }
    },
  },
});
