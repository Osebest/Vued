<template>
  <div>
    <h1 class="my-10 text-3xl mb-16 text-green-600 font-semibold text-center md:text-5xl">Repo Details</h1>
    <v-card class="mx-auto" max-width="600">
      <v-card-item>
        <v-card-title>
          Name:
          <span class="text-3xl font-semibold">{{ repo.name }}</span>
        </v-card-title>

        <v-card-subtitle>Language: {{ repo.language }}</v-card-subtitle>
      </v-card-item>
      <v-card-text>
        <p>{{ repo.description }}</p>
      </v-card-text>
      <v-card-subtitle>Forks: {{ repo.forks }}</v-card-subtitle>
      <v-card-subtitle>Size: {{ repo.size }}</v-card-subtitle>
      <v-card-actions class="flex flex-wrap justify-center">
        <a :href="repo.forks_url" target="_blank">
          <v-btn variant="text" color="green">
            Fork Repo
          </v-btn>
        </a>
        <a :href="repo.clone_url" target="_blank">
          <v-btn variant="text" color="green">
            Clone Repo
          </v-btn>
        </a>
      </v-card-actions>
    </v-card>
    <v-btn @click="$router.go(-1)" prepend-icon="mdi-github" variant="outlined" class="mx-auto flex justify-center w-2/4 my-4">
      Go Back
    </v-btn>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useGithubStore } from '@/store/github';

const { repo } = storeToRefs(useGithubStore());
const { setSingleRepo } = useGithubStore();

const route = useRoute();

onMounted(() => {
  setSingleRepo(route.params.id);
});


</script>

<style scoped></style>