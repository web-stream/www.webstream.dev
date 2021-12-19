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
        <LandingHeading
          heading="Many possibilities <br/>in one library"
          postscript="Prototyping and microfrontend <br/>has never been easier."
          title="Learn more"
          type="submit"
        />

        <h1>{{ page.title }}</h1>
        <p>{{ page.description }}</p>
        <nuxt-content :document="page"/>

      </div>
      <LandingBackground />
    </div>
  </section>
</template>
