<template>
  <v-card elevation="24" rounded="xl" class="mb-4 mt-4">
    <v-card-text class="text-center">
      <h1 class="mt-3 mb-4">Enter real city</h1>
      <div class="search-box mr-4">
        <i class="fa-solid fa-location-dot"></i>
        <input
          v-model="search"
          type="text"
          placeholder="Enter your location"
          @keypress.enter="searchL()"
        />
        <button @click="searchL()" class="fa-solid fa-magnifying-glass"></button>
      </div>
      <div v-if="error404">
        <h3>City not found</h3>
        <img :src="imagenError" width="120" height="120" />
      </div>
      <div v-if="imagenShow">
        <img :src="imagenShow" width="70" height="70" />
        <p>{{ temperature }}<span>°C</span></p>
        <p>{{ description }}</p>
      </div>

      <div v-if="imagenShow">
        <div>
          <i class="fa-solid fa-water"></i>
          <div>
            <span>{{ humidity }}</span>
            <p>Humidity</p>
          </div>
        </div>
        <div>
          <i class="fa-solid fa-wind"></i>
          <div>
            <span>{{ wind }}</span>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="red" @click="reset()">Reset</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const search = ref("");
const error404 = ref("");
const imagenShow = ref("");
const apiKey = import.meta.env.VITE_WEATHER_API;
const temperature = ref("");
const description = ref("");
const humidity = ref("");
const wind = ref("");
const imagenError = ref("");
const searchL = async () => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=${apiKey}`;
    const data = await axios.get(url);
    console.log(data);

    if (data.status == "404") error404.value = true;
    switch (data.data.weather[0].main) {
      case "Clear":
        imagenShow.value = "../assets/weatherImages/clear.png";
        break;
      case "Rain":
        imagenShow.value = "../assets/weatherImages/rain.png";
        break;
      case "Snow":
        imagenShow.value = "../assets/weatherImages/snow.png";
        break;
      case "Clouds":
        imagenShow.value = "../assets/weatherImages/cloud.png";
        break;
      case "Haze":
        imagenShow.value = "../assets/weatherImages/mist.png";
        break;
      default:
        imagenShow.value = "";
    }

    temperature.value = `${parseInt(data.data.main.temp)}`;
    description.value = `${data.data.weather[0].description}`;
    humidity.value = `${data.data.main.humidity}%`;
    wind.value = `${parseInt(data.data.wind.speed)}Km/h`;
  } catch (error) {
    console.log(error);
    if (error) {
      imagenError.value = "../assets/weatherImages/404.png";
      error404.value = true;
    }
  }
};

const reset = () => {
  imagenShow.value = "";
  temperature.value = "";
  description.value = "";
  humidity.value = "";
  wind.value = "";
  imagenError.value = "";
  error404.value = false;
  search.value = "";
};
</script>

<style scoped>
.search-box {
  width: 100%;
  height: min-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-box input {
  color: #06283d;
  width: 80%;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  padding-left: 32px;
}

.search-box input::placeholder {
  font-size: 20px;
  font-weight: 500;
  color: #06283d;
  text-transform: capitalize;
}

.search-box button {
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: #06283d;
  background: #dff6ff;
  border-radius: 50%;
  font-size: 22px;
  transition: 0.4s ease;
}

.search-box button:hover {
  color: #fff;
  background: #06283d;
}

.search-box i {
  position: absolute;
  color: #06283d;
  font-size: 28px;
}
</style>
