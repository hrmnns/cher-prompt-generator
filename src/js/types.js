export const Roles = [
  "Assistent",
  "Experte",
  "Reviewer",
  "Analyst",
  "Erklärer",
  "Coach",
  "Ideengeber",
];

export const DriftTypes = [
  "Fokusverlust",
  "Stilabweichung",
  "Rollendrift",
  "Zielverfehlung",
  "Unklare Struktur",
];

export const PersistVisibility = ["offen", "implizit"];

export const PromptTypes = {
  START: "start",
  DRIFT: "drift",
  ROLE: "role",
  PERSIST: "persist",
  HANDOVER: "handover",
};

export const PromptDefinitions = {
  [PromptTypes.START]: {
    label: "Start-Prompt",
    fields: [
      { id: "ziel", label: "Ziel", type: "textarea", required: true },
      { id: "rolle", label: "Rolle", type: "select", options: Roles, required: true },
      { id: "kontext", label: "Kontext", type: "textarea" },
      { id: "arbeitsstil", label: "Arbeitsstil", type: "textbox" },
      { id: "constraints", label: "Constraints", type: "textarea" },
      { id: "ausgabeformat", label: "Ausgabeformat", type: "textbox" },
    ],
  },

  [PromptTypes.DRIFT]: {
    label: "Drift-Korrektur",
    fields: [
      { id: "driftart", label: "Driftart", type: "select", options: DriftTypes, required: true },
      { id: "korrekturtext", label: "Korrekturtext", type: "textarea", required: true },
      { id: "ziel", label: "Ziel", type: "textarea" },
      { id: "restriktionen", label: "Restriktionen", type: "textarea" },
    ],
  },

  [PromptTypes.ROLE]: {
    label: "Rollenaktivierung",
    fields: [
      { id: "rolle", label: "Rolle", type: "select", options: Roles, required: true },
      { id: "rollenbeschreibung", label: "Rollenbeschreibung", type: "textarea" },
      { id: "umfang", label: "Umfang", type: "textbox" },
      { id: "hinweise", label: "Hinweise", type: "textarea" },
    ],
  },

  [PromptTypes.PERSIST]: {
    label: "Persistenz-Prompt",
    fields: [
      { id: "regeln", label: "Regeln", type: "textarea", required: true },
      { id: "kontext", label: "Kontext", type: "textarea" },
      { id: "sichtbarkeit", label: "Sichtbarkeit", type: "select", options: PersistVisibility, required: true },
      { id: "hinweise", label: "Hinweise", type: "textarea" },
    ],
  },

  [PromptTypes.HANDOVER]: {
    label: "Handover",
    fields: [
      { id: "kontext", label: "Kontext", type: "textarea", required: true },
      { id: "aufgabenstand", label: "Aufgabenstand", type: "textarea", required: true },
      { id: "ziele", label: "Ziele", type: "textarea" },
      { id: "restriktionen", label: "Restriktionen", type: "textarea" },
      { id: "adresse", label: "Adresse", type: "textbox" },
    ],
  },
};
