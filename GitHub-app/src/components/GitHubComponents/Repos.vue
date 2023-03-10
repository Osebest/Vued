<template>
  <div>
    <h1 class="text-3xl text-green-600 font-semibold text-center md:text-4xl mt-10 mb-5">Repositories</h1>
    <v-card class="mx-auto pa-2" min-height="300">
      <v-list>
        <v-list-subheader>List of Repo names</v-list-subheader>
        <v-list-item v-for="rep in filterRepos" :key="rep.id" :value="rep.name" active-color="green" rounded="shaped"
          class="py-2">
          <template v-slot:prepend>
            <v-avatar color="green">
              <v-icon color="white" icon="mdi-gesture-tap-button"></v-icon>
            </v-avatar>
          </template>
          <router-link :to="{ name: 'RepoDetail', params: { id: rep.id } }">
            <v-list-item-title>{{ rep.name }}</v-list-item-title>
          </router-link>
          <template v-slot:append>
            <v-icon class="hidden sm:flex" color="grey-lighten-1" icon="mdi-check-circle" variant="text"></v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
    <Pagination :length="length" />
  </div>
</template>

<script setup>
import Pagination from './Pagination.vue';
import { storeToRefs } from "pinia";
import { useGithubStore } from '@/store/github';

const { length, filterRepos } = storeToRefs(useGithubStore());

</script>

<style scoped></style>