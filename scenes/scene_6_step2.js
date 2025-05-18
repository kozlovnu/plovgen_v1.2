scenes["scene_6_step2"] = {
  name: "Чистота ингредиента",
  text: `— Что ты принёс в знак уважения к Искусству?`,
  img: "images/scene_6_step2.png",
  choices: [
    { text: "Барбарис", nextScene: "scene_6_step3", condition: () => state.hasBarberry },
    { text: "Чеснок Забвения", nextScene: "scene_6_step3", condition: () => state.hasGarlic },
    { text: "Специя Зирвака", nextScene: "scene_6_step3", condition: () => state.hasZirvak },
    { text: "Я отказался. У меня Дар Памяти", nextScene: "scene_6_step3", condition: () => state.hasMemoryGift }
  ]
};