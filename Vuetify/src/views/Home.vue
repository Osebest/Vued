<script setup>
import SideBar from '@/components/SideBar.vue';
import ImageGallery from '@/components/imageGallery.vue';
import { ref } from 'vue';

const isWithColor = ref(true);

const onSelectOption = (isColor) => {
  isWithColor.value = isColor;
}

</script>

<template>
  <VApp>
    <SideBar @select-option="onSelectOption"/>
    <VMain>
      <ImageGallery :isWithColor="isWithColor"/> 
    </VMain>
  </VApp>
</template>