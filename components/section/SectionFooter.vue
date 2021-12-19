<template>
  <section
    class="
      float-left
      w-full
      text-white
      font-SourceSansPro
      relative
      overflow-hidden
      bg-webstream
    "
  >
    <div class="container mx-auto">
      <div class="relative z-10 flex items-center justify-items-start">
       SECTION FOOTER left
      </div>
      <div>
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching mountains</p>
        <ul v-else>
          <li v-for="(mountain, index) in mountains" :key="index">
            {{ mountain.title }}
          </li>
        </ul>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="relative z-10 flex items-center justify-items-start">
        SECTION FOOTER center
      </div>
      <div>
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching mountains</p>
        <ul v-else>
          <li v-for="(mountain, index) in mountains" :key="index">
            {{ mountain.title }}
          </li>
        </ul>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="relative z-10 flex items-center justify-items-start">
        SECTION FOOTER right
      </div>
      <div>
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching mountains</p>
        <ul v-else>
          <li v-for="(mountain, index) in mountains" :key="index">
            {{ mountain.title }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mountains: []
    }
  },
  async fetch() {
    this.mountains = await fetch(
      'https://api.nuxtjs.dev/mountains'
    ).then(res => res.json())
  }
}
</script>
