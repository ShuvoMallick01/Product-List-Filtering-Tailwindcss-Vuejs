<template>
  <thead class="text-xs text-gray-200 uppercase bg-gray-700 round-full">
    <tr>
      <th v-for="col in columns" scope="col" class="px-6 py-3">{{ col }}</th>
    </tr>
  </thead>
</template>

<script>
export default {
  data() {
    return {
      columns: ["Name", "Color", "Category", "Price", "Action"],
    };
  },
};
</script>
