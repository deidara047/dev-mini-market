<template>
  <main>
    <div class="mx-auto max-w-[475px] mb-4">
      <UButton @click="$router.push({ path: '/to-buy'})" class="flex items-center mb-2 gap-2 p-0" variant="link">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>
        <span>Go back</span>
      </UButton>
      <h1 class="font-semibold text-2xl">Your note:</h1>
    </div>
    <UCard class="mx-auto max-w-[475px]">
      <p>Title</p>
      <p>Boring text Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore corporis obcaecati ipsum? Rerum,
        vero nostrum!</p>
      <NuxtImg src="https://images.metadata.sky.com/pd-image/3cb0835c-8b46-48b4-9bac-c0cad81d3366/16-9"
        class="w-full rounded"></NuxtImg>
      <UButton class="mt-4">Edit</UButton>
    </UCard>
  </main>
</template>

<script setup lang="ts">
const router = useRouter();
</script>