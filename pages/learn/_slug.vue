<template>
  <div class="
      float-left
      w-full
      text-white
      font-SourceSansPro
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


          <nuxt-content :document="page"/>

        </div>


      </div>
      <LandingBackground />


    </div>

    <AppFooter :links="footerLinks" :class="{ 'pb-16 md:pb-12': showCookieBanner }" />


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
      page: {title:"title1",description:"description1"},
      headerLinks: [],
      footerLinks: require('../../menu.json').linkList,
      showCookieBanner: false
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
