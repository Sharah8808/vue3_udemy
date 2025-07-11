import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Books from "../components/Books.vue";
import Gallery from "../components/Gallery.vue";
import Blog from "../components/Blog.vue";

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: "About", component: About},
    {path: '/books', name: "Books", component: Books},
    {path: '/gallery', name: "Gallery", component: Gallery},
    {path: '/blog', name: "Blog", component: Blog},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;