import { PromptDefinitions } from "../types.js";

export function renderDynamicFormArea(el, typeId, values) {
  const def = PromptDefinitions[typeId];
  if (!def) {
    el.innerHTML = "<p>Kein Formular verfügbar.</p>";
    return;
  }

  const fieldsHtml = def.fields
    .map((f) => renderField(f, values[f.id] || ""))
    .join("");

  el.innerHTML = `
    <form class="space-y-4">${fieldsHtml}</form>
  `;
}

function renderField(field, value) {
  switch (field.type) {
    case "textarea":
      return `
        <div>
          <label class="block text-sm font-medium mb-1">${field.label}</label>
          <textarea class="w-full border p-2 rounded" rows="4" data-field="${field.id}">${value}</textarea>
        </div>
      `;

    case "select":
      return `
        <div>
          <label class="block text-sm font-medium mb-1">${field.label}</label>
          <select class="w-full border p-2 rounded" data-field="${field.id}">
            ${field.options.map(o => `<option value="${o}">${o}</option>`).join("")}
          </select>
        </div>
      `;

    default:
      return `
        <div>
          <label class="block text-sm font-medium mb-1">${field.label}</label>
          <input class="w-full border p-2 rounded" type="text" value="${value}" data-field="${field.id}" />
        </div>
      `;
  }
}
