<template>
  <Layout>
    <template #actions>
      <!-- Action -->
      <ProductFilterActions />

      <!-- Action Applied -->
      <ProductFilterViewer />
    </template>

    <!-- Product Table -->
    <ProductTable :products="products" />
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
    };
  },

  components: {
    Layout,
  },
};
</script>
