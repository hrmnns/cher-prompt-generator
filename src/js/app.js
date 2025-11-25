import { PromptTypes } from "./types.js";
import { state } from "./state.js";

import { renderHeader } from "./ui/header.js";
import { renderFooter } from "./ui/footer.js";
import { renderPromptTypeSelector } from "./ui/promptTypeSelector.js";
import { renderDynamicFormArea } from "./ui/dynamicFormArea.js";
import { renderPreviewPane } from "./ui/previewPane.js";

function init() {
  // Header/Footer
  renderHeader(document.getElementById("app-header"));
  renderFooter(document.getElementById("app-footer"));

  // Prompt-Type-Selector
  renderPromptTypeSelector(
    document.getElementById("prompt-type-selector"),
    onSelectType
  );

  // Initial Type
  state.currentType = PromptTypes.START;
  renderDynamicFormArea(
    document.getElementById("dynamic-form-area"),
    state.currentType,
    state.currentValues
  );
  renderPreviewPane(document.getElementById("preview-pane"), state);
}

function onSelectType(typeId) {
  state.currentType = typeId;
  state.currentValues = {};

  renderDynamicFormArea(
    document.getElementById("dynamic-form-area"),
    typeId,
    state.currentValues
  );

  renderPreviewPane(document.getElementById("preview-pane"), state);
}

init();
