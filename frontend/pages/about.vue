<template>
  <div>
    <h1 class="mb-2 text-2xl font-bold">About</h1>
    <NuxtLink target="_blank" class="font-medium flex gap-1 text-blue-600 dark:text-blue-500 hover:underline" to="https://github.com">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>

      Link of the repository
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "About | Dev Mini-Market"
});
</script>