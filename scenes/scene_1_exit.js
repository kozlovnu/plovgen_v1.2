scenes["scene_1_exit"] = {
  name: "Шлюз Убежища",
  text: `Ты подходишь к шлюзу. Панель мигает и жужжит...`,
  img: "images/scene_1_4.png",
  choices: [
    {
      text: "Попробовать открыть",
      nextScene: null,
      effect: () => {
        if (state.visitedBasement && state.visitedRadio) {
          renderScene("scene_1_exit_ready");
        } else {
          renderScene("scene_1_exit_locked");
        }
      }
    }
  ]
};