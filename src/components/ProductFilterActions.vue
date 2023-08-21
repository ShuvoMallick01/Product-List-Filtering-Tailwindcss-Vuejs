<template>
  <div class="flex items-center gap-4">
    <!-- CATEGORY SELECTION -->
    <div class="lg:max-w-xs max-w-lg w-full">
      <select
        :value="filter.category"
        @input="handleChange($event, 'category')"
        class="bg-gray-100 border border-gray-300 outline-none text-gray-800 text-sm rounded-lg p-3 w-full"
      >
        <option value="" selected>Category</option>
        <option
          v-for="category in categories"
          :key="category"
          :value="category"
          class="capitalize"
        >
          {{ category }}
        </option>
      </select>
    </div>

    <!-- PRICE SORTING SELECTION -->
    <div class="lg:max-w-xs max-w-lg w-full">
      <select
        :value="filter.sort"
        @input="handleChange($event, 'sort')"
        class="bg-gray-100 border border-gray-300 outline-none text-gray-800 text-sm rounded-lg p-3 w-full"
      >
        <option value="" selected>Sort By Price</option>
        <option value="low-high">Low to High</option>
        <option value="high-low">High to Low</option>
      </select>
    </div>

    <!-- RATING SELECTION -->
    <div class="lg:max-w-xs max-w-lg w-full">
      <select
        :value="filter.rating"
        @input="handleChange($event, 'rating')"
        class="bg-gray-100 border border-gray-300 outline-none text-gray-800 text-sm rounded-lg p-3 w-full"
      >
        <option value="" selected>Sort By Rating</option>
        <option v-for="num in 5" :value="num">{{ num }}</option>
      </select>
    </div>

    <!-- PRODUCT SEARCH BOX -->
    <div class="lg:max-w-6xl md:max-w-lg w-full">
      <input
        :value="filter.search"
        @input="handleChange($event, 'search')"
        type="text"
        class="bg-gray-100 border border-gray-300 outline-none text-gray-800 text-sm rounded-lg block w-full p-3"
        placeholder="Search product by name"
      />
    </div>
  </div>
</template>

<!-- FUNCTIONALITY -->
<script>
import { mapState } from "pinia";
import { useProductStore } from "../store/product-store";

export default {
  methods: {
    handleChange(e, key) {
      this.filter[key] = e.target.value;
    },
  },

  computed: {
    ...mapState(useProductStore, ["categories", "filter"]),
  },
};
</script>
