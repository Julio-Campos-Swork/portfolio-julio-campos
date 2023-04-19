<template>
  <v-app >
    <DefaultBar />

    <default-view />
<FooterVue class="mt-10"  />

  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import FooterVue from '@/components/Footer.vue';

</script>
