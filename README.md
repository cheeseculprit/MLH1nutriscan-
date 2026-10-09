# NutriScan AI — Multimodal Food Intelligence

> **“Know your food. Make smarter choices.”**  
> An evidence-backed multimodal nutrition intelligence web application designed for the MLH Hackathon, powered by Gemma 4.

---

## 🥗 Product Overview

**NutriScan AI** empowers consumers, students, and health-conscious eaters to decode packaged-food labels, hidden ingredients, and cooked meals. It converts dense, confusing nutrition tables and microscopic ingredient paragraphs into transparent, evidence-grounded intelligence and practical consumer actions.

### Core Experience Pipeline:
```
Upload / Snap Food Image 
  → Multi-Stage Vision Analysis (Gemma 4) 
  → Strict Data Provenance Extraction 
  → Cross-Verification (Open Food Facts / USDA FoodData) 
  → Actionable Nutrition Intelligence Report
```

---

## 🎨 Visual Design System

Crafted with an editorial health-tech aesthetic emphasizing clarity, calm intelligence, and high contrast:

- **Primary Forest Green**: `#163D2B`
- **Secondary Green**: `#3D7954`
- **Soft Mint Surfaces**: `#E4F0E5`
- **Warm Cream Background**: `#F6F4E9`
- **White Cards**: `#FFFFFF`
- **Primary Text**: `#1D2921`
- **Secondary Text**: `#68736B`
- **Borders**: `#E2E8E0`
- **Warning Amber**: `#A65D12`
- **Error Red**: `#B42318`

Typography: **Inter** modern sans-serif with tabular numerals for precision metrics.

---

## 🚀 Key Features & Screen Architecture

### 1. Landing & Home Dashboard
- **Hero Presentation**: Headline *"What's really in your food?"*, quick CTAs, and an interactive scan preview card.
- **Quick-Start Modes**: Direct entrypoints for *Packaged Food*, *Cooked Meal*, and *Product Comparison*.
- **Curated Sample Showcase**: 4 pre-configured foods ready for 1-click evaluation in under 90 seconds.
- **Recent Scans**: Live local history with zero fabricated data.
- **Trust Section**: Transparent disclosures explaining AI uncertainty and safety limits.

### 2. Scan Workspace
- **Responsive 2-Column Layout**: Drag-and-drop zone on desktop, touch-friendly on mobile.
- **Image Controls**: File drag & drop, file picker, camera capture simulation, replace, and remove.
- **Format Validation**: Strict client-side verification for JPG, JPEG, PNG, and WEBP under 10 MB.
- **Packaged Focus Areas**: Front of package, Ingredients list, Nutrition label, or Expiry date.
- **Cooked Meal Context**: Optional dish notes and portion basis.

### 3. AI Analysis Loading State
- **Honest 5-Stage Stepper**:
  1. *Processing image*
  2. *Reading visible food information*
  3. *Analyzing nutrition details*
  4. *Checking available reference data*
  5. *Preparing the report*
- User cancellation support with `AbortSignal`.

### 4. Food Analysis Results (Centerpiece)
- **Product Header**: Name confidence check, serving basis, timestamps, and action buttons.
- **Nutrition Overview**: Standardized metric cards for Calories, Protein, Carbs, Total Sugar, Total Fat, Saturated Fat, and Sodium. Missing values explicitly read *"Not available"* (never false zeros).
- **Macronutrient Gram Distribution Bar**: Visual proportion breakdown of Carbs, Protein, and Fat.
- **"What This Means"**: Plain-language nutritional observations without simplistic "good" or "bad" judgments.
- **NOVA Processing Audit**: Formal Monteiro et al. 4-tier classification with identified formulation markers.
- **Ingredients & Additive Intelligence**: Additive explanations (emulsifiers, leaveners), declared allergens, and a mandatory prominent red warning:
  > *“Always verify the original packaging. AI extraction may miss allergens.”*
- **Food Safety Information**: Distinguishes *Best before* from *Use by* dates, storage instructions, and recall status.
- **Evidence & Verification Panel**: Direct bounding OCR snippets and external database links (Open Food Facts / USDA FoodData Central).
- **"Your Next Best Step"**: Grounded consumer recommendations without medical prescriptions.
- **Follow-up Chat Drawer**: Evidence-grounded conversational agent with suggested question chips, citations, and medical guardrails.
- **Print / PDF Export**: Dedicated clean print stylesheet.

### 5. Product Comparison Engine
- Compares any two foods side-by-side.
- Normalization toggle: **Per 100 g** vs **Stated Package Portion**.
- Neutral comparative language (e.g. *"2.1x lower sodium per 100g"*).

### 6. Food History
- Persistent `localStorage` tracking of user scans.
- Search by food name, ingredient, or brand with category filters.
- Individual deletion and full history wipe.

### 7. Settings & Transparency Modal
- Demo Adapter vs Live Gemma 4 / Gemini API toggle.
- Multimodal model architecture details.
- Data privacy confirmation (100% local client-side retention).
- Multi-language preference selector (EN, ES, FR, DE).

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript (Strict Mode)
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4 with custom semantic design tokens
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library + JSDOM

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js v18+ (tested on Node v24)
- npm v9+

### Installation & Run
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in your browser
# Default Vite URL: http://localhost:5173 (or http://localhost:5174)
```

### Production Build & Type Checking
```bash
npm run build
```

### Running Test Suite
```bash
npm test
```
*Current test suite covers upload validation, missing data fallbacks, 100g normalization, non-medical chat safety, and UI disclosure states (11/11 passing).*

---

## ⏱️ 90-Second MLH Hackathon Demo Guide

1. **Launch the Landing Page**: Observe the clean typography, trust indicators, and quick-start cards.
2. **Click "Try a sample (90s Demo)"**: Instantly loads *Nature Valley Crunchy Granola Bars*.
3. **Inspect the Nutrition Overview**: Check the 11g added sugar warning, provenance badges, and macro gram bar.
4. **Scroll to "What This Means" & Ingredients**: View the NOVA 4 classification, Soy allergen banner, and additive breakdown.
5. **Open Evidence Panel**: See the exact OCR quotes extracted from the back packaging.
6. **Ask a Question in Follow-Up Chat**: Click *"How much sugar is in one serving?"* to see the cited response.
7. **Click "Compare"**: See Nature Valley compared with *Dang Coconut Chips* normalized to 100g.

---

## ⚖️ Ethical & Scientific Disclaimers

- NutriScan AI is an educational food literacy tool, not a medical or clinical diagnostic system.
- Photographs alone cannot establish microbiological sterility, bacterial contamination, or trace airborne allergens.
- Always review physical manufacturer packaging before consuming products if you have severe allergies.
