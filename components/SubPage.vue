<template>
  <div class="bg-webstream">
    <BannerTop
      bannerText="We are improving the <b>WebStream</b>! Subscribe newsletter to stay up to date."
      bannerTarget="/"
    />
    <AppHeader :links="linkList"/>
    <AppBlurBackgroundMenu :links="linkList" />


    <div class="float-left font-SourceSansPro bg-white w-full" style="color: black">

      <NuxtLink to="/">Home page</NuxtLink>


      <div>
        <h1>Home page</h1>
        <NuxtLink to="/about" prefetch>About page pre-fetched</NuxtLink>


        <NuxtLink to="/about"
        >About (internal link that belongs to the Nuxt App)</NuxtLink
        >
        <a href="https://nuxtjs.org">External Link to another page</a>
      </div>

    </div>


    <SectionFooter />

  </div>
</template>

<script>
export default {
  data() {
    return require('../menu.json');
  },
};
</script>
