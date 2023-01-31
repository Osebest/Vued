<script setup>
import Nav from './Nav.vue';
</script>

<template>
  <Nav />
  <main>
    <div class="max-w-[1200px] mx-auto px-2 pb-8">
      <router-view />
    </div>
  </main>
</template>
