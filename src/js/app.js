import { PromptTypes, PromptDefinitions } from "./types.js";
import { state } from "./state.js";

import { renderHeader } from "./ui/header.js";
import { renderFooter } from "./ui/footer.js";
import { renderPromptTypeSelector } from "./ui/promptTypeSelector.js";
import { renderDynamicFormArea } from "./ui/dynamicFormArea.js";
import { renderPreviewPane } from "./ui/previewPane.js";

function init() {
  renderHeader(document.getElementById("app-header"));
  renderFooter(document.getElementById("app-footer"));

  renderPromptTypeSelector(
    document.getElementById("prompt-type-selector"),
    onSelectType
  );

  state.currentType = PromptTypes.START;
  state.currentValues = {};

  mountForm();
  mountPreview();
}

function onSelectType(typeId) {
  state.currentType = typeId;
  state.currentValues = {};
  mountForm();
  mountPreview();
}

function onFieldChange(fieldId, newValue) {
  state.currentValues[fieldId] = newValue;
  mountPreview();
}

function mountForm() {
  renderDynamicFormArea(
    document.getElementById("dynamic-form-area"),
    state.currentType,
    state.currentValues,
    onFieldChange
  );
}

function mountPreview() {
  renderPreviewPane(document.getElementById("preview-pane"), state);
}

init();
