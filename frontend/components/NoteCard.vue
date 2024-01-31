<template>
  <NuxtLink to="/to-buy/1234">
    <UCard class="dark:hover:bg-slate-800 hover:bg-gray-100 transition-colors">
      <p>Title</p>
      <p>Boring text Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore corporis obcaecati ipsum? Rerum,
        vero nostrum!</p>
      <NuxtImg src="https://images.metadata.sky.com/pd-image/3cb0835c-8b46-48b4-9bac-c0cad81d3366/16-9"
        class="w-full rounded" :preload="true"></NuxtImg>
    </UCard>
  </NuxtLink>
</template>