<template>
    <div>
        <section>
            <div class="container">
               <h2>Pagina dettaglio</h2>
               <p>{{slug}}</p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        props: ['slug'],
        data() {
            return {
                post:null
            }
        },
        methods:{
            fetchPosts(){
                axios.get(`api/posts/${this.slug}`).then(res=>{
                    console.log(res.data)
                }).catch(err=>{
                    console.log(err)
                })
            }
        },
        beforeMount(){
            this.fetchPosts()
        }
    }
</script>

<style lang="scss" scoped>

</style>