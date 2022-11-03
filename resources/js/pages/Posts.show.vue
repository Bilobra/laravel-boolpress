<template>
    <div v-if="post">
        <section class="py-5">
            <img v-if="post.cover_path" :src="post.cover_path" alt="">

            <div class="container">
                <h2>{{ post.title }}</h2>

            </div>
        </section>
        <section class="py-3">
            <div class="container">
                <h4>{{ post.category?.name }}</h4>

                <Tag :tags="post.tags" />
            </div>
        </section>
        <section class="py-3">
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
        fetchPost() {
            axios.get(`/api/posts/${this.slug}`).then(res => {

                // console.log(res)

                const { post } = res.data

                this.post = post

            }).catch((err) => {
                // console.log(err)
                const { status } = err.response

                if (status === 404) {
                    this.$router.replace({ name: '404' })
                }
            })
        }
    },


    created() {
        this.fetchPost()
    }
}
</script>

<style lang="scss" scoped>

</style>