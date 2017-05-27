<template lang="pug">
.gameContent.container
  p.questionText
    | 告白はストレートにする・してほしい。
  ul.answerList
    li: router-link(to="/q/q7/") はい
    li: router-link(to="/q/q8/") いいえ
</template>
