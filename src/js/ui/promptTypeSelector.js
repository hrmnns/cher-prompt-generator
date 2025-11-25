export function renderPromptTypeSelector(el, onSelect) {
  const options = Object.entries(PromptDefinitions)
    .map(([id, def]) => `<option value="${id}">${def.label}</option>`)
    .join("");

  el.innerHTML = `
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">
        Prompt-Typ
      </label>
      <select
        class="w-full p-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
        id="promptTypeSelect"
      >
        ${options}
      </select>
    </div>
  `;

  el.querySelector("#promptTypeSelect").addEventListener("change", (e) => {
    onSelect(e.target.value);
  });
}
