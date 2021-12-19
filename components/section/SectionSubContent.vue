<template>
  <div className="container mx-auto py-8">
    <div className="editorContainerBox py-8 drop-shadow-2xl">
      <client-only placeholder="Loading an example...">
        <div className="h-full">
          <span>CONTENT</span>
          <div>
            <h1>{{ slug }}</h1>

          </div>
        </div>
      </client-only>
    </div>
  </div>
</template>


<script>
export default {
  /*
  data() {
    return {
      page: {title:'page', description:'description'},
      title: 'title',
      content: 'content',
      slug: 'slug',
      prev: 'prev',
      next: 'next'
    }
  },
   */
  async asyncData({$content, params, error}) {
    const slug = params.slug || "index";

    /*
    let page = await $content(slug)
      .fetch()
      .catch(err => {
        error({statusCode: 404, message: "Page not found"});
      });
*/
    return {
      slug
    };
  }

};
</script>

