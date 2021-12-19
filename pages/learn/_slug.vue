<template>
  <div class="bg-webstream">
    <BannerTop
      bannerText="We are improving the <b>WebStream</b>! Subscribe newsletter to stay up to date."
      bannerTarget="/"
    />

    <AppHeader :links="linkList"/>
    <AppBlurBackgroundMenu :links="linkList" />

    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <hr>
    <nuxt-content :document="page"/>
    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkList: require('../../menu.json').linkList,
      page: {title:"title1",description:"description1"}
    }
  },
  async asyncData({ $content, params, error }) {
    const slug = params.slug || "index";
    const page = await $content(slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      page
    };
  }
};
</script>
