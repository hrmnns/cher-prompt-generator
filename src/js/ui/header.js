export function renderHeader(el) {
  el.innerHTML = `
    <div class="container mx-auto px-4 py-4 flex items-center space-x-3">
      <img src="./assets/icon.svg" class="w-8 h-8" alt="Icon" />
      <h1 class="text-xl font-semibold">Prompt-Generator</h1>
    </div>
  `;
}
