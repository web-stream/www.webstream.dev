<template>
  <header
    class="
      float-none
      w-full
      px-4
      top-0
      bg-webstream-darker
      backdrop-filter backdrop-blur
      bg-opacity-50
      text-webstream-gray
      flex
      items-stretch
      z-40
      sticky
    "
  >
    <IconMobileMenu
      class="
        mx-2
        hover:text-webstream-light
        cursor-pointer
        transition
        ease-out
        duration-500
      "
      @click.native="toogleMenu"
    />
    <AppLogo logoWidth="250" logoHeight="" />
    <AppNavBar :links="links" />
    <NavSearch :search="true" />
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    links: {
      type: Array,
    },
  },
  methods: {
    toogleMenu(): void {
      this.$store.commit("mobileMenu/toogle");
    },
  },
});
</script>
