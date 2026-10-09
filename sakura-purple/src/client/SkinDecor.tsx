import { useLayoutEffect } from 'react'
import { DISTANT_URI, FLOWERS_URI, BRANCHES_URI } from './assets.ts'
import skinCss from './skin.css?inline'
import sharedSurfaces from './shared-surfaces.css?inline'
import { THEME_SOURCE_ID } from './skin.ts'
/** RC2 overlay seat carries the lifecycle only; artwork stays below the shell. */
export function SkinDecor({ useLightMode }: any) {
  const light = useLightMode((value: boolean) => value)
  useLayoutEffect(() => {
    if (!light) return
    const body = document.body
    const frames = new Map<Element,string|null>()
    const settingsDecor = new Map<Element, HTMLElement[]>()
    const style = document.createElement('style')
    style.dataset.plugin = 'dsh-sakura-purple'
    style.textContent = skinCss + '\n' + sharedSurfaces
    document.head.appendChild(style)
    const scene = document.createElement('div')
    scene.className = 'sakura-scene'
    scene.dataset.sakuraScene = 'unified-v3'
    scene.setAttribute('aria-hidden','true')
    for (const name of ['ground','distant','canopy','branches','flowers','light','petals','glow','reading']) {
      const layer = document.createElement('div')
      layer.className = 'sakura-' + name
      layer.dataset.sakuraLayer = name
      const uri = name === 'branches' ? BRANCHES_URI : name === 'flowers' ? FLOWERS_URI : ['distant','canopy'].includes(name) ? DISTANT_URI : undefined
      // Large PNG data URIs exceed Chromium's custom-property size limit.
      if (uri) layer.style.backgroundImage = 'url("' + uri + '")'
      if(name === 'petals') for(let i=0;i<9;i++) {
        const petal=document.createElement('i')
        petal.className='sakura-petal'
        petal.style.cssText='--petal-x:'+((i*37+11)%100)+'%;--petal-y:'+((i*23+17)%100)+'%;--petal-size:'+(8+i%4*3)+'px;--petal-angle:'+(i*41)+'deg;--petal-blur:'+(i%3*.7)+'px'
        layer.appendChild(petal)
      }
      scene.appendChild(layer)
    }
    body.setAttribute('data-sakura-theme',THEME_SOURCE_ID)
    body.appendChild(scene)
    const headerTips = new Map<HTMLElement, { anchor: HTMLElement, observer: ResizeObserver }>()
    const placeHeaderTip = (tip: HTMLElement, anchor: HTMLElement) => {
      const a = anchor.getBoundingClientRect()
      const width = tip.offsetWidth, height = tip.offsetHeight
      const margin = 12
      // Prefer the free area to the right; use the left when space is tight.
      const left = a.right + 12 + width <= window.innerWidth - margin
        ? a.right + 12 : Math.max(margin, a.left - width - 12)
      const top = Math.max(40, Math.min(a.bottom - height, window.innerHeight - height - margin))
      tip.style.setProperty('--sakura-tip-left', left + 'px')
      tip.style.setProperty('--sakura-tip-top', top + 'px')
    }
    const clearHeaderTip = (tip: HTMLElement, entry: { observer: ResizeObserver }) => {
      entry.observer.disconnect()
      tip.removeAttribute('data-sakura-header-tip')
      tip.style.removeProperty('--sakura-tip-left')
      tip.style.removeProperty('--sakura-tip-top')
    }
    const refreshHeaderTips = () => {
      for (const [tip, entry] of headerTips) placeHeaderTip(tip, entry.anchor)
    }
    const mark = () => {
      for (const [tip, entry] of headerTips) if (!tip.isConnected || !entry.anchor.isConnected) {
        clearHeaderTip(tip, entry); headerTips.delete(tip)
      }
      for (const anchor of document.querySelectorAll<HTMLElement>('.fO69Vq_pageHead [aria-describedby]')) {
        for (const id of (anchor.getAttribute('aria-describedby') || '').split(/\s+/)) {
          const tip = document.getElementById(id)
          if (!tip || tip.getAttribute('role') !== 'tooltip' || headerTips.has(tip)) continue
          const observer = new ResizeObserver(() => placeHeaderTip(tip, anchor))
          headerTips.set(tip, { anchor, observer })
          tip.setAttribute('data-sakura-header-tip', '')
          placeHeaderTip(tip, anchor)
          observer.observe(tip); observer.observe(anchor)
        }
      }
      // Settings artwork shares this theme's lifetime and never receives input.
      for (const [panel, flowers] of settingsDecor) if (!panel.isConnected) {
        flowers.forEach(flower => flower.remove()); settingsDecor.delete(panel)
      }
      for (const panel of document.querySelectorAll('.wCInkW_panel')) if (!settingsDecor.has(panel)) {
        const flowers = ['left', 'top', 'bottom'].map((corner, zone) => {
          const petals = document.createElement('div')
          petals.className = 'sakura-settings-loose-petals sakura-settings-petals-' + corner
          petals.setAttribute('aria-hidden', 'true')
          const count = zone === 0 ? 9 : zone === 1 ? 7 : 4
          for (let i = 0; i < count; i++) {
            const petal = document.createElement('i')
            petal.className = 'sakura-settings-loose-petal'
            petal.style.cssText = '--corner-petal-x:' + ((i * 47 + 9 + zone * 13) % 140) + 'px;--corner-petal-y:' + ((i * 61 + 14 + zone * 17) % (zone === 0 ? 210 : 135)) + 'px;--corner-petal-angle:' + (i * 47 - 30) + 'deg;--corner-petal-size:' + (10 + i % 4 * 2) + 'px'
            petals.appendChild(petal)
          }
          return petals
        })
        settingsDecor.set(panel, flowers)
        flowers.forEach(flower => panel.appendChild(flower))
      }
      const frame = document.querySelector('[data-shell-overlay]')?.parentElement
      if(frame && !frames.has(frame)) {
        frames.set(frame,frame.getAttribute('data-sakura-shell'))
        frame.setAttribute('data-sakura-shell',THEME_SOURCE_ID)
      }
    }
    mark()
    window.addEventListener('resize', refreshHeaderTips)
    window.addEventListener('scroll', refreshHeaderTips, true)
    const observer=new MutationObserver(mark)
    observer.observe(body,{childList:true,subtree:true})
    return () => {
      observer.disconnect(); scene.remove(); style.remove()
      window.removeEventListener('resize', refreshHeaderTips)
      window.removeEventListener('scroll', refreshHeaderTips, true)
      for (const [tip, entry] of headerTips) clearHeaderTip(tip, entry)
      headerTips.clear()
      for (const flowers of settingsDecor.values()) flowers.forEach(flower => flower.remove())
      settingsDecor.clear()
      if(body.getAttribute('data-sakura-theme') === THEME_SOURCE_ID) body.removeAttribute('data-sakura-theme')
      for(const [frame,value] of frames) { if(frame.getAttribute('data-sakura-shell') === THEME_SOURCE_ID) frame.removeAttribute('data-sakura-shell') }
    }
  },[light])
  return null
}
