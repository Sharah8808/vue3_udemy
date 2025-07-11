<template>
	<div class="min-h-screen bg-background text-text">
		<h2 class="text-2xl font-bold pt-8">Blog</h2>
		<div class="mt-4 p-4">
			<p>
				For temporary, this page is dedicated for Vue3 Udemy Project Practice!
				💃💃
			</p>
			<nav class="p-4 flex justify-between items-center">
				<div class="relative" @click="toggleDropdown">
					<button class="px-4 py-4 bg-primary text-text rounded hover:bg-secondary">
						Projects ▼
					</button>
					<ul v-if="showDropdown" class="absolute right-0 mt-2 w-52 bg-primary text-text rounded z-10">
						<li>
							<a href="#project1" class="block px-4 hover:bg-accent">Project 1</a>
						</li>
						<li>
							<a href="#project2" class="block px-4 hover:bg-accent">Project 2</a>
						</li>
					</ul>
				</div>
			</nav>

			<div class="mt-8 px-6">
				<h2 class="text-2xl font-bold">Blog</h2>
				<p class="mt-4">
					This page is dedicated for Vue3 Udemy Project Practice! 💃
				</p>

				<section id="project1" class="mt-10">
					<h3 class="text-xl font-bold">Project 1 - Counter</h3>
					<p>Isi atau komponen counter di sini</p>
				</section>

				<section id="project2" class="mt-10">
					<h3 class="text-xl font-bold">Project 2 - Todo App</h3>
					<p>Isi atau komponen todo app di sini</p>
				</section>

				<section id="project3" class="mt-10">
					<h3 class="text-xl font-bold">Project 3 - Blog Card</h3>
					<p>Isi atau komponen blog card di sini</p>
				</section>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const showDropdown = ref(false);
function toggleDropdown() {
	showDropdown.value = !showDropdown.value;
}
</script>
