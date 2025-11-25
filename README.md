# Prompt-Generator (Beispielprojekt nach cher-alot2come)

Dieses Repository enthält die technische Umsetzung des Beispielprojekts **„Prompt-Generator WebApp“**, das in der Methodik *cher-alot2come* zur Demonstration des Makro- und Mikroprozesses entwickelt wird.

Das Projekt besteht aus einer kleinen HTML/Tailwind-WebApp, mit der Anwender strukturierte Prompts generieren können (Start-Prompts, Drift-Korrektur, Rollenaktivierung, Persistenz usw.).

## 🎯 Ziele

- Demonstration der cher-alot2come-Methode anhand eines realen Mini-Projekts  
- Umsetzung einer einfach hostbaren WebApp (HTML + Tailwind + JS)  
- Saubere Trennung zwischen Methodik-Repo und Beispielprojekt  
- Dokumentation aller Schritte nach Makro- und Mikroprozess  

## 🧩 Features der WebApp

- Auswahl des Prompt-Typs (z. B. Start-Prompt, Drift-Korrektur, Persistenz, Handover)
- Dynamische Felder abhängig vom ausgewählten Prompt-Typ
- ComboBoxen für Rollen, Drift-Arten etc.
- Markdown-Preview des fertigen Prompts
- „Copy to Clipboard“-Button
- Optionaler mehrstufiger Workflow inkl. Progress-Bar
- Header mit Icon, Titel, Untertitel
- Footer mit Projekt-/Herstellerhinweisen

## 📂 Struktur

```
src/
  index.html
  app.js
  assets/icon.svg
docs/
  overview.md
  architecture.md
  process-macro.md
  process-micro.md
  handover.md
```

## 🚀 Starten

Diese WebApp benötigt **kein Build-Tool**.

Einfach öffnen:

[https://hrmnns.github.io/cher-prompt-generator/src/index.html](https://hrmnns.github.io/cher-prompt-generator/src/index.html)

Tailwind wird per CDN eingebunden.

## 🔗 Verknüpfung zur Methode

Die methodische Dokumentation dieses Projekts befindet sich im Repository:

👉 https://github.com/hrmnns/cher-alot2come (Beispieldokument: `docs/examples/prompt-generator.md`)

## 📜 Lizenz

MIT License  
