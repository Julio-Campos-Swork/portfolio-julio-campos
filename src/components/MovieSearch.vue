<template>
  <v-card min-width="350" max-width="600" elevation="24" rounded="xl" class="mb-4 mt-4">
    <v-card-text>
      <v-row justify="space-evenly" class="mb-2 mt-4 mr-4 ml-4">

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
      <v-btn @click="getMovie()" class="mt-4 ml-4" color="indigo" rounded="md">Search</v-btn>
    </v-row>
    <v-row style="width: 250; height: 300px;" class="mb-4 mt-2" v-if="imgMovie">

        <v-label v-if="error4" class="text-red text-center text-h4">{{error4}}</v-label>
        <v-img class="Image" v-if="imgMovie" :src="imgMovie" width="250"></v-img>
      </v-row>

      <p class="text-start text-h5 text-light-blue mb-2">
        Title: <span class="text-end text-black text-h6 mb-2">{{ Title }}</span>
      </p>
      <p class="text-start text-h5 text-light-blue mb-2">
        Rated: <span class="text-end text-black text-h6 mb-2">{{ Rated }}</span>
      </p>
      <p class="text-start text-h5 text-light-blue mb-2">
        Year: <span class="text-end text-black text-h6 mb-2">{{ Year }}</span>
      </p>
      <p class="text-start text-h5 text-light-blue mb-2">
        Runtime: <span class="text-end text-black text-h6 mb-2">{{ Runtime }}</span>
      </p>
      <p class="text-start text-h5 text-light-blue mb-2">
        Genre: <span class="text-end text-black text-h6 mb-2">{{ Genre }}</span>
      </p>
      <p class="text-start text-h5 text-light-blue mb-2">
        Plot: <span class="text-end text-black text-h6 mb-2">{{ Plot }}</span>
      </p>
      <p class="text-start text-h5 text-light-blue mb-2">
        Cast: <span class="text-end text-black text-h6 mb-2">{{ Cast }}</span>
      </p>

      <v-row justify="center" class="mt-8 mb-8" v-if="imgMovie">
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
.Image{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
}
</style>
