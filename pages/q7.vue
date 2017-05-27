<template lang="pug">
.gameContent.container
  p.questionText
    | 細かいことは気にしない。
  ul.answerList
    li: router-link(to="/q11/") はい
    li: router-link(to="/q12/") いいえ
</template>
