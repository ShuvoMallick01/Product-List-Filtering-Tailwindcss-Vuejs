<template>
  <Layout>
    <template #actions>
      <!-- Action -->
      <ProductFilterActions />

      <!-- Action Applied -->
      <ProductFilterViewer />
    </template>

    <!-- Selected & Delete -->
    <div
      :class="'hover:duration-300'"
      class="flex justify-between items-center text-slate-300 ps-3 px-5"
    >
      <p class="">
        <span>{{ selected.length }}</span> Selected
      </p>

      <button class="text-3xl hover:text-red-300 hover:duration-200 mb-1.5">
        &times;
      </button>
    </div>

    <!-- Product Table -->
    <ProductTable />

    <template #pagination>
      <ProductPagination />
    </template>
  </Layout>
</template>

<!-- FUNCTIONALITY -->
<script>
import { mapState } from "pinia";
import { useProductStore } from "./store/product-store";
import { computed } from "vue";

import Layout from "./components/Layout.vue";

export default {
  computed: {
    ...mapState(useProductStore, ["selected"]),
  },

  components: {
    Layout,
  },

  // data() {
  //   return {
  //     categories: [...categories],
  //     products: [...products],
  //     filter: { category: "", sort: "", rating: "", search: "" },
  //     pageIndex: 1,
  //     pageSize: 5,
  //     selected: [],
  //   };
  // },

  // methods: {
  //   // Filter Delete
  //   handleFilterDelete(filterKey) {
  //     this.filter[filterKey] = "";
  //   },

  //   // Product Delete
  //   async handleProductDelete(productId) {
  //     const { isConfirmed } = await this.$swal("Hi there");
  //     console.log(isConfirmed);

  //     if (isConfirmed) {
  //       this.products = this.products.filter(
  //         (product) => product.id !== productId
  //       );
  //     }
  //   },

  //   // Select Product Delete
  //   async handleSelectedProductDelete() {
  //     const { isConfirmed } = await this.$swal("Hi there");

  //     if (isConfirmed) {
  //       this.products = this.products.filter(
  //         (product) => !this.selected.includes(product.id)
  //       );
  //       this.selected = [];
  //     }
  //   },

  //   // Pagination
  //   handlePrev() {
  //     if (this.pageIndex > 1) this.pageIndex--;
  //     console.log(this.pageIndex);
  //   },

  //   handleNext() {
  //     if (this.pageIndex < this.pageCount) this.pageIndex++;
  //     console.log(this.pageIndex);
  //   },

  //   handleSelectedAll(e) {
  //     if (e.target.checked) {
  //       this.selected = this.filterProducts.map((item) => item.id);
  //     } else this.selected = [];
  //     console.log(this.selected);
  //   },

  //   handleSelect(e, productId) {
  //     if (e.target.checked) {
  //       this.selected.push(productId);
  //     } else {
  //       this.selected = this.selected.filter((proId) => proId != productId);
  //     }
  //   },

  //   handleTargetedPagination(num) {
  //     this.pageIndex = num;
  //   },
  // },

  // computed: {
  //   filterProducts() {
  //     let filterProducts = [...this.products];

  //     // Category Filter
  //     if (this.filter.category) {
  //       filterProducts = filterProducts.filter(
  //         (product) => product.category === this.filter.category
  //       );
  //     }

  //     // Price Filter
  //     if (this.filter.sort) {
  //       filterProducts = filterProducts.sort((a, b) => {
  //         if (this.filter.sort === "low-high") {
  //           return a.price - b.price;
  //         } else if (this.filter.sort === "high-low") {
  //           return b.price - a.price;
  //         }
  //       });
  //     }

  //     // Rating Filter
  //     if (this.filter.rating) {
  //       filterProducts = filterProducts.filter(
  //         (product) =>
  //           Math.round(product.rating.rate) === Number(this.filter.rating)
  //       );

  //       // filterProducts = filterProducts.filter((product) =>
  //       //   console.log(
  //       //     Math.round(product.rating.rate),
  //       //     Number(this.filter.rating)
  //       //   )
  //       // );
  //     }

  //     // Search Filter
  //     if (this.filter.search) {
  //       filterProducts = filterProducts.filter((product) =>
  //         product.title
  //           .toLocaleLowerCase()
  //           .includes(this.filter.search.toLocaleLowerCase())
  //       );
  //     }

  //     return filterProducts;
  //   },

  //   pageCount() {
  //     return Math.ceil(this.filterProducts.length / this.pageSize);
  //   },

  //   filterProdutwithPagination() {
  //     return this.filterProducts.slice(
  //       (this.pageIndex - 1) * this.pageSize,
  //       this.pageSize * this.pageIndex
  //     );
  //   },
  // },

  // provide() {
  //   return {
  //     handleProductDelete: this.handleProductDelete,
  //     handleSelectedAll: this.handleSelectedAll,
  //     selected: computed(() => this.selected),
  //     handleSelect: this.handleSelect,
  //     handleTargetedPagination: this.handleTargetedPagination,
  //   };
  // },
};
</script>
