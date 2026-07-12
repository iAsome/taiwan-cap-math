# Math V2 Human Preview Browser and UI Validation R1

This kit performs the next authorized stage after isolated preview integration.

It applies three centrally approved preview-only UI corrections and then validates the preview in a real headless Chrome, Chromium, or Edge browser through the Chrome DevTools Protocol.

## Central corrections

1. MC and constructed-response numbering is changed from zero-based browser array indexes to visible 1-based question numbers.
2. The preview now renders the complete lecture and review fields instead of a reduced subset.
3. Keyboard focus visibility, responsive tables, mobile overflow handling, reduced-motion behavior, and detailed answer presentation are hardened.

## Browser coverage

- desktop initial render;
- all 23 units and their locked skill counts;
- complete lecture sections;
- unit quiz rendering and numbering;
- engineering mock 25 MC + 2 CR rendering and numbering;
- same-seed determinism and different-seed variation;
- all 23 unit-quiz deterministic contracts;
- all 178 SVG files decoded by the browser;
- accessibility-name and heading checks;
- preview-only localStorage namespace;
- mobile 390 × 844 layout and overflow;
- no console, runtime, network, or HTTP errors;
- no main-route or loader connection to the isolated preview.

## Safety boundary

This kit does not alter the default student route, generated V2, V1 rollback, human batch source, or production data. It does not delete the old database.

The browser test is mandatory. If local browser policy blocks the test, stop without committing and use an unrestricted local Chrome or Edge by setting `CHROME_PATH` or `EDGE_PATH`.
