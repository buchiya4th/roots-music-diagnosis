<template lang="pug">
.gameContent.container
  p.questionText
    | 割と単純なほうだ。
  ul.answerList
    li: router-link(to="/a/a2/") はい
    li: router-link(to="/a/a3/") いいえ
</template>
