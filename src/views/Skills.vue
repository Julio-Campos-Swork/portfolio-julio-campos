<template>
  <v-container id="skills">
    <p class="text-center text-h3 mt-6 text-focus-in">Skills</p>
    <v-row justify="center" class="mt-6 mb-10 ml-10 mr-10">
      <v-col cols="4" md="3" sm="3" lg="2" v-for="item in items" :key="item.name">
        <p class="text-center">{{ item.name }}</p>
        <div class="text-center">
          <div class="text-center">
            <a target="_blank" :href="item.link">
            <v-icon size="large" :color="item.color"
              >{{ item.icon }}</v-icon
            >
          </a>
          </div>
           <v-progress-linear class="mt-4"
      v-model="item.value"
      :color="item.color"
      height="18"
      striped
    >
    </v-progress-linear>
        <strong >{{ Math.ceil(item.value) }}%</strong>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const items = [
  {
    name: "HTML",
    icon: "mdi-language-html5",
    value: 70,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    color: "deep-orange"
  },
  {
    name: "CSS",
    icon: "mdi-language-css3",
    value: 58,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    color: "blue-darken-4",
  },
  {
    name: "JavaScript",
    icon: "mdi-language-javascript",
    value: 70,
    link: "https://www.javascript.com/",
    color: "yellow-accent-4"
  },
  { name: "VueJs", icon: "mdi-vuejs", value: 70, link: "https://vuejs.org/", color: "teal" },
  { name: "NuxtJs", icon: "mdi-nuxt", value: 65, link: "https://nuxt.com/", color: "teal-lighten-2" },
  { name: "Vuetify", icon: "mdi-vuetify", value: 70, link: "https://vuetifyjs.com/en/", color: "light-blue" },
  { name: "Bootstrap", icon: "mdi-bootstrap", value: 60, link: "https://getbootstrap.com/", color: "deep-purple-accent-2" },
  { name: "ReactJs", icon: "mdi-react", value: 50, link: "https://react.dev/", color: "light-blue-lighten-2" },
  { name: "NextJs", icon: "mdi-triangle", value: 50, link: "https://nextjs.org/", color: "grey-darken-1" },
  { name: "Ant Desing", icon: "mdi-semantic-web", value: 50, link: "https://ant.design/", color: "light-blue-darken-1" },
  { name: "PHP", icon: "mdi-language-php", value: 50, link: "https://www.php.net/", color:"blue-darken-1" },
];
</script>

<style scoped>
a:link,
a:visited,
a:active{
  text-decoration: none;
}

</style>
