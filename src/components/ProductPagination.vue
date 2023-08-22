<template>
  <nav class="text-center py-10" aria-label="Page navigation example">
    <ul class="inline-flex -space-x-px text-base h-10">
      <li>
        <button
          href="#"
          class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:cursor-not-allowed"
          @click="productPaginationStore.handlePrev()"
          :disabled="productPaginationStore.pageIndex === 1"
        >
          Prev
        </button>
      </li>

      <li v-for="num in productPaginationStore.pageCount" :key="num">
        <button
          href="#"
          class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:cursor-not-allowed"
          :class="{
            'dark:bg-slate-700 dark:text-slate-200':
              num === productPaginationStore.pageIndex,
          }"
          @click="productPaginationStore.handleTargetedPagination(num)"
        >
          {{ num }}
        </button>
      </li>

      <li>
        <button
          href="#"
          class="disabled:cursor-not-allowed flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          :disabled="
            productPaginationStore.pageIndex ===
            productPaginationStore.pageCount
          "
          @click="productPaginationStore.handleNext()"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</template>

<!-- FUNCTIONALITY -->
<script>
import { mapStores } from "pinia";
import { usePaginationStore } from "../store/product-pagination";

export default {
  computed: {
    // ...mapState(usePaginationStore, ["pageCount", "pageIndex"]),
    ...mapStores(usePaginationStore),
  },

  // methods: {
  //   ...mapActions(usePaginationStore, [
  //     "handlePrev",
  //     "handleNext",
  //     "handleTargetedPagination",
  //   ]),
  // },
};
</script>
