<template>
  <iframe :srcdoc="this.codeToRender" class="overflow-clip overflow-auto"></iframe >
</template>

<script>
export default {
  props: {
    renderHtml: {
      type: String,
      required: false,
    },
    renderStyle: {
      type: String,
      required: false,
    },
    renderScript: {
      type: String,
      required: false,
    },
  },
  data() {
    const styleToRender = this.renderStyle
      ? `<style>${this.renderStyle}<\/style>`
      : "";
    const scriptToRender = this.renderScript
      ? `<script>${this.renderScript}<\/script>`
      : "";
    const htmlToRender = this.renderHtml ? this.renderHtml : "";
    return {
      codeToRender: styleToRender + scriptToRender + htmlToRender,
    };
  },
  watch: {
    renderScript: function renderScript(newVal) {
      this.updatePreview();
      eval(newVal);
    },
    renderHtml: function () {
      this.updatePreview();
    },
    renderStyle: function () {
      this.updatePreview();
    },
  },
  created() {
    eval(this.renderScript);
  },
  methods: {
    updatePreview() {
      const styleToRender = this.renderStyle
        ? `<style>${this.renderStyle}<\/style>`
        : "";
      const scriptToRender = this.renderScript
        ? `<script>${this.renderScript}<\/script>`
        : "";
      const htmlToRender = this.renderHtml ? this.renderHtml : "";
      this.codeToRender = styleToRender + scriptToRender + htmlToRender;
    },
  },
};
</script>
