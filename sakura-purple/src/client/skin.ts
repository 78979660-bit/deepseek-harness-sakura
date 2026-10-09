/** Light-only anime sakura scene and readable palette. */
export const THEME_SOURCE_ID = 'dsh-sakura-purple'
export const SAKURA_TOKENS: Record<string, string> = Object.freeze({
  '--dsw-alias-switch-thumb': '#E3D1EF',
  '--sakura-switch-track-off': '#806092',
  '--sakura-trajectory-border': 'rgba(143, 103, 172, .26)',
  '--sakura-trajectory-solid': '#CFB8E7',
  '--sakura-trajectory-fill': 'rgba(207, 184, 231, .68)',
  '--sakura-toast-fill': 'rgba(227, 211, 239, .96)',
  '--dsw-alias-toast-label': '#34233F',
  '--dsw-alias-toast-bg': '#E3D3EF',
  '--dsw-alias-link': '#5B286F',
  '--dsw-alias-label-primary-dimmed': '#604C70',
  '--dsw-alias-label-dimmed': '#7A6887',
  '--dsw-alias-file-diff-deleted-marker': '#782034',
  '--dsw-alias-file-diff-deleted-gutter': '#E3C8D0',
  '--dsw-alias-file-diff-deleted-bg': '#EED6DC',
  '--dsw-alias-file-diff-added-marker': '#244735',
  '--dsw-alias-file-diff-added-gutter': '#CFDFD4',
  '--dsw-alias-file-diff-added-bg': '#D9E8DE',
  '--dsw-alias-brand-primary-new-colorprimary-new-color': 'var(--dsw-alias-brand-primary)',
  '--dsw-alias-label-deep-diving': 'var(--dsw-alias-brand-text)',
  '--dsw-alias-label-deep-diving-shimmer': 'color-mix(in srgb, var(--dsw-alias-brand-primary) 30%, var(--dsw-alias-bg-layer-2))',
  '--dsw-alias-label-shimmer': 'color-mix(in srgb, var(--dsw-alias-brand-primary) 30%, var(--dsw-alias-bg-layer-2))',
  '--dsw-specific-sakura-blossom-filter': 'hue-rotate(-78deg) saturate(1.18) brightness(0.97)',
  '--dsw-specific-sakura-ground': 'linear-gradient(160deg, #E6C7E9 0%, #E2D1EC 55%, #CCB5E5 100%)',
  '--dsw-specific-sakura-distant-opacity': '0.8',
  '--dsw-specific-sakura-canopy-opacity': '0.62',
  '--dsw-specific-sakura-branch-opacity': '0.42',
  '--dsw-specific-sakura-flower-opacity': '0.78',
  '--dsw-specific-sakura-petal-opacity': '0.48',
  '--dsw-specific-sakura-petal-fill': 'linear-gradient(135deg, #D5CEF3, #8C79C8)',
  '--dsw-specific-sakura-light': 'radial-gradient(ellipse at 69% 17%, rgba(225, 191, 237, 0.12), transparent 38%)',
  '--dsw-specific-sakura-glow': 'linear-gradient(0deg, rgba(177, 123, 219, 0.35), transparent 34%)',
  '--dsw-specific-sakura-reading': 'linear-gradient(rgba(145, 78, 176, 0.065), rgba(145, 78, 176, 0.065)), linear-gradient(180deg, rgba(218, 192, 232, 0.88), transparent 23%), linear-gradient(90deg, rgba(224, 205, 237, 0.72) 0%, rgba(224, 205, 237, 0.54) 14%, transparent 32%), radial-gradient(ellipse at 61% 53%, rgba(224, 208, 240, 0.86) 0%, rgba(226, 211, 241, 0.52) 37%, transparent 73%)',
  // Base surfaces: the formerly near-white fields now form a three-step
  // sakura-washi ladder; text-bearing cards stay the lightest step.
  '--dsw-alias-bg-base': 'transparent',
  '--dsw-alias-bg-layer-1': '#E6D5EC',
  '--dsw-alias-bg-layer-2': '#E9DAF0',
  '--dsw-alias-bg-layer-3': '#E7D0EA',
  '--dsw-alias-bg-overlay': '#E2CEE9',
  '--dsw-alias-bg-module-platform': '#E6D0EC',
  '--dsw-alias-bg-multi-select': '#D8BFE8',
  '--dsw-alias-bg-skeleton': 'color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent)',

  // The shell decor owns these outer canvas regions while the skin is active.
  // Default has no overrides, so every official surface keeps its old fill.
  '--dsw-specific-shell-sidebar-surface': 'transparent',
  '--dsw-specific-shell-center-surface': 'transparent',
  '--dsw-specific-shell-details-surface': 'transparent',
  // The two decor washes overlap at this track; a painted divider would read
  // as a pale vertical strip against both of them.
  '--dsw-specific-shell-sidebar-divider': 'transparent',

  // Interactive fills: sakura washes for hover/active; warm solid hover.
  '--dsw-alias-interactive-bg-hover': 'rgba(164, 114, 193, 0.06)',
  '--dsw-alias-interactive-bg-active': 'rgba(164, 114, 193, 0.10)',
  '--dsw-alias-interactive-bg-hover-accent': 'rgba(164, 114, 193, 0.14)',
  '--dsw-alias-interactive-bg-hover-solid': '#DECAEB',
  '--dsw-alias-fill-l2': '#DECAEB',
  '--dsw-alias-fill-tsp-secondary': 'rgba(111, 83, 134, .08)',

  // Buttons: the denser sakura-red primary anchors the otherwise quiet paper
  // field; info follows it instead of restoring a cold product blue.
  '--dsw-alias-button-primary-hover': '#7C408F',
  '--dsw-alias-button-info-fill': '#9350A7',
  '--dsw-alias-button-info-hover': '#7C408F',
  '--dsw-alias-button-ghost-active-fill': 'rgba(164, 114, 193, 0.12)',
  '--dsw-alias-button-ghost-active-hover': 'rgba(164, 114, 193, 0.18)',
  '--dsw-alias-button-ghost-active-border': '#BDA2CE',
  '--dsw-alias-button-elevated-fill': '#E0CBE9',
  '--dsw-alias-button-floating-fill': '#E2CEEB',
  '--dsw-alias-button-floating-hover': '#D5BDE4',

  // Brand: primary actions and hard focus rings are full sakura-red; the sakura
  // accent carries interactive accents (editor focus, selection tints).
  '--dsw-alias-brand-primary': '#9350A7',
  '--dsw-alias-brand-text': '#5B286F',
  '--dsw-alias-state-business-primary': '#5B286F',
  '--dsw-alias-state-business-tertiary': 'rgba(164, 114, 193, 0.12)',

  // Ink: warm gray-brown label ladder.
  '--dsw-alias-label-primary': '#3C3047',
  '--dsw-alias-label-secondary': '#473551',
  '--dsw-alias-label-tertiary': '#4F3A5B',
  '--dsw-alias-label-caption': '#4F3A5B',
  '--dsw-alias-label-primary-foreground': '#FAF5FF',
  '--dsw-alias-label-primary-bluish': '#5B286F',

  // State text is dark; tertiary fills keep the original pastel decoration.
  '--dsw-alias-state-success-primary': '#244735',
  '--dsw-alias-state-success-secondary': '#2D4C39',
  '--dsw-alias-state-success-tertiary': 'rgba(127, 156, 139, 0.14)',
  '--dsw-alias-state-warn-primary': '#5C3805',
  '--dsw-alias-state-warn-label': '#5C3805',
  '--dsw-alias-state-warn-secondary': '#5C3805',
  '--dsw-alias-state-warn-tertiary': 'rgba(184, 138, 82, 0.11)',
  '--dsw-alias-state-error-primary': '#782034',
  '--dsw-alias-state-error-secondary': '#782034',

  // Borders: visibly sakura-gray rather than near-white hairlines. The first
  // step colors the Sidebar/Stage seam; later steps retain hierarchy.
  '--dsw-alias-border-l1': '#BFA4D1',
  '--dsw-alias-border-l2': '#B597CA',
  '--dsw-alias-border-l2-darkmode-thin': '#B79ACB',
  '--dsw-alias-border-l3': '#AA8ABA',
  '--dsw-alias-border-l4': '#9575A8',

  // Scrollbars follow the border ladder.
  '--dsw-alias-scrollbar-bg-l1': '#BFA4D1',
  '--dsw-alias-scrollbar-bg-l2': '#B79ACB',
  '--dsw-alias-scrollbar-hover-l1': '#9674AB',
  '--dsw-alias-scrollbar-hover-l2': '#9674AB',

  // Markdown and code: warm light surfaces with warm ink (a dark terminal
  // surface would need a scoped text token in ui-primitives, outside this
  // skin's reach; readability wins).
  '--dsw-alias-markdown-code-block': 'color-mix(in srgb, var(--dsw-alias-bg-layer-2) 48%, transparent)',
  '--dsw-alias-markdown-code-block-banner': 'color-mix(in srgb, var(--dsw-alias-bg-overlay) 32%, transparent)',
  '--dsw-alias-markdown-inline-code': 'color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, transparent)',
  '--dsw-alias-markdown-citation': 'color-mix(in srgb, var(--dsw-alias-bg-overlay) 38%, transparent)',
  '--dsw-alias-markdown-tag': 'color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, transparent)',
  '--dsw-alias-markdown-placeholder': 'color-mix(in srgb, var(--dsw-alias-bg-overlay) 28%, transparent)',
  '--dsw-alias-markdown-code-segment-selected': 'color-mix(in srgb, var(--dsw-alias-brand-primary) 18%, transparent)',
  '--dsw-alias-markdown-code-segment-unselected': 'transparent',
  '--dsw-specific-bubble': 'color-mix(in srgb, var(--dsw-alias-bg-overlay) 30%, transparent)',
  '--dsw-specific-bubble-highlight': 'rgba(164, 114, 193, 0.12)',

  // Inputs and menus: the composer is tinted too, but remains the lightest
  // large work surface so entry text keeps visual priority.
  '--dsw-specific-input-major': '#E0CDE9',
  '--dsw-specific-login-input': '#E5D0EC',
  '--dsw-specific-menu': '#E2CEE9',
  '--dsw-specific-tip': '#E2CEE9',
  // The composer seat is transparent. Only the opaque composer card owns a
  // lighter surface; no lower gradient is allowed to recolor the Stage.
  '--dsw-specific-composer-seat-edge-wash': 'none',
  // The Sakura Stage already provides an opaque, readable work surface and
  // the composer card owns its own fill. Any seat-level surface veil remains
  // visible through the card clearances as a rectangular pale rim, so this
  // skin explicitly removes that layer. The stock-theme fallback remains in
  // ConversationRoot and is unchanged.
  '--dsw-specific-composer-seat-surface-wash': 'none',

  // Right tool rail: the one deliberate cool note — 极淡青磁 (celadon)
  // balancing the warm field.
  '--dsw-specific-selector': '#E5D0EC',

  // Sidebar: warm paper fill with sakura hover/active washes; the flower-cloud
  // air arrives through the shell.decor washes, not the fill.
  '--dsw-specific-sidebar-fill': 'transparent',
  '--dsw-specific-sidebar-nav-item-hover': 'rgba(164, 114, 193, 0.09)',
  '--dsw-specific-sidebar-nav-item-active': 'rgba(164, 114, 193, 0.14)',
  '--dsw-specific-sidebar-nav-item-active-accent': 'rgba(147, 80, 167, .22)',
})
export const SAKURA_THEME_OVERRIDES = Object.freeze(Object.fromEntries(Object.entries(SAKURA_TOKENS).map(([name,value]) => [name,{light:value,dark:value}])));
