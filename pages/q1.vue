<template lang="pug">
.gameContent.container
  p.questionText
    | どちらかというと不器用なほうだ
  ul.answerList
    li: router-link(to="/q2/") はい
    li: router-link(to="/q3/") いいえ
</template>
