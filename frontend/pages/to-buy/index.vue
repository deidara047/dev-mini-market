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
    <div v-if="loaded">
      <div class="text-center" v-if="notes.length === 0">
        <p>You have 0 notes</p>
      </div>
      <div class="grid grid-cols-4 gap-5">
        <NoteCard v-for="nt in notes" :title="nt.title" :text="nt.text" :key="nt.id" />
      </div>
    </div>
    <div v-else class="text-center">
      <Spinning />
    </div>
  </main>
</template>

<script setup lang="ts">
interface Todo {
  id: number,
  title: string,
  text: string,
  owner: string
}

import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import type { DocumentNode } from 'graphql';
import Swal from 'sweetalert2';
const config = useRuntimeConfig();
const { account } = useAppWrite(config.public.appwriteProjectID);
const userStore = useUserStore();
const loaded = ref(false);
const notes = ref<Todo[]>([]);
const fetchNotesQuery = ref<DocumentNode | null>(null);

onMounted(() => {
  const promise = account.get();

  promise.then(function (response) {
    hydrateNotes(response.$id);
  }, function (error) {
    console.log(error);
  });
});

async function hydrateNotes(owner: string) {
  fetchNotesQuery.value = gql`
      query getTodosByOwner {
        todosByOwner(owner: "${owner}") {
          id,
          title,
          text,
          owner
        }
      }
    `

  const { data } = await useAsyncQuery(fetchNotesQuery.value!);
  const retrievedData: any = data.value;

  retrievedData.todosByOwner.forEach((elem: any) => {
    notes.value.push({ id: elem.id, title: elem.title, text: elem.text, owner: elem.owner });
  });
  if (loaded.value === false) loaded.value = true;
}


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

async function onSubmit(event: FormSubmitEvent<Schema>) {
  if (userStore.userInfo) {
    const query = gql`
      mutation addTodo($input: CreateTodoInput!) {
        createTodo(createTodoInput: $input) {
          id
          text,
          owner,
          title
        }
      }
    `

    const { mutate: addTodo } = useMutation(query);

    const result = await addTodo({ input: { text: state.text, owner: userStore.userInfo.$id, title: state.title } });

    if (result) {
      /* 
        About the next line:
        So as you may know, if we mutate something and we want to update our UI, we need to use something like 'refreshQueries' so it
        update the cache. But, I tried that way and also using the 'update' function, and none of them worked for me. So, sorry, 
        but I gave up and instead I just updated the local array that contains my data. I recognize my error: I did't make the enough research. I didn't
        because for now I don't find enough documentation about what can I do.

        Probably, in the future, I will try this again but with original Apollo Client, and I'm gonna check if that works, so it doesn't feel
        like I don't know how to 'manage' Apollo. Currently, I want to believe that is something about Nuxt integration or summat.
      */
      notes.value.push({ id: result.data.createTodo.id, title: result.data.createTodo.title, text: result.data.createTodo.text, owner: result.data.createTodo.owner });
      state.text = "";
      state.title = "";
      Swal.fire({
        title: "Success",
        text: "The note has been added successfully!",
        icon: "success"
      });
    } else {
      alert("ERROR 500: Contact the developer");
    }
  }
}
</script>