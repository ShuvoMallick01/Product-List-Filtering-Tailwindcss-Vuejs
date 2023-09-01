<template>
  <main class="bg-gray-900 px-4 px0 mx-auto overflow-x-auto">
    <div class="container mx-auto pt-8">
      <div class="bg-gray-800 py-5 rounded-xl mb-10 p-4">
        <slot name="actions"></slot>
      </div>

      <div class="rounded-md">
        <slot></slot>
      </div>

      <slot name="pagination"></slot>
    </div>
  </main>
</template>

<script>
export default {};
</script>
