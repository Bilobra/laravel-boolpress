<template>
    <div class="container">
        <PostCard v-for="post in posts" :key="post.id" :post="post"></PostCard>>
    </div>


</template>

<script>
import PostCard from '../components/PostCard.vue'
export default {

    components: {
        PostCard
    },
    data() {
        return {
            posts: [],
        }
    },

    methods: {
        fetchPosts() {
            axios.get('/api/posts').then((res) => {
                // console.log(res.data)
                const {posts} = res.data
                this.posts = posts
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