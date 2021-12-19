<template>
  <div class="bg-webstream">
    <BannerTop
      bannerText="We are improving the <b>WebStream</b>! Subscribe newsletter to stay up to date."
      bannerTarget="/"
    />
    <AppHeader :links="linkList"/>
    <AppBlurBackgroundMenu :links="linkList" />

    <SectionArticle />

    <div class="float-left font-SourceSansPro bg-white w-full" style="color: black">
      <SectionContent />
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
