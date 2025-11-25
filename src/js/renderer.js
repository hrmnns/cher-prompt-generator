import { PromptTypes } from "./types.js";

export function renderMarkdown(state) {
  const type = state.currentType;
  const v = state.currentValues;

  switch (type) {
    case PromptTypes.START:
      return `
# Start-Prompt

**Ziel:**  
${v.ziel || "_"}

**Rolle:**  
${v.rolle || "_"}

**Kontext:**  
${v.kontext || "_"}

**Arbeitsstil:**  
${v.arbeitsstil || "_"}

**Constraints:**  
${v.constraints || "_"}

**Ausgabeformat:**  
${v.ausgabeformat || "_"}
`.trim();

    case PromptTypes.DRIFT:
      return `
# Drift-Korrektur

**Driftart:**  
${v.driftart || "_"}

**Korrekturtext:**  
${v.korrekturtext || "_"}

**Ziel:**  
${v.ziel || "_"}

**Restriktionen:**  
${v.restriktionen || "_"}
`.trim();

    case PromptTypes.ROLE:
      return `
# Rollenaktivierung

**Rolle:**  
${v.rolle || "_"}

**Rollenbeschreibung:**  
${v.rollenbeschreibung || "_"}

**Umfang:**  
${v.umfang || "_"}

**Hinweise:**  
${v.hinweise || "_"}
`.trim();

    case PromptTypes.PERSIST:
      return `
# Persistenz-Prompt

**Regeln:**  
${v.regeln || "_"}

**Kontext:**  
${v.kontext || "_"}

**Sichtbarkeit:**  
${v.sichtbarkeit || "_"}

**Hinweise:**  
${v.hinweise || "_"}
`.trim();

    case PromptTypes.HANDOVER:
      return `
# Handover

**Kontext:**  
${v.kontext || "_"}

**Aufgabenstand:**  
${v.aufgabenstand || "_"}

**Ziele:**  
${v.ziele || "_"}

**Restriktionen:**  
${v.restriktionen || "_"}

**Adresse:**  
${v.adresse || "_"}
`.trim();

    default:
      return "Kein Template verfügbar.";
  }
}
