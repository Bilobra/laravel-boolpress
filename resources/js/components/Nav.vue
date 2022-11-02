<template>
    <header class="pb-5">
        <nav class=" navbar navbar-dark bg-dark py-3 text-white">
            <div class=" container d-flex justify-content-between items-center">
                <div>
                    Logo
                </div>
                <ul class="d-flex items-center list-unstyled m-0">
                    <li v-for="(link,i) in navLinks" :key="i" class="mx-3">
                        <router-link :to="{name: link.name}" class="text-decoration-none text-white">{{link.text}}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                navLinks:[
                    {
                       text: 'Home',
                       path: '/',
                       name: 'home'
                    },
                    {
                       text: 'Chi Siamo',
                       path: '/chi-siamo',
                       name: 'about-us'
                    },
                    {
                       text: 'Contatti',
                       path: '/contatti',
                       name: 'contact-us'
                    },
                    {
                       text: 'Blog',
                       path: '/blog',
                       name: 'posts.index'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>