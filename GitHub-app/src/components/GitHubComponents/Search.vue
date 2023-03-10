<template>
  <v-expansion-panels variant="popout">
    <v-expansion-panel>
      <v-expansion-panel-title>Search for Github users</v-expansion-panel-title>
      <v-expansion-panel-text>
        <div>
          <v-text-field v-model="query" label="Github username(try: Mataoseeker)" clearable></v-text-field>
        </div>
        <div class="flex justify-center">
          <v-btn @click="search" variant="outlined" class="text-white bg-green-700 hover:bg-green-700/50 mx-auto">
            Search
          </v-btn>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const query = ref('');

const search = () => {
  if(query.value) {
    router.push({ name: 'GithubUser', params: { username: query.value } });
    query.value = '';
  } else {
    alert('Please enter a username');
  }
};

</script>

<style scoped>

</style>