scenes["scene_7_choice_recipe"] = {
  name: "Выбор рецепта",
  text: `Ты стоишь у пылающего казана. Все специи на месте. Каждый ингредиент — часть пути. Но ты решаешь: каким будет твой плов?`,
  img: "images/placeholder.png",
  choices: [
    {
      text: "Приготовить Плов Единства",
      nextScene: "scene_7_result_classic"
    },
    {
      text: "Создать Новый Рецепт",
      nextScene: "scene_7_result_fusion"
    },
    {
      text: "Передать казан другому",
      nextScene: "scene_7_result_legend"
    }
  ]
};