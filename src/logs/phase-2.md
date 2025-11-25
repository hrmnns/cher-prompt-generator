# Phase 2 – Problemrahmen (Abschluss)

Die Phase 2 wurde erfolgreich abgeschlossen. Der Problemrahmen für die technische Umsetzung des Prompt-Generators ist nun vollständig spezifiziert. Die folgenden Elemente wurden definiert und abgestimmt:

## 1. Prompt-Typen für Version 1
- Start-Prompt  
- Drift-Korrektur  
- Rollenaktivierung  
- Persistenz-Prompt  
- Handover  

## 2. Datenmodell (stabile Version)
### PromptType
- id, label, description  
- fields[]  
- wizardSteps[] (optional)  

### Field
- id, label, type (textbox/textarea/select/boolean)  
- required  
- placeholder  
- options[]  
- validation (optional)  

### Prompt-Instanz
- type  
- values{}  

## 3. Felderdefinitionen je Prompt-Typ
Für jeden Prompt-Typ liegt eine präzise Liste der Felder, Feldtypen und Pflichtattribute vor.  
Dies bildet die Grundlage für die dynamische Formularerzeugung in Phase 3.

## 4. Feste Auswahlwerte
- **Rollen:** Assistent, Experte, Reviewer, Analyst, Erklärer, Coach, Ideengeber  
- **Driftarten:** Fokusverlust, Stilabweichung, Rollendrift, Zielverfehlung, Unklare Struktur  
- **Persistenz-Sichtbarkeit:** offen, implizit  

Diese Werte sind stabil und können direkt in ComboBoxes übernommen werden.

## 5. Wizard- und UI-Flow-Konzept
- Optionaler, schrittbasierter Wizard  
- Standardflow: Single-Page mit dynamischen Formularen + Markdown-Preview  
- Wizard nur aktiv, wenn `wizardSteps` definiert sind

## 6. Abhängigkeiten & UX-Punkte
- State-Handling pro Prompt-Typ  
- Debouncing für Live-Vorschau  
- Markdown-Library-Auswahl  
- Mobile-Optimierung  
- Minimierung der visuellen Überladung  

## 🎯 Fazit der Phase 2
Alle funktionalen, strukturellen und UI-relevanten Rahmenbedingungen sind geklärt.  
Die Spezifikation ist vollständig, stabil und direkt in Code überführbar.

## ▶️ Nächster Schritt
Übergang zu **Phase 3 – Operative Bearbeitung**, in der die Projektstruktur, die Grundmodule und die ersten UI-Komponenten implementiert werden.
