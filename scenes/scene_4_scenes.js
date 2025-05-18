// scene_4_start.js
loadScene({
  id: "scene_4_start",
  image: "scene_4_start.png",
  text: "Ты входишь в руины Регистана. Спираль из плитки ведёт к центру. Там стоит он — Зирвакус, полу-шеф, полу-чудовище. — Я чувствую в тебе вкус… сырой. Ты пришёл за специями?",
  choices: [
    { text: "Кивнуть и пройти Испытание Вкуса", nextScene: "scene_4_test_1" }
  ]
});

// scene_4_test_1.js
loadScene({
  id: "scene_4_test_1",
  image: "scene_4_test_1.png",
  text: "Зирвакус протягивает тебе три флакона: A (тмин и металл), Б (жареный лук, слёзы), В (почти без запаха, но покалывает). Какую специю выбираешь?",
  choices: [
    { text: "А", nextScene: "scene_4_test_1_fail" },
    { text: "Б", nextScene: "scene_4_test_2", setFlags: { zTasteRespect: true } },
    { text: "В", nextScene: "scene_4_test_1_fail" }
  ]
});

// scene_4_test_1_fail.js
loadScene({
  id: "scene_4_test_1_fail",
  image: "scene_4_test_1_fail.png",
  text: "Зирвакус рявкает: — Нос у тебя как у супа без соли! Но продолжает испытание.",
  choices: [
    { text: "Вернуться к выбору специи", nextScene: "scene_4_test_1" }
  ]
});

// scene_4_test_2.js
loadScene({
  id: "scene_4_test_2",
  image: "scene_4_test_2.png",
  text: "Выбери, чем разжечь казан: Кизяк и масло, Древесина и кирпич, Очищенные косточки урюка.",
  choices: [
    { text: "Кизяк и масло", nextScene: "scene_4_test_2_fail" },
    { text: "Древесина и кирпич", nextScene: "scene_4_test_2_fail" },
    { text: "Очищенные косточки урюка", nextScene: "scene_4_test_3", setFlags: { zFirePerfect: true } }
  ]
});

// scene_4_test_2_fail.js
loadScene({
  id: "scene_4_test_2_fail",
  image: "scene_4_test_2_fail.png",
  text: "Жар неравномерный, специи начинают гореть. Зирвакус кряхтит, но даёт тебе ещё один шанс.",
  choices: [
    { text: "Вернуться к выбору топлива", nextScene: "scene_4_test_2" }
  ]
});

// scene_4_test_3.js
loadScene({
  id: "scene_4_test_3",
  image: "scene_4_test_3.png",
  text: "Зирвакус задаёт вопрос: У тебя один ингредиент. Дать другу или оставить для Плова Единства?",
  choices: [
    { text: "Отдать другу", nextScene: "scene_4_result", setFlags: { zMoralChoice: "altruism" } },
    { text: "Сохранить для плова", nextScene: "scene_4_result", setFlags: { zMoralChoice: "selfishness" } }
  ]
});

// scene_4_result.js
loadScene({
  id: "scene_4_result",
  image: "scene_4_result.png",
  text: "Ты получаешь Специю Зирвака — фиолетовый порошок с золотыми вкраплениями. Зирвакус указывает путь: — Иди в Ургут. Там найдёшь Чеснок Забвения.",
  choices: [
    { text: "Отправиться в Ургут", nextScene: "scene_5_start" }
  ]
});