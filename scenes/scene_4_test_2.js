scenes["scene_4_test_2"] = {
  name: "Сцена scene_4_test_2",
  image: "scene_4_test_2.png",
    img: "images/scene_4_test_2.png",
text: "Выбери, чем разжечь казан: Кизяк и масло, Древесина и кирпич, Очищенные косточки урюка.",
  choices: [
    { text: "Кизяк и масло", nextScene: "scene_4_test_2_fail" },
    { text: "Древесина и кирпич", nextScene: "scene_4_test_2_fail" },
    { text: "Очищенные косточки урюка", nextScene: "scene_4_test_3", setFlags: { zFirePerfect: true } }
  ]
};