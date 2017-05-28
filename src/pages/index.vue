<template lang="pug">
  .contents.container
    main.main.top-page
      p.leadText
        | あなたの性格にマッチしたルーツ音楽を導き出します。
        br
        | これで今日聴く音楽は決まり！
      ul.answerList.start
        li: router-link(to="/q/q1/") スタート
</template>

<style>
.leadText {
  max-width: 510px;
  margin: 40px auto 80px;
}
</style>

<script>
export default {
  transition: 'page'
}
</script>
