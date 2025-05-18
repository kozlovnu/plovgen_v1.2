scenes["scene_2_bunker_still"] = {
  name: "Замереть",
  text: `Клык вонзается прямо в стену рядом с тобой. Ты спасён. Но звук привлекает кого-то из туннеля.<br><br>
  Ты слышишь шаги. Нужно уходить быстро.<br>
  Ты забираешь барбарис и возвращаешься.`,
  img: "images/scene_2_bunker_still.png",
  choices: [
    { text: "Вернуться к развилке", nextScene: "scene_2_start", effect: () => { state.hasBarberry = true; state.isWatched = true; } }
  ]
};