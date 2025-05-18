scenes["scene_3_truth"] = {
  name: "Ты говоришь правду",
  text: `Ты киваешь. Он молчит, потом выносит тебе пиалу с шорпо.<br><br>
  <i>— Мир здесь держится не на рецептах. А на людях, кто их помнит. Я помогу тебе... за плату.</i><br><br>
  Он хочет:<br>
  • Немного барбариса<br>
  • Или рассказ об одной из твоих потерь`,
  img: "images/scene_3_2.png",
  choices: [
    { text: "Отдать барбарис", nextScene: "scene_3_help", effect: () => { state.hasBarberry = false; } },
    { text: "Рассказать о потере", nextScene: "scene_3_help" }
  ]
};