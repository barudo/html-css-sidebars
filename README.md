# HTML CSS Sidebars

Responsive sidebar prototype built with vanilla HTML, vanilla JavaScript, vanilla CSS, Bootstrap 5, and Font Awesome.

## Project Brief

Create two standalone HTML files that reproduce the sidebar behavior shown in the provided Framer prototype and reference images.

Prototype:
https://sidebar-prototype.framer.website/

The provided HTML reference under `attachments/HTML/` should be used only as a reference. The implementation should not depend on jQuery, TypeScript, or JavaScript frameworks.

## Technology Requirements

- Vanilla JavaScript
- Vanilla CSS
- Bootstrap 5
- Font Awesome icons
- No jQuery
- No TypeScript
- No JavaScript frameworks

## Deliverables

### 1. Primary Sidebar Only

Create one HTML file containing:

- A primary sidebar
- A main content area
- Primary sidebar expand/minimize behavior
- Responsive mobile behavior where the primary sidebar becomes a bottom app bar

Reference image:

- `Primary Sidebar Small and Big.png`

### 2. Primary and Secondary Sidebars

Create one HTML file containing:

- A primary sidebar
- A secondary sidebar
- A main content area
- Desktop behavior where only one sidebar can be expanded at a time
- Responsive mobile behavior where:
  - The primary sidebar becomes a bottom app bar
  - The secondary sidebar becomes a top title bar
  - The secondary sidebar content opens through a hamburger button using a Bootstrap 5 offcanvas/dropdown pattern

Reference image:

- `Secondary Sidebar Small and Big.png`

## Sidebar Behavior

Desktop sidebar state rules:

- When the primary sidebar is open, the secondary sidebar must be closed.
- When the secondary sidebar is open, the primary sidebar must be closed.
- If the primary sidebar is expanded while the secondary sidebar is open, the secondary sidebar closes and the primary sidebar opens.
- If the secondary sidebar is expanded while the primary sidebar is open, the primary sidebar closes and the secondary sidebar opens.

## Mobile Behavior

On mobile screens:

- The primary sidebar becomes a fixed bottom bar.
- The secondary sidebar becomes a fixed top bar.
- The secondary content is accessed from the top bar using a hamburger button and Bootstrap 5 offcanvas/dropdown behavior.

Reference image:

- `Sidebar Mobile.png`

## Colors

- Orange: `#F3500A`
- Light orange: `#FC7B44`

## Desktop Dimensions and Spacing

Primary sidebar:

- Minimized width: `88px`
- Expanded width: `250px`
- Container padding: `14px`
- Buttons: Bootstrap 5 buttons
- Button vertical margin:

```css
margin-top: 5px;
margin-bottom: 5px;
```

- Button icons: Font Awesome

Secondary sidebar:

- Minimized state: hidden
- Expanded width: `250px`

## Mobile Dimensions and Spacing

Primary bottom bar:

- Height: `88px`
- Buttons: Bootstrap 5 buttons
- Button horizontal margin: `5px`
- Button icons: Font Awesome

Secondary top bar:

- Height: `88px`

## Reference Assets

Expected reference files:

- `Primary Sidebar Small and Big.png`
- `Secondary Sidebar Small and Big.png`
- `Sidebar Mobile.png`
- `Sidebar Desktop GIF.gif`
- `Primary Sidebar Buttons Margin.png`
- `HTML/`

## Implementation Notes

- Keep each deliverable as a standalone HTML file.
- Use Bootstrap 5 for buttons and offcanvas behavior.
- Use Font Awesome for sidebar button icons.
- Keep layout and state logic simple and readable.
- Ensure desktop and mobile views are responsive without requiring a build step.
