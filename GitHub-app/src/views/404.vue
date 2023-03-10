<template>
  <div class="flex items-center justify-center h-full mt-32">
        <div class="text-center">
          <h1 class="text-4xl font-bold">404</h1>
          <p>
            <span class="text-red-700">Ooopps!</span> Page not found.
          </p>
          <p>The page you’re looking for doesn’t exist.</p>
          <router-link to='/'>
           <v-btn variant="tonal" class="my-4">Go Home</v-btn>
          </router-link>
        </div>
      </div>
</template>

<script setup>

</script>

<style scoped>

</style>