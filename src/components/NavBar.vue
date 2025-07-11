<template>
  <nav class="sticky top-0 flex gap-4 p-4 bg-background text-text">
    <div class="container px-4 mx-auto relative">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <img src="/black-hole.png" alt="Black Hole Icon" class="h-8 w-8" />
          <div class="text-lg font-bold">Laniakea Series</div>
        </div>
        <div class="flex items-center gap-4">
          <router-link to="/" class="no-underline" :class="{ 'font-bold': $route.path === '/' }">Home</router-link>
          <router-link to="/books" class="no-underline"
            :class="{ 'font-bold': $route.path === '/books' }">Books</router-link>
          <router-link to="/gallery" class="no-underline"
            :class="{ 'font-bold': $route.path === '/gallery' }">Gallery</router-link>
          <router-link to="/blog" class="no-underline"
            :class="{ 'font-bold': $route.path === '/blog' }">Blog</router-link>
          <router-link to="/about" class="no-underline"
            :class="{ 'font-bold': $route.path === '/about' }">About</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
