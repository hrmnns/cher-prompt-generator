export function renderPreviewPane(el, state) {
  el.innerHTML = `
    <h2 class="text-sm font-semibold mb-2">Vorschau (Markdown)</h2>
    <pre class="text-xs bg-gray-100 p-3 rounded border">
      [Preview wird später dynamisch generiert]
      Typ: ${state.currentType}
    </pre>
  `;
}
