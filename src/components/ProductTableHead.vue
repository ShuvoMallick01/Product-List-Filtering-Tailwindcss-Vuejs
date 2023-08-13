<template>
  <thead class="text-xs text-gray-200 uppercase bg-gray-700 round-full">
    <tr>
      <th v-for="col in columns" scope="col" class="md:px-4 lg:px-5 px-3 py-3">
        {{ col }}
      </th>
    </tr>
  </thead>
</template>

<!-- FUNCTIONALITY -->
<script>
export default {
  data() {
    return {
      columns: ["Name", "Category", "Price", "Action"],
    };
  },
};
</script>
