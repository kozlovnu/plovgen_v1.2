scenes["scene_5_mask"] = {
  name: "Торговец в противогазе",
  text: `Он протягивает почти идеальный чеснок. — Подделка. Но тебя не проклянут.`,
  img: "images/scene_5_mask.png",
  choices: [
    {
      text: "Отдать 10 крышек и специи",
      nextScene: "scene_5_mask_result",
      effect: () => {
        if ((state.caps || 0) >= 10 && inventory.includes("тмин")) {
          state.caps -= 10;
          inventory = inventory.filter(i => i !== "тмин");
          addToInventory("поддельный чеснок");
          state.hasFakeGarlic = true;
        } else {
          alert("Недостаточно ресурсов — нужен тмин и 10 крышек.");
        }
      }
    }
  ]
};