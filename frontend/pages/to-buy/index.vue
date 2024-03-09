<template>
  <main class="flex flex-col gap-4">
    <h1 class="text-2xl font-bold">My to-buy notes</h1>
    <div>
      Write your note here:
      <UCard class="max-w-[500px] w-full mt-2">
        <UForm :schema="schema" :state="state" @submit="onSubmit">
          <UFormGroup label="Title" name="title">
            <UInput v-model="state.title" />
          </UFormGroup>

          <UFormGroup label="Text" class="mt-2" name="text">
            <UTextarea v-model="state.text" />
          </UFormGroup>

          <div class="flex justify-center">
            <UButton class="mt-3" type="submit">
              Submit
            </UButton>
          </div>
        </UForm>
      </UCard>
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
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

useHead({
  title: "To-Buy notes | Dev Mini-Market"
});

const schema = z.object({
  title: z.string().refine(data => typeof data === 'string' && data.trim() !== '', { message: "Field is required" }),
  text: z.string().refine(data => typeof data === 'string' && data.trim() !== '', { message: "Field is required" })
})

type Schema = z.output<typeof schema>

const state = reactive({
  title: "",
  text: ""
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  const query = gql`
    query {
    characters {
      info {
        count
      }
    }
  }
  `
  const variables = { limit: 5 }
  const { data } = await useAsyncQuery(query, variables)
  console.log(data.value);
}
</script>