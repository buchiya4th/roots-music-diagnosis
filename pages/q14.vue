<template lang="pug">
.gameContent.container
  p.questionText
    | 自分は古風な性格だと思う。
  ul.answerList
    li: router-link(to="/a4/") はい
    li: router-link(to="/a5/") いいえ
</template>
