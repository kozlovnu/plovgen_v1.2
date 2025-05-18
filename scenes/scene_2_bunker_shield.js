scenes["scene_2_bunker_shield"] = {
  name: "Крышка-щит",
  text: `Ты поднимаешь крышку и ловишь удар — он срезает верхнюю часть.<br>
  Щит спасает тебя, но теперь ты знаешь: у этих ловушек есть создатели.<br><br>
  На обратной стороне крышки выгравировано:<br>
  <i>«Настоящий вкус всегда защищён».</i><br><br>
  Ты получаешь барбарис и крышку-щит.`,
  img: "images/scene_2_bunker_shield.png",
  choices: [
    { text: "Вернуться к развилке", nextScene: "scene_2_start", effect: () => { state.hasBarberry = true; state.hasShield = true; } }
  ]
};