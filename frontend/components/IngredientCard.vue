<template>
  <UCard>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg" alt="tomato"
      class="w-full">

    <template #footer>
      <div class="flex flex-col gap-1">
        <p class="font-bold text-xl">Tomato</p>
        <p class="dark:text-gray-300">$200.25</p>
        <div class="mt-1">
          <UButton class="w-full flex justify-center">+ Add to cart</UButton>
        </div>
      </div>
    </template>
  </UCard>
</template>