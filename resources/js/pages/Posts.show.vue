<template>
    <div v-if="post">
        <section>
            <img v-if="post.cover_path" :src="post.cover_path" alt="">

            <div class="container">
                <h2>{{ post.title }}</h2>

            </div>
        </section>
        <section>
            <div class="container">
                <h4>{{ post.category?.name }}</h4>

                <Tag :tags="post.tags" />
            </div>
        </section>
        <section>
            <div class="container" v-html="post.content">

            </div>
        </section>
    </div>
</template>

<script>
import Tag from '../components/Tag.vue';
export default {

    components: {
        Tag,
    },

    props: ['slug'],


    data() {
        return {
            post: null
        }
    },


    methods: {
        fetchPosts() {
            axios.get(`api/posts/${this.slug}`).then(res => {

                const { post } = res.data

                this.post = post

            }).catch(err => {
                console.log(err)
            })
        }
    },


    created() {
        this.fetchPosts()
    }
}
</script>

<style lang="scss" scoped>

</style>