<template>
    <div class="container text-center">

        <h3>Blog:</h3>
        <section class="row justify-content-between align-items-center py-5">
            <PostCard v-for="post in posts" :key="post.id" :post="post"></PostCard>>

        </section>
    </div>
</template>

<script>
import PostCard from '../components/PostCard.vue';
export default {
    components: {
        PostCard,
    },
    data() {
        return {
            posts: [],
        }
    },

    methods: {
        fetchPosts() {
            axios.get('/api/posts').then((res) => {
                // console.log(res.data.result)
                // const {posts} = res.data.result
                // console.log(posts);
                this.posts = res.data.result

            })
        }
    },

    beforeMount() {
        this.fetchPosts()
    }
}
</script>

<style lang="scss" scoped>

</style>