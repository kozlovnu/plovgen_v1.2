scenes["scene_6_step3"] = {
  name: "Пища для ума",
  text: `— Последний вопрос. Перед тобой две кастрюли:<br>
  В одной — совершенный вкус, но сваренный на лжи.<br>
  В другой — честный плов, но без соли.<br><br>
  Что ты выберешь?`,
  img: "images/scene_6_step3.png",
  choices: [
    { text: "Идеальный вкус (ложь)", nextScene: "scene_6_result", effect: () => { state.ethics = "false_flavor"; } },
    { text: "Честный, но тусклый плов", nextScene: "scene_6_result", effect: () => { state.ethics = "honest_plain"; } },
    { text: "Откажусь. Поищу третий путь", nextScene: "scene_6_result", effect: () => { state.ethics = "seek_truth"; } }
  ]
};