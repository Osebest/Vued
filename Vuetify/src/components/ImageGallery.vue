<script setup>

const props = defineProps(["isWithColor"])

const copyUrl = async(url) => {
  await navigator.clipboard.writeText(url);
  alert("Copied to clipboard");
}

</script>

<template>
  <v-card class="my-2 mx-5 pa-4">
    <v-row>
      <v-col v-for="n in 200" cols="4" sm="3" md="2" lg="1">
        <v-card @click="copyUrl(`https://picsum.photos/500/300?image=${n * 5 + 10}${props.isWithColor ? '' : '&grayscale'}`)">
          <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}${props.isWithColor ? '' : '&grayscale'}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}${props.isWithColor ? '' : '&grayscale'}`" aspect-ratio="1" cover>
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>