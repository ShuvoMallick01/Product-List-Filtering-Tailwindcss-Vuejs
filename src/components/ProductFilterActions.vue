<template>
  <div class="flex items-center gap-4">
    <!-- CATEGORY -->
    <Select
      :title="'Category'"
      :options="extendCategory"
      v-model="filter.category"
    ></Select>
    <!-- :value="filter.category"
      @click="handleChange($event, 'category')" -->

    <!-- PRICE SORTING -->
    <Select
      :title="'Sort By Rating'"
      :options="sortOptions"
      v-model="filter.sort"
    ></Select>
    <!-- :value="filter.sort"
      @click="handleChange($event, 'sort')" -->

    <!-- RATING -->
    <Select
      :title="'Sort by Rating'"
      :options="ratingOptions"
      v-model="filter.rating"
    ></Select>
    <!-- :value="filter.rating"
      @click="handleChange($event, 'rating')" -->

    <!-- PRODUCT SEARCH -->
    <div class="lg:max-w-6xl md:max-w-lg w-full">
      <input
        v-model="filter.search"
        type="text"
        class="bg-gray-100 border border-gray-300 outline-none text-gray-800 text-sm rounded-lg block w-full p-3"
        placeholder="Search product by name"
      />
      <!-- @input="handleChange($event, 'search')" -->
    </div>
  </div>
</template>

<!-- FUNCTIONALITY -->
<script>
import { mapState } from "pinia";
import { useProductStore } from "../store/product-store";

export default {
  data() {
    return {
      sortOptions: [
        { id: 1, value: "low-high", title: "Low to High" },
        { id: 2, value: "high-low", title: "High to Low" },
      ],

      ratingOptions: [
        { id: 1, value: 1, title: 1 },
        { id: 2, value: 2, title: 2 },
        { id: 3, value: 3, title: 3 },
        { id: 4, value: 4, title: 4 },
        { id: 5, value: 5, title: 5 },
      ],
    };
  },

  computed: {
    extendCategory() {
      return this.categories.map((item) => ({
        id: item,
        value: item,
        title: item,
      }));
    },

    ...mapState(useProductStore, ["categories", "filter"]),
  },
};
</script>
