<template>
  <div class="
      float-left
      w-full
      text-white
      font-SourceSansPro
      relative
      overflow-hidden
      bg-webstream
    ">

    <BannerTop
      bannerText="We are improving the <b>WebStream</b>! Subscribe newsletter to stay up to date."
      bannerTarget="/"
    />

    <AppHeader :links="linkList"/>
    <AppBlurBackgroundMenu :links="linkList" />

      <div class="container mx-auto">
        <div class="relative z-10 flex items-center justify-items-start">

          <div
            class="
      px-6 px-10
      md:px-20
      lg:px-20
      xl:px-5
      2xl:px-20
      py-56
      mx-auto
      sm:mx-0
      float-left
      grid
      justify-items-stretch
    "
          >
            <h1 class="text-4xl text-center my-3 font-DMSans">{{page.title}}</h1>
            <h2 class="text-xl text-center my-3 font-DMSans">{{page.description}}</h2>

            <button
              class="
      px-4
      py-2
      rounded-full
      text-sm
      font-medium
      hover:bg-transparent hover:text-webstream-light
      border-2 border-webstream-light
      transition
      text-white
      bg-webstream-light
      relative
      justify-self-end
    "
              type="submit"
              href="/"
            >
              {{ page.title }}
            </button>
          </div>

          <h1>{{ page.title }}</h1>
          <p>{{ page.description }}</p>


        </div>

        <LandingBackground />

      </div>


  </div>
</template>

<script>

export default {
  modules: [
    '@nuxt/content'
  ],
  data() {
    return {
      linkList: require('../../menu.json').linkList,
       page: {title:"title1",description:"description1"}
    }
  },
  async asyncData({ $content, params, error }) {
    const slug = params.slug || "index";

    let page = await $content(slug)
      .fetch()
      .catch(err => {
        //error({ statusCode: 404, message: "Page not found" });
        return {
          title:slug,
          description:"error"
        };
      });

    return {
      page
    };
  }
};
</script>
