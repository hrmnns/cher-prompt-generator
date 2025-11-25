const html = marked.parse(md);

el.innerHTML = `
  <h2 class="text-sm font-semibold mb-3">Vorschau</h2>

  <div class="prose prose-sm max-w-none mb-4 border border-gray-200 rounded-lg p-4 bg-white">
    ${html}
  </div>

  <button id="copyBtn"
    class="px-3 py-2 bg-blue-600 text-white rounded-md text-xs shadow hover:bg-blue-700">
    Kopieren
  </button>
  `;
