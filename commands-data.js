// Command reference displayed by the website.
window.SKYE_DOCS = {
  "updated": "2026-10-03",
  "count": 319,
  "commands": [
    {
      "name": "2048",
      "category": "Minigames",
      "serverOnly": true,
      "description": "Play a requester-only interactive 2048 board.",
      "prefix": ".2048",
      "slash": "/games 2048",
      "aliases": [
        ".game2048",
        ".twentyfortyeight"
      ],
      "searchAliases": [
        ".2048",
        ".game2048",
        ".twentyfortyeight"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "games"
      ],
      "cooldown": "1 use(s) per 15s; scope: member",
      "parameters": [],
      "example": ".2048",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "accountage",
      "category": "Member Management",
      "serverOnly": false,
      "description": "Show when a Discord account was created and its current age.",
      "prefix": ".accountage [user]",
      "slash": "/members accountage",
      "aliases": [
        ".accountcreated",
        ".createdat",
        ".userage"
      ],
      "searchAliases": [
        ".accountage",
        ".accountcreated",
        ".createdat",
        ".userage"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: user",
      "parameters": [
        {
          "name": "user",
          "type": "User",
          "required": false,
          "description": "Discord user to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".accountage",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "afk",
      "category": "Utilities",
      "serverOnly": true,
      "description": "Set or clear your AFK status and optional reason.",
      "prefix": ".afk [reason=AFK]",
      "slash": "/utilities afk",
      "aliases": [
        ".away",
        ".brb",
        ".gone"
      ],
      "searchAliases": [
        ".afk",
        ".away",
        ".brb",
        ".gone"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "reason",
          "type": "String",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "AFK"
        }
      ],
      "example": ".afk",
      "concurrency": null,
      "notes": [
        "The reason and timestamp are stored per server and may be shown when someone mentions you. Your next message clears the AFK record."
      ]
    },
    {
      "name": "announce",
      "category": "Messages",
      "serverOnly": true,
      "description": "Post a rate-limited, mention-safe Miku-themed announcement.",
      "prefix": ".announce <message>",
      "slash": "/messages announce",
      "aliases": [
        ".announcement"
      ],
      "searchAliases": [
        ".announce",
        ".announcement"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [
        "Embed Links",
        "Send Messages"
      ],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "String",
          "required": true,
          "description": "Message text, ID, or Discord message link.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".announce Hello everyone",
      "concurrency": "1 active invocation(s) per guild",
      "notes": []
    },
    {
      "name": "antinuke",
      "category": "Safety",
      "serverOnly": true,
      "description": "Configure audit-log based protection against destructive administrator actions.",
      "prefix": ".antinuke",
      "slash": "/antinuke overview",
      "aliases": [
        ".an",
        ".nukeprotection"
      ],
      "searchAliases": [
        ".antinuke",
        ".an",
        ".nukeprotection"
      ],
      "parentAliases": [],
      "access": "Server owner by default; administrators only when owner lock is disabled",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".antinuke",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt."
      ]
    },
    {
      "name": "antinuke action",
      "category": "Safety",
      "serverOnly": true,
      "description": "Set the default anti-nuke response.",
      "prefix": ".antinuke action <response>",
      "slash": "/antinuke action",
      "aliases": [
        ".antinuke defaultaction"
      ],
      "searchAliases": [
        ".antinuke action",
        ".antinuke defaultaction",
        ".an action",
        ".an defaultaction",
        ".nukeprotection action",
        ".nukeprotection defaultaction"
      ],
      "parentAliases": [
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Server owner by default; administrators only when owner lock is disabled",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "response",
          "type": "String",
          "required": true,
          "description": "Response or enforcement action.",
          "choices": [
            "log",
            "timeout",
            "kick",
            "ban"
          ],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".antinuke action ban",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt."
      ]
    },
    {
      "name": "antinuke disable",
      "category": "Safety",
      "serverOnly": true,
      "description": "Disable anti-nuke monitoring while retaining its rules and exemptions.",
      "prefix": ".antinuke disable",
      "slash": "/antinuke disable",
      "aliases": [
        ".antinuke off"
      ],
      "searchAliases": [
        ".antinuke disable",
        ".antinuke off",
        ".an disable",
        ".an off",
        ".nukeprotection disable",
        ".nukeprotection off"
      ],
      "parentAliases": [
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Server owner by default; administrators only when owner lock is disabled",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".antinuke disable",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt."
      ]
    },
    {
      "name": "antinuke ownerlock",
      "category": "Safety",
      "serverOnly": true,
      "description": "Allow or disallow administrator changes to anti-nuke settings; only the server owner can change this lock.",
      "prefix": ".antinuke ownerlock <state>",
      "slash": "/antinuke ownerlock",
      "aliases": [
        ".antinuke configlock"
      ],
      "searchAliases": [
        ".antinuke ownerlock",
        ".antinuke configlock",
        ".an ownerlock",
        ".an configlock",
        ".nukeprotection ownerlock",
        ".nukeprotection configlock"
      ],
      "parentAliases": [
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Server owner only",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "state",
          "type": "String",
          "required": true,
          "description": "Enable or disable the setting.",
          "choices": [
            "on",
            "off"
          ],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".antinuke ownerlock on",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt."
      ]
    },
    {
      "name": "antinuke response",
      "category": "Safety",
      "serverOnly": true,
      "description": "Override the response for one anti-nuke action.",
      "prefix": ".antinuke response <action> <response>",
      "slash": "/antinuke response",
      "aliases": [
        ".antinuke ruleaction"
      ],
      "searchAliases": [
        ".antinuke response",
        ".antinuke ruleaction",
        ".an response",
        ".an ruleaction",
        ".nukeprotection response",
        ".nukeprotection ruleaction"
      ],
      "parentAliases": [
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Server owner by default; administrators only when owner lock is disabled",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "action",
          "type": "String",
          "required": true,
          "description": "Action to perform.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "response",
          "type": "String",
          "required": true,
          "description": "Response or enforcement action.",
          "choices": [
            "log",
            "timeout",
            "kick",
            "ban"
          ],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".antinuke response channel_delete ban",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt.",
        "The prefix command also accepts default to remove an action-specific override. The current slash choices list only explicit responses."
      ]
    },
    {
      "name": "antinuke rule",
      "category": "Safety",
      "serverOnly": true,
      "description": "Update one anti-nuke action threshold.",
      "prefix": ".antinuke rule <action> <limit> [seconds=10]",
      "slash": "/antinuke rule",
      "aliases": [],
      "searchAliases": [
        ".antinuke rule",
        ".an rule",
        ".nukeprotection rule"
      ],
      "parentAliases": [
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Server owner by default; administrators only when owner lock is disabled",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "action",
          "type": "String",
          "required": true,
          "description": "Action to perform.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "limit",
          "type": "Integer",
          "required": true,
          "description": "Maximum number allowed.",
          "choices": [],
          "minimum": 1,
          "maximum": 20
        },
        {
          "name": "seconds",
          "type": "Integer",
          "required": false,
          "description": "Duration in seconds.",
          "choices": [],
          "minimum": 3,
          "maximum": 120,
          "default": 10
        }
      ],
      "example": ".antinuke rule channel_delete 2 10",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt."
      ]
    },
    {
      "name": "antinuke rules",
      "category": "Safety",
      "serverOnly": true,
      "description": "List configured protection rules.",
      "prefix": ".antinuke rules",
      "slash": "/antinuke rules",
      "aliases": [],
      "searchAliases": [
        ".antinuke rules",
        ".an rules",
        ".nukeprotection rules"
      ],
      "parentAliases": [
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Server owner by default; administrators only when owner lock is disabled",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".antinuke rules",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt."
      ]
    },
    {
      "name": "antinuke setup",
      "category": "Safety",
      "serverOnly": true,
      "description": "Configure and enable antinuke.",
      "prefix": ".antinuke setup <channel>",
      "slash": "/antinuke setup",
      "aliases": [
        ".antinuke enable",
        ".antinuke on"
      ],
      "searchAliases": [
        ".antinuke setup",
        ".antinuke enable",
        ".antinuke on",
        ".an setup",
        ".an enable",
        ".an on",
        ".nukeprotection setup",
        ".nukeprotection enable",
        ".nukeprotection on"
      ],
      "parentAliases": [
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Server owner by default; administrators only when owner lock is disabled",
      "botPermissions": [
        "Embed Links",
        "Send Messages",
        "View Audit Log"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": true,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".antinuke setup #security-log",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt."
      ]
    },
    {
      "name": "antinuke threshold",
      "category": "Safety",
      "serverOnly": true,
      "description": "List all independent anti-nuke thresholds.",
      "prefix": ".antinuke threshold",
      "slash": "/antinuke threshold overview",
      "aliases": [
        ".antinuke thresholds",
        ".antinuke limits"
      ],
      "searchAliases": [
        ".antinuke threshold",
        ".antinuke thresholds",
        ".antinuke limits",
        ".an threshold",
        ".an thresholds",
        ".an limits",
        ".nukeprotection threshold",
        ".nukeprotection thresholds",
        ".nukeprotection limits"
      ],
      "parentAliases": [
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Server owner by default; administrators only when owner lock is disabled",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".antinuke threshold",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt."
      ]
    },
    {
      "name": "antinuke threshold disable",
      "category": "Safety",
      "serverOnly": true,
      "description": "Disable monitoring for one audit action.",
      "prefix": ".antinuke threshold disable <action>",
      "slash": "/antinuke threshold disable",
      "aliases": [
        ".antinuke threshold off"
      ],
      "searchAliases": [
        ".antinuke threshold disable",
        ".antinuke threshold off",
        ".antinuke thresholds disable",
        ".antinuke thresholds off",
        ".antinuke limits disable",
        ".antinuke limits off",
        ".an threshold disable",
        ".an threshold off",
        ".an thresholds disable",
        ".an thresholds off",
        ".an limits disable",
        ".an limits off",
        ".nukeprotection threshold disable",
        ".nukeprotection threshold off",
        ".nukeprotection thresholds disable",
        ".nukeprotection thresholds off",
        ".nukeprotection limits disable",
        ".nukeprotection limits off"
      ],
      "parentAliases": [
        {
          "name": "antinuke threshold",
          "aliases": [
            "thresholds",
            "limits"
          ]
        },
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Server owner by default; administrators only when owner lock is disabled",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "action",
          "type": "String",
          "required": true,
          "description": "Action to perform.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".antinuke threshold disable channel_delete",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt."
      ]
    },
    {
      "name": "antinuke threshold enable",
      "category": "Safety",
      "serverOnly": true,
      "description": "Enable monitoring for one audit action.",
      "prefix": ".antinuke threshold enable <action>",
      "slash": "/antinuke threshold enable",
      "aliases": [
        ".antinuke threshold on"
      ],
      "searchAliases": [
        ".antinuke threshold enable",
        ".antinuke threshold on",
        ".antinuke thresholds enable",
        ".antinuke thresholds on",
        ".antinuke limits enable",
        ".antinuke limits on",
        ".an threshold enable",
        ".an threshold on",
        ".an thresholds enable",
        ".an thresholds on",
        ".an limits enable",
        ".an limits on",
        ".nukeprotection threshold enable",
        ".nukeprotection threshold on",
        ".nukeprotection thresholds enable",
        ".nukeprotection thresholds on",
        ".nukeprotection limits enable",
        ".nukeprotection limits on"
      ],
      "parentAliases": [
        {
          "name": "antinuke threshold",
          "aliases": [
            "thresholds",
            "limits"
          ]
        },
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Server owner by default; administrators only when owner lock is disabled",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "action",
          "type": "String",
          "required": true,
          "description": "Action to perform.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".antinuke threshold enable channel_delete",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt."
      ]
    },
    {
      "name": "antinuke threshold reset",
      "category": "Safety",
      "serverOnly": true,
      "description": "Restore one or all anti-nuke thresholds to safe defaults.",
      "prefix": ".antinuke threshold reset [action]",
      "slash": "/antinuke threshold reset",
      "aliases": [
        ".antinuke threshold defaults"
      ],
      "searchAliases": [
        ".antinuke threshold reset",
        ".antinuke threshold defaults",
        ".antinuke thresholds reset",
        ".antinuke thresholds defaults",
        ".antinuke limits reset",
        ".antinuke limits defaults",
        ".an threshold reset",
        ".an threshold defaults",
        ".an thresholds reset",
        ".an thresholds defaults",
        ".an limits reset",
        ".an limits defaults",
        ".nukeprotection threshold reset",
        ".nukeprotection threshold defaults",
        ".nukeprotection thresholds reset",
        ".nukeprotection thresholds defaults",
        ".nukeprotection limits reset",
        ".nukeprotection limits defaults"
      ],
      "parentAliases": [
        {
          "name": "antinuke threshold",
          "aliases": [
            "thresholds",
            "limits"
          ]
        },
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Server owner by default; administrators only when owner lock is disabled",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "action",
          "type": "String",
          "required": false,
          "description": "Action to perform.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".antinuke threshold reset all",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt."
      ]
    },
    {
      "name": "antinuke threshold set",
      "category": "Safety",
      "serverOnly": true,
      "description": "Update a setting in antinuke threshold.",
      "prefix": ".antinuke threshold set <action> <limit> [seconds=10]",
      "slash": "/antinuke threshold set",
      "aliases": [
        ".antinuke threshold edit",
        ".antinuke threshold change"
      ],
      "searchAliases": [
        ".antinuke threshold set",
        ".antinuke threshold edit",
        ".antinuke threshold change",
        ".antinuke thresholds set",
        ".antinuke thresholds edit",
        ".antinuke thresholds change",
        ".antinuke limits set",
        ".antinuke limits edit",
        ".antinuke limits change",
        ".an threshold set",
        ".an threshold edit",
        ".an threshold change",
        ".an thresholds set",
        ".an thresholds edit",
        ".an thresholds change",
        ".an limits set",
        ".an limits edit",
        ".an limits change",
        ".nukeprotection threshold set",
        ".nukeprotection threshold edit",
        ".nukeprotection threshold change",
        ".nukeprotection thresholds set",
        ".nukeprotection thresholds edit",
        ".nukeprotection thresholds change",
        ".nukeprotection limits set",
        ".nukeprotection limits edit",
        ".nukeprotection limits change"
      ],
      "parentAliases": [
        {
          "name": "antinuke threshold",
          "aliases": [
            "thresholds",
            "limits"
          ]
        },
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Server owner by default; administrators only when owner lock is disabled",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "action",
          "type": "String",
          "required": true,
          "description": "Action to perform.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "limit",
          "type": "Integer",
          "required": true,
          "description": "Maximum number allowed.",
          "choices": [],
          "minimum": 1,
          "maximum": 20
        },
        {
          "name": "seconds",
          "type": "Integer",
          "required": false,
          "description": "Duration in seconds.",
          "choices": [],
          "minimum": 3,
          "maximum": 120,
          "default": 10
        }
      ],
      "example": ".antinuke threshold set role_delete 2 10",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt."
      ]
    },
    {
      "name": "antinuke timeout",
      "category": "Safety",
      "serverOnly": true,
      "description": "Set the bounded automatic timeout duration.",
      "prefix": ".antinuke timeout <minutes>",
      "slash": "/antinuke timeout",
      "aliases": [
        ".antinuke duration"
      ],
      "searchAliases": [
        ".antinuke timeout",
        ".antinuke duration",
        ".an timeout",
        ".an duration",
        ".nukeprotection timeout",
        ".nukeprotection duration"
      ],
      "parentAliases": [
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Server owner by default; administrators only when owner lock is disabled",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "minutes",
          "type": "Integer",
          "required": true,
          "description": "Duration in minutes.",
          "choices": [],
          "minimum": 1,
          "maximum": 40320
        }
      ],
      "example": ".antinuke timeout 10",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt."
      ]
    },
    {
      "name": "antinuke trust",
      "category": "Safety",
      "serverOnly": true,
      "description": "List trusted anti-nuke users and roles.",
      "prefix": ".antinuke trust",
      "slash": "/antinuke trust overview",
      "aliases": [
        ".antinuke trusted"
      ],
      "searchAliases": [
        ".antinuke trust",
        ".antinuke trusted",
        ".an trust",
        ".an trusted",
        ".nukeprotection trust",
        ".nukeprotection trusted"
      ],
      "parentAliases": [
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Server owner by default; administrators only when owner lock is disabled",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".antinuke trust",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt."
      ]
    },
    {
      "name": "antinuke trust add",
      "category": "Safety",
      "serverOnly": true,
      "description": "Exempt one member from anti-nuke enforcement.",
      "prefix": ".antinuke trust add <member>",
      "slash": "/antinuke trust add",
      "aliases": [
        ".antinuke trust user"
      ],
      "searchAliases": [
        ".antinuke trust add",
        ".antinuke trust user",
        ".antinuke trusted add",
        ".antinuke trusted user",
        ".an trust add",
        ".an trust user",
        ".an trusted add",
        ".an trusted user",
        ".nukeprotection trust add",
        ".nukeprotection trust user",
        ".nukeprotection trusted add",
        ".nukeprotection trusted user"
      ],
      "parentAliases": [
        {
          "name": "antinuke trust",
          "aliases": [
            "trusted"
          ]
        },
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Server owner by default; administrators only when owner lock is disabled",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".antinuke trust add @Member",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt."
      ]
    },
    {
      "name": "antinuke trust remove",
      "category": "Safety",
      "serverOnly": true,
      "description": "Remove one member from the anti-nuke exemption list.",
      "prefix": ".antinuke trust remove <member>",
      "slash": "/antinuke trust remove",
      "aliases": [
        ".antinuke trust delete"
      ],
      "searchAliases": [
        ".antinuke trust remove",
        ".antinuke trust delete",
        ".antinuke trusted remove",
        ".antinuke trusted delete",
        ".an trust remove",
        ".an trust delete",
        ".an trusted remove",
        ".an trusted delete",
        ".nukeprotection trust remove",
        ".nukeprotection trust delete",
        ".nukeprotection trusted remove",
        ".nukeprotection trusted delete"
      ],
      "parentAliases": [
        {
          "name": "antinuke trust",
          "aliases": [
            "trusted"
          ]
        },
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Server owner by default; administrators only when owner lock is disabled",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".antinuke trust remove @Member",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt."
      ]
    },
    {
      "name": "antinuke trust roleadd",
      "category": "Safety",
      "serverOnly": true,
      "description": "Exempt members of one role from anti-nuke enforcement.",
      "prefix": ".antinuke trust roleadd <role>",
      "slash": "/antinuke trust roleadd",
      "aliases": [
        ".antinuke trust addrole"
      ],
      "searchAliases": [
        ".antinuke trust roleadd",
        ".antinuke trust addrole",
        ".antinuke trusted roleadd",
        ".antinuke trusted addrole",
        ".an trust roleadd",
        ".an trust addrole",
        ".an trusted roleadd",
        ".an trusted addrole",
        ".nukeprotection trust roleadd",
        ".nukeprotection trust addrole",
        ".nukeprotection trusted roleadd",
        ".nukeprotection trusted addrole"
      ],
      "parentAliases": [
        {
          "name": "antinuke trust",
          "aliases": [
            "trusted"
          ]
        },
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Server owner by default; administrators only when owner lock is disabled",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".antinuke trust roleadd @Cosmetic",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt."
      ]
    },
    {
      "name": "antinuke trust roleremove",
      "category": "Safety",
      "serverOnly": true,
      "description": "Remove a role-based anti-nuke exemption.",
      "prefix": ".antinuke trust roleremove <role>",
      "slash": "/antinuke trust roleremove",
      "aliases": [
        ".antinuke trust removerole"
      ],
      "searchAliases": [
        ".antinuke trust roleremove",
        ".antinuke trust removerole",
        ".antinuke trusted roleremove",
        ".antinuke trusted removerole",
        ".an trust roleremove",
        ".an trust removerole",
        ".an trusted roleremove",
        ".an trusted removerole",
        ".nukeprotection trust roleremove",
        ".nukeprotection trust removerole",
        ".nukeprotection trusted roleremove",
        ".nukeprotection trusted removerole"
      ],
      "parentAliases": [
        {
          "name": "antinuke trust",
          "aliases": [
            "trusted"
          ]
        },
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Server owner by default; administrators only when owner lock is disabled",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".antinuke trust roleremove @Cosmetic",
      "concurrency": null,
      "notes": [
        "Off by default. Configure with .antinuke setup #security-log, then review .antinuke rules and choose an enforcement action. Configuration is owner-locked by default.",
        "Actions: channel_delete, channel_create, channel_update (including permission overwrites), role_delete, role_create, role_update, webhook, ban, kick, bot_add, member_role_update, guild_update, emoji_delete, sticker_delete. Thresholds are per actor and action; protection is reactive, not a backup or a guarantee against damage.",
        "Responses: log, timeout, kick or ban. Discord permissions and bot role hierarchy still apply. The server owner and Skye are exempt; trusted users/roles are also exempt."
      ]
    },
    {
      "name": "antiraid",
      "category": "Safety",
      "serverOnly": true,
      "description": "Configure join-burst and new-account raid protection.",
      "prefix": ".antiraid",
      "slash": "/antiraid overview",
      "aliases": [
        ".ar",
        ".raidprotection"
      ],
      "searchAliases": [
        ".antiraid",
        ".ar",
        ".raidprotection"
      ],
      "parentAliases": [],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".antiraid",
      "concurrency": null,
      "notes": [
        "Off by default. Configure a log channel, join threshold, account-age cutoff and response before relying on enforcement.",
        "Responses: log, timeout, kick, ban or quarantine. Quarantine requires a safe configured role with restrictive channel overwrites; a role alone does not guarantee isolation."
      ]
    },
    {
      "name": "antiraid action",
      "category": "Safety",
      "serverOnly": true,
      "description": "Choose the automatic anti-raid response.",
      "prefix": ".antiraid action <response>",
      "slash": "/antiraid action",
      "aliases": [
        ".antiraid response"
      ],
      "searchAliases": [
        ".antiraid action",
        ".antiraid response",
        ".ar action",
        ".ar response",
        ".raidprotection action",
        ".raidprotection response"
      ],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "response",
          "type": "String",
          "required": true,
          "description": "Response or enforcement action.",
          "choices": [
            "log",
            "timeout",
            "kick",
            "ban",
            "quarantine"
          ],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".antiraid action log",
      "concurrency": null,
      "notes": [
        "Off by default. Configure a log channel, join threshold, account-age cutoff and response before relying on enforcement.",
        "Responses: log, timeout, kick, ban or quarantine. Quarantine requires a safe configured role with restrictive channel overwrites; a role alone does not guarantee isolation."
      ]
    },
    {
      "name": "antiraid allow",
      "category": "Safety",
      "serverOnly": true,
      "description": "List accounts exempt from anti-raid enforcement.",
      "prefix": ".antiraid allow",
      "slash": "/antiraid allow overview",
      "aliases": [
        ".antiraid allowlist",
        ".antiraid whitelist"
      ],
      "searchAliases": [
        ".antiraid allow",
        ".antiraid allowlist",
        ".antiraid whitelist",
        ".ar allow",
        ".ar allowlist",
        ".ar whitelist",
        ".raidprotection allow",
        ".raidprotection allowlist",
        ".raidprotection whitelist"
      ],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".antiraid allow",
      "concurrency": null,
      "notes": [
        "Off by default. Configure a log channel, join threshold, account-age cutoff and response before relying on enforcement.",
        "Responses: log, timeout, kick, ban or quarantine. Quarantine requires a safe configured role with restrictive channel overwrites; a role alone does not guarantee isolation."
      ]
    },
    {
      "name": "antiraid allow add",
      "category": "Safety",
      "serverOnly": true,
      "description": "Exempt one Discord account from anti-raid enforcement.",
      "prefix": ".antiraid allow add <user>",
      "slash": "/antiraid allow add",
      "aliases": [],
      "searchAliases": [
        ".antiraid allow add",
        ".antiraid allowlist add",
        ".antiraid whitelist add",
        ".ar allow add",
        ".ar allowlist add",
        ".ar whitelist add",
        ".raidprotection allow add",
        ".raidprotection allowlist add",
        ".raidprotection whitelist add"
      ],
      "parentAliases": [
        {
          "name": "antiraid allow",
          "aliases": [
            "allowlist",
            "whitelist"
          ]
        },
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "user",
          "type": "User",
          "required": true,
          "description": "Discord user to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".antiraid allow add @Member",
      "concurrency": null,
      "notes": [
        "Off by default. Configure a log channel, join threshold, account-age cutoff and response before relying on enforcement.",
        "Responses: log, timeout, kick, ban or quarantine. Quarantine requires a safe configured role with restrictive channel overwrites; a role alone does not guarantee isolation."
      ]
    },
    {
      "name": "antiraid allow remove",
      "category": "Safety",
      "serverOnly": true,
      "description": "Remove an account ID from the anti-raid allowlist.",
      "prefix": ".antiraid allow remove <user_id>",
      "slash": "/antiraid allow remove",
      "aliases": [
        ".antiraid allow delete"
      ],
      "searchAliases": [
        ".antiraid allow remove",
        ".antiraid allow delete",
        ".antiraid allowlist remove",
        ".antiraid allowlist delete",
        ".antiraid whitelist remove",
        ".antiraid whitelist delete",
        ".ar allow remove",
        ".ar allow delete",
        ".ar allowlist remove",
        ".ar allowlist delete",
        ".ar whitelist remove",
        ".ar whitelist delete",
        ".raidprotection allow remove",
        ".raidprotection allow delete",
        ".raidprotection allowlist remove",
        ".raidprotection allowlist delete",
        ".raidprotection whitelist remove",
        ".raidprotection whitelist delete"
      ],
      "parentAliases": [
        {
          "name": "antiraid allow",
          "aliases": [
            "allowlist",
            "whitelist"
          ]
        },
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "user_id",
          "type": "Integer",
          "required": true,
          "description": "Numeric Discord user ID.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".antiraid allow remove 1513500353658617926",
      "concurrency": null,
      "notes": [
        "Off by default. Configure a log channel, join threshold, account-age cutoff and response before relying on enforcement.",
        "Responses: log, timeout, kick, ban or quarantine. Quarantine requires a safe configured role with restrictive channel overwrites; a role alone does not guarantee isolation."
      ]
    },
    {
      "name": "antiraid bots",
      "category": "Safety",
      "serverOnly": true,
      "description": "Include or exclude bot accounts from anti-raid checks.",
      "prefix": ".antiraid bots <state>",
      "slash": "/antiraid bots",
      "aliases": [
        ".antiraid includebots"
      ],
      "searchAliases": [
        ".antiraid bots",
        ".antiraid includebots",
        ".ar bots",
        ".ar includebots",
        ".raidprotection bots",
        ".raidprotection includebots"
      ],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "state",
          "type": "String",
          "required": true,
          "description": "Enable or disable the setting.",
          "choices": [
            "on",
            "off"
          ],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".antiraid bots on",
      "concurrency": null,
      "notes": [
        "Off by default. Configure a log channel, join threshold, account-age cutoff and response before relying on enforcement.",
        "Responses: log, timeout, kick, ban or quarantine. Quarantine requires a safe configured role with restrictive channel overwrites; a role alone does not guarantee isolation."
      ]
    },
    {
      "name": "antiraid disable",
      "category": "Safety",
      "serverOnly": true,
      "description": "Disable antiraid while preserving its settings.",
      "prefix": ".antiraid disable",
      "slash": "/antiraid disable",
      "aliases": [
        ".antiraid off"
      ],
      "searchAliases": [
        ".antiraid disable",
        ".antiraid off",
        ".ar disable",
        ".ar off",
        ".raidprotection disable",
        ".raidprotection off"
      ],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".antiraid disable",
      "concurrency": null,
      "notes": [
        "Off by default. Configure a log channel, join threshold, account-age cutoff and response before relying on enforcement.",
        "Responses: log, timeout, kick, ban or quarantine. Quarantine requires a safe configured role with restrictive channel overwrites; a role alone does not guarantee isolation."
      ]
    },
    {
      "name": "antiraid minage",
      "category": "Safety",
      "serverOnly": true,
      "description": "Set the age cutoff in hours; zero includes accounts of every age.",
      "prefix": ".antiraid minage <hours>",
      "slash": "/antiraid minage",
      "aliases": [
        ".antiraid accountage"
      ],
      "searchAliases": [
        ".antiraid minage",
        ".antiraid accountage",
        ".ar minage",
        ".ar accountage",
        ".raidprotection minage",
        ".raidprotection accountage"
      ],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "hours",
          "type": "Integer",
          "required": true,
          "description": "Value for hours.",
          "choices": [],
          "minimum": 0,
          "maximum": 2160
        }
      ],
      "example": ".antiraid minage 24",
      "concurrency": null,
      "notes": [
        "Off by default. Configure a log channel, join threshold, account-age cutoff and response before relying on enforcement.",
        "Responses: log, timeout, kick, ban or quarantine. Quarantine requires a safe configured role with restrictive channel overwrites; a role alone does not guarantee isolation."
      ]
    },
    {
      "name": "antiraid quarantine",
      "category": "Safety",
      "serverOnly": true,
      "description": "Set a safe quarantine role, or clear it by omitting the role.",
      "prefix": ".antiraid quarantine [role]",
      "slash": "/antiraid quarantine",
      "aliases": [
        ".antiraid role"
      ],
      "searchAliases": [
        ".antiraid quarantine",
        ".antiraid role",
        ".ar quarantine",
        ".ar role",
        ".raidprotection quarantine",
        ".raidprotection role"
      ],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [
        "Manage Roles"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "role",
          "type": "Role",
          "required": false,
          "description": "Discord role to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".antiraid quarantine",
      "concurrency": null,
      "notes": [
        "Off by default. Configure a log channel, join threshold, account-age cutoff and response before relying on enforcement.",
        "Responses: log, timeout, kick, ban or quarantine. Quarantine requires a safe configured role with restrictive channel overwrites; a role alone does not guarantee isolation."
      ]
    },
    {
      "name": "antiraid setup",
      "category": "Safety",
      "serverOnly": true,
      "description": "Configure and enable antiraid.",
      "prefix": ".antiraid setup <channel>",
      "slash": "/antiraid setup",
      "aliases": [
        ".antiraid enable",
        ".antiraid on"
      ],
      "searchAliases": [
        ".antiraid setup",
        ".antiraid enable",
        ".antiraid on",
        ".ar setup",
        ".ar enable",
        ".ar on",
        ".raidprotection setup",
        ".raidprotection enable",
        ".raidprotection on"
      ],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [
        "Embed Links",
        "Send Messages"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": true,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".antiraid setup #security-log",
      "concurrency": null,
      "notes": [
        "Off by default. Configure a log channel, join threshold, account-age cutoff and response before relying on enforcement.",
        "Responses: log, timeout, kick, ban or quarantine. Quarantine requires a safe configured role with restrictive channel overwrites; a role alone does not guarantee isolation."
      ]
    },
    {
      "name": "antiraid threshold",
      "category": "Safety",
      "serverOnly": true,
      "description": "View or change the enforcement threshold.",
      "prefix": ".antiraid threshold <joins> [seconds=10]",
      "slash": "/antiraid threshold",
      "aliases": [
        ".antiraid limit"
      ],
      "searchAliases": [
        ".antiraid threshold",
        ".antiraid limit",
        ".ar threshold",
        ".ar limit",
        ".raidprotection threshold",
        ".raidprotection limit"
      ],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "joins",
          "type": "Integer",
          "required": true,
          "description": "Value for joins.",
          "choices": [],
          "minimum": 3,
          "maximum": 100
        },
        {
          "name": "seconds",
          "type": "Integer",
          "required": false,
          "description": "Duration in seconds.",
          "choices": [],
          "minimum": 3,
          "maximum": 120,
          "default": 10
        }
      ],
      "example": ".antiraid threshold 8",
      "concurrency": null,
      "notes": [
        "Off by default. Configure a log channel, join threshold, account-age cutoff and response before relying on enforcement.",
        "Responses: log, timeout, kick, ban or quarantine. Quarantine requires a safe configured role with restrictive channel overwrites; a role alone does not guarantee isolation."
      ]
    },
    {
      "name": "antiraid timeout",
      "category": "Safety",
      "serverOnly": true,
      "description": "Set the bounded automatic timeout duration.",
      "prefix": ".antiraid timeout <minutes>",
      "slash": "/antiraid timeout",
      "aliases": [
        ".antiraid duration"
      ],
      "searchAliases": [
        ".antiraid timeout",
        ".antiraid duration",
        ".ar timeout",
        ".ar duration",
        ".raidprotection timeout",
        ".raidprotection duration"
      ],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "minutes",
          "type": "Integer",
          "required": true,
          "description": "Duration in minutes.",
          "choices": [],
          "minimum": 1,
          "maximum": 40320
        }
      ],
      "example": ".antiraid timeout 10",
      "concurrency": null,
      "notes": [
        "Off by default. Configure a log channel, join threshold, account-age cutoff and response before relying on enforcement.",
        "Responses: log, timeout, kick, ban or quarantine. Quarantine requires a safe configured role with restrictive channel overwrites; a role alone does not guarantee isolation."
      ]
    },
    {
      "name": "archive",
      "category": "Channels",
      "serverOnly": true,
      "description": "Archive a thread or confirmably lock and rename a text channel.",
      "prefix": ".archive [channel]",
      "slash": "/channels archive",
      "aliases": [
        ".archivechannel",
        ".channelarchive"
      ],
      "searchAliases": [
        ".archive",
        ".archivechannel",
        ".channelarchive"
      ],
      "parentAliases": [],
      "access": "Manage Channels",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 20s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".archive",
      "concurrency": null,
      "notes": [
        "Requires confirmation. Text channels are made read-only for Everyone and renamed with archived-; threads are archived and locked. This is not a content backup or export."
      ]
    },
    {
      "name": "attachments",
      "category": "Messages",
      "serverOnly": true,
      "description": "List bounded attachment metadata and links from an accessible message.",
      "prefix": ".attachments [message]",
      "slash": "/messages attachments",
      "aliases": [
        ".messageattachments",
        ".files"
      ],
      "searchAliases": [
        ".attachments",
        ".messageattachments",
        ".files"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 12s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "String",
          "required": false,
          "description": "Message text, ID, or Discord message link.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".attachments 1513500353658617926",
      "concurrency": null,
      "notes": [
        "Reply to a message or use its numeric ID/link. The message must be in the invocation channel; caller must be able to read its history. Cross-channel copying is blocked."
      ]
    },
    {
      "name": "avatar",
      "category": "Member Management",
      "serverOnly": false,
      "description": "Show a user's full-size Discord avatar.",
      "prefix": ".avatar [user]",
      "slash": "/members avatar",
      "aliases": [
        ".av",
        ".pfp",
        ".icon",
        ".pic",
        ".useravatar",
        ".foto"
      ],
      "searchAliases": [
        ".avatar",
        ".av",
        ".pfp",
        ".icon",
        ".pic",
        ".useravatar",
        ".foto"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: user",
      "parameters": [
        {
          "name": "user",
          "type": "User",
          "required": false,
          "description": "Discord user to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".avatar",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "balance",
      "category": "Progression",
      "serverOnly": true,
      "description": "Show your or another member's economy balance.",
      "prefix": ".balance [member]",
      "slash": "/economy balance",
      "aliases": [
        ".bal",
        ".money",
        ".cash",
        ".wallet",
        ".coins",
        ".saldo"
      ],
      "searchAliases": [
        ".balance",
        ".bal",
        ".money",
        ".cash",
        ".wallet",
        ".coins",
        ".saldo"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "economy"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": false,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".balance",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "ban",
      "category": "Safety",
      "serverOnly": true,
      "description": "Ban a user permanently or for a limited duration.",
      "prefix": ".ban <user> [duration=0] [reason=No reason provided]",
      "slash": "/moderation ban",
      "aliases": [
        ".b",
        ".tempban",
        ".tban",
        ".banuser",
        ".banish",
        ".banear"
      ],
      "searchAliases": [
        ".ban",
        ".b",
        ".tempban",
        ".tban",
        ".banuser",
        ".banish",
        ".banear"
      ],
      "parentAliases": [],
      "access": "Ban Members",
      "botPermissions": [
        "Ban Members"
      ],
      "features": [],
      "cooldown": "3 use(s) per 30s; scope: guild",
      "parameters": [
        {
          "name": "user",
          "type": "User",
          "required": true,
          "description": "Discord user to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "duration",
          "type": "String",
          "required": false,
          "description": "Duration such as 30m, 2h, or 7d.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "0"
        },
        {
          "name": "reason",
          "type": "String",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "No reason provided"
        }
      ],
      "example": ".ban @Member 1d Repeated spam",
      "concurrency": "1 active invocation(s) per guild",
      "notes": [
        "Use 0 for a permanent ban; positive durations accept s/m/h/d and combinations such as 1d12h. Self, server-owner and hierarchy-protected targets are blocked.",
        "Temporary bans are stored for expiry and checked periodically. Expiry can be delayed by downtime or missing permissions; notifications are attempted by DM. Reasons are limited to 400 characters."
      ]
    },
    {
      "name": "banner",
      "category": "Member Management",
      "serverOnly": false,
      "description": "Show a user's full-size Discord banner.",
      "prefix": ".banner [user]",
      "slash": "/members banner",
      "aliases": [
        ".userbanner",
        ".bnr"
      ],
      "searchAliases": [
        ".banner",
        ".userbanner",
        ".bnr"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: user",
      "parameters": [
        {
          "name": "user",
          "type": "User",
          "required": false,
          "description": "Discord user to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".banner",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "blackjack",
      "category": "Minigames",
      "serverOnly": true,
      "description": "Play blackjack using an escrowed economy wager.",
      "prefix": ".blackjack <wager>",
      "slash": "/economy blackjack",
      "aliases": [
        ".bj",
        ".21"
      ],
      "searchAliases": [
        ".blackjack",
        ".bj",
        ".21"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "economy"
      ],
      "cooldown": "1 use(s) per 8s; scope: member",
      "parameters": [
        {
          "name": "wager",
          "type": "String",
          "required": true,
          "description": "Number of coins to wager.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".blackjack 10",
      "concurrency": null,
      "notes": [
        "Uses server economy currency only. A valid wager and sufficient balance are required. Interactive controls are limited to the relevant player(s); there is no real-money payout."
      ]
    },
    {
      "name": "bonk",
      "category": "Fun & actions",
      "serverOnly": false,
      "description": "Send a bonk reaction to another member.",
      "prefix": ".bonk <member>",
      "slash": "/fun bonk",
      "aliases": [
        ".bonkuser"
      ],
      "searchAliases": [
        ".bonk",
        ".bonkuser"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".bonk @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "boosterole",
      "category": "Support",
      "serverOnly": true,
      "description": "View your booster role, sharing slots and available controls.",
      "prefix": ".boosterole",
      "slash": "/boosterole overview",
      "aliases": [
        ".boostrole",
        ".br",
        ".rolbooster"
      ],
      "searchAliases": [
        ".boosterole",
        ".boostrole",
        ".br",
        ".rolbooster"
      ],
      "parentAliases": [],
      "access": "Everyone to view their own status",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".boosterole",
      "concurrency": null,
      "notes": [
        "New roles are cosmetic and stay low in the role hierarchy. Roles with permissions, channel overrides, support/trust authority or unsafe hierarchy cannot be shared as cosmetic roles.",
        "Only active boosters can create, rename, recolour or share a role. At most one owned role and two shared members; sharing excludes bots. Gradient colours require the server’s enhanced-role-colour feature."
      ]
    },
    {
      "name": "boosterole color",
      "category": "Support",
      "serverOnly": true,
      "description": "Change one solid colour or supported gradient colours.",
      "prefix": ".boosterole color <primary> [secondary] [tertiary]",
      "slash": "/boosterole color",
      "aliases": [
        ".boosterole colour",
        ".boosterole gradient",
        ".boosterole colors",
        ".boosterole colours"
      ],
      "searchAliases": [
        ".boosterole color",
        ".boosterole colour",
        ".boosterole gradient",
        ".boosterole colors",
        ".boosterole colours",
        ".boostrole color",
        ".boostrole colour",
        ".boostrole gradient",
        ".boostrole colors",
        ".boostrole colours",
        ".br color",
        ".br colour",
        ".br gradient",
        ".br colors",
        ".br colours",
        ".rolbooster color",
        ".rolbooster colour",
        ".rolbooster gradient",
        ".rolbooster colors",
        ".rolbooster colours"
      ],
      "parentAliases": [
        {
          "name": "boosterole",
          "aliases": [
            "boostrole",
            "br",
            "rolbooster"
          ]
        }
      ],
      "access": "Active booster; role ownership for edits",
      "botPermissions": [
        "Manage Roles"
      ],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "primary",
          "type": "String",
          "required": true,
          "description": "Primary hex colour.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "secondary",
          "type": "String",
          "required": false,
          "description": "Optional second hex colour.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "tertiary",
          "type": "String",
          "required": false,
          "description": "Optional third hex colour.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".boosterole color #35D6C5",
      "concurrency": null,
      "notes": [
        "New roles are cosmetic and stay low in the role hierarchy. Roles with permissions, channel overrides, support/trust authority or unsafe hierarchy cannot be shared as cosmetic roles.",
        "Only active boosters can create, rename, recolour or share a role. At most one owned role and two shared members; sharing excludes bots. Gradient colours require the server’s enhanced-role-colour feature."
      ]
    },
    {
      "name": "boosterole create",
      "category": "Support",
      "serverOnly": true,
      "description": "Create your one cosmetic booster role.",
      "prefix": ".boosterole create <name> [color=#8B9CF6]",
      "slash": "/boosterole create",
      "aliases": [
        ".boosterole make",
        ".boosterole new"
      ],
      "searchAliases": [
        ".boosterole create",
        ".boosterole make",
        ".boosterole new",
        ".boostrole create",
        ".boostrole make",
        ".boostrole new",
        ".br create",
        ".br make",
        ".br new",
        ".rolbooster create",
        ".rolbooster make",
        ".rolbooster new"
      ],
      "parentAliases": [
        {
          "name": "boosterole",
          "aliases": [
            "boostrole",
            "br",
            "rolbooster"
          ]
        }
      ],
      "access": "Active booster; role ownership for edits",
      "botPermissions": [
        "Manage Roles"
      ],
      "features": [],
      "cooldown": "1 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "name",
          "type": "String",
          "required": true,
          "description": "Name to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "color",
          "type": "String",
          "required": false,
          "description": "Hex colour such as #35D6C5.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "#8B9CF6"
        }
      ],
      "example": ".boosterole create \"Sky Blue\" #35D6C5",
      "concurrency": "1 active invocation(s) per member",
      "notes": [
        "New roles are cosmetic and stay low in the role hierarchy. Roles with permissions, channel overrides, support/trust authority or unsafe hierarchy cannot be shared as cosmetic roles.",
        "Only active boosters can create, rename, recolour or share a role. At most one owned role and two shared members; sharing excludes bots. Gradient colours require the server’s enhanced-role-colour feature."
      ]
    },
    {
      "name": "boosterole delete",
      "category": "Support",
      "serverOnly": true,
      "description": "Permanently delete your owned cosmetic booster role.",
      "prefix": ".boosterole delete",
      "slash": "/boosterole delete",
      "aliases": [
        ".boosterole remove",
        ".boosterole reset"
      ],
      "searchAliases": [
        ".boosterole delete",
        ".boosterole remove",
        ".boosterole reset",
        ".boostrole delete",
        ".boostrole remove",
        ".boostrole reset",
        ".br delete",
        ".br remove",
        ".br reset",
        ".rolbooster delete",
        ".rolbooster remove",
        ".rolbooster reset"
      ],
      "parentAliases": [
        {
          "name": "boosterole",
          "aliases": [
            "boostrole",
            "br",
            "rolbooster"
          ]
        }
      ],
      "access": "Owner of the stored booster role",
      "botPermissions": [
        "Manage Roles"
      ],
      "features": [],
      "cooldown": "1 use(s) per 10s; scope: member",
      "parameters": [],
      "example": ".boosterole delete",
      "concurrency": null,
      "notes": [
        "New roles are cosmetic and stay low in the role hierarchy. Roles with permissions, channel overrides, support/trust authority or unsafe hierarchy cannot be shared as cosmetic roles.",
        "Only active boosters can create, rename, recolour or share a role. At most one owned role and two shared members; sharing excludes bots. Gradient colours require the server’s enhanced-role-colour feature."
      ]
    },
    {
      "name": "boosterole name",
      "category": "Support",
      "serverOnly": true,
      "description": "Rename your owned booster role.",
      "prefix": ".boosterole name <name>",
      "slash": "/boosterole name",
      "aliases": [
        ".boosterole rename"
      ],
      "searchAliases": [
        ".boosterole name",
        ".boosterole rename",
        ".boostrole name",
        ".boostrole rename",
        ".br name",
        ".br rename",
        ".rolbooster name",
        ".rolbooster rename"
      ],
      "parentAliases": [
        {
          "name": "boosterole",
          "aliases": [
            "boostrole",
            "br",
            "rolbooster"
          ]
        }
      ],
      "access": "Active booster; role ownership for edits",
      "botPermissions": [
        "Manage Roles"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "name",
          "type": "String",
          "required": true,
          "description": "Name to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".boosterole name Sky Blue",
      "concurrency": null,
      "notes": [
        "New roles are cosmetic and stay low in the role hierarchy. Roles with permissions, channel overrides, support/trust authority or unsafe hierarchy cannot be shared as cosmetic roles.",
        "Only active boosters can create, rename, recolour or share a role. At most one owned role and two shared members; sharing excludes bots. Gradient colours require the server’s enhanced-role-colour feature."
      ]
    },
    {
      "name": "boosterole share",
      "category": "Support",
      "serverOnly": true,
      "description": "Share your cosmetic booster role with one other member.",
      "prefix": ".boosterole share <member>",
      "slash": "/boosterole share",
      "aliases": [
        ".boosterole add",
        ".boosterole give"
      ],
      "searchAliases": [
        ".boosterole share",
        ".boosterole add",
        ".boosterole give",
        ".boostrole share",
        ".boostrole add",
        ".boostrole give",
        ".br share",
        ".br add",
        ".br give",
        ".rolbooster share",
        ".rolbooster add",
        ".rolbooster give"
      ],
      "parentAliases": [
        {
          "name": "boosterole",
          "aliases": [
            "boostrole",
            "br",
            "rolbooster"
          ]
        }
      ],
      "access": "Active booster; role ownership for edits",
      "botPermissions": [
        "Manage Roles"
      ],
      "features": [],
      "cooldown": "3 use(s) per 30s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".boosterole share @Member",
      "concurrency": "1 active invocation(s) per member",
      "notes": [
        "New roles are cosmetic and stay low in the role hierarchy. Roles with permissions, channel overrides, support/trust authority or unsafe hierarchy cannot be shared as cosmetic roles.",
        "Only active boosters can create, rename, recolour or share a role. At most one owned role and two shared members; sharing excludes bots. Gradient colours require the server’s enhanced-role-colour feature."
      ]
    },
    {
      "name": "boosterole unshare",
      "category": "Support",
      "serverOnly": true,
      "description": "Remove one member from your booster-role sharing list.",
      "prefix": ".boosterole unshare <member>",
      "slash": "/boosterole unshare",
      "aliases": [
        ".boosterole revoke",
        ".boosterole take"
      ],
      "searchAliases": [
        ".boosterole unshare",
        ".boosterole revoke",
        ".boosterole take",
        ".boostrole unshare",
        ".boostrole revoke",
        ".boostrole take",
        ".br unshare",
        ".br revoke",
        ".br take",
        ".rolbooster unshare",
        ".rolbooster revoke",
        ".rolbooster take"
      ],
      "parentAliases": [
        {
          "name": "boosterole",
          "aliases": [
            "boostrole",
            "br",
            "rolbooster"
          ]
        }
      ],
      "access": "Owner of the stored booster role",
      "botPermissions": [
        "Manage Roles"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".boosterole unshare @Member",
      "concurrency": null,
      "notes": [
        "New roles are cosmetic and stay low in the role hierarchy. Roles with permissions, channel overrides, support/trust authority or unsafe hierarchy cannot be shared as cosmetic roles.",
        "Only active boosters can create, rename, recolour or share a role. At most one owned role and two shared members; sharing excludes bots. Gradient colours require the server’s enhanced-role-colour feature."
      ]
    },
    {
      "name": "botinfo",
      "category": "Utilities",
      "serverOnly": false,
      "description": "Show skye's uptime, latency, server count, and build information.",
      "prefix": ".botinfo",
      "slash": "/bot botinfo",
      "aliases": [
        ".bi",
        ".stats",
        ".about",
        ".info",
        ".uptime",
        ".aboutbot",
        ".aboutskye",
        ".infobot"
      ],
      "searchAliases": [
        ".botinfo",
        ".bi",
        ".stats",
        ".about",
        ".info",
        ".uptime",
        ".aboutbot",
        ".aboutskye",
        ".infobot"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".botinfo",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "bots",
      "category": "Member Management",
      "serverOnly": true,
      "description": "Count cached bot accounts and show a bounded sample.",
      "prefix": ".bots",
      "slash": "/members bots",
      "aliases": [
        ".botcount",
        ".listbots"
      ],
      "searchAliases": [
        ".bots",
        ".botcount",
        ".listbots"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: guild",
      "parameters": [],
      "example": ".bots",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "bugreport",
      "category": "Utilities",
      "serverOnly": false,
      "description": "Save and privately deliver a detailed bug report to the bot owner.",
      "prefix": ".bugreport <report>",
      "slash": "/bot bugreport",
      "aliases": [
        ".bug",
        ".reportbug"
      ],
      "searchAliases": [
        ".bugreport",
        ".bug",
        ".reportbug"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 3600s; scope: user",
      "parameters": [
        {
          "name": "report",
          "type": "String",
          "required": true,
          "description": "Private bug report details.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".bugreport The help command failed. I expected the command menu to open.",
      "concurrency": "1 active invocation(s) per user",
      "notes": [
        "20–1,500 characters; one report per hour per user. Includes your user ID and server/channel context; stored locally (latest 100 per server) and sent to the bot operator and configured report channel when available.",
        "Use /bot bugreport to avoid placing the report text in a public prefix message. For privacy requests or sensitive reports, join support and open a ticket."
      ]
    },
    {
      "name": "bumpreminder",
      "category": "Community",
      "serverOnly": true,
      "description": "Configure reminders for successful server bumps.",
      "prefix": ".bumpreminder",
      "slash": "/bumpreminder overview",
      "aliases": [
        ".bump",
        ".bumps",
        ".bumpreminders"
      ],
      "searchAliases": [
        ".bumpreminder",
        ".bump",
        ".bumps",
        ".bumpreminders"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".bumpreminder",
      "concurrency": null,
      "notes": [
        "Optional reminders for configured trusted bump-provider bots. Setup enables the feature. Only recognized successful bumps in the configured channel schedule a reminder; no automated bumping is performed."
      ]
    },
    {
      "name": "bumpreminder bot",
      "category": "Community",
      "serverOnly": true,
      "description": "List trusted bump-provider bot accounts.",
      "prefix": ".bumpreminder bot",
      "slash": "/bumpreminder bot overview",
      "aliases": [
        ".bumpreminder bots"
      ],
      "searchAliases": [
        ".bumpreminder bot",
        ".bumpreminder bots",
        ".bump bot",
        ".bump bots",
        ".bumps bot",
        ".bumps bots",
        ".bumpreminders bot",
        ".bumpreminders bots"
      ],
      "parentAliases": [
        {
          "name": "bumpreminder",
          "aliases": [
            "bump",
            "bumps",
            "bumpreminders"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".bumpreminder bot",
      "concurrency": null,
      "notes": [
        "Optional reminders for configured trusted bump-provider bots. Setup enables the feature. Only recognized successful bumps in the configured channel schedule a reminder; no automated bumping is performed."
      ]
    },
    {
      "name": "bumpreminder bot add",
      "category": "Community",
      "serverOnly": true,
      "description": "Trust one bot account as a bump provider.",
      "prefix": ".bumpreminder bot add <member>",
      "slash": "/bumpreminder bot add",
      "aliases": [
        ".bumpreminder bot allow"
      ],
      "searchAliases": [
        ".bumpreminder bot add",
        ".bumpreminder bot allow",
        ".bumpreminder bots add",
        ".bumpreminder bots allow",
        ".bump bot add",
        ".bump bot allow",
        ".bump bots add",
        ".bump bots allow",
        ".bumps bot add",
        ".bumps bot allow",
        ".bumps bots add",
        ".bumps bots allow",
        ".bumpreminders bot add",
        ".bumpreminders bot allow",
        ".bumpreminders bots add",
        ".bumpreminders bots allow"
      ],
      "parentAliases": [
        {
          "name": "bumpreminder bot",
          "aliases": [
            "bots"
          ]
        },
        {
          "name": "bumpreminder",
          "aliases": [
            "bump",
            "bumps",
            "bumpreminders"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".bumpreminder bot add @Member",
      "concurrency": null,
      "notes": [
        "Optional reminders for configured trusted bump-provider bots. Setup enables the feature. Only recognized successful bumps in the configured channel schedule a reminder; no automated bumping is performed."
      ]
    },
    {
      "name": "bumpreminder bot remove",
      "category": "Community",
      "serverOnly": true,
      "description": "Remove a bot account from the bump-provider list.",
      "prefix": ".bumpreminder bot remove <member>",
      "slash": "/bumpreminder bot remove",
      "aliases": [
        ".bumpreminder bot delete",
        ".bumpreminder bot deny"
      ],
      "searchAliases": [
        ".bumpreminder bot remove",
        ".bumpreminder bot delete",
        ".bumpreminder bot deny",
        ".bumpreminder bots remove",
        ".bumpreminder bots delete",
        ".bumpreminder bots deny",
        ".bump bot remove",
        ".bump bot delete",
        ".bump bot deny",
        ".bump bots remove",
        ".bump bots delete",
        ".bump bots deny",
        ".bumps bot remove",
        ".bumps bot delete",
        ".bumps bot deny",
        ".bumps bots remove",
        ".bumps bots delete",
        ".bumps bots deny",
        ".bumpreminders bot remove",
        ".bumpreminders bot delete",
        ".bumpreminders bot deny",
        ".bumpreminders bots remove",
        ".bumpreminders bots delete",
        ".bumpreminders bots deny"
      ],
      "parentAliases": [
        {
          "name": "bumpreminder bot",
          "aliases": [
            "bots"
          ]
        },
        {
          "name": "bumpreminder",
          "aliases": [
            "bump",
            "bumps",
            "bumpreminders"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".bumpreminder bot remove @Member",
      "concurrency": null,
      "notes": [
        "Optional reminders for configured trusted bump-provider bots. Setup enables the feature. Only recognized successful bumps in the configured channel schedule a reminder; no automated bumping is performed."
      ]
    },
    {
      "name": "bumpreminder delay",
      "category": "Community",
      "serverOnly": true,
      "description": "Set the bounded delay after a successful server bump.",
      "prefix": ".bumpreminder delay <minutes>",
      "slash": "/bumpreminder delay",
      "aliases": [
        ".bumpreminder interval",
        ".bumpreminder time"
      ],
      "searchAliases": [
        ".bumpreminder delay",
        ".bumpreminder interval",
        ".bumpreminder time",
        ".bump delay",
        ".bump interval",
        ".bump time",
        ".bumps delay",
        ".bumps interval",
        ".bumps time",
        ".bumpreminders delay",
        ".bumpreminders interval",
        ".bumpreminders time"
      ],
      "parentAliases": [
        {
          "name": "bumpreminder",
          "aliases": [
            "bump",
            "bumps",
            "bumpreminders"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "minutes",
          "type": "Integer",
          "required": true,
          "description": "Duration in minutes.",
          "choices": [],
          "minimum": 30,
          "maximum": 1440
        }
      ],
      "example": ".bumpreminder delay 10",
      "concurrency": null,
      "notes": [
        "Optional reminders for configured trusted bump-provider bots. Setup enables the feature. Only recognized successful bumps in the configured channel schedule a reminder; no automated bumping is performed."
      ]
    },
    {
      "name": "bumpreminder disable",
      "category": "Community",
      "serverOnly": true,
      "description": "Disable bumpreminder while preserving its settings.",
      "prefix": ".bumpreminder disable",
      "slash": "/bumpreminder disable",
      "aliases": [
        ".bumpreminder off",
        ".bumpreminder stop"
      ],
      "searchAliases": [
        ".bumpreminder disable",
        ".bumpreminder off",
        ".bumpreminder stop",
        ".bump disable",
        ".bump off",
        ".bump stop",
        ".bumps disable",
        ".bumps off",
        ".bumps stop",
        ".bumpreminders disable",
        ".bumpreminders off",
        ".bumpreminders stop"
      ],
      "parentAliases": [
        {
          "name": "bumpreminder",
          "aliases": [
            "bump",
            "bumps",
            "bumpreminders"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".bumpreminder disable",
      "concurrency": null,
      "notes": [
        "Optional reminders for configured trusted bump-provider bots. Setup enables the feature. Only recognized successful bumps in the configured channel schedule a reminder; no automated bumping is performed."
      ]
    },
    {
      "name": "bumpreminder setup",
      "category": "Community",
      "serverOnly": true,
      "description": "Configure the bump channel and optional notification role, and enable reminders.",
      "prefix": ".bumpreminder setup <channel> [role]",
      "slash": "/bumpreminder setup",
      "aliases": [
        ".bumpreminder configure",
        ".bumpreminder set",
        ".bumpreminder enable",
        ".bumpreminder on"
      ],
      "searchAliases": [
        ".bumpreminder setup",
        ".bumpreminder configure",
        ".bumpreminder set",
        ".bumpreminder enable",
        ".bumpreminder on",
        ".bump setup",
        ".bump configure",
        ".bump set",
        ".bump enable",
        ".bump on",
        ".bumps setup",
        ".bumps configure",
        ".bumps set",
        ".bumps enable",
        ".bumps on",
        ".bumpreminders setup",
        ".bumpreminders configure",
        ".bumpreminders set",
        ".bumpreminders enable",
        ".bumpreminders on"
      ],
      "parentAliases": [
        {
          "name": "bumpreminder",
          "aliases": [
            "bump",
            "bumps",
            "bumpreminders"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [
        "Embed Links",
        "Read Message History",
        "Send Messages"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": true,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "role",
          "type": "Role",
          "required": false,
          "description": "Discord role to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".bumpreminder setup #general",
      "concurrency": null,
      "notes": [
        "Optional reminders for configured trusted bump-provider bots. Setup enables the feature. Only recognized successful bumps in the configured channel schedule a reminder; no automated bumping is performed."
      ]
    },
    {
      "name": "buttonrole",
      "category": "Settings",
      "serverOnly": true,
      "description": "Post a button that safely toggles a permissionless role.",
      "prefix": ".buttonrole <role> [label]",
      "slash": "/role buttonrole",
      "aliases": [
        ".rolebutton",
        ".botonrol"
      ],
      "searchAliases": [
        ".buttonrole",
        ".rolebutton",
        ".botonrol"
      ],
      "parentAliases": [],
      "access": "Administrator",
      "botPermissions": [
        "Manage Roles"
      ],
      "features": [
        "server_options"
      ],
      "cooldown": "1 use(s) per 15s; scope: guild",
      "parameters": [
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "label",
          "type": "String",
          "required": false,
          "description": "Value for label.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".buttonrole @Cosmetic",
      "concurrency": "1 active invocation(s) per guild",
      "notes": [
        "Server options must be enabled. Only safe cosmetic roles can be assigned; channel overrides, protected/trusted roles and moderator-level placement are rejected. Up to 25 button-role messages per server."
      ]
    },
    {
      "name": "calculate",
      "category": "Utilities",
      "serverOnly": false,
      "description": "Evaluate a bounded arithmetic expression safely.",
      "prefix": ".calculate <expression>",
      "slash": "/utilities calculate",
      "aliases": [
        ".calc",
        ".math",
        ".calcular"
      ],
      "searchAliases": [
        ".calculate",
        ".calc",
        ".math",
        ".calcular"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "5 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "expression",
          "type": "String",
          "required": true,
          "description": "Arithmetic expression to calculate.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".calculate 2 * (3 + 4)",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "channelinfo",
      "category": "Channels",
      "serverOnly": true,
      "description": "Show safe metadata and settings for a visible server channel.",
      "prefix": ".channelinfo [channel]",
      "slash": "/channels channelinfo",
      "aliases": [
        ".cinfo",
        ".chaninfo"
      ],
      "searchAliases": [
        ".channelinfo",
        ".cinfo",
        ".chaninfo"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".channelinfo",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "channels",
      "category": "Channels",
      "serverOnly": true,
      "description": "List every server channel visible to you, grouped by type.",
      "prefix": ".channels",
      "slash": "/channels list",
      "aliases": [
        ".channellist",
        ".listchannels",
        ".serverchannels"
      ],
      "searchAliases": [
        ".channels",
        ".channellist",
        ".listchannels",
        ".serverchannels"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [],
      "example": ".channels",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "channelstats",
      "category": "Channels",
      "serverOnly": true,
      "description": "Summarize visible channels, active threads, and voice activity.",
      "prefix": ".channelstats",
      "slash": "/channels channelstats",
      "aliases": [
        ".chanstats",
        ".channelcount"
      ],
      "searchAliases": [
        ".channelstats",
        ".chanstats",
        ".channelcount"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: guild",
      "parameters": [],
      "example": ".channelstats",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "choose",
      "category": "Utilities",
      "serverOnly": false,
      "description": "Choose one item from a pipe-separated list.",
      "prefix": ".choose <choices>",
      "slash": "/utilities choose",
      "aliases": [
        ".pick",
        ".decide",
        ".randomchoice",
        ".elegir"
      ],
      "searchAliases": [
        ".choose",
        ".pick",
        ".decide",
        ".randomchoice",
        ".elegir"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "5 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "choices",
          "type": "String",
          "required": true,
          "description": "Choices separated by vertical bars (|).",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".choose tea | coffee",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "cleanup",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably delete small, explicit sets of non-protected server resources.",
      "prefix": ".cleanup",
      "slash": "/cleanup overview",
      "aliases": [
        ".cleanups"
      ],
      "searchAliases": [
        ".cleanup",
        ".cleanups"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [],
      "example": ".cleanup",
      "concurrency": null,
      "notes": [
        "Resource deletion requires Administrator, explicit IDs/mentions and confirmation within 30 seconds. Permissions and protected resources are checked again before deletion.",
        "Channel deletion shares a server-wide budget of three deletions in five minutes with .delete. Role cleanup allows three deletions per ten minutes; webhook cleanup allows five per ten minutes. Webhook URLs are rejected because they contain secrets."
      ]
    },
    {
      "name": "cleanup channels",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably delete up to three explicit, non-protected channels.",
      "prefix": ".cleanup channels <targets>",
      "slash": "/cleanup channels",
      "aliases": [],
      "searchAliases": [
        ".cleanup channels",
        ".cleanups channels"
      ],
      "parentAliases": [
        {
          "name": "cleanup",
          "aliases": [
            "cleanups"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [
        "Manage Channels"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "targets",
          "type": "String",
          "required": true,
          "description": "Space-separated explicit mentions or numeric IDs.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".cleanup channels #old-channel",
      "concurrency": "1 active invocation(s) per guild",
      "notes": [
        "Resource deletion requires Administrator, explicit IDs/mentions and confirmation within 30 seconds. Permissions and protected resources are checked again before deletion.",
        "Channel deletion shares a server-wide budget of three deletions in five minutes with .delete. Role cleanup allows three deletions per ten minutes; webhook cleanup allows five per ten minutes. Webhook URLs are rejected because they contain secrets."
      ]
    },
    {
      "name": "cleanup roles",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably delete up to three explicit, hierarchy-safe roles.",
      "prefix": ".cleanup roles <targets>",
      "slash": "/cleanup roles",
      "aliases": [],
      "searchAliases": [
        ".cleanup roles",
        ".cleanups roles"
      ],
      "parentAliases": [
        {
          "name": "cleanup",
          "aliases": [
            "cleanups"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [
        "Manage Roles"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "targets",
          "type": "String",
          "required": true,
          "description": "Space-separated explicit mentions or numeric IDs.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".cleanup roles @OldRole",
      "concurrency": "1 active invocation(s) per guild",
      "notes": [
        "Resource deletion requires Administrator, explicit IDs/mentions and confirmation within 30 seconds. Permissions and protected resources are checked again before deletion.",
        "Channel deletion shares a server-wide budget of three deletions in five minutes with .delete. Role cleanup allows three deletions per ten minutes; webhook cleanup allows five per ten minutes. Webhook URLs are rejected because they contain secrets."
      ]
    },
    {
      "name": "cleanup webhooks",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably delete up to five explicit, non-application webhooks.",
      "prefix": ".cleanup webhooks <targets>",
      "slash": "/cleanup webhooks",
      "aliases": [],
      "searchAliases": [
        ".cleanup webhooks",
        ".cleanups webhooks"
      ],
      "parentAliases": [
        {
          "name": "cleanup",
          "aliases": [
            "cleanups"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [
        "Manage Webhooks"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "targets",
          "type": "String",
          "required": true,
          "description": "Space-separated explicit mentions or numeric IDs.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".cleanup webhooks 1513500353658617926",
      "concurrency": "1 active invocation(s) per guild",
      "notes": [
        "Resource deletion requires Administrator, explicit IDs/mentions and confirmation within 30 seconds. Permissions and protected resources are checked again before deletion.",
        "Channel deletion shares a server-wide budget of three deletions in five minutes with .delete. Role cleanup allows three deletions per ten minutes; webhook cleanup allows five per ten minutes. Webhook URLs are rejected because they contain secrets."
      ]
    },
    {
      "name": "clearsnipes",
      "category": "Messages",
      "serverOnly": true,
      "description": "Clear cached deleted messages from the current channel.",
      "prefix": ".clearsnipes",
      "slash": "/moderation clearsnipes",
      "aliases": [
        ".clearsnipe",
        ".sclear",
        ".snipeclear"
      ],
      "searchAliases": [
        ".clearsnipes",
        ".clearsnipe",
        ".sclear",
        ".snipeclear"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [],
      "example": ".clearsnipes",
      "concurrency": null,
      "notes": [
        "Immediately empties this channel’s deleted-message cache; does not delete messages already posted by an earlier snipe response."
      ]
    },
    {
      "name": "clearwarnings",
      "category": "Safety",
      "serverOnly": true,
      "description": "Remove all saved warnings from a member.",
      "prefix": ".clearwarnings <member> [reason=No reason provided]",
      "slash": "/moderation clearwarnings",
      "aliases": [
        ".clearwarns",
        ".cw"
      ],
      "searchAliases": [
        ".clearwarnings",
        ".clearwarns",
        ".cw"
      ],
      "parentAliases": [],
      "access": "Moderate Members",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "reason",
          "type": "String",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "No reason provided"
        }
      ],
      "example": ".clearwarnings @Member",
      "concurrency": null,
      "notes": [
        "Caller and bot role hierarchies apply. Moderation records and reasons may be visible to authorized server staff; moderation notifications/log messages may also be sent."
      ]
    },
    {
      "name": "clone",
      "category": "Channels",
      "serverOnly": true,
      "description": "Clone one channel subject to creation limits.",
      "prefix": ".clone [channel] [name]",
      "slash": "/channels clone",
      "aliases": [
        ".clonechannel",
        ".channelclone"
      ],
      "searchAliases": [
        ".clone",
        ".clonechannel",
        ".channelclone"
      ],
      "parentAliases": [],
      "access": "Manage Channels",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "name",
          "type": "String",
          "required": false,
          "description": "Name to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".clone",
      "concurrency": "1 active invocation(s) per guild",
      "notes": []
    },
    {
      "name": "coinflip",
      "category": "Minigames",
      "serverOnly": true,
      "description": "Wager coins against Skye, or challenge another member through an acceptance view.",
      "prefix": ".coinflip <wager> [opponent]",
      "slash": "/economy coinflip",
      "aliases": [
        ".flip",
        ".cf"
      ],
      "searchAliases": [
        ".coinflip",
        ".flip",
        ".cf"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "economy"
      ],
      "cooldown": "1 use(s) per 8s; scope: member",
      "parameters": [
        {
          "name": "wager",
          "type": "String",
          "required": true,
          "description": "Number of coins to wager.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "opponent",
          "type": "User",
          "required": false,
          "description": "Member to challenge.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".coinflip 10 @Member",
      "concurrency": null,
      "notes": [
        "The first argument is the wager, not heads/tails. Challenges require the opponent’s acceptance.",
        "Uses server economy currency only. A valid wager and sufficient balance are required. Interactive controls are limited to the relevant player(s); there is no real-money payout."
      ]
    },
    {
      "name": "colorrole",
      "category": "Settings",
      "serverOnly": true,
      "description": "Choose a configured safe colour role, or list available roles.",
      "prefix": ".colorrole [role]",
      "slash": "/colorrole overview",
      "aliases": [
        ".colourrole",
        ".colors",
        ".colores"
      ],
      "searchAliases": [
        ".colorrole",
        ".colourrole",
        ".colors",
        ".colores"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "server_options"
      ],
      "cooldown": "1 use(s) per 8s; scope: member",
      "parameters": [
        {
          "name": "role",
          "type": "Role",
          "required": false,
          "description": "Discord role to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".colorrole @Cosmetic",
      "concurrency": "1 active invocation(s) per member",
      "notes": [
        "Server options must be enabled. Choosing a configured cosmetic role removes previously selected safe colour roles. Repurposed or restrictive roles need administrator review."
      ]
    },
    {
      "name": "colorrole create",
      "category": "Settings",
      "serverOnly": true,
      "description": "Create and register a new permissionless colour role.",
      "prefix": ".colorrole create <color> <name>",
      "slash": "/colorrole create",
      "aliases": [
        ".colorrole add"
      ],
      "searchAliases": [
        ".colorrole create",
        ".colorrole add",
        ".colourrole create",
        ".colourrole add",
        ".colors create",
        ".colors add",
        ".colores create",
        ".colores add"
      ],
      "parentAliases": [
        {
          "name": "colorrole",
          "aliases": [
            "colourrole",
            "colors",
            "colores"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [
        "Manage Roles"
      ],
      "features": [
        "server_options"
      ],
      "cooldown": "1 use(s) per 15s; scope: guild",
      "parameters": [
        {
          "name": "color",
          "type": "String",
          "required": true,
          "description": "Hex colour such as #35D6C5.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "name",
          "type": "String",
          "required": true,
          "description": "Name to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".colorrole create #35D6C5 Sky Blue",
      "concurrency": "1 active invocation(s) per guild",
      "notes": [
        "Server options must be enabled. Choosing a configured cosmetic role removes previously selected safe colour roles. Repurposed or restrictive roles need administrator review."
      ]
    },
    {
      "name": "colorrole delete",
      "category": "Settings",
      "serverOnly": true,
      "description": "Delete one registered colour role and remove its configuration.",
      "prefix": ".colorrole delete <role>",
      "slash": "/colorrole delete",
      "aliases": [
        ".colorrole remove"
      ],
      "searchAliases": [
        ".colorrole delete",
        ".colorrole remove",
        ".colourrole delete",
        ".colourrole remove",
        ".colors delete",
        ".colors remove",
        ".colores delete",
        ".colores remove"
      ],
      "parentAliases": [
        {
          "name": "colorrole",
          "aliases": [
            "colourrole",
            "colors",
            "colores"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [
        "Manage Roles"
      ],
      "features": [
        "server_options"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".colorrole delete @Cosmetic",
      "concurrency": "1 active invocation(s) per guild",
      "notes": [
        "Server options must be enabled. Choosing a configured cosmetic role removes previously selected safe colour roles. Repurposed or restrictive roles need administrator review."
      ]
    },
    {
      "name": "commandinfo",
      "category": "General",
      "serverOnly": false,
      "description": "Show usage, aliases, description, and required access for one command.",
      "prefix": ".commandinfo <command_name>",
      "slash": "/bot commandinfo",
      "aliases": [
        ".command",
        ".cmdinfo",
        ".usage",
        ".comando"
      ],
      "searchAliases": [
        ".commandinfo",
        ".command",
        ".cmdinfo",
        ".usage",
        ".comando"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "command_name",
          "type": "String",
          "required": true,
          "description": "Command name without a prefix.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".commandinfo help moderation",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "confess",
      "category": "Community",
      "serverOnly": true,
      "description": "Post a confession anonymously to ordinary readers in the configured channel.",
      "prefix": ".confess <message>",
      "slash": "/fun confess",
      "aliases": [
        ".anon",
        ".confession"
      ],
      "searchAliases": [
        ".confess",
        ".anon",
        ".confession"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [
        "Manage Messages"
      ],
      "features": [
        "confessions"
      ],
      "cooldown": "1 use(s) per 300s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "String",
          "required": true,
          "description": "Message text, ID, or Discord message link.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".confess I really enjoyed the community event yesterday.",
      "concurrency": null,
      "notes": [
        "Use /fun confess for an ephemeral acknowledgement. Prefix input is initially visible until deletion succeeds; do not put secrets in a public command.",
        "Requires destination View Channel and Send Messages. Text must be 10–1,500 characters. Author ID and confession/message IDs are retained for abuse investigations (latest 200 records per server)."
      ]
    },
    {
      "name": "confessions",
      "category": "Community",
      "serverOnly": true,
      "description": "Configure and moderate anonymous confessions.",
      "prefix": ".confessions",
      "slash": "/confessions overview",
      "aliases": [
        ".confessionconfig",
        ".anonconfig"
      ],
      "searchAliases": [
        ".confessions",
        ".confessionconfig",
        ".anonconfig"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".confessions",
      "concurrency": null,
      "notes": [
        "Setup enables confessions in the chosen channel. Confession authors remain identifiable to the operator through stored abuse-investigation records; “anonymous” means anonymous to ordinary readers."
      ]
    },
    {
      "name": "confessions disable",
      "category": "Community",
      "serverOnly": true,
      "description": "Disable confessions while preserving its settings.",
      "prefix": ".confessions disable",
      "slash": "/confessions disable",
      "aliases": [
        ".confessions off",
        ".confessions stop"
      ],
      "searchAliases": [
        ".confessions disable",
        ".confessions off",
        ".confessions stop",
        ".confessionconfig disable",
        ".confessionconfig off",
        ".confessionconfig stop",
        ".anonconfig disable",
        ".anonconfig off",
        ".anonconfig stop"
      ],
      "parentAliases": [
        {
          "name": "confessions",
          "aliases": [
            "confessionconfig",
            "anonconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".confessions disable",
      "concurrency": null,
      "notes": [
        "Setup enables confessions in the chosen channel. Confession authors remain identifiable to the operator through stored abuse-investigation records; “anonymous” means anonymous to ordinary readers."
      ]
    },
    {
      "name": "confessions remove",
      "category": "Community",
      "serverOnly": true,
      "description": "Delete a posted confession by its confession number and remove the matching record.",
      "prefix": ".confessions remove <confession_id>",
      "slash": "/confessions remove",
      "aliases": [
        ".confessions delete",
        ".confessions moderate"
      ],
      "searchAliases": [
        ".confessions remove",
        ".confessions delete",
        ".confessions moderate",
        ".confessionconfig remove",
        ".confessionconfig delete",
        ".confessionconfig moderate",
        ".anonconfig remove",
        ".anonconfig delete",
        ".anonconfig moderate"
      ],
      "parentAliases": [
        {
          "name": "confessions",
          "aliases": [
            "confessionconfig",
            "anonconfig"
          ]
        }
      ],
      "access": "Manage Messages",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "confession_id",
          "type": "String",
          "required": true,
          "description": "Value for confession id.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".confessions remove 1",
      "concurrency": null,
      "notes": [
        "Setup enables confessions in the chosen channel. Confession authors remain identifiable to the operator through stored abuse-investigation records; “anonymous” means anonymous to ordinary readers."
      ]
    },
    {
      "name": "confessions setup",
      "category": "Community",
      "serverOnly": true,
      "description": "Choose the confession destination and enable confessions.",
      "prefix": ".confessions setup <channel>",
      "slash": "/confessions setup",
      "aliases": [
        ".confessions configure",
        ".confessions set",
        ".confessions enable",
        ".confessions on"
      ],
      "searchAliases": [
        ".confessions setup",
        ".confessions configure",
        ".confessions set",
        ".confessions enable",
        ".confessions on",
        ".confessionconfig setup",
        ".confessionconfig configure",
        ".confessionconfig set",
        ".confessionconfig enable",
        ".confessionconfig on",
        ".anonconfig setup",
        ".anonconfig configure",
        ".anonconfig set",
        ".anonconfig enable",
        ".anonconfig on"
      ],
      "parentAliases": [
        {
          "name": "confessions",
          "aliases": [
            "confessionconfig",
            "anonconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [
        "Embed Links",
        "Manage Messages",
        "Send Messages"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": true,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".confessions setup #general",
      "concurrency": null,
      "notes": [
        "Setup enables confessions in the chosen channel. Confession authors remain identifiable to the operator through stored abuse-investigation records; “anonymous” means anonymous to ordinary readers."
      ]
    },
    {
      "name": "connect4",
      "category": "Minigames",
      "serverOnly": true,
      "description": "Play Connect 4 against skye or challenge another member.",
      "prefix": ".connect4 [opponent]",
      "slash": "/games connect4",
      "aliases": [
        ".connectfour",
        ".c4"
      ],
      "searchAliases": [
        ".connect4",
        ".connectfour",
        ".c4"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "games"
      ],
      "cooldown": "1 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "opponent",
          "type": "User",
          "required": false,
          "description": "Member to challenge.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".connect4",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "counting",
      "category": "Community",
      "serverOnly": true,
      "description": "Configure the sequential counting channel.",
      "prefix": ".counting",
      "slash": "/counting overview",
      "aliases": [
        ".count",
        ".countgame"
      ],
      "searchAliases": [
        ".counting",
        ".count",
        ".countgame"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".counting",
      "concurrency": null,
      "notes": [
        "Optional counting channel. Setup enables it. The next number must be posted by a different member; wrong or repeated turns may be removed according to the feature rules."
      ]
    },
    {
      "name": "counting disable",
      "category": "Community",
      "serverOnly": true,
      "description": "Disable counting while preserving its settings.",
      "prefix": ".counting disable",
      "slash": "/counting disable",
      "aliases": [
        ".counting off",
        ".counting stop"
      ],
      "searchAliases": [
        ".counting disable",
        ".counting off",
        ".counting stop",
        ".count disable",
        ".count off",
        ".count stop",
        ".countgame disable",
        ".countgame off",
        ".countgame stop"
      ],
      "parentAliases": [
        {
          "name": "counting",
          "aliases": [
            "count",
            "countgame"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".counting disable",
      "concurrency": null,
      "notes": [
        "Optional counting channel. Setup enables it. The next number must be posted by a different member; wrong or repeated turns may be removed according to the feature rules."
      ]
    },
    {
      "name": "counting reset",
      "category": "Community",
      "serverOnly": true,
      "description": "Set the channel’s current count and clear the previous counter.",
      "prefix": ".counting reset [number=0]",
      "slash": "/counting reset",
      "aliases": [
        ".counting restart"
      ],
      "searchAliases": [
        ".counting reset",
        ".counting restart",
        ".count reset",
        ".count restart",
        ".countgame reset",
        ".countgame restart"
      ],
      "parentAliases": [
        {
          "name": "counting",
          "aliases": [
            "count",
            "countgame"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "number",
          "type": "Integer",
          "required": false,
          "description": "Number to use.",
          "choices": [],
          "minimum": 0,
          "maximum": 1000000000,
          "default": 0
        }
      ],
      "example": ".counting reset",
      "concurrency": null,
      "notes": [
        "Optional counting channel. Setup enables it. The next number must be posted by a different member; wrong or repeated turns may be removed according to the feature rules."
      ]
    },
    {
      "name": "counting setup",
      "category": "Community",
      "serverOnly": true,
      "description": "Configure and enable counting.",
      "prefix": ".counting setup <channel>",
      "slash": "/counting setup",
      "aliases": [
        ".counting configure",
        ".counting set",
        ".counting enable",
        ".counting on"
      ],
      "searchAliases": [
        ".counting setup",
        ".counting configure",
        ".counting set",
        ".counting enable",
        ".counting on",
        ".count setup",
        ".count configure",
        ".count set",
        ".count enable",
        ".count on",
        ".countgame setup",
        ".countgame configure",
        ".countgame set",
        ".countgame enable",
        ".countgame on"
      ],
      "parentAliases": [
        {
          "name": "counting",
          "aliases": [
            "count",
            "countgame"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [
        "Add Reactions",
        "Embed Links",
        "Manage Messages",
        "Send Messages"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": true,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".counting setup #general",
      "concurrency": null,
      "notes": [
        "Optional counting channel. Setup enables it. The next number must be posted by a different member; wrong or repeated turns may be removed according to the feature rules."
      ]
    },
    {
      "name": "create",
      "category": "Channels",
      "serverOnly": true,
      "description": "Create one bounded channel with anti-mass-creation limits.",
      "prefix": ".create <kind> <name>",
      "slash": "/channels create",
      "aliases": [
        ".createchannel",
        ".channelcreate"
      ],
      "searchAliases": [
        ".create",
        ".createchannel",
        ".channelcreate"
      ],
      "parentAliases": [],
      "access": "Manage Channels",
      "botPermissions": [
        "Manage Channels"
      ],
      "features": [],
      "cooldown": "1 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "kind",
          "type": "String",
          "required": true,
          "description": "Channel type to create.",
          "choices": [
            "text",
            "voice",
            "category"
          ],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "name",
          "type": "String",
          "required": true,
          "description": "Name to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".create text community-chat",
      "concurrency": "1 active invocation(s) per guild",
      "notes": []
    },
    {
      "name": "cuddle",
      "category": "Fun & actions",
      "serverOnly": false,
      "description": "Send a cuddle reaction to another member.",
      "prefix": ".cuddle <member>",
      "slash": "/fun cuddle",
      "aliases": [
        ".snuggle"
      ],
      "searchAliases": [
        ".cuddle",
        ".snuggle"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".cuddle @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "customalias",
      "category": "Settings",
      "serverOnly": true,
      "description": "Create server-specific shortcuts to built-in commands.",
      "prefix": ".customalias",
      "slash": "/customalias overview",
      "aliases": [
        ".aliases",
        ".ca",
        ".atajos"
      ],
      "searchAliases": [
        ".customalias",
        ".aliases",
        ".ca",
        ".atajos"
      ],
      "parentAliases": [],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".customalias",
      "concurrency": null,
      "notes": [
        "Aliases are server-specific prefix shortcuts, not new slash commands. They cannot bypass the target command’s permission checks or cooldowns.",
        "Names: 1–20 lowercase letters, digits, underscores or hyphens; at most 25 saved aliases. Targets must resolve to an existing, non-hidden command."
      ]
    },
    {
      "name": "customalias add",
      "category": "Settings",
      "serverOnly": true,
      "description": "Add an entry to customalias.",
      "prefix": ".customalias add <alias> <command_name>",
      "slash": "/customalias add",
      "aliases": [
        ".customalias create",
        ".customalias set"
      ],
      "searchAliases": [
        ".customalias add",
        ".customalias create",
        ".customalias set",
        ".aliases add",
        ".aliases create",
        ".aliases set",
        ".ca add",
        ".ca create",
        ".ca set",
        ".atajos add",
        ".atajos create",
        ".atajos set"
      ],
      "parentAliases": [
        {
          "name": "customalias",
          "aliases": [
            "aliases",
            "ca",
            "atajos"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "alias",
          "type": "String",
          "required": true,
          "description": "Custom alias name.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "command_name",
          "type": "String",
          "required": true,
          "description": "Command name without a prefix.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".customalias add modhelp help moderation",
      "concurrency": null,
      "notes": [
        "Aliases are server-specific prefix shortcuts, not new slash commands. They cannot bypass the target command’s permission checks or cooldowns.",
        "Names: 1–20 lowercase letters, digits, underscores or hyphens; at most 25 saved aliases. Targets must resolve to an existing, non-hidden command."
      ]
    },
    {
      "name": "customalias remove",
      "category": "Settings",
      "serverOnly": true,
      "description": "Remove an entry from customalias.",
      "prefix": ".customalias remove <alias>",
      "slash": "/customalias remove",
      "aliases": [
        ".customalias delete",
        ".customalias unset"
      ],
      "searchAliases": [
        ".customalias remove",
        ".customalias delete",
        ".customalias unset",
        ".aliases remove",
        ".aliases delete",
        ".aliases unset",
        ".ca remove",
        ".ca delete",
        ".ca unset",
        ".atajos remove",
        ".atajos delete",
        ".atajos unset"
      ],
      "parentAliases": [
        {
          "name": "customalias",
          "aliases": [
            "aliases",
            "ca",
            "atajos"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "alias",
          "type": "String",
          "required": true,
          "description": "Custom alias name.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".customalias remove rules",
      "concurrency": null,
      "notes": [
        "Aliases are server-specific prefix shortcuts, not new slash commands. They cannot bypass the target command’s permission checks or cooldowns.",
        "Names: 1–20 lowercase letters, digits, underscores or hyphens; at most 25 saved aliases. Targets must resolve to an existing, non-hidden command."
      ]
    },
    {
      "name": "daily",
      "category": "Progression",
      "serverOnly": true,
      "description": "Claim the configured daily economy reward.",
      "prefix": ".daily",
      "slash": "/economy daily",
      "aliases": [
        ".claim",
        ".collect",
        ".dailyreward",
        ".diario"
      ],
      "searchAliases": [
        ".daily",
        ".claim",
        ".collect",
        ".dailyreward",
        ".diario"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "economy"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".daily",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "dare",
      "category": "Fun & actions",
      "serverOnly": false,
      "description": "Receive a random dare prompt.",
      "prefix": ".dare",
      "slash": "/fun dare",
      "aliases": [
        ".challenge"
      ],
      "searchAliases": [
        ".dare",
        ".challenge"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "games"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".dare",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "dashboard",
      "category": "Settings",
      "serverOnly": true,
      "description": "Show a read-only overview of this server's skye configuration.",
      "prefix": ".dashboard",
      "slash": "/serverconfig dashboard",
      "aliases": [
        ".dash",
        ".serverdashboard"
      ],
      "searchAliases": [
        ".dashboard",
        ".dash",
        ".serverdashboard"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".dashboard",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "decode",
      "category": "Utilities",
      "serverOnly": false,
      "description": "Decode bounded Base64 text as UTF-8.",
      "prefix": ".decode <text>",
      "slash": "/utilities decode",
      "aliases": [
        ".b64decode",
        ".unb64"
      ],
      "searchAliases": [
        ".decode",
        ".b64decode",
        ".unb64"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "5 use(s) per 10s; scope: user",
      "parameters": [
        {
          "name": "text",
          "type": "String",
          "required": true,
          "description": "Text to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".decode Hello there",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "define",
      "category": "Utilities",
      "serverOnly": false,
      "description": "Look up a concise English dictionary definition.",
      "prefix": ".define <word>",
      "slash": "/utilities define",
      "aliases": [
        ".def",
        ".dictionary",
        ".meaning"
      ],
      "searchAliases": [
        ".define",
        ".def",
        ".dictionary",
        ".meaning"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: user",
      "parameters": [
        {
          "name": "word",
          "type": "String",
          "required": true,
          "description": "Dictionary word.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".define horizon",
      "concurrency": null,
      "notes": [
        "One English word, 1–50 letters/apostrophes/hyphens. Sent to Free Dictionary API."
      ]
    },
    {
      "name": "delete",
      "category": "Channels",
      "serverOnly": true,
      "description": "Delete one non-system channel after requester-only confirmation.",
      "prefix": ".delete [channel]",
      "slash": "/channels delete",
      "aliases": [
        ".deletechannel",
        ".channeldelete"
      ],
      "searchAliases": [
        ".delete",
        ".deletechannel",
        ".channeldelete"
      ],
      "parentAliases": [],
      "access": "Manage Channels",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".delete",
      "concurrency": "1 active invocation(s) per guild",
      "notes": [
        "Irreversible channel deletion with a 30-second confirmation. Permissions and protected system channels are rechecked. Shared limit: three channel deletions per server in five minutes."
      ]
    },
    {
      "name": "dice",
      "category": "Minigames",
      "serverOnly": true,
      "description": "Roll bounded standard dice notation such as 2d20.",
      "prefix": ".dice [notation=1d6]",
      "slash": "/games dice",
      "aliases": [
        ".roll",
        ".r",
        ".diceroll",
        ".dado",
        ".dados"
      ],
      "searchAliases": [
        ".dice",
        ".roll",
        ".r",
        ".diceroll",
        ".dado",
        ".dados"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "games"
      ],
      "cooldown": "5 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "notation",
          "type": "String",
          "required": false,
          "description": "Dice notation such as 2d6.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "1d6"
        }
      ],
      "example": ".dice",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "economy",
      "category": "Progression",
      "serverOnly": true,
      "description": "View or configure the optional server economy.",
      "prefix": ".economy",
      "slash": "/economy overview",
      "aliases": [
        ".eco",
        ".currency",
        ".economia"
      ],
      "searchAliases": [
        ".economy",
        ".eco",
        ".currency",
        ".economia"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".economy",
      "concurrency": null,
      "notes": [
        "Optional, server-specific virtual currency; no real-money value, purchase or cash-out. Enable with .economy enable or .features enable economy.",
        "Administrative balance/settings commands change stored server data. Disabling the feature preserves balances and settings."
      ]
    },
    {
      "name": "economy addbalance",
      "category": "Progression",
      "serverOnly": true,
      "description": "Add a bounded amount to a member's balance.",
      "prefix": ".economy addbalance <member> <amount>",
      "slash": "/economy addbalance",
      "aliases": [
        ".economy addbal"
      ],
      "searchAliases": [
        ".economy addbalance",
        ".economy addbal",
        ".eco addbalance",
        ".eco addbal",
        ".currency addbalance",
        ".currency addbal",
        ".economia addbalance",
        ".economia addbal"
      ],
      "parentAliases": [
        {
          "name": "economy",
          "aliases": [
            "eco",
            "currency",
            "economia"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "amount",
          "type": "Integer",
          "required": true,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": -1000000000,
          "maximum": 1000000000
        }
      ],
      "example": ".economy addbalance @Member 10",
      "concurrency": null,
      "notes": [
        "Optional, server-specific virtual currency; no real-money value, purchase or cash-out. Enable with .economy enable or .features enable economy.",
        "Administrative balance/settings commands change stored server data. Disabling the feature preserves balances and settings."
      ]
    },
    {
      "name": "economy disable",
      "category": "Progression",
      "serverOnly": true,
      "description": "Disable economy while preserving its settings.",
      "prefix": ".economy disable",
      "slash": "/economy disable",
      "aliases": [
        ".economy off"
      ],
      "searchAliases": [
        ".economy disable",
        ".economy off",
        ".eco disable",
        ".eco off",
        ".currency disable",
        ".currency off",
        ".economia disable",
        ".economia off"
      ],
      "parentAliases": [
        {
          "name": "economy",
          "aliases": [
            "eco",
            "currency",
            "economia"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".economy disable",
      "concurrency": null,
      "notes": [
        "Optional, server-specific virtual currency; no real-money value, purchase or cash-out. Enable with .economy enable or .features enable economy.",
        "Administrative balance/settings commands change stored server data. Disabling the feature preserves balances and settings."
      ]
    },
    {
      "name": "economy enable",
      "category": "Progression",
      "serverOnly": true,
      "description": "Enable economy.",
      "prefix": ".economy enable",
      "slash": "/economy enable",
      "aliases": [
        ".economy on"
      ],
      "searchAliases": [
        ".economy enable",
        ".economy on",
        ".eco enable",
        ".eco on",
        ".currency enable",
        ".currency on",
        ".economia enable",
        ".economia on"
      ],
      "parentAliases": [
        {
          "name": "economy",
          "aliases": [
            "eco",
            "currency",
            "economia"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".economy enable",
      "concurrency": null,
      "notes": [
        "Optional, server-specific virtual currency; no real-money value, purchase or cash-out. Enable with .economy enable or .features enable economy.",
        "Administrative balance/settings commands change stored server data. Disabling the feature preserves balances and settings."
      ]
    },
    {
      "name": "economy setbalance",
      "category": "Progression",
      "serverOnly": true,
      "description": "Set a member's balance to a bounded value.",
      "prefix": ".economy setbalance <member> <amount>",
      "slash": "/economy setbalance",
      "aliases": [
        ".economy setbal"
      ],
      "searchAliases": [
        ".economy setbalance",
        ".economy setbal",
        ".eco setbalance",
        ".eco setbal",
        ".currency setbalance",
        ".currency setbal",
        ".economia setbalance",
        ".economia setbal"
      ],
      "parentAliases": [
        {
          "name": "economy",
          "aliases": [
            "eco",
            "currency",
            "economia"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "amount",
          "type": "Integer",
          "required": true,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 0,
          "maximum": 1000000000000
        }
      ],
      "example": ".economy setbalance @Member 10",
      "concurrency": null,
      "notes": [
        "Optional, server-specific virtual currency; no real-money value, purchase or cash-out. Enable with .economy enable or .features enable economy.",
        "Administrative balance/settings commands change stored server data. Disabling the feature preserves balances and settings."
      ]
    },
    {
      "name": "economy settings",
      "category": "Progression",
      "serverOnly": true,
      "description": "View or change bounded currency and reward settings.",
      "prefix": ".economy settings [setting] [value]",
      "slash": "/economy settings",
      "aliases": [
        ".economy config",
        ".economy setup"
      ],
      "searchAliases": [
        ".economy settings",
        ".economy config",
        ".economy setup",
        ".eco settings",
        ".eco config",
        ".eco setup",
        ".currency settings",
        ".currency config",
        ".currency setup",
        ".economia settings",
        ".economia config",
        ".economia setup"
      ],
      "parentAliases": [
        {
          "name": "economy",
          "aliases": [
            "eco",
            "currency",
            "economia"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "setting",
          "type": "String",
          "required": false,
          "description": "Setting to change.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "value",
          "type": "String",
          "required": false,
          "description": "New setting value.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".economy settings daily 100",
      "concurrency": null,
      "notes": [
        "Optional, server-specific virtual currency; no real-money value, purchase or cash-out. Enable with .economy enable or .features enable economy.",
        "Administrative balance/settings commands change stored server data. Disabling the feature preserves balances and settings.",
        "Settings: name (1–20 characters), symbol (1–10), daily, workmin, workmax (0–1,000,000). Work minimum cannot exceed maximum. With no arguments, displays current values."
      ]
    },
    {
      "name": "eightball",
      "category": "Minigames",
      "serverOnly": true,
      "description": "Ask skye's magic 8-ball a question.",
      "prefix": ".eightball <question>",
      "slash": "/games eightball",
      "aliases": [
        ".8ball",
        ".8b",
        ".ask",
        ".bola8"
      ],
      "searchAliases": [
        ".eightball",
        ".8ball",
        ".8b",
        ".ask",
        ".bola8"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "games"
      ],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "question",
          "type": "String",
          "required": true,
          "description": "Question to ask.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".eightball Will it rain?",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "embed",
      "category": "Messages",
      "serverOnly": true,
      "description": "Send a bounded, mention-safe Miku-themed embed; restricted to message managers.",
      "prefix": ".embed <content>",
      "slash": "/messages embed",
      "aliases": [
        ".sendembed"
      ],
      "searchAliases": [
        ".embed",
        ".sendembed"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [
        "Embed Links",
        "Send Messages"
      ],
      "features": [],
      "cooldown": "2 use(s) per 20s; scope: member",
      "parameters": [
        {
          "name": "content",
          "type": "String",
          "required": true,
          "description": "Text content.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".embed Community update | The event starts at 18:00.",
      "concurrency": "1 active invocation(s) per member",
      "notes": [
        "Use title | description. Requires Manage Messages; mentions are suppressed."
      ]
    },
    {
      "name": "encode",
      "category": "Utilities",
      "serverOnly": false,
      "description": "Encode bounded UTF-8 text as Base64.",
      "prefix": ".encode <text>",
      "slash": "/utilities encode",
      "aliases": [
        ".b64encode",
        ".b64"
      ],
      "searchAliases": [
        ".encode",
        ".b64encode",
        ".b64"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "5 use(s) per 10s; scope: user",
      "parameters": [
        {
          "name": "text",
          "type": "String",
          "required": true,
          "description": "Text to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".encode Hello there",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "features",
      "category": "Settings",
      "serverOnly": true,
      "description": "View and toggle optional feature modules.",
      "prefix": ".features",
      "slash": "/features overview",
      "aliases": [
        ".feature",
        ".modules",
        ".modulos"
      ],
      "searchAliases": [
        ".features",
        ".feature",
        ".modules",
        ".modulos"
      ],
      "parentAliases": [],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".features",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "features disable",
      "category": "Settings",
      "serverOnly": true,
      "description": "Disable features while preserving its settings.",
      "prefix": ".features disable <feature>",
      "slash": "/features disable",
      "aliases": [
        ".features off",
        ".features desactivar"
      ],
      "searchAliases": [
        ".features disable",
        ".features off",
        ".features desactivar",
        ".feature disable",
        ".feature off",
        ".feature desactivar",
        ".modules disable",
        ".modules off",
        ".modules desactivar",
        ".modulos disable",
        ".modulos off",
        ".modulos desactivar"
      ],
      "parentAliases": [
        {
          "name": "features",
          "aliases": [
            "feature",
            "modules",
            "modulos"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "feature",
          "type": "String",
          "required": true,
          "description": "Optional feature module.",
          "choices": [
            "economy",
            "leveling",
            "giveaways",
            "server_options",
            "games",
            "bump_reminders",
            "counting",
            "confessions",
            "antinuke",
            "antiraid",
            "logging",
            "voicemaster"
          ],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".features disable economy",
      "concurrency": null,
      "notes": [
        "Stops the selected optional module while retaining configuration and stored data. Disabling a module is not a data-deletion request."
      ]
    },
    {
      "name": "features enable",
      "category": "Settings",
      "serverOnly": true,
      "description": "Enable features.",
      "prefix": ".features enable <feature>",
      "slash": "/features enable",
      "aliases": [
        ".features on",
        ".features activar"
      ],
      "searchAliases": [
        ".features enable",
        ".features on",
        ".features activar",
        ".feature enable",
        ".feature on",
        ".feature activar",
        ".modules enable",
        ".modules on",
        ".modules activar",
        ".modulos enable",
        ".modulos on",
        ".modulos activar"
      ],
      "parentAliases": [
        {
          "name": "features",
          "aliases": [
            "feature",
            "modules",
            "modulos"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "feature",
          "type": "String",
          "required": true,
          "description": "Optional feature module.",
          "choices": [
            "economy",
            "leveling",
            "giveaways",
            "server_options",
            "games",
            "bump_reminders",
            "counting",
            "confessions",
            "antinuke",
            "antiraid",
            "logging",
            "voicemaster"
          ],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".features enable economy",
      "concurrency": null,
      "notes": [
        "Optional modules are disabled initially. Some require setup before enabling. Anti-nuke enable/disable still respects the owner lock."
      ]
    },
    {
      "name": "filter",
      "category": "Safety",
      "serverOnly": true,
      "description": "Configure bounded content and spam filtering.",
      "prefix": ".filter",
      "slash": "/filter overview",
      "aliases": [
        ".automod",
        ".contentfilter"
      ],
      "searchAliases": [
        ".filter",
        ".automod",
        ".contentfilter"
      ],
      "parentAliases": [],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".filter",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "filter action",
      "category": "Safety",
      "serverOnly": true,
      "description": "Choose the response used for matched filtered content.",
      "prefix": ".filter action <action>",
      "slash": "/filter action",
      "aliases": [
        ".filter response"
      ],
      "searchAliases": [
        ".filter action",
        ".filter response",
        ".automod action",
        ".automod response",
        ".contentfilter action",
        ".contentfilter response"
      ],
      "parentAliases": [
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "action",
          "type": "String",
          "required": true,
          "description": "Action to perform.",
          "choices": [
            "delete",
            "warn",
            "timeout",
            "kick",
            "ban",
            "delete_warn",
            "delete_timeout",
            "delete_kick",
            "delete_ban"
          ],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".filter action delete_warn",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "filter add",
      "category": "Safety",
      "serverOnly": true,
      "description": "Add an entry to filter.",
      "prefix": ".filter add <term>",
      "slash": "/filter add",
      "aliases": [
        ".filter word",
        ".filter term"
      ],
      "searchAliases": [
        ".filter add",
        ".filter word",
        ".filter term",
        ".automod add",
        ".automod word",
        ".automod term",
        ".contentfilter add",
        ".contentfilter word",
        ".contentfilter term"
      ],
      "parentAliases": [
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "term",
          "type": "String",
          "required": true,
          "description": "Filter phrase.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".filter add blocked phrase",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "filter disable",
      "category": "Safety",
      "serverOnly": true,
      "description": "Disable filter while preserving its settings.",
      "prefix": ".filter disable",
      "slash": "/filter disable",
      "aliases": [
        ".filter off"
      ],
      "searchAliases": [
        ".filter disable",
        ".filter off",
        ".automod disable",
        ".automod off",
        ".contentfilter disable",
        ".contentfilter off"
      ],
      "parentAliases": [
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".filter disable",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "filter enable",
      "category": "Safety",
      "serverOnly": true,
      "description": "Enable filter.",
      "prefix": ".filter enable",
      "slash": "/filter enable",
      "aliases": [
        ".filter on"
      ],
      "searchAliases": [
        ".filter enable",
        ".filter on",
        ".automod enable",
        ".automod on",
        ".contentfilter enable",
        ".contentfilter on"
      ],
      "parentAliases": [
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [
        "Manage Messages"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".filter enable",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "filter exempt",
      "category": "Safety",
      "serverOnly": true,
      "description": "List content-filter user and role exemptions.",
      "prefix": ".filter exempt",
      "slash": "/filter exempt overview",
      "aliases": [
        ".filter exemptions",
        ".filter ignore"
      ],
      "searchAliases": [
        ".filter exempt",
        ".filter exemptions",
        ".filter ignore",
        ".automod exempt",
        ".automod exemptions",
        ".automod ignore",
        ".contentfilter exempt",
        ".contentfilter exemptions",
        ".contentfilter ignore"
      ],
      "parentAliases": [
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".filter exempt",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "filter exempt remove",
      "category": "Safety",
      "serverOnly": true,
      "description": "Remove a member’s content-filter exemption.",
      "prefix": ".filter exempt remove <member>",
      "slash": "/filter exempt remove",
      "aliases": [
        ".filter exempt del",
        ".filter exempt delete"
      ],
      "searchAliases": [
        ".filter exempt remove",
        ".filter exempt del",
        ".filter exempt delete",
        ".filter exemptions remove",
        ".filter exemptions del",
        ".filter exemptions delete",
        ".filter ignore remove",
        ".filter ignore del",
        ".filter ignore delete",
        ".automod exempt remove",
        ".automod exempt del",
        ".automod exempt delete",
        ".automod exemptions remove",
        ".automod exemptions del",
        ".automod exemptions delete",
        ".automod ignore remove",
        ".automod ignore del",
        ".automod ignore delete",
        ".contentfilter exempt remove",
        ".contentfilter exempt del",
        ".contentfilter exempt delete",
        ".contentfilter exemptions remove",
        ".contentfilter exemptions del",
        ".contentfilter exemptions delete",
        ".contentfilter ignore remove",
        ".contentfilter ignore del",
        ".contentfilter ignore delete"
      ],
      "parentAliases": [
        {
          "name": "filter exempt",
          "aliases": [
            "exemptions",
            "ignore"
          ]
        },
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".filter exempt remove @Member",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "filter exempt role",
      "category": "Safety",
      "serverOnly": true,
      "description": "Exempt members of one role from content filtering.",
      "prefix": ".filter exempt role <role>",
      "slash": "/filter exempt role",
      "aliases": [
        ".filter exempt roleadd"
      ],
      "searchAliases": [
        ".filter exempt role",
        ".filter exempt roleadd",
        ".filter exemptions role",
        ".filter exemptions roleadd",
        ".filter ignore role",
        ".filter ignore roleadd",
        ".automod exempt role",
        ".automod exempt roleadd",
        ".automod exemptions role",
        ".automod exemptions roleadd",
        ".automod ignore role",
        ".automod ignore roleadd",
        ".contentfilter exempt role",
        ".contentfilter exempt roleadd",
        ".contentfilter exemptions role",
        ".contentfilter exemptions roleadd",
        ".contentfilter ignore role",
        ".contentfilter ignore roleadd"
      ],
      "parentAliases": [
        {
          "name": "filter exempt",
          "aliases": [
            "exemptions",
            "ignore"
          ]
        },
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".filter exempt role @Cosmetic",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "filter exempt roleremove",
      "category": "Safety",
      "serverOnly": true,
      "description": "Remove a role-based content-filter exemption.",
      "prefix": ".filter exempt roleremove <role>",
      "slash": "/filter exempt roleremove",
      "aliases": [
        ".filter exempt roledel",
        ".filter exempt roledelete"
      ],
      "searchAliases": [
        ".filter exempt roleremove",
        ".filter exempt roledel",
        ".filter exempt roledelete",
        ".filter exemptions roleremove",
        ".filter exemptions roledel",
        ".filter exemptions roledelete",
        ".filter ignore roleremove",
        ".filter ignore roledel",
        ".filter ignore roledelete",
        ".automod exempt roleremove",
        ".automod exempt roledel",
        ".automod exempt roledelete",
        ".automod exemptions roleremove",
        ".automod exemptions roledel",
        ".automod exemptions roledelete",
        ".automod ignore roleremove",
        ".automod ignore roledel",
        ".automod ignore roledelete",
        ".contentfilter exempt roleremove",
        ".contentfilter exempt roledel",
        ".contentfilter exempt roledelete",
        ".contentfilter exemptions roleremove",
        ".contentfilter exemptions roledel",
        ".contentfilter exemptions roledelete",
        ".contentfilter ignore roleremove",
        ".contentfilter ignore roledel",
        ".contentfilter ignore roledelete"
      ],
      "parentAliases": [
        {
          "name": "filter exempt",
          "aliases": [
            "exemptions",
            "ignore"
          ]
        },
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".filter exempt roleremove @Cosmetic",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "filter exempt user",
      "category": "Safety",
      "serverOnly": true,
      "description": "Add a member to the content-filter exemption list.",
      "prefix": ".filter exempt user <member>",
      "slash": "/filter exempt user",
      "aliases": [
        ".filter exempt member",
        ".filter exempt add"
      ],
      "searchAliases": [
        ".filter exempt user",
        ".filter exempt member",
        ".filter exempt add",
        ".filter exemptions user",
        ".filter exemptions member",
        ".filter exemptions add",
        ".filter ignore user",
        ".filter ignore member",
        ".filter ignore add",
        ".automod exempt user",
        ".automod exempt member",
        ".automod exempt add",
        ".automod exemptions user",
        ".automod exemptions member",
        ".automod exemptions add",
        ".automod ignore user",
        ".automod ignore member",
        ".automod ignore add",
        ".contentfilter exempt user",
        ".contentfilter exempt member",
        ".contentfilter exempt add",
        ".contentfilter exemptions user",
        ".contentfilter exemptions member",
        ".contentfilter exemptions add",
        ".contentfilter ignore user",
        ".contentfilter ignore member",
        ".contentfilter ignore add"
      ],
      "parentAliases": [
        {
          "name": "filter exempt",
          "aliases": [
            "exemptions",
            "ignore"
          ]
        },
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".filter exempt user @Member",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "filter list",
      "category": "Safety",
      "serverOnly": true,
      "description": "List configured entries in filter.",
      "prefix": ".filter list",
      "slash": "/filter list",
      "aliases": [
        ".filter show",
        ".filter terms"
      ],
      "searchAliases": [
        ".filter list",
        ".filter show",
        ".filter terms",
        ".automod list",
        ".automod show",
        ".automod terms",
        ".contentfilter list",
        ".contentfilter show",
        ".contentfilter terms"
      ],
      "parentAliases": [
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".filter list",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "filter log",
      "category": "Safety",
      "serverOnly": true,
      "description": "Set the filter-action log destination, or clear it by omitting the channel.",
      "prefix": ".filter log [channel]",
      "slash": "/filter log",
      "aliases": [],
      "searchAliases": [
        ".filter log",
        ".automod log",
        ".contentfilter log"
      ],
      "parentAliases": [
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".filter log #staff-log",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "filter remove",
      "category": "Safety",
      "serverOnly": true,
      "description": "Remove an entry from filter.",
      "prefix": ".filter remove <term>",
      "slash": "/filter remove",
      "aliases": [
        ".filter delete",
        ".filter del"
      ],
      "searchAliases": [
        ".filter remove",
        ".filter delete",
        ".filter del",
        ".automod remove",
        ".automod delete",
        ".automod del",
        ".contentfilter remove",
        ".contentfilter delete",
        ".contentfilter del"
      ],
      "parentAliases": [
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "term",
          "type": "String",
          "required": true,
          "description": "Filter phrase.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".filter remove blocked phrase",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "filter spam",
      "category": "Safety",
      "serverOnly": true,
      "description": "View anti-spam settings.",
      "prefix": ".filter spam",
      "slash": "/filter spam overview",
      "aliases": [],
      "searchAliases": [
        ".filter spam",
        ".automod spam",
        ".contentfilter spam"
      ],
      "parentAliases": [
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".filter spam",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "filter spam action",
      "category": "Safety",
      "serverOnly": true,
      "description": "Choose the response used when message spam is detected.",
      "prefix": ".filter spam action <action>",
      "slash": "/filter spam action",
      "aliases": [
        ".filter spam response"
      ],
      "searchAliases": [
        ".filter spam action",
        ".filter spam response",
        ".automod spam action",
        ".automod spam response",
        ".contentfilter spam action",
        ".contentfilter spam response"
      ],
      "parentAliases": [
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "action",
          "type": "String",
          "required": true,
          "description": "Action to perform.",
          "choices": [
            "delete",
            "timeout",
            "kick",
            "ban",
            "delete_timeout",
            "delete_kick",
            "delete_ban"
          ],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".filter spam action timeout",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "filter spam disable",
      "category": "Safety",
      "serverOnly": true,
      "description": "Disable filter spam while preserving its settings.",
      "prefix": ".filter spam disable",
      "slash": "/filter spam disable",
      "aliases": [
        ".filter spam off"
      ],
      "searchAliases": [
        ".filter spam disable",
        ".filter spam off",
        ".automod spam disable",
        ".automod spam off",
        ".contentfilter spam disable",
        ".contentfilter spam off"
      ],
      "parentAliases": [
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".filter spam disable",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "filter spam enable",
      "category": "Safety",
      "serverOnly": true,
      "description": "Enable filter spam.",
      "prefix": ".filter spam enable",
      "slash": "/filter spam enable",
      "aliases": [
        ".filter spam on"
      ],
      "searchAliases": [
        ".filter spam enable",
        ".filter spam on",
        ".automod spam enable",
        ".automod spam on",
        ".contentfilter spam enable",
        ".contentfilter spam on"
      ],
      "parentAliases": [
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".filter spam enable",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "filter spam set",
      "category": "Safety",
      "serverOnly": true,
      "description": "Set the rolling message count and time window for spam detection.",
      "prefix": ".filter spam set <limit> <seconds>",
      "slash": "/filter spam set",
      "aliases": [],
      "searchAliases": [
        ".filter spam set",
        ".automod spam set",
        ".contentfilter spam set"
      ],
      "parentAliases": [
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "limit",
          "type": "Integer",
          "required": true,
          "description": "Maximum number allowed.",
          "choices": [],
          "minimum": 3,
          "maximum": 30
        },
        {
          "name": "seconds",
          "type": "Integer",
          "required": true,
          "description": "Duration in seconds.",
          "choices": [],
          "minimum": 3,
          "maximum": 60
        }
      ],
      "example": ".filter spam set 6 8",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "filter timeout",
      "category": "Safety",
      "serverOnly": true,
      "description": "Set the timeout length used by filter timeout actions.",
      "prefix": ".filter timeout <minutes>",
      "slash": "/filter timeout",
      "aliases": [
        ".filter duration"
      ],
      "searchAliases": [
        ".filter timeout",
        ".filter duration",
        ".automod timeout",
        ".automod duration",
        ".contentfilter timeout",
        ".contentfilter duration"
      ],
      "parentAliases": [
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "minutes",
          "type": "Integer",
          "required": true,
          "description": "Duration in minutes.",
          "choices": [],
          "minimum": 1,
          "maximum": 40320
        }
      ],
      "example": ".filter timeout 10",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Word filtering and spam protection have separate settings; enable the main filter after adding terms or enabling its spam guard.",
        "Terms are literal, case-insensitive matches with word boundaries. Administrators, the server owner and configured exemptions are excluded. No filter can guarantee that every abusive message is caught."
      ]
    },
    {
      "name": "giveaway",
      "category": "Progression",
      "serverOnly": true,
      "description": "Create and manage persistent button-entry giveaways.",
      "prefix": ".giveaway",
      "slash": "/giveaway overview",
      "aliases": [
        ".giveaways",
        ".gway",
        ".sorteo"
      ],
      "searchAliases": [
        ".giveaway",
        ".giveaways",
        ".gway",
        ".sorteo"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "giveaways"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".giveaway",
      "concurrency": null,
      "notes": [
        "Enable giveaways first with .features enable giveaways. Start/end/reroll require Manage Server.",
        "Start accepts 1 minute–30 days, 1–20 winners and a 1–200 character prize. Up to 10 active giveaways. Members enter through the button; use the giveaway ID shown by Skye for end/reroll.",
        "The bot selects winners but does not supply, verify or deliver prizes. The host is responsible for the prize and applicable giveaway rules."
      ]
    },
    {
      "name": "giveaway end",
      "category": "Progression",
      "serverOnly": true,
      "description": "End an active entry in giveaway.",
      "prefix": ".giveaway end <giveaway_id>",
      "slash": "/giveaway end",
      "aliases": [
        ".giveaway finish",
        ".giveaway stop"
      ],
      "searchAliases": [
        ".giveaway end",
        ".giveaway finish",
        ".giveaway stop",
        ".giveaways end",
        ".giveaways finish",
        ".giveaways stop",
        ".gway end",
        ".gway finish",
        ".gway stop",
        ".sorteo end",
        ".sorteo finish",
        ".sorteo stop"
      ],
      "parentAliases": [
        {
          "name": "giveaway",
          "aliases": [
            "giveaways",
            "gway",
            "sorteo"
          ]
        }
      ],
      "access": "Manage Server",
      "botPermissions": [],
      "features": [
        "giveaways"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "giveaway_id",
          "type": "String",
          "required": true,
          "description": "Value for giveaway id.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".giveaway end a1b2c3d4",
      "concurrency": null,
      "notes": [
        "Enable giveaways first with .features enable giveaways. Start/end/reroll require Manage Server.",
        "Start accepts 1 minute–30 days, 1–20 winners and a 1–200 character prize. Up to 10 active giveaways. Members enter through the button; use the giveaway ID shown by Skye for end/reroll.",
        "The bot selects winners but does not supply, verify or deliver prizes. The host is responsible for the prize and applicable giveaway rules."
      ]
    },
    {
      "name": "giveaway reroll",
      "category": "Progression",
      "serverOnly": true,
      "description": "Draw replacement winners from a completed giveaway.",
      "prefix": ".giveaway reroll <giveaway_id>",
      "slash": "/giveaway reroll",
      "aliases": [
        ".giveaway redraw"
      ],
      "searchAliases": [
        ".giveaway reroll",
        ".giveaway redraw",
        ".giveaways reroll",
        ".giveaways redraw",
        ".gway reroll",
        ".gway redraw",
        ".sorteo reroll",
        ".sorteo redraw"
      ],
      "parentAliases": [
        {
          "name": "giveaway",
          "aliases": [
            "giveaways",
            "gway",
            "sorteo"
          ]
        }
      ],
      "access": "Manage Server",
      "botPermissions": [],
      "features": [
        "giveaways"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "giveaway_id",
          "type": "String",
          "required": true,
          "description": "Value for giveaway id.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".giveaway reroll a1b2c3d4",
      "concurrency": null,
      "notes": [
        "Enable giveaways first with .features enable giveaways. Start/end/reroll require Manage Server.",
        "Start accepts 1 minute–30 days, 1–20 winners and a 1–200 character prize. Up to 10 active giveaways. Members enter through the button; use the giveaway ID shown by Skye for end/reroll.",
        "The bot selects winners but does not supply, verify or deliver prizes. The host is responsible for the prize and applicable giveaway rules."
      ]
    },
    {
      "name": "giveaway start",
      "category": "Progression",
      "serverOnly": true,
      "description": "Create and start a new giveaway entry.",
      "prefix": ".giveaway start <duration> <winners> <prize>",
      "slash": "/giveaway start",
      "aliases": [
        ".giveaway create",
        ".giveaway new"
      ],
      "searchAliases": [
        ".giveaway start",
        ".giveaway create",
        ".giveaway new",
        ".giveaways start",
        ".giveaways create",
        ".giveaways new",
        ".gway start",
        ".gway create",
        ".gway new",
        ".sorteo start",
        ".sorteo create",
        ".sorteo new"
      ],
      "parentAliases": [
        {
          "name": "giveaway",
          "aliases": [
            "giveaways",
            "gway",
            "sorteo"
          ]
        }
      ],
      "access": "Manage Server",
      "botPermissions": [
        "Embed Links",
        "Send Messages"
      ],
      "features": [
        "giveaways"
      ],
      "cooldown": "2 use(s) per 30s; scope: guild",
      "parameters": [
        {
          "name": "duration",
          "type": "String",
          "required": true,
          "description": "Duration such as 30m, 2h, or 7d.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "winners",
          "type": "Integer",
          "required": true,
          "description": "Number of winners.",
          "choices": [],
          "minimum": 1,
          "maximum": 20
        },
        {
          "name": "prize",
          "type": "String",
          "required": true,
          "description": "Giveaway prize.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".giveaway start 1d 1 Community prize",
      "concurrency": null,
      "notes": [
        "Enable giveaways first with .features enable giveaways. Start/end/reroll require Manage Server.",
        "Start accepts 1 minute–30 days, 1–20 winners and a 1–200 character prize. Up to 10 active giveaways. Members enter through the button; use the giveaway ID shown by Skye for end/reroll.",
        "The bot selects winners but does not supply, verify or deliver prizes. The host is responsible for the prize and applicable giveaway rules."
      ]
    },
    {
      "name": "guess",
      "category": "Minigames",
      "serverOnly": true,
      "description": "Start a number-guessing game or submit a guess from 1–100.",
      "prefix": ".guess [number]",
      "slash": "/fun guess",
      "aliases": [
        ".guessnumber",
        ".numguess"
      ],
      "searchAliases": [
        ".guess",
        ".guessnumber",
        ".numguess"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "games"
      ],
      "cooldown": "5 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "number",
          "type": "String",
          "required": false,
          "description": "Number to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".guess 50",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "handshake",
      "category": "Fun & actions",
      "serverOnly": false,
      "description": "Send a handshake reaction to another member.",
      "prefix": ".handshake <member>",
      "slash": "/fun handshake",
      "aliases": [
        ".shakehands"
      ],
      "searchAliases": [
        ".handshake",
        ".shakehands"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".handshake @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "hangman",
      "category": "Minigames",
      "serverOnly": true,
      "description": "Start or continue the current hangman game.",
      "prefix": ".hangman [guess]",
      "slash": "/games hangman",
      "aliases": [
        ".hm",
        ".ahorcado"
      ],
      "searchAliases": [
        ".hangman",
        ".hm",
        ".ahorcado"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "games"
      ],
      "cooldown": "2 use(s) per 8s; scope: member",
      "parameters": [
        {
          "name": "guess",
          "type": "String",
          "required": false,
          "description": "Your guess.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".hangman a",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "help",
      "category": "General",
      "serverOnly": false,
      "description": "Open skye's interactive category help menu.",
      "prefix": ".help [category]",
      "slash": "/bot help",
      "aliases": [
        ".h",
        ".commands",
        ".cmds",
        ".menu",
        ".ayuda"
      ],
      "searchAliases": [
        ".help",
        ".h",
        ".commands",
        ".cmds",
        ".menu",
        ".ayuda"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "category",
          "type": "String",
          "required": false,
          "description": "Discord category to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".help",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "hide",
      "category": "Channels",
      "serverOnly": true,
      "description": "Hide a channel from a hierarchy-safe role or member.",
      "prefix": ".hide [channel] [target]",
      "slash": "/channels hide",
      "aliases": [
        ".hidechannel",
        ".channelhide"
      ],
      "searchAliases": [
        ".hide",
        ".hidechannel",
        ".channelhide"
      ],
      "parentAliases": [],
      "access": "Manage Channels",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "target",
          "type": "Mentionable",
          "required": false,
          "description": "Member, role, message, or resource target.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".hide",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "highfive",
      "category": "Fun & actions",
      "serverOnly": false,
      "description": "Send a high-five reaction to another member.",
      "prefix": ".highfive <member>",
      "slash": "/fun highfive",
      "aliases": [
        ".high5"
      ],
      "searchAliases": [
        ".highfive",
        ".high5"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".highfive @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "hug",
      "category": "Fun & actions",
      "serverOnly": false,
      "description": "Send a hug reaction to another member.",
      "prefix": ".hug <member>",
      "slash": "/fun hug",
      "aliases": [
        ".embrace"
      ],
      "searchAliases": [
        ".hug",
        ".embrace"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".hug @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "humans",
      "category": "Member Management",
      "serverOnly": true,
      "description": "Count cached human members and show a bounded sample.",
      "prefix": ".humans",
      "slash": "/members humans",
      "aliases": [
        ".humancount",
        ".peoplecount"
      ],
      "searchAliases": [
        ".humans",
        ".humancount",
        ".peoplecount"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: guild",
      "parameters": [],
      "example": ".humans",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "invite",
      "category": "Support",
      "serverOnly": false,
      "description": "Create a safe OAuth invite link for skye.",
      "prefix": ".invite",
      "slash": "/bot invite",
      "aliases": [
        ".inv",
        ".addbot"
      ],
      "searchAliases": [
        ".invite",
        ".inv",
        ".addbot"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".invite",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "joined",
      "category": "Member Management",
      "serverOnly": true,
      "description": "Show when a member joined this server and how long they have been here.",
      "prefix": ".joined [member]",
      "slash": "/members joined",
      "aliases": [
        ".joinedat",
        ".joindate",
        ".serverage"
      ],
      "searchAliases": [
        ".joined",
        ".joinedat",
        ".joindate",
        ".serverage"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": false,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".joined",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "jumpto",
      "category": "Messages",
      "serverOnly": true,
      "description": "Create a safe jump link to an accessible message.",
      "prefix": ".jumpto [message]",
      "slash": "/messages jumpto",
      "aliases": [
        ".jump",
        ".messagelink",
        ".msglink"
      ],
      "searchAliases": [
        ".jumpto",
        ".jump",
        ".messagelink",
        ".msglink"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "4 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "String",
          "required": false,
          "description": "Message text, ID, or Discord message link.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".jumpto 1513500353658617926",
      "concurrency": null,
      "notes": [
        "Reply to a message or use its numeric ID/link. The message must be in the invocation channel; caller must be able to read its history. Cross-channel copying is blocked."
      ]
    },
    {
      "name": "kick",
      "category": "Safety",
      "serverOnly": true,
      "description": "Remove a member from the server with hierarchy checks.",
      "prefix": ".kick <member> [reason=No reason provided]",
      "slash": "/moderation kick",
      "aliases": [
        ".k",
        ".kickuser",
        ".boot",
        ".removeuser",
        ".expulsar"
      ],
      "searchAliases": [
        ".kick",
        ".k",
        ".kickuser",
        ".boot",
        ".removeuser",
        ".expulsar"
      ],
      "parentAliases": [],
      "access": "Kick Members",
      "botPermissions": [
        "Kick Members"
      ],
      "features": [],
      "cooldown": "5 use(s) per 30s; scope: guild",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "reason",
          "type": "String",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "No reason provided"
        }
      ],
      "example": ".kick @Member",
      "concurrency": "1 active invocation(s) per guild",
      "notes": [
        "Caller and bot role hierarchies apply. Moderation records and reasons may be visible to authorized server staff; moderation notifications/log messages may also be sent."
      ]
    },
    {
      "name": "kill",
      "category": "Fun & actions",
      "serverOnly": false,
      "description": "Send a harmless roleplay defeat message.",
      "prefix": ".kill <member>",
      "slash": "/fun kill",
      "aliases": [
        ".slay",
        ".murder",
        ".destroy"
      ],
      "searchAliases": [
        ".kill",
        ".slay",
        ".murder",
        ".destroy"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".kill @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "kiss",
      "category": "Fun & actions",
      "serverOnly": false,
      "description": "Send a kiss reaction to another member.",
      "prefix": ".kiss <member>",
      "slash": "/fun kiss",
      "aliases": [
        ".smooch"
      ],
      "searchAliases": [
        ".kiss",
        ".smooch"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".kiss @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "language",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "View or change the server help and error language.",
      "prefix": ".language [language]",
      "slash": "/bot language",
      "aliases": [
        ".lang",
        ".setlanguage",
        ".idioma"
      ],
      "searchAliases": [
        ".language",
        ".lang",
        ".setlanguage",
        ".idioma"
      ],
      "parentAliases": [],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "language",
          "type": "String",
          "required": false,
          "description": "Language name/code, or source:target.",
          "choices": [
            "en",
            "es"
          ],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".language",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "leaderboard",
      "category": "Progression",
      "serverOnly": true,
      "description": "Show economy or XP rankings for this server.",
      "prefix": ".leaderboard [amount=10]",
      "slash": "/leaderboard overview",
      "aliases": [
        ".lb"
      ],
      "searchAliases": [
        ".leaderboard",
        ".lb"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "economy"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 25,
          "default": 10
        }
      ],
      "example": ".leaderboard",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "leaderboard cash",
      "category": "Progression",
      "serverOnly": true,
      "description": "Show the server economy ranking.",
      "prefix": ".leaderboard cash [amount=10]",
      "slash": "/leaderboard cash",
      "aliases": [
        ".leaderboard money",
        ".leaderboard coins"
      ],
      "searchAliases": [
        ".leaderboard cash",
        ".leaderboard money",
        ".leaderboard coins",
        ".lb cash",
        ".lb money",
        ".lb coins"
      ],
      "parentAliases": [
        {
          "name": "leaderboard",
          "aliases": [
            "lb"
          ]
        }
      ],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "economy"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 25,
          "default": 10
        }
      ],
      "example": ".leaderboard cash",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "leaderboard xp",
      "category": "Progression",
      "serverOnly": true,
      "description": "Show the server XP ranking.",
      "prefix": ".leaderboard xp [amount=10]",
      "slash": "/leaderboard xp",
      "aliases": [
        ".leaderboard levels",
        ".leaderboard rank"
      ],
      "searchAliases": [
        ".leaderboard xp",
        ".leaderboard levels",
        ".leaderboard rank",
        ".lb xp",
        ".lb levels",
        ".lb rank"
      ],
      "parentAliases": [
        {
          "name": "leaderboard",
          "aliases": [
            "lb"
          ]
        }
      ],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "leveling"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 25,
          "default": 10
        }
      ],
      "example": ".leaderboard xp",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "levelconfig",
      "category": "Progression",
      "serverOnly": true,
      "description": "Configure the optional leveling system.",
      "prefix": ".levelconfig",
      "slash": "/levelconfig overview",
      "aliases": [
        ".xpconfig",
        ".levelsettings"
      ],
      "searchAliases": [
        ".levelconfig",
        ".xpconfig",
        ".levelsettings"
      ],
      "parentAliases": [],
      "access": "Administrator",
      "botPermissions": [],
      "features": [
        "leveling"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".levelconfig",
      "concurrency": null,
      "notes": [
        "Administrator-only settings. Enable leveling using .features enable leveling. XP, ranking and multiplier settings are per server; reset affects the selected member."
      ]
    },
    {
      "name": "levelconfig announcements",
      "category": "Progression",
      "serverOnly": true,
      "description": "Configure level-up announcements.",
      "prefix": ".levelconfig announcements <enabled> [channel]",
      "slash": "/levelconfig announcements",
      "aliases": [
        ".levelconfig announce"
      ],
      "searchAliases": [
        ".levelconfig announcements",
        ".levelconfig announce",
        ".xpconfig announcements",
        ".xpconfig announce",
        ".levelsettings announcements",
        ".levelsettings announce"
      ],
      "parentAliases": [
        {
          "name": "levelconfig",
          "aliases": [
            "xpconfig",
            "levelsettings"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [
        "leveling"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "enabled",
          "type": "Boolean",
          "required": true,
          "description": "Whether the setting is enabled.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".levelconfig announcements true",
      "concurrency": null,
      "notes": [
        "Administrator-only settings. Enable leveling using .features enable leveling. XP, ranking and multiplier settings are per server; reset affects the selected member."
      ]
    },
    {
      "name": "levelconfig cooldown",
      "category": "Progression",
      "serverOnly": true,
      "description": "Set the bounded cooldown.",
      "prefix": ".levelconfig cooldown <seconds>",
      "slash": "/levelconfig cooldown",
      "aliases": [],
      "searchAliases": [
        ".levelconfig cooldown",
        ".xpconfig cooldown",
        ".levelsettings cooldown"
      ],
      "parentAliases": [
        {
          "name": "levelconfig",
          "aliases": [
            "xpconfig",
            "levelsettings"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [
        "leveling"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "seconds",
          "type": "Integer",
          "required": true,
          "description": "Duration in seconds.",
          "choices": [],
          "minimum": 10,
          "maximum": 3600
        }
      ],
      "example": ".levelconfig cooldown 30",
      "concurrency": null,
      "notes": [
        "Administrator-only settings. Enable leveling using .features enable leveling. XP, ranking and multiplier settings are per server; reset affects the selected member."
      ]
    },
    {
      "name": "levelconfig reset",
      "category": "Progression",
      "serverOnly": true,
      "description": "Reset one member’s saved XP record in this server.",
      "prefix": ".levelconfig reset <member>",
      "slash": "/levelconfig reset",
      "aliases": [
        ".levelconfig resetxp"
      ],
      "searchAliases": [
        ".levelconfig reset",
        ".levelconfig resetxp",
        ".xpconfig reset",
        ".xpconfig resetxp",
        ".levelsettings reset",
        ".levelsettings resetxp"
      ],
      "parentAliases": [
        {
          "name": "levelconfig",
          "aliases": [
            "xpconfig",
            "levelsettings"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [
        "leveling"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".levelconfig reset @Member",
      "concurrency": null,
      "notes": [
        "Administrator-only settings. Enable leveling using .features enable leveling. XP, ranking and multiplier settings are per server; reset affects the selected member."
      ]
    },
    {
      "name": "levelconfig setxp",
      "category": "Progression",
      "serverOnly": true,
      "description": "Set a member's XP to a bounded value.",
      "prefix": ".levelconfig setxp <member> <xp>",
      "slash": "/levelconfig setxp",
      "aliases": [
        ".levelconfig givexp"
      ],
      "searchAliases": [
        ".levelconfig setxp",
        ".levelconfig givexp",
        ".xpconfig setxp",
        ".xpconfig givexp",
        ".levelsettings setxp",
        ".levelsettings givexp"
      ],
      "parentAliases": [
        {
          "name": "levelconfig",
          "aliases": [
            "xpconfig",
            "levelsettings"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [
        "leveling"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "xp",
          "type": "Integer",
          "required": true,
          "description": "XP amount.",
          "choices": [],
          "minimum": 0,
          "maximum": 1000000000
        }
      ],
      "example": ".levelconfig setxp @Member 100",
      "concurrency": null,
      "notes": [
        "Administrator-only settings. Enable leveling using .features enable leveling. XP, ranking and multiplier settings are per server; reset affects the selected member."
      ]
    },
    {
      "name": "levelconfig xp",
      "category": "Progression",
      "serverOnly": true,
      "description": "Configure the bounded XP award range.",
      "prefix": ".levelconfig xp <minimum> <maximum>",
      "slash": "/levelconfig xp",
      "aliases": [],
      "searchAliases": [
        ".levelconfig xp",
        ".xpconfig xp",
        ".levelsettings xp"
      ],
      "parentAliases": [
        {
          "name": "levelconfig",
          "aliases": [
            "xpconfig",
            "levelsettings"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [
        "leveling"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "minimum",
          "type": "Integer",
          "required": true,
          "description": "Minimum value.",
          "choices": [],
          "minimum": 1,
          "maximum": 1000
        },
        {
          "name": "maximum",
          "type": "Integer",
          "required": true,
          "description": "Maximum value.",
          "choices": [],
          "minimum": 1,
          "maximum": 1000
        }
      ],
      "example": ".levelconfig xp 10 20",
      "concurrency": null,
      "notes": [
        "Administrator-only settings. Enable leveling using .features enable leveling. XP, ranking and multiplier settings are per server; reset affects the selected member."
      ]
    },
    {
      "name": "levels",
      "category": "Progression",
      "serverOnly": true,
      "description": "Show the server XP leaderboard.",
      "prefix": ".levels",
      "slash": "/levelconfig levels",
      "aliases": [
        ".levelboard",
        ".xpleaderboard",
        ".xpboard",
        ".ranktop",
        ".topxp"
      ],
      "searchAliases": [
        ".levels",
        ".levelboard",
        ".xpleaderboard",
        ".xpboard",
        ".ranktop",
        ".topxp"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "leveling"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".levels",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "listall",
      "category": "General",
      "serverOnly": false,
      "description": "Browse every public command in category order with descriptions.",
      "prefix": ".listall",
      "slash": "/bot listall",
      "aliases": [
        ".allcommands",
        ".commandlist",
        ".listcommands"
      ],
      "searchAliases": [
        ".listall",
        ".allcommands",
        ".commandlist",
        ".listcommands"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".listall",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "lock",
      "category": "Channels",
      "serverOnly": true,
      "description": "Deny default-role messaging while saving the previous channel state.",
      "prefix": ".lock [reason=No reason provided]",
      "slash": "/moderation lock",
      "aliases": [
        ".lockdown",
        ".lockchannel",
        ".channellock",
        ".closechannel",
        ".cerrar"
      ],
      "searchAliases": [
        ".lock",
        ".lockdown",
        ".lockchannel",
        ".channellock",
        ".closechannel",
        ".cerrar"
      ],
      "parentAliases": [],
      "access": "Manage Channels",
      "botPermissions": [
        "Manage Channels"
      ],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: guild",
      "parameters": [
        {
          "name": "reason",
          "type": "String",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "No reason provided"
        }
      ],
      "example": ".lock",
      "concurrency": null,
      "notes": [
        "Locks the current text channel’s default messaging overwrite and stores the previous value. No timed auto-unlock argument exists; use .unlock to restore it."
      ]
    },
    {
      "name": "logs",
      "category": "Safety",
      "serverOnly": true,
      "description": "Configure private, mention-safe server event logging.",
      "prefix": ".logs",
      "slash": "/logs overview",
      "aliases": [
        ".logging",
        ".logconfig"
      ],
      "searchAliases": [
        ".logs",
        ".logging",
        ".logconfig"
      ],
      "parentAliases": [],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".logs",
      "concurrency": null,
      "notes": [
        "Off by default. Choose a staff-only destination and enable only the event categories you need.",
        "Message edit/delete events contain metadata, not copied content; command messages are excluded. Ignored-channel settings apply to events with a source channel. Discord messages in the log channel remain until deleted there."
      ]
    },
    {
      "name": "logs bots",
      "category": "Safety",
      "serverOnly": true,
      "description": "Include or exclude bot-authored events where supported.",
      "prefix": ".logs bots <state>",
      "slash": "/logs bots",
      "aliases": [
        ".logs includebots"
      ],
      "searchAliases": [
        ".logs bots",
        ".logs includebots",
        ".logging bots",
        ".logging includebots",
        ".logconfig bots",
        ".logconfig includebots"
      ],
      "parentAliases": [
        {
          "name": "logs",
          "aliases": [
            "logging",
            "logconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "state",
          "type": "String",
          "required": true,
          "description": "Enable or disable the setting.",
          "choices": [
            "on",
            "off"
          ],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".logs bots on",
      "concurrency": null,
      "notes": [
        "Off by default. Choose a staff-only destination and enable only the event categories you need.",
        "Message edit/delete events contain metadata, not copied content; command messages are excluded. Ignored-channel settings apply to events with a source channel. Discord messages in the log channel remain until deleted there."
      ]
    },
    {
      "name": "logs disable",
      "category": "Safety",
      "serverOnly": true,
      "description": "Disable logs while preserving its settings.",
      "prefix": ".logs disable",
      "slash": "/logs disable",
      "aliases": [
        ".logs off"
      ],
      "searchAliases": [
        ".logs disable",
        ".logs off",
        ".logging disable",
        ".logging off",
        ".logconfig disable",
        ".logconfig off"
      ],
      "parentAliases": [
        {
          "name": "logs",
          "aliases": [
            "logging",
            "logconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".logs disable",
      "concurrency": null,
      "notes": [
        "Off by default. Choose a staff-only destination and enable only the event categories you need.",
        "Message edit/delete events contain metadata, not copied content; command messages are excluded. Ignored-channel settings apply to events with a source channel. Discord messages in the log channel remain until deleted there."
      ]
    },
    {
      "name": "logs event",
      "category": "Safety",
      "serverOnly": true,
      "description": "Enable or disable one event category.",
      "prefix": ".logs event <event_name> <state>",
      "slash": "/logs event",
      "aliases": [
        ".logs events",
        ".logs toggle"
      ],
      "searchAliases": [
        ".logs event",
        ".logs events",
        ".logs toggle",
        ".logging event",
        ".logging events",
        ".logging toggle",
        ".logconfig event",
        ".logconfig events",
        ".logconfig toggle"
      ],
      "parentAliases": [
        {
          "name": "logs",
          "aliases": [
            "logging",
            "logconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "event_name",
          "type": "String",
          "required": true,
          "description": "Event category to configure.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "state",
          "type": "String",
          "required": true,
          "description": "Enable or disable the setting.",
          "choices": [
            "on",
            "off"
          ],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".logs event messages on",
      "concurrency": null,
      "notes": [
        "Off by default. Choose a staff-only destination and enable only the event categories you need.",
        "Message edit/delete events contain metadata, not copied content; command messages are excluded. Ignored-channel settings apply to events with a source channel. Discord messages in the log channel remain until deleted there."
      ]
    },
    {
      "name": "logs ignore",
      "category": "Safety",
      "serverOnly": true,
      "description": "List channels excluded from event logging.",
      "prefix": ".logs ignore",
      "slash": "/logs ignore overview",
      "aliases": [
        ".logs ignored"
      ],
      "searchAliases": [
        ".logs ignore",
        ".logs ignored",
        ".logging ignore",
        ".logging ignored",
        ".logconfig ignore",
        ".logconfig ignored"
      ],
      "parentAliases": [
        {
          "name": "logs",
          "aliases": [
            "logging",
            "logconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".logs ignore",
      "concurrency": null,
      "notes": [
        "Off by default. Choose a staff-only destination and enable only the event categories you need.",
        "Message edit/delete events contain metadata, not copied content; command messages are excluded. Ignored-channel settings apply to events with a source channel. Discord messages in the log channel remain until deleted there."
      ]
    },
    {
      "name": "logs ignore add",
      "category": "Safety",
      "serverOnly": true,
      "description": "Exclude a channel from source-channel event logging.",
      "prefix": ".logs ignore add <channel>",
      "slash": "/logs ignore add",
      "aliases": [],
      "searchAliases": [
        ".logs ignore add",
        ".logs ignored add",
        ".logging ignore add",
        ".logging ignored add",
        ".logconfig ignore add",
        ".logconfig ignored add"
      ],
      "parentAliases": [
        {
          "name": "logs ignore",
          "aliases": [
            "ignored"
          ]
        },
        {
          "name": "logs",
          "aliases": [
            "logging",
            "logconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": true,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".logs ignore add #general",
      "concurrency": null,
      "notes": [
        "Off by default. Choose a staff-only destination and enable only the event categories you need.",
        "Message edit/delete events contain metadata, not copied content; command messages are excluded. Ignored-channel settings apply to events with a source channel. Discord messages in the log channel remain until deleted there."
      ]
    },
    {
      "name": "logs ignore remove",
      "category": "Safety",
      "serverOnly": true,
      "description": "Remove a channel from the logging ignore list.",
      "prefix": ".logs ignore remove <channel>",
      "slash": "/logs ignore remove",
      "aliases": [
        ".logs ignore delete"
      ],
      "searchAliases": [
        ".logs ignore remove",
        ".logs ignore delete",
        ".logs ignored remove",
        ".logs ignored delete",
        ".logging ignore remove",
        ".logging ignore delete",
        ".logging ignored remove",
        ".logging ignored delete",
        ".logconfig ignore remove",
        ".logconfig ignore delete",
        ".logconfig ignored remove",
        ".logconfig ignored delete"
      ],
      "parentAliases": [
        {
          "name": "logs ignore",
          "aliases": [
            "ignored"
          ]
        },
        {
          "name": "logs",
          "aliases": [
            "logging",
            "logconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": true,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".logs ignore remove #general",
      "concurrency": null,
      "notes": [
        "Off by default. Choose a staff-only destination and enable only the event categories you need.",
        "Message edit/delete events contain metadata, not copied content; command messages are excluded. Ignored-channel settings apply to events with a source channel. Discord messages in the log channel remain until deleted there."
      ]
    },
    {
      "name": "logs setup",
      "category": "Safety",
      "serverOnly": true,
      "description": "Configure and enable logs.",
      "prefix": ".logs setup <channel>",
      "slash": "/logs setup",
      "aliases": [
        ".logs enable",
        ".logs on"
      ],
      "searchAliases": [
        ".logs setup",
        ".logs enable",
        ".logs on",
        ".logging setup",
        ".logging enable",
        ".logging on",
        ".logconfig setup",
        ".logconfig enable",
        ".logconfig on"
      ],
      "parentAliases": [
        {
          "name": "logs",
          "aliases": [
            "logging",
            "logconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [
        "Embed Links",
        "Send Messages"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": true,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".logs setup #staff-log",
      "concurrency": null,
      "notes": [
        "Off by default. Choose a staff-only destination and enable only the event categories you need.",
        "Message edit/delete events contain metadata, not copied content; command messages are excluded. Ignored-channel settings apply to events with a source channel. Discord messages in the log channel remain until deleted there."
      ]
    },
    {
      "name": "membercount",
      "category": "Member Management",
      "serverOnly": true,
      "description": "Show reported, cached, human, and bot member totals.",
      "prefix": ".membercount",
      "slash": "/members membercount",
      "aliases": [
        ".memberscount",
        ".servermembers"
      ],
      "searchAliases": [
        ".membercount",
        ".memberscount",
        ".servermembers"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: guild",
      "parameters": [],
      "example": ".membercount",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "memberhistory",
      "category": "Member Management",
      "serverOnly": true,
      "description": "Show bounded server-local membership history; restricted to moderators.",
      "prefix": ".memberhistory <target>",
      "slash": "/members memberhistory",
      "aliases": [
        ".userhistory",
        ".memberlog"
      ],
      "searchAliases": [
        ".memberhistory",
        ".userhistory",
        ".memberlog"
      ],
      "parentAliases": [],
      "access": "Moderate Members",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "target",
          "type": "String",
          "required": true,
          "description": "Member, role, message, or resource target.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".memberhistory @Member",
      "concurrency": "1 active invocation(s) per member",
      "notes": [
        "Moderator-only history of joins, departures, nickname and role changes. Up to 25 events per user and 1,000 user histories per server; not a complete audit trail."
      ]
    },
    {
      "name": "messageinfo",
      "category": "Messages",
      "serverOnly": true,
      "description": "Show metadata for an accessible message without exposing private channels.",
      "prefix": ".messageinfo [message]",
      "slash": "/messages messageinfo",
      "aliases": [
        ".msginfo",
        ".messageid"
      ],
      "searchAliases": [
        ".messageinfo",
        ".msginfo",
        ".messageid"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 12s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "String",
          "required": false,
          "description": "Message text, ID, or Discord message link.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".messageinfo 1513500353658617926",
      "concurrency": null,
      "notes": [
        "Reply to a message or use its numeric ID/link. The message must be in the invocation channel; caller must be able to read its history. Cross-channel copying is blocked."
      ]
    },
    {
      "name": "messagesearch",
      "category": "Messages",
      "serverOnly": true,
      "description": "Search a bounded window of the current channel's visible message history.",
      "prefix": ".messagesearch <query>",
      "slash": "/messages messagesearch",
      "aliases": [
        ".searchmessages",
        ".msgsearch"
      ],
      "searchAliases": [
        ".messagesearch",
        ".searchmessages",
        ".msgsearch"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use(s) per 20s; scope: member",
      "parameters": [
        {
          "name": "query",
          "type": "String",
          "required": true,
          "description": "Plain-text search query.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".messagesearch meeting",
      "concurrency": "1 active invocation(s) per channel",
      "notes": [
        "Query: 2–100 plain-text characters. Searches at most 500 recent messages and returns at most 10 matches. Requires caller and bot history access."
      ]
    },
    {
      "name": "mines",
      "category": "Minigames",
      "serverOnly": true,
      "description": "Play a four-mine board using an escrowed economy wager.",
      "prefix": ".mines <wager>",
      "slash": "/economy mines",
      "aliases": [
        ".mine",
        ".minesweeper"
      ],
      "searchAliases": [
        ".mines",
        ".mine",
        ".minesweeper"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "economy"
      ],
      "cooldown": "1 use(s) per 8s; scope: member",
      "parameters": [
        {
          "name": "wager",
          "type": "String",
          "required": true,
          "description": "Number of coins to wager.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".mines 10",
      "concurrency": null,
      "notes": [
        "Uses server economy currency only. A valid wager and sufficient balance are required. Interactive controls are limited to the relevant player(s); there is no real-money payout."
      ]
    },
    {
      "name": "modlog",
      "category": "Safety",
      "serverOnly": true,
      "description": "Set or inspect the moderation case-log channel.",
      "prefix": ".modlog [channel]",
      "slash": "/moderation modlog",
      "aliases": [
        ".setmodlog",
        ".mlog"
      ],
      "searchAliases": [
        ".modlog",
        ".setmodlog",
        ".mlog"
      ],
      "parentAliases": [],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".modlog",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "move",
      "category": "Channels",
      "serverOnly": true,
      "description": "Move a channel to a category or bounded position.",
      "prefix": ".move <channel> [destination] [position]",
      "slash": "/channels move",
      "aliases": [
        ".movechannel",
        ".channelmove"
      ],
      "searchAliases": [
        ".move",
        ".movechannel",
        ".channelmove"
      ],
      "parentAliases": [],
      "access": "Manage Channels",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": true,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "destination",
          "type": "Channel",
          "required": false,
          "description": "Value for destination.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "position",
          "type": "String",
          "required": false,
          "description": "Channel position.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".move #general",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "nick",
      "category": "Member Management",
      "serverOnly": true,
      "description": "Set or reset a member's nickname with hierarchy checks.",
      "prefix": ".nick <member> [nickname]",
      "slash": "/moderation nick",
      "aliases": [
        ".nickname",
        ".setnick",
        ".renick"
      ],
      "searchAliases": [
        ".nick",
        ".nickname",
        ".setnick",
        ".renick"
      ],
      "parentAliases": [],
      "access": "Manage Nicknames",
      "botPermissions": [
        "Manage Nicknames"
      ],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "nickname",
          "type": "String",
          "required": false,
          "description": "Nickname, or leave empty to reset.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".nick @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "onlinemembers",
      "category": "Member Management",
      "serverOnly": true,
      "description": "Count cached online members when presence access is enabled.",
      "prefix": ".onlinemembers",
      "slash": "/members onlinemembers",
      "aliases": [
        ".online",
        ".onlinecount"
      ],
      "searchAliases": [
        ".onlinemembers",
        ".online",
        ".onlinecount"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: guild",
      "parameters": [],
      "example": ".onlinemembers",
      "concurrency": null,
      "notes": [
        "Presence totals use cached Discord presence data and require the operator to enable the privileged presence intent; unavailable data is not proof that a member is offline."
      ]
    },
    {
      "name": "pat",
      "category": "Fun & actions",
      "serverOnly": false,
      "description": "Send a head-pat reaction to another member.",
      "prefix": ".pat <member>",
      "slash": "/fun pat",
      "aliases": [
        ".headpat"
      ],
      "searchAliases": [
        ".pat",
        ".headpat"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".pat @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "pay",
      "category": "Progression",
      "serverOnly": true,
      "description": "Transfer economy currency atomically to another human member.",
      "prefix": ".pay <member> <amount>",
      "slash": "/economy pay",
      "aliases": [
        ".transfer",
        ".givecash",
        ".givemoney",
        ".givecoins",
        ".paycoins",
        ".pagar"
      ],
      "searchAliases": [
        ".pay",
        ".transfer",
        ".givecash",
        ".givemoney",
        ".givecoins",
        ".paycoins",
        ".pagar"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "economy"
      ],
      "cooldown": "3 use(s) per 20s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "amount",
          "type": "Integer",
          "required": true,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 1000000000
        }
      ],
      "example": ".pay @Member 10",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "permissions",
      "category": "Channels",
      "serverOnly": true,
      "description": "Show a member's effective permissions in a visible channel.",
      "prefix": ".permissions [member] [channel]",
      "slash": "/members permissions",
      "aliases": [
        ".perms",
        ".memberperms"
      ],
      "searchAliases": [
        ".permissions",
        ".perms",
        ".memberperms"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": false,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".permissions",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "pi",
      "category": "Utilities",
      "serverOnly": false,
      "description": "Display pi to a bounded number of decimal places.",
      "prefix": ".pi [digits=50]",
      "slash": "/fun pi",
      "aliases": [
        ".digits",
        ".pival"
      ],
      "searchAliases": [
        ".pi",
        ".digits",
        ".pival"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: user",
      "parameters": [
        {
          "name": "digits",
          "type": "Integer",
          "required": false,
          "description": "Value for digits.",
          "choices": [],
          "minimum": 1,
          "maximum": 1000,
          "default": 50
        }
      ],
      "example": ".pi",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "pin",
      "category": "Messages",
      "serverOnly": true,
      "description": "Pin an accessible message; restricted to message managers.",
      "prefix": ".pin [message]",
      "slash": "/messages pin",
      "aliases": [],
      "searchAliases": [
        ".pin"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "String",
          "required": false,
          "description": "Message text, ID, or Discord message link.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".pin 1513500353658617926",
      "concurrency": "1 active invocation(s) per channel",
      "notes": [
        "Reply to a message or use its numeric ID/link. The message must be in the invocation channel; caller must be able to read its history. Cross-channel copying is blocked."
      ]
    },
    {
      "name": "ping",
      "category": "Utilities",
      "serverOnly": false,
      "description": "Show current Discord websocket latency.",
      "prefix": ".ping",
      "slash": "/bot ping",
      "aliases": [
        ".latency",
        ".pong",
        ".pang",
        ".speed",
        ".latencia"
      ],
      "searchAliases": [
        ".ping",
        ".latency",
        ".pong",
        ".pang",
        ".speed",
        ".latencia"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".ping",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "pins",
      "category": "Messages",
      "serverOnly": true,
      "description": "List up to 20 pinned messages from the invocation channel.",
      "prefix": ".pins [channel]",
      "slash": "/messages pins",
      "aliases": [
        ".pinned",
        ".pinnedmessages"
      ],
      "searchAliases": [
        ".pins",
        ".pinned",
        ".pinnedmessages"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [
        "Read Message History"
      ],
      "features": [],
      "cooldown": "2 use(s) per 20s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".pins",
      "concurrency": "1 active invocation(s) per channel",
      "notes": [
        "Read Message History is required. Run this in the source channel; cross-channel pin summaries are blocked."
      ]
    },
    {
      "name": "poke",
      "category": "Fun & actions",
      "serverOnly": false,
      "description": "Send a poke reaction to another member.",
      "prefix": ".poke <member>",
      "slash": "/fun poke",
      "aliases": [
        ".boop"
      ],
      "searchAliases": [
        ".poke",
        ".boop"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".poke @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "poll",
      "category": "Messages",
      "serverOnly": true,
      "description": "Create a reaction poll with two to ten choices.",
      "prefix": ".poll <content>",
      "slash": "/games poll",
      "aliases": [
        ".vote",
        ".survey",
        ".encuesta"
      ],
      "searchAliases": [
        ".poll",
        ".vote",
        ".survey",
        ".encuesta"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [
        "Add Reactions",
        "Embed Links",
        "Send Messages"
      ],
      "features": [],
      "cooldown": "2 use(s) per 30s; scope: member",
      "parameters": [
        {
          "name": "content",
          "type": "String",
          "required": true,
          "description": "Text content.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".poll Best snack? | Apples | Popcorn",
      "concurrency": "1 active invocation(s) per channel",
      "notes": [
        "Use a question followed by 2–10 choices separated by |. Votes use reactions and are not anonymous."
      ]
    },
    {
      "name": "prefix",
      "category": "Settings",
      "serverOnly": true,
      "description": "Change this server's command prefix.",
      "prefix": ".prefix <prefix>",
      "slash": "/bot prefix",
      "aliases": [
        ".setprefix",
        ".changeprefix"
      ],
      "searchAliases": [
        ".prefix",
        ".setprefix",
        ".changeprefix"
      ],
      "parentAliases": [],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "prefix",
          "type": "String",
          "required": true,
          "description": "New command prefix (1–5 characters).",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".prefix !",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "punch",
      "category": "Fun & actions",
      "serverOnly": false,
      "description": "Send a playful punch reaction to another member.",
      "prefix": ".punch <member>",
      "slash": "/fun punch",
      "aliases": [
        ".sock"
      ],
      "searchAliases": [
        ".punch",
        ".sock"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".punch @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "purge",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably delete a bounded number of recent channel messages.",
      "prefix": ".purge [amount=10]",
      "slash": "/cleanup purge",
      "aliases": [
        ".clear",
        ".clean",
        ".prune",
        ".limpiar"
      ],
      "searchAliases": [
        ".purge",
        ".clear",
        ".clean",
        ".prune",
        ".limpiar"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 500,
          "default": 10
        }
      ],
      "example": ".purge",
      "concurrency": "1 active invocation(s) per channel",
      "notes": [
        "Requires effective Manage Messages; bot also needs Read Message History. Confirm within 30 seconds. All purge variants share a server-wide budget of 500 message deletions per minute; history scans are bounded."
      ]
    },
    {
      "name": "purgeafter",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Delete at most the requested messages after a same-channel boundary.",
      "prefix": ".purgeafter <message> [amount=50]",
      "slash": "/cleanup purgeafter",
      "aliases": [],
      "searchAliases": [
        ".purgeafter"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use(s) per 15s; scope: channel",
      "parameters": [
        {
          "name": "message",
          "type": "String",
          "required": true,
          "description": "Message text, ID, or Discord message link.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 200,
          "default": 50
        }
      ],
      "example": ".purgeafter 1513500353658617926 20",
      "concurrency": "1 active invocation(s) per channel",
      "notes": [
        "Requires effective Manage Messages; bot also needs Read Message History. Confirm within 30 seconds. All purge variants share a server-wide budget of 500 message deletions per minute; history scans are bounded."
      ]
    },
    {
      "name": "purgebefore",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Delete at most the requested messages before a same-channel boundary.",
      "prefix": ".purgebefore <message> [amount=50]",
      "slash": "/cleanup purgebefore",
      "aliases": [],
      "searchAliases": [
        ".purgebefore"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use(s) per 15s; scope: channel",
      "parameters": [
        {
          "name": "message",
          "type": "String",
          "required": true,
          "description": "Message text, ID, or Discord message link.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 200,
          "default": 50
        }
      ],
      "example": ".purgebefore 1513500353658617926 20",
      "concurrency": "1 active invocation(s) per channel",
      "notes": [
        "Requires effective Manage Messages; bot also needs Read Message History. Confirm within 30 seconds. All purge variants share a server-wide budget of 500 message deletions per minute; history scans are bounded."
      ]
    },
    {
      "name": "purgebots",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably remove a bounded number of bot-authored messages.",
      "prefix": ".purgebots [amount=20]",
      "slash": "/cleanup purgebots",
      "aliases": [],
      "searchAliases": [
        ".purgebots"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use(s) per 12s; scope: channel",
      "parameters": [
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 200,
          "default": 20
        }
      ],
      "example": ".purgebots",
      "concurrency": "1 active invocation(s) per channel",
      "notes": [
        "Requires effective Manage Messages; bot also needs Read Message History. Confirm within 30 seconds. All purge variants share a server-wide budget of 500 message deletions per minute; history scans are bounded."
      ]
    },
    {
      "name": "purgecommands",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably remove bounded prefix or mention command invocations.",
      "prefix": ".purgecommands [amount=20]",
      "slash": "/cleanup purgecommands",
      "aliases": [],
      "searchAliases": [
        ".purgecommands"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use(s) per 12s; scope: channel",
      "parameters": [
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 200,
          "default": 20
        }
      ],
      "example": ".purgecommands",
      "concurrency": "1 active invocation(s) per channel",
      "notes": [
        "Requires effective Manage Messages; bot also needs Read Message History. Confirm within 30 seconds. All purge variants share a server-wide budget of 500 message deletions per minute; history scans are bounded."
      ]
    },
    {
      "name": "purgeembeds",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably remove bounded messages containing embeds.",
      "prefix": ".purgeembeds [amount=20]",
      "slash": "/cleanup purgeembeds",
      "aliases": [],
      "searchAliases": [
        ".purgeembeds"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use(s) per 12s; scope: channel",
      "parameters": [
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 200,
          "default": 20
        }
      ],
      "example": ".purgeembeds",
      "concurrency": "1 active invocation(s) per channel",
      "notes": [
        "Requires effective Manage Messages; bot also needs Read Message History. Confirm within 30 seconds. All purge variants share a server-wide budget of 500 message deletions per minute; history scans are bounded."
      ]
    },
    {
      "name": "purgefiles",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably remove bounded non-image file attachments.",
      "prefix": ".purgefiles [amount=20]",
      "slash": "/cleanup purgefiles",
      "aliases": [
        ".purgeattachments"
      ],
      "searchAliases": [
        ".purgefiles",
        ".purgeattachments"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use(s) per 12s; scope: channel",
      "parameters": [
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 200,
          "default": 20
        }
      ],
      "example": ".purgefiles",
      "concurrency": "1 active invocation(s) per channel",
      "notes": [
        "Requires effective Manage Messages; bot also needs Read Message History. Confirm within 30 seconds. All purge variants share a server-wide budget of 500 message deletions per minute; history scans are bounded."
      ]
    },
    {
      "name": "purgefilter",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably delete bounded matching messages using safe user, content, or metadata filters.",
      "prefix": ".purgefilter",
      "slash": "/purgefilter overview",
      "aliases": [
        ".pfilter",
        ".filteredpurge"
      ],
      "searchAliases": [
        ".purgefilter",
        ".pfilter",
        ".filteredpurge"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use(s) per 12s; scope: channel",
      "parameters": [],
      "example": ".purgefilter",
      "concurrency": "1 active invocation(s) per channel",
      "notes": [
        "Requires effective Manage Messages; bot also needs Read Message History. Confirm within 30 seconds. All purge variants share a server-wide budget of 500 message deletions per minute; history scans are bounded."
      ]
    },
    {
      "name": "purgefilter attachments",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably delete bounded recent messages containing attached files.",
      "prefix": ".purgefilter attachments [amount=20]",
      "slash": "/purgefilter attachments",
      "aliases": [
        ".purgefilter files"
      ],
      "searchAliases": [
        ".purgefilter attachments",
        ".purgefilter files",
        ".pfilter attachments",
        ".pfilter files",
        ".filteredpurge attachments",
        ".filteredpurge files"
      ],
      "parentAliases": [
        {
          "name": "purgefilter",
          "aliases": [
            "pfilter",
            "filteredpurge"
          ]
        }
      ],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 200,
          "default": 20
        }
      ],
      "example": ".purgefilter attachments",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "purgefilter bots",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably delete bounded recent messages sent by bots.",
      "prefix": ".purgefilter bots [amount=20]",
      "slash": "/purgefilter bots",
      "aliases": [],
      "searchAliases": [
        ".purgefilter bots",
        ".pfilter bots",
        ".filteredpurge bots"
      ],
      "parentAliases": [
        {
          "name": "purgefilter",
          "aliases": [
            "pfilter",
            "filteredpurge"
          ]
        }
      ],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 200,
          "default": 20
        }
      ],
      "example": ".purgefilter bots",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "purgefilter contains",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably delete recent messages containing a validated text fragment.",
      "prefix": ".purgefilter contains <amount> <text>",
      "slash": "/purgefilter contains",
      "aliases": [
        ".purgefilter text"
      ],
      "searchAliases": [
        ".purgefilter contains",
        ".purgefilter text",
        ".pfilter contains",
        ".pfilter text",
        ".filteredpurge contains",
        ".filteredpurge text"
      ],
      "parentAliases": [
        {
          "name": "purgefilter",
          "aliases": [
            "pfilter",
            "filteredpurge"
          ]
        }
      ],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "amount",
          "type": "Integer",
          "required": true,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 200
        },
        {
          "name": "text",
          "type": "String",
          "required": true,
          "description": "Text to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".purgefilter contains 10 Hello there",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "purgefilter humans",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably delete bounded recent messages sent by human accounts.",
      "prefix": ".purgefilter humans [amount=20]",
      "slash": "/purgefilter humans",
      "aliases": [],
      "searchAliases": [
        ".purgefilter humans",
        ".pfilter humans",
        ".filteredpurge humans"
      ],
      "parentAliases": [
        {
          "name": "purgefilter",
          "aliases": [
            "pfilter",
            "filteredpurge"
          ]
        }
      ],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 200,
          "default": 20
        }
      ],
      "example": ".purgefilter humans",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "purgefilter links",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably delete bounded recent messages containing HTTP or HTTPS links.",
      "prefix": ".purgefilter links [amount=20]",
      "slash": "/purgefilter links",
      "aliases": [],
      "searchAliases": [
        ".purgefilter links",
        ".pfilter links",
        ".filteredpurge links"
      ],
      "parentAliases": [
        {
          "name": "purgefilter",
          "aliases": [
            "pfilter",
            "filteredpurge"
          ]
        }
      ],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 200,
          "default": 20
        }
      ],
      "example": ".purgefilter links",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "purgefilter reactions",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably delete bounded recent messages that have reactions.",
      "prefix": ".purgefilter reactions [amount=20]",
      "slash": "/purgefilter reactions",
      "aliases": [],
      "searchAliases": [
        ".purgefilter reactions",
        ".pfilter reactions",
        ".filteredpurge reactions"
      ],
      "parentAliases": [
        {
          "name": "purgefilter",
          "aliases": [
            "pfilter",
            "filteredpurge"
          ]
        }
      ],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 200,
          "default": 20
        }
      ],
      "example": ".purgefilter reactions",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "purgefilter user",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably delete bounded recent messages from one current member.",
      "prefix": ".purgefilter user <member> [amount=20]",
      "slash": "/purgefilter user",
      "aliases": [
        ".purgefilter member"
      ],
      "searchAliases": [
        ".purgefilter user",
        ".purgefilter member",
        ".pfilter user",
        ".pfilter member",
        ".filteredpurge user",
        ".filteredpurge member"
      ],
      "parentAliases": [
        {
          "name": "purgefilter",
          "aliases": [
            "pfilter",
            "filteredpurge"
          ]
        }
      ],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 200,
          "default": 20
        }
      ],
      "example": ".purgefilter user @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "purgeimages",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably remove bounded image attachments and image embeds.",
      "prefix": ".purgeimages [amount=20]",
      "slash": "/cleanup purgeimages",
      "aliases": [],
      "searchAliases": [
        ".purgeimages"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use(s) per 12s; scope: channel",
      "parameters": [
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 200,
          "default": 20
        }
      ],
      "example": ".purgeimages",
      "concurrency": "1 active invocation(s) per channel",
      "notes": [
        "Requires effective Manage Messages; bot also needs Read Message History. Confirm within 30 seconds. All purge variants share a server-wide budget of 500 message deletions per minute; history scans are bounded."
      ]
    },
    {
      "name": "purgeinvites",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably remove bounded messages containing Discord invites.",
      "prefix": ".purgeinvites [amount=20]",
      "slash": "/cleanup purgeinvites",
      "aliases": [],
      "searchAliases": [
        ".purgeinvites"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use(s) per 12s; scope: channel",
      "parameters": [
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 200,
          "default": 20
        }
      ],
      "example": ".purgeinvites",
      "concurrency": "1 active invocation(s) per channel",
      "notes": [
        "Requires effective Manage Messages; bot also needs Read Message History. Confirm within 30 seconds. All purge variants share a server-wide budget of 500 message deletions per minute; history scans are bounded."
      ]
    },
    {
      "name": "purgelinks",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably remove bounded messages containing HTTP links.",
      "prefix": ".purgelinks [amount=20]",
      "slash": "/cleanup purgelinks",
      "aliases": [],
      "searchAliases": [
        ".purgelinks"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use(s) per 12s; scope: channel",
      "parameters": [
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 200,
          "default": 20
        }
      ],
      "example": ".purgelinks",
      "concurrency": "1 active invocation(s) per channel",
      "notes": [
        "Requires effective Manage Messages; bot also needs Read Message History. Confirm within 30 seconds. All purge variants share a server-wide budget of 500 message deletions per minute; history scans are bounded."
      ]
    },
    {
      "name": "purgeusers",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably remove a bounded number of human-authored messages.",
      "prefix": ".purgeusers [amount=20]",
      "slash": "/cleanup purgeusers",
      "aliases": [
        ".purgehumans"
      ],
      "searchAliases": [
        ".purgeusers",
        ".purgehumans"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "1 use(s) per 12s; scope: channel",
      "parameters": [
        {
          "name": "amount",
          "type": "Integer",
          "required": false,
          "description": "Number or amount to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 200,
          "default": 20
        }
      ],
      "example": ".purgeusers",
      "concurrency": "1 active invocation(s) per channel",
      "notes": [
        "Requires effective Manage Messages; bot also needs Read Message History. Confirm within 30 seconds. All purge variants share a server-wide budget of 500 message deletions per minute; history scans are bounded."
      ]
    },
    {
      "name": "quote",
      "category": "Messages",
      "serverOnly": true,
      "description": "Quote an accessible server message with a safe link to its original.",
      "prefix": ".quote [message]",
      "slash": "/messages quote",
      "aliases": [
        ".quoteMessage",
        ".qmsg"
      ],
      "searchAliases": [
        ".quote",
        ".quoteMessage",
        ".qmsg"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 12s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "String",
          "required": false,
          "description": "Message text, ID, or Discord message link.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".quote 1513500353658617926",
      "concurrency": null,
      "notes": [
        "Reply to a message or use its numeric ID/link. The message must be in the invocation channel; caller must be able to read its history. Cross-channel copying is blocked."
      ]
    },
    {
      "name": "rank",
      "category": "Progression",
      "serverOnly": true,
      "description": "Show your or another member's XP rank.",
      "prefix": ".rank [member]",
      "slash": "/levelconfig rank",
      "aliases": [
        ".level",
        ".xp",
        ".lvl",
        ".rango"
      ],
      "searchAliases": [
        ".rank",
        ".level",
        ".xp",
        ".lvl",
        ".rango"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "leveling"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": false,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".rank",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "reactioninfo",
      "category": "Messages",
      "serverOnly": true,
      "description": "Summarize reaction counts on an accessible message without listing users.",
      "prefix": ".reactioninfo [message]",
      "slash": "/messages reactioninfo",
      "aliases": [
        ".reactions",
        ".reactioninformation"
      ],
      "searchAliases": [
        ".reactioninfo",
        ".reactions",
        ".reactioninformation"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 12s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "String",
          "required": false,
          "description": "Message text, ID, or Discord message link.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".reactioninfo 1513500353658617926",
      "concurrency": null,
      "notes": [
        "Reply to a message or use its numeric ID/link. The message must be in the invocation channel; caller must be able to read its history. Cross-channel copying is blocked."
      ]
    },
    {
      "name": "reactionrole",
      "category": "Settings",
      "serverOnly": true,
      "description": "Attach a safe permissionless role to a message reaction.",
      "prefix": ".reactionrole <message_id> <emoji> <role>",
      "slash": "/role reactionrole",
      "aliases": [
        ".rr",
        ".rolreaccion"
      ],
      "searchAliases": [
        ".reactionrole",
        ".rr",
        ".rolreaccion"
      ],
      "parentAliases": [],
      "access": "Administrator",
      "botPermissions": [
        "Manage Roles"
      ],
      "features": [
        "server_options"
      ],
      "cooldown": "1 use(s) per 10s; scope: guild",
      "parameters": [
        {
          "name": "message_id",
          "type": "Integer",
          "required": true,
          "description": "Numeric Discord message ID.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "emoji",
          "type": "String",
          "required": true,
          "description": "Unicode or custom emoji.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".reactionrole 1513500353658617926 🎉 @Cosmetic",
      "concurrency": "1 active invocation(s) per guild",
      "notes": [
        "Server options must be enabled. Use a message ID from the invocation channel and an emoji the bot can use. Up to 50 mappings per server. Roles are rechecked when reactions change."
      ]
    },
    {
      "name": "reminder",
      "category": "Utilities",
      "serverOnly": true,
      "description": "List your reminders, or create one by passing a duration and text.",
      "prefix": ".reminder [duration] [text]",
      "slash": "/reminder overview",
      "aliases": [
        ".remind",
        ".remindme",
        ".timer",
        ".reminders",
        ".recordatorio"
      ],
      "searchAliases": [
        ".reminder",
        ".remind",
        ".remindme",
        ".timer",
        ".reminders",
        ".recordatorio"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "duration",
          "type": "String",
          "required": false,
          "description": "Duration such as 30m, 2h, or 7d.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "text",
          "type": "String",
          "required": false,
          "description": "Text to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".reminder 10m Check the oven",
      "concurrency": null,
      "notes": [
        "Durations: 10s–365d; text: 1–500 characters; up to 20 pending reminders per member per server. Delivery goes to the original channel and may be delayed while the bot is offline.",
        "List/cancel/clear affect only your reminders in this server. Copy the reminder ID from the list; do not use a Discord message ID. Pending text and list responses are not inherently private."
      ]
    },
    {
      "name": "reminder cancel",
      "category": "Utilities",
      "serverOnly": true,
      "description": "Cancel one reminder that you own.",
      "prefix": ".reminder cancel <reminder_id>",
      "slash": "/reminder cancel",
      "aliases": [
        ".reminder delete",
        ".reminder remove",
        ".reminder del"
      ],
      "searchAliases": [
        ".reminder cancel",
        ".reminder delete",
        ".reminder remove",
        ".reminder del",
        ".remind cancel",
        ".remind delete",
        ".remind remove",
        ".remind del",
        ".remindme cancel",
        ".remindme delete",
        ".remindme remove",
        ".remindme del",
        ".timer cancel",
        ".timer delete",
        ".timer remove",
        ".timer del",
        ".reminders cancel",
        ".reminders delete",
        ".reminders remove",
        ".reminders del",
        ".recordatorio cancel",
        ".recordatorio delete",
        ".recordatorio remove",
        ".recordatorio del"
      ],
      "parentAliases": [
        {
          "name": "reminder",
          "aliases": [
            "remind",
            "remindme",
            "timer",
            "reminders",
            "recordatorio"
          ]
        }
      ],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "reminder_id",
          "type": "String",
          "required": true,
          "description": "Value for reminder id.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".reminder cancel a1b2c3",
      "concurrency": null,
      "notes": [
        "Durations: 10s–365d; text: 1–500 characters; up to 20 pending reminders per member per server. Delivery goes to the original channel and may be delayed while the bot is offline.",
        "List/cancel/clear affect only your reminders in this server. Copy the reminder ID from the list; do not use a Discord message ID. Pending text and list responses are not inherently private."
      ]
    },
    {
      "name": "reminder clear",
      "category": "Utilities",
      "serverOnly": true,
      "description": "Cancel all reminders that you own in this server.",
      "prefix": ".reminder clear",
      "slash": "/reminder clear",
      "aliases": [
        ".reminder clearall",
        ".reminder purge"
      ],
      "searchAliases": [
        ".reminder clear",
        ".reminder clearall",
        ".reminder purge",
        ".remind clear",
        ".remind clearall",
        ".remind purge",
        ".remindme clear",
        ".remindme clearall",
        ".remindme purge",
        ".timer clear",
        ".timer clearall",
        ".timer purge",
        ".reminders clear",
        ".reminders clearall",
        ".reminders purge",
        ".recordatorio clear",
        ".recordatorio clearall",
        ".recordatorio purge"
      ],
      "parentAliases": [
        {
          "name": "reminder",
          "aliases": [
            "remind",
            "remindme",
            "timer",
            "reminders",
            "recordatorio"
          ]
        }
      ],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".reminder clear",
      "concurrency": null,
      "notes": [
        "Durations: 10s–365d; text: 1–500 characters; up to 20 pending reminders per member per server. Delivery goes to the original channel and may be delayed while the bot is offline.",
        "List/cancel/clear affect only your reminders in this server. Copy the reminder ID from the list; do not use a Discord message ID. Pending text and list responses are not inherently private."
      ]
    },
    {
      "name": "reminder list",
      "category": "Utilities",
      "serverOnly": true,
      "description": "List your pending reminders in this server.",
      "prefix": ".reminder list",
      "slash": "/reminder list",
      "aliases": [
        ".reminder ls",
        ".reminder all",
        ".reminder show"
      ],
      "searchAliases": [
        ".reminder list",
        ".reminder ls",
        ".reminder all",
        ".reminder show",
        ".remind list",
        ".remind ls",
        ".remind all",
        ".remind show",
        ".remindme list",
        ".remindme ls",
        ".remindme all",
        ".remindme show",
        ".timer list",
        ".timer ls",
        ".timer all",
        ".timer show",
        ".reminders list",
        ".reminders ls",
        ".reminders all",
        ".reminders show",
        ".recordatorio list",
        ".recordatorio ls",
        ".recordatorio all",
        ".recordatorio show"
      ],
      "parentAliases": [
        {
          "name": "reminder",
          "aliases": [
            "remind",
            "remindme",
            "timer",
            "reminders",
            "recordatorio"
          ]
        }
      ],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".reminder list",
      "concurrency": null,
      "notes": [
        "Durations: 10s–365d; text: 1–500 characters; up to 20 pending reminders per member per server. Delivery goes to the original channel and may be delayed while the bot is offline.",
        "List/cancel/clear affect only your reminders in this server. Copy the reminder ID from the list; do not use a Discord message ID. Pending text and list responses are not inherently private."
      ]
    },
    {
      "name": "reminder set",
      "category": "Utilities",
      "serverOnly": true,
      "description": "Save a reminder for delivery in this channel.",
      "prefix": ".reminder set <duration> <text>",
      "slash": "/reminder set",
      "aliases": [
        ".reminder add",
        ".reminder create"
      ],
      "searchAliases": [
        ".reminder set",
        ".reminder add",
        ".reminder create",
        ".remind set",
        ".remind add",
        ".remind create",
        ".remindme set",
        ".remindme add",
        ".remindme create",
        ".timer set",
        ".timer add",
        ".timer create",
        ".reminders set",
        ".reminders add",
        ".reminders create",
        ".recordatorio set",
        ".recordatorio add",
        ".recordatorio create"
      ],
      "parentAliases": [
        {
          "name": "reminder",
          "aliases": [
            "remind",
            "remindme",
            "timer",
            "reminders",
            "recordatorio"
          ]
        }
      ],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 30s; scope: member",
      "parameters": [
        {
          "name": "duration",
          "type": "String",
          "required": true,
          "description": "Duration such as 30m, 2h, or 7d.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "text",
          "type": "String",
          "required": true,
          "description": "Text to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".reminder set 10m Check the oven",
      "concurrency": null,
      "notes": [
        "Durations: 10s–365d; text: 1–500 characters; up to 20 pending reminders per member per server. Delivery goes to the original channel and may be delayed while the bot is offline.",
        "List/cancel/clear affect only your reminders in this server. Copy the reminder ID from the list; do not use a Discord message ID. Pending text and list responses are not inherently private."
      ]
    },
    {
      "name": "rename",
      "category": "Channels",
      "serverOnly": true,
      "description": "Rename a server channel with validated input.",
      "prefix": ".rename [channel] <name>",
      "slash": "/channels rename",
      "aliases": [
        ".renamechannel",
        ".channelrename"
      ],
      "searchAliases": [
        ".rename",
        ".renamechannel",
        ".channelrename"
      ],
      "parentAliases": [],
      "access": "Manage Channels",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "name",
          "type": "String",
          "required": true,
          "description": "Name to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".rename #general chat",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "richest",
      "category": "Progression",
      "serverOnly": true,
      "description": "Show the server economy leaderboard.",
      "prefix": ".richest",
      "slash": "/economy richest",
      "aliases": [
        ".moneyboard",
        ".cashboard",
        ".balancetop",
        ".topcoins"
      ],
      "searchAliases": [
        ".richest",
        ".moneyboard",
        ".cashboard",
        ".balancetop",
        ".topcoins"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "economy"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".richest",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "role",
      "category": "Member Management",
      "serverOnly": true,
      "description": "List a member’s roles, or show role-management usage.",
      "prefix": ".role [member]",
      "slash": "/role overview",
      "aliases": [
        ".roles"
      ],
      "searchAliases": [
        ".role",
        ".roles"
      ],
      "parentAliases": [],
      "access": "Everyone to list; Manage Roles to add/remove",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": false,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".role @Member",
      "concurrency": null,
      "notes": [
        "Role changes require Manage Roles for both caller and bot, and must respect both role hierarchies. Grants accept only safe cosmetic roles; listing roles does not change them."
      ]
    },
    {
      "name": "role add",
      "category": "Member Management",
      "serverOnly": true,
      "description": "Grant one safe cosmetic role to a hierarchy-eligible member.",
      "prefix": ".role add <member> <role>",
      "slash": "/role add",
      "aliases": [
        ".role give",
        ".role grant"
      ],
      "searchAliases": [
        ".role add",
        ".role give",
        ".role grant",
        ".roles add",
        ".roles give",
        ".roles grant"
      ],
      "parentAliases": [
        {
          "name": "role",
          "aliases": [
            "roles"
          ]
        }
      ],
      "access": "Manage Roles",
      "botPermissions": [
        "Manage Roles"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".role add @Member @Cosmetic",
      "concurrency": null,
      "notes": [
        "Role changes require Manage Roles for both caller and bot, and must respect both role hierarchies. Grants accept only safe cosmetic roles; listing roles does not change them."
      ]
    },
    {
      "name": "role remove",
      "category": "Member Management",
      "serverOnly": true,
      "description": "Remove one manageable role from a hierarchy-eligible member.",
      "prefix": ".role remove <member> <role>",
      "slash": "/role remove",
      "aliases": [
        ".role take",
        ".role revoke"
      ],
      "searchAliases": [
        ".role remove",
        ".role take",
        ".role revoke",
        ".roles remove",
        ".roles take",
        ".roles revoke"
      ],
      "parentAliases": [
        {
          "name": "role",
          "aliases": [
            "roles"
          ]
        }
      ],
      "access": "Manage Roles",
      "botPermissions": [
        "Manage Roles"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".role remove @Member @Cosmetic",
      "concurrency": null,
      "notes": [
        "Role changes require Manage Roles for both caller and bot, and must respect both role hierarchies. Grants accept only safe cosmetic roles; listing roles does not change them."
      ]
    },
    {
      "name": "roleinfo",
      "category": "Member Management",
      "serverOnly": true,
      "description": "Show details and permissions for a server role.",
      "prefix": ".roleinfo <role>",
      "slash": "/members roleinfo",
      "aliases": [
        ".ri",
        ".rolinfo",
        ".inforol"
      ],
      "searchAliases": [
        ".roleinfo",
        ".ri",
        ".rolinfo",
        ".inforol"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".roleinfo @Cosmetic",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "roulette",
      "category": "Minigames",
      "serverOnly": true,
      "description": "Bet economy currency on a bounded roulette outcome.",
      "prefix": ".roulette <wager> [bet]",
      "slash": "/economy roulette",
      "aliases": [
        ".rlt",
        ".wheel"
      ],
      "searchAliases": [
        ".roulette",
        ".rlt",
        ".wheel"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "economy"
      ],
      "cooldown": "1 use(s) per 8s; scope: member",
      "parameters": [
        {
          "name": "wager",
          "type": "String",
          "required": true,
          "description": "Number of coins to wager.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "bet",
          "type": "String",
          "required": false,
          "description": "Bet type or value.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".roulette 10 red",
      "concurrency": null,
      "notes": [
        "Choose the supported outcome in the view, or provide a bet such as red, black, green or a number from 0–36.",
        "Uses server economy currency only. A valid wager and sufficient balance are required. Interactive controls are limited to the relevant player(s); there is no real-money payout."
      ]
    },
    {
      "name": "rps",
      "category": "Minigames",
      "serverOnly": true,
      "description": "Play an interactive rock-paper-scissors round against Skye or another member.",
      "prefix": ".rps [opponent]",
      "slash": "/games rps",
      "aliases": [
        ".rockpaperscissors",
        ".roshambo"
      ],
      "searchAliases": [
        ".rps",
        ".rockpaperscissors",
        ".roshambo"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "games"
      ],
      "cooldown": "1 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "opponent",
          "type": "User",
          "required": false,
          "description": "Member to challenge.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".rps @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "say",
      "category": "Messages",
      "serverOnly": true,
      "description": "Repeat text without allowing mentions; restricted to message managers.",
      "prefix": ".say <message>",
      "slash": "/fun say",
      "aliases": [
        ".echo",
        ".repeat"
      ],
      "searchAliases": [
        ".say",
        ".echo",
        ".repeat"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [
        "Send Messages"
      ],
      "features": [],
      "cooldown": "3 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "String",
          "required": true,
          "description": "Message text, ID, or Discord message link.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".say Hello everyone",
      "concurrency": "1 active invocation(s) per member",
      "notes": []
    },
    {
      "name": "scramble",
      "category": "Minigames",
      "serverOnly": true,
      "description": "Start a timed word-scramble game in this channel.",
      "prefix": ".scramble",
      "slash": "/fun scramble",
      "aliases": [
        ".wordscramble",
        ".jumble"
      ],
      "searchAliases": [
        ".scramble",
        ".wordscramble",
        ".jumble"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "games"
      ],
      "cooldown": "2 use(s) per 15s; scope: channel",
      "parameters": [],
      "example": ".scramble",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "serverbanner",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Show or safely update the native Discord server banner.",
      "prefix": ".serverbanner [url] [attachment (upload a file)]",
      "slash": "/serverconfig serverbanner",
      "aliases": [
        ".guildbanner"
      ],
      "searchAliases": [
        ".serverbanner",
        ".guildbanner"
      ],
      "parentAliases": [],
      "access": "Everyone to view; Administrator to change",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "url",
          "type": "String",
          "required": false,
          "description": "Trusted image URL, reset, or leave empty to view.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "attachment",
          "type": "Attachment",
          "required": false,
          "description": "Image attachment to upload.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".serverbanner",
      "concurrency": null,
      "notes": [
        "No input shows the current image. Changes require Administrator and bot Manage Server. Upload an image (up to 10 MB) or use a trusted Discord CDN URL; reset clears a supported custom asset. Server capabilities still apply."
      ]
    },
    {
      "name": "serverboosts",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Show boost level, count, cached boosters, and bitrate limit.",
      "prefix": ".serverboosts",
      "slash": "/serverconfig serverboosts",
      "aliases": [
        ".guildboosts",
        ".booststatus"
      ],
      "searchAliases": [
        ".serverboosts",
        ".guildboosts",
        ".booststatus"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [],
      "example": ".serverboosts",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "serverconfig",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Configure welcome, leave, role, and response automation.",
      "prefix": ".serverconfig",
      "slash": "/serverconfig overview",
      "aliases": [
        ".serveroptions",
        ".serveropts",
        ".sconfig"
      ],
      "searchAliases": [
        ".serverconfig",
        ".serveroptions",
        ".serveropts",
        ".sconfig"
      ],
      "parentAliases": [],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".serverconfig",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Welcome/leave messages, autoroles, automatic responses, custom responses and self-service roles require server_options to be enabled.",
        "Disabling an automation preserves its saved data unless the command explicitly removes it. Custom responses are plain text; they do not execute Python or shell commands."
      ]
    },
    {
      "name": "serverconfig autoresponse",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Add or remove an exact-match automatic response.",
      "prefix": ".serverconfig autoresponse <action> <trigger> [response]",
      "slash": "/serverconfig autoresponse",
      "aliases": [
        ".serverconfig response"
      ],
      "searchAliases": [
        ".serverconfig autoresponse",
        ".serverconfig response",
        ".serveroptions autoresponse",
        ".serveroptions response",
        ".serveropts autoresponse",
        ".serveropts response",
        ".sconfig autoresponse",
        ".sconfig response"
      ],
      "parentAliases": [
        {
          "name": "serverconfig",
          "aliases": [
            "serveroptions",
            "serveropts",
            "sconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "action",
          "type": "String",
          "required": true,
          "description": "Action to perform.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "trigger",
          "type": "String",
          "required": true,
          "description": "Value for trigger.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "response",
          "type": "String",
          "required": false,
          "description": "Response or enforcement action.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".serverconfig autoresponse add hello Welcome!",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Welcome/leave messages, autoroles, automatic responses, custom responses and self-service roles require server_options to be enabled.",
        "Disabling an automation preserves its saved data unless the command explicitly removes it. Custom responses are plain text; they do not execute Python or shell commands.",
        "Use add or remove as the action. Adding a response requires response text. Autorole requires a safe cosmetic role."
      ]
    },
    {
      "name": "serverconfig autorole",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Add or remove a safe automatic join role.",
      "prefix": ".serverconfig autorole <action> <role>",
      "slash": "/serverconfig autorole",
      "aliases": [],
      "searchAliases": [
        ".serverconfig autorole",
        ".serveroptions autorole",
        ".serveropts autorole",
        ".sconfig autorole"
      ],
      "parentAliases": [
        {
          "name": "serverconfig",
          "aliases": [
            "serveroptions",
            "serveropts",
            "sconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [
        "Manage Roles"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "action",
          "type": "String",
          "required": true,
          "description": "Action to perform.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".serverconfig autorole add @Cosmetic",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Welcome/leave messages, autoroles, automatic responses, custom responses and self-service roles require server_options to be enabled.",
        "Disabling an automation preserves its saved data unless the command explicitly removes it. Custom responses are plain text; they do not execute Python or shell commands.",
        "Use add or remove as the action. Adding a response requires response text. Autorole requires a safe cosmetic role."
      ]
    },
    {
      "name": "serverconfig customcommand",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Add or remove a bounded custom response command.",
      "prefix": ".serverconfig customcommand <action> <name> [response]",
      "slash": "/serverconfig customcommand",
      "aliases": [
        ".serverconfig command",
        ".serverconfig cc"
      ],
      "searchAliases": [
        ".serverconfig customcommand",
        ".serverconfig command",
        ".serverconfig cc",
        ".serveroptions customcommand",
        ".serveroptions command",
        ".serveroptions cc",
        ".serveropts customcommand",
        ".serveropts command",
        ".serveropts cc",
        ".sconfig customcommand",
        ".sconfig command",
        ".sconfig cc"
      ],
      "parentAliases": [
        {
          "name": "serverconfig",
          "aliases": [
            "serveroptions",
            "serveropts",
            "sconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "action",
          "type": "String",
          "required": true,
          "description": "Action to perform.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "name",
          "type": "String",
          "required": true,
          "description": "Name to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "response",
          "type": "String",
          "required": false,
          "description": "Response or enforcement action.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".serverconfig customcommand add rules Please read the server rules.",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Welcome/leave messages, autoroles, automatic responses, custom responses and self-service roles require server_options to be enabled.",
        "Disabling an automation preserves its saved data unless the command explicitly removes it. Custom responses are plain text; they do not execute Python or shell commands.",
        "Use add or remove as the action. Adding a response requires response text. Autorole requires a safe cosmetic role."
      ]
    },
    {
      "name": "serverconfig leave",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Configure the server leave message.",
      "prefix": ".serverconfig leave <channel> <message>",
      "slash": "/serverconfig leave",
      "aliases": [],
      "searchAliases": [
        ".serverconfig leave",
        ".serveroptions leave",
        ".serveropts leave",
        ".sconfig leave"
      ],
      "parentAliases": [
        {
          "name": "serverconfig",
          "aliases": [
            "serveroptions",
            "serveropts",
            "sconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": true,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "message",
          "type": "String",
          "required": true,
          "description": "Message text, ID, or Discord message link.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".serverconfig leave #welcome {user} left {server}.",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Welcome/leave messages, autoroles, automatic responses, custom responses and self-service roles require server_options to be enabled.",
        "Disabling an automation preserves its saved data unless the command explicitly removes it. Custom responses are plain text; they do not execute Python or shell commands."
      ]
    },
    {
      "name": "serverconfig leaveoff",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Disable server leave messages.",
      "prefix": ".serverconfig leaveoff",
      "slash": "/serverconfig leaveoff",
      "aliases": [
        ".serverconfig disableleave"
      ],
      "searchAliases": [
        ".serverconfig leaveoff",
        ".serverconfig disableleave",
        ".serveroptions leaveoff",
        ".serveroptions disableleave",
        ".serveropts leaveoff",
        ".serveropts disableleave",
        ".sconfig leaveoff",
        ".sconfig disableleave"
      ],
      "parentAliases": [
        {
          "name": "serverconfig",
          "aliases": [
            "serveroptions",
            "serveropts",
            "sconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".serverconfig leaveoff",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Welcome/leave messages, autoroles, automatic responses, custom responses and self-service roles require server_options to be enabled.",
        "Disabling an automation preserves its saved data unless the command explicitly removes it. Custom responses are plain text; they do not execute Python or shell commands."
      ]
    },
    {
      "name": "serverconfig removebutton",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Remove a saved button-role mapping.",
      "prefix": ".serverconfig removebutton <message_id>",
      "slash": "/serverconfig removebutton",
      "aliases": [],
      "searchAliases": [
        ".serverconfig removebutton",
        ".serveroptions removebutton",
        ".serveropts removebutton",
        ".sconfig removebutton"
      ],
      "parentAliases": [
        {
          "name": "serverconfig",
          "aliases": [
            "serveroptions",
            "serveropts",
            "sconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "message_id",
          "type": "Integer",
          "required": true,
          "description": "Numeric Discord message ID.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".serverconfig removebutton 1513500353658617926",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Welcome/leave messages, autoroles, automatic responses, custom responses and self-service roles require server_options to be enabled.",
        "Disabling an automation preserves its saved data unless the command explicitly removes it. Custom responses are plain text; they do not execute Python or shell commands."
      ]
    },
    {
      "name": "serverconfig removereaction",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Remove a saved reaction-role mapping.",
      "prefix": ".serverconfig removereaction <message_id> <emoji>",
      "slash": "/serverconfig removereaction",
      "aliases": [],
      "searchAliases": [
        ".serverconfig removereaction",
        ".serveroptions removereaction",
        ".serveropts removereaction",
        ".sconfig removereaction"
      ],
      "parentAliases": [
        {
          "name": "serverconfig",
          "aliases": [
            "serveroptions",
            "serveropts",
            "sconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "message_id",
          "type": "Integer",
          "required": true,
          "description": "Numeric Discord message ID.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "emoji",
          "type": "String",
          "required": true,
          "description": "Unicode or custom emoji.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".serverconfig removereaction 1513500353658617926 🎉",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Welcome/leave messages, autoroles, automatic responses, custom responses and self-service roles require server_options to be enabled.",
        "Disabling an automation preserves its saved data unless the command explicitly removes it. Custom responses are plain text; they do not execute Python or shell commands."
      ]
    },
    {
      "name": "serverconfig timezone",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Set the server's validated default IANA timezone.",
      "prefix": ".serverconfig timezone <timezone>",
      "slash": "/serverconfig timezone",
      "aliases": [
        ".serverconfig tz",
        ".serverconfig servertimezone"
      ],
      "searchAliases": [
        ".serverconfig timezone",
        ".serverconfig tz",
        ".serverconfig servertimezone",
        ".serveroptions timezone",
        ".serveroptions tz",
        ".serveroptions servertimezone",
        ".serveropts timezone",
        ".serveropts tz",
        ".serveropts servertimezone",
        ".sconfig timezone",
        ".sconfig tz",
        ".sconfig servertimezone"
      ],
      "parentAliases": [
        {
          "name": "serverconfig",
          "aliases": [
            "serveroptions",
            "serveropts",
            "sconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 10s; scope: guild",
      "parameters": [
        {
          "name": "timezone",
          "type": "String",
          "required": true,
          "description": "IANA timezone such as Europe/London.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".serverconfig timezone Europe/London",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Welcome/leave messages, autoroles, automatic responses, custom responses and self-service roles require server_options to be enabled.",
        "Disabling an automation preserves its saved data unless the command explicitly removes it. Custom responses are plain text; they do not execute Python or shell commands."
      ]
    },
    {
      "name": "serverconfig welcome",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Configure the server welcome message.",
      "prefix": ".serverconfig welcome <channel> <message>",
      "slash": "/serverconfig welcome",
      "aliases": [],
      "searchAliases": [
        ".serverconfig welcome",
        ".serveroptions welcome",
        ".serveropts welcome",
        ".sconfig welcome"
      ],
      "parentAliases": [
        {
          "name": "serverconfig",
          "aliases": [
            "serveroptions",
            "serveropts",
            "sconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": true,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "message",
          "type": "String",
          "required": true,
          "description": "Message text, ID, or Discord message link.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".serverconfig welcome #welcome Welcome {mention} to {server}!",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Welcome/leave messages, autoroles, automatic responses, custom responses and self-service roles require server_options to be enabled.",
        "Disabling an automation preserves its saved data unless the command explicitly removes it. Custom responses are plain text; they do not execute Python or shell commands."
      ]
    },
    {
      "name": "serverconfig welcomeoff",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Disable server welcome messages.",
      "prefix": ".serverconfig welcomeoff",
      "slash": "/serverconfig welcomeoff",
      "aliases": [
        ".serverconfig disablewelcome"
      ],
      "searchAliases": [
        ".serverconfig welcomeoff",
        ".serverconfig disablewelcome",
        ".serveroptions welcomeoff",
        ".serveroptions disablewelcome",
        ".serveropts welcomeoff",
        ".serveropts disablewelcome",
        ".sconfig welcomeoff",
        ".sconfig disablewelcome"
      ],
      "parentAliases": [
        {
          "name": "serverconfig",
          "aliases": [
            "serveroptions",
            "serveropts",
            "sconfig"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".serverconfig welcomeoff",
      "concurrency": null,
      "notes": [
        "Administrator-only configuration. Welcome/leave messages, autoroles, automatic responses, custom responses and self-service roles require server_options to be enabled.",
        "Disabling an automation preserves its saved data unless the command explicitly removes it. Custom responses are plain text; they do not execute Python or shell commands."
      ]
    },
    {
      "name": "serverdescription",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Set or clear the native Discord server description.",
      "prefix": ".serverdescription <description>",
      "slash": "/serverconfig serverdescription",
      "aliases": [
        ".guilddescription",
        ".serverdesc"
      ],
      "searchAliases": [
        ".serverdescription",
        ".guilddescription",
        ".serverdesc"
      ],
      "parentAliases": [],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: guild",
      "parameters": [
        {
          "name": "description",
          "type": "String",
          "required": true,
          "description": "Description text, or clear where supported.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".serverdescription Welcome to our community",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "serveremojis",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "List bounded custom emoji details for this server.",
      "prefix": ".serveremojis",
      "slash": "/serverconfig serveremojis",
      "aliases": [
        ".guildemojis"
      ],
      "searchAliases": [
        ".serveremojis",
        ".guildemojis"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [],
      "example": ".serveremojis",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "serverfeatures",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Show native Discord capabilities and enabled skye modules.",
      "prefix": ".serverfeatures",
      "slash": "/serverconfig serverfeatures",
      "aliases": [
        ".guildfeatures"
      ],
      "searchAliases": [
        ".serverfeatures",
        ".guildfeatures"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [],
      "example": ".serverfeatures",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "servericon",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Show or safely update the native Discord server icon.",
      "prefix": ".servericon [url] [attachment (upload a file)]",
      "slash": "/serverconfig servericon",
      "aliases": [
        ".guildicon"
      ],
      "searchAliases": [
        ".servericon",
        ".guildicon"
      ],
      "parentAliases": [],
      "access": "Everyone to view; Administrator to change",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "url",
          "type": "String",
          "required": false,
          "description": "Trusted image URL, reset, or leave empty to view.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "attachment",
          "type": "Attachment",
          "required": false,
          "description": "Image attachment to upload.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".servericon",
      "concurrency": null,
      "notes": [
        "No input shows the current image. Changes require Administrator and bot Manage Server. Upload an image (up to 10 MB) or use a trusted Discord CDN URL; reset clears a supported custom asset. Server capabilities still apply."
      ]
    },
    {
      "name": "serverinfo",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Show server ownership, membership, and channel statistics.",
      "prefix": ".serverinfo",
      "slash": "/serverconfig serverinfo",
      "aliases": [
        ".si",
        ".server",
        ".guildinfo",
        ".sinfo",
        ".servidor",
        ".infoservidor"
      ],
      "searchAliases": [
        ".serverinfo",
        ".si",
        ".server",
        ".guildinfo",
        ".sinfo",
        ".servidor",
        ".infoservidor"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [],
      "example": ".serverinfo",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "servername",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Change the native Discord server name with validation and audit reason.",
      "prefix": ".servername <name>",
      "slash": "/serverconfig servername",
      "aliases": [
        ".guildname"
      ],
      "searchAliases": [
        ".servername",
        ".guildname"
      ],
      "parentAliases": [],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: guild",
      "parameters": [
        {
          "name": "name",
          "type": "String",
          "required": true,
          "description": "Name to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".servername Skye Community",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "serverroles",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "List a bounded summary of the server's roles.",
      "prefix": ".serverroles",
      "slash": "/serverconfig serverroles",
      "aliases": [
        ".guildroles"
      ],
      "searchAliases": [
        ".serverroles",
        ".guildroles"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [],
      "example": ".serverroles",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "serverrules",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Show the visible rules channel and server safety levels.",
      "prefix": ".serverrules",
      "slash": "/serverconfig serverrules",
      "aliases": [
        ".guildrules"
      ],
      "searchAliases": [
        ".serverrules",
        ".guildrules"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [],
      "example": ".serverrules",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "serverstats",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Summarize members, channels, roles, assets, voice use, and boosts.",
      "prefix": ".serverstats",
      "slash": "/serverconfig serverstats",
      "aliases": [
        ".guildstats"
      ],
      "searchAliases": [
        ".serverstats",
        ".guildstats"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: guild",
      "parameters": [],
      "example": ".serverstats",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "serverstickers",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "List bounded custom sticker details for this server.",
      "prefix": ".serverstickers",
      "slash": "/serverconfig serverstickers",
      "aliases": [
        ".guildstickers"
      ],
      "searchAliases": [
        ".serverstickers",
        ".guildstickers"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [],
      "example": ".serverstickers",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "serververification",
      "category": "Server Customization",
      "serverOnly": true,
      "description": "Change the native server verification level safely.",
      "prefix": ".serververification <level>",
      "slash": "/serverconfig serververification",
      "aliases": [
        ".verificationlevel"
      ],
      "searchAliases": [
        ".serververification",
        ".verificationlevel"
      ],
      "parentAliases": [],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: guild",
      "parameters": [
        {
          "name": "level",
          "type": "String",
          "required": true,
          "description": "Level or verification setting.",
          "choices": [
            "none",
            "low",
            "medium",
            "high",
            "highest"
          ],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".serververification none",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "setxprate",
      "category": "Progression",
      "serverOnly": true,
      "description": "Set the bounded server XP multiplier.",
      "prefix": ".setxprate <multiplier>",
      "slash": "/levelconfig setxprate",
      "aliases": [
        ".xprate",
        ".setxp",
        ".xpmultiplier"
      ],
      "searchAliases": [
        ".setxprate",
        ".xprate",
        ".setxp",
        ".xpmultiplier"
      ],
      "parentAliases": [],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "multiplier",
          "type": "Number",
          "required": true,
          "description": "XP multiplier.",
          "choices": [],
          "minimum": 0.1,
          "maximum": 10.0
        }
      ],
      "example": ".setxprate 1.5",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "sharedroles",
      "category": "Member Management",
      "serverOnly": true,
      "description": "Show roles shared by two current server members.",
      "prefix": ".sharedroles <member> [other]",
      "slash": "/members sharedroles",
      "aliases": [
        ".mutualroles",
        ".commonroles"
      ],
      "searchAliases": [
        ".sharedroles",
        ".mutualroles",
        ".commonroles"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "other",
          "type": "User",
          "required": false,
          "description": "Second member to compare.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".sharedroles @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "ship",
      "category": "Fun & actions",
      "serverOnly": true,
      "description": "Calculate a deterministic, non-economic compatibility score.",
      "prefix": ".ship <first> [second]",
      "slash": "/games ship",
      "aliases": [
        ".shiprate",
        ".compatibility",
        ".lovecalc",
        ".shipit",
        ".love",
        ".pareja"
      ],
      "searchAliases": [
        ".ship",
        ".shiprate",
        ".compatibility",
        ".lovecalc",
        ".shipit",
        ".love",
        ".pareja"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "games"
      ],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "first",
          "type": "User",
          "required": true,
          "description": "First member or name.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "second",
          "type": "User",
          "required": false,
          "description": "Second member or name.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".ship @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "show",
      "category": "Channels",
      "serverOnly": true,
      "description": "Restore inherited channel visibility for a role or member.",
      "prefix": ".show [channel] [target]",
      "slash": "/channels show",
      "aliases": [
        ".showchannel",
        ".channelshow"
      ],
      "searchAliases": [
        ".show",
        ".showchannel",
        ".channelshow"
      ],
      "parentAliases": [],
      "access": "Manage Channels",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "target",
          "type": "Mentionable",
          "required": false,
          "description": "Member, role, message, or resource target.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".show",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "skye",
      "category": "Settings",
      "serverOnly": true,
      "description": "View or customize skye's server profile.",
      "prefix": ".skye",
      "slash": "/skye overview",
      "aliases": [
        ".botprofile",
        ".branding"
      ],
      "searchAliases": [
        ".skye",
        ".botprofile",
        ".branding"
      ],
      "parentAliases": [],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".skye",
      "concurrency": null,
      "notes": [
        "Changes Skye’s profile for this server, not your own account. Administrator permission and the relevant Discord capability are required.",
        "For images, upload an attachment or provide an HTTPS Discord CDN image URL. Input is limited to 10 MB and validated; output is resized. Use reset to remove a supported custom asset."
      ]
    },
    {
      "name": "skye avatar",
      "category": "Settings",
      "serverOnly": true,
      "description": "Set, reset, or safely process skye's server avatar.",
      "prefix": ".skye avatar [url] [attachment (upload a file)]",
      "slash": "/skye avatar",
      "aliases": [
        ".skye pfp",
        ".skye icon"
      ],
      "searchAliases": [
        ".skye avatar",
        ".skye pfp",
        ".skye icon",
        ".botprofile avatar",
        ".botprofile pfp",
        ".botprofile icon",
        ".branding avatar",
        ".branding pfp",
        ".branding icon"
      ],
      "parentAliases": [
        {
          "name": "skye",
          "aliases": [
            "botprofile",
            "branding"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 60s; scope: guild",
      "parameters": [
        {
          "name": "url",
          "type": "String",
          "required": false,
          "description": "Trusted image URL, reset, or leave empty to view.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "attachment",
          "type": "Attachment",
          "required": false,
          "description": "Image attachment to upload.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".skye avatar",
      "concurrency": "1 active invocation(s) per guild",
      "notes": [
        "Changes Skye’s profile for this server, not your own account. Administrator permission and the relevant Discord capability are required.",
        "For images, upload an attachment or provide an HTTPS Discord CDN image URL. Input is limited to 10 MB and validated; output is resized. Use reset to remove a supported custom asset."
      ]
    },
    {
      "name": "skye banner",
      "category": "Settings",
      "serverOnly": true,
      "description": "Set, reset, or safely process skye's server banner.",
      "prefix": ".skye banner [url] [attachment (upload a file)]",
      "slash": "/skye banner",
      "aliases": [
        ".skye cover"
      ],
      "searchAliases": [
        ".skye banner",
        ".skye cover",
        ".botprofile banner",
        ".botprofile cover",
        ".branding banner",
        ".branding cover"
      ],
      "parentAliases": [
        {
          "name": "skye",
          "aliases": [
            "botprofile",
            "branding"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 60s; scope: guild",
      "parameters": [
        {
          "name": "url",
          "type": "String",
          "required": false,
          "description": "Trusted image URL, reset, or leave empty to view.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "attachment",
          "type": "Attachment",
          "required": false,
          "description": "Image attachment to upload.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".skye banner",
      "concurrency": "1 active invocation(s) per guild",
      "notes": [
        "Changes Skye’s profile for this server, not your own account. Administrator permission and the relevant Discord capability are required.",
        "For images, upload an attachment or provide an HTTPS Discord CDN image URL. Input is limited to 10 MB and validated; output is resized. Use reset to remove a supported custom asset."
      ]
    },
    {
      "name": "skye color",
      "category": "Settings",
      "serverOnly": true,
      "description": "Change Skye’s embed accent colour in this server.",
      "prefix": ".skye color <color>",
      "slash": "/skye color",
      "aliases": [
        ".skye colour",
        ".skye accent"
      ],
      "searchAliases": [
        ".skye color",
        ".skye colour",
        ".skye accent",
        ".botprofile color",
        ".botprofile colour",
        ".botprofile accent",
        ".branding color",
        ".branding colour",
        ".branding accent"
      ],
      "parentAliases": [
        {
          "name": "skye",
          "aliases": [
            "botprofile",
            "branding"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "color",
          "type": "String",
          "required": true,
          "description": "Hex colour such as #35D6C5.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".skye color #35D6C5",
      "concurrency": "1 active invocation(s) per guild",
      "notes": [
        "Changes Skye’s profile for this server, not your own account. Administrator permission and the relevant Discord capability are required.",
        "For images, upload an attachment or provide an HTTPS Discord CDN image URL. Input is limited to 10 MB and validated; output is resized. Use reset to remove a supported custom asset."
      ]
    },
    {
      "name": "skye description",
      "category": "Settings",
      "serverOnly": true,
      "description": "Set skye's bounded native server-profile description.",
      "prefix": ".skye description <description>",
      "slash": "/skye description",
      "aliases": [
        ".skye bio",
        ".skye about"
      ],
      "searchAliases": [
        ".skye description",
        ".skye bio",
        ".skye about",
        ".botprofile description",
        ".botprofile bio",
        ".botprofile about",
        ".branding description",
        ".branding bio",
        ".branding about"
      ],
      "parentAliases": [
        {
          "name": "skye",
          "aliases": [
            "botprofile",
            "branding"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: guild",
      "parameters": [
        {
          "name": "description",
          "type": "String",
          "required": true,
          "description": "Description text, or clear where supported.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".skye description Welcome to our community",
      "concurrency": "1 active invocation(s) per guild",
      "notes": [
        "Changes Skye’s profile for this server, not your own account. Administrator permission and the relevant Discord capability are required.",
        "For images, upload an attachment or provide an HTTPS Discord CDN image URL. Input is limited to 10 MB and validated; output is resized. Use reset to remove a supported custom asset."
      ]
    },
    {
      "name": "skye nickname",
      "category": "Settings",
      "serverOnly": true,
      "description": "Set or reset Skye’s nickname in this server.",
      "prefix": ".skye nickname [nickname]",
      "slash": "/skye nickname",
      "aliases": [
        ".skye nick",
        ".skye name"
      ],
      "searchAliases": [
        ".skye nickname",
        ".skye nick",
        ".skye name",
        ".botprofile nickname",
        ".botprofile nick",
        ".botprofile name",
        ".branding nickname",
        ".branding nick",
        ".branding name"
      ],
      "parentAliases": [
        {
          "name": "skye",
          "aliases": [
            "botprofile",
            "branding"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [
        "Change Nickname"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "nickname",
          "type": "String",
          "required": false,
          "description": "Nickname, or leave empty to reset.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".skye nickname",
      "concurrency": "1 active invocation(s) per guild",
      "notes": [
        "Changes Skye’s profile for this server, not your own account. Administrator permission and the relevant Discord capability are required.",
        "For images, upload an attachment or provide an HTTPS Discord CDN image URL. Input is limited to 10 MB and validated; output is resized. Use reset to remove a supported custom asset."
      ]
    },
    {
      "name": "slap",
      "category": "Fun & actions",
      "serverOnly": false,
      "description": "Send a slap reaction to another member.",
      "prefix": ".slap <member>",
      "slash": "/fun slap",
      "aliases": [
        ".smack"
      ],
      "searchAliases": [
        ".slap",
        ".smack"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".slap @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "slots",
      "category": "Minigames",
      "serverOnly": true,
      "description": "Spin a bounded economy slot machine.",
      "prefix": ".slots <wager>",
      "slash": "/economy slots",
      "aliases": [
        ".slot",
        ".spin"
      ],
      "searchAliases": [
        ".slots",
        ".slot",
        ".spin"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "economy"
      ],
      "cooldown": "1 use(s) per 8s; scope: member",
      "parameters": [
        {
          "name": "wager",
          "type": "String",
          "required": true,
          "description": "Number of coins to wager.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".slots 10",
      "concurrency": null,
      "notes": [
        "Uses server economy currency only. A valid wager and sufficient balance are required. Interactive controls are limited to the relevant player(s); there is no real-money payout."
      ]
    },
    {
      "name": "slowmode",
      "category": "Channels",
      "serverOnly": true,
      "description": "Set or disable the current channel's slowmode.",
      "prefix": ".slowmode [duration=0]",
      "slash": "/moderation slowmode",
      "aliases": [
        ".slow",
        ".sm",
        ".lento"
      ],
      "searchAliases": [
        ".slowmode",
        ".slow",
        ".sm",
        ".lento"
      ],
      "parentAliases": [],
      "access": "Manage Channels",
      "botPermissions": [
        "Manage Channels"
      ],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "duration",
          "type": "String",
          "required": false,
          "description": "Duration such as 30m, 2h, or 7d.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "0"
        }
      ],
      "example": ".slowmode 10s",
      "concurrency": null,
      "notes": [
        "Use 0 to disable. Maximum duration is six hours. This changes channel slowmode, not a member timeout."
      ]
    },
    {
      "name": "snipe",
      "category": "Messages",
      "serverOnly": true,
      "description": "Recover a recent cached deleted message for moderation.",
      "prefix": ".snipe [number=1]",
      "slash": "/moderation snipe",
      "aliases": [
        ".s",
        ".recover"
      ],
      "searchAliases": [
        ".snipe",
        ".s",
        ".recover"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "number",
          "type": "Integer",
          "required": false,
          "description": "Number to use.",
          "choices": [],
          "minimum": 1,
          "maximum": 10,
          "default": 1
        }
      ],
      "example": ".snipe",
      "concurrency": "1 active invocation(s) per channel",
      "notes": [
        "Manage Messages and Read Message History are required in the current channel. Stores up to 10 deleted messages per channel in memory for one hour; command messages are excluded. Restart clears the cache. May include an attachment URL."
      ]
    },
    {
      "name": "stopbot",
      "category": "General",
      "serverOnly": false,
      "description": "Use the stopbot command.",
      "prefix": ".stopbot",
      "slash": "/bot stopbot",
      "aliases": [],
      "searchAliases": [
        ".stopbot"
      ],
      "parentAliases": [],
      "access": "Bot/application owner only",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".stopbot",
      "concurrency": "1 active invocation(s) per default",
      "notes": [
        "Gracefully saves and disconnects Skye. Server Administrator does not grant access to this operator command.",
        "Operator command; unavailable to ordinary server members and administrators."
      ]
    },
    {
      "name": "ticket",
      "category": "Support",
      "serverOnly": true,
      "description": "Show ticket setup and panel-management usage.",
      "prefix": ".ticket",
      "slash": "/ticket overview",
      "aliases": [
        ".t",
        ".tickets"
      ],
      "searchAliases": [
        ".ticket",
        ".t",
        ".tickets"
      ],
      "parentAliases": [],
      "access": "Everyone (setup and changes require Administrator)",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".ticket",
      "concurrency": null,
      "notes": [
        "Setup: .ticket setup main, choose a category and support role, then .ticket panel main #support. Members open tickets with the panel button.",
        "New tickets use stored ownership records. The creator, configured support staff and administrators can use ticket controls. Close requires confirmation and permanently deletes the channel; no transcript export is provided.",
        "One open ticket per member, a 60-second creation cooldown and at most 50 tracked open tickets per server. Older tickets without ownership records need administrator handling."
      ]
    },
    {
      "name": "ticket category",
      "category": "Support",
      "serverOnly": true,
      "description": "View or set the category for new tickets from a named panel.",
      "prefix": ".ticket category [panel_name=main] [category]",
      "slash": "/ticket category",
      "aliases": [],
      "searchAliases": [
        ".ticket category",
        ".t category",
        ".tickets category"
      ],
      "parentAliases": [
        {
          "name": "ticket",
          "aliases": [
            "t",
            "tickets"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "panel_name",
          "type": "String",
          "required": false,
          "description": "Ticket panel name.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "main"
        },
        {
          "name": "category",
          "type": "Channel",
          "required": false,
          "description": "Discord category to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".ticket category main Support",
      "concurrency": null,
      "notes": [
        "Setup: .ticket setup main, choose a category and support role, then .ticket panel main #support. Members open tickets with the panel button.",
        "New tickets use stored ownership records. The creator, configured support staff and administrators can use ticket controls. Close requires confirmation and permanently deletes the channel; no transcript export is provided.",
        "One open ticket per member, a 60-second creation cooldown and at most 50 tracked open tickets per server. Older tickets without ownership records need administrator handling."
      ]
    },
    {
      "name": "ticket delete",
      "category": "Support",
      "serverOnly": true,
      "description": "Delete a saved panel configuration and its panel message after confirmation.",
      "prefix": ".ticket delete <panel_name>",
      "slash": "/ticket delete",
      "aliases": [
        ".ticket remove"
      ],
      "searchAliases": [
        ".ticket delete",
        ".ticket remove",
        ".t delete",
        ".t remove",
        ".tickets delete",
        ".tickets remove"
      ],
      "parentAliases": [
        {
          "name": "ticket",
          "aliases": [
            "t",
            "tickets"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "panel_name",
          "type": "String",
          "required": true,
          "description": "Ticket panel name.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".ticket delete main",
      "concurrency": null,
      "notes": [
        "Setup: .ticket setup main, choose a category and support role, then .ticket panel main #support. Members open tickets with the panel button.",
        "New tickets use stored ownership records. The creator, configured support staff and administrators can use ticket controls. Close requires confirmation and permanently deletes the channel; no transcript export is provided.",
        "One open ticket per member, a 60-second creation cooldown and at most 50 tracked open tickets per server. Older tickets without ownership records need administrator handling.",
        "This does not delete all ticket channels. Use each ticket’s close controls to close individual tracked tickets."
      ]
    },
    {
      "name": "ticket edit",
      "category": "Support",
      "serverOnly": true,
      "description": "Open the panel editor for text, colour and up to five buttons.",
      "prefix": ".ticket edit [panel_name=main]",
      "slash": "/ticket edit",
      "aliases": [],
      "searchAliases": [
        ".ticket edit",
        ".t edit",
        ".tickets edit"
      ],
      "parentAliases": [
        {
          "name": "ticket",
          "aliases": [
            "t",
            "tickets"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "panel_name",
          "type": "String",
          "required": false,
          "description": "Ticket panel name.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "main"
        }
      ],
      "example": ".ticket edit main",
      "concurrency": null,
      "notes": [
        "Setup: .ticket setup main, choose a category and support role, then .ticket panel main #support. Members open tickets with the panel button.",
        "New tickets use stored ownership records. The creator, configured support staff and administrators can use ticket controls. Close requires confirmation and permanently deletes the channel; no transcript export is provided.",
        "One open ticket per member, a 60-second creation cooldown and at most 50 tracked open tickets per server. Older tickets without ownership records need administrator handling."
      ]
    },
    {
      "name": "ticket panel",
      "category": "Support",
      "serverOnly": true,
      "description": "Post, move, or refresh a configured ticket panel.",
      "prefix": ".ticket panel [panel_name=main] [channel]",
      "slash": "/ticket panel",
      "aliases": [],
      "searchAliases": [
        ".ticket panel",
        ".t panel",
        ".tickets panel"
      ],
      "parentAliases": [
        {
          "name": "ticket",
          "aliases": [
            "t",
            "tickets"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "panel_name",
          "type": "String",
          "required": false,
          "description": "Ticket panel name.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "main"
        },
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".ticket panel main #support",
      "concurrency": null,
      "notes": [
        "Setup: .ticket setup main, choose a category and support role, then .ticket panel main #support. Members open tickets with the panel button.",
        "New tickets use stored ownership records. The creator, configured support staff and administrators can use ticket controls. Close requires confirmation and permanently deletes the channel; no transcript export is provided.",
        "One open ticket per member, a 60-second creation cooldown and at most 50 tracked open tickets per server. Older tickets without ownership records need administrator handling."
      ]
    },
    {
      "name": "ticket setup",
      "category": "Support",
      "serverOnly": true,
      "description": "Create or reopen the interactive setup for a named ticket panel.",
      "prefix": ".ticket setup [panel_name=main]",
      "slash": "/ticket setup",
      "aliases": [],
      "searchAliases": [
        ".ticket setup",
        ".t setup",
        ".tickets setup"
      ],
      "parentAliases": [
        {
          "name": "ticket",
          "aliases": [
            "t",
            "tickets"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "panel_name",
          "type": "String",
          "required": false,
          "description": "Ticket panel name.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "main"
        }
      ],
      "example": ".ticket setup main",
      "concurrency": null,
      "notes": [
        "Setup: .ticket setup main, choose a category and support role, then .ticket panel main #support. Members open tickets with the panel button.",
        "New tickets use stored ownership records. The creator, configured support staff and administrators can use ticket controls. Close requires confirmation and permanently deletes the channel; no transcript export is provided.",
        "One open ticket per member, a 60-second creation cooldown and at most 50 tracked open tickets per server. Older tickets without ownership records need administrator handling."
      ]
    },
    {
      "name": "ticket status",
      "category": "Support",
      "serverOnly": true,
      "description": "Show detailed ticket status.",
      "prefix": ".ticket status [panel_name]",
      "slash": "/ticket status",
      "aliases": [],
      "searchAliases": [
        ".ticket status",
        ".t status",
        ".tickets status"
      ],
      "parentAliases": [
        {
          "name": "ticket",
          "aliases": [
            "t",
            "tickets"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "panel_name",
          "type": "String",
          "required": false,
          "description": "Ticket panel name.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".ticket status",
      "concurrency": null,
      "notes": [
        "Setup: .ticket setup main, choose a category and support role, then .ticket panel main #support. Members open tickets with the panel button.",
        "New tickets use stored ownership records. The creator, configured support staff and administrators can use ticket controls. Close requires confirmation and permanently deletes the channel; no transcript export is provided.",
        "One open ticket per member, a 60-second creation cooldown and at most 50 tracked open tickets per server. Older tickets without ownership records need administrator handling."
      ]
    },
    {
      "name": "ticket supportrole",
      "category": "Support",
      "serverOnly": true,
      "description": "View or set the support role for a named panel.",
      "prefix": ".ticket supportrole [panel_name=main] [role]",
      "slash": "/ticket supportrole",
      "aliases": [
        ".ticket support"
      ],
      "searchAliases": [
        ".ticket supportrole",
        ".ticket support",
        ".t supportrole",
        ".t support",
        ".tickets supportrole",
        ".tickets support"
      ],
      "parentAliases": [
        {
          "name": "ticket",
          "aliases": [
            "t",
            "tickets"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "panel_name",
          "type": "String",
          "required": false,
          "description": "Ticket panel name.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "main"
        },
        {
          "name": "role",
          "type": "Role",
          "required": false,
          "description": "Discord role to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".ticket supportrole main @Support",
      "concurrency": null,
      "notes": [
        "Setup: .ticket setup main, choose a category and support role, then .ticket panel main #support. Members open tickets with the panel button.",
        "New tickets use stored ownership records. The creator, configured support staff and administrators can use ticket controls. Close requires confirmation and permanently deletes the channel; no transcript export is provided.",
        "One open ticket per member, a 60-second creation cooldown and at most 50 tracked open tickets per server. Older tickets without ownership records need administrator handling."
      ]
    },
    {
      "name": "tickle",
      "category": "Fun & actions",
      "serverOnly": false,
      "description": "Send a tickle reaction to another member.",
      "prefix": ".tickle <member>",
      "slash": "/fun tickle",
      "aliases": [
        ".annoy"
      ],
      "searchAliases": [
        ".tickle",
        ".annoy"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".tickle @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "tictactoe",
      "category": "Minigames",
      "serverOnly": true,
      "description": "Play tic-tac-toe against skye or another member.",
      "prefix": ".tictactoe [opponent]",
      "slash": "/games tictactoe",
      "aliases": [
        ".ttt",
        ".tresenraya"
      ],
      "searchAliases": [
        ".tictactoe",
        ".ttt",
        ".tresenraya"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "games"
      ],
      "cooldown": "1 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "opponent",
          "type": "User",
          "required": false,
          "description": "Member to challenge.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".tictactoe",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "time",
      "category": "Utilities",
      "serverOnly": false,
      "description": "Show the current time in an IANA time zone.",
      "prefix": ".time [timezone]",
      "slash": "/utilities time",
      "aliases": [
        ".timezone",
        ".tz",
        ".hora"
      ],
      "searchAliases": [
        ".time",
        ".timezone",
        ".tz",
        ".hora"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "timezone",
          "type": "String",
          "required": false,
          "description": "IANA timezone such as Europe/London.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".time Europe/London",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "timeout",
      "category": "Safety",
      "serverOnly": true,
      "description": "Temporarily restrict a member for a bounded duration.",
      "prefix": ".timeout <member> <duration> [reason=No reason provided]",
      "slash": "/moderation timeout",
      "aliases": [
        ".mute",
        ".to",
        ".silence",
        ".silenciar"
      ],
      "searchAliases": [
        ".timeout",
        ".mute",
        ".to",
        ".silence",
        ".silenciar"
      ],
      "parentAliases": [],
      "access": "Moderate Members",
      "botPermissions": [
        "Moderate Members"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "duration",
          "type": "String",
          "required": true,
          "description": "Duration such as 30m, 2h, or 7d.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "reason",
          "type": "String",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "No reason provided"
        }
      ],
      "example": ".timeout @Member 10m",
      "concurrency": null,
      "notes": [
        "Use a duration from 1 second to 28 days. Discord administrators cannot be timed out."
      ]
    },
    {
      "name": "timestamp",
      "category": "Utilities",
      "serverOnly": false,
      "description": "Create Discord timestamp formats for a time or duration.",
      "prefix": ".timestamp [duration]",
      "slash": "/utilities timestamp",
      "aliases": [
        ".ts",
        ".discordtime",
        ".fecha"
      ],
      "searchAliases": [
        ".timestamp",
        ".ts",
        ".discordtime",
        ".fecha"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "duration",
          "type": "String",
          "required": false,
          "description": "Duration such as 30m, 2h, or 7d.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".timestamp 30m",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "topic",
      "category": "Channels",
      "serverOnly": true,
      "description": "Set or clear a text channel topic safely.",
      "prefix": ".topic [channel] <topic>",
      "slash": "/channels topic",
      "aliases": [
        ".channeltopic",
        ".settopic"
      ],
      "searchAliases": [
        ".topic",
        ".channeltopic",
        ".settopic"
      ],
      "parentAliases": [],
      "access": "Manage Channels",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "topic",
          "type": "String",
          "required": true,
          "description": "Value for topic.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".topic #general Community discussion",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "translate",
      "category": "Utilities",
      "serverOnly": false,
      "description": "Translate bounded text through the configured external provider.",
      "prefix": ".translate <language> [text]",
      "slash": "/utilities translate",
      "aliases": [
        ".tr",
        ".trans",
        ".translation",
        ".traducir"
      ],
      "searchAliases": [
        ".translate",
        ".tr",
        ".trans",
        ".translation",
        ".traducir"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 20s; scope: member",
      "parameters": [
        {
          "name": "language",
          "type": "String",
          "required": true,
          "description": "Language name/code, or source:target.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "text",
          "type": "String",
          "required": false,
          "description": "Text to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".translate en:es Hello world",
      "concurrency": null,
      "notes": [
        "Use a language name/code or source:target, such as en:es. You can reply to a message instead of passing text. Input: 1–500 UTF-8 bytes.",
        "Text and language choices are sent to MyMemory (Translated). Do not send secrets or sensitive personal information."
      ]
    },
    {
      "name": "trivia",
      "category": "Minigames",
      "serverOnly": true,
      "description": "Start a requester-only multiple-choice trivia question.",
      "prefix": ".trivia",
      "slash": "/fun trivia",
      "aliases": [
        ".quiz",
        ".question"
      ],
      "searchAliases": [
        ".trivia",
        ".quiz",
        ".question"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "games"
      ],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [],
      "example": ".trivia",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "truth",
      "category": "Fun & actions",
      "serverOnly": false,
      "description": "Receive a random truth prompt.",
      "prefix": ".truth",
      "slash": "/fun truth",
      "aliases": [
        ".truthquestion"
      ],
      "searchAliases": [
        ".truth",
        ".truthquestion"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "games"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".truth",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "unban",
      "category": "Safety",
      "serverOnly": true,
      "description": "Remove a ban by numeric Discord user ID.",
      "prefix": ".unban <user_id> [reason=No reason provided]",
      "slash": "/moderation unban",
      "aliases": [
        ".ub",
        ".pardon",
        ".unbanuser"
      ],
      "searchAliases": [
        ".unban",
        ".ub",
        ".pardon",
        ".unbanuser"
      ],
      "parentAliases": [],
      "access": "Ban Members",
      "botPermissions": [
        "Ban Members"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "user_id",
          "type": "Integer",
          "required": true,
          "description": "Numeric Discord user ID.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "reason",
          "type": "String",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "No reason provided"
        }
      ],
      "example": ".unban 1513500353658617926",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "unlock",
      "category": "Channels",
      "serverOnly": true,
      "description": "Restore the default messaging state saved by the lock command.",
      "prefix": ".unlock [reason=No reason provided]",
      "slash": "/moderation unlock",
      "aliases": [
        ".unlockchannel",
        ".channelunlock",
        ".openchannel",
        ".abrir"
      ],
      "searchAliases": [
        ".unlock",
        ".unlockchannel",
        ".channelunlock",
        ".openchannel",
        ".abrir"
      ],
      "parentAliases": [],
      "access": "Manage Channels",
      "botPermissions": [
        "Manage Channels"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "reason",
          "type": "String",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "No reason provided"
        }
      ],
      "example": ".unlock",
      "concurrency": null,
      "notes": [
        "Restores the overwrite saved by .lock. It does not grant permissions that were denied before the lock."
      ]
    },
    {
      "name": "unpin",
      "category": "Messages",
      "serverOnly": true,
      "description": "Remove a pin from an accessible message; restricted to message managers.",
      "prefix": ".unpin [message]",
      "slash": "/messages unpin",
      "aliases": [],
      "searchAliases": [
        ".unpin"
      ],
      "parentAliases": [],
      "access": "Manage Messages",
      "botPermissions": [
        "Manage Messages",
        "Read Message History"
      ],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "String",
          "required": false,
          "description": "Message text, ID, or Discord message link.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".unpin 1513500353658617926",
      "concurrency": "1 active invocation(s) per channel",
      "notes": [
        "Reply to a message or use its numeric ID/link. The message must be in the invocation channel; caller must be able to read its history. Cross-channel copying is blocked."
      ]
    },
    {
      "name": "unscramble",
      "category": "Minigames",
      "serverOnly": true,
      "description": "Submit an answer to the current word scramble.",
      "prefix": ".unscramble <answer>",
      "slash": "/fun unscramble",
      "aliases": [
        ".solveword",
        ".wordguess"
      ],
      "searchAliases": [
        ".unscramble",
        ".solveword",
        ".wordguess"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "games"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "answer",
          "type": "String",
          "required": true,
          "description": "Your answer.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".unscramble planet",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "untimeout",
      "category": "Safety",
      "serverOnly": true,
      "description": "Remove a member's active timeout.",
      "prefix": ".untimeout <member> [reason=No reason provided]",
      "slash": "/moderation untimeout",
      "aliases": [
        ".unmute",
        ".uto",
        ".unsilence",
        ".desilenciar"
      ],
      "searchAliases": [
        ".untimeout",
        ".unmute",
        ".uto",
        ".unsilence",
        ".desilenciar"
      ],
      "parentAliases": [],
      "access": "Moderate Members",
      "botPermissions": [
        "Moderate Members"
      ],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "reason",
          "type": "String",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "No reason provided"
        }
      ],
      "example": ".untimeout @Member",
      "concurrency": null,
      "notes": [
        "Caller and bot role hierarchies apply. Moderation records and reasons may be visible to authorized server staff; moderation notifications/log messages may also be sent."
      ]
    },
    {
      "name": "unwarn",
      "category": "Safety",
      "serverOnly": true,
      "description": "Remove one numbered warning from a member.",
      "prefix": ".unwarn <member> <warning_number>",
      "slash": "/moderation unwarn",
      "aliases": [
        ".delwarn",
        ".removewarn",
        ".warnremove"
      ],
      "searchAliases": [
        ".unwarn",
        ".delwarn",
        ".removewarn",
        ".warnremove"
      ],
      "parentAliases": [],
      "access": "Moderate Members",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "warning_number",
          "type": "Integer",
          "required": true,
          "description": "One-based warning number.",
          "choices": [],
          "minimum": 1,
          "maximum": 1000
        }
      ],
      "example": ".unwarn @Member 1",
      "concurrency": null,
      "notes": [
        "Caller and bot role hierarchies apply. Moderation records and reasons may be visible to authorized server staff; moderation notifications/log messages may also be sent."
      ]
    },
    {
      "name": "userinfo",
      "category": "Member Management",
      "serverOnly": true,
      "description": "Show account and server details for a member.",
      "prefix": ".userinfo [member]",
      "slash": "/members userinfo",
      "aliases": [
        ".user",
        ".whois",
        ".memberinfo",
        ".ui",
        ".profile",
        ".whoami",
        ".lookup",
        ".usuario",
        ".infousuario"
      ],
      "searchAliases": [
        ".userinfo",
        ".user",
        ".whois",
        ".memberinfo",
        ".ui",
        ".profile",
        ".whoami",
        ".lookup",
        ".usuario",
        ".infousuario"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": false,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".userinfo",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "uwuify",
      "category": "Fun & actions",
      "serverOnly": false,
      "description": "Transform bounded text while suppressing mentions.",
      "prefix": ".uwuify [text]",
      "slash": "/fun uwuify",
      "aliases": [
        ".uwu",
        ".owoify",
        ".uwuspeak"
      ],
      "searchAliases": [
        ".uwuify",
        ".uwu",
        ".owoify",
        ".uwuspeak"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: user",
      "parameters": [
        {
          "name": "text",
          "type": "String",
          "required": false,
          "description": "Text to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".uwuify",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "voiceban",
      "category": "Voice",
      "serverOnly": true,
      "description": "Confirmably deny a member access to one voice channel and disconnect them.",
      "prefix": ".voiceban <member> [channel] [reason=No reason provided]",
      "slash": "/voice voiceban",
      "aliases": [
        ".vcban"
      ],
      "searchAliases": [
        ".voiceban",
        ".vcban"
      ],
      "parentAliases": [],
      "access": "Manage Channels, Move Members",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 20s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "reason",
          "type": "String",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "No reason provided"
        }
      ],
      "example": ".voiceban @Member",
      "concurrency": null,
      "notes": [
        "Requires Manage Channels and Move Members, safe hierarchy, and confirmation. Denies Connect for this member in the selected channel and attempts to disconnect them."
      ]
    },
    {
      "name": "voicebitrate",
      "category": "Voice",
      "serverOnly": true,
      "description": "Set a bounded voice bitrate supported by the server boost level.",
      "prefix": ".voicebitrate <kbps> [channel]",
      "slash": "/voice voicebitrate",
      "aliases": [
        ".vcbitrate"
      ],
      "searchAliases": [
        ".voicebitrate",
        ".vcbitrate"
      ],
      "parentAliases": [],
      "access": "Manage Channels or temporary-room owner",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "kbps",
          "type": "Integer",
          "required": true,
          "description": "Voice bitrate in kilobits per second.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".voicebitrate 64",
      "concurrency": null,
      "notes": [
        "Requires effective Manage Channels or ownership of this tracked temporary VoiceMaster room. Owner privileges apply only to that room."
      ]
    },
    {
      "name": "voicecontrols",
      "category": "Voice",
      "serverOnly": true,
      "description": "Locate the existing VoiceMaster owner control panel.",
      "prefix": ".voicecontrols",
      "slash": "/voice voicecontrols",
      "aliases": [
        ".vcontrols",
        ".vccontrols"
      ],
      "searchAliases": [
        ".voicecontrols",
        ".vcontrols",
        ".vccontrols"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [],
      "example": ".voicecontrols",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "voicecreate",
      "category": "Voice",
      "serverOnly": true,
      "description": "Create one voice channel with per-user and server-wide abuse limits.",
      "prefix": ".voicecreate [category] <name>",
      "slash": "/voice voicecreate",
      "aliases": [
        ".vccreate"
      ],
      "searchAliases": [
        ".voicecreate",
        ".vccreate"
      ],
      "parentAliases": [],
      "access": "Manage Channels",
      "botPermissions": [
        "Manage Channels"
      ],
      "features": [],
      "cooldown": "1 use(s) per 20s; scope: member",
      "parameters": [
        {
          "name": "name",
          "type": "String",
          "required": true,
          "description": "Name to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "category",
          "type": "Channel",
          "required": false,
          "description": "Discord category to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".voicecreate Support Study room",
      "concurrency": "1 active invocation(s) per guild",
      "notes": []
    },
    {
      "name": "voiceinfo",
      "category": "Voice",
      "serverOnly": true,
      "description": "Show safe metadata and settings for a visible voice or stage channel.",
      "prefix": ".voiceinfo [channel]",
      "slash": "/voice voiceinfo",
      "aliases": [
        ".vinfo",
        ".vcinfo"
      ],
      "searchAliases": [
        ".voiceinfo",
        ".vinfo",
        ".vcinfo"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".voiceinfo",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "voiceinvite",
      "category": "Voice",
      "serverOnly": true,
      "description": "Create a bounded one-hour invite to a visible voice channel.",
      "prefix": ".voiceinvite [channel]",
      "slash": "/voice voiceinvite",
      "aliases": [
        ".vcinvite"
      ],
      "searchAliases": [
        ".voiceinvite",
        ".vcinvite"
      ],
      "parentAliases": [],
      "access": "Create Invite",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".voiceinvite",
      "concurrency": null,
      "notes": [
        "Both caller and bot need Create Invite in the target voice channel. The invite expires after one hour or five uses; it does not override channel permissions."
      ]
    },
    {
      "name": "voicekick",
      "category": "Voice",
      "serverOnly": true,
      "description": "Disconnect a member with effective permission and hierarchy checks.",
      "prefix": ".voicekick <member> [reason=No reason provided]",
      "slash": "/voice voicekick",
      "aliases": [
        ".vckick",
        ".disconnect"
      ],
      "searchAliases": [
        ".voicekick",
        ".vckick",
        ".disconnect"
      ],
      "parentAliases": [],
      "access": "Move Members",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "reason",
          "type": "String",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "No reason provided"
        }
      ],
      "example": ".voicekick @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "voiceleave",
      "category": "Voice",
      "serverOnly": true,
      "description": "Disconnect skye's active voice client from this server.",
      "prefix": ".voiceleave",
      "slash": "/voice voiceleave",
      "aliases": [
        ".vcleave",
        ".disconnectbot"
      ],
      "searchAliases": [
        ".voiceleave",
        ".vcleave",
        ".disconnectbot"
      ],
      "parentAliases": [],
      "access": "Move Members",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 15s; scope: guild",
      "parameters": [],
      "example": ".voiceleave",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "voicelimit",
      "category": "Voice",
      "serverOnly": true,
      "description": "Set a voice channel user limit as staff or its temporary-room owner.",
      "prefix": ".voicelimit <limit> [channel]",
      "slash": "/voice voicelimit",
      "aliases": [
        ".vclimit"
      ],
      "searchAliases": [
        ".voicelimit",
        ".vclimit"
      ],
      "parentAliases": [],
      "access": "Manage Channels or temporary-room owner",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "limit",
          "type": "Integer",
          "required": true,
          "description": "Maximum number allowed.",
          "choices": [],
          "minimum": 0,
          "maximum": 99
        },
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".voicelimit 5",
      "concurrency": null,
      "notes": [
        "Requires effective Manage Channels or ownership of this tracked temporary VoiceMaster room. Owner privileges apply only to that room."
      ]
    },
    {
      "name": "voicemaster",
      "category": "Voice",
      "serverOnly": true,
      "description": "Configure and inspect temporary member-owned voice rooms.",
      "prefix": ".voicemaster",
      "slash": "/voicemaster overview",
      "aliases": [
        ".vm",
        ".voicehub",
        ".tempvoice"
      ],
      "searchAliases": [
        ".voicemaster",
        ".vm",
        ".voicehub",
        ".tempvoice"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".voicemaster",
      "concurrency": null,
      "notes": [
        "Setup creates or uses a category and control panel, then a join-to-create lobby. Joining the lobby creates an owned temporary voice room; controls rename, limit, lock, hide and manage access.",
        "Empty rooms are removed and ownership can transfer to a remaining human member. Creation has a 30-second member cooldown and a 50-room cap. Category overwrites are preserved; owner controls are not server-wide permissions."
      ]
    },
    {
      "name": "voicemaster disable",
      "category": "Voice",
      "serverOnly": true,
      "description": "Disable new temporary-room creation while keeping saved settings.",
      "prefix": ".voicemaster disable",
      "slash": "/voicemaster disable",
      "aliases": [
        ".voicemaster off",
        ".voicemaster stop"
      ],
      "searchAliases": [
        ".voicemaster disable",
        ".voicemaster off",
        ".voicemaster stop",
        ".vm disable",
        ".vm off",
        ".vm stop",
        ".voicehub disable",
        ".voicehub off",
        ".voicehub stop",
        ".tempvoice disable",
        ".tempvoice off",
        ".tempvoice stop"
      ],
      "parentAliases": [
        {
          "name": "voicemaster",
          "aliases": [
            "vm",
            "voicehub",
            "tempvoice"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".voicemaster disable",
      "concurrency": null,
      "notes": [
        "Setup creates or uses a category and control panel, then a join-to-create lobby. Joining the lobby creates an owned temporary voice room; controls rename, limit, lock, hide and manage access.",
        "Empty rooms are removed and ownership can transfer to a remaining human member. Creation has a 30-second member cooldown and a 50-room cap. Category overwrites are preserved; owner controls are not server-wide permissions."
      ]
    },
    {
      "name": "voicemaster limit",
      "category": "Voice",
      "serverOnly": true,
      "description": "Set the default user limit for newly created temporary rooms.",
      "prefix": ".voicemaster limit <limit>",
      "slash": "/voicemaster limit",
      "aliases": [
        ".voicemaster defaultlimit",
        ".voicemaster setlimit"
      ],
      "searchAliases": [
        ".voicemaster limit",
        ".voicemaster defaultlimit",
        ".voicemaster setlimit",
        ".vm limit",
        ".vm defaultlimit",
        ".vm setlimit",
        ".voicehub limit",
        ".voicehub defaultlimit",
        ".voicehub setlimit",
        ".tempvoice limit",
        ".tempvoice defaultlimit",
        ".tempvoice setlimit"
      ],
      "parentAliases": [
        {
          "name": "voicemaster",
          "aliases": [
            "vm",
            "voicehub",
            "tempvoice"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "limit",
          "type": "Integer",
          "required": true,
          "description": "Maximum number allowed.",
          "choices": [],
          "minimum": 0,
          "maximum": 99
        }
      ],
      "example": ".voicemaster limit 5",
      "concurrency": null,
      "notes": [
        "Setup creates or uses a category and control panel, then a join-to-create lobby. Joining the lobby creates an owned temporary voice room; controls rename, limit, lock, hide and manage access.",
        "Empty rooms are removed and ownership can transfer to a remaining human member. Creation has a 30-second member cooldown and a 50-room cap. Category overwrites are preserved; owner controls are not server-wide permissions."
      ]
    },
    {
      "name": "voicemaster setup",
      "category": "Voice",
      "serverOnly": true,
      "description": "Configure and enable voicemaster.",
      "prefix": ".voicemaster setup [category] [panel_channel]",
      "slash": "/voicemaster setup",
      "aliases": [
        ".voicemaster create",
        ".voicemaster install",
        ".voicemaster configure",
        ".voicemaster enable",
        ".voicemaster on"
      ],
      "searchAliases": [
        ".voicemaster setup",
        ".voicemaster create",
        ".voicemaster install",
        ".voicemaster configure",
        ".voicemaster enable",
        ".voicemaster on",
        ".vm setup",
        ".vm create",
        ".vm install",
        ".vm configure",
        ".vm enable",
        ".vm on",
        ".voicehub setup",
        ".voicehub create",
        ".voicehub install",
        ".voicehub configure",
        ".voicehub enable",
        ".voicehub on",
        ".tempvoice setup",
        ".tempvoice create",
        ".tempvoice install",
        ".tempvoice configure",
        ".tempvoice enable",
        ".tempvoice on"
      ],
      "parentAliases": [
        {
          "name": "voicemaster",
          "aliases": [
            "vm",
            "voicehub",
            "tempvoice"
          ]
        }
      ],
      "access": "Administrator",
      "botPermissions": [
        "Embed Links",
        "Manage Channels",
        "Move Members",
        "Send Messages"
      ],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: guild",
      "parameters": [
        {
          "name": "category",
          "type": "Channel",
          "required": false,
          "description": "Discord category to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "panel_channel",
          "type": "Channel",
          "required": false,
          "description": "Text channel for the control panel.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".voicemaster setup",
      "concurrency": null,
      "notes": [
        "Setup creates or uses a category and control panel, then a join-to-create lobby. Joining the lobby creates an owned temporary voice room; controls rename, limit, lock, hide and manage access.",
        "Empty rooms are removed and ownership can transfer to a remaining human member. Creation has a 30-second member cooldown and a 50-room cap. Category overwrites are preserved; owner controls are not server-wide permissions."
      ]
    },
    {
      "name": "voicemembers",
      "category": "Voice",
      "serverOnly": true,
      "description": "Count members in voice channels visible to you.",
      "prefix": ".voicemembers",
      "slash": "/members voicemembers",
      "aliases": [
        ".invoice",
        ".voicecount"
      ],
      "searchAliases": [
        ".voicemembers",
        ".invoice",
        ".voicecount"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: guild",
      "parameters": [],
      "example": ".voicemembers",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "voicemute",
      "category": "Voice",
      "serverOnly": true,
      "description": "Server-mute a connected member with hierarchy checks.",
      "prefix": ".voicemute <member> [reason=No reason provided]",
      "slash": "/voice voicemute",
      "aliases": [
        ".vcmute"
      ],
      "searchAliases": [
        ".voicemute",
        ".vcmute"
      ],
      "parentAliases": [],
      "access": "Mute Members",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "reason",
          "type": "String",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "No reason provided"
        }
      ],
      "example": ".voicemute @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "voicerename",
      "category": "Voice",
      "serverOnly": true,
      "description": "Rename a voice channel as staff or its temporary-room owner.",
      "prefix": ".voicerename [channel] <name>",
      "slash": "/voice voicerename",
      "aliases": [
        ".vcrename"
      ],
      "searchAliases": [
        ".voicerename",
        ".vcrename"
      ],
      "parentAliases": [],
      "access": "Manage Channels or temporary-room owner",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "name",
          "type": "String",
          "required": true,
          "description": "Name to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".voicerename Study room",
      "concurrency": null,
      "notes": [
        "Requires effective Manage Channels or ownership of this tracked temporary VoiceMaster room. Owner privileges apply only to that room."
      ]
    },
    {
      "name": "voicestatus",
      "category": "Voice",
      "serverOnly": true,
      "description": "Summarize visible voice activity and temporary-room status.",
      "prefix": ".voicestatus",
      "slash": "/voice voicestatus",
      "aliases": [
        ".vcstatus",
        ".voiceoverview"
      ],
      "searchAliases": [
        ".voicestatus",
        ".vcstatus",
        ".voiceoverview"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: guild",
      "parameters": [],
      "example": ".voicestatus",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "voiceunban",
      "category": "Voice",
      "serverOnly": true,
      "description": "Restore inherited connect access for a hierarchy-safe member.",
      "prefix": ".voiceunban <member> [channel]",
      "slash": "/voice voiceunban",
      "aliases": [
        ".vcunban"
      ],
      "searchAliases": [
        ".voiceunban",
        ".vcunban"
      ],
      "parentAliases": [],
      "access": "Manage Channels",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".voiceunban @Member",
      "concurrency": null,
      "notes": [
        "Restores inherited Connect access, rather than forcing access through other denials."
      ]
    },
    {
      "name": "voiceunmute",
      "category": "Voice",
      "serverOnly": true,
      "description": "Remove a connected member's server mute safely.",
      "prefix": ".voiceunmute <member> [reason=No reason provided]",
      "slash": "/voice voiceunmute",
      "aliases": [
        ".vcunmute"
      ],
      "searchAliases": [
        ".voiceunmute",
        ".vcunmute"
      ],
      "parentAliases": [],
      "access": "Mute Members",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "reason",
          "type": "String",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "No reason provided"
        }
      ],
      "example": ".voiceunmute @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "voiceusers",
      "category": "Voice",
      "serverOnly": true,
      "description": "List bounded participant and voice-state details in one visible channel.",
      "prefix": ".voiceusers [channel]",
      "slash": "/voice voiceusers",
      "aliases": [
        ".vcusers",
        ".voicepeople"
      ],
      "searchAliases": [
        ".voiceusers",
        ".vcusers",
        ".voicepeople"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "Channel",
          "required": false,
          "description": "Discord channel to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".voiceusers",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "warn",
      "category": "Safety",
      "serverOnly": true,
      "description": "Store a persistent warning; warnings do not expire automatically.",
      "prefix": ".warn <member> [reason=No reason provided]",
      "slash": "/moderation warn",
      "aliases": [
        ".w",
        ".warning",
        ".advertir"
      ],
      "searchAliases": [
        ".warn",
        ".w",
        ".warning",
        ".advertir"
      ],
      "parentAliases": [],
      "access": "Moderate Members",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        },
        {
          "name": "reason",
          "type": "String",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "choices": [],
          "minimum": null,
          "maximum": null,
          "default": "No reason provided"
        }
      ],
      "example": ".warn @Member Repeated spam",
      "concurrency": null,
      "notes": [
        "Caller and bot role hierarchies apply. Moderation records and reasons may be visible to authorized server staff; moderation notifications/log messages may also be sent."
      ]
    },
    {
      "name": "warnings",
      "category": "Safety",
      "serverOnly": true,
      "description": "List a member's recent saved warnings.",
      "prefix": ".warnings <member>",
      "slash": "/moderation warnings",
      "aliases": [
        ".warns",
        ".infractions",
        ".advertencias"
      ],
      "searchAliases": [
        ".warnings",
        ".warns",
        ".infractions",
        ".advertencias"
      ],
      "parentAliases": [],
      "access": "Moderate Members",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".warnings @Member",
      "concurrency": null,
      "notes": [
        "Caller and bot role hierarchies apply. Moderation records and reasons may be visible to authorized server staff; moderation notifications/log messages may also be sent."
      ]
    },
    {
      "name": "wave",
      "category": "Fun & actions",
      "serverOnly": false,
      "description": "Send a wave reaction to another member.",
      "prefix": ".wave <member>",
      "slash": "/fun wave",
      "aliases": [
        ".hello",
        ".greet"
      ],
      "searchAliases": [
        ".wave",
        ".hello",
        ".greet"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "User",
          "required": true,
          "description": "Server member to use.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".wave @Member",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "weather",
      "category": "Utilities",
      "serverOnly": false,
      "description": "Show a bounded current weather lookup for a location.",
      "prefix": ".weather <location>",
      "slash": "/utilities weather",
      "aliases": [
        ".wx",
        ".forecast",
        ".wthr",
        ".clima"
      ],
      "searchAliases": [
        ".weather",
        ".wx",
        ".forecast",
        ".wthr",
        ".clima"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "location",
          "type": "String",
          "required": true,
          "description": "City, region, or postal code.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".weather London",
      "concurrency": null,
      "notes": [
        "The location query is sent to Open-Meteo geocoding; coordinates are then used for the weather lookup. Prefer a city over a private street address."
      ]
    },
    {
      "name": "wordle",
      "category": "Minigames",
      "serverOnly": true,
      "description": "Start a Wordle-style game or submit a five-letter guess.",
      "prefix": ".wordle [guess]",
      "slash": "/games wordle",
      "aliases": [
        ".wordlegame"
      ],
      "searchAliases": [
        ".wordle",
        ".wordlegame"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "games"
      ],
      "cooldown": "3 use(s) per 8s; scope: member",
      "parameters": [
        {
          "name": "guess",
          "type": "String",
          "required": false,
          "description": "Your guess.",
          "choices": [],
          "minimum": null,
          "maximum": null
        }
      ],
      "example": ".wordle crane",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "work",
      "category": "Progression",
      "serverOnly": true,
      "description": "Earn a bounded random economy reward.",
      "prefix": ".work",
      "slash": "/economy work",
      "aliases": [
        ".job",
        ".earn",
        ".trabajar"
      ],
      "searchAliases": [
        ".work",
        ".job",
        ".earn",
        ".trabajar"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "economy"
      ],
      "cooldown": "1 use(s) per 30s; scope: member",
      "parameters": [],
      "example": ".work",
      "concurrency": null,
      "notes": []
    },
    {
      "name": "wouldyourather",
      "category": "Fun & actions",
      "serverOnly": false,
      "description": "Receive a random would-you-rather prompt.",
      "prefix": ".wouldyourather",
      "slash": "/fun wouldyourather",
      "aliases": [
        ".wyr",
        ".rather"
      ],
      "searchAliases": [
        ".wouldyourather",
        ".wyr",
        ".rather"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "games"
      ],
      "cooldown": "1 use per 2s per server member (startup default)",
      "parameters": [],
      "example": ".wouldyourather",
      "concurrency": null,
      "notes": []
    }
  ]
};
