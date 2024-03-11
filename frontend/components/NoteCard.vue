<template>
  <NuxtLink to="/to-buy/1234">
    <UCard class="dark:hover:bg-slate-800 hover:bg-gray-100 transition-colors">
      <p><b>{{ props.title }}</b></p>
      <p>{{ props.text }}</p>
    </UCard>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>