<template>
  <div class="flex items-center gap-4">
    <!-- CATEGORY SELECTION -->
    <div class="lg:max-w-xs max-w-lg w-full">
      <select
        :value="modelValue.category"
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
        :value="modelValue.sort"
        @input="handleChange($event, 'sort')"
        class="bg-gray-100 border border-gray-300 outline-none text-gray-800 text-sm rounded-lg p-3 w-full"
      >
        <option value="" selected>Sort By Price</option>
        <option value="low-high">Low to High</option>
        <option value="high-low">High to Low</option>
      </select>
    </div>

    <!-- PRODUCT SEARCH BOX -->
    <div class="lg:max-w-xs md:max-w-lg w-full">
      <input
        :value="modelValue.search"
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
export default {
  props: {
    categories: {
      type: Array,
      default: [],
      require: true,
    },

    modelValue: {
      type: Object,
      default: {},
      require: true,
    },
  },

  methods: {
    handleChange(e, key) {
      this.$emit("update:modelValue", {
        ...this.modelValue,
        [key]: e.target.value,
      });
    },
  },
};
</script>
