<template>
  <nav class="text-center py-10" aria-label="Page navigation example">
    <ul class="inline-flex -space-x-px text-base h-10">
      <li>
        <button
          href="#"
          class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          @click="handlePrev()"
          :class="{ 'cursor-not-allowed': pageIndex === 1 }"
          :disabled="pageIndex === 1"
        >
          Prev
        </button>
      </li>

      <li v-for="num in pageCount" :key="num">
        <button
          href="#"
          class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          :class="{
            'dark:bg-slate-700 dark:text-slate-200': num === pageIndex,
          }"
          @click="handleTargetedPagination(num)"
        >
          {{ num }}
        </button>
      </li>

      <li>
        <button
          href="#"
          class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          :class="{ 'cursor-not-allowed': pageIndex === pageCount }"
          :disabled="pageIndex === pageCount"
          @click="handleNext()"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</template>

<!-- FUNCTIONALITY -->
<script>
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../store/product-store";
export default {
  // props: {
  //   pageCount: Number,
  //   handlePrev: Function,
  //   handleNext: Function,
  //   currentPage: Number,
  // },

  // inject: ["handleTargetedPagination"],

  computed: {
    ...mapState(useProductStore, ["pageCount", "pageIndex"]),
  },

  methods: {
    ...mapActions(useProductStore, [
      "handlePrev",
      "handleNext",
      "handleTargetedPagination",
    ]),
  },
};
</script>
