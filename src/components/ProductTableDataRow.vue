<template>
  <tr class="hover:bg-slate-700/20">
    <th scope="row" class="md:px-4 lg:px-5 px-3 py-4 font-medium">
      {{ product.title }}
    </th>
    <td class="md:px-4 lg:px-5 px-3 py-4 capitalize">{{ product.category }}</td>
    <td class="md:px-4 lg:px-5 px-3 py-4">{{ product.price }}</td>
    <td
      class="md:px-4 lg:px-5 px-3 py-4 text-2xl text-center cursor-pointer hover:text-red-400"
    >
      &times;
    </td>
  </tr>
</template>

<!-- FUNCTIONALITY -->
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
      default: {},
    },
  },
};
</script>
