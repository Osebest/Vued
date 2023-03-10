<template>
  <div>
    <div>
      <Search />
      <UserDetails :profile="osebest"/>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from "pinia";
import { useGithubStore } from '@/store/github';
import Search from '@/components/GitHubComponents/Search.vue';
import UserDetails from '@/components/GitHubComponents/UserDetails.vue';

const { osebest } = storeToRefs(useGithubStore());
const { getProfile, getRepos } = useGithubStore();

onMounted(() => {
  getProfile('osebest');
  getRepos('osebest');
});

</script>

<style lang="scss" scoped></style>