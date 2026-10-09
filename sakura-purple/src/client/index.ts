import { registerThemeOwner } from './theme-owner.ts'
import { SkinDecor } from './SkinDecor.tsx'
import { SAKURA_THEME_OVERRIDES, THEME_SOURCE_ID } from './skin.ts'

export const inject = ['slots', 'theme']

/** Minimal host observable consumed by the shell.overlay renderer. */
class LightModeSource {
  value: boolean
  listeners = new Set<() => void>()

  constructor(value: boolean) {
    this.value = value
  }

  getSnapshot() {
    return this.value
  }

  subscribe(listener: () => void) {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  set(value: boolean) {
    if (value === this.value) return
    this.value = value
    for (const listener of this.listeners) listener()
  }
}

export function apply(ctx: any) {
  let disposeOverrides: (() => void) | undefined
  let syncing = false
  const isLight = () => ctx.theme.getTheme().active.colorScheme === 'light'
  const lightMode = new LightModeSource(false)

  const sync = () => {
    if (syncing) return
    syncing = true
    try {
      const light = isLight() && owner.isOwner()
      lightMode.set(light)
      if (light && !disposeOverrides) {
        disposeOverrides = ctx.theme.overrideTokens(THEME_SOURCE_ID, SAKURA_THEME_OVERRIDES)
      } else if (!light && disposeOverrides) {
        const dispose = disposeOverrides
        disposeOverrides = undefined
        dispose()
      }
    } finally {
      syncing = false
    }
  }

  const owner = registerThemeOwner(THEME_SOURCE_ID, sync)
  const offThemeChange = ctx.on('theme/change', sync)
  owner.notify()
  ctx.effect(() => () => {
    if (typeof offThemeChange === 'function') offThemeChange()
    const dispose = disposeOverrides
    disposeOverrides = undefined
    dispose?.()
    lightMode.set(false)
    owner.dispose()
  }, 'dsh-sakura-purple: light-only palette')

  // RC2 has no shell.decor seat. The supported shell.overlay slot mounts only
  // a null-rendering lifecycle component; it never adds a high-z-index child.
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({
    name: 'shell.overlay',
    id: THEME_SOURCE_ID,
    order: -100,
    inject: () => ({ hooks: { lightMode } }),
  }, SkinDecor))
}
