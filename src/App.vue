<template>
  <Layout>
    <template #actions>
      <!-- Action -->
      <ProductFilterActions :categories="categories" v-model="filter" />

      <!-- Action Applied -->
      <ProductFilterViewer />
    </template>

    <!-- Product Table -->
    <ProductTable :products="filterProducts" />
  </Layout>
</template>

<!-- FUNCTIONALITY -->
<script>
import Layout from "./components/Layout.vue";
import { categories } from "./data/categories";
import { products } from "./data/products";

export default {
  data() {
    return {
      categories: [...categories],
      products: [...products],
      filter: { category: "", sort: "", search: "" },
    };
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
  },

  components: {
    Layout,
  },
};
</script>
