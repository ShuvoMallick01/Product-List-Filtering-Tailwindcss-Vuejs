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

      <button
        class="text-3xl hover:text-red-300 hover:duration-200 mb-1.5"
        @click="handleSelectedProductDelete"
      >
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
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../store/product-store";

import Layout from "../components/Layout.vue";

export default {
  computed: {
    ...mapState(useProductStore, ["selected"]),
  },

  methods: {
    ...mapActions(useProductStore, ["handleSelectedProductDelete"]),
  },

  components: {
    Layout,
  },
};
</script>
