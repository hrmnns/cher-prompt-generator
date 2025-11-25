function renderField(field, value) {
  const baseLabel = `
    <label class="block text-sm font-medium text-gray-700 mb-1">${field.label}${field.required ? " *" : ""}</label>
  `;

  switch (field.type) {
    case "textarea":
      return `
        <div>
          ${baseLabel}
          <textarea
            class="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            data-field="${field.id}"
          >${value}</textarea>
        </div>
      `;

    case "select":
      return `
        <div>
          ${baseLabel}
          <select
            class="w-full border border-gray-300 rounded-lg p-2 shadow-sm bg-white focus:ring-blue-500 focus:border-blue-500"
            data-field="${field.id}"
          >
            ${field.options
              .map(
                (o) => `<option value="${o}" ${o === value ? "selected" : ""}>${o}</option>`
              )
              .join("")}
          </select>
        </div>
      `;

    default:
      return `
        <div>
          ${baseLabel}
          <input
            class="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            type="text"
            value="${value}"
            data-field="${field.id}"
          />
        </div>
      `;
  }
}
