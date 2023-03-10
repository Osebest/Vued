<template>
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col xs="12" md="6">
          <v-container class="max-width">
            <v-pagination prev-icon="mdi-menu-left" next-icon="mdi-menu-right" v-model="page" class="my-4"
              :length="length"></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>

import { ref, watch } from 'vue'
import { useGithubStore } from '@/store/github';

defineProps(['length'])

const { setPageNumber } = useGithubStore()
const page = ref(1)

watch(page, (val) => {
  setPageNumber(val)
})

</script>

<style scoped></style>