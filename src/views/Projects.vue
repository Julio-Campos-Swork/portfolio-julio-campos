<template>
	<v-container id="proyectos" class="pt-1">
		<p class="text-center text-h3 py-10 text-focus-in">Proyectos</p>
		<v-row justify="center">
			<v-col
				cols="12"
				sm="6"
				md="4"
				lg="3"
				v-for="proyectos in proyectosExternos"
				:key="proyectos.id"
			>
				<v-card color="accent" elevation="10" rounded="xl" border="true">
					<v-card-title class="text-center text-h6 py-4">{{
						proyectos.name
					}}</v-card-title>
					<v-card-text>
						<a :href="proyectos.url" target="_blank"
							><v-img
								class="h-0 w-100 imagen rounded-xl"
								cover
								:src="proyectos.img"
							></v-img
						></a>
						<p class="text-center text-body-2 pt-4 d-none d-md-block">
							{{ proyectos.info }}
						</p>
						<p class="text-center text-body-2 pt-4 d-block d-md-none">
							{{ proyectos.info }}
						</p>
						<br />
						<div class="d-flex justify-center">
							<img
								:src="icon"
								v-for="icon in proyectos.tecnologias"
								class="px-2 iconFrameworks"
							/>
						</div>
						<br />
						<a :href="proyectos?.source" class="d-flex justify-center" target="_blank"
							><v-icon icon="mdi-github" size="large" class="py-2"></v-icon
						></a>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
		<p class="pt-8 text-center">
			<span class="text-h6 text-red">Importante:</span><br />
			Los proyectos empresariales no los muestro por terminos de confidencialidad con la
			empresa.
		</p>
	</v-container>
	<v-divider></v-divider>
	<div data-aos="fade-up">
		<v-container class="mb-2">
			<p class="text-center text-h5 mb-6 mt-6 text-focus-in">Proyectos integrados</p>
			<p class="text-center text-subtitle-1 mb-4 mt-4">
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
					<p
						@click="showProject(components.name)"
						class="textClick text-subtitle-1 mt-2 d-none d-md-block"
					>
						{{ components.name }}
					</p>
					<p
						@click="showProject(components.name)"
						class="textClick text-caption mt-2 d-block d-md-none"
					>
						{{ components.name }}
					</p>
				</v-col>
			</v-row>
			<v-dialog v-model="dialogProjects" max-width="500" contained>
				<v-card
					color="accent"
					elevation="10"
					rounded="lg"
					border="true"
					class="overflow-y-auto"
					><div class="d-flex justify-end pr-4 pt-4">
						<v-icon
							size="x-large"
							class="closeButon rounded-lg"
							@click="dialogProjects = !dialogProjects"
							>mdi-close</v-icon
						>
					</div>
					<v-card-title class="text-center text-primary py-1"
						>{{ titlevalue }}
					</v-card-title>
					<v-card-text class="d-flex justify-center">
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
					</v-card-text>
				</v-card>
			</v-dialog>
			<p class="text-center text-caption pt-8 pb-4">
				Estos proyectos fueron creados con el proposito de practicar y reutilizar código,
				algunos son adaptaciones de otros lenguajes.
			</p>
		</v-container>
	</div>
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
	import { ref } from 'vue'

	//iconos
	import html from '@/assets/html.svg'
	import css from '@/assets/css.svg'
	import vue from '@/assets/vue.svg'
	import nuxt from '@/assets/nuxt.svg'
	import vuetify from '@/assets/vuetify.svg'
	import astro from '@/assets/astro.svg'
	import tailwind from '@/assets/tailwind.svg'
	import Bootstrap from '@/assets/bootstrap.svg'
	import react from '@/assets/react.svg'
	import next from '@/assets/next.svg'
	import php from '@/assets/php.svg'
	import laravel from '@/assets/laravel.svg'
	import mysql from '@/assets/mysql.svg'
	import node from '@/assets/node.svg'
	import prisma from '@/assets/prisma.svg'
	import ionic from '@/assets/ionic.svg'
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
			id: 2,
			name: 'Hotel del Ángel',
			img: '../assets/hotel.png',
			url: 'https://hoteldelangel.com.mx/public/misitio/',
			info: 'Desarrollado con:',
			tecnologias: [astro, tailwind, vue, css],

			source: 'https://hoteldelangel.com.mx/public/misitio/',
		},
		{
			id: 12,
			name: 'Car landing Page',
			img: 'https://i.ibb.co/Rc0QpXT/carhub.png',
			url: 'https://nextjs-carhub-aplication.vercel.app/',
			info: 'Desarrollado con:',
			tecnologias: [next, react, tailwind],

			source: 'https://github.com/Julio-Campos-Swork/nextjs-carhub-aplication',
		},

		{
			id: 13,
			name: 'TikTok Clone',
			img: '../assets/tiktok.png',
			url: 'https://github.com/Julio-Campos-Swork/tik-tok-clone-front/',
			info: 'Desarrollado con: (No desplegado)',
			tecnologias: [nuxt, tailwind, vue, laravel],

			source: 'https://github.com/Julio-Campos-Swork/tiktok-clone-api',
		},
		{
			id: 1,
			name: 'WhatsApp Clone',
			img: 'https://i.ibb.co/5225djK/whatsappcaptura.jpg',
			url:
				'https://drive.google.com/file/d/1uKl2h6TW3mxeDYpfjH79Fn5op7v35QKY/view?usp=sharing',
			info: 'Desarrollado con: (No desplegado)',
			tecnologias: [next, react, tailwind, prisma, node],
			source: 'https://github.com/Julio-Campos-Swork/nuxt-whatsapp-clone',
		},

		{
			id: 5,
			name: 'Pokemon API',
			img: '../assets/PokeApi.png',
			url: 'https://pokemon-api-by-julio-campos.netlify.app/',
			info: 'Desarrollado con:',
			tecnologias: [vue, vuetify],

			source: 'https://github.com/Julio-Campos-Swork/poke-api-Julio-Campos',
		},
		{
			id: 14,
			name: 'Calculadora',
			img: '../assets/calculadora.png',
			url: 'https://calculator-react-two-sand.vercel.app/',
			info: 'Desarrollado con:',
			tecnologias: [react, css],

			source: 'https://github.com/Julio-Campos-Swork/calculator-react',
		},
		{
			id: 15,
			name: 'Todo-list',
			img: '../assets/todo.png',
			url: 'https://todo-list-react-psi-nine.vercel.app/',
			info: 'Desarrollado con:',
			tecnologias: [react, tailwind, css],

			source: 'https://github.com/Julio-Campos-Swork/todo-list-react',
		},
		{
			id: 6,
			name: 'Rick and Morty API',
			img: '../assets/Rick.png',
			url: 'https://rick-and-morty-api-by-julio-campos.netlify.app/',
			info: 'Desarrollado con:',
			tecnologias: [vue, vuetify],

			source: 'https://github.com/Julio-Campos-Swork/rick-morty',
		},
		{
			id: 7,
			name: 'WikiCat',
			img: 'https://i.ibb.co/WVGYXMX/wikicat.png',
			url: 'https://wikicat.vercel.app/',
			info: 'Desarrollado con:',
			tecnologias: [vue, vuetify],

			source: 'https://github.com/Julio-Campos-Swork/wikicat',
		},

		{
			id: 8,
			name: 'MyUnsplash',
			img: 'https://i.ibb.co/nLP4Vmt/unsplash.png',
			url: 'https://my-unsplash-murex.vercel.app/',
			info: 'Desarrollado con:',
			tecnologias: [vue, vuetify],

			source: 'https://github.com/Julio-Campos-Swork/mySplash-front',
		},
		{
			id: 9,
			name: 'IMG Uploader + API',
			img: 'https://i.ibb.co/Q92tDsC/uploader.png',
			url: 'https://img-uploader-front.vercel.app/',
			info: 'Desarrollado con:',
			tecnologias: [vue, vuetify, laravel],

			source: 'https://github.com/Julio-Campos-Swork/img-uploader-front',
		},
		{
			id: 10,
			name: 'Catálogo de películas',
			img: '../assets/netflix.png',
			url: 'https://netflix-clone-vuetify.vercel.app/',
			info: 'Desarrollado con:',
			tecnologias: [vue, vuetify],

			source: 'https://github.com/Julio-Campos-Swork/netflix-clone-vuetify',
		},
		{
			id: 3,
			name: 'Gestion de Producción',
			img: 'https://i.ibb.co/N9wxf55/Acrilicos.png',
			url: 'https://i.ibb.co/N9wxf55/Acrilicos.png',
			info: 'Desarrollado con:',
			tecnologias: [vue, vuetify, laravel],

			source: 'https://github.com/Julio-Campos-Swork',
		},
		{
			id: 4,
			name: 'Lector y Generador de QR',
			img: 'https://i.ibb.co/nn691vZ/barcodes.png',
			url: 'https://i.ibb.co/nn691vZ/barcodes.png',
			info: 'Desarrollado con:',
			tecnologias: [ionic, vue, vuetify, laravel],

			source: 'https://github.com/Julio-Campos-Swork',
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
	.imagen {
		transition: transform 0.2s ease-in-out;
	}
	.imagen:hover {
		transform: scale(1.1);
	}
	.iconos:hover {
		-webkit-transform: scale(1.2);
		transform: scale(1.2);
	}
	.closeButon {
		transition: all 0.2s ease-out;
	}
	.closeButon:hover {
		/* -webkit-transform: scale(1.2); */
		transform: scale(1.1);
		background-color: rgba(62, 57, 57, 0.126);
	}

	@keyframes show {
		from {
			opacity: 0;
			scale: 25%;
		}
		to {
			opacity: 1;
			scale: 100%;
		}
	}
	.imagen {
		min-width: 120px;
		min-height: 180px;
		view-timeline-name: --image;
		view-timeline-axis: block;
		animation-timeline: --image;
		animation-name: show;
		animation-range: entry 25% cover 30%;
		animation-fill-mode: both;
	}
	a:link,
	a:visited,
	a:active {
		text-decoration: none;
		/* color: azure; */
	}
	.iconFrameworks {
		width: 15%;
	}
	.fuente {
		font-size: 0.6rem;
	}
</style>
