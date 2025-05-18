scenes["scene_7_final"] = {
  name: "Плов Единства",
  text: (() => {
    if (state.recipeStyle === "refuse") {
      return "Ты отходишь от казана. Кто-то другой варит. Но плов — не тот. Люди пробуют, молчат. Ты уходишь в пустошь. Через годы о тебе слагают легенды.";
    }
    if (state.recipeStyle === "new" && state.interventionResponse === "unite") {
      return "Ты создал нечто новое. И объединил даже противоположности. Все фракции встают. Слёзы. Смех. Объятия. Единство.";
    }
    if (state.recipeStyle === "classic" && state.interventionResponse === "reject") {
      return "Плов — идеален. Но не все довольны. Кто-то кивает. Кто-то молчит. Ты стал символом, но союз ещё неустойчив.";
    }
    return "Ты создал плов, который отражает всё, через что ты прошёл. Он несовершенен, но честен. Он не идеален, но живой.";
  })(),
  img: "images/scene_7_final.png",
  choices: [{ text: "Финал", nextScene: "scene_7_end" }]
};