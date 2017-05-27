<template lang="pug">
.gameContent.container
  p.questionText
    | 人と変わったことが好き。
  ul.answerList
    li: router-link(to="/a5/") はい
    li: router-link(to="/a6/") いいえ
</template>
