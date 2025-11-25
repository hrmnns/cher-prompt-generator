## Architekturüberblick

### UI Layer
- Header
- Footer
- PromptTypeSelector
- DynamicFormArea
- PreviewPane
- Wizard (optional)

### State Layer
- state.js → aktueller Prompt-Typ & Feldwerte

### Data Layer
- types.js → Prompt-Typ-Definitionen

### Rendering
- renderer.js → erzeugt Markdown-basierte Prompt-Templates

### Index
- index.html → beinhaltet Tailwind, App-Initialisierung und Layout
