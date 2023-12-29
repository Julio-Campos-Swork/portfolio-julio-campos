<template>
	<v-container id="experience" class="pt-4 w-sm-75">
		<p class="text-center text-h3 py-8 text-focus-in">Experiencia</p>

		<v-expansion-panels variant="inset" class="my-4">
			<v-expansion-panel v-for="item in experience" :key="item">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
					<p class="text-text-subtitle-1 text-start py-2">
						{{ item.title }} - {{ item.date }}
					</p>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
					<p
						class="py-1 text-start text-subtitle-1 text-deep-purple-lighten-1 font-weight-bold"
					>
						Actividades
					</p>

					<p class="py-2 text-start text-caption">- {{ item.text }}</p>
					<p
						class="py-2 text-start text-subtitle-1 text-deep-purple-lighten-1 font-weight-bold"
					>
						Logros
					</p>
					<p class="py-2 text-start text-caption">- {{ item.achievements }}</p>
				</v-expansion-panel-text>
			</v-expansion-panel>
		</v-expansion-panels>
	</v-container>
</template>

<script setup>
	const experience = [
		{
			title: 'Plásticos Especiales Garen',
			date: 'Junio 2022 - Actualmente',
			text:
				'Responsable del mantenimiento y actualización de sistemas de producción y de administración, así como la creación de soluciones adaptadas a las necesidades específicas. Enfoque en la resolución de problemas complejos mediante la implementación de sistemas innovadores.',
			achievements:
				'Participé en la actualización de tres proyectos y la creación de cinco nuevos sistemas. Tres de estos proyectos han sido implementados con éxito, mientras que dos se encuentran en desarrollo activo.',
		},
		{
			title: 'Grupo IPAG',
			date: 'Marzo 2020 - Enero 2022',
			text:
				'Encargado del control y gestión de inventarios, así como el diseño y mantenimiento de un sistema ERP. Enfoque en optimizar la gestión de recursos y la eficiencia operativa a través de soluciones tecnológicas.',
			achievements:
				'Dirigí la organización de inventarios y desarrollé un sistema capaz de monitorear y mejorar el rendimiento de ventas, además de integrar APIs de terceros para maximizar la funcionalidad del sistema.',
		},
		{
			title: 'Presidencia Municipal',
			date: 'Enero 2019 - Junio 2019',
			text:
				'Encabezé la creación y gestión del sitio web de la presidencia municipal de Apizaco. Comprometido en presentar información de manera clara y accesible para los ciudadanos.',
			achievements:
				'Organicé y estructuré de manera eficiente toda la información de la presidencia, incluyendo documentos públicos y privados para garantizar transparencia y accesibilidad.',
		},
		{
			title: 'Freelancer',
			date: '2017 - 2019',
			text:
				'Consultor en diversos proyectos, proporcionando soluciones tecnológicas a medida para negocios locales. Especializado en el desarrollo de sistemas de punto de venta adaptados a las necesidades específicas del cliente.',
			achievements:
				'Desarrollé dos sistemas clave: un punto de venta para un restaurante y otro para una lavandería, ofreciendo soluciones personalizadas que mejoraron la eficiencia y la experiencia del cliente.',
		},
	]
</script>
