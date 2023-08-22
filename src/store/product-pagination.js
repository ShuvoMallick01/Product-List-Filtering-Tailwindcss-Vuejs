import { defineStore } from "pinia";
import { useProductStore } from "./product-store";

export const usePaginationStore = defineStore("productPagination", {
  state: () => ({
    pageIndex: 1,
    pageSize: 5,
  }),

  getters: {
    pageCount() {
      const { filterProducts } = useProductStore();

      return Math.ceil(filterProducts.length / this.pageSize);
    },

    filterProdutwithPagination() {
      const { filterProducts } = useProductStore();

      return filterProducts.slice(
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

    handleTargetedPagination(num) {
      this.pageIndex = num;
    },
  },
});
