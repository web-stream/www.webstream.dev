<template>
  <div
    class="
      px-6 px-10
      md:px-20
      lg:px-20
      xl:px-5
      2xl:px-20
      py-56
      mx-auto
      sm:mx-0
      float-left
      grid
      justify-items-stretch
    "
  >
    <h1 v-html="heading" class="text-4xl text-center my-3 font-DMSans"></h1>
    <h2 v-html="postscript" class="text-xl text-center my-3 font-DMSans"></h2>
    <ButtonLight :title="title" :type="type" :href="href" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    postscript: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: false,
    },
  },
};
</script>
