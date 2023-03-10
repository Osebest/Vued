<template>
  <div>
    <div>
      <Search />
      <div v-if="error">
        <h1 class="text-3xl font-semibold my-5 text-center">User not Found!!!</h1>
      </div>
      <div v-else>
        <UserDetails :profile="user"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useGithubStore } from '@/store/github';
import Search from '@/components/GitHubComponents/Search.vue';
import UserDetails from '@/components/GitHubComponents/UserDetails.vue';

const { user, error } = storeToRefs(useGithubStore());
const { getUser, getRepos } = useGithubStore();

const route = useRoute();

watch(
  () => route.params.username,
  () => {
    if(!route.params.username) return;
    getUser(route.params.username);
    getRepos(route.params.username);
  }
);

onMounted(() => {
  getUser(route.params.username);
  getRepos(route.params.username);
});

</script>

<style scoped></style>