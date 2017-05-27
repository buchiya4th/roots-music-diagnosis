<template lang="pug">
.gameContent.container
  p.questionText
    | どちらかというと不器用なほうだ
  ul.answerList
    li: router-link(to="/q/q2/") はい
    li: router-link(to="/q/q3/") いいえ
</template>
