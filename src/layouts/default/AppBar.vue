<template>
  <v-app-bar absolute color="indigo">
    <v-app-bar-nav-icon  app @click="drawer = !drawer"></v-app-bar-nav-icon>
    <span class="menuBtn" @click="drawer = !drawer">Menu</span>
    <v-spacer></v-spacer>

    <v-app-bar-title class="text-h5 text-center text-deep-purple">Portfolio - Julio Campos</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn
      @click="toggleTheme"
      size="small"
      :prepend-icon="bText == 'Light' ? 'mdi-sun-angle' : 'mdi-sun-angle-outline'"
      >{{ bText }}</v-btn
    >
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" absolute temporary class="bg-indigo">
    <v-list>
      <v-list-item prepend-icon="mdi-home"><a href="#">Inicio</a></v-list-item>
      <v-list-item prepend-icon="mdi-network-pos"><a href="#skills">Skills</a></v-list-item>
      <v-list-item prepend-icon="mdi-briefcase"><a href="/projects">Proyectos</a></v-list-item>
      <v-list-item prepend-icon="mdi-information-outline"><a href="#">About Me</a></v-list-item>
      <v-list-item prepend-icon="mdi-account-box-outline"><a href="#">Contacto</a></v-list-item>
    </v-list>
</v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
const bText = ref("Light");
const theme = useTheme();
const drawer = ref(false)
const colorTheme = ref("cyan-lighten-5")
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
  bText.value = bText.value === "Dark" ? "Light" : "Dark";
};
</script>

<style scoped>
a:link,
a:visited,
a:active {
  text-decoration: none;
  color: rgb(15, 0, 0);
}
.menuBtn:hover{
cursor: pointer;
}
.colorTheme{
  background-color: chocolate;
}
</style>
