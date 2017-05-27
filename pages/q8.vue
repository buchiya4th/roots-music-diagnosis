<template lang="pug">
.gameContent.container
  p.questionText
    | テレビが好きだ。
  ul.answerList
    li: router-link(to="/q12/") はい
    li: router-link(to="/q13/") いいえ
</template>
