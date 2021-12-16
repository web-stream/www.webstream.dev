<template>
  <li
    class="
      font-DMSans font-medium
      text-lg
      px-3
      py-1
      cursor-pointer
      hover-trigger
      link-list
      flex
      rounded-lg
      transition
      ease-out
      items-center
    "
  >
    <span class="w-full" @click="changeListVisibility">
      <div class="flex items-center">
        <a class="float-left transition ease-out duration-500">{{
          link.title
        }}</a>
        <span v-if="link.items" class="ml-1 text-webstream-light pl-2 ml-auto">
          <IconArrowDown />
        </span>
      </div>
      <transition name="slide-fade">
        <ul
          v-if="link.items && expandList"
          class="
            rounded-lg
            drop-shadow
            transition
            ease-out
            duration-500
            py-1
            px-1
            item-list
            w-max
            h-max
          "
        >
          <template v-for="(item, index) in link.items">
            <NavBarSubItemMobile :key="index" :item="item" />
          </template>
        </ul>
      </transition>
    </span>
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      expandList: false,
    };
  },
  methods: {
    changeListVisibility(): void {
      this.expandList = !this.expandList;
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
