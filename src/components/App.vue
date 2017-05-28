<template lang="pug">
  .wrap
    GlobalHeader
    // h1.red
    //   //- | {{msg}}
    //   test
    // h2.blue
    //   | こんにちは世界！
    // h3.green どうも
    // ul
    //   li: router-link(to="/") Home
    //   li: router-link(to="/foo/") foo
    //   li: router-link(to="/bar/") bar
    // router-view
    transition(name="page", mode="out-in")
      router-view.view
    GlobalFooter
</template>

<style lang="scss">
  .red {
    color: #f00;
  }
  .blue {
    color: #00f;
  }
  .green {
    color: #0f0;
  }
  .test {
    .green {
      color: #000;
    }
  }
</style>

<script>
import GlobalHeader from '../components/GlobalHeader.vue';
import GlobalFooter from '../components/GlobalFooter.vue';
export default {
  components: {
    GlobalHeader,
    GlobalFooter
  }
}
  // module.exports = {
  //   data: function() {
  //     return {
  //       msg: 'Hello world!!!'
  //     }
  //   }
  // }
// export default {
//   data() {
//     return {
//       loading: false
//     }
//   }
// }
</script>
