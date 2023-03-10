<template>
  <v-app-bar flat class="app px-4">
    <v-app-bar-title>
      <div class="flex gap-1 items-center text-green-600">
        <v-icon icon="mdi-circle-slice-6" />
        <span class="text-2xl px-1">AltSchool App</span>
      </div>
    </v-app-bar-title>
    <v-btn @click.stop="toggleDrawer"><v-icon size="30px" :icon="drawer ? 'mdi-close' : 'mdi-menu'"></v-icon></v-btn>
  </v-app-bar>
</template>

<script setup>

defineProps(['toggleDrawer', 'drawer'])

</script>

<style scoped>
.app {
  box-shadow: 1px 11px 10px -13px rgba(185, 184, 184, 0.75);
}
</style>
