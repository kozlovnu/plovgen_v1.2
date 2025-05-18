scenes["scene_2_bunker_roll"] = {
  name: "Перекат",
  text: `Ты успеваешь уйти от удара, но спина задевает полку с банками — одна из них разбивается, и ты теряешь часть припасов.<br>
  <b>[-1 еда, но выжил]</b><br><br>
  Ты забираешь барбарис и возвращаешься на поверхность.`,
  img: "images/scene_2_bunker_roll.png",
  choices: [
    { text: "Вернуться к развилке", nextScene: "scene_2_start", effect: () => { state.hasBarberry = true; } }
  ]
};