<template>
    <div class="container">
        <!-- <div class="card" style="width: 18rem;">
            <img v-if="post.cover" :src="post.cover" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">titolo:{{post.title}}</h5>
                <p class="card-text">{{post.date}}</p>
              
            </div>
        </div> -->
        <img v-if="post.cover" :src="post.cover" class="card-img-top" alt="...">

    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    }
}

</script>