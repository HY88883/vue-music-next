import { computed } from 'vue'
export default function useShortcut (props, groupRef) {
  console.log('props', props, groupRef)

  const shortcutList = computed(() => {
    return props.data.map((group) => {
      return group.title
    })
  })

  function onShortcutTouchStart (e) {
    console.log(typeof e)
    console.log(e)
  }

  function onShortcutTouchMove (e) {

  }

  return {
    onShortcutTouchStart,
    onShortcutTouchMove,
    shortcutList
  }
}
