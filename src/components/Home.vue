<script setup>
import { onMounted, ref } from "vue";

function openWattpad() {
  window.open('https://www.wattpad.com/user/SHARAH880', '_blank');
}

</script>

<template>
  <div class="bg-background text-text">
    <div class="flex items-center justify-start bg-cover bg-no-repeat px-40" :style="{
      backgroundImage: `url('/images/northernmaersmlr.jpg')`,
      height: '900px',
      WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
      maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
    }">

      <div class="justify-start text-left text-whitePurple">
        <p class="text-xl">Craving for guns, magic, multiverse, blood, and JoJo Reference genres novel?</p>
        <h1 class="text-6xl py-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-white mb-4">
          Look No Further <br /> To Our Otherworldly Journey <br /> In Laniakea Series
        </h1>
        <button class="mt-32 px-6 py-3 bg-accent text-whitePurple rounded-lg hover:bg-secondary transition"
          @click="openWattpad">
          Read in Wattpad
        </button>
      </div>
    </div>

    <div class="px-40 py-16 text-text">
      <div class="flex flex-row">
        <div class="basis-1/5 text-left space-y-8">
          <p class="">Fantasy</p>
          <p class="">Sci-Fi</p>
          <p class="">Horror</p>
          <p class="">Comedy</p>
          <p class="">Drama</p>
          <p class="">Potato Chips</p>
          <p>Squirrels</p>
        </div>
        <div class="basis-2/5 space-y-16 text-start ">
          <h2 class="text-2xl font-bold mb-4">What is this?</h2>
          <p class="text-lg leading-loose">
            Imagine Harry Potter, Marvel Universe, Honkai Star Rail and Homestuck combined! <br /> <br />
            Multiple character stories wrapped up in one universe -or more-, blend in together, affecting one another,
            and travels from one planet to another.
            <br /> <br />
            Bringing what is supposed to be a real high fantasy stories into your palm.
          </p>
        </div>
        <div class="basis-2/5 space-y-16 text-start ">
          <img src="/images/astronaut_magic_broom.png" alt="Illustration of Laniakea Series"
            class="w-full h-auto rounded-lg shadow-lg">
        </div>
      </div>
    </div>

  </div>




</template>

<style scoped></style>
