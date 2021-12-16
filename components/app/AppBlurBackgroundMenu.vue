<template>
  <transition name="slide-fade">
    <div
      class="
        fixed
        top-0
        left-0
        z-50
        h-screen
        background-w
        bg-webstream-darker
        backdrop-filter backdrop-blur
        bg-opacity-50
      "
      v-if="$store.state.mobileMenu.menuState"
    >
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
              backdrop-filter backdrop-blur-xl
              bg-opacity-75
              text-webstream-gray
              flex
              items-stretch
              select-none
              moblile-menu
            "
          >
            <ul class="my-4 w-full select-none">
              <template v-for="(link, index) in links">
                <NavBarItemMobile :key="index" :link="link" />
              </template>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
  methods: {
    toogleMenu(): void {
      this.$store.commit("mobileMenu/toogle");
    },
  },
});
</script>

<style scoped>
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-60px);
  }
  100% {
    transform: translateX(0);
  }
}

.background-w {
  width: 200vw;
}
.moblile-menu {
  min-width: 250px;
}
.slide-fade-enter-active {
  animation: 0.3s ease-out 0s 1 slideInFromLeft;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-to,
.slide-fade-enter-from {
  transform: translateX(-60px);
  opacity: 0;
}
</style>
