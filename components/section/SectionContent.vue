<template>
  <div className="container mx-auto py-8">
    <div className="editorContainerBox py-8 drop-shadow-2xl">
      <client-only placeholder="Loading an example...">
        <div className="h-full">
          <span>CONTENT</span>
          <div>
            <h1>{ post.title }}</h1>
            <p>{ post.description }}</p>
          </div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  async asyncData({ params, $http }) {
    //const { slug } = route.params
    const post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
    return { post }
  }
}
</script>

