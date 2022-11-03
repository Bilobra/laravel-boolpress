<template>
    <div class="container py-5">
        <div class="text-center">
            <h1>404</h1>
            <p>Ops. la pagina che cercavi non esiste</p>
            <router-link :to="{name: 'home'}">
                <p>Torna alla Home!</p>
            </router-link>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>