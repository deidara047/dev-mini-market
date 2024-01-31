<template>
  <UCard>
    <div class="flex justify-center">
      <img style="object-fit: cover;" :src="`https://spoonacular.com/cdn/ingredients_500x500/${ingredient.replace(/\s/g, '-')}.jpg`" :alt="ingredient.replace(/\s/g, '-')"
      class="w-full h-[220px] rounded">
    </div>

    <template #footer>
      <div class="flex flex-col gap-1">
        <p class="font-bold text-xl capitalize">{{ props.ingredient }}</p>
        <p class="dark:text-gray-300">${{ (props.id > 10000 ? props.id/10000 : (props.id > 100 ? props.id/100 : props.id)).toFixed(2) }}</p>
        <div class="mt-1">
          <UButton class="w-full flex justify-center">+ Add to cart</UButton>
        </div>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
// https://spoonacular.com/cdn/ingredients_100x100/apple.jpg
const props = defineProps({
  ingredient: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
})
</script>