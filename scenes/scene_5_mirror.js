scenes["scene_5_mirror"] = {
  name: "Пустая лавка с зеркалом",
  text: `Ты видишь себя — в мантии Великого Пловара. Зеркало шепчет: — Откажись от чеснока. Истинное Единство требует памяти.`,
  img: "images/scene_5_mirror.png",
  choices: [
    { text: "Принять Дар Памяти", nextScene: "scene_5_mirror_result", effect: () => { state.hasMemoryGift = true; } }
  ]
};