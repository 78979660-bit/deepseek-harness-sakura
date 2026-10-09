/** Light-only anime sakura scene and readable palette. */
export const THEME_SOURCE_ID = 'dsh-sakura-pink'
export const SAKURA_TOKENS: Record<string, string> = Object.freeze({
  '--dsw-alias-switch-thumb': '#F1D8E3',
  '--sakura-switch-track-off': '#9B607B',
  '--sakura-trajectory-border': 'rgba(159, 94, 121, .26)',
  '--sakura-trajectory-solid': '#E7B8CC',
  '--sakura-trajectory-fill': 'rgba(231, 184, 204, .68)',
  '--sakura-toast-fill': 'rgba(240, 214, 225, .96)',
  '--dsw-alias-toast-label': '#3D2933',
  '--dsw-alias-toast-bg': '#F0D6E1',
  '--dsw-alias-link': '#762344',
  '--dsw-alias-label-primary-dimmed': '#684F5D',
  '--dsw-alias-label-dimmed': '#806875',
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
  '--dsw-specific-sakura-blossom-filter': 'hue-rotate(15deg) saturate(1.45) brightness(0.95)',
  '--dsw-specific-sakura-ground': 'linear-gradient(160deg, #F5CCD9 0%, #F0D1DD 55%, #ECB6CA 100%)',
  '--dsw-specific-sakura-distant-opacity': '0.8',
  '--dsw-specific-sakura-canopy-opacity': '0.55',
  '--dsw-specific-sakura-branch-opacity': '0.42',
  '--dsw-specific-sakura-flower-opacity': '0.76',
  '--dsw-specific-sakura-petal-opacity': '0.48',
  '--dsw-specific-sakura-petal-fill': 'linear-gradient(135deg, #F4B3BF, #C95A73)',
  '--dsw-specific-sakura-light': 'radial-gradient(ellipse at 69% 17%, rgba(240, 189, 210, 0.12), transparent 38%)',
  '--dsw-specific-sakura-glow': 'linear-gradient(0deg, rgba(231, 126, 162, 0.35), transparent 34%)',
  '--dsw-specific-sakura-reading': 'linear-gradient(rgba(214, 83, 126, 0.065), rgba(214, 83, 126, 0.065)), linear-gradient(180deg, rgba(232, 196, 211, 0.88), transparent 23%), linear-gradient(90deg, rgba(239, 220, 230, 0.72) 0%, rgba(239, 220, 230, 0.54) 14%, transparent 32%), radial-gradient(ellipse at 61% 53%, rgba(238, 211, 223, 0.86) 0%, rgba(239, 214, 226, 0.52) 37%, transparent 73%)',
  // Base surfaces: the formerly near-white fields now form a three-step
  // sakura-washi ladder; text-bearing cards stay the lightest step.
  '--dsw-alias-bg-base': 'transparent',
  '--dsw-alias-bg-layer-1': '#EFD8E2',
  '--dsw-alias-bg-layer-2': '#F1DDE6',
  '--dsw-alias-bg-layer-3': '#F6E3E4',
  '--dsw-alias-bg-overlay': '#EFD2DE',
  '--dsw-alias-bg-module-platform': '#F6E2E4',
  '--dsw-alias-bg-multi-select': '#F4DEE1',
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
  '--dsw-alias-interactive-bg-hover': 'rgba(217, 130, 152, 0.06)',
  '--dsw-alias-interactive-bg-active': 'rgba(217, 130, 152, 0.10)',
  '--dsw-alias-interactive-bg-hover-accent': 'rgba(217, 130, 152, 0.14)',
  '--dsw-alias-interactive-bg-hover-solid': '#F5DFE1',
  '--dsw-alias-fill-l2': '#F5DFE1',
  '--dsw-alias-fill-tsp-secondary': 'rgba(120, 107, 104, 0.08)',

  // Buttons: the denser sakura-red primary anchors the otherwise quiet paper
  // field; info follows it instead of restoring a cold product blue.
  '--dsw-alias-button-primary-hover': '#A43F65',
  '--dsw-alias-button-info-fill': '#B84D73',
  '--dsw-alias-button-info-hover': '#A43F65',
  '--dsw-alias-button-ghost-active-fill': 'rgba(217, 130, 152, 0.12)',
  '--dsw-alias-button-ghost-active-hover': 'rgba(217, 130, 152, 0.18)',
  '--dsw-alias-button-ghost-active-border': '#D3A4B6',
  '--dsw-alias-button-elevated-fill': '#EED0DA',
  '--dsw-alias-button-floating-fill': '#EED1DB',
  '--dsw-alias-button-floating-hover': '#F2D5D9',

  // Brand: primary actions and hard focus rings are full sakura-red; the sakura
  // accent carries interactive accents (editor focus, selection tints).
  '--dsw-alias-brand-primary': '#B84D73',
  '--dsw-alias-brand-text': '#762344',
  '--dsw-alias-state-business-primary': '#762344',
  '--dsw-alias-state-business-tertiary': 'rgba(217, 130, 152, 0.12)',

  // Ink: warm gray-brown label ladder.
  '--dsw-alias-label-primary': '#3F3634',
  '--dsw-alias-label-secondary': '#503743',
  '--dsw-alias-label-tertiary': '#553A48',
  '--dsw-alias-label-caption': '#553A48',
  '--dsw-alias-label-primary-foreground': '#FFF9F6',
  '--dsw-alias-label-primary-bluish': '#9E6B71',

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
  '--dsw-alias-border-l1': '#D7A8B9',
  '--dsw-alias-border-l2': '#CE96AC',
  '--dsw-alias-border-l2-darkmode-thin': '#DCB5BD',
  '--dsw-alias-border-l3': '#CF9DA8',
  '--dsw-alias-border-l4': '#C58D99',

  // Scrollbars follow the border ladder.
  '--dsw-alias-scrollbar-bg-l1': '#D7A8B9',
  '--dsw-alias-scrollbar-bg-l2': '#DCB5BD',
  '--dsw-alias-scrollbar-hover-l1': '#CF9DA8',
  '--dsw-alias-scrollbar-hover-l2': '#CF9DA8',

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
  '--dsw-specific-bubble-highlight': 'rgba(217, 130, 152, 0.12)',

  // Inputs and menus: the composer is tinted too, but remains the lightest
  // large work surface so entry text keeps visual priority.
  '--dsw-specific-input-major': '#EBD1DD',
  '--dsw-specific-login-input': '#EFD5DF',
  '--dsw-specific-menu': '#EFD2DE',
  '--dsw-specific-tip': '#F3DCDF',
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
  '--dsw-specific-selector': '#EFD5DF',

  // Sidebar: warm paper fill with sakura hover/active washes; the flower-cloud
  // air arrives through the shell.decor washes, not the fill.
  '--dsw-specific-sidebar-fill': 'transparent',
  '--dsw-specific-sidebar-nav-item-hover': 'rgba(217, 130, 152, 0.09)',
  '--dsw-specific-sidebar-nav-item-active': 'rgba(217, 130, 152, 0.14)',
  '--dsw-specific-sidebar-nav-item-active-accent': 'rgba(191, 89, 98, 0.22)',
})
export const SAKURA_THEME_OVERRIDES = Object.freeze(Object.fromEntries(Object.entries(SAKURA_TOKENS).map(([name,value]) => [name,{light:value,dark:value}])));
