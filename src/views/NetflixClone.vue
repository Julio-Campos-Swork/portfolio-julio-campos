<template>
  <v-app-bar color="black" absolute app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title class="text-red cursorP" @click="principal()"
      >Netflix Clone</v-toolbar-title
    >
    <v-text-field
      @keypress.enter="searchMovie()"
      @click:append="searchMovie()"
      append-icon="mdi-magnify"
      v-model="searchValue"
      variant="underlined"
      label="Search Movie"
      class="ml-4"
    ></v-text-field>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary absolute color="black">
    <v-list>
      <v-list-item @click="getMovies('upcoming')">Upcoming</v-list-item>
      <v-list-item @click="getMovies('latest')">Latest</v-list-item>
    </v-list>
    <v-list>
      <v-list-item
        v-for="category in generos.generos"
        :key="category.id"
        @click="getByGenre(category.id)"
      >
        <v-list-item-title>{{ category.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-container class="bg-black" fluid>
    <!-- popular -->
    <v-container>
      <v-row justify="center">
        <v-card width="500" elevation="0" class="bg-black">
          <v-card-title class="text-center text-indigo text-h4"
            >Popular Movies</v-card-title
          >
          <v-card-text>
            <v-carousel cycle hide-delimiters>
              <template v-slot:prev="{ props }">
                <v-btn
                  color="transparent"
                  @click="props.onClick"
                  icon="mdi-arrow-left"
                ></v-btn>
              </template>
              <template v-slot:next="{ props }">
                <v-btn
                  color="transparent"
                  @click="props.onClick"
                  icon="mdi-arrow-right"
                ></v-btn>
              </template>
              <v-carousel-item
                v-for="movie in moviePopular.popular"
                :key="movie.id"
                :src="`${imgUrlBase}${movie.poster_path}`"
                @click="searchYoutube(movie.original_title)"
              >
              </v-carousel-item>
            </v-carousel>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>

    <v-dialog v-model="latestDiag" persistent width="500" height="400">
      <v-card class="bg-black">
        <v-card-title class="text-center text-pink">Random latest movie</v-card-title>
        <v-img
          :src="`${imgUrlBase}${movieUpcoming.movieUpcoming.poster_path}`"
          height="300"
        ></v-img>

        <v-card-text>
          <p class="text-subtitle-2 text-pink text-center mb-2">
            {{ movieUpcoming.movieUpcoming.original_title }}
          </p>
          <p class="text-start text-indigo text-subtitle-1">
            Release Date:
            <span class="text-caption text-white">{{
              movieUpcoming.movieUpcoming.release_date
            }}</span>
          </p>
          <p class="text-start text-indigo text-subtitle-1">
            Original Lenguaje:
            <span class="text-caption text-white">{{
              movieUpcoming.movieUpcoming.original_language
            }}</span>
          </p>
          <p class="text-start text-indigo text-subtitle-1">
            Popularidad:
            <span>
              class="text-caption text-white"{{
                movieUpcoming.movieUpcoming.popularity
              }}</span
            >
          </p>
          <p class="text-start text-indigo text-subtitle-1">Overview:</p>
          <span class="text-caption text-white">{{
            movieUpcoming.movieUpcoming.overview
          }}</span>
        </v-card-text>
        <v-card-actions>
          <v-btn color="red" @click="latestDiag = !latestDiag">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- boton hide -->
    <v-row justify="center">
      <v-btn color="indigo" class="mb-4 mt-4 position-sticky" @click="infoV = !infoV">{{
        infoV == true ? "Hide Info" : "Show Info"
      }}</v-btn>
    </v-row>

    <!-- search result -->
    <v-row v-if="searchValue">
      <v-col
        v-for="movie in movieSearch.movieSearch"
        :key="movie.id"
        cols="12"
        sm="6"
        md="3"
        lg="3"
      >
        <v-card elevation="24" class="bg-black">
          <v-img class="cursorP"
            @click="searchYoutube(movie.title)"
            :src="`${imgUrlBase}${movie.poster_path}`"
            height="300"
          ></v-img>
          <v-card-text v-if="infoV">
            <p class="text-subtitle-2 text-pink text-center mb-2">{{ movie.title }}</p>
            <p class="text-start text-indigo text-subtitle-1">
              Release Date:
              <span class="text-caption text-white">{{ movie.release_date }}</span>
            </p>
            <p class="text-start text-indigo text-subtitle-1">
              Original Lenguaje:
              <span class="text-caption text-white">{{ movie.original_language }}</span>
            </p>
            <p class="text-start text-indigo text-subtitle-1">
              Popularidad:
              <span class="text-caption text-white">{{ movie.popularity }}</span>
            </p>
            <p class="text-start text-indigo text-subtitle-1">Overview:</p>
            <span class="text-caption text-white">{{ movie.overview }}</span>
            <v-btn
              @click="getSimilar(movie.id)"
              block
              color="gray"
              border="lg"
              class="mt-4"
              >Similar movies</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- top movies -->
    <v-row v-if="!searchValue">
      <v-col
        v-for="movie in movieList.movieList"
        :key="movie.id"
        cols="12"
        sm="6"
        md="3"
        lg="3"
      >
        <v-card elevation="24" class="bg-black">
          <v-img class="cursorP"
            @click="searchYoutube(movie.title)"
            :src="`${imgUrlBase}${movie.poster_path}`"
            height="300"
          ></v-img>
          <v-card-text v-if="infoV">
            <p class="text-subtitle-2 text-pink text-center mb-2">{{ movie.title }}</p>
            <p class="text-start text-indigo text-subtitle-1">
              Release Date:
              <span class="text-caption text-white">{{ movie.release_date }}</span>
            </p>
            <p class="text-start text-indigo text-subtitle-1">
              Original Lenguaje:
              <span class="text-caption text-white">{{ movie.original_language }}</span>
            </p>
            <p class="text-start text-indigo text-subtitle-1">
              Popularidad:
              <span class="text-caption text-white">{{ movie.popularity }}</span>
            </p>
            <p class="text-start text-indigo text-subtitle-1">Overview:</p>
            <span class="text-caption text-white">{{ movie.overview }}</span>
            <v-btn
              @click="getSimilar(movie.id)"
              block
              color="gray"
              border="lg"
              class="mt-4"
              >Similar movies</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="trailerDialog" width="560" height="500">
      <iframe
        width="560"
        height="315"
        :src="idVideo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </v-dialog>

    <!-- pagination -->

    <div class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="8">
            <v-container class="max-width">
              <v-pagination
                v-model="pageTop"
                class="my-4"
                :length="pageTotal - 44"
                @click="changePage()"
              ></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const apikey = import.meta.env.VITE_TMDB_API_KEY;
const page = ref(1);
const pageTop = ref(1);
const pageTotal = ref(0);
const imgUrlBase = ref("https://image.tmdb.org/t/p/w1280");
const generos = reactive({ generos: [] });
const moviePopular = reactive({ popular: [] });
const movieList = reactive({ movieList: [] });
const movieSearch = reactive({ movieSearch: [] });
const movieUpcoming = reactive({ movieUpcoming: [] });
const drawer = ref(false);
const infoV = ref(false);
const searchValue = ref("");
const latestDiag = ref(false);
const trailerDialog = ref(false);
const idVideo = ref("");

const getSimilar = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apikey}&language=en-US&page=1`;
  const dataTop = await axios.get(url);
  console.log(dataTop);
  pageTotal.value = dataTop.data.total_pages;
  movieList.movieList = dataTop.data.results;
};

const changePage = async () => {
  try {
    const urlTop = `${BASE_URL}/movie/top_rated?api_key=${apikey}&page=${pageTop.value}`;
    const data = await axios.get(urlTop);
    console.log(data.data);
    movieList.movieList = data.data.results;
  } catch (error) {
    console.log(error);
  }
};

const searchYoutube = async (search) => {
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=5&q=${
    search + " official trailer"
  }&key=${import.meta.env.VITE_GOOGLE_API}`;
  try {
    const data = await axios.get(url);
    console.log(data);

    idVideo.value = `https://www.youtube.com/embed/${data.data.items[0].id.videoId}?autoplay=1`;
    trailerDialog.value = true;
    console.log(idVideo.value);
  } catch (error) {
    console.log(error);
  }
};

const getMovies = async (target) => {
  if (target == "latest") {
    const urlLat = `${BASE_URL}/movie/${target}?api_key=${apikey}&language=en-US`;
    try {
      const dataLatest = await axios.get(urlLat);
      movieUpcoming.movieUpcoming = dataLatest.data;
      console.log(dataLatest);
      latestDiag.value = true;
    } catch (error) {
      console.log(error);
    }
  } else {
    const url = `${BASE_URL}/movie/${target}?api_key=${apikey}&page=${pageTop.value}`;
    try {
      const data = await axios.get(url);
      movieList.movieList = data.data.results;
    } catch (error) {
      console.log(error);
    }
  }
};

const getByGenre = async (id) => {
  const urlTop = `${BASE_URL}/movie/top_rated?api_key=${apikey}&page=${pageTop.value}`;
  try {
    const dataTop = await axios.get(urlTop);
    movieList.movieList = dataTop.data.results;
  } catch (error) {
    console.log(error);
  }

  movieList.movieList = movieList.movieList.filter((movie) =>
    movie.genre_ids.includes(id)
  );
  // console.log("genero id",id, movieList.movieList)
};

const searchMovie = async () => {
  const url = `${BASE_URL}/search/movie?api_key=${apikey}&language=en-US&query=${searchValue.value}&page=1&include_adult=true`;

  try {
    const data = await axios.get(url);
    console.log("search", data);
    movieSearch.movieSearch = data.data.results;
  } catch (error) {
    console.log(error);
  }
};

const principal = async () => {
  const urlTop = `${BASE_URL}/movie/top_rated?api_key=${apikey}&page=${pageTop.value}`;

  try {
    const dataTop = await axios.get(urlTop);
    pageTotal.value = dataTop.data.total_pages;
    movieList.movieList = dataTop.data.results;
  } catch (error) {
    console.log(error);
  }
};

const init = async () => {
  const urlGeneros = `${BASE_URL}/genre/movie/list?api_key=${apikey}&language=en-US`;
  const urlPopular = `${BASE_URL}/movie/popular?api_key=${apikey}&page=${page.value}`;
  const urlTop = `${BASE_URL}/movie/top_rated?api_key=${apikey}&page=${pageTop.value}`;
  try {
    //generos

    const dataGeneros = await axios.get(urlGeneros);
    generos.generos = dataGeneros.data.genres;
    // console.log("generos",generos.generos)
    //popular
    const dataPopular = await axios.get(urlPopular);
    moviePopular.popular = dataPopular.data.results;
    // console.log("movie popular",moviePopular.popular)

    const dataTop = await axios.get(urlTop);
    pageTotal.value = dataTop.data.total_pages;
    movieList.movieList = dataTop.data.results;
    // console.log("movie list",movieList.movieList)
  } catch (error) {
    console.log(error);
  }
};
init();
</script>

<style scoped>
.cursorP {
  cursor: pointer;
}
</style>
