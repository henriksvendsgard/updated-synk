### New changes overview (since `origin/main`)

Committed changes only (excludes uncommitted working tree).

- **Branch**: `develop`
- **Base**: `origin/main`
- **Commit range**: merge-base(`develop`, `origin/main`)..`HEAD`
- **Commit count**: 2
- **Files changed**: 84
- **Insertions/Deletions**: 3552 insertions, 2686 deletions
- **Date range**: 2025-08-07 → 2025-08-08

### Commits

- 1f7700e1b — 2025-08-08 — Henrik Svendsgård — style(color profile): changed all tokens and fonts to autosync profile, tweaked mixins
- d97eeb5eb — 2025-08-07 — Henrik Svendsgård — feat(tokens): updated tokens to autosync tokens

### Notable highlights

- **Design tokens**: Updated color and typography tokens (`_tokens.scss`, `tokens.less`, token JSON files).
- **Typography**: Significant rework in `jkl/_typography.scss`; adopted new font families.
- **Components styling**: Broad updates across SCSS for `button`, `select`, `tabs`, `table`, `pagination`, `expander`, `tooltip`, and others to align with new tokens.
- **Fonts**: Replaced `FremtindGrotesk*` with `CabinetGrotesk` and `GeneralSans`; added `SynkLucideIcons` webfont; updated `webfonts.scss`. Mirrored in `portal/src/fonts`.
- **Build tooling**: Changes in `tokens.build.mjs`; Tailwind color map updates in `packages/jokul/src/tailwind/colors.ts`.
- **Global styles**: Adjustments in `.storybook/global.scss` and `portal/src/app/(frontend)/global.scss`.

### Changed files (status)

```
M       .storybook/global.scss
M       packages/jokul/src/components/button/styles/button.scss
M       packages/jokul/src/components/datepicker/styles/_calendar-date-button.scss
M       packages/jokul/src/components/datepicker/styles/_calendar-navigation-dropdown.scss
M       packages/jokul/src/components/description-list/styles/description-list.scss
M       packages/jokul/src/components/expander/styles/expandable.scss
M       packages/jokul/src/components/icon/styles/_base-styles.scss
M       packages/jokul/src/components/link-list/styles/link-list.scss
M       packages/jokul/src/components/nav-link/styles/nav-link.scss
M       packages/jokul/src/components/pagination/styles/pagination.scss
M       packages/jokul/src/components/select/styles/select.scss
M       packages/jokul/src/components/summary-table/styles/summary-table.scss
M       packages/jokul/src/components/table/styles/_table-header.scss
M       packages/jokul/src/components/table/styles/_table-pagination.scss
M       packages/jokul/src/components/tabs/styles/tabs.scss
M       packages/jokul/src/components/toggle-switch/styles/_toggle-slider.scss
M       packages/jokul/src/components/tooltip/styles/tooltip.scss
M       packages/jokul/src/core/jkl/_legacy-tokens.scss
M       packages/jokul/src/core/jkl/_tokens.scss
M       packages/jokul/src/core/jkl/_typography.scss
M       packages/jokul/src/core/styles/_color-tokens.scss
M       packages/jokul/src/core/styles/_legacy-tokens.scss
M       packages/jokul/src/core/styles/_paragraphs.scss
M       packages/jokul/src/core/styles/_tokens.scss
M       packages/jokul/src/core/styles/core.scss
M       packages/jokul/src/core/tokens.less
M       packages/jokul/src/core/tokens/color/color.brand.tokens.json
M       packages/jokul/src/core/tokens/color/color.semantic.tokens.json
M       packages/jokul/src/core/tokens/color/system.color.tokens.json
M       packages/jokul/src/core/tokens/typography/reference.typography.tokens.json
M       packages/jokul/src/core/tokens/typography/typography.tokens.json
A       packages/jokul/src/fonts/CabinetGrotesk-Bold.woff
A       packages/jokul/src/fonts/CabinetGrotesk-Bold.woff2
D       packages/jokul/src/fonts/FremtindGrotesk-Bold-Web.woff
D       packages/jokul/src/fonts/FremtindGrotesk-Bold-Web.woff2
D       packages/jokul/src/fonts/FremtindGrotesk-BoldItalic-Web.woff
D       packages/jokul/src/fonts/FremtindGrotesk-BoldItalic-Web.woff2
D       packages/jokul/src/fonts/FremtindGrotesk-Display-Web.woff
D       packages/jokul/src/fonts/FremtindGrotesk-Display-Web.woff2
D       packages/jokul/src/fonts/FremtindGrotesk-Italic-Web.woff
D       packages/jokul/src/fonts/FremtindGrotesk-Italic-Web.woff2
D       packages/jokul/src/fonts/FremtindGrotesk-Regular-Web.woff
D       packages/jokul/src/fonts/FremtindGrotesk-Regular-Web.woff2
D       packages/jokul/src/fonts/FremtindGroteskMono-Regular-Web.woff
D       packages/jokul/src/fonts/FremtindGroteskMono-Regular-Web.woff2
A       packages/jokul/src/fonts/GeneralSans-Bold.woff
A       packages/jokul/src/fonts/GeneralSans-Bold.woff2
A       packages/jokul/src/fonts/GeneralSans-Medium.woff
A       packages/jokul/src/fonts/GeneralSans-Medium.woff2
A       packages/jokul/src/fonts/GeneralSans-Regular.woff
A       packages/jokul/src/fonts/GeneralSans-Regular.woff2
A       packages/jokul/src/fonts/GeneralSans-Semibold.woff
A       packages/jokul/src/fonts/GeneralSans-Semibold.woff2
A       packages/jokul/src/fonts/SynkLucideIcons.woff2
M       packages/jokul/src/fonts/styles/webfonts.scss
M       packages/jokul/src/tailwind/colors.ts
M       packages/jokul/tokens.build.mjs
M       portal/src/app/(frontend)/global.scss
M       portal/src/components/keyboard-shortcut.module.scss
M       portal/src/components/portable-text/code-block/code-block.module.scss
A       portal/src/fonts/CabinetGrotesk-Bold.woff
A       portal/src/fonts/CabinetGrotesk-Bold.woff2
D       portal/src/fonts/FremtindGrotesk-Bold-Web.woff
D       portal/src/fonts/FremtindGrotesk-Bold-Web.woff2
D       portal/src/fonts/FremtindGrotesk-BoldItalic-Web.woff
D       portal/src/fonts/FremtindGrotesk-BoldItalic-Web.woff2
D       portal/src/fonts/FremtindGrotesk-Display-Web.woff
D       portal/src/fonts/FremtindGrotesk-Display-Web.woff2
D       portal/src/fonts/FremtindGrotesk-Italic-Web.woff
D       portal/src/fonts/FremtindGrotesk-Italic-Web.woff2
D       portal/src/fonts/FremtindGrotesk-Regular-Web.woff
D       portal/src/fonts/FremtindGrotesk-Regular-Web.woff2
D       portal/src/fonts/FremtindGroteskMono-Regular-Web.woff
D       portal/src/fonts/FremtindGroteskMono-Regular-Web.woff2
A       portal/src/fonts/GeneralSans-Bold.woff
A       portal/src/fonts/GeneralSans-Bold.woff2
A       portal/src/fonts/GeneralSans-Medium.woff
A       portal/src/fonts/GeneralSans-Medium.woff2
A       portal/src/fonts/GeneralSans-Regular.woff
A       portal/src/fonts/GeneralSans-Regular.woff2
A       portal/src/fonts/GeneralSans-Semibold.woff
A       portal/src/fonts/GeneralSans-Semibold.woff2
A       portal/src/fonts/SynkLucideIcons.woff2
M       utils/dev-example/CodeBlock/CodeBlock.scss
```

### Per-file line changes

```
2	2	.storybook/global.scss
146	146	packages/jokul/src/components/button/styles/button.scss
80	80	packages/jokul/src/components/datepicker/styles/_calendar-date-button.scss
47	47	packages/jokul/src/components/datepicker/styles/_calendar-navigation-dropdown.scss
48	48	packages/jokul/src/components/description-list/styles/description-list.scss
129	131	packages/jokul/src/components/expander/styles/expandable.scss
14	12	packages/jokul/src/components/icon/styles/_base-styles.scss
78	78	packages/jokul/src/components/link-list/styles/link-list.scss
48	48	packages/jokul/src/components/nav-link/styles/nav-link.scss
40	40	packages/jokul/src/components/pagination/styles/pagination.scss
271	280	packages/jokul/src/components/select/styles/select.scss
46	46	packages/jokul/src/components/summary-table/styles/summary-table.scss
64	66	packages/jokul/src/components/table/styles/_table-header.scss
117	117	packages/jokul/src/components/table/styles/_table-pagination.scss
92	97	packages/jokul/src/components/tabs/styles/tabs.scss
113	114	packages/jokul/src/components/toggle-switch/styles/_toggle-slider.scss
53	58	packages/jokul/src/components/tooltip/styles/tooltip.scss
4	4	packages/jokul/src/core/jkl/_legacy-tokens.scss
219	52	packages/jokul/src/core/jkl/_tokens.scss
310	224	packages/jokul/src/core/jkl/_typography.scss
121	58	packages/jokul/src/core/styles/_color-tokens.scss
32	33	packages/jokul/src/core/styles/_legacy-tokens.scss
6	6	packages/jokul/src/core/styles/_paragraphs.scss
212	124	packages/jokul/src/core/styles/_tokens.scss
42	47	packages/jokul/src/core/styles/core.scss
305	100	packages/jokul/src/core/tokens.less
106	9	packages/jokul/src/core/tokens/color/color.brand.tokens.json
209	55	packages/jokul/src/core/tokens/color/color.semantic.tokens.json
1	1	packages/jokul/src/core/tokens/color/system.color.tokens.json
2	5	packages/jokul/src/core/tokens/typography/reference.typography.tokens.json
47	16	packages/jokul/src/core/tokens/typography/typography.tokens.json
-	-	packages/jokul/src/fonts/CabinetGrotesk-Bold.woff
-	-	packages/jokul/src/fonts/CabinetGrotesk-Bold.woff2
-	-	packages/jokul/src/fonts/FremtindGrotesk-Bold-Web.woff
-	-	packages/jokul/src/fonts/FremtindGrotesk-Bold-Web.woff2
-	-	packages/jokul/src/fonts/FremtindGrotesk-BoldItalic-Web.woff
-	-	packages/jokul/src/fonts/FremtindGrotesk-BoldItalic-Web.woff2
-	-	packages/jokul/src/fonts/FremtindGrotesk-Display-Web.woff
-	-	packages/jokul/src/fonts/FremtindGrotesk-Display-Web.woff2
-	-	packages/jokul/src/fonts/FremtindGrotesk-Italic-Web.woff
-	-	packages/jokul/src/fonts/FremtindGrotesk-Italic-Web.woff2
-	-	packages/jokul/src/fonts/FremtindGrotesk-Regular-Web.woff
-	-	packages/jokul/src/fonts/FremtindGrotesk-Regular-Web.woff2
-	-	packages/jokul/src/fonts/FremtindGroteskMono-Regular-Web.woff
-	-	packages/jokul/src/fonts/FremtindGroteskMono-Regular-Web.woff2
-	-	packages/jokul/src/fonts/GeneralSans-Bold.woff
-	-	packages/jokul/src/fonts/GeneralSans-Bold.woff2
-	-	packages/jokul/src/fonts/GeneralSans-Medium.woff
-	-	packages/jokul/src/fonts/GeneralSans-Medium.woff2
-	-	packages/jokul/src/fonts/GeneralSans-Regular.woff
-	-	packages/jokul/src/fonts/GeneralSans-Regular.woff2
-	-	packages/jokul/src/fonts/GeneralSans-Semibold.woff
-	-	packages/jokul/src/fonts/GeneralSans-Semibold.woff2
-	-	packages/jokul/src/fonts/SynkLucideIcons.woff2
87	98	packages/jokul/src/fonts/styles/webfonts.scss
56	3	packages/jokul/src/tailwind/colors.ts
223	264	packages/jokul/tokens.build.mjs
87	86	portal/src/app/(frontend)/global.scss
10	6	portal/src/components/keyboard-shortcut.module.scss
34	34	portal/src/components/portable-text/code-block/code-block.module.scss
-	-	portal/src/fonts/CabinetGrotesk-Bold.woff
-	-	portal/src/fonts/CabinetGrotesk-Bold.woff2
-	-	portal/src/fonts/FremtindGrotesk-Bold-Web.woff
-	-	portal/src/fonts/FremtindGrotesk-Bold-Web.woff2
-	-	portal/src/fonts/FremtindGrotesk-BoldItalic-Web.woff
-	-	portal/src/fonts/FremtindGrotesk-BoldItalic-Web.woff2
-	-	portal/src/fonts/FremtindGrotesk-Display-Web.woff
-	-	portal/src/fonts/FremtindGrotesk-Display-Web.woff2
-	-	portal/src/fonts/FremtindGrotesk-Italic-Web.woff
-	-	portal/src/fonts/FremtindGrotesk-Italic-Web.woff2
-	-	portal/src/fonts/FremtindGrotesk-Regular-Web.woff
-	-	portal/src/fonts/FremtindGrotesk-Regular-Web.woff2
-	-	portal/src/fonts/FremtindGroteskMono-Regular-Web.woff
-	-	portal/src/fonts/FremtindGroteskMono-Regular-Web.woff2
-	-	portal/src/fonts/GeneralSans-Bold.woff
-	-	portal/src/fonts/GeneralSans-Bold.woff2
-	-	portal/src/fonts/GeneralSans-Medium.woff
-	-	portal/src/fonts/GeneralSans-Medium.woff2
-	-	portal/src/fonts/GeneralSans-Regular.woff
-	-	portal/src/fonts/GeneralSans-Regular.woff2
-	-	portal/src/fonts/GeneralSans-Semibold.woff
-	-	portal/src/fonts/GeneralSans-Semibold.woff2
-	-	portal/src/fonts/SynkLucideIcons.woff2
51	51	utils/dev-example/CodeBlock/CodeBlock.scss
```
