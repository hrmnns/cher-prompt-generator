export function renderWizard(el, steps, currentStep, onNext, onBack) {
  const total = steps.length;

  const stepBar = `
    <div class="flex items-center justify-between mb-4">
      ${steps
        .map(
          (s, i) => `
            <div class="flex-1 text-center">
              <div class="text-xs ${i === currentStep ? "font-bold text-blue-600" : "text-gray-400"}">
                ${s.title}
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;

  el.innerHTML = `
    ${stepBar}
    <div id="wizard-step-container" class="rounded-lg border p-4 bg-gray-50 min-h-[200px]">
      <!-- step content injected by parent -->
    </div>

    <div class="flex justify-between mt-4">
      <button id="wizardBack"
        class="px-3 py-2 border rounded-md text-sm"
        ${currentStep === 0 ? "disabled" : ""}
      >
        Zurück
      </button>

      <button id="wizardNext"
        class="px-3 py-2 bg-blue-600 text-white rounded-md text-sm shadow"
      >
        Weiter
      </button>
    </div>
  `;

  el.querySelector("#wizardBack")?.addEventListener("click", onBack);
  el.querySelector("#wizardNext")?.addEventListener("click", onNext);
}
