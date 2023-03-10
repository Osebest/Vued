<template>
  <div v-if="!profile">
    <div class="h-full mt-20 d-flex align-center justify-center fill-height">
      <img src="../../assets/loading.png" alt="">
    </div>
  </div>
  <div v-else>
    <div>
      <h1 class="my-10 text-3xl mb-16 text-green-600 font-semibold text-center md:text-5xl">Welcome to {{ profile.login
      }}'s
        GitHub</h1>
      <div>
        <v-row>
          <v-col cols="12" md="6">
            <div class="grid grid-cols h-full content-center">
              <h1 class="text-3xl md:text-4xl font-semibold">{{ profile.name }}</h1>
              <h2 class="text-slate-400 text-xl">#{{ profile.login }}</h2>
              <p class="my-8">{{ profile.bio }}</p>
              <small class="text-slate-400">{{ profile.location }}</small>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-img :src="profile.avatar_url" lazy-src="https://picsum.photos/id/0/7/7" height="400px" cover>
              <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                  <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                </div>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </div>
    </div>
    <Repos />
  </div>
</template>

<script setup>
import Repos from './Repos.vue';
defineProps(['profile'])

</script>

<style scoped></style>