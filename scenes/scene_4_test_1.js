scenes["scene_4_test_1"] = {
  name: "Сцена scene_4_test_1",
  image: "scene_4_test_1.png",
    img: "images/scene_4_test_1.png",
text: "Зирвакус протягивает тебе три флакона: A (тмин и металл), Б (жареный лук, слёзы), В (почти без запаха, но покалывает). Какую специю выбираешь?",
  choices: [
    { text: "А", nextScene: "scene_4_test_1_fail" },
    { text: "Б", nextScene: "scene_4_test_2", setFlags: { zTasteRespect: true } },
    { text: "В", nextScene: "scene_4_test_1_fail" }
  ]
};