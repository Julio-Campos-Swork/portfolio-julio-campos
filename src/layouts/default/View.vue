<template>
	<v-main>
		<div data-aos="fade-up">
			<Home />
		</div>
		<hr />
		<div data-aos="fade-up">
			<Skills />
		</div>
		<hr />
		<div data-aos="fade-up">
			<ProjectsVue />
		</div>
		<hr />
		<div data-aos="fade-up">
			<About />
		</div>
		<hr />
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
