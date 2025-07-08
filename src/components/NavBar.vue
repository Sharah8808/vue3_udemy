<template>
  <nav class="sticky top-0 flex gap-4 p-4 bg-background text-text">
    <div class="container px-4 mx-auto relative">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
                <img src="/black-hole.png" alt="Black Hole Icon" class="h-8 w-8">
            </div>
            <div class="text-lg font-bold">Laniakea Series</div>
            

        </div>
    </div>
    <router-link
      to="/"
      class="no-underline"
      :class="{ 'font-bold': $route.path === '/' }"
      >Home</router-link
    >
    <router-link
      to="/about"
      class="no-underline"
      :class="{ 'font-bold': $route.path === '/about' }"
      >About</router-link
    >
  </nav>
</template>

<style scoped>
/* .navbar {
    display: flex;
    gap: 1rem;
    padding: 1rem;
}

.nav-link {
    text-decoration: none;
}

.nav-link.router-link-active {
    font-weight: bold;
    
} */
</style>
