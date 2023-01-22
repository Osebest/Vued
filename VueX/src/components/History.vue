<script setup>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'

const store = useStore()

const history = computed(() => store.state.history)
const activeIndexes = computed(() => store.getters.activeIndexes)
const value = ref(0)

</script>


<template>
  <div class="container">
    <h2>History</h2>
    <div class="flex">
      <p v-for="(number, index) in history" :key="index"
        :class="activeIndexes(parseInt(value)).includes(index) && 'bold'">
        {{ number }}
      </p>
    </div>
    <input v-model="value" type="number" placeholder="Search by Index">
  </div>
</template>

<style scoped>
.container {
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.flex {
  display: flex;
  text-align: center;
  width: 25rem;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
}

.flex p {
  margin: 1rem;
}

.bold {
  font-weight: 900;
}
</style>