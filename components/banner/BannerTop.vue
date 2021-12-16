<template>
  <a :href="bannerTarget" target="_blank">
    <div class="bg-webstream-light px-4 py-1">
      <div class="container mx-auto">
        <div class="grid justify-items-center font-SourceSansPro">
          <h3 class="text-center" v-html="bannerText"></h3>
        </div>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
export default {
  props: {
    bannerText: {
      type: String,
      required: true
    },
    bannerTarget: {
      type: String,
      required: false
    },
  },
};
</script>
