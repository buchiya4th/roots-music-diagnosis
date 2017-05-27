<template lang="pug">
.gameContent.container
  p.questionText
    | 周りを気にするほうだ。
  ul.answerList
    li: router-link(to="/q/q2/") はい
    li: router-link(to="/q/q3/") いいえ
</template>
