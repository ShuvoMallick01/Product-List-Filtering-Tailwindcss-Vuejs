<template>
  <div class="flex items-center gap-4">
    <!-- CATEGORY SELECTION -->
    <div class="lg:max-w-xs max-w-lg w-full">
      <select
        class="bg-gray-100 border border-gray-300 outline-none text-gray-800 text-sm rounded-lg p-3 w-full"
      >
        <option selected>Category</option>
        <option value="US">Laptop</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>

    <!-- PRICE SORTING SELECTION -->
    <div class="lg:max-w-xs max-w-lg w-full">
      <select
        class="bg-gray-100 border border-gray-300 outline-none text-gray-800 text-sm rounded-lg p-3 w-full"
      >
        <option selected>Sort By Price</option>
        <option value="US">Default</option>
        <option value="CA">Low to High</option>
        <option value="FR">High to Low</option>
      </select>
    </div>

    <!-- PRODUCT SEARCH BOX -->
    <div class="lg:max-w-xs md:max-w-lg w-full">
      <input
        type="text"
        class="bg-gray-100 border border-gray-300 outline-none text-gray-800 text-sm rounded-lg block w-full p-3"
        placeholder="Search product by name"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>
