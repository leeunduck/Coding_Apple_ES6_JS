/** tagged literal 문제 1번 **/
// let pants = 20;
// let socks = 100;

// function analyzer(text, variable1, variable2) {
//   console.log(text[1] + variable2 + text[0] + variable1);
// }

// analyzer`바지${pants} 양말${socks}`;

/** tagged literal 문제 2번 **/
let pants = 0;
let socks = 100;

function analyzer(text, variable1, variable2) {
  if (variable1 == 0) {
    console.log(text[0] + "다팔렸어요" + text[1] + variable2);
  }
}

analyzer`바지${pants} 양말${socks}`;
