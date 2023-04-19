<template>
  <h1 class="text-focus-in">About page</h1>
  <v-container fluid>
    <v-card
    class="mx-auto"
    max-width="434"
    rounded="0"
  >


  <v-toolbar color="primary">
      <v-toolbar-title>My Profile</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:append>
        <v-switch
          v-model="sticky"
          label="Sticky Banner"
          hide-details
          color="secondary"
        ></v-switch>
      </template>
    </v-toolbar>

    <v-banner
      :sticky="sticky"
      lines="one"
    >
      <template v-slot:text>
        We can't save your edits while you are in offline mode.
      </template>

      <template v-slot:actions>
        <v-btn color="deep-purple-accent-4">
          Go Online
        </v-btn>
      </template>
    </v-banner>



    <v-img
      height="100%"
      cover
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
      <v-avatar
        color="grey"
        size="150"
        rounded="0"
      >
        <v-img cover src="@/assets/profile.jpg"></v-img>
      </v-avatar>
      <v-list-item
        class="text-white"
        title="Julio Campos"
        subtitle="Web Developer"
      ></v-list-item>
    </v-img>
  </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue"

const sticky = ref(false);
console.log("Hello")
</script>

<style scoped>

</style>
