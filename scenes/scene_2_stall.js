scenes["scene_2_stall"] = {
  name: "Горящая палатка",
  text: `Ты подходишь ближе. Силуэт оказывается псевдоторговцем из клана <b>"Зирвакусов"</b>.<br>
  Он предлагает обмен:<br><br>
  <i>«Я дам тебе <b>Луковицу Памяти</b>, если отдашь мне свой барбарис… или имя твоего Убежища.»</i><br><br>
  Ты ощущаешь, что его голос шепчет специи прямо в мозг.`,
  img: "images/scene_2_4.png",
  choices: [
    { text: "Отдать барбарис", nextScene: "scene_2_stall_give_barberry" },
    { text: "Отдать имя Убежища", nextScene: "scene_2_stall_give_name" },
    { text: "Уйти", nextScene: "scene_2_stall_leave" }
  ]
};