<template>
  <tr class="hover:bg-slate-700/20">
    <td>
      <input
        class="focus:ring-offset-0 focus:ring-0 md:mx-4 lg:mx-5 mx-3 my-4 font-medium"
        type="checkbox"
        name=""
        id=""
        :checked="isSelected"
        @input="handleSelect($event, product.id)"
      />
    </td>
    <td><img :src="product.image" class="w-10" alt="" /></td>
    <td scope="row" class="md:px-4 lg:px-5 px-3 py-4 font-medium">
      {{ product.title }}
    </td>
    <td>
      {{ product.rating.rate }}
      <div class="flex gap-1">
        <i
          v-for="star in Math.round(product.rating.rate)"
          class="fa-solid fa-star"
        ></i
        ><i
          v-for="blnkStar in 5 - Math.round(product.rating.rate)"
          class="fa-regular fa-star"
        ></i>
      </div>
    </td>
    <td class="md:px-4 lg:px-5 px-3 py-4 capitalize">{{ product.category }}</td>
    <td class="md:px-4 lg:px-5 px-3 py-4">{{ product.price }}</td>
    <td
      class="md:px-4 lg:px-5 px-3 py-4 text-2xl text-center cursor-pointer hover:text-red-400"
      @click="handleProductDelete(product.id)"
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

  computed: {
    isSelected() {
      return this.selected.find((id) => id === this.product.id);
    },
  },

  inject: ["handleProductDelete", "selected", "handleSelect"],
};
</script>
