scenes["scene_2_exit"] = {
  name: "Выход из Чорсу",
  text: `Ты стоишь у разрушенного выхода из базара. Пора покинуть Чорсу.`,
  img: "images/scene_2_5.png",
  choices: [
    {
      text: "Продолжить путь",
            effect: () => {
        if ((state.hasBarberry || state.hasOnion) && state.knowsDirection) {
          renderScene("scene_3_start");
        } else {
          renderScene("scene_2_exit_locked");
        }
      }
    }
  ]
};