<template>
  <v-app :theme="theme">
    <default-bar :theme="theme" :toggleTheme="toggleTheme" :toggleDrawer="toggleDrawer" :drawer="drawer" />
    <v-navigation-drawer v-model="drawer" location="bottom" temporary style="height: 90vh;">
      <div class="w-3/5 mx-auto text-4xl text-center mt-10">
        <router-link to="/">
          <h1 class="my-10 bg-[rgba(255,255,255,0.01)] shadow-md hover:bg-green-500/75 rounded-lg cursor-pointer py-4">
            Home</h1>
        </router-link>
        <router-link to="/github">
          <h1 class="my-10 bg-[rgba(255,255,255,0.01)] shadow-md hover:bg-green-500/75 rounded-lg cursor-pointer py-4">
            GitHub App</h1>
        </router-link>
        <router-link to="/counter">
          <h1 class="my-10 bg-[rgba(255,255,255,0.01)] shadow-md hover:bg-green-500/75 rounded-lg cursor-pointer py-4">
            Counter</h1>
        </router-link>
        <router-link to="/login">
          <v-btn variant="outlined" color="green" class="hover:bg-slate-700">
            Login
          </v-btn>
        </router-link>
        <div class="my-8">
          <small class="mx-2">Theme:</small>
          <v-btn :prepend-icon="theme === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            @click="toggleTheme"></v-btn>
        </div>
      </div>
    </v-navigation-drawer>
    <default-view />
  </v-app>
</template>

<script setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import { ref, watch } from 'vue';

const theme = ref("dark")
const drawer = ref(false)
const group = ref(null)

const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark"
}
watch(group, () => {
  drawer.value = false
})
const toggleDrawer = () => {
  drawer.value = !drawer.value
}

</script>
