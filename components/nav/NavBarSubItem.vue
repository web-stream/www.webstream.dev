<template>
  <li
    class="
      item-title
      mx-1
      my-1
      px-3
      py-2
      rounded-lg
      transition
      ease-out
      duration-500
    "
  >
    <a :href="item.to">{{ item.title }}</a>
  </li>
</template>

<script lang="ts">
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
