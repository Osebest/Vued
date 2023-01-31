<script setup>

const props = defineProps({
  href: String
})
</script>

<template>
  <a :href="href" target="_blank" class="cursor-pointer px-3 py-2 rounded border-2 bg-orange-500 text-white border-orange-600 hover:bg-orange-600 transition-colors">YouTube</a>
</template>