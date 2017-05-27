<template lang="pug">
.gameContent.container
  p.questionText
    | ムードメーカーになりたい願望がある。
  ul.answerList
    li: router-link(to="/q14/") はい
    li: router-link(to="/q15/") いいえ
</template>
