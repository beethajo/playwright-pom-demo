# Playwright + TypeScript + Page Object Model (POM)

A minimal, production-style starter for Playwright using the Page Object Model.

## Prerequisites
- Node.js 18+
- (Optional) VS Code with the Playwright extension

## Setup
```bash
npm i
npx playwright install
```

## Run Tests
```bash
npm test
# or with the UI
npm run test:ui
```

## What this includes
- **TypeScript** configuration
- **Playwright Test** config with multiple browsers
- **POM structure** under `src/pages`
- A **sample test** using a public demo site (Sauce Demo)

## Project Structure
```text
src/
  pages/
    BasePage.ts
    LoginPage.ts
    InventoryPage.ts
  tests/
    login.spec.ts
  utils/
    testData.ts
playwright.config.ts
tsconfig.json
package.json
```

## Notes
- The sample test logs into https://www.saucedemo.com with known public demo credentials.
- To adapt this template to your app under test, replace the page objects and selectors.
