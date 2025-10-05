# Variant System Removal Guide

This guide explains how to remove the variant system and apply your final selections permanently.

---

## Step 1: Note Your Selections

Open the dev toolbar (bottom-right corner) and note your selections:

- **Theme:** _____ (1-5)
- **Who We Are:** _____ (A/B/C)
- **Benefits:** _____ (A/B/C)
- **Process:** _____ (A/B/C)
- **Did You Know:** _____ (A/B/C)
- **Contact:** _____ (A/B/C)

Or check `localStorage` in browser console:
```javascript
JSON.parse(localStorage.getItem('powersolar-variants'))
```

---

## Step 2: Apply Theme Permanently

### Option A: Update Tailwind Config (Recommended)

Edit `apps/frontend/tailwind.config.js` and replace the `secondary` color with your chosen theme:

**Theme 1 (Warm Orange - Current):**
```javascript
secondary: {
  500: '#F97316', // Orange
}
```

**Theme 2 (Professional Blue):**
```javascript
secondary: {
  500: '#3B82F6', // Blue
}
```

**Theme 3 (Nature Green):**
```javascript
secondary: {
  500: '#16A34A', // Green
}
```

**Theme 4 (Solar Yellow):**
```javascript
secondary: {
  500: '#F59E0B', // Yellow
}
```

**Theme 5 (Clean Slate):**
```javascript
secondary: {
  500: '#6B7280', // Gray
}
```

### Option B: Keep Dynamic Theme System

If you want to keep theme switching for the future, just remove the toolbar but keep the theme infrastructure.

---

## Step 3: Apply Section Variants

Replace the variant imports in `apps/frontend/src/pages/PowerSolarHomePage.tsx`:

### Example: If you chose Who We Are: Variant B

**Before:**
```typescript
import {
  WhoWeAreVariantA,
  WhoWeAreVariantB,
  WhoWeAreVariantC,
} from '../variants/WhoWeAreVariants';
```

**After:**
```typescript
import { WhoWeAreVariantB as WhoWeAreSection } from '../variants/WhoWeAreVariants';
```

**And in the component:**

**Before:**
```typescript
const whoWeAreVariants = {
  A: WhoWeAreVariantA,
  B: WhoWeAreVariantB,
  C: WhoWeAreVariantC,
};
const WhoWeAreComponent = whoWeAreVariants[state.sections.whoWeAre];
```

**After:**
```typescript
// Remove the variants object and state dependency
```

**And in the render:**

**Before:**
```typescript
<WhoWeAreComponent onGetQuote={() => setIsQuoteModalOpen(true)} />
```

**After:**
```typescript
<WhoWeAreSection onGetQuote={() => setIsQuoteModalOpen(true)} />
```

Repeat this for all sections (Benefits, Process, DidYouKnow, Contact).

---

## Step 4: Remove Variant System Files

### Delete these files:
```bash
rm -rf apps/frontend/src/variants/
rm apps/frontend/src/contexts/VariantContext.tsx
rm apps/frontend/src/config/variants.ts
rm apps/frontend/src/components/DevToolbar.tsx
rm apps/frontend/src/components/ThemeWrapper.tsx
```

### Remove from `App.tsx`:

**Before:**
```typescript
import { VariantProvider } from './contexts/VariantContext';
import { ThemeWrapper } from './components/ThemeWrapper';
import DevToolbar from './components/DevToolbar';

// ...

<VariantProvider>
  <ThemeWrapper>
    {/* content */}
    <DevToolbar />
  </ThemeWrapper>
</VariantProvider>
```

**After:**
```typescript
// Remove imports and wrappers
{/* content */}
```

### Remove from `PowerSolarHomePage.tsx`:

**Before:**
```typescript
import { useVariants } from '../contexts/VariantContext';
const { state } = useVariants();
```

**After:**
```typescript
// Remove import and hook
```

---

## Step 5: Clean Up Unused Variant Components

After selecting your variants, move the chosen components to the main components folder:

```bash
# Example: If you chose WhoWeAreVariantB
mv apps/frontend/src/variants/WhoWeAreVariants.tsx apps/frontend/src/components/WhoWeAreSection.tsx
```

Then edit the file to:
1. Remove the unused variants (keep only your chosen one)
2. Rename the export to match the new file name

---

## Step 6: Update Imports

Update all imports in `PowerSolarHomePage.tsx` to point to the new component locations.

---

## Step 7: Test & Deploy

```bash
# Test locally
pnpm dev

# Build
pnpm build

# Deploy
firebase deploy --only hosting
```

---

## Quick Script (Advanced)

If you're comfortable with scripting, create a script to automate this:

```bash
#!/bin/bash
# apply-variants.sh

THEME=$1  # 1-5
WHO_WE_ARE=$2  # A/B/C
BENEFITS=$3  # A/B/C
PROCESS=$4  # A/B/C
DID_YOU_KNOW=$5  # A/B/C
CONTACT=$6  # A/B/C

echo "Applying variants..."
echo "Theme: $THEME"
echo "Who We Are: $WHO_WE_ARE"
# ... etc

# Add your automation here
```

---

## Need Help?

If you run into issues:

1. Check the browser console for errors
2. Verify all imports are correct
3. Make sure you've removed ALL references to `useVariants` and `VariantContext`
4. Rebuild: `pnpm build`

---

## Rollback

If something goes wrong:

```bash
git checkout apps/frontend/src/pages/PowerSolarHomePage.tsx
git checkout apps/frontend/src/App.tsx
```

The variant system will be restored from git history.

