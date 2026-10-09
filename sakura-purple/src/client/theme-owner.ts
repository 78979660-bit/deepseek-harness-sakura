/** Shared ownership across separately bundled Sakura plugins. */
const key = Symbol.for('dsh.sakura.owner.v1')
type Registry = Map<string, () => void>
export function registerThemeOwner(id: string, changed: () => void) {
  const globals = globalThis as typeof globalThis & { [key: symbol]: Registry | undefined }
  const registry = globals[key] ?? (globals[key] = new Map())
  registry.set(id, changed)
  const notify = () => { for (const update of [...registry.values()]) update() }
  return {
    isOwner: () => [...registry.keys()].at(-1) === id,
    notify,
    dispose: () => { if(registry.get(id) === changed) registry.delete(id); notify() },
  }
}
