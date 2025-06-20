# Color Settings Guide

This document explains where and how to edit color settings in your website.

## Primary Color Configuration

The main color settings for your website are configured in the `src/resources/once-ui.config.js` file. Here are the key settings:

### Theme and Color Configuration

```javascript
const style = {
  theme: "system", // dark | light | system
  neutral: "gray", // sand | gray | slate | custom
  brand: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  accent: "red", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100" // 90 | 95 | 100 | 105 | 110
};
```

- **theme**: Controls the default color mode (dark, light, or system-based)
- **neutral**: Base neutral color scheme for the site
- **brand**: Primary brand color used throughout the site
- **accent**: Secondary accent color for highlights and interactive elements

### Visual Effects

The `effects` object in the same file controls various visual elements:

```javascript
const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true,
    opacity: 40,
    size: "2",
    color: "brand-background-strong",
  },
  // ... other effects
};
```

## Component-Specific Styling

For more granular control, you can edit the SCSS modules:

1. **Global Components**:
   - `src/components/Header.module.scss`
   - `src/components/Footer.module.scss`
   - `src/components/ThemeToggle.module.scss`

2. **Page-Specific Components**:
   - `src/components/about/about.module.scss`
   - `src/components/blog/Posts.module.scss`
   - `src/components/work/Projects.module.scss`

## Using Color Variables in Components

When using the Once UI system components, you can set colors with the following props:

- `background`: Sets the background color (e.g., "brand-weak", "neutral-medium")
- `onBackground`: Sets the text color on a background (e.g., "brand-weak", "neutral-strong")
- `border`: Sets the border color (e.g., "neutral-medium", "brand-alpha-medium")

Example:
```tsx
<Flex 
  background="brand-alpha-weak" 
  border="brand-alpha-medium"
  radius="l"
  padding="m"
>
  <Text onBackground="brand-strong">Colored text</Text>
</Flex>
```

## CSS Custom Properties

The Once UI system generates CSS custom properties that you can use in your custom CSS:

```css
/* Examples of available CSS variables */
:root {
  --brand-background-strong: #...;
  --brand-on-background-weak: #...;
  --neutral-alpha-medium: rgba(...);
  --page-background: #...;
  /* and many more */
}
```

Use these in your custom CSS when needed for consistency with the design system.
