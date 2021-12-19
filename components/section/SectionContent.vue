<template>
  <div className="container mx-auto py-8">
    <div className="editorContainerBox py-8 drop-shadow-2xl">
      <client-only placeholder="Loading an example...">
        <div className="h-full">
          <span>CONTENT</span>
          <div>
            <span>{{ slug }}</span>
            <hr>
            <h1>{{ title }}</h1>
            <p>{{ content }}</p>
          </div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: 'title',
      content: 'content',
      slug: 'slug',
      prev: 'prev',
      next: 'next'
    }
  },

  async fetch(params) {
    const { slug } = route.params
    const { idp } = params.id

    // `todos` has to be declared in data()
    this.slug = idp
  }
  /*
  async asyncData({ params, $http, route }) {
    const { slug } = route.params
    const { idp } = params.id
    //const post = await $http.$get(`http://localhost:3000/html/${idp}.md.html`)
    const post = await $http.$get(`http://localhost:3000/html/case-studies.md.html`)
    return {
      content: 'post',
      title: params.id,
      slug: slug
    }
  }

   */
}
</script>

