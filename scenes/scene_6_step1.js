scenes["scene_6_step1"] = {
  name: "Выбор основы",
  text: `— Выбери свою суть, — говорит один из членов ордена.<br>Перед тобой: <b>Казан</b> и <b>Сковорода</b>.`,
  img: "images/scene_6_step1.png",
  choices: [
    { text: "Выбрать сковороду", nextScene: "scene_6_step2", effect: () => { state.symbolTool = "pan"; } },
    { text: "Выбрать казан", nextScene: "scene_6_step2", effect: () => { state.symbolTool = "pot"; } }
  ]
};