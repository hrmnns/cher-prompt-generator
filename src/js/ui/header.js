export function renderHeader(el) {
  el.innerHTML = `
    <div class="container mx-auto px-4 py-4 flex items-center space-x-3 max-w-6xl">
      <img src="./assets/icon.svg" class="w-8 h-8 opacity-70" alt="Icon" />
      <h1 class="text-2xl font-semibold tracking-tight">Prompt-Generator</h1>
    </div>
  `;
}
