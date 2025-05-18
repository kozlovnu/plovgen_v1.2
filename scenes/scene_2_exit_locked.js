scenes["scene_2_exit_locked"] = {
  name: "Выход заблокирован",
  text: `<b>Система самовыживания:</b><br>
  <i>Недостаточно ингредиентов и данных для выхода. Вернись и продолжи поиск.</i>`,
  img: "images/scene_2_1.png",
  choices: [
    { text: "Вернуться", nextScene: "scene_2_start" }
  ]
};