# Grand Mafia Bot - Game Guides Feature

## Overview

The **Game Guides Feature** allows moderators to easily create, manage, and post comprehensive game guides directly to your Discord server's guide channels. This eliminates the need for external platforms and keeps all faction knowledge centralized in Discord.

## Features

### 1. Discord Bot Commands

#### `/guide create`
Create a new game guide with full customization.

**Usage:**
```
/guide create 
  title: "Enforcer Strategy 101"
  category: "Enforcers & Underbosses"
  content: "Your guide content here..."
```

**Supported Categories:**
- Enforcers & Underbosses
- Kingpins
- UM Raids
- Investments
- Construction
- Preparing for Raids
- UM Raid Leaders
- Governors
- Oakvale War
- Kill Event
- Raid Coordination

#### `/guide post`
Post a previously created guide to a specific channel.

**Usage:**
```
/guide post
  title: "Enforcer Strategy 101"
  channel: "enforcers-and-underbosses"
```

#### `/guide list`
View all available guides organized by category.

**Usage:**
```
/guide list
```

### 2. Web Dashboard - Guides Section

The web dashboard includes a comprehensive guides management interface with:

#### Create New Guide
- **Title field**: Enter the guide name
- **Category dropdown**: Select the appropriate category
- **Content textarea**: Write detailed guide content
- **Channel selector**: Choose which channel to post to
- **Create & Post button**: Instantly publish the guide

#### Guide Library
- **Search functionality**: Find guides by title
- **Category filtering**: Filter guides by type
- **Guide cards**: Display all guides with:
  - Title and category
  - Excerpt preview
  - Author and date
  - View, Edit, and Delete buttons

### 3. Supported Channels

The guides feature supports posting to all your guide channels:

**Game Guides:**
- `#enforcers-and-underbosses`
- `#kingpins`
- `#um-raids`
- `#investments`
- `#construction`
- `#preparing-for-raids`
- `#um-raid-leaders`
- `#an-introduction-to-governors`

**Battle Guide:**
- `#oakvale-war`
- `#gw-info`
- `#kill-event`
- `#raid-coordination`

## How to Use

### Creating a Guide via Discord Bot

1. **Use the slash command:**
   ```
   /guide create
   ```

2. **Fill in the fields:**
   - Title: "Beginner's Guide to Investments"
   - Category: "Investments"
   - Content: "Write your comprehensive guide here. Use \n for line breaks."

3. **Confirm and publish** - The guide will be posted immediately

### Creating a Guide via Web Dashboard

1. **Navigate to the Guides section** in the web dashboard
2. **Fill in the form:**
   - Guide Title
   - Category
   - Content (supports markdown formatting)
   - Target Channel
3. **Click "Create & Post Guide"**
4. **Verify the guide appears** in the Discord channel

### Managing Guides

#### View a Guide
- Click the **"View"** button on any guide card
- The full guide content will display

#### Edit a Guide
- Click the **"Edit"** button on any guide card
- Make your changes
- Save the updated guide

#### Delete a Guide
- Click the **"Delete"** button on any guide card
- Confirm the deletion
- The guide will be removed

### Searching and Filtering

**In the Web Dashboard:**
1. Use the **search box** to find guides by title
2. Use the **category dropdown** to filter by type
3. Combine both for precise filtering

## Guide Best Practices

### Content Structure

**Recommended Format:**
```
# Guide Title

## Overview
Brief introduction to the topic

## Key Concepts
- Concept 1
- Concept 2
- Concept 3

## Step-by-Step Guide
1. First step
2. Second step
3. Third step

## Tips & Tricks
- Tip 1
- Tip 2

## Common Mistakes
- Mistake 1
- Mistake 2

## FAQ
Q: Question?
A: Answer

## Resources
- Resource 1
- Resource 2
```

### Writing Tips

1. **Be clear and concise** - Use simple language
2. **Use formatting** - Headers, bullet points, numbered lists
3. **Include examples** - Real-world scenarios help understanding
4. **Add tips** - Share insider knowledge
5. **Keep it updated** - Revise guides when game mechanics change

### Category Guidelines

| Category | Content Type | Examples |
|----------|-------------|----------|
| Enforcers & Underbosses | Unit strategies, positioning, tactics | "How to use Enforcers effectively", "Enforcer counters" |
| Kingpins | Leadership, management, strategy | "Managing your faction", "Kingpin tactics" |
| UM Raids | Raid planning, execution, coordination | "Raid preparation checklist", "Raid roles explained" |
| Investments | Economy, resource management | "Investment strategies", "Profit maximization" |
| Construction | Building, development | "Construction priorities", "Building guide" |
| Preparing for Raids | Pre-raid checklist, requirements | "Raid readiness", "What to prepare" |
| UM Raid Leaders | Leadership in raids, coordination | "Leading successful raids", "Team communication" |
| Governors | High-level strategy, governance | "Governor responsibilities", "Governance guide" |
| Oakvale War | War strategy, tactics, coordination | "War strategies", "War mechanics" |
| Kill Event | Event participation, optimization | "Kill event tips", "Maximizing kills" |
| Raid Coordination | Team coordination, communication | "Raid coordination tips", "Team communication" |

## Guide Formatting

### Markdown Support

The guides support standard markdown formatting:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
~~Strikethrough~~

- Bullet point
- Another point

1. Numbered list
2. Second item

> Blockquote

`inline code`

[Link text](https://example.com)
```

### Discord Embed Formatting

Guides are automatically formatted as Discord embeds with:
- Title (your guide title)
- Description (your guide content)
- Author (moderator who created it)
- Timestamp (when it was posted)
- Footer (Grand Mafia branding)

## Permissions

**Who can create guides?**
- Server Moderators
- Admins
- Users with "Manage Messages" permission

**Who can view guides?**
- All server members

**Who can edit/delete guides?**
- The guide creator
- Server Admins

## Troubleshooting

### Guide not appearing in Discord
- Verify the bot has permission to send messages in the target channel
- Check that the channel ID is correct
- Ensure the bot role is high enough in the role hierarchy

### Guide content not formatting correctly
- Use `\n` for line breaks in Discord commands
- Use markdown syntax for formatting
- Preview the guide before posting

### Can't find a guide
- Use the search function in the web dashboard
- Filter by category
- Check if the guide was deleted

### Guide appears but is cut off
- Discord has a 2000 character limit per message
- Break long guides into multiple posts
- Use the web dashboard for better formatting

## Advanced Features

### Guide Templates

Create guides faster using these templates:

**Strategy Guide Template:**
```
# [Strategy Name]

## Overview
[Brief description]

## Objectives
- Objective 1
- Objective 2

## Execution
1. Step 1
2. Step 2
3. Step 3

## Expected Results
[Outcomes]

## Variations
[Alternative approaches]
```

**Unit Guide Template:**
```
# [Unit Name] Guide

## Stats
- Health: 
- Damage: 
- Speed: 

## Strengths
- Strength 1
- Strength 2

## Weaknesses
- Weakness 1
- Weakness 2

## Best Uses
[When to use this unit]

## Counters
[What counters this unit]

## Tips
- Tip 1
- Tip 2
```

### Bulk Guide Import

To import multiple guides at once:
1. Create a CSV file with guide data
2. Use the web dashboard bulk import feature
3. All guides will be created and posted simultaneously

## Statistics

Track guide usage:
- Total guides created
- Most viewed guides
- Most edited guides
- Popular categories
- Engagement metrics

Access statistics in the web dashboard's Analytics section.

## Integration with Other Features

### Announcements + Guides
Post an announcement directing members to new guides:
```
/announce title:"New Guide Available" 
message:"Check out our new Enforcer Strategy guide in #enforcers-and-underbosses"
```

### Translation + Guides
Translate guides to other languages:
```
/translate text:[guide content] language:es
```

Then post the translated version as a new guide.

## Exporting Guides

Export guides for backup or external sharing:
1. Go to web dashboard Guides section
2. Click "Export" on any guide
3. Choose format: PDF, Markdown, or Text
4. Download the file

## Version Control

Track guide changes:
- View edit history
- Revert to previous versions
- See who edited what and when
- Compare versions side-by-side

## Best Practices Summary

✅ **Do:**
- Keep guides updated regularly
- Use clear, organized formatting
- Include examples and screenshots
- Get feedback from members
- Organize by category
- Use consistent style

❌ **Don't:**
- Post incomplete guides
- Use excessive formatting
- Make guides too long
- Ignore member feedback
- Forget to update when mechanics change
- Mix multiple topics in one guide

## Support

For issues with the guides feature:
1. Check this documentation
2. Review the guide creation steps
3. Verify bot permissions
4. Check Discord channel settings
5. Contact your server admin

---

**Grand Mafia Bot - Game Guides v1.0**
Centralize your faction knowledge with organized, searchable guides!
