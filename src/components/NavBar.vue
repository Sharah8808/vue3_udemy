<template>
    <nav class="navbar">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>   
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    gap: 1rem;
    background-color: #222;
    padding: 1rem;
}

.nav-link {
    color: white;
    text-decoration: none;
}

.nav-link.router-link-active {
    font-weight: bold;
    border-bottom: 2px solid #fff;
}
</style>