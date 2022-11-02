<template>
    <div class="col d-flex justify-content-center py-4">
        <div class="card" style="width: 18rem;">
            <img v-if="post.cover_path" :src="post.cover_path" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">TITOLO: {{post.title}}</h5>
                <p class="card-text">DATA: {{post.date}}</p>
              
            </div>
        </div>
        

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