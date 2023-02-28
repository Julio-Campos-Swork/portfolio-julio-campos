<template>
  <v-container>
    <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-toolbar
      flat
      dense
    >
      <v-toolbar-title>
        <span class="text-subheading">METRONOME</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn variant="text" icon="mdi-share-variant"></v-btn> -->
    </v-toolbar>

    <v-card-text>
      <v-row
        class="mb-4"
        justify="space-between"
      >
        <v-col class="text-left">
          <span
            class="text-h2 font-weight-light"
            v-text="bpm"
          ></span>
          <span class="subheading font-weight-light me-1">BPM</span>
          <v-fade-transition>
            <v-avatar
              v-if="isPlaying"
              :color="color"
              :style="{
                animationDuration: animationDuration
              }"
              class="mb-1 v-avatar--metronome"
              size="30"
            ></v-avatar>
          </v-fade-transition>
        </v-col>
        <v-col class="text-right">
          <v-btn
            :color="color"
            theme="dark"
            icon
            elevation="0"
            @click="toggle"
          >
            <v-icon size="large" :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"></v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-slider
        v-model="bpm"
        :color="color"
        track-color="grey"
        min="40"
        max="350"
        :step="1"
      >
        <template v-slot:prepend>
          <v-btn
            size="small"
            variant="text"
            icon="mdi-minus"
            :color="color"
            @click="decrement"
          ></v-btn>
        </template>

        <template v-slot:append>
          <v-btn
            size="small"
            variant="text"
            icon="mdi-plus"
            :color="color"
            @click="increment"
          ></v-btn>
        </template>
      </v-slider>
    </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import {ref, computed} from 'vue'

        const bpm = ref(40);
        //  const interval = ref(null);
        const isPlaying = ref(false)

        const decrement = () => bpm.value--
        const increment = () => bpm.value++
        const toggle = () => isPlaying.value = !isPlaying.value
        const color = computed(() => {
        if (bpm.value < 100) return 'indigo'
        if (bpm.value < 155) return 'teal'
        if (bpm.value < 190) return 'green'
        if (bpm.value < 255) return 'orange'
        if (bpm.value < 305) return 'red'
        return 'red'
        })
        const animationDuration  = computed(() => {
          return `${60 / bpm.value}s`
        })
</script>

<style scoped>
@keyframes metronome-example {
    from {
      transform: scale(.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-name: metronome-example;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
</style>
