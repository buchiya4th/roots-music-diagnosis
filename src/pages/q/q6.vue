<template lang="pug">
.gameContent.container
  p.questionText
    | 周りを気にするほうだ。
  ul.answerList
    li: router-link(to="/q/q9/") はい
    li: router-link(to="/q/q10/") いいえ
</template>
