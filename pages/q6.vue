<template lang="pug">
.gameContent.container
  p.questionText
    | 周りを気にするほうだ。
  ul.answerList
    li: router-link(to="/q2/") はい
    li: router-link(to="/q3/") いいえ
</template>
