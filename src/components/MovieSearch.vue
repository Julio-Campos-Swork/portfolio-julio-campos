<template>
  <v-card>
    <v-card-title class="text-indigo text-h5 text-center">Movie search</v-card-title>
    <v-card-text>
      <v-row justify="space-evenly">

      <v-text-field
        v-model="searchValue"
        placeholder="Movie name"
        variant="solo"
        type="input"
        clearable
        append-inner-icon="mdi-magnify"
        style="width: 200px"
        @click:append-inner="getMovie()"
        @keypress.enter="getMovie()"
      ></v-text-field>
      <v-btn @click="getMovie()" class="mt-2" color="indigo" rounded="md">Search</v-btn>
    </v-row>
        <v-label v-if="error4" class="text-red text-center text-h4">{{error4}}</v-label>
        <v-img v-if="imgMovie" :src="imgMovie" width="250"></v-img>

      <p class="text-start text-h5 text-light-blue">
        Title: <span class="text-end text-black text-h6">{{ Title }}</span>
      </p>
      <p class="text-start text-h5 text-light-blue">
        Rated: <span class="text-end text-black text-h6">{{ Rated }}</span>
      </p>
      <p class="text-start text-h5 text-light-blue">
        Year: <span class="text-end text-black text-h6">{{ Year }}</span>
      </p>
      <p class="text-start text-h5 text-light-blue">
        Runtime: <span class="text-end text-black text-h6">{{ Runtime }}</span>
      </p>
      <p class="text-start text-h5 text-light-blue">
        Genre: <span class="text-end text-black text-h6">{{ Genre }}</span>
      </p>
      <p class="text-start text-h5 text-light-blue">
        Plot: <span class="text-end text-black text-h6">{{ Plot }}</span>
      </p>
      <p class="text-start text-h5 text-light-blue">
        Cast: <span class="text-end text-black text-h6">{{ Cast }}</span>
      </p>
      <br>
      <br>
      <v-row justify="center">

      <v-btn color="red" rounded="lg" @click="reset()">Reset</v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import axios from 'axios';
const searchValue = ref("The Batman");
const imgMovie = ref("");
const Title = ref("");
const Rated = ref("");
const Year = ref("");
const Runtime = ref("");
const Genre = ref("");
const Plot = ref("");
const Cast = ref("");
const error4 = ref("")
const getMovie = async () => {
  error4.value = ""

  let url = `http://www.omdbapi.com/?t=${searchValue.value}&apikey=${
    import.meta.env.VITE_MOVIE_API_KEY
  }`;
  try {
  const data = await axios.get(url)
  // console.log(data);

    if(data.data.Error){
      reset()
      error4.value = "La pelicula No existe"

    }else{
      imgMovie.value = data.data.Poster;
      Title.value = data.data.Title
      Rated.value = data.data.Rated
      Year.value = data.data.Year
      Runtime.value = data.data.Runtime
      Genre.value = data.data.Genre
      Plot.value = data.data.Plot
      Cast.value = data.data.Actors

    }
  } catch (error) {
    console.log(error)

  }
};
const reset = () => {
  imgMovie.value = "";
  Title.value = "";
  Rated.value = "";
  Year.value = "";
  Runtime.value = "";
  Genre.value = "";
  Plot.value = "";
  Cast.value = "";
  searchValue.value = "The Batman"
  error4.value = ""

}
</script>

<style scoped>

</style>
