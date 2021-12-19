<template>
  <section
    class="
      float-left
      w-full
      text-white
      font-SourceSansPro
      relative
      bg-webstream
    "
  >
    <div class="container mx-auto">
      <div class="relative z-10 flex items-center justify-items-start">

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
          <h1 class="text-4xl text-center my-3 font-DMSans">{{page.title}}</h1>
          <h2 class="text-xl text-center my-3 font-DMSans">{{page.title}}</h2>

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
            type="submit"
            href="/"
          >
            {{ page.title }}
          </button>
        </div>

        <h1>{{ page.title }}</h1>
        <p>{{ page.description }}</p>


      </div>

      <LandingBackground />

    </div>
  </section>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    page: {
      type: Object,
      default: {title:'title1',description:'description1'},
    },
  }
});
</script>
