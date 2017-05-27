<template lang="pug">
.gameContent.container
  p.questionText
    | アウトドアが好き。
  ul.answerList
    li: router-link(to="/q8/") はい
    li: router-link(to="/q9/") いいえ
</template>
