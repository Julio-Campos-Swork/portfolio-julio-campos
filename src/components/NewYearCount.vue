<template>
	<v-card elevation="24" class="mb-8 mt-4 contenedor w-100 h-100" rounded="xl">
		<v-card-text>
			<v-container fluid>
				<h1 class="text-center text-white">Time Until New Year</h1>
				<v-row justify="space-between" class="mt-4 mb-4">
					<p class="text-h6 text-white">Days</p>
					<p class="text-h6 text-white">Hours</p>
					<p class="text-h6 text-white">Minutes</p>
					<p class="text-h6 text-white">Seconds</p>
				</v-row>
				<v-row justify="space-between" class="mt-4">
					<v-label class="text-white font-weight-bold">{{ dayV }}</v-label>
					<v-label class="text-white font-weight-bold">{{ hourV }}</v-label>
					<v-label class="text-white font-weight-bold">{{ minutesV }}</v-label>
					<v-label class="text-white font-weight-bold">{{ secondsV }}</v-label>
				</v-row>
			</v-container>
		</v-card-text>
	</v-card>
	<v-snackbar v-model="snackbar" multi-line>
		HAPPY NEW YEAR - FELIZ AÑO NUEVO

		<template v-slot:actions>
			<v-btn color="red" variant="text" @click="snackbar = false"> Close </v-btn>
		</template>
	</v-snackbar>
</template>

<script setup>
	import { ref } from 'vue'

	const dayV = ref(0)
	const hourV = ref(0)
	const minutesV = ref(0)
	const secondsV = ref(0)

	const snackbar = ref(false)
	let endDate = new Date(2025, 0, 1, 0, 0)
	let endTime = endDate.getTime()
	const countdown = () => {
		let todayDate = new Date()
		let todayTime = todayDate.getTime()
		let remainingTime = endTime - todayTime
		let oneMin = 60 * 1000
		let oneHr = 60 * oneMin
		let oneDay = 24 * oneHr

		let addZeroes = (num) => (num < 10 ? `0${num}` : num)

		let daysLeft = Math.floor(remainingTime / oneDay)
		let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr)
		let minsLeft = Math.floor((remainingTime % oneHr) / oneMin)
		let secsLeft = Math.floor((remainingTime % oneMin) / 1000)
		if (endTime < todayTime) {
			clearInterval(i)
			snackbar.value = true
		} else {
			dayV.value = addZeroes(daysLeft)
			hourV.value = addZeroes(hrsLeft)
			minutesV.value = addZeroes(minsLeft)
			secondsV.value = addZeroes(secsLeft)
		}
	}
	let i = setInterval(countdown, 1000)
	countdown()
</script>

<style scoped>
	.contenedor {
		background-image: url('https://cdn.pixabay.com/photo/2014/12/21/07/49/fireworks-574739_1280.jpg');
		background-size: cover;
		width: 400px;
	}
</style>
