<template>
  <li
    class="
      float-left
      font-DMSans font-medium
      text-lg
      px-3
      py-2
      cursor-pointer
      hover-trigger
      link-list
      flex
      item-title
      rounded-lg
      transition
      ease-out
      items-center
    "
  >
    <span>
      <a class="link-title transition ease-out duration-500">{{
        link.title
      }}</a>
      <ul
        v-if="link.items"
        class="
          absolute
          rounded-lg
          drop-shadow
          hover-target
          my-1
          py-2
          px-2
          bg-webstream-dark
          item-list
        "
      >
        <template v-for="(item, index) in link.items">
          <NavBarSubItem :key="index" :item="item" />
        </template>
      </ul>
    </span>
    <span v-if="link.items" class="ml-1 text-webstream-light">
      <IconArrowDown />
    </span>
  </li>
</template>

<script lang="ts">
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
};
</script>
