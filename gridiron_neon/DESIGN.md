```markdown
# Design System: High-Octane Athleticism

## 1. Overview & Creative North Star
**The Creative North Star: "Kinetic Cyber-Pitch"**

This design system moves away from the static, boxy layouts of traditional sports apps. Instead, it captures the raw energy of a night match under stadium floodlights—high contrast, vibrating accents, and deep, atmospheric depth. We break the "template" look by utilizing intentional asymmetry, overlapping player cards, and a typography scale that feels as aggressive as a striker’s run.

The UI is not a flat canvas; it is an immersive environment. We use "Kinetic Layering"—where elements feel like they are floating over a digital pitch—to create a sense of motion even when the user is stationary.

---

## 2. Colors & Surface Architecture
The palette is rooted in a "Void Black" foundation to allow the neon accents to achieve maximum luminosity.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections. 
*   **How to define boundaries:** Use shifts between `surface_container_low` and `surface_container`. 
*   **The Transition:** A section transition should be felt through a subtle shift in the dark gradient, not seen through a stroke.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, semi-transparent stadium tiers:
*   **Level 0 (Base):** `surface` (#0e0e0f) with a radial gradient transition toward `surface_bright` (#2c2c2d) in the top right corner.
*   **Level 1 (Sections):** `surface_container_low` (#131314).
*   **Level 2 (Cards/Modules):** `surface_container` (#1a191b).
*   **Level 3 (Pop-overs/Modals):** `surface_container_highest` (#262627).

### The "Glass & Glow" Rule
To achieve the high-energy look, use the `secondary_container` (#9800d0) at 15% opacity with a `20px` backdrop blur for floating navigation elements. For primary actions, apply an outer glow using `primary` (#8eff71) at 30% opacity with a `16px` blur radius to simulate neon illumination.

---

## 3. Typography
We utilize **Space Grotesk** exclusively. Its geometric construction and wide apertures provide the "Athletic Tech" aesthetic required for a modern football generator.

*   **Display (L/M/S):** Used for team names and score totals. Set to `font-weight: 700` with `letter-spacing: -0.04em`. This creates a compressed, high-impact "jersey number" feel.
*   **Headline (L/M/S):** Used for section titles. Use `text-transform: uppercase` to instill authority.
*   **Title (L/M/S):** Used for player names within cards. 
*   **Body & Labels:** Used for stats and metadata. Keep these clean and highly legible against the dark background using `on_surface_variant`.

**Editorial Tip:** Don't be afraid of extreme scale. A `display-lg` player number sitting behind a `body-md` stat creates a sophisticated, layered editorial look.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** and light simulation rather than drop shadows.

*   **The Layering Principle:** Place a `surface_container_highest` card on a `surface_dim` background to create a "lift" that feels integrated into the stadium atmosphere.
*   **Ambient Shadows:** For floating modals, use a diffused shadow: `0px 20px 40px rgba(0, 0, 0, 0.6)`. Never use pure black shadows; tint the shadow with a hint of `secondary` (#BC13FE) at 5% opacity to maintain the "Neon" vibe.
*   **The Ghost Border:** If a boundary is required for accessibility (e.g., input fields), use `outline_variant` at **15% opacity**.
*   **Glassmorphism:** All "Player Stats" overlays must use a backdrop blur (`blur-md`) to ensure the field/background colors bleed through, creating a sense of physical presence.

---

## 5. Components

### Buttons
*   **Primary:** Background `primary` (#8eff71), Text `on_primary`. Apply a subtle linear gradient from `primary` to `primary_container` to add "soul." Shape: `rounded-md` (0.375rem).
*   **Secondary (The "Neon Pulse"):** Transparent background, `Ghost Border` using `secondary`, Text `secondary`. On hover, add a `4px` glow effect using `secondary_dim`.

### Player Cards
*   **Style:** No borders. Use `surface_container_high`.
*   **Visuals:** Use a "cut-out" player image that overlaps the top edge of the card (Asymmetry).
*   **Separation:** Forbid dividers. Use `spacing-4` vertical gaps or a `surface_variant` background shift to separate "Defense" from "Midfield" sections.

### Input Fields (Team Name/Search)
*   **Base:** `surface_container_lowest`. 
*   **Active State:** The bottom edge glows with a `2px` thick line of `primary` (#39FF14). No full-box stroke.

### Specialized Component: The "Energy Gauge"
*   For player stamina or team chemistry, use a horizontal bar with a gradient from `secondary` to `primary`. This visualizes the "high-energy" theme requested.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use intentional asymmetry. Offset player cards or list items by `8px` to create a dynamic "scrolling" feel.
*   **Do** use `Space Grotesk` at heavy weights (700+) for all numerical data.
*   **Do** lean into the neon. Use `primary` for "Success/Active" and `secondary` for "Special/Premium" features.

### Don't:
*   **Don't** use 1px solid white or grey borders. They break the immersive dark-mode depth.
*   **Don't** use standard "Drop Shadows" from a UI kit. They look muddy on dark gradients. Use tonal shifts instead.
*   **Don't** use standard "Close" icons in boxes. Use floating, high-contrast 'X' marks with `label-md` text to maintain the editorial feel.
*   **Don't** use default padding. Use the **Spacing Scale** (specifically `spacing-8` and `spacing-12`) to provide massive breathing room between major sections.```