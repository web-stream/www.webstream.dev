<template>
  <div>
    <PrismEditor
      class="font-Code bg-webstream-dark text-white p-1 leading-normal text-sm"
      v-model="code"
      :highlight="onCodeEdit"
      :line-numbers="true"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { PrismEditor } from "vue-prism-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
import "vue-prism-editor/dist/prismeditor.min.css";

export default Vue.extend({
  components: {
    PrismEditor,
  },
  props: {
    language: {
      type: String,
      required: true,
    },
    defaultCode: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      code: this.defaultCode.replaceAll("\\n", "\n"),
    };
  },
  methods: {
    onCodeEdit(code: string) {
      this.$emit('code', code)
      //this.$store.commit("codeEditor/update", code);
      return highlight(code, languages[this.language], this.language);
    },
  },
});
</script>

<style>
.prism-editor__textarea:focus {
  outline: none;
}
.prism-editor__line-number {
  color: var(--webstream-gray) !important;
}
.prism-editor__line-numbers {
  background: var(--webstream-darker);
  border-right: 2px solid var(--webstream-gray);
  padding-right: 4px;
}
</style>
