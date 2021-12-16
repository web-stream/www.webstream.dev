<template>
  <button
    class="
      px-4
      py-2
      rounded-full
      text-sm
      font-medium
      hover:bg-transparent hover:text-webstream-light
      border-2 border-webstream-light
      transition
      text-white
      bg-webstream-light
      relative
      justify-self-end
    "
    :type="type"
    :href="href"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
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
