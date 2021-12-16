<template>
  <nav class="flex lg:hidden">
    <div
      class="
        fixed
        float-left
        top-0
        left-0
        text-webstream-gray
        flex
        items-stretch
        w-full
        h-screen
      "
      v-if="$store.state.mobileMenu.menuState"
      v-scroll-lock="$store.state.mobileMenu.menuState"
    >
      <div class="h-full">
        <div
          class="
            float-left
            h-full
            px-1
            bg-webstream-dark
            text-webstream-gray
            flex
            items-stretch
          "
        >
          <IconCross @click.native="toogleMenu" />
        </div>
        <div
          class="
            float-left
            h-full
            px-2
            bg-webstream-darker
            backdrop-filter
            backdrop-blur-xl
            bg-opacity-75
            text-webstream-gray
            flex
            items-stretch
          "
        >
          <ul class="my-4">
            <template v-for="(link, index) in links">
              <NavBarItemMobile :key="index" :link="link" />
            </template>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
    };
  },
  methods: {
    toogleMenu(): void {
      this.$store.commit('mobileMenu/toogle')
    },
  },
});
</script>
