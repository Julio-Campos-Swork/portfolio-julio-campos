<template>
  <v-main>
    <Home />
    <hr>
    <Skills />
    <hr>
    <ProjectsVue />
    <hr>

    <About />
    <hr>

    <Contact />

  </v-main>
</template>

<script setup>
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Home from '@/views/Home.vue';
import ProjectsVue from '@/views/Projects.vue';
import Skills from '@/views/Skills.vue'
</script>

<style scoped>
</style>
