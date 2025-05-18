
let visitedScenes = new Set();

function markVisited(sceneId) {
  visitedScenes.add(sceneId);
}

function allScene2Visited() {
  return visitedScenes.has("scene_2_bunker") &&
    visitedScenes.has("scene_2_dome") &&
    visitedScenes.has("scene_2_stall");
}

const scenes = {};
let state = {};

function loadScenes(sceneIds, onComplete) {
  let loaded = 0;
  sceneIds.forEach(id => {
    const script = document.createElement("script");
    script.src = `scenes/${id}.js`;
    script.onload = () => {
      loaded++;
      if (loaded === sceneIds.length && onComplete) onComplete();
    };
    document.body.appendChild(script);
  });
}

function renderScene(sceneId) {

  const scene = scenes[sceneId];
  if (!scene) return;

  document.getElementById("scene-title").innerText = scene.name;
  document.getElementById("scene-text").innerHTML = scene.text;
  document.getElementById("scene-image").innerHTML = `<img src="${scene.img}" alt="">`;

  const choicesDiv = document.getElementById("scene-choices");
  choicesDiv.innerHTML = "";

  if (scene.effect) scene.effect();

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.onclick = () => {
      if (choice.effect) choice.effect();
      if (choice.nextScene) renderScene(choice.nextScene);
    };
    choicesDiv.appendChild(btn);
  });
}

window.onload = () => {
        loadScenes([
    "scene_0_1",
    "scene_0_2",
    "scene_0_3",
    "scene_0_4",
    "scene_1_basement",
    "scene_1_exit",
    "scene_1_exit_locked",
    "scene_1_exit_ready",
    "scene_1_radio",
    "scene_1_start",
    "scene_2_bunker",
    "scene_2_bunker_roll",
    "scene_2_bunker_shield",
    "scene_2_bunker_still",
    "scene_2_dome",
    "scene_2_exit",
    "scene_2_exit_locked",
    "scene_2_stall",
    "scene_2_stall_give_barberry",
    "scene_2_stall_give_name",
    "scene_2_stall_leave",
    "scene_2_start",
    "scene_3_attack",
    "scene_3_exit",
    "scene_3_help",
    "scene_3_lie",
    "scene_3_start",
    "scene_3_truth",
    "scene_4_result",
    "scene_4_scenes",
    "scene_4_start",
    "scene_4_test_1",
    "scene_4_test_1_fail",
    "scene_4_test_2",
    "scene_4_test_2_fail",
    "scene_4_test_3",
    "scene_5_exit",
    "scene_5_mask",
    "scene_5_mask_result",
    "scene_5_mirror",
    "scene_5_mirror_result",
    "scene_5_oldwoman",
    "scene_5_oldwoman_cooking",
    "scene_5_oldwoman_love",
    "scene_5_oldwoman_mentor",
    "scene_5_start",
    "scene_6_ingredient_barberry",
    "scene_6_ingredient_garlic",
    "scene_6_ingredient_memory",
    "scene_6_ingredient_zirvak",
    "scene_6_mind_false",
    "scene_6_mind_plain",
    "scene_6_mind_third",
    "scene_6_result",
    "scene_6_start",
    "scene_6_step1",
    "scene_6_step2",
    "scene_6_step3",
    "scene_6_tool_pan",
    "scene_6_tool_pot",
    "scene_7_choice_recipe",
    "scene_7_end",
    "scene_7_final",
    "scene_7_intervention",
    "scene_7_start",
    "scene_7_result_classic",
    "scene_7_result_fusion",
    "scene_7_result_legend",
    "scene_7_result_tension",
    "scene_7_result_unity"
  ], () => renderScene("scene_0_1"));
};

function determinePath6() {
  if (state.symbolTool === "pan" && state.symbolMind === "false_flavor") {
    state.path6 = "master";
  } else if (state.symbolTool === "pot" && state.symbolMind === "honest_plain") {
    state.path6 = "honest";
  } else {
    state.path6 = "seeker";
  }
  renderScene("scene_6_result");
}


function determineScene7Outcome() {
  console.log("DEBUG state:", state);
  if (state.recipeStyle === "refuse") {
    renderScene("scene_7_result_legend");
    return;
  }
  if (state.recipeStyle === "new" && state.interventionResponse === "accept") {
    renderScene("scene_7_result_fusion");
    return;
  }
  if (state.recipeStyle === "new" && state.interventionResponse === "unite") {
    renderScene("scene_7_result_unity");
    return;
  }
  if (state.recipeStyle === "classic" && state.interventionResponse === "accept") {
    renderScene("scene_7_result_tension");
    return;
  }
  if (state.recipeStyle === "classic" && state.interventionResponse === "reject") {
    renderScene("scene_7_result_classic");
    return;
  }

  // fallback
  renderScene("scene_7_result_classic");
}
