<template>
  <main class="flex flex-col gap-4">
    <h1 class="text-2xl font-bold">My to-buy notes</h1>
    <div>
      Write your note here:
      <div class="border rounded p-2">#text-editor-goes-here</div>
    </div>
    <hr />
    <div class="grid grid-cols-4 gap-5">
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: "To-Buy notes | Dev Mini-Market"
});
</script>