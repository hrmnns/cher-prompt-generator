import { PromptDefinitions } from "../types.js";

export function renderPromptTypeSelector(el, onSelect) {
  const options = Object.entries(PromptDefinitions)
    .map(([id, def]) => `<option value="${id}">${def.label}</option>`)
    .join("");

  el.innerHTML = `
    <label class="block text-sm font-medium mb-1">Prompt-Typ</label>
    <select class="w-full p-2 border rounded" id="promptTypeSelect">
      ${options}
    </select>
  `;

  el.querySelector("#promptTypeSelect").addEventListener("change", (e) => {
    onSelect(e.target.value);
  });
}
