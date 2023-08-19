<template>
  <table class="w-full text-sm text-left text-slate-300">
    <ProductTableHead />

    <tbody class="divide-y divide-gray-700 w-full bg-gray-800">
      <ProductTableDataRow
        v-for="product in products"
        :product="product"
        :key="product.id"
      />
    </tbody>
  </table>
</template>

<!-- FUNCTIONALITY -->
<script>
export default {
  props: {
    products: {
      type: Array,
      default: [],
      required: true,
    },
  },
};
</script>
