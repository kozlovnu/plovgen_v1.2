scenes["scene_1_basement"] = {
  name: "Подвал Убежища",
  text: `В темноте подвала ты находишь ржавый казан, немного риса и сушёный барбарис.<br>
  Среди них — карта туннелей под Ташкентом и записка:<br>
  <i>«Зирвак начинается не на сковороде, а в сердце».</i>`,
  img: "images/scene_1_2.png",
  choices: [
    { text: "Вернуться", nextScene: "scene_1_start", effect: () => { state.visitedBasement = true; } }
  ]
};