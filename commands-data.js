// Generated offline from the registered bot commands.
window.SKYE_DOCS = {
  "updated": "2026-10-28",
  "count": 364,
  "commands": [
    {
      "name": "2048",
      "category": "Games",
      "serverOnly": true,
      "description": "Play a requester-only interactive 2048 board.",
      "prefix": ".2048",
      "slash": "/games 2048",
      "aliases": [
        ".game2048",
        ".twentyfortyeight"
      ],
      "searchAliases": [
        "game2048",
        "twentyfortyeight"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 15s; scope: member",
      "parameters": [],
      "example": ".2048",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "accountage",
      "category": "Members",
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
        "accountcreated",
        "createdat",
        "userage"
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
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".accountage [user]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding."
      ]
    },
    {
      "name": "afk",
      "category": "Utility",
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
        "away",
        "brb",
        "gone"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "reason",
          "type": "text",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "AFK"
        }
      ],
      "example": ".afk [reason=AFK]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "announce",
      "category": "Messages & Embeds",
      "serverOnly": true,
      "description": "Post a rate-limited, mention-safe skye-themed announcement.",
      "prefix": ".announce <message>",
      "slash": "/messages announce",
      "aliases": [
        ".announcement"
      ],
      "searchAliases": [
        "announcement"
      ],
      "parentAliases": [],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Embed Links (channel)",
        "Send Messages (channel)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "text",
          "required": true,
          "description": "Message text, ID, or Discord message link.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".announce <message>",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "antinuke",
      "category": "Security",
      "serverOnly": true,
      "description": "Configure audit-log based protection against destructive administrator actions.",
      "prefix": ".antinuke",
      "slash": "/antinuke overview",
      "aliases": [
        ".an",
        ".nukeprotection"
      ],
      "searchAliases": [
        "an",
        "nukeprotection"
      ],
      "parentAliases": [],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".antinuke",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke action",
      "category": "Security",
      "serverOnly": true,
      "description": "Set the default anti-nuke response.",
      "prefix": ".antinuke action <response>",
      "slash": "/antinuke action",
      "aliases": [
        ".antinuke defaultaction"
      ],
      "searchAliases": [
        "defaultaction"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "response",
          "type": "text",
          "required": true,
          "description": "Response or enforcement action.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "log",
            "timeout",
            "kick",
            "ban"
          ]
        }
      ],
      "example": ".antinuke action <response>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke cooldown",
      "category": "Security",
      "serverOnly": true,
      "description": "Set the persistent per-actor response cooldown across all anti-nuke rules.",
      "prefix": ".antinuke cooldown <seconds>",
      "slash": "/antinuke cooldown",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "seconds",
          "type": "integer (minimum 10, maximum 300)",
          "required": true,
          "description": "Duration in seconds.",
          "minimum": 10,
          "maximum": 300,
          "choices": []
        }
      ],
      "example": ".antinuke cooldown 20",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke disable",
      "category": "Security",
      "serverOnly": true,
      "description": "Disable antinuke while preserving its settings.",
      "prefix": ".antinuke disable",
      "slash": "/antinuke disable",
      "aliases": [
        ".antinuke off"
      ],
      "searchAliases": [
        "off"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".antinuke disable",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke escalation",
      "category": "Security",
      "serverOnly": true,
      "description": "Owner-approved response ladder: off or log,timeout,kick,ban; repeated incidents advance within the window.",
      "prefix": ".antinuke escalation <steps> [seconds=300]",
      "slash": "/antinuke escalation",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "steps",
          "type": "text",
          "required": true,
          "description": "off or increasing comma-separated responses: log,timeout,kick,ban; owner approval required.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "seconds",
          "type": "integer (minimum 60, maximum 3600)",
          "required": false,
          "description": "Duration in seconds.",
          "minimum": 60,
          "maximum": 3600,
          "choices": [],
          "default": "300"
        }
      ],
      "example": ".antinuke escalation log,timeout,kick 300",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Additional authorization check: antinuke_access",
        "Current server owner only.",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke fallback",
      "category": "Security",
      "serverOnly": true,
      "description": "Manage the antinuke fallback setting.",
      "prefix": ".antinuke fallback <action>",
      "slash": "/antinuke fallback",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "action",
          "type": "text",
          "required": true,
          "description": "Action to perform.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".antinuke fallback <action>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke ownerlock",
      "category": "Security",
      "serverOnly": true,
      "description": "Restrict anti-nuke configuration to the server owner or administrators.",
      "prefix": ".antinuke ownerlock <state>",
      "slash": "/antinuke ownerlock",
      "aliases": [
        ".antinuke configlock"
      ],
      "searchAliases": [
        "configlock"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "state",
          "type": "text",
          "required": true,
          "description": "Enable or disable the setting.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "on",
            "off"
          ]
        }
      ],
      "example": ".antinuke ownerlock <state>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke response",
      "category": "Security",
      "serverOnly": true,
      "description": "Override the response for one anti-nuke action.",
      "prefix": ".antinuke response <action> <response>",
      "slash": "/antinuke response",
      "aliases": [
        ".antinuke ruleaction"
      ],
      "searchAliases": [
        "ruleaction"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "action",
          "type": "text",
          "required": true,
          "description": "Action to perform.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "channel_delete",
            "channel_create",
            "channel_update",
            "role_delete",
            "role_create",
            "role_update",
            "webhook",
            "ban",
            "kick",
            "bot_add",
            "member_role_update",
            "guild_update",
            "emoji_delete",
            "sticker_delete",
            "thread_create",
            "thread_delete",
            "unban",
            "member_prune",
            "invite_delete",
            "automod_rule_delete"
          ]
        },
        {
          "name": "response",
          "type": "text",
          "required": true,
          "description": "Response or enforcement action.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "log",
            "timeout",
            "kick",
            "ban"
          ]
        }
      ],
      "example": ".antinuke response <action> <response>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke rule",
      "category": "Security",
      "serverOnly": true,
      "description": "Update one anti-nuke action threshold.",
      "prefix": ".antinuke rule <action> <limit> [seconds=10]",
      "slash": "/antinuke rule",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "action",
          "type": "text",
          "required": true,
          "description": "Action to perform.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "channel_delete",
            "channel_create",
            "channel_update",
            "role_delete",
            "role_create",
            "role_update",
            "webhook",
            "ban",
            "kick",
            "bot_add",
            "member_role_update",
            "guild_update",
            "emoji_delete",
            "sticker_delete",
            "thread_create",
            "thread_delete",
            "unban",
            "member_prune",
            "invite_delete",
            "automod_rule_delete"
          ]
        },
        {
          "name": "limit",
          "type": "integer (minimum 1, maximum 20)",
          "required": true,
          "description": "Maximum number allowed.",
          "minimum": 1,
          "maximum": 20,
          "choices": []
        },
        {
          "name": "seconds",
          "type": "integer (minimum 3, maximum 120)",
          "required": false,
          "description": "Duration in seconds.",
          "minimum": 3,
          "maximum": 120,
          "choices": [],
          "default": "10"
        }
      ],
      "example": ".antinuke rule <action> <limit> [seconds=10]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke rules",
      "category": "Security",
      "serverOnly": true,
      "description": "List configured protection rules.",
      "prefix": ".antinuke rules",
      "slash": "/antinuke rules",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "antinuke",
          "aliases": [
            "an",
            "nukeprotection"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".antinuke rules",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke setup",
      "category": "Security",
      "serverOnly": true,
      "description": "Configure and enable antinuke.",
      "prefix": ".antinuke setup <channel>",
      "slash": "/antinuke setup",
      "aliases": [
        ".antinuke enable",
        ".antinuke on"
      ],
      "searchAliases": [
        "enable",
        "on"
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
      "access": "Administrator (server)",
      "botPermissions": [
        "Embed Links (server)",
        "Send Messages (server)",
        "View Audit Log (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "channel",
          "type": "TextChannel",
          "required": true,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".antinuke setup <channel>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke threshold",
      "category": "Security",
      "serverOnly": true,
      "description": "List all independent anti-nuke thresholds.",
      "prefix": ".antinuke threshold",
      "slash": "/antinuke threshold overview",
      "aliases": [
        ".antinuke thresholds",
        ".antinuke limits"
      ],
      "searchAliases": [
        "thresholds",
        "limits"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".antinuke threshold",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke threshold disable",
      "category": "Security",
      "serverOnly": true,
      "description": "Disable antinuke threshold while preserving its settings.",
      "prefix": ".antinuke threshold disable <action>",
      "slash": "/antinuke threshold disable",
      "aliases": [
        ".antinuke threshold off"
      ],
      "searchAliases": [
        "off"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "action",
          "type": "text",
          "required": true,
          "description": "Action to perform.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "channel_delete",
            "channel_create",
            "channel_update",
            "role_delete",
            "role_create",
            "role_update",
            "webhook",
            "ban",
            "kick",
            "bot_add",
            "member_role_update",
            "guild_update",
            "emoji_delete",
            "sticker_delete",
            "thread_create",
            "thread_delete",
            "unban",
            "member_prune",
            "invite_delete",
            "automod_rule_delete"
          ]
        }
      ],
      "example": ".antinuke threshold disable <action>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke threshold enable",
      "category": "Security",
      "serverOnly": true,
      "description": "Enable antinuke threshold.",
      "prefix": ".antinuke threshold enable <action>",
      "slash": "/antinuke threshold enable",
      "aliases": [
        ".antinuke threshold on"
      ],
      "searchAliases": [
        "on"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "action",
          "type": "text",
          "required": true,
          "description": "Action to perform.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "channel_delete",
            "channel_create",
            "channel_update",
            "role_delete",
            "role_create",
            "role_update",
            "webhook",
            "ban",
            "kick",
            "bot_add",
            "member_role_update",
            "guild_update",
            "emoji_delete",
            "sticker_delete",
            "thread_create",
            "thread_delete",
            "unban",
            "member_prune",
            "invite_delete",
            "automod_rule_delete"
          ]
        }
      ],
      "example": ".antinuke threshold enable <action>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke threshold reset",
      "category": "Security",
      "serverOnly": true,
      "description": "Restore one or all anti-nuke thresholds to safe defaults.",
      "prefix": ".antinuke threshold reset [action]",
      "slash": "/antinuke threshold reset",
      "aliases": [
        ".antinuke threshold defaults"
      ],
      "searchAliases": [
        "defaults"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "action",
          "type": "text",
          "required": false,
          "description": "Action to perform.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".antinuke threshold reset [action]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke threshold set",
      "category": "Security",
      "serverOnly": true,
      "description": "Update a setting in antinuke threshold.",
      "prefix": ".antinuke threshold set <action> <limit> [seconds=10]",
      "slash": "/antinuke threshold set",
      "aliases": [
        ".antinuke threshold edit",
        ".antinuke threshold change"
      ],
      "searchAliases": [
        "edit",
        "change"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "action",
          "type": "text",
          "required": true,
          "description": "Action to perform.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "channel_delete",
            "channel_create",
            "channel_update",
            "role_delete",
            "role_create",
            "role_update",
            "webhook",
            "ban",
            "kick",
            "bot_add",
            "member_role_update",
            "guild_update",
            "emoji_delete",
            "sticker_delete",
            "thread_create",
            "thread_delete",
            "unban",
            "member_prune",
            "invite_delete",
            "automod_rule_delete"
          ]
        },
        {
          "name": "limit",
          "type": "integer (minimum 1, maximum 20)",
          "required": true,
          "description": "Maximum number allowed.",
          "minimum": 1,
          "maximum": 20,
          "choices": []
        },
        {
          "name": "seconds",
          "type": "integer (minimum 3, maximum 120)",
          "required": false,
          "description": "Duration in seconds.",
          "minimum": 3,
          "maximum": 120,
          "choices": [],
          "default": "10"
        }
      ],
      "example": ".antinuke threshold set <action> <limit> [seconds=10]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke timeout",
      "category": "Security",
      "serverOnly": true,
      "description": "Set the bounded automatic timeout duration.",
      "prefix": ".antinuke timeout <minutes>",
      "slash": "/antinuke timeout",
      "aliases": [
        ".antinuke duration"
      ],
      "searchAliases": [
        "duration"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "minutes",
          "type": "integer (minimum 1, maximum 40320)",
          "required": true,
          "description": "Duration in minutes.",
          "minimum": 1,
          "maximum": 40320,
          "choices": []
        }
      ],
      "example": ".antinuke timeout <minutes>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke trust",
      "category": "Security",
      "serverOnly": true,
      "description": "List trusted anti-nuke users and roles.",
      "prefix": ".antinuke trust",
      "slash": "/antinuke trust overview",
      "aliases": [
        ".antinuke trusted"
      ],
      "searchAliases": [
        "trusted"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".antinuke trust",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke trust add",
      "category": "Security",
      "serverOnly": true,
      "description": "Add an entry to antinuke trust.",
      "prefix": ".antinuke trust add <member>",
      "slash": "/antinuke trust add",
      "aliases": [
        ".antinuke trust user"
      ],
      "searchAliases": [
        "user"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".antinuke trust add <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke trust remove",
      "category": "Security",
      "serverOnly": true,
      "description": "Remove an entry from antinuke trust.",
      "prefix": ".antinuke trust remove <member>",
      "slash": "/antinuke trust remove",
      "aliases": [
        ".antinuke trust delete"
      ],
      "searchAliases": [
        "delete"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".antinuke trust remove <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke trust roleadd",
      "category": "Security",
      "serverOnly": true,
      "description": "Add a trusted role exemption.",
      "prefix": ".antinuke trust roleadd <role>",
      "slash": "/antinuke trust roleadd",
      "aliases": [
        ".antinuke trust addrole"
      ],
      "searchAliases": [
        "addrole"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".antinuke trust roleadd <role>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antinuke trust roleremove",
      "category": "Security",
      "serverOnly": true,
      "description": "Remove a trusted role exemption.",
      "prefix": ".antinuke trust roleremove <role>",
      "slash": "/antinuke trust roleremove",
      "aliases": [
        ".antinuke trust removerole"
      ],
      "searchAliases": [
        "removerole"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".antinuke trust roleremove <role>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Additional authorization check: antinuke_access",
        "Server only",
        "Server owner required while owner-lock is enabled (default); owner-only fallback approval."
      ]
    },
    {
      "name": "antiraid",
      "category": "Security",
      "serverOnly": true,
      "description": "Configure join-burst and new-account raid protection.",
      "prefix": ".antiraid",
      "slash": "/antiraid overview",
      "aliases": [
        ".ar",
        ".raidprotection"
      ],
      "searchAliases": [
        "ar",
        "raidprotection"
      ],
      "parentAliases": [],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".antiraid",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "antiraid action",
      "category": "Security",
      "serverOnly": true,
      "description": "Choose the automatic anti-raid response.",
      "prefix": ".antiraid action <response>",
      "slash": "/antiraid action",
      "aliases": [
        ".antiraid response"
      ],
      "searchAliases": [
        "response"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "response",
          "type": "text",
          "required": true,
          "description": "Response or enforcement action.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "log",
            "timeout",
            "kick",
            "ban",
            "quarantine"
          ]
        }
      ],
      "example": ".antiraid action <response>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "antiraid allow",
      "category": "Security",
      "serverOnly": true,
      "description": "List accounts exempt from anti-raid enforcement.",
      "prefix": ".antiraid allow",
      "slash": "/antiraid allow overview",
      "aliases": [
        ".antiraid allowlist",
        ".antiraid whitelist"
      ],
      "searchAliases": [
        "allowlist",
        "whitelist"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".antiraid allow",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "antiraid allow add",
      "category": "Security",
      "serverOnly": true,
      "description": "Add an entry to antiraid allow.",
      "prefix": ".antiraid allow add <user>",
      "slash": "/antiraid allow add",
      "aliases": [],
      "searchAliases": [],
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "user",
          "type": "User",
          "required": true,
          "description": "Discord user to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".antiraid allow add <user>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "antiraid allow remove",
      "category": "Security",
      "serverOnly": true,
      "description": "Remove an entry from antiraid allow.",
      "prefix": ".antiraid allow remove <user_id>",
      "slash": "/antiraid allow remove",
      "aliases": [
        ".antiraid allow delete"
      ],
      "searchAliases": [
        "delete"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "user_id",
          "type": "user ID or mention",
          "required": true,
          "description": "Discord user ID or user mention.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".antiraid allow remove 123456789012345678",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "antiraid bots",
      "category": "Security",
      "serverOnly": true,
      "description": "Configure whether bot accounts are included.",
      "prefix": ".antiraid bots <state>",
      "slash": "/antiraid bots",
      "aliases": [
        ".antiraid includebots"
      ],
      "searchAliases": [
        "includebots"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "state",
          "type": "text",
          "required": true,
          "description": "Enable or disable the setting.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "on",
            "off"
          ]
        }
      ],
      "example": ".antiraid bots <state>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "antiraid budget",
      "category": "Security",
      "serverOnly": true,
      "description": "Cap automatic raid punishment attempts per server per minute; excess incidents alert only.",
      "prefix": ".antiraid budget <limit>",
      "slash": "/antiraid budget",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "limit",
          "type": "integer (minimum 1, maximum 30)",
          "required": true,
          "description": "Maximum number allowed.",
          "minimum": 1,
          "maximum": 30,
          "choices": []
        }
      ],
      "example": ".antiraid budget 10",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "antiraid cooldown",
      "category": "Security",
      "serverOnly": true,
      "description": "Set the persistent per-member punishment cooldown; detection remains active.",
      "prefix": ".antiraid cooldown <seconds>",
      "slash": "/antiraid cooldown",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "seconds",
          "type": "integer (minimum 10, maximum 3600)",
          "required": true,
          "description": "Duration in seconds.",
          "minimum": 10,
          "maximum": 3600,
          "choices": []
        }
      ],
      "example": ".antiraid cooldown 60",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "antiraid disable",
      "category": "Security",
      "serverOnly": true,
      "description": "Disable antiraid while preserving its settings.",
      "prefix": ".antiraid disable",
      "slash": "/antiraid disable",
      "aliases": [
        ".antiraid off"
      ],
      "searchAliases": [
        "off"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".antiraid disable",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "antiraid minage",
      "category": "Security",
      "serverOnly": true,
      "description": "Set the minimum account age used by anti-raid.",
      "prefix": ".antiraid minage <hours>",
      "slash": "/antiraid minage",
      "aliases": [
        ".antiraid accountage"
      ],
      "searchAliases": [
        "accountage"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "hours",
          "type": "integer (minimum 0, maximum 2160)",
          "required": true,
          "description": "Value for hours.",
          "minimum": 0,
          "maximum": 2160,
          "choices": []
        }
      ],
      "example": ".antiraid minage <hours>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "antiraid mode",
      "category": "Security",
      "serverOnly": true,
      "description": "Use auto to enable automatic raid mode, on to enter now, or off to recover. Join protection remains enabled.",
      "prefix": ".antiraid mode <state>",
      "slash": "/antiraid mode",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "state",
          "type": "text",
          "required": true,
          "description": "Enable or disable the setting.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "auto",
            "on",
            "off"
          ]
        }
      ],
      "example": ".antiraid mode auto",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "antiraid quarantine",
      "category": "Security",
      "serverOnly": true,
      "description": "Set or clear the safe anti-raid quarantine role.",
      "prefix": ".antiraid quarantine [role]",
      "slash": "/antiraid quarantine",
      "aliases": [
        ".antiraid role"
      ],
      "searchAliases": [
        "role"
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
      "access": "Administrator (server)",
      "botPermissions": [
        "Manage Roles (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "role",
          "type": "Role",
          "required": false,
          "description": "Discord role to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".antiraid quarantine [role]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "antiraid recovery",
      "category": "Security",
      "serverOnly": true,
      "description": "Set quiet seconds before raid mode automatically ends (checked every 20 seconds).",
      "prefix": ".antiraid recovery <seconds>",
      "slash": "/antiraid recovery",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "seconds",
          "type": "integer (minimum 30, maximum 3600)",
          "required": true,
          "description": "Duration in seconds.",
          "minimum": 30,
          "maximum": 3600,
          "choices": []
        }
      ],
      "example": ".antiraid recovery 120",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "antiraid recoveryreview",
      "category": "Security",
      "serverOnly": true,
      "description": "After manually reviewing server verification, keep its current level and close any unresolved recovery record. Never lowers verification.",
      "prefix": ".antiraid recoveryreview",
      "slash": "/antiraid recoveryreview",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".antiraid recoveryreview",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "antiraid rejoin",
      "category": "Security",
      "serverOnly": true,
      "description": "Detect repeated membership sessions by one account. 0 disables; otherwise use at least 2 joins.",
      "prefix": ".antiraid rejoin <limit> [seconds=300]",
      "slash": "/antiraid rejoin",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "limit",
          "type": "integer (minimum 0, maximum 20)",
          "required": true,
          "description": "Maximum number allowed.",
          "minimum": 0,
          "maximum": 20,
          "choices": []
        },
        {
          "name": "seconds",
          "type": "integer (minimum 10, maximum 3600)",
          "required": false,
          "description": "Duration in seconds.",
          "minimum": 10,
          "maximum": 3600,
          "choices": [],
          "default": "300"
        }
      ],
      "example": ".antiraid rejoin 3 300",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "antiraid release",
      "category": "Security",
      "serverOnly": true,
      "description": "Manage the antiraid release setting.",
      "prefix": ".antiraid release <member>",
      "slash": "/antiraid release",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".antiraid release <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "antiraid setup",
      "category": "Security",
      "serverOnly": true,
      "description": "Configure and enable antiraid.",
      "prefix": ".antiraid setup <channel>",
      "slash": "/antiraid setup",
      "aliases": [
        ".antiraid enable",
        ".antiraid on"
      ],
      "searchAliases": [
        "enable",
        "on"
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
      "access": "Administrator (server)",
      "botPermissions": [
        "Embed Links (server)",
        "Send Messages (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "channel",
          "type": "TextChannel",
          "required": true,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".antiraid setup <channel>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "antiraid spam",
      "category": "Security",
      "serverOnly": true,
      "description": "Detect coordinated newcomer spam by message counts, distinct members and individual activity; content is not stored.",
      "prefix": ".antiraid spam <state> [messages=20] [seconds=10] [members=3] [per_member=6] [recent_minutes=10]",
      "slash": "/antiraid spam",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "state",
          "type": "text",
          "required": true,
          "description": "Enable or disable the setting.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "on",
            "off"
          ]
        },
        {
          "name": "messages",
          "type": "integer (minimum 3, maximum 200)",
          "required": false,
          "description": "Value for messages.",
          "minimum": 3,
          "maximum": 200,
          "choices": [],
          "default": "20"
        },
        {
          "name": "seconds",
          "type": "integer (minimum 3, maximum 120)",
          "required": false,
          "description": "Duration in seconds.",
          "minimum": 3,
          "maximum": 120,
          "choices": [],
          "default": "10"
        },
        {
          "name": "members",
          "type": "integer (minimum 2, maximum 50)",
          "required": false,
          "description": "Minimum distinct eligible newcomers in the message burst.",
          "minimum": 2,
          "maximum": 50,
          "choices": [],
          "default": "3"
        },
        {
          "name": "per_member",
          "type": "integer (minimum 3, maximum 50)",
          "required": false,
          "description": "Minimum own messages before an eligible newcomer can be punished.",
          "minimum": 3,
          "maximum": 50,
          "choices": [],
          "default": "6"
        },
        {
          "name": "recent_minutes",
          "type": "integer (minimum 1, maximum 1440)",
          "required": false,
          "description": "Only consider members who joined within this many minutes.",
          "minimum": 1,
          "maximum": 1440,
          "choices": [],
          "default": "10"
        }
      ],
      "example": ".antiraid spam on 20 10 3 6 10",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "antiraid threshold",
      "category": "Security",
      "serverOnly": true,
      "description": "View or change the enforcement threshold.",
      "prefix": ".antiraid threshold <joins> [seconds=10]",
      "slash": "/antiraid threshold",
      "aliases": [
        ".antiraid limit"
      ],
      "searchAliases": [
        "limit"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "joins",
          "type": "integer (minimum 3, maximum 100)",
          "required": true,
          "description": "Value for joins.",
          "minimum": 3,
          "maximum": 100,
          "choices": []
        },
        {
          "name": "seconds",
          "type": "integer (minimum 3, maximum 120)",
          "required": false,
          "description": "Duration in seconds.",
          "minimum": 3,
          "maximum": 120,
          "choices": [],
          "default": "10"
        }
      ],
      "example": ".antiraid threshold <joins> [seconds=10]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "antiraid timeout",
      "category": "Security",
      "serverOnly": true,
      "description": "Set the bounded automatic timeout duration.",
      "prefix": ".antiraid timeout <minutes>",
      "slash": "/antiraid timeout",
      "aliases": [
        ".antiraid duration"
      ],
      "searchAliases": [
        "duration"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "minutes",
          "type": "integer (minimum 1, maximum 40320)",
          "required": true,
          "description": "Duration in minutes.",
          "minimum": 1,
          "maximum": 40320,
          "choices": []
        }
      ],
      "example": ".antiraid timeout <minutes>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "antiraid verification",
      "category": "Security",
      "serverOnly": true,
      "description": "Temporarily raise verification: off/low/medium/high/highest. Bot needs Manage Server and View Audit Log for safe recovery.",
      "prefix": ".antiraid verification <level>",
      "slash": "/antiraid verification",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "level",
          "type": "text",
          "required": true,
          "description": "Level or verification setting.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "off",
            "low",
            "medium",
            "high",
            "highest"
          ]
        }
      ],
      "example": ".antiraid verification high",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "antiraid young",
      "category": "Security",
      "serverOnly": true,
      "description": "Detect distinct young-account joins; 0 disables, otherwise at least 3. Age comes from antiraid minage.",
      "prefix": ".antiraid young <limit> [seconds=30]",
      "slash": "/antiraid young",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "antiraid",
          "aliases": [
            "ar",
            "raidprotection"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "limit",
          "type": "integer (minimum 0, maximum 100)",
          "required": true,
          "description": "Maximum number allowed.",
          "minimum": 0,
          "maximum": 100,
          "choices": []
        },
        {
          "name": "seconds",
          "type": "integer (minimum 3, maximum 120)",
          "required": false,
          "description": "Duration in seconds.",
          "minimum": 3,
          "maximum": 120,
          "choices": [],
          "default": "30"
        }
      ],
      "example": ".antiraid young 5 30",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
        "archivechannel",
        "channelarchive"
      ],
      "parentAliases": [],
      "access": "Text channel: Manage Channels + Manage Roles; thread: Manage Threads",
      "botPermissions": [
        "Text channel: Manage Channels + Manage Roles; thread: Manage Threads"
      ],
      "features": [],
      "cooldown": "1 use(s) per 20s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "TextChannel or Thread",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".archive [channel]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "attachments",
      "category": "Messages & Embeds",
      "serverOnly": true,
      "description": "List bounded attachment metadata and links from an accessible message.",
      "prefix": ".attachments [message]",
      "slash": "/messages attachments",
      "aliases": [
        ".messageattachments",
        ".files"
      ],
      "searchAliases": [
        "messageattachments",
        "files"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 12s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "text",
          "required": false,
          "description": "Message text, ID, or Discord message link.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".attachments [message]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "avatar",
      "category": "Members",
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
        "av",
        "pfp",
        "icon",
        "pic",
        "useravatar",
        "foto"
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
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".avatar [user]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding."
      ]
    },
    {
      "name": "balance",
      "category": "Economy",
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
        "bal",
        "money",
        "cash",
        "wallet",
        "coins",
        "saldo"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "economy"
      ],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": false,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".balance [member]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Enabled feature: economy",
        "Server only"
      ]
    },
    {
      "name": "ban",
      "category": "Moderation",
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
        "b",
        "tempban",
        "tban",
        "banuser",
        "banish",
        "banear"
      ],
      "parentAliases": [],
      "access": "Ban Members (server)",
      "botPermissions": [
        "Ban Members (server)"
      ],
      "features": [],
      "cooldown": "3 use(s) per 30s; scope: guild",
      "parameters": [
        {
          "name": "user",
          "type": "User",
          "required": true,
          "description": "Discord user to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "duration",
          "type": "text",
          "required": false,
          "description": "Minutes or s/m/h/d combinations; at most 64 characters/10 years. Timeouts: max 28 days.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "0"
        },
        {
          "name": "reason",
          "type": "text",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "No reason provided"
        }
      ],
      "example": ".ban <user> [duration=0] [reason=No reason provided]",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Current permissions and hierarchy still apply when using IDs. Reasons are limited to 1–400 characters without control characters. Duration inputs use minutes for bare numbers or s/m/h/d combinations, with a 64-character/ten-year parser limit; timeouts are limited to 28 days. New completed actions retain up to 1,000 server-local cases, visible privately through memberhistory. Cases are not reconstructed for past actions.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "banner",
      "category": "Members",
      "serverOnly": false,
      "description": "Show a user's full-size Discord banner.",
      "prefix": ".banner [user]",
      "slash": "/members banner",
      "aliases": [
        ".userbanner",
        ".bnr"
      ],
      "searchAliases": [
        "userbanner",
        "bnr"
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
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".banner [user]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding."
      ]
    },
    {
      "name": "blackjack",
      "category": "Economy",
      "serverOnly": true,
      "description": "Play blackjack with hit, stand, double down, surrender and natural blackjack payouts. Use blackjack rules for the full rules.",
      "prefix": ".blackjack <wager>",
      "slash": "/economy blackjack",
      "aliases": [
        ".bj",
        ".21"
      ],
      "searchAliases": [
        "bj",
        "21"
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
          "type": "text",
          "required": true,
          "description": "Number of coins to wager.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".blackjack <wager>",
      "concurrency": null,
      "notes": [
        "Hit, stand, double down or surrender. Dealer stands on all 17s. A two-card natural pays 3:2 profit (2.5× total, rounded down); equal naturals push. Other wins return 2×, pushes return the stake. Double requires matching funds, is first-action only, draws one card and stands. First-action surrender returns half. No split or insurance. Timeout forfeits the escrowed stake.",
        "Virtual server currency only. Use 1–100,000 or all; payouts include the stake. Interactive games cannot resume after a process restart.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Enabled feature: economy",
        "Server only"
      ]
    },
    {
      "name": "bonk",
      "category": "Fun & Reactions",
      "serverOnly": false,
      "description": "Send a bonk reaction to another member.",
      "prefix": ".bonk <member>",
      "slash": "/fun bonk",
      "aliases": [
        ".bonkuser"
      ],
      "searchAliases": [
        "bonkuser"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".bonk <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding."
      ]
    },
    {
      "name": "boosterole",
      "category": "Roles",
      "serverOnly": true,
      "description": "Create and manage your safe cosmetic server-booster role.",
      "prefix": ".boosterole",
      "slash": "/boosterole overview",
      "aliases": [
        ".boostrole",
        ".br",
        ".rolbooster"
      ],
      "searchAliases": [
        "boostrole",
        "br",
        "rolbooster"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".boosterole",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Creation, color, name and sharing require an active server booster. All edits require registered role ownership. Owners may unshare or delete after boosting stops.",
        "Server only"
      ]
    },
    {
      "name": "boosterole color",
      "category": "Roles",
      "serverOnly": true,
      "description": "Change the configured color.",
      "prefix": ".boosterole color <primary> [secondary] [tertiary]",
      "slash": "/boosterole color",
      "aliases": [
        ".boosterole colour",
        ".boosterole gradient",
        ".boosterole colors",
        ".boosterole colours"
      ],
      "searchAliases": [
        "colour",
        "gradient",
        "colors",
        "colours"
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
      "access": "Everyone",
      "botPermissions": [
        "Manage Roles (server)"
      ],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "primary",
          "type": "text",
          "required": true,
          "description": "Primary hex colour.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "secondary",
          "type": "text",
          "required": false,
          "description": "Optional second hex colour.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "tertiary",
          "type": "text",
          "required": false,
          "description": "Optional third hex colour.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".boosterole color <primary> [secondary] [tertiary]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Creation, color, name and sharing require an active server booster. All edits require registered role ownership. Owners may unshare or delete after boosting stops.",
        "Server only"
      ]
    },
    {
      "name": "boosterole create",
      "category": "Roles",
      "serverOnly": true,
      "description": "Create a new entry in boosterole.",
      "prefix": ".boosterole create <name> [color=#8B9CF6]",
      "slash": "/boosterole create",
      "aliases": [
        ".boosterole make",
        ".boosterole new"
      ],
      "searchAliases": [
        "make",
        "new"
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
      "access": "Everyone",
      "botPermissions": [
        "Manage Roles (server)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "name",
          "type": "text",
          "required": true,
          "description": "Name to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "color",
          "type": "text",
          "required": false,
          "description": "Hex colour such as #35D6C5.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "#8B9CF6"
        }
      ],
      "example": ".boosterole create <name> [color=#8B9CF6]",
      "concurrency": "<MaxConcurrency per=<BucketType.member: 4> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Creation, color, name and sharing require an active server booster. All edits require registered role ownership. Owners may unshare or delete after boosting stops.",
        "Server only"
      ]
    },
    {
      "name": "boosterole delete",
      "category": "Roles",
      "serverOnly": true,
      "description": "Delete an entry from boosterole.",
      "prefix": ".boosterole delete",
      "slash": "/boosterole delete",
      "aliases": [
        ".boosterole remove",
        ".boosterole reset"
      ],
      "searchAliases": [
        "remove",
        "reset"
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
      "access": "Everyone",
      "botPermissions": [
        "Manage Roles (server)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 10s; scope: member",
      "parameters": [],
      "example": ".boosterole delete",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Creation, color, name and sharing require an active server booster. All edits require registered role ownership. Owners may unshare or delete after boosting stops.",
        "Server only"
      ]
    },
    {
      "name": "boosterole name",
      "category": "Roles",
      "serverOnly": true,
      "description": "Rename the configured item.",
      "prefix": ".boosterole name <name>",
      "slash": "/boosterole name",
      "aliases": [
        ".boosterole rename"
      ],
      "searchAliases": [
        "rename"
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
      "access": "Everyone",
      "botPermissions": [
        "Manage Roles (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "name",
          "type": "text",
          "required": true,
          "description": "Name to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".boosterole name <name>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Creation, color, name and sharing require an active server booster. All edits require registered role ownership. Owners may unshare or delete after boosting stops.",
        "Server only"
      ]
    },
    {
      "name": "boosterole share",
      "category": "Roles",
      "serverOnly": true,
      "description": "Share your booster role with another member.",
      "prefix": ".boosterole share <member>",
      "slash": "/boosterole share",
      "aliases": [
        ".boosterole add",
        ".boosterole give"
      ],
      "searchAliases": [
        "add",
        "give"
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
      "access": "Everyone",
      "botPermissions": [
        "Manage Roles (server)"
      ],
      "features": [],
      "cooldown": "3 use(s) per 30s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".boosterole share <member>",
      "concurrency": "<MaxConcurrency per=<BucketType.member: 4> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Creation, color, name and sharing require an active server booster. All edits require registered role ownership. Owners may unshare or delete after boosting stops.",
        "Server only"
      ]
    },
    {
      "name": "boosterole unshare",
      "category": "Roles",
      "serverOnly": true,
      "description": "Stop sharing your booster role with a member.",
      "prefix": ".boosterole unshare <member>",
      "slash": "/boosterole unshare",
      "aliases": [
        ".boosterole revoke",
        ".boosterole take"
      ],
      "searchAliases": [
        "revoke",
        "take"
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
      "access": "Everyone",
      "botPermissions": [
        "Manage Roles (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".boosterole unshare <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Creation, color, name and sharing require an active server booster. All edits require registered role ownership. Owners may unshare or delete after boosting stops.",
        "Server only"
      ]
    },
    {
      "name": "botinfo",
      "category": "Bot & Help",
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
        "bi",
        "stats",
        "about",
        "info",
        "uptime",
        "aboutbot",
        "aboutskye",
        "infobot"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".botinfo",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "bots",
      "category": "Members",
      "serverOnly": true,
      "description": "Count cached bot accounts and show a bounded sample.",
      "prefix": ".bots",
      "slash": "/members bots",
      "aliases": [
        ".botcount",
        ".listbots"
      ],
      "searchAliases": [
        "botcount",
        "listbots"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: guild",
      "parameters": [],
      "example": ".bots",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "botservers",
      "category": "Bot Owner",
      "serverOnly": false,
      "description": "Privately list skye's servers, bot/server IDs and invites. Bot owner only. Five servers per page; generated invites last one hour and allow one use.",
      "prefix": ".botservers [page=1]",
      "slash": "/bot botservers",
      "aliases": [
        ".guildlist",
        ".serverlist"
      ],
      "searchAliases": [
        "guildlist",
        "serverlist"
      ],
      "parentAliases": [],
      "access": "Bot application owner",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: user",
      "parameters": [
        {
          "name": "page",
          "type": "integer (minimum 1, maximum 1000000)",
          "required": false,
          "description": "Value for page.",
          "minimum": 1,
          "maximum": 1000000,
          "choices": [],
          "default": "1"
        }
      ],
      "example": ".botservers [page=1]",
      "concurrency": "<MaxConcurrency per=<BucketType.default: 0> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "bugreport",
      "category": "Bot & Help",
      "serverOnly": false,
      "description": "Save and privately deliver a detailed bug report to the bot owner.",
      "prefix": ".bugreport <report>",
      "slash": "/bot bugreport",
      "aliases": [
        ".bug",
        ".reportbug"
      ],
      "searchAliases": [
        "bug",
        "reportbug"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 3600s; scope: user",
      "parameters": [
        {
          "name": "report",
          "type": "text",
          "required": true,
          "description": "Private bug report details.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".bugreport <report>",
      "concurrency": "<MaxConcurrency per=<BucketType.user: 1> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
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
        "bump",
        "bumps",
        "bumpreminders"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".bumpreminder",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
        "bots"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".bumpreminder bot",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "bumpreminder bot add",
      "category": "Community",
      "serverOnly": true,
      "description": "Add an entry to bumpreminder bot.",
      "prefix": ".bumpreminder bot add <member>",
      "slash": "/bumpreminder bot add",
      "aliases": [
        ".bumpreminder bot allow"
      ],
      "searchAliases": [
        "allow"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".bumpreminder bot add <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "bumpreminder bot remove",
      "category": "Community",
      "serverOnly": true,
      "description": "Remove an entry from bumpreminder bot.",
      "prefix": ".bumpreminder bot remove <member>",
      "slash": "/bumpreminder bot remove",
      "aliases": [
        ".bumpreminder bot delete",
        ".bumpreminder bot deny"
      ],
      "searchAliases": [
        "delete",
        "deny"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".bumpreminder bot remove <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
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
        "interval",
        "time"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "minutes",
          "type": "integer (minimum 30, maximum 1440)",
          "required": true,
          "description": "Duration in minutes.",
          "minimum": 30,
          "maximum": 1440,
          "choices": []
        }
      ],
      "example": ".bumpreminder delay <minutes>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
        "off",
        "stop"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".bumpreminder disable",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "bumpreminder setup",
      "category": "Community",
      "serverOnly": true,
      "description": "Configure and enable bumpreminder.",
      "prefix": ".bumpreminder setup <channel> [role]",
      "slash": "/bumpreminder setup",
      "aliases": [
        ".bumpreminder configure",
        ".bumpreminder set",
        ".bumpreminder enable",
        ".bumpreminder on"
      ],
      "searchAliases": [
        "configure",
        "set",
        "enable",
        "on"
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
      "access": "Administrator (server)",
      "botPermissions": [
        "Embed Links (server)",
        "Read Message History (server)",
        "Send Messages (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "channel",
          "type": "TextChannel",
          "required": true,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "role",
          "type": "Role",
          "required": false,
          "description": "Discord role to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".bumpreminder setup <channel> [role]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "buttonrole",
      "category": "Roles",
      "serverOnly": true,
      "description": "Post a button that safely toggles a permissionless role.",
      "prefix": ".buttonrole <role> [label]",
      "slash": "/role buttonrole",
      "aliases": [
        ".rolebutton",
        ".botonrol"
      ],
      "searchAliases": [
        "rolebutton",
        "botonrol"
      ],
      "parentAliases": [],
      "access": "Administrator (server)",
      "botPermissions": [
        "Manage Roles (server)"
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
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "label",
          "type": "text",
          "required": false,
          "description": "Value for label.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".buttonrole <role> [label]",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Enabled feature: server_options",
        "Server only"
      ]
    },
    {
      "name": "calculate",
      "category": "Utility",
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
        "calc",
        "math",
        "calcular"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "5 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "expression",
          "type": "text",
          "required": true,
          "description": "Arithmetic expression to calculate.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".calculate <expression>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
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
        "cinfo",
        "chaninfo"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "GuildChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".channelinfo [channel]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
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
        "channellist",
        "listchannels",
        "serverchannels"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [],
      "example": ".channels",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
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
        "chanstats",
        "channelcount"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: guild",
      "parameters": [],
      "example": ".channelstats",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "choose",
      "category": "Utility",
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
        "pick",
        "decide",
        "randomchoice",
        "elegir"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "5 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "choices",
          "type": "text",
          "required": true,
          "description": "Choices separated by vertical bars (|).",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".choose <choices>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
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
        "cleanups"
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
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "cleanup",
          "aliases": [
            "cleanups"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [
        "Manage Channels (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "targets",
          "type": "text",
          "required": true,
          "description": "Space-separated explicit mentions or numeric IDs.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".cleanup channels <targets>",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "cleanup",
          "aliases": [
            "cleanups"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [
        "Manage Roles (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "targets",
          "type": "text",
          "required": true,
          "description": "Space-separated explicit mentions or numeric IDs.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".cleanup roles <targets>",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "cleanup",
          "aliases": [
            "cleanups"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [
        "Manage Webhooks (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "targets",
          "type": "text",
          "required": true,
          "description": "Space-separated explicit mentions or numeric IDs.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".cleanup webhooks <targets>",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "clearsnipes",
      "category": "Messages & Embeds",
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
        "clearsnipe",
        "sclear",
        "snipeclear"
      ],
      "parentAliases": [],
      "access": "Manage Messages (channel)",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [],
      "example": ".clearsnipes",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "clearwarnings",
      "category": "Moderation",
      "serverOnly": true,
      "description": "Remove all saved warnings from a member.",
      "prefix": ".clearwarnings <member> [reason=No reason provided]",
      "slash": "/moderation clearwarnings",
      "aliases": [
        ".clearwarns",
        ".cw"
      ],
      "searchAliases": [
        "clearwarns",
        "cw"
      ],
      "parentAliases": [],
      "access": "Moderate Members (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "reason",
          "type": "text",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "No reason provided"
        }
      ],
      "example": ".clearwarnings <member> [reason=No reason provided]",
      "concurrency": null,
      "notes": [
        "Current permissions and hierarchy still apply when using IDs. Reasons are limited to 1–400 characters without control characters. Duration inputs use minutes for bare numbers or s/m/h/d combinations, with a 64-character/ten-year parser limit; timeouts are limited to 28 days. New completed actions retain up to 1,000 server-local cases, visible privately through memberhistory. Cases are not reconstructed for past actions.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
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
        "clonechannel",
        "channelclone"
      ],
      "parentAliases": [],
      "access": "Manage Channels (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "GuildChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "name",
          "type": "text",
          "required": false,
          "description": "Name to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".clone [channel] [name]",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "coinflip",
      "category": "Economy",
      "serverOnly": true,
      "description": "Flip heads/tails alone or challenge another member. Optional side defaults to heads. Use coinflip rules for payouts and challenge rules.",
      "prefix": ".coinflip <wager> [opponent] [side=heads]",
      "slash": "/economy coinflip",
      "aliases": [
        ".flip",
        ".cf"
      ],
      "searchAliases": [
        "flip",
        "cf"
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
          "type": "text",
          "required": true,
          "description": "Number of coins to wager.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "opponent",
          "type": "Member",
          "required": false,
          "description": "Member to challenge.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "side",
          "type": "text",
          "required": false,
          "description": "Choose heads or tails; the challenged player receives the opposite side.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "heads",
            "tails"
          ],
          "default": "heads"
        }
      ],
      "example": ".coinflip <wager> [opponent] [side=heads]",
      "concurrency": null,
      "notes": [
        "Choose heads or tails; fair 50/50 coin. A solo win returns 2×. Optional opponent must accept within 30 seconds; both stake the same amount and the winner takes the pot. No debit before acceptance; declined/expired challenges cost nothing.",
        "Virtual server currency only. Use 1–100,000 or all; payouts include the stake. Interactive games cannot resume after a process restart.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Enabled feature: economy",
        "Server only"
      ]
    },
    {
      "name": "colorrole",
      "category": "Roles",
      "serverOnly": true,
      "description": "Choose or administer safe self-service color roles.",
      "prefix": ".colorrole [role]",
      "slash": "/colorrole overview",
      "aliases": [
        ".colourrole",
        ".colors",
        ".colores"
      ],
      "searchAliases": [
        "colourrole",
        "colors",
        "colores"
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
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".colorrole [role]",
      "concurrency": "<MaxConcurrency per=<BucketType.member: 4> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Enabled feature: server_options",
        "Server only"
      ]
    },
    {
      "name": "colorrole create",
      "category": "Roles",
      "serverOnly": true,
      "description": "Create a new entry in colorrole.",
      "prefix": ".colorrole create <color> <name>",
      "slash": "/colorrole create",
      "aliases": [
        ".colorrole add"
      ],
      "searchAliases": [
        "add"
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
      "access": "Administrator (server)",
      "botPermissions": [
        "Manage Roles (server)"
      ],
      "features": [
        "server_options"
      ],
      "cooldown": "1 use(s) per 15s; scope: guild",
      "parameters": [
        {
          "name": "color",
          "type": "text",
          "required": true,
          "description": "Hex colour such as #35D6C5.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "name",
          "type": "text",
          "required": true,
          "description": "Name to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".colorrole create <color> <name>",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Enabled feature: server_options",
        "Server only"
      ]
    },
    {
      "name": "colorrole delete",
      "category": "Roles",
      "serverOnly": true,
      "description": "Delete an entry from colorrole.",
      "prefix": ".colorrole delete <role>",
      "slash": "/colorrole delete",
      "aliases": [
        ".colorrole remove"
      ],
      "searchAliases": [
        "remove"
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
      "access": "Administrator (server)",
      "botPermissions": [
        "Manage Roles (server)"
      ],
      "features": [
        "server_options"
      ],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".colorrole delete <role>",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Enabled feature: server_options",
        "Server only"
      ]
    },
    {
      "name": "commandinfo",
      "category": "Bot & Help",
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
        "command",
        "cmdinfo",
        "usage",
        "comando"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "command_name",
          "type": "text",
          "required": true,
          "description": "Command name without a prefix.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".commandinfo <command_name>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "confess",
      "category": "Community",
      "serverOnly": true,
      "description": "Post an anonymous confession through the configured channel.",
      "prefix": ".confess <message>",
      "slash": "/fun confess",
      "aliases": [
        ".anon",
        ".confession"
      ],
      "searchAliases": [
        "anon",
        "confession"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [
        "Manage Messages (server)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 300s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "text",
          "required": true,
          "description": "Message text, ID, or Discord message link.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".confess <message>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
        "confessionconfig",
        "anonconfig"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".confessions",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
        "off",
        "stop"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".confessions disable",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "confessions remove",
      "category": "Community",
      "serverOnly": true,
      "description": "Remove an entry from confessions.",
      "prefix": ".confessions remove <confession_id>",
      "slash": "/confessions remove",
      "aliases": [
        ".confessions delete",
        ".confessions moderate"
      ],
      "searchAliases": [
        "delete",
        "moderate"
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
      "access": "Manage Messages (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "confession_id",
          "type": "text",
          "required": true,
          "description": "Value for confession id.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".confessions remove <confession_id>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "confessions setup",
      "category": "Community",
      "serverOnly": true,
      "description": "Configure and enable confessions.",
      "prefix": ".confessions setup <channel>",
      "slash": "/confessions setup",
      "aliases": [
        ".confessions configure",
        ".confessions set",
        ".confessions enable",
        ".confessions on"
      ],
      "searchAliases": [
        "configure",
        "set",
        "enable",
        "on"
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
      "access": "Administrator (server)",
      "botPermissions": [
        "Embed Links (server)",
        "Manage Messages (server)",
        "Send Messages (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "channel",
          "type": "TextChannel",
          "required": true,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".confessions setup <channel>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "connect4",
      "category": "Games",
      "serverOnly": true,
      "description": "Play Connect 4 against skye or challenge another member.",
      "prefix": ".connect4 [opponent]",
      "slash": "/games connect4",
      "aliases": [
        ".connectfour",
        ".c4"
      ],
      "searchAliases": [
        "connectfour",
        "c4"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "opponent",
          "type": "Member",
          "required": false,
          "description": "Member to challenge.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".connect4 [opponent]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
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
        "count",
        "countgame"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".counting",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
        "off",
        "stop"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".counting disable",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "counting reset",
      "category": "Community",
      "serverOnly": true,
      "description": "Reset the selected counting data.",
      "prefix": ".counting reset [number=0]",
      "slash": "/counting reset",
      "aliases": [
        ".counting restart"
      ],
      "searchAliases": [
        "restart"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "number",
          "type": "integer (minimum 0, maximum 1000000000)",
          "required": false,
          "description": "Number to use.",
          "minimum": 0,
          "maximum": 1000000000,
          "choices": [],
          "default": "0"
        }
      ],
      "example": ".counting reset [number=0]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
        "configure",
        "set",
        "enable",
        "on"
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
      "access": "Administrator (server)",
      "botPermissions": [
        "Add Reactions (server)",
        "Embed Links (server)",
        "Manage Messages (server)",
        "Send Messages (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "channel",
          "type": "TextChannel",
          "required": true,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".counting setup <channel>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
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
        "createchannel",
        "channelcreate"
      ],
      "parentAliases": [],
      "access": "Manage Channels (server)",
      "botPermissions": [
        "Manage Channels (server)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "kind",
          "type": "text",
          "required": true,
          "description": "Channel type to create.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "text",
            "voice",
            "category"
          ]
        },
        {
          "name": "name",
          "type": "text",
          "required": true,
          "description": "Name to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".create <kind> <name>",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "cuddle",
      "category": "Fun & Reactions",
      "serverOnly": false,
      "description": "Send a cuddle reaction to another member.",
      "prefix": ".cuddle <member>",
      "slash": "/fun cuddle",
      "aliases": [
        ".snuggle"
      ],
      "searchAliases": [
        "snuggle"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".cuddle <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding."
      ]
    },
    {
      "name": "customalias",
      "category": "Configuration",
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
        "aliases",
        "ca",
        "atajos"
      ],
      "parentAliases": [],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".customalias",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "customalias add",
      "category": "Configuration",
      "serverOnly": true,
      "description": "Add an entry to customalias.",
      "prefix": ".customalias add <alias> <command_name>",
      "slash": "/customalias add",
      "aliases": [
        ".customalias create",
        ".customalias set"
      ],
      "searchAliases": [
        "create",
        "set"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "alias",
          "type": "text",
          "required": true,
          "description": "Custom alias name.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "command_name",
          "type": "text",
          "required": true,
          "description": "Command name without a prefix.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".customalias add <alias> <command_name>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "customalias remove",
      "category": "Configuration",
      "serverOnly": true,
      "description": "Remove an entry from customalias.",
      "prefix": ".customalias remove <alias>",
      "slash": "/customalias remove",
      "aliases": [
        ".customalias delete",
        ".customalias unset"
      ],
      "searchAliases": [
        "delete",
        "unset"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "alias",
          "type": "text",
          "required": true,
          "description": "Custom alias name.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".customalias remove <alias>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "daily",
      "category": "Economy",
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
        "claim",
        "collect",
        "dailyreward",
        "diario"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "economy"
      ],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".daily",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Enabled feature: economy",
        "Server only"
      ]
    },
    {
      "name": "dare",
      "category": "Games",
      "serverOnly": false,
      "description": "Receive a random dare prompt.",
      "prefix": ".dare",
      "slash": "/fun dare",
      "aliases": [
        ".challenge"
      ],
      "searchAliases": [
        "challenge"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".dare",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "dashboard",
      "category": "Configuration",
      "serverOnly": true,
      "description": "Show a safe, read-only overview of skye's configuration in this server.",
      "prefix": ".dashboard",
      "slash": "/serverconfig dashboard",
      "aliases": [
        ".dash",
        ".serverdashboard"
      ],
      "searchAliases": [
        "dash",
        "serverdashboard"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".dashboard",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "decode",
      "category": "Utility",
      "serverOnly": false,
      "description": "Decode bounded Base64 text as UTF-8.",
      "prefix": ".decode <text>",
      "slash": "/utilities decode",
      "aliases": [
        ".b64decode",
        ".unb64"
      ],
      "searchAliases": [
        "b64decode",
        "unb64"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "5 use(s) per 10s; scope: user",
      "parameters": [
        {
          "name": "text",
          "type": "text",
          "required": true,
          "description": "Text to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".decode <text>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "define",
      "category": "Utility",
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
        "def",
        "dictionary",
        "meaning"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: user",
      "parameters": [
        {
          "name": "word",
          "type": "text",
          "required": true,
          "description": "Dictionary word.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".define <word>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
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
        "deletechannel",
        "channeldelete"
      ],
      "parentAliases": [],
      "access": "Manage Channels (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "GuildChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".delete [channel]",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "dice",
      "category": "Games",
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
        "roll",
        "r",
        "diceroll",
        "dado",
        "dados"
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
          "type": "text",
          "required": false,
          "description": "Dice notation such as 2d6.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "1d6"
        }
      ],
      "example": ".dice [notation=1d6]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Enabled feature: games",
        "Server only"
      ]
    },
    {
      "name": "donate",
      "category": "Bot & Help",
      "serverOnly": false,
      "description": "Support skye on Ko-fi and automatically receive the supporter role in the official server.",
      "prefix": ".donate",
      "slash": "/bot donate",
      "aliases": [
        ".donation",
        ".kofi"
      ],
      "searchAliases": [
        "donation",
        "kofi"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 15s; scope: user",
      "parameters": [],
      "example": ".donate",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "economy",
      "category": "Economy",
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
        "eco",
        "currency",
        "economia"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".economy",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "economy addbalance",
      "category": "Economy",
      "serverOnly": true,
      "description": "Add a bounded amount to a member's balance.",
      "prefix": ".economy addbalance <member> <amount>",
      "slash": "/economy addbalance",
      "aliases": [
        ".economy addbal"
      ],
      "searchAliases": [
        "addbal"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "amount",
          "type": "integer (minimum -1000000000, maximum 1000000000)",
          "required": true,
          "description": "Number or amount to use.",
          "minimum": -1000000000,
          "maximum": 1000000000,
          "choices": []
        }
      ],
      "example": ".economy addbalance <member> <amount>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "economy disable",
      "category": "Economy",
      "serverOnly": true,
      "description": "Disable economy while preserving its settings.",
      "prefix": ".economy disable",
      "slash": "/economy disable",
      "aliases": [
        ".economy off"
      ],
      "searchAliases": [
        "off"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".economy disable",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "economy enable",
      "category": "Economy",
      "serverOnly": true,
      "description": "Enable economy.",
      "prefix": ".economy enable",
      "slash": "/economy enable",
      "aliases": [
        ".economy on"
      ],
      "searchAliases": [
        "on"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".economy enable",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "economy setbalance",
      "category": "Economy",
      "serverOnly": true,
      "description": "Set a member's balance to a bounded value.",
      "prefix": ".economy setbalance <member> <amount>",
      "slash": "/economy setbalance",
      "aliases": [
        ".economy setbal"
      ],
      "searchAliases": [
        "setbal"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "amount",
          "type": "integer (minimum 0, maximum 1000000000000)",
          "required": true,
          "description": "Number or amount to use.",
          "minimum": 0,
          "maximum": 1000000000000,
          "choices": []
        }
      ],
      "example": ".economy setbalance <member> <amount>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "economy settings",
      "category": "Economy",
      "serverOnly": true,
      "description": "View or change bounded currency and reward settings.",
      "prefix": ".economy settings [setting] [value]",
      "slash": "/economy settings",
      "aliases": [
        ".economy config",
        ".economy setup"
      ],
      "searchAliases": [
        "config",
        "setup"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "setting",
          "type": "text",
          "required": false,
          "description": "Setting to change.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "value",
          "type": "text",
          "required": false,
          "description": "New setting value.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".economy settings [setting] [value]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "eightball",
      "category": "Games",
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
        "8ball",
        "8b",
        "ask",
        "bola8"
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
          "type": "text",
          "required": true,
          "description": "Question to ask.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".eightball <question>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Enabled feature: games",
        "Server only"
      ]
    },
    {
      "name": "embed",
      "category": "Messages & Embeds",
      "serverOnly": true,
      "description": "Send a bounded, mention-safe skye-themed embed; restricted to message managers.",
      "prefix": ".embed <content>",
      "slash": "/messages embed",
      "aliases": [
        ".sendembed"
      ],
      "searchAliases": [
        "sendembed"
      ],
      "parentAliases": [],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Embed Links (channel)",
        "Send Messages (channel)"
      ],
      "features": [],
      "cooldown": "2 use(s) per 20s; scope: member",
      "parameters": [
        {
          "name": "content",
          "type": "text",
          "required": true,
          "description": "Text content.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".embed <content>",
      "concurrency": "<MaxConcurrency per=<BucketType.member: 4> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "embedbuilder",
      "category": "Messages & Embeds",
      "serverOnly": true,
      "description": "Build an embed with private previews, saved drafts and channel selection. Manage Messages is also required in the destination.",
      "prefix": ".embedbuilder",
      "slash": "/embedbuilder overview",
      "aliases": [
        ".eb",
        ".buildembed"
      ],
      "searchAliases": [
        "eb",
        "buildembed"
      ],
      "parentAliases": [],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Embed Links (channel)",
        "Send Messages (channel)"
      ],
      "features": [],
      "cooldown": "2 use(s) per 30s; scope: member",
      "parameters": [],
      "example": ".embedbuilder",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "embedbuilder delete",
      "category": "Messages & Embeds",
      "serverOnly": true,
      "description": "Delete one of your own saved embeds in this server.",
      "prefix": ".embedbuilder delete <name>",
      "slash": "/embedbuilder delete",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "embedbuilder",
          "aliases": [
            "eb",
            "buildembed"
          ]
        }
      ],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Embed Links (channel)",
        "Send Messages (channel)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "name",
          "type": "text",
          "required": true,
          "description": "Name to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".embedbuilder delete <name>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "embedbuilder saved",
      "category": "Messages & Embeds",
      "serverOnly": true,
      "description": "Privately list your saved embeds in this server.",
      "prefix": ".embedbuilder saved",
      "slash": "/embedbuilder saved",
      "aliases": [
        ".embedbuilder list"
      ],
      "searchAliases": [
        "list"
      ],
      "parentAliases": [
        {
          "name": "embedbuilder",
          "aliases": [
            "eb",
            "buildembed"
          ]
        }
      ],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Embed Links (channel)",
        "Send Messages (channel)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".embedbuilder saved",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "encode",
      "category": "Utility",
      "serverOnly": false,
      "description": "Encode bounded UTF-8 text as Base64.",
      "prefix": ".encode <text>",
      "slash": "/utilities encode",
      "aliases": [
        ".b64encode",
        ".b64"
      ],
      "searchAliases": [
        "b64encode",
        "b64"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "5 use(s) per 10s; scope: user",
      "parameters": [
        {
          "name": "text",
          "type": "text",
          "required": true,
          "description": "Text to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".encode <text>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "features",
      "category": "Configuration",
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
        "feature",
        "modules",
        "modulos"
      ],
      "parentAliases": [],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".features",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "features disable",
      "category": "Configuration",
      "serverOnly": true,
      "description": "Disable features while preserving its settings.",
      "prefix": ".features disable <feature>",
      "slash": "/features disable",
      "aliases": [
        ".features off",
        ".features desactivar"
      ],
      "searchAliases": [
        "off",
        "desactivar"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "feature",
          "type": "text",
          "required": true,
          "description": "Optional feature module.",
          "minimum": null,
          "maximum": null,
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
          ]
        }
      ],
      "example": ".features disable <feature>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "features enable",
      "category": "Configuration",
      "serverOnly": true,
      "description": "Enable features.",
      "prefix": ".features enable <feature>",
      "slash": "/features enable",
      "aliases": [
        ".features on",
        ".features activar"
      ],
      "searchAliases": [
        "on",
        "activar"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "feature",
          "type": "text",
          "required": true,
          "description": "Optional feature module.",
          "minimum": null,
          "maximum": null,
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
          ]
        }
      ],
      "example": ".features enable <feature>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "filter",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "Configure bounded content and spam filtering.",
      "prefix": ".filter",
      "slash": "/filter overview",
      "aliases": [
        ".automod",
        ".contentfilter"
      ],
      "searchAliases": [
        "automod",
        "contentfilter"
      ],
      "parentAliases": [],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".filter",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "filter action",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "Choose the response used for matched filtered content.",
      "prefix": ".filter action <action>",
      "slash": "/filter action",
      "aliases": [
        ".filter response"
      ],
      "searchAliases": [
        "response"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "action",
          "type": "text",
          "required": true,
          "description": "Action to perform.",
          "minimum": null,
          "maximum": null,
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
          ]
        }
      ],
      "example": ".filter action <action>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "filter add",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "Add an entry to filter.",
      "prefix": ".filter add <term>",
      "slash": "/filter add",
      "aliases": [
        ".filter word",
        ".filter term"
      ],
      "searchAliases": [
        "word",
        "term"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "term",
          "type": "text",
          "required": true,
          "description": "Filter phrase.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".filter add <term>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "filter disable",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "Disable filter while preserving its settings.",
      "prefix": ".filter disable",
      "slash": "/filter disable",
      "aliases": [
        ".filter off"
      ],
      "searchAliases": [
        "off"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".filter disable",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "filter enable",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "Enable filter.",
      "prefix": ".filter enable",
      "slash": "/filter enable",
      "aliases": [
        ".filter on"
      ],
      "searchAliases": [
        "on"
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
      "access": "Administrator (server)",
      "botPermissions": [
        "Manage Messages (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".filter enable",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "filter exempt",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "List content-filter user and role exemptions.",
      "prefix": ".filter exempt",
      "slash": "/filter exempt overview",
      "aliases": [
        ".filter exemptions",
        ".filter ignore"
      ],
      "searchAliases": [
        "exemptions",
        "ignore"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".filter exempt",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "filter exempt remove",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "Remove an entry from filter exempt.",
      "prefix": ".filter exempt remove <member>",
      "slash": "/filter exempt remove",
      "aliases": [
        ".filter exempt del",
        ".filter exempt delete"
      ],
      "searchAliases": [
        "del",
        "delete"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".filter exempt remove <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "filter exempt role",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "Configure a role exemption.",
      "prefix": ".filter exempt role <role>",
      "slash": "/filter exempt role",
      "aliases": [
        ".filter exempt roleadd"
      ],
      "searchAliases": [
        "roleadd"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".filter exempt role <role>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "filter exempt roleremove",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "Remove a trusted role exemption.",
      "prefix": ".filter exempt roleremove <role>",
      "slash": "/filter exempt roleremove",
      "aliases": [
        ".filter exempt roledel",
        ".filter exempt roledelete"
      ],
      "searchAliases": [
        "roledel",
        "roledelete"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".filter exempt roleremove <role>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "filter exempt user",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "Add a member to the content-filter exemption list.",
      "prefix": ".filter exempt user <member>",
      "slash": "/filter exempt user",
      "aliases": [
        ".filter exempt member",
        ".filter exempt add"
      ],
      "searchAliases": [
        "member",
        "add"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".filter exempt user <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "filter list",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "List configured entries in filter.",
      "prefix": ".filter list",
      "slash": "/filter list",
      "aliases": [
        ".filter show",
        ".filter terms"
      ],
      "searchAliases": [
        "show",
        "terms"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".filter list",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "filter log",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "Set or clear the private log channel.",
      "prefix": ".filter log [channel]",
      "slash": "/filter log",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "channel",
          "type": "TextChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".filter log [channel]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "filter remove",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "Remove an entry from filter.",
      "prefix": ".filter remove <term>",
      "slash": "/filter remove",
      "aliases": [
        ".filter delete",
        ".filter del"
      ],
      "searchAliases": [
        "delete",
        "del"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "term",
          "type": "text",
          "required": true,
          "description": "Filter phrase.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".filter remove <term>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "filter spam",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "View anti-spam settings.",
      "prefix": ".filter spam",
      "slash": "/filter spam overview",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".filter spam",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "filter spam action",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "Choose the response used when message spam is detected.",
      "prefix": ".filter spam action <action>",
      "slash": "/filter spam action",
      "aliases": [
        ".filter spam response"
      ],
      "searchAliases": [
        "response"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "action",
          "type": "text",
          "required": true,
          "description": "Action to perform.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "delete",
            "timeout",
            "kick",
            "ban",
            "delete_timeout",
            "delete_kick",
            "delete_ban"
          ]
        }
      ],
      "example": ".filter spam action <action>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "filter spam disable",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "Disable filter spam while preserving its settings.",
      "prefix": ".filter spam disable",
      "slash": "/filter spam disable",
      "aliases": [
        ".filter spam off"
      ],
      "searchAliases": [
        "off"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".filter spam disable",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "filter spam enable",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "Enable filter spam.",
      "prefix": ".filter spam enable",
      "slash": "/filter spam enable",
      "aliases": [
        ".filter spam on"
      ],
      "searchAliases": [
        "on"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".filter spam enable",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "filter spam set",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "Update a setting in filter spam.",
      "prefix": ".filter spam set <limit> <seconds>",
      "slash": "/filter spam set",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "filter",
          "aliases": [
            "automod",
            "contentfilter"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "limit",
          "type": "integer (minimum 3, maximum 30)",
          "required": true,
          "description": "Maximum number allowed.",
          "minimum": 3,
          "maximum": 30,
          "choices": []
        },
        {
          "name": "seconds",
          "type": "integer (minimum 3, maximum 60)",
          "required": true,
          "description": "Duration in seconds.",
          "minimum": 3,
          "maximum": 60,
          "choices": []
        }
      ],
      "example": ".filter spam set <limit> <seconds>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "filter timeout",
      "category": "AutoMod",
      "serverOnly": true,
      "description": "Set the bounded automatic timeout duration.",
      "prefix": ".filter timeout <minutes>",
      "slash": "/filter timeout",
      "aliases": [
        ".filter duration"
      ],
      "searchAliases": [
        "duration"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "minutes",
          "type": "integer (minimum 1, maximum 40320)",
          "required": true,
          "description": "Duration in minutes.",
          "minimum": 1,
          "maximum": 40320,
          "choices": []
        }
      ],
      "example": ".filter timeout <minutes>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "giveaway",
      "category": "Giveaways",
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
        "giveaways",
        "gway",
        "sorteo"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "giveaways"
      ],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".giveaway",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Enabled feature: giveaways",
        "Server only"
      ]
    },
    {
      "name": "giveaway end",
      "category": "Giveaways",
      "serverOnly": true,
      "description": "End an active entry in giveaway.",
      "prefix": ".giveaway end <giveaway_id>",
      "slash": "/giveaway end",
      "aliases": [
        ".giveaway finish",
        ".giveaway stop"
      ],
      "searchAliases": [
        "finish",
        "stop"
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
      "access": "Manage Guild (server)",
      "botPermissions": [],
      "features": [
        "giveaways"
      ],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "giveaway_id",
          "type": "text",
          "required": true,
          "description": "Value for giveaway id.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".giveaway end <giveaway_id>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Enabled feature: giveaways",
        "Server only"
      ]
    },
    {
      "name": "giveaway reroll",
      "category": "Giveaways",
      "serverOnly": true,
      "description": "Draw replacement winners from a completed giveaway.",
      "prefix": ".giveaway reroll <giveaway_id>",
      "slash": "/giveaway reroll",
      "aliases": [
        ".giveaway redraw"
      ],
      "searchAliases": [
        "redraw"
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
      "access": "Manage Guild (server)",
      "botPermissions": [],
      "features": [
        "giveaways"
      ],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "giveaway_id",
          "type": "text",
          "required": true,
          "description": "Value for giveaway id.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".giveaway reroll <giveaway_id>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Enabled feature: giveaways",
        "Server only"
      ]
    },
    {
      "name": "giveaway start",
      "category": "Giveaways",
      "serverOnly": true,
      "description": "Create and start a new giveaway entry.",
      "prefix": ".giveaway start <duration> <winners> <prize>",
      "slash": "/giveaway start",
      "aliases": [
        ".giveaway create",
        ".giveaway new"
      ],
      "searchAliases": [
        "create",
        "new"
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
      "access": "Manage Guild (server)",
      "botPermissions": [
        "Embed Links (server)",
        "Send Messages (server)"
      ],
      "features": [
        "giveaways"
      ],
      "cooldown": "2 use(s) per 30s; scope: guild",
      "parameters": [
        {
          "name": "duration",
          "type": "text",
          "required": true,
          "description": "Minutes or s/m/h/d combinations; at most 64 characters/10 years. Timeouts: max 28 days.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "winners",
          "type": "integer (minimum 1, maximum 20)",
          "required": true,
          "description": "Number of winners.",
          "minimum": 1,
          "maximum": 20,
          "choices": []
        },
        {
          "name": "prize",
          "type": "text",
          "required": true,
          "description": "Giveaway prize.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".giveaway start <duration> <winners> <prize>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Enabled feature: giveaways",
        "Server only"
      ]
    },
    {
      "name": "guess",
      "category": "Games",
      "serverOnly": true,
      "description": "Start or continue your per-server number-guessing game.",
      "prefix": ".guess [number]",
      "slash": "/fun guess",
      "aliases": [
        ".guessnumber",
        ".numguess"
      ],
      "searchAliases": [
        "guessnumber",
        "numguess"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "5 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "number",
          "type": "integer (minimum 1, maximum 100)",
          "required": false,
          "description": "Number to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".guess [number]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "handshake",
      "category": "Fun & Reactions",
      "serverOnly": false,
      "description": "Send a handshake reaction to another member.",
      "prefix": ".handshake <member>",
      "slash": "/fun handshake",
      "aliases": [
        ".shakehands"
      ],
      "searchAliases": [
        "shakehands"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".handshake <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding."
      ]
    },
    {
      "name": "hangman",
      "category": "Games",
      "serverOnly": true,
      "description": "Start a hangman game in the current channel.",
      "prefix": ".hangman [guess]",
      "slash": "/games hangman",
      "aliases": [
        ".hm",
        ".ahorcado"
      ],
      "searchAliases": [
        "hm",
        "ahorcado"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 8s; scope: member",
      "parameters": [
        {
          "name": "guess",
          "type": "text",
          "required": false,
          "description": "Your guess.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".hangman [guess]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "help",
      "category": "Bot & Help",
      "serverOnly": false,
      "description": "Browse categories, search with help search <words>, or inspect any command with help <command>.",
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
        "h",
        "commands",
        "cmds",
        "menu",
        "ayuda"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "category",
          "type": "text",
          "required": false,
          "description": "Discord category to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".help [category]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
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
        "hidechannel",
        "channelhide"
      ],
      "parentAliases": [],
      "access": "Manage Channels (server), Manage Roles and Manage Channels (target channel)",
      "botPermissions": [
        "Manage Roles and Manage Channels (target channel)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "GuildChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "target",
          "type": "Role or Member",
          "required": false,
          "description": "Member, role, message, or resource target.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".hide [channel] [target]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "highfive",
      "category": "Fun & Reactions",
      "serverOnly": false,
      "description": "Send a high-five reaction to another member.",
      "prefix": ".highfive <member>",
      "slash": "/fun highfive",
      "aliases": [
        ".high5"
      ],
      "searchAliases": [
        "high5"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".highfive <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding."
      ]
    },
    {
      "name": "hug",
      "category": "Fun & Reactions",
      "serverOnly": false,
      "description": "Send a hug reaction to another member.",
      "prefix": ".hug <member>",
      "slash": "/fun hug",
      "aliases": [
        ".embrace"
      ],
      "searchAliases": [
        "embrace"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".hug <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding."
      ]
    },
    {
      "name": "humans",
      "category": "Members",
      "serverOnly": true,
      "description": "Count cached human members and show a bounded sample.",
      "prefix": ".humans",
      "slash": "/members humans",
      "aliases": [
        ".humancount",
        ".peoplecount"
      ],
      "searchAliases": [
        "humancount",
        "peoplecount"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: guild",
      "parameters": [],
      "example": ".humans",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "invite",
      "category": "Bot & Help",
      "serverOnly": false,
      "description": "Create a safe OAuth invite link for skye.",
      "prefix": ".invite",
      "slash": "/bot invite",
      "aliases": [
        ".inv",
        ".addbot"
      ],
      "searchAliases": [
        "inv",
        "addbot"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".invite",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "invites",
      "category": "Invite Tracking",
      "serverOnly": true,
      "description": "View anyone's recorded invite totals; no moderation permission needed.",
      "prefix": ".invites [user]",
      "slash": "/invites overview",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "user",
          "type": "User",
          "required": false,
          "description": "Discord user to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".invites [user]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "invites inviter",
      "category": "Invite Tracking",
      "serverOnly": true,
      "description": "View the inviter or source of a user's latest recorded join.",
      "prefix": ".invites inviter [user]",
      "slash": "/invites inviter",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "user",
          "type": "User",
          "required": false,
          "description": "Discord user to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".invites inviter [user]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "invites server",
      "category": "Invite Tracking",
      "serverOnly": true,
      "description": "View per-server invite totals, including vanity and unknown joins.",
      "prefix": ".invites server",
      "slash": "/invites server",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".invites server",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "invites stats",
      "category": "Invite Tracking",
      "serverOnly": true,
      "description": "View real, fake, pending and departed invite counts for any user.",
      "prefix": ".invites stats [user]",
      "slash": "/invites stats",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "user",
          "type": "User",
          "required": false,
          "description": "Discord user to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".invites stats [user]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "invitetrack",
      "category": "Invite Tracking",
      "serverOnly": true,
      "description": "Configure optional invite tracking; requires Manage Server.",
      "prefix": ".invitetrack",
      "slash": "/invitetrack overview",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [],
      "access": "Manage Guild (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".invitetrack",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "invitetrack disable",
      "category": "Invite Tracking",
      "serverOnly": true,
      "description": "Stop invite collection and retain existing history.",
      "prefix": ".invitetrack disable",
      "slash": "/invitetrack disable",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [],
      "access": "Manage Guild (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".invitetrack disable",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "invitetrack enable",
      "category": "Invite Tracking",
      "serverOnly": true,
      "description": "Enable invite tracking for this server after verifying bot access.",
      "prefix": ".invitetrack enable",
      "slash": "/invitetrack enable",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [],
      "access": "Manage Guild (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".invitetrack enable",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "invitetrack threshold",
      "category": "Invite Tracking",
      "serverOnly": true,
      "description": "Set the fake-invite threshold for future joins, in seconds (1–2592000).",
      "prefix": ".invitetrack threshold <seconds>",
      "slash": "/invitetrack threshold",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [],
      "access": "Manage Guild (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "seconds",
          "type": "integer (minimum 1, maximum 2592000)",
          "required": true,
          "description": "Duration in seconds.",
          "minimum": 1,
          "maximum": 2592000,
          "choices": []
        }
      ],
      "example": ".invitetrack threshold <seconds>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "joined",
      "category": "Members",
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
        "joinedat",
        "joindate",
        "serverage"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": false,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".joined [member]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "jumpto",
      "category": "Messages & Embeds",
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
        "jump",
        "messagelink",
        "msglink"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "4 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "text",
          "required": false,
          "description": "Message text, ID, or Discord message link.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".jumpto [message]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "kick",
      "category": "Moderation",
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
        "k",
        "kickuser",
        "boot",
        "removeuser",
        "expulsar"
      ],
      "parentAliases": [],
      "access": "Kick Members (server)",
      "botPermissions": [
        "Kick Members (server)"
      ],
      "features": [],
      "cooldown": "5 use(s) per 30s; scope: guild",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "reason",
          "type": "text",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "No reason provided"
        }
      ],
      "example": ".kick <member> [reason=No reason provided]",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Current permissions and hierarchy still apply when using IDs. Reasons are limited to 1–400 characters without control characters. Duration inputs use minutes for bare numbers or s/m/h/d combinations, with a 64-character/ten-year parser limit; timeouts are limited to 28 days. New completed actions retain up to 1,000 server-local cases, visible privately through memberhistory. Cases are not reconstructed for past actions.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "kill",
      "category": "Fun & Reactions",
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
        "slay",
        "murder",
        "destroy"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".kill <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding."
      ]
    },
    {
      "name": "kiss",
      "category": "Fun & Reactions",
      "serverOnly": false,
      "description": "Send a kiss reaction to another member.",
      "prefix": ".kiss <member>",
      "slash": "/fun kiss",
      "aliases": [
        ".smooch"
      ],
      "searchAliases": [
        "smooch"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".kiss <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding."
      ]
    },
    {
      "name": "language",
      "category": "Configuration",
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
        "lang",
        "setlanguage",
        "idioma"
      ],
      "parentAliases": [],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "language",
          "type": "text",
          "required": false,
          "description": "Language name/code, or source:target.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "en",
            "es"
          ],
          "default": "not set"
        }
      ],
      "example": ".language [language]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "leaderboard",
      "category": "Economy",
      "serverOnly": true,
      "description": "Show economy or XP rankings for this server.",
      "prefix": ".leaderboard [amount=10]",
      "slash": "/leaderboard overview",
      "aliases": [
        ".lb"
      ],
      "searchAliases": [
        "lb"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 25)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 25,
          "choices": [],
          "default": "10"
        }
      ],
      "example": ".leaderboard [amount=10]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "leaderboard cash",
      "category": "Economy",
      "serverOnly": true,
      "description": "Show the server economy ranking.",
      "prefix": ".leaderboard cash [amount=10]",
      "slash": "/leaderboard cash",
      "aliases": [
        ".leaderboard money",
        ".leaderboard coins"
      ],
      "searchAliases": [
        "money",
        "coins"
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
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 25)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 25,
          "choices": [],
          "default": "10"
        }
      ],
      "example": ".leaderboard cash [amount=10]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "leaderboard xp",
      "category": "Leveling",
      "serverOnly": true,
      "description": "Show the server XP ranking.",
      "prefix": ".leaderboard xp [amount=10]",
      "slash": "/leaderboard xp",
      "aliases": [
        ".leaderboard levels",
        ".leaderboard rank"
      ],
      "searchAliases": [
        "levels",
        "rank"
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
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 25)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 25,
          "choices": [],
          "default": "10"
        }
      ],
      "example": ".leaderboard xp [amount=10]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "levelconfig",
      "category": "Leveling",
      "serverOnly": true,
      "description": "Configure the optional leveling system.",
      "prefix": ".levelconfig",
      "slash": "/levelconfig overview",
      "aliases": [
        ".xpconfig",
        ".levelsettings"
      ],
      "searchAliases": [
        "xpconfig",
        "levelsettings"
      ],
      "parentAliases": [],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [
        "leveling"
      ],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".levelconfig",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Enabled feature: leveling",
        "Server only"
      ]
    },
    {
      "name": "levelconfig announcements",
      "category": "Leveling",
      "serverOnly": true,
      "description": "Configure level-up announcements.",
      "prefix": ".levelconfig announcements <enabled> [channel]",
      "slash": "/levelconfig announcements",
      "aliases": [
        ".levelconfig announce"
      ],
      "searchAliases": [
        "announce"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [
        "leveling"
      ],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "enabled",
          "type": "yes/no",
          "required": true,
          "description": "Whether the setting is enabled.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "channel",
          "type": "TextChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".levelconfig announcements <enabled> [channel]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Enabled feature: leveling",
        "Server only"
      ]
    },
    {
      "name": "levelconfig cooldown",
      "category": "Leveling",
      "serverOnly": true,
      "description": "Set the bounded cooldown.",
      "prefix": ".levelconfig cooldown <seconds>",
      "slash": "/levelconfig cooldown",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "levelconfig",
          "aliases": [
            "xpconfig",
            "levelsettings"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [
        "leveling"
      ],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "seconds",
          "type": "integer (minimum 10, maximum 3600)",
          "required": true,
          "description": "Duration in seconds.",
          "minimum": 10,
          "maximum": 3600,
          "choices": []
        }
      ],
      "example": ".levelconfig cooldown <seconds>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Enabled feature: leveling",
        "Server only"
      ]
    },
    {
      "name": "levelconfig reset",
      "category": "Leveling",
      "serverOnly": true,
      "description": "Reset the selected levelconfig data.",
      "prefix": ".levelconfig reset <member>",
      "slash": "/levelconfig reset",
      "aliases": [
        ".levelconfig resetxp"
      ],
      "searchAliases": [
        "resetxp"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [
        "leveling"
      ],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".levelconfig reset <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Enabled feature: leveling",
        "Server only"
      ]
    },
    {
      "name": "levelconfig setxp",
      "category": "Leveling",
      "serverOnly": true,
      "description": "Set a member's XP to a bounded value.",
      "prefix": ".levelconfig setxp <member> <xp>",
      "slash": "/levelconfig setxp",
      "aliases": [
        ".levelconfig givexp"
      ],
      "searchAliases": [
        "givexp"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [
        "leveling"
      ],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "xp",
          "type": "integer (minimum 0, maximum 1000000000)",
          "required": true,
          "description": "XP amount.",
          "minimum": 0,
          "maximum": 1000000000,
          "choices": []
        }
      ],
      "example": ".levelconfig setxp <member> <xp>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Enabled feature: leveling",
        "Server only"
      ]
    },
    {
      "name": "levelconfig xp",
      "category": "Leveling",
      "serverOnly": true,
      "description": "Configure the bounded XP award range.",
      "prefix": ".levelconfig xp <minimum> <maximum>",
      "slash": "/levelconfig xp",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "levelconfig",
          "aliases": [
            "xpconfig",
            "levelsettings"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [
        "leveling"
      ],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "minimum",
          "type": "integer (minimum 1, maximum 1000)",
          "required": true,
          "description": "Minimum value.",
          "minimum": 1,
          "maximum": 1000,
          "choices": []
        },
        {
          "name": "maximum",
          "type": "integer (minimum 1, maximum 1000)",
          "required": true,
          "description": "Maximum value.",
          "minimum": 1,
          "maximum": 1000,
          "choices": []
        }
      ],
      "example": ".levelconfig xp <minimum> <maximum>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Enabled feature: leveling",
        "Server only"
      ]
    },
    {
      "name": "levels",
      "category": "Leveling",
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
        "levelboard",
        "xpleaderboard",
        "xpboard",
        "ranktop",
        "topxp"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "leveling"
      ],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".levels",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Enabled feature: leveling",
        "Server only"
      ]
    },
    {
      "name": "listall",
      "category": "Bot & Help",
      "serverOnly": false,
      "description": "Browse every command in category order with descriptions and access requirements.",
      "prefix": ".listall",
      "slash": "/bot listall",
      "aliases": [
        ".allcommands",
        ".commandlist",
        ".listcommands"
      ],
      "searchAliases": [
        "allcommands",
        "commandlist",
        "listcommands"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".listall",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "lock",
      "category": "Moderation",
      "serverOnly": true,
      "description": "Restrict channel messaging while preserving permission states for restoration; report incomplete enforcement.",
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
        "lockdown",
        "lockchannel",
        "channellock",
        "closechannel",
        "cerrar"
      ],
      "parentAliases": [],
      "access": "Manage Channels (channel), Manage Roles (channel)",
      "botPermissions": [
        "Manage Channels (channel)",
        "Manage Roles (channel)"
      ],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: guild",
      "parameters": [
        {
          "name": "reason",
          "type": "text",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "No reason provided"
        }
      ],
      "example": ".lock [reason=No reason provided]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "logs",
      "category": "Logging",
      "serverOnly": true,
      "description": "Configure private, mention-safe server event logging.",
      "prefix": ".logs",
      "slash": "/logs overview",
      "aliases": [
        ".logging",
        ".logconfig"
      ],
      "searchAliases": [
        "logging",
        "logconfig"
      ],
      "parentAliases": [],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".logs",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "logs bots",
      "category": "Logging",
      "serverOnly": true,
      "description": "Configure whether bot accounts are included.",
      "prefix": ".logs bots <state>",
      "slash": "/logs bots",
      "aliases": [
        ".logs includebots"
      ],
      "searchAliases": [
        "includebots"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "state",
          "type": "text",
          "required": true,
          "description": "Enable or disable the setting.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "on",
            "off"
          ]
        }
      ],
      "example": ".logs bots <state>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "logs categories",
      "category": "Logging",
      "serverOnly": true,
      "description": "List all 20 categories with their effective switch and destination.",
      "prefix": ".logs categories",
      "slash": "/logs categories",
      "aliases": [
        ".logs types"
      ],
      "searchAliases": [
        "types"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".logs categories",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "logs channel",
      "category": "Logging",
      "serverOnly": true,
      "description": "Set a category's staff-only destination; omit channel to inherit logs setup.",
      "prefix": ".logs channel <category> [channel]",
      "slash": "/logs channel",
      "aliases": [
        ".logs destination"
      ],
      "searchAliases": [
        "destination"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "category",
          "type": "text",
          "required": true,
          "description": "Discord category to use.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "messages",
            "members",
            "bans",
            "moderation",
            "roles",
            "channels",
            "voice",
            "server",
            "invites",
            "webhooks",
            "expressions",
            "profiles",
            "permissions",
            "automod",
            "security",
            "commands",
            "tickets",
            "bulk",
            "tasks",
            "logconfig"
          ]
        },
        {
          "name": "channel",
          "type": "TextChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".logs channel <category> [channel]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "logs disable",
      "category": "Logging",
      "serverOnly": true,
      "description": "Disable logs while preserving its settings.",
      "prefix": ".logs disable",
      "slash": "/logs disable",
      "aliases": [
        ".logs off"
      ],
      "searchAliases": [
        "off"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".logs disable",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "logs event",
      "category": "Logging",
      "serverOnly": true,
      "description": "Enable or disable one logged event type.",
      "prefix": ".logs event <event_name> <state>",
      "slash": "/logs event",
      "aliases": [
        ".logs events",
        ".logs toggle"
      ],
      "searchAliases": [
        "events",
        "toggle"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "event_name",
          "type": "text",
          "required": true,
          "description": "Event category to configure.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "messages",
            "members",
            "bans",
            "moderation",
            "roles",
            "channels",
            "voice",
            "server",
            "invites",
            "webhooks",
            "expressions",
            "profiles",
            "permissions",
            "automod",
            "security",
            "commands",
            "tickets",
            "bulk",
            "tasks",
            "logconfig",
            "joins",
            "leaves"
          ]
        },
        {
          "name": "state",
          "type": "text",
          "required": true,
          "description": "Enable or disable the setting.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "on",
            "off"
          ]
        }
      ],
      "example": ".logs event <event_name> <state>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "logs fields",
      "category": "Logging",
      "serverOnly": true,
      "description": "Choose comma-separated optional fields: details,before,after; or none.",
      "prefix": ".logs fields <category> [fields=details,before,after]",
      "slash": "/logs fields",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "logs",
          "aliases": [
            "logging",
            "logconfig"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "category",
          "type": "text",
          "required": true,
          "description": "Discord category to use.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "messages",
            "members",
            "bans",
            "moderation",
            "roles",
            "channels",
            "voice",
            "server",
            "invites",
            "webhooks",
            "expressions",
            "profiles",
            "permissions",
            "automod",
            "security",
            "commands",
            "tickets",
            "bulk",
            "tasks",
            "logconfig"
          ]
        },
        {
          "name": "fields",
          "type": "text",
          "required": false,
          "description": "Value for fields.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "details,before,after"
        }
      ],
      "example": ".logs fields <category> [fields=details,before,after]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "logs format",
      "category": "Logging",
      "serverOnly": true,
      "description": "Choose detailed/compact embeds and an optional title with {category}, {action}, {guild_id}.",
      "prefix": ".logs format <category> <style> [title={category}: {action}]",
      "slash": "/logs format",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "logs",
          "aliases": [
            "logging",
            "logconfig"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "category",
          "type": "text",
          "required": true,
          "description": "Discord category to use.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "messages",
            "members",
            "bans",
            "moderation",
            "roles",
            "channels",
            "voice",
            "server",
            "invites",
            "webhooks",
            "expressions",
            "profiles",
            "permissions",
            "automod",
            "security",
            "commands",
            "tickets",
            "bulk",
            "tasks",
            "logconfig"
          ]
        },
        {
          "name": "style",
          "type": "text",
          "required": true,
          "description": "Value for style.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "detailed",
            "compact"
          ]
        },
        {
          "name": "title",
          "type": "text",
          "required": false,
          "description": "Value for title.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "{category}: {action}"
        }
      ],
      "example": ".logs format <category> <style> [title={category}: {action}]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "logs health",
      "category": "Logging",
      "serverOnly": true,
      "description": "Inspect delivery counters and required intents/permissions; counters reset on restart.",
      "prefix": ".logs health",
      "slash": "/logs health",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "logs",
          "aliases": [
            "logging",
            "logconfig"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".logs health",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "logs ignore",
      "category": "Logging",
      "serverOnly": true,
      "description": "List channels excluded from event logging.",
      "prefix": ".logs ignore",
      "slash": "/logs ignore overview",
      "aliases": [
        ".logs ignored"
      ],
      "searchAliases": [
        "ignored"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".logs ignore",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "logs ignore add",
      "category": "Logging",
      "serverOnly": true,
      "description": "Add an entry to logs ignore.",
      "prefix": ".logs ignore add <channel>",
      "slash": "/logs ignore add",
      "aliases": [],
      "searchAliases": [],
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "channel",
          "type": "TextChannel",
          "required": true,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".logs ignore add <channel>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "logs ignore remove",
      "category": "Logging",
      "serverOnly": true,
      "description": "Remove an entry from logs ignore.",
      "prefix": ".logs ignore remove <channel>",
      "slash": "/logs ignore remove",
      "aliases": [
        ".logs ignore delete"
      ],
      "searchAliases": [
        "delete"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "channel",
          "type": "TextChannel",
          "required": true,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".logs ignore remove <channel>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "logs rate",
      "category": "Logging",
      "serverOnly": true,
      "description": "Set the server's shared log budget per minute; overflow is counted, not replayed.",
      "prefix": ".logs rate <limit>",
      "slash": "/logs rate",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "logs",
          "aliases": [
            "logging",
            "logconfig"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "limit",
          "type": "integer (minimum 5, maximum 120)",
          "required": true,
          "description": "Maximum number allowed.",
          "minimum": 5,
          "maximum": 120,
          "choices": []
        }
      ],
      "example": ".logs rate <limit>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "logs setup",
      "category": "Logging",
      "serverOnly": true,
      "description": "Configure and enable logs.",
      "prefix": ".logs setup <channel>",
      "slash": "/logs setup",
      "aliases": [
        ".logs enable",
        ".logs on"
      ],
      "searchAliases": [
        "enable",
        "on"
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
      "access": "Administrator (server)",
      "botPermissions": [
        "Embed Links (server)",
        "Send Messages (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "channel",
          "type": "TextChannel",
          "required": true,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".logs setup <channel>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "membercount",
      "category": "Members",
      "serverOnly": true,
      "description": "Show reported, cached, human, and bot member totals.",
      "prefix": ".membercount",
      "slash": "/members membercount",
      "aliases": [
        ".memberscount",
        ".servermembers"
      ],
      "searchAliases": [
        "memberscount",
        "servermembers"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: guild",
      "parameters": [],
      "example": ".membercount",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "memberhistory",
      "category": "Moderation",
      "serverOnly": true,
      "description": "Show bounded server-local membership history; restricted to moderators.",
      "prefix": ".memberhistory <target>",
      "slash": "/members memberhistory",
      "aliases": [
        ".userhistory",
        ".memberlog"
      ],
      "searchAliases": [
        "userhistory",
        "memberlog"
      ],
      "parentAliases": [],
      "access": "Moderate Members (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "target",
          "type": "text",
          "required": true,
          "description": "Member, role, message, or resource target.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".memberhistory <target>",
      "concurrency": "<MaxConcurrency per=<BucketType.member: 4> number=1 wait=False>",
      "notes": [
        "Current permissions and hierarchy still apply when using IDs. Reasons are limited to 1–400 characters without control characters. Duration inputs use minutes for bare numbers or s/m/h/d combinations, with a 64-character/ten-year parser limit; timeouts are limited to 28 days. New completed actions retain up to 1,000 server-local cases, visible privately through memberhistory. Cases are not reconstructed for past actions.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "messageinfo",
      "category": "Messages & Embeds",
      "serverOnly": true,
      "description": "Show metadata for an accessible message without exposing private channels.",
      "prefix": ".messageinfo [message]",
      "slash": "/messages messageinfo",
      "aliases": [
        ".msginfo",
        ".messageid"
      ],
      "searchAliases": [
        "msginfo",
        "messageid"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 12s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "text",
          "required": false,
          "description": "Message text, ID, or Discord message link.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".messageinfo [message]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "messagesearch",
      "category": "Messages & Embeds",
      "serverOnly": true,
      "description": "Search a bounded window of the current channel's visible message history.",
      "prefix": ".messagesearch <query>",
      "slash": "/messages messagesearch",
      "aliases": [
        ".searchmessages",
        ".msgsearch"
      ],
      "searchAliases": [
        "searchmessages",
        "msgsearch"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 20s; scope: member",
      "parameters": [
        {
          "name": "query",
          "type": "text",
          "required": true,
          "description": "Plain-text search query.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".messagesearch <query>",
      "concurrency": "<MaxConcurrency per=<BucketType.channel: 3> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "mines",
      "category": "Economy",
      "serverOnly": true,
      "description": "Choose 1–12 mines on a 4×4 board; reveal tiles or cash out. Clearing the board pays automatically. Use mines rules for odds, cap and timeout policy.",
      "prefix": ".mines <wager> [mine_count=4]",
      "slash": "/economy mines",
      "aliases": [
        ".mine",
        ".minesweeper"
      ],
      "searchAliases": [
        "mine",
        "minesweeper"
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
          "type": "text",
          "required": true,
          "description": "Number of coins to wager.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "mine_count",
          "type": "integer (minimum 1, maximum 12)",
          "required": false,
          "description": "Number of mines on the 4×4 board: 1–12 (default 4).",
          "minimum": 1,
          "maximum": 12,
          "choices": [],
          "default": "4"
        }
      ],
      "example": ".mines <wager> [mine_count=4]",
      "concurrency": null,
      "notes": [
        "4×4 board with 1–12 mines (default 4). Reveal safe tiles or cash out. Payout follows survival probability with a 3% house edge, rounded down and capped at 1,000×. Cashing out before a pick returns the stake. Clearing all safe tiles cashes out automatically. A mine or timeout loses the stake.",
        "Virtual server currency only. Use 1–100,000 or all; payouts include the stake. Interactive games cannot resume after a process restart.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Enabled feature: economy",
        "Server only"
      ]
    },
    {
      "name": "modlog",
      "category": "Logging",
      "serverOnly": true,
      "description": "Set or inspect the moderation case-log channel.",
      "prefix": ".modlog [channel]",
      "slash": "/moderation modlog",
      "aliases": [
        ".setmodlog",
        ".mlog"
      ],
      "searchAliases": [
        "setmodlog",
        "mlog"
      ],
      "parentAliases": [],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "channel",
          "type": "TextChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".modlog [channel]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
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
        "movechannel",
        "channelmove"
      ],
      "parentAliases": [],
      "access": "Manage Channels (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "GuildChannel",
          "required": true,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "destination",
          "type": "CategoryChannel",
          "required": false,
          "description": "Value for destination.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "position",
          "type": "integer (minimum 0, maximum 500)",
          "required": false,
          "description": "Channel position.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".move <channel> [destination] [position]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "nick",
      "category": "Moderation",
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
        "nickname",
        "setnick",
        "renick"
      ],
      "parentAliases": [],
      "access": "Manage Nicknames (server)",
      "botPermissions": [
        "Manage Nicknames (server)"
      ],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "nickname",
          "type": "text",
          "required": false,
          "description": "Nickname, or leave empty to reset.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".nick <member> [nickname]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "onlinemembers",
      "category": "Members",
      "serverOnly": true,
      "description": "Count cached online members when presence access is enabled.",
      "prefix": ".onlinemembers",
      "slash": "/members onlinemembers",
      "aliases": [
        ".online",
        ".onlinecount"
      ],
      "searchAliases": [
        "online",
        "onlinecount"
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
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "pat",
      "category": "Fun & Reactions",
      "serverOnly": false,
      "description": "Send a head-pat reaction to another member.",
      "prefix": ".pat <member>",
      "slash": "/fun pat",
      "aliases": [
        ".headpat"
      ],
      "searchAliases": [
        "headpat"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".pat <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding."
      ]
    },
    {
      "name": "pay",
      "category": "Economy",
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
        "transfer",
        "givecash",
        "givemoney",
        "givecoins",
        "paycoins",
        "pagar"
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
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 1000000000)",
          "required": true,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 1000000000,
          "choices": []
        }
      ],
      "example": ".pay <member> <amount>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Enabled feature: economy",
        "Server only"
      ]
    },
    {
      "name": "permissions",
      "category": "Members",
      "serverOnly": true,
      "description": "Show a member's effective permissions in a visible channel.",
      "prefix": ".permissions [member] [channel]",
      "slash": "/members permissions",
      "aliases": [
        ".perms",
        ".memberperms"
      ],
      "searchAliases": [
        "perms",
        "memberperms"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": false,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "channel",
          "type": "GuildChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".permissions [member] [channel]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "pi",
      "category": "Utility",
      "serverOnly": false,
      "description": "Display pi to a bounded number of decimal places.",
      "prefix": ".pi [digits=50]",
      "slash": "/fun pi",
      "aliases": [
        ".digits",
        ".pival"
      ],
      "searchAliases": [
        "digits",
        "pival"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: user",
      "parameters": [
        {
          "name": "digits",
          "type": "integer (minimum 1, maximum 1000)",
          "required": false,
          "description": "Value for digits.",
          "minimum": 1,
          "maximum": 1000,
          "choices": [],
          "default": "50"
        }
      ],
      "example": ".pi [digits=50]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "pin",
      "category": "Messages & Embeds",
      "serverOnly": true,
      "description": "Pin an accessible message with the required Pin Messages permission.",
      "prefix": ".pin [message]",
      "slash": "/messages pin",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [],
      "access": "Pin Messages (channel)",
      "botPermissions": [
        "Pin Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "text",
          "required": false,
          "description": "Message text, ID, or Discord message link.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".pin [message]",
      "concurrency": "<MaxConcurrency per=<BucketType.channel: 3> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "ping",
      "category": "Bot & Help",
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
        "latency",
        "pong",
        "pang",
        "speed",
        "latencia"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".ping",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "pins",
      "category": "Messages & Embeds",
      "serverOnly": true,
      "description": "List a bounded set of pinned messages in a visible channel.",
      "prefix": ".pins [channel]",
      "slash": "/messages pins",
      "aliases": [
        ".pinned",
        ".pinnedmessages"
      ],
      "searchAliases": [
        "pinned",
        "pinnedmessages"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "2 use(s) per 20s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "TextChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".pins [channel]",
      "concurrency": "<MaxConcurrency per=<BucketType.channel: 3> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "poke",
      "category": "Fun & Reactions",
      "serverOnly": false,
      "description": "Send a poke reaction to another member.",
      "prefix": ".poke <member>",
      "slash": "/fun poke",
      "aliases": [
        ".boop"
      ],
      "searchAliases": [
        "boop"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".poke <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding."
      ]
    },
    {
      "name": "poll",
      "category": "Messages & Embeds",
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
        "vote",
        "survey",
        "encuesta"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [
        "Add Reactions (channel)",
        "Embed Links (channel)",
        "Send Messages (channel)"
      ],
      "features": [],
      "cooldown": "2 use(s) per 30s; scope: member",
      "parameters": [
        {
          "name": "content",
          "type": "text",
          "required": true,
          "description": "Text content.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".poll <content>",
      "concurrency": "<MaxConcurrency per=<BucketType.channel: 3> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "prefix",
      "category": "Configuration",
      "serverOnly": true,
      "description": "Change this server's command prefix.",
      "prefix": ".prefix <prefix>",
      "slash": "/bot prefix",
      "aliases": [
        ".setprefix",
        ".changeprefix"
      ],
      "searchAliases": [
        "setprefix",
        "changeprefix"
      ],
      "parentAliases": [],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "prefix",
          "type": "text",
          "required": true,
          "description": "New command prefix (1–5 characters).",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".prefix <prefix>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "punch",
      "category": "Fun & Reactions",
      "serverOnly": false,
      "description": "Send a playful punch reaction to another member.",
      "prefix": ".punch <member>",
      "slash": "/fun punch",
      "aliases": [
        ".sock"
      ],
      "searchAliases": [
        "sock"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".punch <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding."
      ]
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
        "clear",
        "clean",
        "prune",
        "limpiar"
      ],
      "parentAliases": [],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 500)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 500,
          "choices": [],
          "default": "10"
        }
      ],
      "example": ".purge [amount=10]",
      "concurrency": "<MaxConcurrency per=<BucketType.channel: 3> number=1 wait=False>",
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
      "searchAliases": [],
      "parentAliases": [],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 15s; scope: channel",
      "parameters": [
        {
          "name": "message",
          "type": "Message",
          "required": true,
          "description": "Message text, ID, or Discord message link.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 200)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 200,
          "choices": [],
          "default": "50"
        }
      ],
      "example": ".purgeafter <message> [amount=50]",
      "concurrency": "<MaxConcurrency per=<BucketType.channel: 3> number=1 wait=False>",
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
      "searchAliases": [],
      "parentAliases": [],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 15s; scope: channel",
      "parameters": [
        {
          "name": "message",
          "type": "Message",
          "required": true,
          "description": "Message text, ID, or Discord message link.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 200)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 200,
          "choices": [],
          "default": "50"
        }
      ],
      "example": ".purgebefore <message> [amount=50]",
      "concurrency": "<MaxConcurrency per=<BucketType.channel: 3> number=1 wait=False>",
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
      "searchAliases": [],
      "parentAliases": [],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 12s; scope: channel",
      "parameters": [
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 200)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 200,
          "choices": [],
          "default": "20"
        }
      ],
      "example": ".purgebots [amount=20]",
      "concurrency": "<MaxConcurrency per=<BucketType.channel: 3> number=1 wait=False>",
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
      "searchAliases": [],
      "parentAliases": [],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 12s; scope: channel",
      "parameters": [
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 200)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 200,
          "choices": [],
          "default": "20"
        }
      ],
      "example": ".purgecommands [amount=20]",
      "concurrency": "<MaxConcurrency per=<BucketType.channel: 3> number=1 wait=False>",
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
      "searchAliases": [],
      "parentAliases": [],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 12s; scope: channel",
      "parameters": [
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 200)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 200,
          "choices": [],
          "default": "20"
        }
      ],
      "example": ".purgeembeds [amount=20]",
      "concurrency": "<MaxConcurrency per=<BucketType.channel: 3> number=1 wait=False>",
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
        "purgeattachments"
      ],
      "parentAliases": [],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 12s; scope: channel",
      "parameters": [
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 200)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 200,
          "choices": [],
          "default": "20"
        }
      ],
      "example": ".purgefiles [amount=20]",
      "concurrency": "<MaxConcurrency per=<BucketType.channel: 3> number=1 wait=False>",
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
        "pfilter",
        "filteredpurge"
      ],
      "parentAliases": [],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 12s; scope: channel",
      "parameters": [],
      "example": ".purgefilter",
      "concurrency": "<MaxConcurrency per=<BucketType.channel: 3> number=1 wait=False>",
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
        "files"
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
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 200)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 200,
          "choices": [],
          "default": "20"
        }
      ],
      "example": ".purgefilter attachments [amount=20]",
      "concurrency": null,
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "purgefilter bots",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably delete bounded recent messages sent by bots.",
      "prefix": ".purgefilter bots [amount=20]",
      "slash": "/purgefilter bots",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "purgefilter",
          "aliases": [
            "pfilter",
            "filteredpurge"
          ]
        }
      ],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 200)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 200,
          "choices": [],
          "default": "20"
        }
      ],
      "example": ".purgefilter bots [amount=20]",
      "concurrency": null,
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
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
        "text"
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
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 200)",
          "required": true,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 200,
          "choices": []
        },
        {
          "name": "text",
          "type": "text",
          "required": true,
          "description": "Text to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".purgefilter contains <amount> <text>",
      "concurrency": null,
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "purgefilter humans",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably delete bounded recent messages sent by human accounts.",
      "prefix": ".purgefilter humans [amount=20]",
      "slash": "/purgefilter humans",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "purgefilter",
          "aliases": [
            "pfilter",
            "filteredpurge"
          ]
        }
      ],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 200)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 200,
          "choices": [],
          "default": "20"
        }
      ],
      "example": ".purgefilter humans [amount=20]",
      "concurrency": null,
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "purgefilter links",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably delete bounded recent messages containing HTTP or HTTPS links.",
      "prefix": ".purgefilter links [amount=20]",
      "slash": "/purgefilter links",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "purgefilter",
          "aliases": [
            "pfilter",
            "filteredpurge"
          ]
        }
      ],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 200)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 200,
          "choices": [],
          "default": "20"
        }
      ],
      "example": ".purgefilter links [amount=20]",
      "concurrency": null,
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "purgefilter reactions",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably delete bounded recent messages that have reactions.",
      "prefix": ".purgefilter reactions [amount=20]",
      "slash": "/purgefilter reactions",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "purgefilter",
          "aliases": [
            "pfilter",
            "filteredpurge"
          ]
        }
      ],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 200)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 200,
          "choices": [],
          "default": "20"
        }
      ],
      "example": ".purgefilter reactions [amount=20]",
      "concurrency": null,
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
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
        "member"
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
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 200)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 200,
          "choices": [],
          "default": "20"
        }
      ],
      "example": ".purgefilter user <member> [amount=20]",
      "concurrency": null,
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "purgeimages",
      "category": "Cleanup",
      "serverOnly": true,
      "description": "Confirmably remove bounded image attachments and image embeds.",
      "prefix": ".purgeimages [amount=20]",
      "slash": "/cleanup purgeimages",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 12s; scope: channel",
      "parameters": [
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 200)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 200,
          "choices": [],
          "default": "20"
        }
      ],
      "example": ".purgeimages [amount=20]",
      "concurrency": "<MaxConcurrency per=<BucketType.channel: 3> number=1 wait=False>",
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
      "searchAliases": [],
      "parentAliases": [],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 12s; scope: channel",
      "parameters": [
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 200)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 200,
          "choices": [],
          "default": "20"
        }
      ],
      "example": ".purgeinvites [amount=20]",
      "concurrency": "<MaxConcurrency per=<BucketType.channel: 3> number=1 wait=False>",
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
      "searchAliases": [],
      "parentAliases": [],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 12s; scope: channel",
      "parameters": [
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 200)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 200,
          "choices": [],
          "default": "20"
        }
      ],
      "example": ".purgelinks [amount=20]",
      "concurrency": "<MaxConcurrency per=<BucketType.channel: 3> number=1 wait=False>",
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
        "purgehumans"
      ],
      "parentAliases": [],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Manage Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 12s; scope: channel",
      "parameters": [
        {
          "name": "amount",
          "type": "integer (minimum 1, maximum 200)",
          "required": false,
          "description": "Number or amount to use.",
          "minimum": 1,
          "maximum": 200,
          "choices": [],
          "default": "20"
        }
      ],
      "example": ".purgeusers [amount=20]",
      "concurrency": "<MaxConcurrency per=<BucketType.channel: 3> number=1 wait=False>",
      "notes": [
        "Confirm cleanup includes older messages. Recent only (faster) skips messages near or beyond Discord’s two-week bulk limit. Recent messages use batches of up to 100; older messages require individual requests. Progress and partial failures are reported, and Discord retry delays are always respected.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "quote",
      "category": "Messages & Embeds",
      "serverOnly": true,
      "description": "Quote an accessible server message with a safe link to its original.",
      "prefix": ".quote [message]",
      "slash": "/messages quote",
      "aliases": [
        ".quoteMessage",
        ".qmsg"
      ],
      "searchAliases": [
        "quoteMessage",
        "qmsg"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 12s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "text",
          "required": false,
          "description": "Message text, ID, or Discord message link.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".quote [message]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "rank",
      "category": "Leveling",
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
        "level",
        "xp",
        "lvl",
        "rango"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "leveling"
      ],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": false,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".rank [member]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Enabled feature: leveling",
        "Server only"
      ]
    },
    {
      "name": "reactioninfo",
      "category": "Messages & Embeds",
      "serverOnly": true,
      "description": "Summarize reaction counts on an accessible message without listing users.",
      "prefix": ".reactioninfo [message]",
      "slash": "/messages reactioninfo",
      "aliases": [
        ".reactions",
        ".reactioninformation"
      ],
      "searchAliases": [
        "reactions",
        "reactioninformation"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 12s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "text",
          "required": false,
          "description": "Message text, ID, or Discord message link.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".reactioninfo [message]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "reactionrole",
      "category": "Roles",
      "serverOnly": true,
      "description": "Attach a safe permissionless role to a message reaction.",
      "prefix": ".reactionrole <message_id> <emoji> <role>",
      "slash": "/role reactionrole",
      "aliases": [
        ".rr",
        ".rolreaccion"
      ],
      "searchAliases": [
        "rr",
        "rolreaccion"
      ],
      "parentAliases": [],
      "access": "Administrator (server)",
      "botPermissions": [
        "Manage Roles (server)"
      ],
      "features": [
        "server_options"
      ],
      "cooldown": "1 use(s) per 10s; scope: guild",
      "parameters": [
        {
          "name": "message_id",
          "type": "integer",
          "required": true,
          "description": "Numeric Discord message ID.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "emoji",
          "type": "text",
          "required": true,
          "description": "Unicode or custom emoji.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".reactionrole <message_id> <emoji> <role>",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Enabled feature: server_options",
        "Server only"
      ]
    },
    {
      "name": "reminder",
      "category": "Utility",
      "serverOnly": true,
      "description": "Create and manage your persistent reminders.",
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
        "remind",
        "remindme",
        "timer",
        "reminders",
        "recordatorio"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "duration",
          "type": "text",
          "required": false,
          "description": "Minutes or s/m/h/d combinations; at most 64 characters/10 years. Timeouts: max 28 days.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "text",
          "type": "text",
          "required": false,
          "description": "Text to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".reminder [duration] [text]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "reminder cancel",
      "category": "Utility",
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
        "delete",
        "remove",
        "del"
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
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "reminder_id",
          "type": "text",
          "required": true,
          "description": "Value for reminder id.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".reminder cancel <reminder_id>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "reminder clear",
      "category": "Utility",
      "serverOnly": true,
      "description": "Cancel all reminders that you own in this server.",
      "prefix": ".reminder clear",
      "slash": "/reminder clear",
      "aliases": [
        ".reminder clearall",
        ".reminder purge"
      ],
      "searchAliases": [
        "clearall",
        "purge"
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
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".reminder clear",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "reminder list",
      "category": "Utility",
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
        "ls",
        "all",
        "show"
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
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".reminder list",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "reminder set",
      "category": "Utility",
      "serverOnly": true,
      "description": "Update a setting in reminder.",
      "prefix": ".reminder set <duration> <text>",
      "slash": "/reminder set",
      "aliases": [
        ".reminder add",
        ".reminder create"
      ],
      "searchAliases": [
        "add",
        "create"
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
          "type": "text",
          "required": true,
          "description": "Minutes or s/m/h/d combinations; at most 64 characters/10 years. Timeouts: max 28 days.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "text",
          "type": "text",
          "required": true,
          "description": "Text to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".reminder set <duration> <text>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
        "renamechannel",
        "channelrename"
      ],
      "parentAliases": [],
      "access": "Manage Channels (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "GuildChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "name",
          "type": "text",
          "required": true,
          "description": "Name to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".rename [channel] <name>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "richest",
      "category": "Economy",
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
        "moneyboard",
        "cashboard",
        "balancetop",
        "topcoins"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [
        "economy"
      ],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".richest",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Enabled feature: economy",
        "Server only"
      ]
    },
    {
      "name": "role",
      "category": "Roles",
      "serverOnly": true,
      "description": "Safely add or remove permissionless roles from members.",
      "prefix": ".role [member]",
      "slash": "/role overview",
      "aliases": [
        ".roles"
      ],
      "searchAliases": [
        "roles"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": false,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".role [member]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "role add",
      "category": "Roles",
      "serverOnly": true,
      "description": "Add an entry to role.",
      "prefix": ".role add <member> <role>",
      "slash": "/role add",
      "aliases": [
        ".role give",
        ".role grant"
      ],
      "searchAliases": [
        "give",
        "grant"
      ],
      "parentAliases": [
        {
          "name": "role",
          "aliases": [
            "roles"
          ]
        }
      ],
      "access": "Manage Roles (server)",
      "botPermissions": [
        "Manage Roles (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".role add <member> <role>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "role remove",
      "category": "Roles",
      "serverOnly": true,
      "description": "Remove an entry from role.",
      "prefix": ".role remove <member> <role>",
      "slash": "/role remove",
      "aliases": [
        ".role take",
        ".role revoke"
      ],
      "searchAliases": [
        "take",
        "revoke"
      ],
      "parentAliases": [
        {
          "name": "role",
          "aliases": [
            "roles"
          ]
        }
      ],
      "access": "Manage Roles (server)",
      "botPermissions": [
        "Manage Roles (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".role remove <member> <role>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "roleinfo",
      "category": "Roles",
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
        "ri",
        "rolinfo",
        "inforol"
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
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".roleinfo <role>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "roulette",
      "category": "Economy",
      "serverOnly": true,
      "description": "Roulette: green/exact numbers 36×, colors/parity/low/high 2×, dozens/columns 3×. Use roulette rules for details.",
      "prefix": ".roulette <wager> [bet]",
      "slash": "/economy roulette",
      "aliases": [
        ".rlt",
        ".wheel"
      ],
      "searchAliases": [
        "rlt",
        "wheel"
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
          "type": "text",
          "required": true,
          "description": "Number of coins to wager.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "bet",
          "type": "text",
          "required": false,
          "description": "Bet type or value.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".roulette <wager> [bet]",
      "concurrency": null,
      "notes": [
        "Single-zero wheel (0–36). Green or exact number: 36× return. Red/black, odd/even, low (1–18), high (19–36): 2×. dozen1/2/3 and column1/2/3: 3×. Zero loses all non-green/non-zero bets.",
        "Virtual server currency only. Use 1–100,000 or all; payouts include the stake. Interactive games cannot resume after a process restart.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Enabled feature: economy",
        "Server only"
      ]
    },
    {
      "name": "rps",
      "category": "Games",
      "serverOnly": true,
      "description": "Play rock, paper, scissors against skye.",
      "prefix": ".rps [opponent]",
      "slash": "/games rps",
      "aliases": [
        ".rockpaperscissors",
        ".roshambo"
      ],
      "searchAliases": [
        "rockpaperscissors",
        "roshambo"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "opponent",
          "type": "Member",
          "required": false,
          "description": "Member to challenge.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".rps [opponent]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "say",
      "category": "Messages & Embeds",
      "serverOnly": true,
      "description": "Repeat text without allowing mentions; restricted to message managers.",
      "prefix": ".say <message>",
      "slash": "/fun say",
      "aliases": [
        ".echo",
        ".repeat"
      ],
      "searchAliases": [
        "echo",
        "repeat"
      ],
      "parentAliases": [],
      "access": "Manage Messages (channel)",
      "botPermissions": [
        "Send Messages (channel)"
      ],
      "features": [],
      "cooldown": "3 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "text",
          "required": true,
          "description": "Message text, ID, or Discord message link.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".say <message>",
      "concurrency": "<MaxConcurrency per=<BucketType.member: 4> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "scamcatcher",
      "category": "Security",
      "serverOnly": true,
      "description": "Create and enable a warning channel at the top. Posting triggers message deletion and a kick with reason compromised account. Requires Manage Server; admins qualify.",
      "prefix": ".scamcatcher",
      "slash": "/scamcatcher overview",
      "aliases": [
        ".scambait",
        ".scamtrap",
        ".honeypot"
      ],
      "searchAliases": [
        "scambait",
        "scamtrap",
        "honeypot"
      ],
      "parentAliases": [],
      "access": "Manage Guild (server)",
      "botPermissions": [
        "Setup: Manage Channels, Kick Members, Manage Messages, View Channel, Send Messages and Read Message History"
      ],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: guild",
      "parameters": [],
      "example": ".scamcatcher",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only",
        "Setup arms an automatic kick-and-delete trap; stats/history are private and require Manage Server."
      ]
    },
    {
      "name": "scamcatcher disable",
      "category": "Security",
      "serverOnly": true,
      "description": "Stop future automatic kicks without deleting the channel or saved records.",
      "prefix": ".scamcatcher disable",
      "slash": "/scamcatcher disable",
      "aliases": [
        ".scamcatcher off"
      ],
      "searchAliases": [
        "off"
      ],
      "parentAliases": [
        {
          "name": "scamcatcher",
          "aliases": [
            "scambait",
            "scamtrap",
            "honeypot"
          ]
        }
      ],
      "access": "Manage Guild (server)",
      "botPermissions": [
        "Setup: Manage Channels, Kick Members, Manage Messages, View Channel, Send Messages and Read Message History"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".scamcatcher disable",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only",
        "Setup arms an automatic kick-and-delete trap; stats/history are private and require Manage Server."
      ]
    },
    {
      "name": "scamcatcher history",
      "category": "Security",
      "serverOnly": true,
      "description": "Privately list recent events with account IDs, times and separate kick/deletion outcomes; optionally filter by user.",
      "prefix": ".scamcatcher history [page=1] [user]",
      "slash": "/scamcatcher history",
      "aliases": [
        ".scamcatcher events"
      ],
      "searchAliases": [
        "events"
      ],
      "parentAliases": [
        {
          "name": "scamcatcher",
          "aliases": [
            "scambait",
            "scamtrap",
            "honeypot"
          ]
        }
      ],
      "access": "Manage Guild (server)",
      "botPermissions": [
        "Setup: Manage Channels, Kick Members, Manage Messages, View Channel, Send Messages and Read Message History"
      ],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: user",
      "parameters": [
        {
          "name": "page",
          "type": "integer (minimum 1, maximum 1000000)",
          "required": false,
          "description": "Value for page.",
          "minimum": 1,
          "maximum": 1000000,
          "choices": [],
          "default": "1"
        },
        {
          "name": "user",
          "type": "User",
          "required": false,
          "description": "Discord user to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".scamcatcher history [page=1] [user]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only",
        "Setup arms an automatic kick-and-delete trap; stats/history are private and require Manage Server."
      ]
    },
    {
      "name": "scamcatcher kicked",
      "category": "Security",
      "serverOnly": true,
      "description": "Privately list confirmed kicked accounts, IDs and timestamps, including accounts that left the server.",
      "prefix": ".scamcatcher kicked [page=1] [user]",
      "slash": "/scamcatcher kicked",
      "aliases": [
        ".scamcatcher accounts",
        ".scamcatcher caught"
      ],
      "searchAliases": [
        "accounts",
        "caught"
      ],
      "parentAliases": [
        {
          "name": "scamcatcher",
          "aliases": [
            "scambait",
            "scamtrap",
            "honeypot"
          ]
        }
      ],
      "access": "Manage Guild (server)",
      "botPermissions": [
        "Setup: Manage Channels, Kick Members, Manage Messages, View Channel, Send Messages and Read Message History"
      ],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: user",
      "parameters": [
        {
          "name": "page",
          "type": "integer (minimum 1, maximum 1000000)",
          "required": false,
          "description": "Value for page.",
          "minimum": 1,
          "maximum": 1000000,
          "choices": [],
          "default": "1"
        },
        {
          "name": "user",
          "type": "User",
          "required": false,
          "description": "Discord user to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".scamcatcher kicked [page=1] [user]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only",
        "Setup arms an automatic kick-and-delete trap; stats/history are private and require Manage Server."
      ]
    },
    {
      "name": "scamcatcher stats",
      "category": "Security",
      "serverOnly": true,
      "description": "Privately view confirmed kicks, deleted messages, failures and retained unique-account counts.",
      "prefix": ".scamcatcher stats",
      "slash": "/scamcatcher stats",
      "aliases": [
        ".scamcatcher statistics"
      ],
      "searchAliases": [
        "statistics"
      ],
      "parentAliases": [
        {
          "name": "scamcatcher",
          "aliases": [
            "scambait",
            "scamtrap",
            "honeypot"
          ]
        }
      ],
      "access": "Manage Guild (server)",
      "botPermissions": [
        "Setup: Manage Channels, Kick Members, Manage Messages, View Channel, Send Messages and Read Message History"
      ],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: user",
      "parameters": [],
      "example": ".scamcatcher stats",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only",
        "Setup arms an automatic kick-and-delete trap; stats/history are private and require Manage Server."
      ]
    },
    {
      "name": "scamcatcher status",
      "category": "Security",
      "serverOnly": true,
      "description": "Show whether the trap is enabled, its channel and required bot permissions.",
      "prefix": ".scamcatcher status",
      "slash": "/scamcatcher status",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "scamcatcher",
          "aliases": [
            "scambait",
            "scamtrap",
            "honeypot"
          ]
        }
      ],
      "access": "Manage Guild (server)",
      "botPermissions": [
        "Setup: Manage Channels, Kick Members, Manage Messages, View Channel, Send Messages and Read Message History"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".scamcatcher status",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only",
        "Setup arms an automatic kick-and-delete trap; stats/history are private and require Manage Server."
      ]
    },
    {
      "name": "scramble",
      "category": "Games",
      "serverOnly": true,
      "description": "Start a timed word-scramble game in this channel.",
      "prefix": ".scramble",
      "slash": "/fun scramble",
      "aliases": [
        ".wordscramble",
        ".jumble"
      ],
      "searchAliases": [
        "wordscramble",
        "jumble"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: channel",
      "parameters": [],
      "example": ".scramble",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverbanner",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "Show or safely update the native Discord server banner.",
      "prefix": ".serverbanner [url] [attachment (upload a file)]",
      "slash": "/serverconfig serverbanner",
      "aliases": [
        ".guildbanner"
      ],
      "searchAliases": [
        "guildbanner"
      ],
      "parentAliases": [],
      "access": "Everyone to view; Administrator to change",
      "botPermissions": [
        "Manage Server to change"
      ],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "url",
          "type": "text",
          "required": false,
          "description": "Trusted image URL, reset, or leave empty to view.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "attachment",
          "type": "Attachment",
          "required": false,
          "description": "Image attachment to upload.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".serverbanner [url] [attachment (upload a file)]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverboosts",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "Show boost level, count, cached boosters, and bitrate limit.",
      "prefix": ".serverboosts",
      "slash": "/serverconfig serverboosts",
      "aliases": [
        ".guildboosts",
        ".booststatus"
      ],
      "searchAliases": [
        "guildboosts",
        "booststatus"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [],
      "example": ".serverboosts",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverconfig",
      "category": "Server Setup",
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
        "serveroptions",
        "serveropts",
        "sconfig"
      ],
      "parentAliases": [],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".serverconfig",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverconfig autoresponse",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "Add or remove an exact-match automatic response. Use serverconfig placeholders autoresponse for supported user/server/channel placeholders.",
      "prefix": ".serverconfig autoresponse <action> <trigger> [response]",
      "slash": "/serverconfig autoresponse",
      "aliases": [
        ".serverconfig response"
      ],
      "searchAliases": [
        "response"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "action",
          "type": "text",
          "required": true,
          "description": "Action to perform.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "trigger",
          "type": "text",
          "required": true,
          "description": "Value for trigger.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "response",
          "type": "text",
          "required": false,
          "description": "Response or enforcement action.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".serverconfig autoresponse <action> <trigger> [response]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverconfig autorole",
      "category": "Roles",
      "serverOnly": true,
      "description": "Add or remove a safe automatic join role.",
      "prefix": ".serverconfig autorole <action> <role>",
      "slash": "/serverconfig autorole",
      "aliases": [],
      "searchAliases": [],
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
      "access": "Administrator (server)",
      "botPermissions": [
        "Manage Roles (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "action",
          "type": "text",
          "required": true,
          "description": "Action to perform.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "role",
          "type": "Role",
          "required": true,
          "description": "Discord role to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".serverconfig autorole <action> <role>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "serverconfig boost",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "Set boost announcements alongside welcome/leave. Requires server_options and visible Discord boost system messages. Use serverconfig placeholders boost for all supported placeholders.",
      "prefix": ".serverconfig boost <channel> [message=🎵 Thank you {mention} for boosting {server}! 💙]",
      "slash": "/boostmessages setup",
      "aliases": [
        ".serverconfig boostmessage"
      ],
      "searchAliases": [
        "boostmessage"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "channel",
          "type": "TextChannel",
          "required": true,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "message",
          "type": "text",
          "required": false,
          "description": "Message text, ID, or Discord message link.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "🎵 Thank you {mention} for boosting {server}! 💙"
        }
      ],
      "example": ".serverconfig boost <channel> [message=🎵 Thank you {mention} for boosting {server}! 💙]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "serverconfig boostoff",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "Disable boost announcements while preserving the message template.",
      "prefix": ".serverconfig boostoff",
      "slash": "/boostmessages disable",
      "aliases": [
        ".serverconfig disableboost"
      ],
      "searchAliases": [
        "disableboost"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".serverconfig boostoff",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverconfig customcommand",
      "category": "Configuration",
      "serverOnly": true,
      "description": "Add or remove a bounded custom response command.",
      "prefix": ".serverconfig customcommand <action> <name> [response]",
      "slash": "/serverconfig customcommand",
      "aliases": [
        ".serverconfig command",
        ".serverconfig cc"
      ],
      "searchAliases": [
        "command",
        "cc"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "action",
          "type": "text",
          "required": true,
          "description": "Action to perform.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "name",
          "type": "text",
          "required": true,
          "description": "Name to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "response",
          "type": "text",
          "required": false,
          "description": "Response or enforcement action.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".serverconfig customcommand <action> <name> [response]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverconfig leave",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "Configure leave text. Use serverconfig placeholders leave; mentions display without pings.",
      "prefix": ".serverconfig leave <channel> [message={user} has left {server}.]",
      "slash": "/serverconfig leave",
      "aliases": [],
      "searchAliases": [],
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "channel",
          "type": "TextChannel",
          "required": true,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "message",
          "type": "text",
          "required": false,
          "description": "Message text, ID, or Discord message link.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "{user} has left {server}."
        }
      ],
      "example": ".serverconfig leave <channel> [message={user} has left {server}.]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "serverconfig leaveoff",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "Disable server leave messages.",
      "prefix": ".serverconfig leaveoff",
      "slash": "/serverconfig leaveoff",
      "aliases": [
        ".serverconfig disableleave"
      ],
      "searchAliases": [
        "disableleave"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".serverconfig leaveoff",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverconfig placeholders",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "List supported placeholders per type: welcome, leave, boost, autoresponse, customcommand.",
      "prefix": ".serverconfig placeholders [message_type=welcome]",
      "slash": "/automation placeholders",
      "aliases": [],
      "searchAliases": [],
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "message_type",
          "type": "text",
          "required": false,
          "description": "Value for message type.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "welcome",
            "leave",
            "boost",
            "autoresponse",
            "customcommand"
          ],
          "default": "welcome"
        }
      ],
      "example": ".serverconfig placeholders [message_type=welcome]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverconfig removebutton",
      "category": "Roles",
      "serverOnly": true,
      "description": "Remove a saved button-role mapping.",
      "prefix": ".serverconfig removebutton <message_id>",
      "slash": "/serverconfig removebutton",
      "aliases": [],
      "searchAliases": [],
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "message_id",
          "type": "integer",
          "required": true,
          "description": "Numeric Discord message ID.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".serverconfig removebutton <message_id>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverconfig removereaction",
      "category": "Roles",
      "serverOnly": true,
      "description": "Remove a saved reaction-role mapping.",
      "prefix": ".serverconfig removereaction <message_id> <emoji>",
      "slash": "/serverconfig removereaction",
      "aliases": [],
      "searchAliases": [],
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "message_id",
          "type": "integer",
          "required": true,
          "description": "Numeric Discord message ID.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "emoji",
          "type": "text",
          "required": true,
          "description": "Unicode or custom emoji.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".serverconfig removereaction <message_id> <emoji>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverconfig timezone",
      "category": "Configuration",
      "serverOnly": true,
      "description": "Set the server's validated default IANA timezone.",
      "prefix": ".serverconfig timezone <timezone>",
      "slash": "/serverconfig timezone",
      "aliases": [
        ".serverconfig tz",
        ".serverconfig servertimezone"
      ],
      "searchAliases": [
        "tz",
        "servertimezone"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 10s; scope: guild",
      "parameters": [
        {
          "name": "timezone",
          "type": "text",
          "required": true,
          "description": "IANA timezone such as Europe/London.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".serverconfig timezone <timezone>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverconfig welcome",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "Configure welcome text. Use serverconfig placeholders welcome for shared user/server placeholders.",
      "prefix": ".serverconfig welcome <channel> [message=Welcome {mention} to {server}!]",
      "slash": "/serverconfig welcome",
      "aliases": [],
      "searchAliases": [],
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "channel",
          "type": "TextChannel",
          "required": true,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "message",
          "type": "text",
          "required": false,
          "description": "Message text, ID, or Discord message link.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "Welcome {mention} to {server}!"
        }
      ],
      "example": ".serverconfig welcome <channel> [message=Welcome {mention} to {server}!]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "serverconfig welcomeoff",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "Disable server welcome messages.",
      "prefix": ".serverconfig welcomeoff",
      "slash": "/serverconfig welcomeoff",
      "aliases": [
        ".serverconfig disablewelcome"
      ],
      "searchAliases": [
        "disablewelcome"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".serverconfig welcomeoff",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverdescription",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "Set or clear the native Discord server description.",
      "prefix": ".serverdescription <description>",
      "slash": "/serverconfig serverdescription",
      "aliases": [
        ".guilddescription",
        ".serverdesc"
      ],
      "searchAliases": [
        "guilddescription",
        "serverdesc"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: guild",
      "parameters": [
        {
          "name": "description",
          "type": "text",
          "required": true,
          "description": "Description text, or clear where supported.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".serverdescription <description>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serveremojis",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "List bounded custom emoji details for this server.",
      "prefix": ".serveremojis",
      "slash": "/serverconfig serveremojis",
      "aliases": [
        ".guildemojis"
      ],
      "searchAliases": [
        "guildemojis"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [],
      "example": ".serveremojis",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverfeatures",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "Show native Discord capabilities and enabled skye modules.",
      "prefix": ".serverfeatures",
      "slash": "/serverconfig serverfeatures",
      "aliases": [
        ".guildfeatures"
      ],
      "searchAliases": [
        "guildfeatures"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [],
      "example": ".serverfeatures",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "servericon",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "Show or safely update the native Discord server icon.",
      "prefix": ".servericon [url] [attachment (upload a file)]",
      "slash": "/serverconfig servericon",
      "aliases": [
        ".guildicon"
      ],
      "searchAliases": [
        "guildicon"
      ],
      "parentAliases": [],
      "access": "Everyone to view; Administrator to change",
      "botPermissions": [
        "Manage Server to change"
      ],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "url",
          "type": "text",
          "required": false,
          "description": "Trusted image URL, reset, or leave empty to view.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "attachment",
          "type": "Attachment",
          "required": false,
          "description": "Image attachment to upload.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".servericon [url] [attachment (upload a file)]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverinfo",
      "category": "Server Setup",
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
        "si",
        "server",
        "guildinfo",
        "sinfo",
        "servidor",
        "infoservidor"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [],
      "example": ".serverinfo",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "servername",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "Change the native Discord server name with validation and audit reason.",
      "prefix": ".servername <name>",
      "slash": "/serverconfig servername",
      "aliases": [
        ".guildname"
      ],
      "searchAliases": [
        "guildname"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: guild",
      "parameters": [
        {
          "name": "name",
          "type": "text",
          "required": true,
          "description": "Name to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".servername <name>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverroles",
      "category": "Roles",
      "serverOnly": true,
      "description": "List a bounded summary of the server's roles.",
      "prefix": ".serverroles",
      "slash": "/serverconfig serverroles",
      "aliases": [
        ".guildroles"
      ],
      "searchAliases": [
        "guildroles"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [],
      "example": ".serverroles",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverrules",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "Show the visible rules channel and server safety levels.",
      "prefix": ".serverrules",
      "slash": "/serverconfig serverrules",
      "aliases": [
        ".guildrules"
      ],
      "searchAliases": [
        "guildrules"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [],
      "example": ".serverrules",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serversetup",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "Open or resume guided core server setup. Configure existing features, channels, roles and thresholds; each change saves separately. Finish shows current saved settings.",
      "prefix": ".serversetup",
      "slash": "/setup overview",
      "aliases": [
        ".setup",
        ".setupwizard"
      ],
      "searchAliases": [
        "setup",
        "setupwizard"
      ],
      "parentAliases": [],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 10s; scope: guild",
      "parameters": [],
      "example": ".serversetup",
      "concurrency": null,
      "notes": [
        "Use /setup overview for a private wizard, or .serversetup in a staff-only text channel. Choose a section and setting, optionally select channels/roles, then Configure. Each operation uses the original command checks and saves independently. Reopen to resume; Finish shows saved state, not a live delivery guarantee.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Only the initiating administrator can use this menu. Anti-nuke owner restrictions still apply.",
        "Server only"
      ]
    },
    {
      "name": "serverstats",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "Summarize members, channels, roles, assets, voice use, and boosts.",
      "prefix": ".serverstats",
      "slash": "/serverconfig serverstats",
      "aliases": [
        ".guildstats"
      ],
      "searchAliases": [
        "guildstats"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: guild",
      "parameters": [],
      "example": ".serverstats",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverstickers",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "List bounded custom sticker details for this server.",
      "prefix": ".serverstickers",
      "slash": "/serverconfig serverstickers",
      "aliases": [
        ".guildstickers"
      ],
      "searchAliases": [
        "guildstickers"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [],
      "example": ".serverstickers",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serververification",
      "category": "Server Setup",
      "serverOnly": true,
      "description": "Change the native server verification level safely.",
      "prefix": ".serververification <level>",
      "slash": "/serverconfig serververification",
      "aliases": [
        ".verificationlevel"
      ],
      "searchAliases": [
        "verificationlevel"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: guild",
      "parameters": [
        {
          "name": "level",
          "type": "text",
          "required": true,
          "description": "Level or verification setting.",
          "minimum": null,
          "maximum": null,
          "choices": [
            "none",
            "low",
            "medium",
            "high",
            "highest"
          ]
        }
      ],
      "example": ".serververification <level>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "serverwhitelist",
      "category": "Bot Owner",
      "serverOnly": false,
      "description": "Privately list authorized server IDs. Owner 820292272209002526 only; add/remove a server using its ID.",
      "prefix": ".serverwhitelist",
      "slash": "/serverwhitelist overview",
      "aliases": [
        ".guildwhitelist"
      ],
      "searchAliases": [
        "guildwhitelist"
      ],
      "parentAliases": [],
      "access": "Whitelist owner (820292272209002526 only)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".serverwhitelist",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "serverwhitelist add",
      "category": "Bot Owner",
      "serverOnly": false,
      "description": "Authorize a Discord server ID before inviting skye. Only the fixed bot owner can use this command.",
      "prefix": ".serverwhitelist add <server_id>",
      "slash": "/serverwhitelist add",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "serverwhitelist",
          "aliases": [
            "guildwhitelist"
          ]
        }
      ],
      "access": "Whitelist owner (820292272209002526 only)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "server_id",
          "type": "text",
          "required": true,
          "description": "Numeric Discord server ID to authorize or revoke.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".serverwhitelist add <server_id>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "serverwhitelist remove",
      "category": "Bot Owner",
      "serverOnly": false,
      "description": "Revoke a server ID; skye leaves it if currently present. Server settings are preserved.",
      "prefix": ".serverwhitelist remove <server_id>",
      "slash": "/serverwhitelist remove",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "serverwhitelist",
          "aliases": [
            "guildwhitelist"
          ]
        }
      ],
      "access": "Whitelist owner (820292272209002526 only)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "server_id",
          "type": "text",
          "required": true,
          "description": "Numeric Discord server ID to authorize or revoke.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".serverwhitelist remove <server_id>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "setxprate",
      "category": "Leveling",
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
        "xprate",
        "setxp",
        "xpmultiplier"
      ],
      "parentAliases": [],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "multiplier",
          "type": "number (minimum 0.1, maximum 10.0)",
          "required": true,
          "description": "XP multiplier.",
          "minimum": 0.1,
          "maximum": 10.0,
          "choices": []
        }
      ],
      "example": ".setxprate <multiplier>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "sharedroles",
      "category": "Roles",
      "serverOnly": true,
      "description": "Show roles shared by two current server members.",
      "prefix": ".sharedroles <member> [other]",
      "slash": "/members sharedroles",
      "aliases": [
        ".mutualroles",
        ".commonroles"
      ],
      "searchAliases": [
        "mutualroles",
        "commonroles"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "other",
          "type": "Member",
          "required": false,
          "description": "Second member to compare.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".sharedroles <member> [other]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "ship",
      "category": "Fun & Reactions",
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
        "shiprate",
        "compatibility",
        "lovecalc",
        "shipit",
        "love",
        "pareja"
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
          "type": "Member",
          "required": true,
          "description": "First member or name.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "second",
          "type": "Member",
          "required": false,
          "description": "Second member or name.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".ship <first> [second]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Enabled feature: games",
        "Server only"
      ]
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
        "showchannel",
        "channelshow"
      ],
      "parentAliases": [],
      "access": "Manage Channels (server), Manage Roles and Manage Channels (target channel)",
      "botPermissions": [
        "Manage Roles and Manage Channels (target channel)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "GuildChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "target",
          "type": "Role or Member",
          "required": false,
          "description": "Member, role, message, or resource target.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".show [channel] [target]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "skye",
      "category": "Configuration",
      "serverOnly": true,
      "description": "View or customize skye's server profile.",
      "prefix": ".skye",
      "slash": "/skye overview",
      "aliases": [
        ".botprofile",
        ".branding"
      ],
      "searchAliases": [
        "botprofile",
        "branding"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".skye",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "skye avatar",
      "category": "Configuration",
      "serverOnly": true,
      "description": "Set, reset, or safely process skye's server avatar.",
      "prefix": ".skye avatar [url] [attachment (upload a file)]",
      "slash": "/skye avatar",
      "aliases": [
        ".skye pfp",
        ".skye icon"
      ],
      "searchAliases": [
        "pfp",
        "icon"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 60s; scope: guild",
      "parameters": [
        {
          "name": "url",
          "type": "text",
          "required": false,
          "description": "Trusted image URL, reset, or leave empty to view.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "attachment",
          "type": "Attachment",
          "required": false,
          "description": "Image attachment to upload.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".skye avatar [url] [attachment (upload a file)]",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "skye banner",
      "category": "Configuration",
      "serverOnly": true,
      "description": "Set, reset, or safely process skye's server banner.",
      "prefix": ".skye banner [url] [attachment (upload a file)]",
      "slash": "/skye banner",
      "aliases": [
        ".skye cover"
      ],
      "searchAliases": [
        "cover"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 60s; scope: guild",
      "parameters": [
        {
          "name": "url",
          "type": "text",
          "required": false,
          "description": "Trusted image URL, reset, or leave empty to view.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "attachment",
          "type": "Attachment",
          "required": false,
          "description": "Image attachment to upload.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".skye banner [url] [attachment (upload a file)]",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "skye color",
      "category": "Configuration",
      "serverOnly": true,
      "description": "Change the configured color.",
      "prefix": ".skye color <color>",
      "slash": "/skye color",
      "aliases": [
        ".skye colour",
        ".skye accent"
      ],
      "searchAliases": [
        "colour",
        "accent"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "color",
          "type": "text",
          "required": true,
          "description": "Hex colour such as #35D6C5.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".skye color <color>",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "skye description",
      "category": "Configuration",
      "serverOnly": true,
      "description": "Set skye's bounded native server-profile description.",
      "prefix": ".skye description <description>",
      "slash": "/skye description",
      "aliases": [
        ".skye bio",
        ".skye about"
      ],
      "searchAliases": [
        "bio",
        "about"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: guild",
      "parameters": [
        {
          "name": "description",
          "type": "text",
          "required": true,
          "description": "Description text, or clear where supported.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".skye description <description>",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "skye nickname",
      "category": "Configuration",
      "serverOnly": true,
      "description": "Set or reset skye's server nickname.",
      "prefix": ".skye nickname [nickname]",
      "slash": "/skye nickname",
      "aliases": [
        ".skye nick",
        ".skye name"
      ],
      "searchAliases": [
        "nick",
        "name"
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
      "access": "Administrator (server)",
      "botPermissions": [
        "Change Nickname (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "nickname",
          "type": "text",
          "required": false,
          "description": "Nickname, or leave empty to reset.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".skye nickname [nickname]",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "slap",
      "category": "Fun & Reactions",
      "serverOnly": false,
      "description": "Send a slap reaction to another member.",
      "prefix": ".slap <member>",
      "slash": "/fun slap",
      "aliases": [
        ".smack"
      ],
      "searchAliases": [
        "smack"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".slap <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding."
      ]
    },
    {
      "name": "slots",
      "category": "Economy",
      "serverOnly": true,
      "description": "Spin 1–5 paylines; wager is per line. Triples pay 4× (sevens 8×), two cherries return 1×. Use slots rules for payline order and total-stake cap.",
      "prefix": ".slots <wager> [lines=1]",
      "slash": "/economy slots",
      "aliases": [
        ".slot",
        ".spin"
      ],
      "searchAliases": [
        "slot",
        "spin"
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
          "type": "text",
          "required": true,
          "description": "Number of coins to wager.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "lines",
          "type": "integer (minimum 1, maximum 5)",
          "required": false,
          "description": "Slot paylines: 1–5. Wager is per line; all splits your available capped budget.",
          "minimum": 1,
          "maximum": 5,
          "choices": [],
          "default": "1"
        }
      ],
      "example": ".slots <wager> [lines=1]",
      "concurrency": null,
      "notes": [
        "Three reels; 1–5 paylines (middle, top, bottom, descending diagonal, ascending diagonal). Wager is PER LINE; total stake cannot exceed 100,000. Three sevens return 8×; any other triple 4×; exactly two cherries return 1×. All returns are per winning line; losing lines pay zero.",
        "Virtual server currency only. Use 1–100,000 or all; payouts include the stake. Interactive games cannot resume after a process restart.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Enabled feature: economy",
        "Server only"
      ]
    },
    {
      "name": "slowmode",
      "category": "Moderation",
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
        "slow",
        "sm",
        "lento"
      ],
      "parentAliases": [],
      "access": "Manage Channels (channel)",
      "botPermissions": [
        "Manage Channels (channel)"
      ],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "duration",
          "type": "text",
          "required": false,
          "description": "Minutes or s/m/h/d combinations; at most 64 characters/10 years. Timeouts: max 28 days.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "0"
        }
      ],
      "example": ".slowmode [duration=0]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "snipe",
      "category": "Messages & Embeds",
      "serverOnly": true,
      "description": "Recover a recent cached deleted message for moderation.",
      "prefix": ".snipe [number=1]",
      "slash": "/moderation snipe",
      "aliases": [
        ".s",
        ".recover"
      ],
      "searchAliases": [
        "s",
        "recover"
      ],
      "parentAliases": [],
      "access": "Manage Messages (channel)",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "number",
          "type": "integer (minimum 1, maximum 10)",
          "required": false,
          "description": "Number to use.",
          "minimum": 1,
          "maximum": 10,
          "choices": [],
          "default": "1"
        }
      ],
      "example": ".snipe [number=1]",
      "concurrency": "<MaxConcurrency per=<BucketType.channel: 3> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "stopbot",
      "category": "Bot Owner",
      "serverOnly": false,
      "description": "Shut down skye; restricted to the configured or Discord application owner.",
      "prefix": ".stopbot",
      "slash": "/bot stopbot",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [],
      "access": "Bot application owner",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".stopbot",
      "concurrency": "<MaxConcurrency per=<BucketType.default: 0> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "ticket",
      "category": "Tickets",
      "serverOnly": false,
      "description": "Configure and operate private support-ticket panels.",
      "prefix": ".ticket",
      "slash": "/ticket overview",
      "aliases": [
        ".t",
        ".tickets"
      ],
      "searchAliases": [
        "t",
        "tickets"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".ticket",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "ticket category",
      "category": "Tickets",
      "serverOnly": true,
      "description": "View or change a ticket panel's destination category.",
      "prefix": ".ticket category [panel_name=main] [category]",
      "slash": "/ticket category",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "ticket",
          "aliases": [
            "t",
            "tickets"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "panel_name",
          "type": "text",
          "required": false,
          "description": "Ticket panel name.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "main"
        },
        {
          "name": "category",
          "type": "CategoryChannel",
          "required": false,
          "description": "Discord category to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".ticket category [panel_name=main] [category]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "ticket delete",
      "category": "Tickets",
      "serverOnly": true,
      "description": "Delete an entry from ticket.",
      "prefix": ".ticket delete <panel_name>",
      "slash": "/ticket delete",
      "aliases": [
        ".ticket remove"
      ],
      "searchAliases": [
        "remove"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "panel_name",
          "type": "text",
          "required": true,
          "description": "Ticket panel name.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".ticket delete <panel_name>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "ticket edit",
      "category": "Tickets",
      "serverOnly": true,
      "description": "Open or update ticket.",
      "prefix": ".ticket edit [panel_name=main]",
      "slash": "/ticket edit",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "ticket",
          "aliases": [
            "t",
            "tickets"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "panel_name",
          "type": "text",
          "required": false,
          "description": "Ticket panel name.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "main"
        }
      ],
      "example": ".ticket edit [panel_name=main]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "ticket panel",
      "category": "Tickets",
      "serverOnly": true,
      "description": "Post, move, or refresh a configured ticket panel.",
      "prefix": ".ticket panel [panel_name=main] [channel]",
      "slash": "/ticket panel",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "ticket",
          "aliases": [
            "t",
            "tickets"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "panel_name",
          "type": "text",
          "required": false,
          "description": "Ticket panel name.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "main"
        },
        {
          "name": "channel",
          "type": "TextChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".ticket panel [panel_name=main] [channel]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "ticket setup",
      "category": "Tickets",
      "serverOnly": true,
      "description": "Configure and enable ticket.",
      "prefix": ".ticket setup [panel_name=main]",
      "slash": "/ticket setup",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "ticket",
          "aliases": [
            "t",
            "tickets"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "panel_name",
          "type": "text",
          "required": false,
          "description": "Ticket panel name.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "main"
        }
      ],
      "example": ".ticket setup [panel_name=main]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "ticket status",
      "category": "Tickets",
      "serverOnly": true,
      "description": "Show detailed ticket status.",
      "prefix": ".ticket status [panel_name]",
      "slash": "/ticket status",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [
        {
          "name": "ticket",
          "aliases": [
            "t",
            "tickets"
          ]
        }
      ],
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "panel_name",
          "type": "text",
          "required": false,
          "description": "Ticket panel name.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".ticket status [panel_name]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "ticket supportrole",
      "category": "Tickets",
      "serverOnly": true,
      "description": "View or change a ticket panel's support role.",
      "prefix": ".ticket supportrole [panel_name=main] [role]",
      "slash": "/ticket supportrole",
      "aliases": [
        ".ticket support"
      ],
      "searchAliases": [
        "support"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "panel_name",
          "type": "text",
          "required": false,
          "description": "Ticket panel name.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "main"
        },
        {
          "name": "role",
          "type": "Role",
          "required": false,
          "description": "Discord role to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".ticket supportrole [panel_name=main] [role]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "tickle",
      "category": "Fun & Reactions",
      "serverOnly": false,
      "description": "Send a tickle reaction to another member.",
      "prefix": ".tickle <member>",
      "slash": "/fun tickle",
      "aliases": [
        ".annoy"
      ],
      "searchAliases": [
        "annoy"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".tickle <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding."
      ]
    },
    {
      "name": "tictactoe",
      "category": "Games",
      "serverOnly": true,
      "description": "Play tic-tac-toe against skye or another member.",
      "prefix": ".tictactoe [opponent]",
      "slash": "/games tictactoe",
      "aliases": [
        ".ttt",
        ".tresenraya"
      ],
      "searchAliases": [
        "ttt",
        "tresenraya"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "opponent",
          "type": "Member",
          "required": false,
          "description": "Member to challenge.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".tictactoe [opponent]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "time",
      "category": "Utility",
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
        "timezone",
        "tz",
        "hora"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "timezone",
          "type": "text",
          "required": false,
          "description": "IANA timezone such as Europe/London.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".time [timezone]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "timeout",
      "category": "Moderation",
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
        "mute",
        "to",
        "silence",
        "silenciar"
      ],
      "parentAliases": [],
      "access": "Moderate Members (server)",
      "botPermissions": [
        "Moderate Members (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "duration",
          "type": "text",
          "required": true,
          "description": "Minutes or s/m/h/d combinations; at most 64 characters/10 years. Timeouts: max 28 days.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "reason",
          "type": "text",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "No reason provided"
        }
      ],
      "example": ".timeout <member> <duration> [reason=No reason provided]",
      "concurrency": null,
      "notes": [
        "Current permissions and hierarchy still apply when using IDs. Reasons are limited to 1–400 characters without control characters. Duration inputs use minutes for bare numbers or s/m/h/d combinations, with a 64-character/ten-year parser limit; timeouts are limited to 28 days. New completed actions retain up to 1,000 server-local cases, visible privately through memberhistory. Cases are not reconstructed for past actions.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "timestamp",
      "category": "Utility",
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
        "ts",
        "discordtime",
        "fecha"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "duration",
          "type": "text",
          "required": false,
          "description": "Minutes or s/m/h/d combinations; at most 64 characters/10 years. Timeouts: max 28 days.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".timestamp [duration]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
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
        "channeltopic",
        "settopic"
      ],
      "parentAliases": [],
      "access": "Manage Channels (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "TextChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "topic",
          "type": "text",
          "required": true,
          "description": "Value for topic.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".topic [channel] <topic>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "translate",
      "category": "Utility",
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
        "tr",
        "trans",
        "translation",
        "traducir"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 20s; scope: member",
      "parameters": [
        {
          "name": "language",
          "type": "text",
          "required": true,
          "description": "Language name/code, or source:target.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "text",
          "type": "text",
          "required": false,
          "description": "Text to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".translate <language> [text]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "trivia",
      "category": "Games",
      "serverOnly": true,
      "description": "Start a requester-only multiple-choice trivia question.",
      "prefix": ".trivia",
      "slash": "/fun trivia",
      "aliases": [
        ".quiz",
        ".question"
      ],
      "searchAliases": [
        "quiz",
        "question"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [],
      "example": ".trivia",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "truth",
      "category": "Games",
      "serverOnly": false,
      "description": "Receive a random truth prompt.",
      "prefix": ".truth",
      "slash": "/fun truth",
      "aliases": [
        ".truthquestion"
      ],
      "searchAliases": [
        "truthquestion"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".truth",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "unban",
      "category": "Moderation",
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
        "ub",
        "pardon",
        "unbanuser"
      ],
      "parentAliases": [],
      "access": "Ban Members (server)",
      "botPermissions": [
        "Ban Members (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "user_id",
          "type": "user ID or mention",
          "required": true,
          "description": "Discord user ID or user mention.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "reason",
          "type": "text",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "No reason provided"
        }
      ],
      "example": ".unban 123456789012345678 reason",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "unlock",
      "category": "Moderation",
      "serverOnly": true,
      "description": "Safely restore channel permission states saved by the lock command.",
      "prefix": ".unlock [reason=No reason provided]",
      "slash": "/moderation unlock",
      "aliases": [
        ".unlockchannel",
        ".channelunlock",
        ".openchannel",
        ".abrir"
      ],
      "searchAliases": [
        "unlockchannel",
        "channelunlock",
        "openchannel",
        "abrir"
      ],
      "parentAliases": [],
      "access": "Manage Channels (channel), Manage Roles (channel)",
      "botPermissions": [
        "Manage Channels (channel)",
        "Manage Roles (channel)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "reason",
          "type": "text",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "No reason provided"
        }
      ],
      "example": ".unlock [reason=No reason provided]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "unpin",
      "category": "Messages & Embeds",
      "serverOnly": true,
      "description": "Unpin an accessible message with the required Pin Messages permission.",
      "prefix": ".unpin [message]",
      "slash": "/messages unpin",
      "aliases": [],
      "searchAliases": [],
      "parentAliases": [],
      "access": "Pin Messages (channel)",
      "botPermissions": [
        "Pin Messages (channel)",
        "Read Message History (channel)"
      ],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "message",
          "type": "text",
          "required": false,
          "description": "Message text, ID, or Discord message link.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".unpin [message]",
      "concurrency": "<MaxConcurrency per=<BucketType.channel: 3> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "unscramble",
      "category": "Games",
      "serverOnly": true,
      "description": "Submit an answer to the current word scramble.",
      "prefix": ".unscramble <answer>",
      "slash": "/fun unscramble",
      "aliases": [
        ".solveword",
        ".wordguess"
      ],
      "searchAliases": [
        "solveword",
        "wordguess"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "answer",
          "type": "text",
          "required": true,
          "description": "Your answer.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".unscramble <answer>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "untimeout",
      "category": "Moderation",
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
        "unmute",
        "uto",
        "unsilence",
        "desilenciar"
      ],
      "parentAliases": [],
      "access": "Moderate Members (server)",
      "botPermissions": [
        "Moderate Members (server)"
      ],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "reason",
          "type": "text",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "No reason provided"
        }
      ],
      "example": ".untimeout <member> [reason=No reason provided]",
      "concurrency": null,
      "notes": [
        "Current permissions and hierarchy still apply when using IDs. Reasons are limited to 1–400 characters without control characters. Duration inputs use minutes for bare numbers or s/m/h/d combinations, with a 64-character/ten-year parser limit; timeouts are limited to 28 days. New completed actions retain up to 1,000 server-local cases, visible privately through memberhistory. Cases are not reconstructed for past actions.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "unwarn",
      "category": "Moderation",
      "serverOnly": true,
      "description": "Remove one warning by its current number; accepts an optional audit reason. Use warnings first to check numbering.",
      "prefix": ".unwarn <member> <warning_number> [reason=No reason provided]",
      "slash": "/moderation unwarn",
      "aliases": [
        ".delwarn",
        ".removewarn",
        ".warnremove"
      ],
      "searchAliases": [
        "delwarn",
        "removewarn",
        "warnremove"
      ],
      "parentAliases": [],
      "access": "Moderate Members (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "warning_number",
          "type": "integer (minimum 1, maximum 1000)",
          "required": true,
          "description": "One-based warning number.",
          "minimum": 1,
          "maximum": 1000,
          "choices": []
        },
        {
          "name": "reason",
          "type": "text",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "No reason provided"
        }
      ],
      "example": ".unwarn <member> <warning_number> [reason=No reason provided]",
      "concurrency": null,
      "notes": [
        "Current permissions and hierarchy still apply when using IDs. Reasons are limited to 1–400 characters without control characters. Duration inputs use minutes for bare numbers or s/m/h/d combinations, with a 64-character/ten-year parser limit; timeouts are limited to 28 days. New completed actions retain up to 1,000 server-local cases, visible privately through memberhistory. Cases are not reconstructed for past actions.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "userinfo",
      "category": "Members",
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
        "user",
        "whois",
        "memberinfo",
        "ui",
        "profile",
        "whoami",
        "lookup",
        "usuario",
        "infousuario"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": false,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".userinfo [member]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "uwuify",
      "category": "Fun & Reactions",
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
        "uwu",
        "owoify",
        "uwuspeak"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: user",
      "parameters": [
        {
          "name": "text",
          "type": "text",
          "required": false,
          "description": "Text to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".uwuify [text]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
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
        "vcban"
      ],
      "parentAliases": [],
      "access": "Manage Roles (server), Move Members (server)",
      "botPermissions": [
        "Manage Roles + Move Members (target channel)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 20s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "channel",
          "type": "VoiceChannel or StageChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "reason",
          "type": "text",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "No reason provided"
        }
      ],
      "example": ".voiceban <member> [channel] [reason=No reason provided]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
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
        "vcbitrate"
      ],
      "parentAliases": [],
      "access": "Manage Channels (target channel), or current temporary-room owner",
      "botPermissions": [
        "Manage Channels (target channel)"
      ],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "kbps",
          "type": "integer",
          "required": true,
          "description": "Voice bitrate in kilobits per second.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "channel",
          "type": "VoiceChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".voicebitrate <kbps> [channel]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
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
        "vcontrols",
        "vccontrols"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [],
      "example": ".voicecontrols",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
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
        "vccreate"
      ],
      "parentAliases": [],
      "access": "Manage Channels (server)",
      "botPermissions": [
        "Manage Channels (server)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 20s; scope: member",
      "parameters": [
        {
          "name": "category",
          "type": "CategoryChannel",
          "required": false,
          "description": "Discord category to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "name",
          "type": "text",
          "required": true,
          "description": "Name to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".voicecreate [category] <name>",
      "concurrency": "<MaxConcurrency per=<BucketType.guild: 2> number=1 wait=False>",
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
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
        "vinfo",
        "vcinfo"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "VoiceChannel or StageChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".voiceinfo [channel]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
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
        "vcinvite"
      ],
      "parentAliases": [],
      "access": "Create Invite (target channel)",
      "botPermissions": [
        "Create Invite (target channel)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "VoiceChannel or StageChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".voiceinvite [channel]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
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
        "vckick",
        "disconnect"
      ],
      "parentAliases": [],
      "access": "Move Members (server)",
      "botPermissions": [
        "Move Members (target channel)"
      ],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "reason",
          "type": "text",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "No reason provided"
        }
      ],
      "example": ".voicekick <member> [reason=No reason provided]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
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
        "vcleave",
        "disconnectbot"
      ],
      "parentAliases": [],
      "access": "Move Members (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 15s; scope: guild",
      "parameters": [],
      "example": ".voiceleave",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
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
        "vclimit"
      ],
      "parentAliases": [],
      "access": "Manage Channels (target channel), or current temporary-room owner",
      "botPermissions": [
        "Manage Channels (target channel)"
      ],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "limit",
          "type": "integer (minimum 0, maximum 99)",
          "required": true,
          "description": "Maximum number allowed.",
          "minimum": 0,
          "maximum": 99,
          "choices": []
        },
        {
          "name": "channel",
          "type": "VoiceChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".voicelimit <limit> [channel]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
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
        "vm",
        "voicehub",
        "tempvoice"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".voicemaster",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "voicemaster disable",
      "category": "Voice",
      "serverOnly": true,
      "description": "Disable voicemaster while preserving its settings.",
      "prefix": ".voicemaster disable",
      "slash": "/voicemaster disable",
      "aliases": [
        ".voicemaster off",
        ".voicemaster stop"
      ],
      "searchAliases": [
        "off",
        "stop"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".voicemaster disable",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "voicemaster limit",
      "category": "Voice",
      "serverOnly": true,
      "description": "Set the bounded default limit.",
      "prefix": ".voicemaster limit <limit>",
      "slash": "/voicemaster limit",
      "aliases": [
        ".voicemaster defaultlimit",
        ".voicemaster setlimit"
      ],
      "searchAliases": [
        "defaultlimit",
        "setlimit"
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
      "access": "Administrator (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "limit",
          "type": "integer (minimum 0, maximum 99)",
          "required": true,
          "description": "Maximum number allowed.",
          "minimum": 0,
          "maximum": 99,
          "choices": []
        }
      ],
      "example": ".voicemaster limit <limit>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
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
        "create",
        "install",
        "configure",
        "enable",
        "on"
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
      "access": "Administrator (server)",
      "botPermissions": [
        "Embed Links (server)",
        "Manage Channels (server)",
        "Move Members (server)",
        "Send Messages (server)"
      ],
      "features": [],
      "cooldown": "1 use(s) per 30s; scope: guild",
      "parameters": [
        {
          "name": "category",
          "type": "CategoryChannel",
          "required": false,
          "description": "Discord category to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "panel_channel",
          "type": "TextChannel",
          "required": false,
          "description": "Text channel for the control panel.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".voicemaster setup [category] [panel_channel]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
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
        "invoice",
        "voicecount"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: guild",
      "parameters": [],
      "example": ".voicemembers",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
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
        "vcmute"
      ],
      "parentAliases": [],
      "access": "Mute Members (server)",
      "botPermissions": [
        "Mute Members (target channel)"
      ],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "reason",
          "type": "text",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "No reason provided"
        }
      ],
      "example": ".voicemute <member> [reason=No reason provided]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
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
        "vcrename"
      ],
      "parentAliases": [],
      "access": "Manage Channels (target channel), or current temporary-room owner",
      "botPermissions": [
        "Manage Channels (target channel)"
      ],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "VoiceChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        },
        {
          "name": "name",
          "type": "text",
          "required": true,
          "description": "Name to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".voicerename [channel] <name>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
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
        "vcstatus",
        "voiceoverview"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "2 use(s) per 15s; scope: guild",
      "parameters": [],
      "example": ".voicestatus",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
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
        "vcunban"
      ],
      "parentAliases": [],
      "access": "Manage Roles (server)",
      "botPermissions": [
        "Manage Roles (target channel)"
      ],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "channel",
          "type": "VoiceChannel or StageChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".voiceunban <member> [channel]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
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
        "vcunmute"
      ],
      "parentAliases": [],
      "access": "Mute Members (server)",
      "botPermissions": [
        "Mute Members (target channel)"
      ],
      "features": [],
      "cooldown": "2 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "reason",
          "type": "text",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "No reason provided"
        }
      ],
      "example": ".voiceunmute <member> [reason=No reason provided]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
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
        "vcusers",
        "voicepeople"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "channel",
          "type": "VoiceChannel or StageChannel",
          "required": false,
          "description": "Discord channel to use.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".voiceusers [channel]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "warn",
      "category": "Moderation",
      "serverOnly": true,
      "description": "Add a persistent moderation warning to a member.",
      "prefix": ".warn <member> [reason=No reason provided]",
      "slash": "/moderation warn",
      "aliases": [
        ".w",
        ".warning",
        ".advertir"
      ],
      "searchAliases": [
        "w",
        "warning",
        "advertir"
      ],
      "parentAliases": [],
      "access": "Moderate Members (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        },
        {
          "name": "reason",
          "type": "text",
          "required": false,
          "description": "Reason recorded in the audit log.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "No reason provided"
        }
      ],
      "example": ".warn <member> [reason=No reason provided]",
      "concurrency": null,
      "notes": [
        "Current permissions and hierarchy still apply when using IDs. Reasons are limited to 1–400 characters without control characters. Duration inputs use minutes for bare numbers or s/m/h/d combinations, with a 64-character/ten-year parser limit; timeouts are limited to 28 days. New completed actions retain up to 1,000 server-local cases, visible privately through memberhistory. Cases are not reconstructed for past actions.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "warnings",
      "category": "Moderation",
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
        "warns",
        "infractions",
        "advertencias"
      ],
      "parentAliases": [],
      "access": "Moderate Members (server)",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".warnings <member>",
      "concurrency": null,
      "notes": [
        "Current permissions and hierarchy still apply when using IDs. Reasons are limited to 1–400 characters without control characters. Duration inputs use minutes for bare numbers or s/m/h/d combinations, with a 64-character/ten-year parser limit; timeouts are limited to 28 days. New completed actions retain up to 1,000 server-local cases, visible privately through memberhistory. Cases are not reconstructed for past actions.",
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding.",
        "Server only"
      ]
    },
    {
      "name": "wave",
      "category": "Fun & Reactions",
      "serverOnly": false,
      "description": "Send a wave reaction to another member.",
      "prefix": ".wave <member>",
      "slash": "/fun wave",
      "aliases": [
        ".hello",
        ".greet"
      ],
      "searchAliases": [
        "hello",
        "greet"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 10s; scope: member",
      "parameters": [
        {
          "name": "member",
          "type": "Member",
          "required": true,
          "description": "Server member to use.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".wave <member>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Prefix commands accept user/member mentions or IDs; role mentions, names or IDs; and #channel mentions, channel names or IDs. Quote names containing spaces. Member actions still require current server membership and all normal permission/hierarchy checks. Slash user/role/channel fields remain native Discord selectors; ID-only user arguments accept text IDs or mentions without integer rounding."
      ]
    },
    {
      "name": "weather",
      "category": "Utility",
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
        "wx",
        "forecast",
        "wthr",
        "clima"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "1 use(s) per 15s; scope: member",
      "parameters": [
        {
          "name": "location",
          "type": "text",
          "required": true,
          "description": "City, region, or postal code.",
          "minimum": null,
          "maximum": null,
          "choices": []
        }
      ],
      "example": ".weather <location>",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    },
    {
      "name": "wordle",
      "category": "Games",
      "serverOnly": true,
      "description": "Play a six-attempt Wordle-style guessing game.",
      "prefix": ".wordle [guess]",
      "slash": "/games wordle",
      "aliases": [
        ".wordlegame"
      ],
      "searchAliases": [
        "wordlegame"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "3 use(s) per 8s; scope: member",
      "parameters": [
        {
          "name": "guess",
          "type": "text",
          "required": false,
          "description": "Your guess.",
          "minimum": null,
          "maximum": null,
          "choices": [],
          "default": "not set"
        }
      ],
      "example": ".wordle [guess]",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Server only"
      ]
    },
    {
      "name": "work",
      "category": "Economy",
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
        "job",
        "earn",
        "trabajar"
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
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access.",
        "Enabled feature: economy",
        "Server only"
      ]
    },
    {
      "name": "wouldyourather",
      "category": "Games",
      "serverOnly": false,
      "description": "Receive a random would-you-rather prompt.",
      "prefix": ".wouldyourather",
      "slash": "/fun wouldyourather",
      "aliases": [
        ".wyr",
        ".rather"
      ],
      "searchAliases": [
        "wyr",
        "rather"
      ],
      "parentAliases": [],
      "access": "Everyone",
      "botPermissions": [],
      "features": [],
      "cooldown": "No command-specific cooldown declared",
      "parameters": [],
      "example": ".wouldyourather",
      "concurrency": null,
      "notes": [
        "Command execution still checks current access, feature settings, target hierarchy/ownership and other applicable safeguards. Viewing help does not grant access."
      ]
    }
  ]
};
