<template>
  <nav class="justify-end mx-auto mr-0 my-auto hidden lg:flex select-none">
    <ul>
      <template v-for="(link, index) in links">
        <NavBarItem :key="index" :link="link" />
      </template>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
