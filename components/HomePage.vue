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

    <SectionLanding />

    <div class="float-left font-SourceSansPro bg-white w-full" style="color: black">
      <SectionEditor />
    </div>

    <div class="float-left font-SourceSansPro w-full" style="color: black">
      <SectionContent />
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
      linkList: require('../menu.json').linkList,
      page: {title:"title1",description:"description1"},
      headerLinks: [],
      footerLinks: require('../menu.json').linkList,
      showCookieBanner: false
    }
  },
};
</script>
