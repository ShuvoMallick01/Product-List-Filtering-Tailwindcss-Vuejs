<template>
  <div v-if="hasFilterApplied" class="flex items-center mt-5 gap-2">
    <div v-for="item in filterList" :key="item">
      <span
        v-if="filter[item]"
        class="inline-flex items-center cursor-pointer px-2 py-1 text-sm font-medium text-grey-800 bg-slate-300 rounded-md"
      >
        {{ filter[item] }}
        <button
          type="button"
          class="inline-flex items-center p-1 ml-2 text-sm text-red-500 bg-transparent rounded-sm hover:text-red-600"
        >
          <svg
            @click="handleFilterDelete(item)"
            class="w-2 h-2 hover:w-2.5 hover:h-2.5 hover:duration-200 hover: transition-all"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </span>
    </div>
  </div>
</template>

<!-- FUNCTIONALITY -->
<script>
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../store/product-store";

export default {
  computed: {
    ...mapState(useProductStore, ["filter"]),

    filterList() {
      return Object.keys(this.filter);
    },

    hasFilterApplied() {
      return this.filterList.filter((item) => this.filter[item]).length > 0;
    },
  },

  methods: {
    ...mapActions(useProductStore, ["handleFilterDelete"]),
  },
};
</script>
