# Variant Switcher System

A minimal theme and section variant system for client preview.

---

## ✅ What's Implemented

### **1. Theme Switcher (5 Options)**

Quickly switch between 5 color schemes:

1. **Warm Orange** (Current) - Orange CTAs, energetic
2. **Professional Blue** - Classic business blue
3. **Nature Green** - Eco-friendly green
4. **Solar Yellow** - Bright solar energy feel
5. **Clean Slate** - Minimal gray/green

### **2. Section Variants**

Each section has 3 layout variations:

- **Who We Are**: Quote Left | Quote Right | Centered
- **Benefits**: Grid 3x2 | Cards | List
- **Process**: Cards | Timeline | Vertical Stepper
- **Did You Know**: List | Cards | Two Column
- **Contact**: Centered | Split | Compact

### **3. Dev Toolbar**

- Bottom-right collapsible panel
- Only visible in dev mode or with `?devmode=true`
- Persistent selections (localStorage)
- Reset all button

---

## 🚀 Usage

### **Development**

```bash
pnpm dev
```

The toolbar appears automatically in dev mode in the bottom-right corner.

### **Show in Production/Staging**

Add `?devmode=true` to the URL:
```
https://your-domain.com/?devmode=true
```

### **Making Selections**

1. Click a theme number (1-5)
2. Click section variant letters (A/B/C)
3. Changes apply immediately
4. Selections are saved automatically

### **Reset All**

Click the "🔄 Reset All" button to restore defaults.

---

## 📁 File Structure

```
apps/frontend/src/
├── contexts/
│   └── VariantContext.tsx          # State management
├── config/
│   └── variants.ts                 # Theme & variant definitions
├── components/
│   ├── DevToolbar.tsx              # UI panel
│   └── ThemeWrapper.tsx            # Applies theme colors
└── variants/
    ├── WhoWeAreVariants.tsx        # 3 layout options
    ├── BenefitsVariants.tsx        # 3 layout options
    ├── ProcessVariants.tsx         # 3 layout options
    ├── DidYouKnowVariants.tsx      # 3 layout options
    └── ContactVariants.tsx         # 3 layout options
```

---

## 🗑️ Removal

When you're ready to remove the system and apply final selections:

1. Read **`REMOVAL_GUIDE.md`**
2. Note your selections from the toolbar
3. Follow the guide to apply variants permanently
4. Delete variant system files

---

## 🔧 Technical Details

### **How Themes Work**

- Theme colors are injected as CSS custom properties via `ThemeWrapper`
- No Tailwind rebuild required for theme switching
- Colors update dynamically on selection

### **How Section Variants Work**

- Each section has 3 separate component implementations
- `PowerSolarHomePage` dynamically renders the selected variant
- Variants use the same translation keys (i18n compatible)

### **State Management**

- React Context API (`VariantContext`)
- Persisted to `localStorage`
- Key: `powersolar-variants`

### **TypeScript**

- Fully typed
- No `any` types used
- IntelliSense support for all variants

---

## 🎨 Adding More Variants

### **Add a New Theme**

1. Edit `apps/frontend/src/config/variants.ts`
2. Add theme 6 to `THEME_VARIANTS`
3. Update DevToolbar to show 6 buttons

### **Add a New Section Variant**

1. Create variant D in the appropriate `*Variants.tsx` file
2. Update `SECTION_VARIANTS` in `variants.ts`
3. Update DevToolbar to show D button
4. Update PowerSolarHomePage variant mappings

---

## 📊 Testing

```bash
# Build test
pnpm build

# Lint check
pnpm lint

# Dev server
pnpm dev
```

---

## 🐛 Troubleshooting

**Toolbar not showing?**
- Check you're in dev mode or have `?devmode=true`
- Check browser console for errors

**Theme not changing?**
- Check browser console for CSS custom property updates
- Clear cache and hard reload

**Section not switching?**
- Check React DevTools for `VariantContext` state
- Clear localStorage: `localStorage.removeItem('powersolar-variants')`

---

## 📝 Notes

- Hero section has NO variants (left as-is)
- Services, Recent Jobs, and Invest sections have NO variants
- Only 5 main sections are variant-enabled
- System is production-ready and fully functional
- No external dependencies added (uses existing React/TS stack)

---

**Created:** October 5, 2025  
**Status:** ✅ Complete & Tested

