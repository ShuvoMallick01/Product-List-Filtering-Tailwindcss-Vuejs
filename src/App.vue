<template>
  <Layout>
    <template #actions>
      <!-- Action -->
      <ProductFilterActions :categories="categories" v-model="filter" />

      <!-- Action Applied -->
      <ProductFilterViewer
        :filter="filter"
        :handleFilterDelete="handleFilterDelete"
      />
    </template>

    <!-- Product Table -->
    <ProductTable :products="filterProdutwithPagination" />

    <template #pagination>
      <ProductPagination
        :pageCount="pageCount"
        :handlePrev="handlePrev"
        :handleNext="handleNext"
        :currentPage="pageIndex"
      />
    </template>
  </Layout>
</template>

<!-- FUNCTIONALITY -->
<script>
import Layout from "./components/Layout.vue";
import { categories } from "./data/categories";
import { products } from "./data/products";
import { computed } from "vue";

export default {
  data() {
    return {
      categories: [...categories],
      products: [...products],
      filter: { category: "", sort: "", search: "" },
      pageIndex: 1,
      pageSize: 5,
      selected: [],
    };
  },

  methods: {
    handleFilterDelete(filterKey) {
      this.filter[filterKey] = "";
    },

    async handleProductDelete(productId) {
      const { isConfirmed } = await this.$swal("Hi there");
      console.log(isConfirmed);

      if (isConfirmed) {
        this.products = this.products.filter(
          (product) => product.id !== productId
        );
      }
    },

    handlePrev() {
      if (this.pageIndex > 1) this.pageIndex--;
    },

    handleNext() {
      if (this.pageIndex < this.pageCount) this.pageIndex++;
    },

    handleSelectedAll(e) {
      if (e.target.checked) {
        this.selected = this.filterProducts.map((item) => item.id);
      } else this.selected = [];
      console.log(this.selected);
    },
  },

  computed: {
    filterProducts() {
      let filterProducts = [...this.products];

      // Category Filter
      if (this.filter.category) {
        filterProducts = filterProducts.filter(
          (product) => product.category === this.filter.category
        );
      }

      // Price Filter
      if (this.filter.sort) {
        filterProducts = filterProducts.sort((a, b) => {
          if (this.filter.sort === "low-high") {
            return a.price - b.price;
          } else if (this.filter.sort === "high-low") {
            return b.price - a.price;
          }
        });
      }

      // Search Filter
      if (this.filter.search) {
        filterProducts = filterProducts.filter((product) =>
          product.title
            .toLocaleLowerCase()
            .includes(this.filter.search.toLocaleLowerCase())
        );
      }

      return filterProducts;
    },

    pageCount() {
      return Math.ceil(this.filterProducts.length / this.pageSize);
    },

    filterProdutwithPagination() {
      return this.filterProducts.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageSize * this.pageIndex
      );
    },
  },

  provide() {
    return {
      handleProductDelete: this.handleProductDelete,
      handleSelectedAll: this.handleSelectedAll,
      selected: computed(() => this.selected),
    };
  },

  components: {
    Layout,
  },
};
</script>
