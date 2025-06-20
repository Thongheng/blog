# How to Edit Blog Section Colors on Home Page

To edit the color of the "Latest from the blog" section on your home page, you need to modify the `background` and `border` properties in the `src/app/page.tsx` file.

## Current Configuration

The blog section in `src/app/page.tsx` currently has these color settings:

```tsx
<Flex
  fillWidth
  gap="24"
  mobileDirection="column"
  background="neutral-alpha-weak"
  style={{ backdropFilter: "blur(var(--static-space-1))" }}
  border="neutral-medium"
  radius="l"
  padding="xl"
  marginTop="xl"
>
```

## Color Options

You can change the `background` and `border` properties to any of these color values:

### Background Options:
- `"brand-alpha-weak"` - Light version of your brand color with transparency
- `"accent-alpha-weak"` - Light version of your accent color with transparency
- `"neutral-alpha-weak"` - Light neutral color (current setting)
- `"page-background"` - Same as the page background
- `"static-white-alpha-weak"` - Light white with transparency
- `"static-black-alpha-weak"` - Light black with transparency

### Border Options:
- `"brand-medium"` - Medium intensity brand color border
- `"accent-medium"` - Medium intensity accent color border
- `"neutral-medium"` - Medium intensity neutral color border (current setting)
- `"brand-alpha-medium"` - Medium intensity brand color border with transparency
- `"accent-alpha-medium"` - Medium intensity accent color border with transparency
- `"neutral-alpha-medium"` - Medium intensity neutral color border with transparency

## Example Change

To change to a light brand color background with a brand color border:

```tsx
<Flex
  fillWidth
  gap="24"
  mobileDirection="column"
  background="brand-alpha-weak"
  style={{ backdropFilter: "blur(var(--static-space-1))" }}
  border="brand-medium"
  radius="l"
  padding="xl"
  marginTop="xl"
>
```

## Global Color Settings

You can also change the global brand and accent colors in the `src/resources/once-ui.config.js` file:

```javascript
const style = {
  theme: "system", // dark | light | system
  neutral: "gray", // sand | gray | slate | custom
  brand: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  accent: "red", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  // ...other style properties
};
```

Changing these values will affect all elements using brand and accent colors throughout your site.
