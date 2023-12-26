<template>
	<v-main>
		<div data-aos="fade-up">
			<Home />
		</div>
		<v-divider></v-divider>
		<div data-aos="fade-up">
			<ProjectsVue />
		</div>
		<v-divider></v-divider>
		<div data-aos="fade-up">
			<Skills />
		</div>
		<v-divider></v-divider>
		<div data-aos="fade-up">
			<About />
		</div>
		<v-divider></v-divider>
		<div data-aos="fade-up">
			<Contact />
		</div>
	</v-main>
</template>

<script setup>
	import About from '@/views/About.vue'
	import Contact from '@/views/Contact.vue'
	import Home from '@/views/Home.vue'
	import ProjectsVue from '@/views/Projects.vue'
	import Skills from '@/views/Skills.vue'
</script>

<style scoped></style>
