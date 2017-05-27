<template lang="pug">
.gameContent.container
  p.questionText
    | 新鮮さより味わい深いほうが好き。
  ul.answerList
    li: router-link(to="/a1/") はい
    li: router-link(to="/a2/") いいえ
</template>
