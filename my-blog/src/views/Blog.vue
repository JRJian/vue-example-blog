<template>
    <div>
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
    </div>
</template>

<script>
export default {
    name: 'Blog',
    data() {
        return {
            id: this.$route.params.id,
            blog: {},
        }
    },
    created() {
        this.axios
        .get('http://jsonplaceholder.typicode.com/posts/' + this.id)
        .then (res => {
            this.blog = res['data']
        })
    }
}
</script>

<style>

</style>
