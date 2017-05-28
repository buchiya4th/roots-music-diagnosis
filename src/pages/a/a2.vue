<template lang="pug">
.gameContent.container
  h1.answerTile
    span.answerSub: | あなたには・・・
    br
    span.recoGenre
      | ロックンロールが
      br
      | おすすめ！
  .answerBody
    p.answerText
      | 素直でまっすぐなあなたはノれる曲がぴったり！
    .reco
      h2.recoTitle: | おすすめ曲
      ul.recoList
        li: a(href="https://www.youtube.com/watch?v=I8JULmUlGDA", target="_blank"): | Johnny B. Goode｜Chuck Berry（チャックベリー）
        li: a(href="https://www.youtube.com/watch?v=qDID_E0FDUU", target="_blank"): | Jailhouse Rock｜Elvis Presley（エルヴィス・プレスリー）
        li: a(href="https://www.youtube.com/watch?v=5hWbW1HCApM", target="_blank"): | help!｜The Beatles（ビートルズ）
</template>
