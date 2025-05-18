scenes["scene_4_test_3"] = {
  name: "Сцена scene_4_test_3",
  image: "scene_4_test_3.png",
    img: "images/scene_4_test_3.png",
text: "Зирвакус задаёт вопрос: У тебя один ингредиент. Дать другу или оставить для Плова Единства?",
  choices: [
    { text: "Отдать другу", nextScene: "scene_4_result", setFlags: { zMoralChoice: "altruism" } },
    { text: "Сохранить для плова", nextScene: "scene_4_result", setFlags: { zMoralChoice: "selfishness" } }
  ]
};