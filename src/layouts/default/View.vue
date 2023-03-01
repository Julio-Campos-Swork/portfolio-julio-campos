<template>
  <v-main>
    <v-layout class="overflow-visible" style="height: 56px;">
    <v-bottom-navigation
      v-model="navigation"
      color="indigo"
      grow
      bg-color="indigo"
    >
    <RouterLink style="text-decoration: none; color: inherit; margin: -.4rem" to="/">
      <v-btn color="black">
        <v-icon>mdi-home-account</v-icon>

        Home
      </v-btn>
    </RouterLink>
      <RouterLink style="text-decoration: none; color: inherit; margin: -.4rem" to="/projects">

      <v-btn color="black">
        <v-icon>mdi-briefcase-arrow-left-right-outline</v-icon>

        Projects
      </v-btn>
      </RouterLink>
      <RouterLink style="text-decoration: none; color: inherit; margin: -.4rem" to="/about">

      <v-btn color="black" style="margin: -.4rem:">
        <v-icon>mdi-information-outline</v-icon>

        About
      </v-btn>
      </RouterLink>
    <RouterLink style="text-decoration: none; color: inherit; margin: -.4rem" to="/contact">

      <v-btn color="black">
        <v-icon>mdi-account-box-outline</v-icon>

        Contact
      </v-btn>
    </RouterLink>
    </v-bottom-navigation>
  </v-layout>

  <!-- navegador -->

    <router-view />

  </v-main>
<FooterVue  />
</template>

<script setup>
import FooterVue from '@/components/Footer.vue';
import {ref} from 'vue';
  const navigation = ref(null)



</script>

<style scoped>
a:link, a:visited, a:active{
  text-decoration: none;
  color: white;
}
</style>
