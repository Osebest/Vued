<script setup>

  const emits = defineEmits(["selectOption"])

  const selectOption = (isColor) => {
    emits("selectOption", isColor)
  }

</script>

<template>
  <VNavigationDrawer expand-on-hover rail>
    <v-list>
      <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Ephraim Osebest"
        subtitle="sandra_a88@gmailcom"></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item 
        prepend-icon="mdi-image"
        title="Color Gallery"
        value="color"
        @click="selectOption(true)"
      />
      <v-list-item 
        prepend-icon="mdi-dialpad"
        title="GreySpace Gallery"
        value="color"
        @click="selectOption(false)"
      />
    </v-list>
  </VNavigationDrawer>
</template>