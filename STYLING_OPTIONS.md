# Grand Mafia Bot - Guide Styling Options

This document explains the three different styling methods available for creating game guides.

## Overview

The bot now supports **three distinct styling approaches** for guides:

1. **Option A: Discord Formatted Text** - Simple, native Discord formatting
2. **Option B: Image-Based Guides** - Professional styled images
3. **Option C: Visual Web Editor** - Full WYSIWYG editing with live preview

---

## Option A: Discord Formatted Text

### Description
Uses Discord's native formatting capabilities with colored text indicators, emoji, and special formatting.

### Features
- ✅ Native Discord support (no external dependencies)
- ✅ Lightweight and fast
- ✅ Easy to edit and update
- ✅ Searchable text
- ✅ Multiple header styles

### Header Styles Available

| Style | Example | Best For |
|-------|---------|----------|
| Standard | `# Guide Title` | Clean, professional |
| Fancy | `╔═══════════════╗` | Eye-catching |
| Minimal | `▬▬▬▬▬▬▬▬▬▬` | Simple, elegant |
| Gaming | `⚔️ Guide Title ⚔️` | Gaming-themed |
| Tactical | `[Guide Title]` | Military/strategic feel |

### Text Color Options

```
🔴 Red Text
🔵 Blue Text
🟢 Green Text
🟡 Yellow Text
🟠 Orange Text
🟣 Purple Text
⚪ White Text
⚫ Black Text
```

### Discord Command

```
/guide-styled create
  title: "Enforcer Strategy 101"
  category: "enforcers"
  content: "Your guide content here..."
  style: "fancy"
  color: "#FF0000"
```

### Example Output

```
╔═══════════════════════════════╗
║ Enforcer Strategy 101         ║
╚═══════════════════════════════╝

📂 Category: Enforcers & Underbosses

🔴 **Key Concepts**
- Enforcer positioning
- Tactical advantages
- Counter strategies

🟡 **Step-by-Step Guide**
1. First step
2. Second step
3. Third step

⚪ **Tips & Tricks**
- Tip 1
- Tip 2
```

### Pros
- Fast to create
- Native Discord support
- Easy to edit
- Searchable
- Low bandwidth

### Cons
- Limited visual customization
- Text-only (no images)
- Less visually impressive
- Color limited to emoji indicators

---

## Option B: Image-Based Guides

### Description
Generates professional-looking guide images with custom colors, backgrounds, and formatted text. Perfect for creating visually stunning guides.

### Features
- ✅ Professional appearance
- ✅ Custom colors and backgrounds
- ✅ Formatted text rendering
- ✅ High visual impact
- ✅ Shareable as standalone images

### Styling Options

```javascript
{
  backgroundColor: "#1a1a2e",    // Background color
  headerColor: "#16213e",         // Header section color
  accentColor: "#e94560",         // Accent/highlight color
  titleColor: "#FFD700",          // Title text color
  contentColor: "#ecf0f1"         // Content text color
}
```

### Color Schemes by Category

| Category | Primary Color | Hex Code |
|----------|---------------|----------|
| Enforcers | Red | #FF0000 |
| Kingpins | Gold | #FFD700 |
| UM Raids | Green | #00FF00 |
| Investments | Blue | #0099FF |
| Construction | Orange | #FF8C00 |
| Preparing Raids | Purple | #9370DB |
| Raid Leaders | Pink | #FF1493 |
| Governors | White | #FFFFFF |
| Oakvale War | Dark Red | #8B0000 |
| Kill Event | Orange Red | #FF4500 |
| Raid Coordination | Teal | #20B2AA |

### Example Image Layout

```
┌─────────────────────────────────────┐
│                                     │
│  ⚔️ Enforcer Strategy 101 ⚔️        │
│  Enforcers & Underbosses            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  Learn the fundamentals of          │
│  enforcer tactics and positioning   │
│  for maximum effectiveness...       │
│                                     │
│  Key Concepts:                      │
│  • Positioning                      │
│  • Tactics                          │
│  • Counters                         │
│                                     │
│  Grand Mafia - Game Guide           │
│                                     │
└─────────────────────────────────────┘
```

### Generation Command

```bash
# Using the image generator utility
node src/utils/guideImageGenerator.js
```

### Pros
- Highly professional appearance
- Custom colors and styling
- Great for important guides
- Shareable as images
- Visually impressive

### Cons
- Larger file size
- Not searchable (image text)
- Harder to edit
- Requires canvas library
- Longer generation time

---

## Option C: Visual Web Editor (WYSIWYG)

### Description
Full visual editor in the web dashboard with live preview. See exactly how your guide will look as you create it.

### Features
- ✅ Live preview as you type
- ✅ Color picker for guide color
- ✅ Header style selector
- ✅ Text color selector
- ✅ Real-time updates
- ✅ Export as image
- ✅ User-friendly interface

### Editor Components

**Color Picker**
- Choose any color using color picker
- Applies to guide accent color
- Real-time preview update

**Header Style Selector**
- Standard: `# Title`
- Fancy: `╔═══╗ Title ╚═══╝`
- Minimal: `▬▬▬ Title ▬▬▬`
- Gaming: `⚔️ Title ⚔️`
- Tactical: `[Title]`

**Text Color Selector**
- 8 emoji-based color options
- Applied to guide content
- Live preview

**Live Preview**
- Shows guide as it will appear
- Updates in real-time
- Shows formatting and colors
- Full content preview

### Web Dashboard Workflow

1. **Navigate to Guides section**
2. **Fill in basic info:**
   - Title
   - Category
   - Content
   - Target channel

3. **Use Visual Editor:**
   - Pick guide color
   - Choose header style
   - Select text color
   - View live preview

4. **Create & Post:**
   - Click "Create & Post Guide"
   - Guide appears in Discord

5. **Export (Optional):**
   - Export as image
   - Download PNG file
   - Share externally

### Editor Screenshot

```
┌─ Visual Guide Editor ─────────────────┐
│                                       │
│ Guide Color:    [████████] #0099ff   │
│ Header Style:   [Fancy ▼]            │
│ Text Color:     [🔴 Red ▼]           │
│                                       │
│ Preview:                              │
│ ╔═══════════════════════════════════╗ │
│ ║ Enforcer Strategy 101             ║ │
│ ╚═══════════════════════════════════╝ │
│                                       │
│ 🔴 Learn the fundamentals...         │
│                                       │
└───────────────────────────────────────┘
```

### Pros
- Easiest to use
- Live preview
- No technical knowledge needed
- Full visual control
- Can export as image
- User-friendly interface

### Cons
- Requires web dashboard access
- Browser-dependent
- Limited to web interface
- Needs internet connection

---

## Comparison Table

| Feature | Option A | Option B | Option C |
|---------|----------|----------|----------|
| **Ease of Use** | Easy | Medium | Very Easy |
| **Visual Quality** | Good | Excellent | Good |
| **Customization** | Medium | High | High |
| **File Size** | Small | Large | Medium |
| **Searchable** | Yes | No | Yes |
| **Edit After Creation** | Easy | Hard | Easy |
| **Discord Native** | Yes | No | Yes |
| **Export to Image** | No | Yes | Yes |
| **Real-time Preview** | No | No | Yes |
| **Setup Time** | Fast | Slow | Fast |
| **Technical Skill Required** | Low | Medium | None |

---

## Recommended Use Cases

### Use Option A (Formatted Text) When:
- Creating quick guides
- Need frequent updates
- Want searchable content
- Prefer simplicity
- Creating many guides quickly

**Example:** Daily strategy updates, quick tips

### Use Option B (Image-Based) When:
- Creating important guides
- Want maximum visual impact
- Need professional appearance
- Creating guides for external sharing
- Want standalone shareable content

**Example:** Official faction guides, recruitment materials

### Use Option C (Web Editor) When:
- You're new to guide creation
- Want full visual control
- Need live preview
- Prefer user-friendly interface
- Want to experiment with styles

**Example:** First-time guide creators, style experimentation

---

## Workflow Examples

### Quick Guide Creation (Option A)

```
1. Use Discord command: /guide-styled create
2. Fill in title, category, content
3. Choose header style
4. Post immediately
5. Done in 30 seconds
```

### Professional Guide Creation (Option B)

```
1. Write guide content
2. Use image generator
3. Customize colors and styling
4. Generate image
5. Post image to Discord
6. Done in 2-3 minutes
```

### Visual Guide Creation (Option C)

```
1. Open web dashboard
2. Go to Guides section
3. Fill in guide info
4. Use color picker
5. Choose header style
6. View live preview
7. Export as image (optional)
8. Post to Discord
9. Done in 1-2 minutes
```

---

## Advanced Tips

### Combining Styles

You can use multiple styles for different purposes:
- **Quick updates:** Use Option A
- **Important announcements:** Use Option B
- **Learning/exploration:** Use Option C

### Color Psychology

- **Red (#FF0000):** Urgency, action, combat
- **Blue (#0099FF):** Trust, strategy, calm
- **Green (#00FF00):** Success, growth, economy
- **Gold (#FFD700):** Premium, leadership, value
- **Purple (#9370DB):** Mystery, power, magic

### Best Practices

1. **Consistency:** Use same style for same category
2. **Hierarchy:** Use different colors for different sections
3. **Readability:** Ensure text color contrasts with background
4. **Branding:** Match faction colors and theme
5. **Accessibility:** Avoid color-only differentiation

---

## Troubleshooting

### Option A Issues

**Q: Colors not showing?**
A: Ensure you're using correct emoji codes (🔴, 🔵, etc.)

**Q: Header style not rendering?**
A: Check Discord's markdown support - some styles may not render on mobile

### Option B Issues

**Q: Image generation fails?**
A: Ensure canvas library is installed: `npm install canvas`

**Q: Colors look different?**
A: Different displays may render colors differently - test on target device

### Option C Issues

**Q: Preview not updating?**
A: Refresh the page or check browser console for errors

**Q: Export button not working?**
A: Ensure browser allows downloads - check download settings

---

## Future Enhancements

Planned features:
- [ ] Guide templates with pre-styled layouts
- [ ] Batch guide creation
- [ ] Guide versioning and history
- [ ] Collaborative editing
- [ ] Advanced formatting options
- [ ] Custom fonts
- [ ] Animated guides
- [ ] Multi-language support

---

## Summary

Choose your styling method based on your needs:

- **Speed & Simplicity:** Option A (Formatted Text)
- **Visual Impact:** Option B (Image-Based)
- **Ease of Use:** Option C (Web Editor)

All three methods are fully supported and can be used together for maximum flexibility!

---

**Grand Mafia Bot - Styling Options v1.0**
