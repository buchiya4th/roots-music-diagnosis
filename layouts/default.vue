<template lang="pug">
  .wrap
    GlobalHeader
    nuxt
    GlobalFooter
</template>

<script>
import GlobalHeader from '~components/GlobalHeader.vue'
import GlobalFooter from '~components/GlobalFooter.vue'

export default {
  components: {
    GlobalHeader,
    GlobalFooter
  }
}
</script>
