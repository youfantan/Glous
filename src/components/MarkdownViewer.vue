<template>
<VueMarkdown :source="mdSrc"></VueMarkdown>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  components:{
    VueMarkdown
  },
  name: "MarkdownViewer",
  props:{
    mdSrc:{
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>