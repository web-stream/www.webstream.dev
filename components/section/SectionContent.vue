<template>
  <div className="container mx-auto py-8">
    <div className="editorContainerBox py-8 drop-shadow-2xl">
      <client-only placeholder="Loading an example...">
        <div className="h-full">
          <span>CONTENT</span>
           <div>
             {{codeToRender}}
           </div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  data() {
    return {
      codeToRender: "TEST",
    };
  }
};
</script>
