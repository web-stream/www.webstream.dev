<template>
  <div class="container mx-auto py-8">
    <div class="editorContainerBox py-8 drop-shadow-2xl">
      <client-only placeholder="Loading an example...">
        <div class="h-full">
          <EditorCodeSandbox linkToExample="https://codesandbox.io/embed/nest-jjo90y00xw?fontsize=14&hidenavigation=1&theme=dark" />
        </div>
      </client-only>
    </div>
  </div>
</template>

<style scoped>
.editorContainerBox {
  height: 64rem;
}
.editorContainer {
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;
}
@media (min-width: 1024px) {
  .editorContainerBox {
    height: 32rem;
  }
}
</style>

<script>
export default {
  data() {
    return {
      codeToRender: "",
    };
  },
  methods: {
    onClickChild(value) {
      return (this.codeToRender = value);
    },
  },
};
</script>
