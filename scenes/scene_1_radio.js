scenes["scene_1_radio"] = {
  name: "Радиорубка",
  text: `Ты включаешь старую аппаратуру. В эфире — слабый, искажённый сигнал:<br>
  <i>«Регистан. Купол. Вкус. Возвращение…»</i><br><br>
  Это может быть важно.`,
  img: "images/scene_1_3.png",
  choices: [
    { text: "Вернуться", nextScene: "scene_1_start", effect: () => { state.visitedRadio = true; } }
  ]
};