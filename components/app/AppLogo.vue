<template>
  <div class="mx-auto px-2 lg:mx-4 my-4 float-left">
    <a href="/">
      <img
        src="/logo/WebStream-logo_text-min.svg"
        :width="logoWidth"
        :height="logoHeight"
        draggable="false"
        class="select-none drag-none"
      />
    </a>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    logoWidth: {
      type: String,
      required: false,
    },
    logoHeight: {
      type: String,
      required: false,
    },
  },
};
</script>