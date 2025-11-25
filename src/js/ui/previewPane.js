import { renderMarkdown } from "../renderer.js";

export function renderPreviewPane(el, state) {
  const md = renderMarkdown(state);

  el.innerHTML = `
    <h2 class="text-sm font-semibold mb-2">Vorschau (Markdown)</h2>

    <pre class="text-xs bg-gray-100 p-3 rounded border whitespace-pre-wrap">
${md}
    </pre>

    <button id="copyBtn"
      class="mt-3 px-3 py-2 bg-blue-600 text-white rounded text-xs">
      Kopieren
    </button>
  `;

  el.querySelector("#copyBtn").addEventListener("click", () => {
    navigator.clipboard.writeText(md);
  });
}
