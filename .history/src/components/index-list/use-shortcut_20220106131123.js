import { computed } from 'vue'
export default function useShortcut (props, groupRef) {
  const ANCHOR_HEIGHT = 18

  console.log('props', props, groupRef)

  const shortcutList = computed(() => {
    return props.data.map((group) => {
      return group.title
    })
  })

  const touch={}

  function onShortcutTouchStart (e) {
    console.log(typeof e)
    console.log(e)
    const anchorIndex = parseInt(e.target.dataset.index)
    touch.y1 = e.touches[0].pageY
    touch.anchorIndex = anchorIndex
    
  }

  function onShortcutTouchMove (e) {

  }

  return {
    onShortcutTouchStart,
    onShortcutTouchMove,
    shortcutList
  }
}
