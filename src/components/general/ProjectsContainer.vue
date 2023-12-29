<template>
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
						class=". text-subtitle-1 mt-2 d-none d-md-block"
					>
						{{ components.name }}
					</p>
					<p
						@click="showProject(components.name)"
						class=". text-caption mt-2 d-block d-md-none"
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
					<v-card-title class="text-center p-0">{{ titlevalue }} </v-card-title>
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
</script>

<style>
	.textClick {
		cursor: pointer;
	}
	.descripcion {
		font-size: 0.7rem;
		color: cornflowerblue;
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
