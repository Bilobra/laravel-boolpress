<template>
    <div class="d-flex">
        <p v-for="tag in tags" :key="tag.id">
            {{ tag.name }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        tags: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>