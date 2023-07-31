<template>
	<v-container id="proyectos" class="mt-6">
		<p class="text-center text-h3 mb-4 text-focus-in">Proyectos</p>
		<v-row justify="center">
			<v-col
				sm="6"
				xs="6"
				md="4"
				lg="4"
				xl="4"
				v-for="proyectos in proyectosExternos"
				:key="proyectos.id"
			>
				<v-card color="transparent" elevation="0">
					<v-card-title class="text-center text-subtitle-2">{{
						proyectos.name
					}}</v-card-title>
					<v-card-text>
						<p v-if="!proyectos.extra" class="text-center descripcion mb-1">
							Click en la imagen para abrir el proyecto
						</p>
						<p class="text-center descripcion mb-1" v-if="proyectos.extra">
							{{ proyectos.extra }}
						</p>
						<a :href="proyectos.url" target="_blank"
							><v-img class="h-0 w-100 imagen" cover :src="proyectos.img"></v-img
						></a>
						<p class="text-center info mt-4 mb-4">{{ proyectos.info }}</p>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
	<v-container class="mb-6">
		<p class="text-center text-h5 mb-6 mt-6 text-focus-in">Proyectos integrados</p>
		<p class="text-center text-caption mb-4 mt-4">
			Click en el ícono para mostrar el proyecto
		</p>

		<v-row>
			<v-col
				class="text-center"
				cols="3"
				v-for="components in componentList"
				key="components.id"
			>
				<v-icon
					class="iconos"
					color="light-blue"
					@click="showProject(components.name)"
					:icon="components.icon"
				></v-icon>
				<p @click="showProject(components.name)" class="textClick text-subtitle-2 mt-2">
					{{ components.name }}
				</p>
			</v-col>
		</v-row>
		<v-dialog v-model="dialogProjects" max-height="600" max-width="400">
			<p class="text-center text-primary mt-6 mb-2">{{ titlevalue }}</p>
			<v-row justify="end">
				<v-icon @click="dialogProjects = !dialogProjects">mdi-close-box</v-icon>
			</v-row>
			<!-- <v-row justify="center" class="mt-2"> -->
			<AgeCalculatorVue v-if="componentList[0].isActive" />
			<Alarm v-if="componentList[1].isActive" />
			<Calculator v-if="componentList[2].isActive" />
			<Currency v-if="componentList[3].isActive" />
			<IMGUploader v-if="componentList[4].isActive" />
			<Metronomo v-if="componentList[5].isActive" />
			<MovieSearchVue v-if="componentList[6].isActive" />
			<NewYearCount v-if="componentList[7].isActive" />
			<PasswordGenerator v-if="componentList[8].isActive" />
			<PredictGenderVue v-if="componentList[9].isActive" />
			<QRComponent v-if="componentList[10].isActive" />
			<RandomUserVue v-if="componentList[11].isActive" />
			<StopwatchVue v-if="componentList[12].isActive" />
			<StringInteractionVue v-if="componentList[13].isActive" />
			<TicTacToe v-if="componentList[14].isActive" />
			<TodoListVue v-if="componentList[15].isActive" />
			<WeatherVue v-if="componentList[16].isActive" />
			<!-- <Slider v-if="componentList[17].isActive" /> -->
			<!-- </v-row> -->
		</v-dialog>
		<p class="text-center text-caption mt-6">
			Estos proyectos fueron creados con el proposito de practicar y reutilizar código,
			algunos son adaptaciones de otros lenguajes.
		</p>
	</v-container>
</template>

<script setup>
	import Metronomo from '@/components/Metronomo.vue'
	import IMGUploader from '@/components/IMGUploader.vue'
	import Calculator from '@/components/Calculator.vue'
	import PasswordGenerator from '@/components/PasswordGenerator.vue'
	import QRComponent from '@/components/QRComponent.vue'
	import NewYearCount from '@/components/NewYearCount.vue'
	import PredictGenderVue from '@/components/PredictGender.vue'
	import Currency from '@/components/Currency.vue'
	import StringInteractionVue from '@/components/StringInteraction.vue'
	import Alarm from '@/components/Alarm.vue'
	import WeatherVue from '@/components/Weather.vue'
	import TicTacToe from '@/components/TicTacToe.vue'
	import RandomUserVue from '@/components/RandomUser.vue'
	import StopwatchVue from '@/components/Stopwatch.vue'
	import AgeCalculatorVue from '@/components/AgeCalculator.vue'
	import MovieSearchVue from '@/components/MovieSearch.vue'
	import TodoListVue from '@/components/TodoList.vue'
	import Slider from '@/components/Slider.vue'
	import { ref } from 'vue'
	const titlevalue = ref('Age Calculator')
	const dialogProjects = ref(false)
	const componentList = ref([
		{ id: 1, name: 'Age Calculator', icon: 'mdi-cake-variant-outline', isActive: true },
		{ id: 2, name: 'Alarm', icon: 'mdi-alarm', isActive: false },
		{ id: 3, name: 'Calculator', icon: 'mdi-calculator', isActive: false },
		{ id: 4, name: 'Currency', icon: 'mdi-currency-usd', isActive: false },
		{ id: 5, name: 'Image Uploader', icon: 'mdi-image-album', isActive: false },
		{ id: 6, name: 'Metronome', icon: 'mdi-metronome', isActive: false },
		{ id: 7, name: 'Movie Search', icon: 'mdi-movie-search-outline', isActive: false },
		{ id: 8, name: 'New Year Counter', icon: 'mdi-counter', isActive: false },
		{ id: 9, name: 'Password Generator', icon: 'mdi-lock-plus-outline', isActive: false },
		{ id: 10, name: 'Gender Predictor', icon: 'mdi-gender-male', isActive: false },
		{ id: 11, name: 'QR Generator', icon: 'mdi-qrcode-plus', isActive: false },
		{
			id: 12,
			name: 'Random User Generator',
			icon: 'mdi-account-plus-outline',
			isActive: false,
		},
		{ id: 13, name: 'Stopwatch', icon: 'mdi-timer-plus-outline', isActive: false },
		{ id: 14, name: 'String Properties', icon: 'mdi-code-array', isActive: false },
		{ id: 15, name: 'Tic Tac Toe', icon: 'mdi-close-thick', isActive: false },
		{ id: 16, name: 'Todo List', icon: 'mdi-list-status', isActive: false },
		{ id: 17, name: 'Wheater App', icon: 'mdi-weather-cloudy', isActive: false },
		// { id: 17, name: "Slider Test", icon: "mdi-slide", isActive: false },
	])
	const showProject = (componente) => {
		componentList.value.forEach((item) => {
			if (item.name == componente) {
				item.isActive = true
				titlevalue.value = item.name
				dialogProjects.value = true
			} else {
				item.isActive = false
			}
		})
	}

	const proyectosExternos = ref([
		{
			id: 1,
			name: 'WhatsApp Clone',
			img: 'https://i.ibb.co/5225djK/whatsappcaptura.jpg',
			url:
				'https://drive.google.com/file/d/1uKl2h6TW3mxeDYpfjH79Fn5op7v35QKY/view?usp=sharing',
			info: 'Clone de whatsapp creado con Nextjs y Nodejs',
		},
		{
			id: 2,
			name: 'Hotel del Ángel',
			img: '../assets/hotel.png',
			url: 'http://www.hoteldelangel.com.mx/',
			info: 'Página creada con HTMl CSS y JavaScript para una empresa hotelera.',
		},

		{
			id: 3,
			name: 'Gestion de Producción',
			img: 'https://i.ibb.co/N9wxf55/Acrilicos.png',
			url: 'https://i.ibb.co/N9wxf55/Acrilicos.png',
			info:
				'Proyecto de gestion de producción, control de inventarios y reportes con API Rest no tengo los derechos para mostrarlo.',
			extra: 'Solo hay imagen, no hay proyecto desplegado',
		},
		{
			id: 4,
			name: 'Lector y Generador de QR',
			img: 'https://i.ibb.co/nn691vZ/barcodes.png',
			url: 'https://i.ibb.co/nn691vZ/barcodes.png',
			info:
				'Aplicación móvil de control de códigos QR, lector y generador, no tengo derechos sobre el código',
			extra: 'Solo hay imagen, no hay proyecto desplegado',
		},
		{
			id: 5,
			name: 'Pokemon API',
			img: '../assets/PokeApi.png',
			url: 'https://pokemon-api-by-julio-campos.netlify.app/',
			info: 'Aplicación que consume la PokeAPI, guarda información en localstorage',
		},
		{
			id: 6,
			name: 'Rick and Morty API',
			img: '../assets/Rick.png',
			url: 'https://rick-and-morty-api-by-julio-campos.netlify.app/',
			info:
				'Mi primer aplicación creada, muestra información de personajes, contiene paginación',
		},
		{
			id: 7,
			name: 'WikiCat',
			img: 'https://i.ibb.co/WVGYXMX/wikicat.png',
			url: 'https://wikicat.vercel.app/',
			info:
				'Aplicacion sencilla que consume una API de razas de gatos y hace busquedas interna',
		},

		{
			id: 8,
			name: 'MyUnsplash',
			img: 'https://i.ibb.co/nLP4Vmt/unsplash.png',
			url: 'https://my-unsplash-murex.vercel.app/',
			info:
				'Aplicacion que utiliza una API propia creada con Laravel que esta almacenado en un host gratuito',
		},
		{
			id: 9,
			name: 'IMG Uploader + API',
			img: 'https://i.ibb.co/Q92tDsC/uploader.png',
			url: 'https://img-uploader-front.vercel.app/',
			info:
				'Aplicacion que utiliza una API propia creada con Laravel, almacena las imagenes y te proporciona un link para compartirlas',
		},
		{
			id: 10,
			name: 'Catálogo de películas',
			img: '../assets/netflix.png',
			url: 'https://netflix-clone-vuetify.vercel.app/',
			info:
				'Aplicación creada utilizando API de peliculas y API de Google para mostrar los trailers.',
		},
	])
</script>

<style scoped>
	.textClick {
		cursor: pointer;
	}
	.descripcion {
		font-size: 0.7rem;
		color: cornflowerblue;
	}
	.info {
		font-size: 0.7rem;
	}
	.imagen:hover {
		-webkit-transform: scale(1.2);
		transform: scale(1.2);
	}
	.imagen {
		min-width: 120px;
		min-height: 120px;
	}
	.iconos:hover {
		-webkit-transform: scale(1.2);
		transform: scale(1.2);
	}
</style>
