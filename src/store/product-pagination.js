import { defineStore } from "pinia";
import productStore from "./product-store";

export const usePaginationStore = defineStore("productPagination", {
  state: {
    pageIndex: 1,
    pageSize: 5,
  },

  getters: {
    pageCount() {
      return Math.ceil(productStore.filterProducts.length / this.pageSize);
    },

    filterProdutwithPagination() {
      return productStore.filterProducts.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageSize * this.pageIndex
      );
    },
  },

  actions: {
    handlePrev() {
      if (this.pageIndex > 1) this.pageIndex--;
      console.log(this.pageIndex);
    },

    handleNext() {
      if (this.pageIndex < this.pageCount) this.pageIndex++;
      console.log(this.pageIndex);
    },

    handleSelectedAll(e) {
      if (e.target.checked) {
        this.selected = productStore.filterProducts.map((item) => item.id);
      } else this.selected = [];
      console.log(this.selected);
    },

    handleTargetedPagination(num) {
      this.pageIndex = num;
    },
  },
});
