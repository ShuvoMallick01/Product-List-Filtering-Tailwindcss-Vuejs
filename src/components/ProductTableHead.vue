<template>
  <thead class="text-xs text-gray-200 uppercase bg-gray-700 round-full">
    <tr>
      <th class="md:px-4 lg:px-5 px-3 py-3">
        <input
          class="focus:ring-offset-0 focus:ring-0"
          type="checkbox"
          name=""
          id=""
          @input="handleSelectedAll($event)"
          :indeterminate="selected.length > 0"
          :checked="selected.length > 0"
        />
      </th>

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

  inject: ["handleSelectedAll", "selected"],
};
</script>
