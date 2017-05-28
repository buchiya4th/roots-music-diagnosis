<template lang="pug">
.gameContent.container
  p.questionText
    | ボーッとするのが割と好き
  ul.answerList
    li: router-link(to="/q/q4/") はい
    li: router-link(to="/q/q5/") いいえ
</template>
