scenes["scene_5_oldwoman"] = {
  name: "Старуха с луковицами",
  text: `Старуха протягивает тебе чеснок, пульсирующий, как сердце.<br>— Этот очистит душу. Но ты дашь взамен воспоминание.`,
  img: "images/scene_5_oldwoman.png",
  choices: [
    { text: "Отдать первую любовь", nextScene: "scene_5_oldwoman_love", effect: () => { state.hasGarlic = true; state.lostMemory = "love"; } },
    { text: "Отдать воспоминание о наставнике", nextScene: "scene_5_oldwoman_mentor", effect: () => { state.hasGarlic = true; state.lostMemory = "mother"; } },
    { text: "Отдать первую победу в готовке", nextScene: "scene_5_oldwoman_cooking", effect: () => { state.hasGarlic = true; state.lostMemory = "cooking"; } }
  ]
};