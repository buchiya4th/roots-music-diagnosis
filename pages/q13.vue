<template lang="pug">
.gameContent.container
  p.questionText
    | メンタルには自信がある。
  ul.answerList
    li: router-link(to="/a3/") はい
    li: router-link(to="/a4/") いいえ
</template>
