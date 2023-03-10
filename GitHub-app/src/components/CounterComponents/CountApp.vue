<template>
  <div class="w-3/4 flex flex-col justify-center items-center mt-20">
    <h1 :style="{ color: color() }"
      class="text-5xl mb-10 font-semibold  lg:text-8xl p-4 border-slate-700 border-y-2 rounded-lg transition-all">
      {{ count }}</h1>
    <div class="flex flex-wrap justify-center gap-5 my-5">
      <v-btn @click="decrement" prepend-icon="mdi-minus" variant="outlined" color="orange">
        SUBTRACT
      </v-btn>
      <v-btn @click="increment" prepend-icon="mdi-plus" variant="outlined" color="green">
        ADD
      </v-btn>
      <v-btn @click="reset" prepend-icon="mdi-refresh" variant="outlined" color="blue">
        REFRESH
      </v-btn>
    </div>
    <div class="flex flex-wrap justify-center items-center gap-2">
      <v-text-field type="number" v-model="val" variant="underlined">
      </v-text-field>
      <v-btn @click="setValue(val)" elevation="2">
        SETVALUE
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/store/counter';

const { count } = storeToRefs(useCounterStore());
const { increment, decrement, reset, setValue } = useCounterStore();
const val = ref(0);

const color = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`
};

</script>

<style scoped></style>