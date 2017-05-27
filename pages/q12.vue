<template lang="pug">
.gameContent.container
  p.questionText
    | 割と単純なほうだ。
  ul.answerList
    li: router-link(to="/a2/") はい
    li: router-link(to="/a3/") いいえ
</template>
