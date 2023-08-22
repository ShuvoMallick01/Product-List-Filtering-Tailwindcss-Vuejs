<template>
  <div class="lg:max-w-xs max-w-lg w-full">
    <select
      class="capitalize bg-gray-100 border border-gray-300 outline-none text-gray-800 text-sm rounded-lg p-3 w-full"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option value="" selected>{{ title }}</option>

      <option
        class="capitalize"
        v-for="option in options"
        :value="option.value"
        :key="option.id"
      >
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: [],
      required: true,
    },

    title: String,

    modelValue: String,
  },
};
</script>
