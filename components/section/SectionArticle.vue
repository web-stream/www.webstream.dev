<template>
  <section
    class="
      float-left
      w-full
      text-white
      font-SourceSansPro
      relative
      overflow-hidden
      bg-webstream
    "
  >
    <div class="container mx-auto">

      <div class="relative z-10 flex items-center justify-items-start">
        {{ title }}
      </div>

      <p>Path: {{ $route.path }}</p>

    </div>

    <div class="container mx-auto">
      {{ content }}
    </div>
    <hr>
    <prev-next :prev="prev" :next="next" />
    <hr>
  </section>
</template>
<script>

import axios from 'axios'

export default {
  modules: [
    // Using package name
    '@nuxtjs/axios',
  ],

  data() {
    return {
      title: 'route.path',
      content: 'article.content',
      prev: 'prev',
      next: 'next'
    }
  },

  async fetch() {
    const {data} = await axios.get(
      "http://localhost:3000/html/docs.md.html"
    )
    // `todos` has to be declared in data()
    this.content = data
  }

}


/*
export default {
  data() {
    return {
      title: 'route.path',
      content: 'article.content',
      prev: 'prev',
      next: 'next'
    }
  },
   async asyncData(context) {

   // const data = await context.$axios.$get(
    //  `/html/docs.md.html`
   // )

    return {
      title: 'title1',
      content: 'article.content1',
      prev: 'prev1',
      next: 'next2'
    }
  }
}
  /*
  async asyncData({ params, redirect, route }) {

    const { slug } = route.params
    if (!slug) {

    }
    if (!slug) {
      return error({
        statusCode: 404,
        message: 'Partner not found'
      })
    }


    //console.log('params',params);

    const article = {
      title: route.path,
      content: article.content
    }
    if (article) {
      return {
        title: article.title,
        content: article.content
      }
    } else {
      redirect('/')
    }
  }
}
/*
export default {
  async asyncData() {
    const mountains = await fetch(
      'https://api.nuxtjs.dev/mountains'
    ).then((res) => res.json())

    //return { mountains }
    //return {title:"title",article:"articledata"}
  }
};

 */
</script>
