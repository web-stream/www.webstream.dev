<template>
  <span
    v-if="search"
    class="
      flex
      mx-2
      hover:text-webstream-light
      cursor-pointer
      transition
      ease-out
      duration-500
    "
  >
    <IconSearch />
  </span>
</template>

<script lang="ts">
export default {
  props: {
    search: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
