import { computed } from 'vue'
export default function useShortcut (props, groupRef) {
  const ANCHOR_HEIGHT = 18

  console.log('props', props, groupRef)

  const shortcutList = computed(() => {
    return props.data.map((group) => {
      return group.title
    })
  })

  function onShortcutTouchStart (e) {
    console.log(typeof e)
    console.log(e)
    const anchorIndex = parseInt(e.target.dataset.index)
  }

  function onShortcutTouchMove (e) {

  }

  return {
    onShortcutTouchStart,
    onShortcutTouchMove,
    shortcutList
  }
}
