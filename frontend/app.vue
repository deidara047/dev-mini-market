<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
onBeforeMount(() => {
  const config = useRuntimeConfig();
  const { account } = useAppWrite(config.public.appwriteProjectID);
  const promise = account.getSession('current');
})
</script>