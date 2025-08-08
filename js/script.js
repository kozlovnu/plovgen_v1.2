
const scenes = {};
let state = {};

function sanitizeHTML(html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  template.content.querySelectorAll("script").forEach((el) => el.remove());
  return template.innerHTML;
}

function loadScenes(sceneIds, onComplete) {
  let loaded = 0;
  const total = sceneIds.length;
  const checkComplete = () => {
    if (loaded === total && onComplete) onComplete();
  };
  sceneIds.forEach(id => {
    const script = document.createElement("script");
    script.src = `scenes/${id}.js`;
    script.onload = () => {
      loaded++;
      checkComplete();
    };
    script.onerror = () => {
      console.error(`Failed to load scene: ${id}`);
      loaded++;
      checkComplete();
    };
    document.body.appendChild(script);
  });
}

function renderScene(sceneId) {

  const scene = scenes[sceneId];
  if (!scene) return;

  document.getElementById("scene-title").innerText = scene.name;

  const textEl = document.getElementById("scene-text");
  textEl.innerHTML = sanitizeHTML(scene.text);

  const imageEl = document.getElementById("scene-image");
  imageEl.innerHTML = "";
  const img = document.createElement("img");
  img.src = scene.img;
  img.alt = "";
  imageEl.appendChild(img);

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
  fetch("scenes/manifest.json")
    .then((res) => res.json())
    .then((sceneIds) => loadScenes(sceneIds, () => renderScene("scene_0_1")))
    .catch((err) => console.error("Failed to load scene manifest", err));
};

function determinePath6() {
  const { symbolTool, symbolMind } = state;
  if (!symbolTool || !symbolMind) {
    state.path6 = "seeker";
  } else if (symbolTool === "pan" && symbolMind === "false_flavor") {
    state.path6 = "master";
  } else if (symbolTool === "pot" && symbolMind === "honest_plain") {
    state.path6 = "honest";
  } else {
    state.path6 = "seeker";
  }
  renderScene("scene_6_result");
}


function determineScene7Outcome() {
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
