import { computed,ref } from 'vue'
export default function useShortcut (props, groupRef) {
  const ANCHOR_HEIGHT = 18
  const scrollRef=ref(null)

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
    scrollTo(anchorIndex)
  }

  function onShortcutTouchMove (e) {
      
  }

  function scrollTo(index) {
    if (isNaN(index)) {
      return
    }
    index = Math.max(0, Math.min(shortcutList.value.length - 1, index))
    const targetEl = groupRef.value.children[index]
    const scroll = scrollRef.value.scroll
    scroll.scrollToElement(targetEl, 0)
  }

  return {
    onShortcutTouchStart,
    onShortcutTouchMove,
    shortcutList,
    scrollRef
  }
}
