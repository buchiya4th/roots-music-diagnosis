<template lang="pug">
.gameContent.container
  p.questionText
    | ファッションはシンプルが好き。
  ul.answerList
    li: router-link(to="/q/q5/") はい
    li: router-link(to="/q/q6/") いいえ
</template>
