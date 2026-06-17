# UnderbossHQ - Role Management System

## Overview

The **Role Management System** makes it easy for moderators to manage member roles and control channel access without needing to understand complex Discord permission settings. Everything is simplified into easy-to-use commands and a visual web dashboard.

## Features

### 1. Discord Bot Commands

#### `/role assign`
Assign a role to a member.

**Usage:**
```
/role assign
  member: @SoldierBeta
  role: Enforcer
  reason: "Promotion to leadership"
```

**Features:**
- Assign any role to any member
- Optional reason for audit trail
- Prevents duplicate role assignments
- Confirmation message

#### `/role remove`
Remove a role from a member.

**Usage:**
```
/role remove
  member: @SoldierBeta
  role: Scout
  reason: "Graduated to Soldier rank"
```

**Features:**
- Remove specific roles
- Optional reason tracking
- Prevents removing non-existent roles
- Confirmation message

#### `/role list`
View all roles in the server.

**Usage:**
```
/role list
```

**Shows:**
- All server roles
- Number of members per role
- Role color
- Total role count

#### `/role member-roles`
View all roles assigned to a specific member.

**Usage:**
```
/role member-roles
  member: @CommanderAlpha
```

**Shows:**
- All roles for the member
- Total role count
- Highest role in hierarchy

#### `/channel-access allow-role`
Allow a role to access a channel.

**Usage:**
```
/channel-access allow-role
  channel: #um-raids
  role: Enforcer
```

**Permissions Granted:**
- View Channel
- Send Messages
- Read Message History

#### `/channel-access deny-role`
Deny a role access to a channel.

**Usage:**
```
/channel-access deny-role
  channel: #um-raids
  role: Scout
```

**Permissions Denied:**
- View Channel
- Send Messages

#### `/channel-access view-permissions`
View all permission overrides for a channel.

**Usage:**
```
/channel-access view-permissions
  channel: #um-raids
```

**Shows:**
- All role/user permissions
- Allowed permissions
- Denied permissions

---

## 2. Web Dashboard - Role Management Section

### Assign Roles to Members

**Location:** Dashboard → Roles → "Assign Roles to Members"

**How to Use:**
1. Select a member from the dropdown
2. Choose a role to assign
3. (Optional) Enter a reason
4. Click "Assign Role"

**Features:**
- Visual member selection
- Easy role selection
- Reason tracking
- Instant confirmation

### Channel Access Control

**Location:** Dashboard → Roles → "Channel Access Control"

**How to Use:**
1. Select a channel
2. Select a role
3. Click either:
   - ✅ "Allow Access" - Grant permission
   - ❌ "Deny Access" - Revoke permission

**Features:**
- Simple allow/deny interface
- Works on all channels
- Instant permission updates
- Clear visual feedback

### Role Overview

**Location:** Dashboard → Roles → "Role Overview"

**Shows:**
- All roles in a table format
- Number of members per role
- Role permissions summary
- Quick edit buttons

**Table Columns:**
- Role name (with color badge)
- Member count
- Permissions description
- Edit button

### Member Role Assignment

**Location:** Dashboard → Roles → "Member Role Assignment"

**Shows:**
- All members with roles
- Roles assigned to each member
- Quick action buttons

**Actions:**
- **View:** See detailed role information
- **Edit:** Modify member's roles
- **Remove:** Remove all roles from member

---

## Role Hierarchy & Permissions

### Recommended Role Structure

```
Admin (Highest)
  ├─ Full server permissions
  ├─ Can manage all channels
  └─ Can manage all roles

Moderator
  ├─ Manage members
  ├─ Manage messages
  ├─ Manage channels
  └─ Access moderator channels

Enforcer
  ├─ Access enforcer channels
  ├─ Can post in restricted channels
  └─ Can manage lower ranks

Soldier
  ├─ Access general channels
  ├─ Can post in most channels
  └─ Standard member permissions

Scout
  ├─ Read-only access
  ├─ Can view guides
  └─ Limited posting permissions

Member (Lowest)
  ├─ Basic access
  ├─ Can post in general chat
  └─ Can read announcements
```

### Permission Levels

| Permission | Admin | Moderator | Enforcer | Soldier | Scout | Member |
|-----------|-------|-----------|----------|---------|-------|--------|
| Manage Roles | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Manage Channels | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Manage Members | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Kick Members | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Ban Members | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Mute Members | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Post in Guides | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Post in General | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Post in Raids | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Access Lead | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |

---

## Channel Access Management

### Setting Up Channel Access

**Step 1: Identify Your Channels**

Group channels by access level:

**Public Channels** (Everyone can access):
- general-chat
- game-chat
- questions-and-help

**Member Channels** (Members & above):
- faction-announcements
- underbosshq-updates
- redeem-codes

**Restricted Channels** (Specific roles):
- um-raids (Soldier+)
- investments (Soldier+)
- construction (Soldier+)
- enforcers-and-underbosses (Enforcer+)
- kingpins (Enforcer+)
- raid-coordination (Enforcer+)

**Leadership Channels** (Leadership only):
- lead (Moderator+)
- lead-voice (Moderator+)

**Step 2: Assign Role Access**

For each restricted channel:
1. Use `/channel-access allow-role` for allowed roles
2. Use `/channel-access deny-role` for restricted roles

**Example:**

```
/channel-access allow-role
  channel: #um-raids
  role: Soldier

/channel-access allow-role
  channel: #um-raids
  role: Enforcer

/channel-access allow-role
  channel: #um-raids
  role: Moderator

/channel-access deny-role
  channel: #um-raids
  role: Scout

/channel-access deny-role
  channel: #um-raids
  role: Member
```

**Step 3: Verify Permissions**

Use `/channel-access view-permissions` to confirm all permissions are set correctly.

---

## Common Workflows

### Promoting a Member

**Scenario:** Scout wants to become a Soldier

**Steps:**
1. Use `/role assign` to add "Soldier" role
2. Use `/role remove` to remove "Scout" role
3. Verify with `/role member-roles`

**Command Sequence:**
```
/role assign member: @Scout role: Soldier reason: "Promotion"
/role remove member: @Scout role: Scout reason: "Graduated"
/role member-roles member: @Scout
```

### Setting Up a New Member

**Scenario:** New member joins the faction

**Steps:**
1. Use `/role assign` to add "Member" role
2. Optionally add "Scout" role for learning
3. Guide them to guides and announcements

**Command Sequence:**
```
/role assign member: @NewMember role: Member reason: "New faction member"
/role assign member: @NewMember role: Scout reason: "Learning phase"
```

### Restricting Channel Access

**Scenario:** Need to restrict #um-raids to Soldiers and above

**Steps:**
1. Use `/channel-access allow-role` for Soldier
2. Use `/channel-access allow-role` for Enforcer
3. Use `/channel-access allow-role` for Moderator
4. Use `/channel-access deny-role` for Scout
5. Use `/channel-access deny-role` for Member

**Command Sequence:**
```
/channel-access allow-role channel: #um-raids role: Soldier
/channel-access allow-role channel: #um-raids role: Enforcer
/channel-access allow-role channel: #um-raids role: Moderator
/channel-access deny-role channel: #um-raids role: Scout
/channel-access deny-role channel: #um-raids role: Member
```

### Bulk Role Assignment

**Scenario:** Multiple members need the same role

**Method 1: Individual Assignment**
```
/role assign member: @Member1 role: Enforcer
/role assign member: @Member2 role: Enforcer
/role assign member: @Member3 role: Enforcer
```

**Method 2: Web Dashboard**
1. Go to Dashboard → Roles
2. Use "Assign Roles to Members" form
3. Repeat for each member

---

## Best Practices

### Role Management

✅ **Do:**
- Use clear, descriptive role names
- Keep role hierarchy simple (5-7 roles max)
- Document role purposes
- Review roles regularly
- Track role changes with reasons
- Use consistent naming conventions

❌ **Don't:**
- Create too many roles (causes confusion)
- Give everyone admin role
- Forget to remove old roles
- Assign roles without reason
- Mix role purposes
- Create duplicate roles

### Channel Access

✅ **Do:**
- Start restrictive, then open up
- Test permissions after changes
- Document channel access rules
- Review access regularly
- Use role-based access (not user-based)
- Keep access consistent

❌ **Don't:**
- Give everyone access to everything
- Use individual user permissions (use roles instead)
- Forget to deny access to lower roles
- Create conflicting permissions
- Change permissions without testing
- Leave old permissions in place

### Audit Trail

✅ **Do:**
- Always provide a reason for role changes
- Keep records of who changed what
- Review role change logs regularly
- Document major permission changes
- Archive old role assignments

❌ **Don't:**
- Make changes without documentation
- Delete audit logs
- Forget to track changes
- Lose historical information

---

## Troubleshooting

### Role Not Appearing

**Problem:** Role doesn't show up in dropdown

**Solution:**
1. Ensure role exists in Discord server
2. Check bot has permission to manage roles
3. Refresh the dashboard
4. Verify role isn't hidden

### Member Can't Access Channel

**Problem:** Member has role but can't see channel

**Solution:**
1. Verify role is assigned: `/role member-roles @member`
2. Check channel permissions: `/channel-access view-permissions #channel`
3. Ensure role is allowed: `/channel-access allow-role #channel @role`
4. Check for conflicting deny permissions
5. Verify bot role is high enough

### Permission Changes Not Working

**Problem:** Changes don't take effect immediately

**Solution:**
1. Refresh Discord (F5 or restart client)
2. Verify command executed successfully
3. Check for conflicting permissions
4. Ensure bot has ManageChannels permission
5. Try removing and re-adding permission

### Bot Can't Manage Roles

**Problem:** Bot says "Error managing roles"

**Solution:**
1. Check bot role position (must be above target role)
2. Verify bot has ManageRoles permission
3. Ensure target role isn't higher than bot role
4. Check for server-wide role restrictions
5. Verify bot isn't restricted by admin

---

## Advanced Features

### Role Templates

Create predefined role sets for quick setup:

```
Leadership Template:
  - Admin
  - Moderator
  - Enforcer

Active Member Template:
  - Soldier
  - Scout

New Member Template:
  - Member
  - Scout
```

### Automated Role Assignment

Assign roles automatically based on:
- Account age
- Server join date
- Activity level
- Verification status

### Role Expiration

Set roles to automatically expire:
- Scout role expires after 2 weeks
- Temporary roles for events
- Trial memberships

### Role Rewards

Reward members with roles for:
- Participation
- Contributions
- Achievements
- Milestones

---

## Integration with Other Features

### Roles + Guides

- Restrict guide posting to Moderators
- Restrict guide viewing by role
- Create role-specific guides

### Roles + Moderation

- Only Moderators can use moderation commands
- Track moderation by role
- Role-based mute/kick permissions

### Roles + Announcements

- Restrict announcements to Moderators
- Target announcements by role
- Role-specific notifications

---

## Summary

The Role Management System provides:

✅ Easy role assignment and removal  
✅ Simple channel access control  
✅ Visual web dashboard  
✅ Discord bot commands  
✅ Audit trail with reasons  
✅ Permission management  
✅ Role hierarchy  
✅ Bulk operations  

This makes managing your faction server **much easier** without complex Discord permission settings!

---

**UnderbossHQ - Role Management v1.0**
