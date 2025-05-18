scenes["scene_7_intervention"] = {
  name: "Вмешательство",
  text: `Ты готовишь, когда один из представителей фракции подходит.<br>
  — Позволь нам внести кое-что свое...`,
  img: "images/placeholder.png",
  choices: [
    {
      text: "Отказать",
      nextScene: "scene_7_result_classic"
    },
    {
      text: "Разрешить вмешательство",
      nextScene: "scene_7_result_tension"
    },
    {
      text: "Объединить вкусы (если есть Дар Памяти)",
      nextScene: "scene_7_result_unity"
    }
  ]
};