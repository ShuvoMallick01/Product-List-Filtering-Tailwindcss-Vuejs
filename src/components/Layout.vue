<template>
  <main class="bg-gray-900 min-h-screen px-4">
    <div class="container mx-auto pt-8">
      <div class="bg-gray-800 py-5 rounded-xl mb-10 p-4">
        <slot name="actions"></slot>
      </div>

      <div class="relative bg-gray-800 rounded-md">
        <slot></slot>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>
