<template>
  <iframe
    :src="linkToExample"
    class="w-full h-full border-0 rounded overflow-hidden"
    :title="title"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    :fontsize="fontsize"
    :expanddevtools="expanddevtools"
    :theme="theme"
  ></iframe>
</template>

<script lang="ts">
export default {
  props: {
    linkToExample: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    fontsize: {
      type: Number,
      required: false,
    },
    expanddevtools: {
      type: Number,
      required: false,
    },
    theme: {
      type: String,
      required: false,
    },
  },
};
</script>
