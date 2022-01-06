import { ref, watch, nextTick, computed } from 'vue'

export default function useFixed (props) {
  const TITLE_HEIGHT = 30

  const heightList = ref([])
  const groupRef = ref(null)
  const currentIndex = ref(0)
  const scrollY = ref(0)
  const distance = ref(0)

  heightList.value.push(0)

  const fixedTitle = computed(() => {
    if (scrollY.value < 0) {
      return ''
    }
    const currentGroup = props.data[currentIndex.value]
    return currentGroup ? currentGroup.title : ''
  })

  const fixedStyle = computed(() => {
    const distanceVal = distance.value
    const diff = (distanceVal > 0 && distanceVal < TITLE_HEIGHT) ? -TITLE_HEIGHT + distanceVal : 0
    return {
      transform: `translate3d(0, ${diff}px,0)`
    }
  })

  watch(() => props.data, async () => {
    await nextTick()
    calculate()
  })

  watch(scrollY, (newscrollY) => {
    const heightLists = heightList.value
    for (let i = 0; i < heightLists.length - 1; i++) {
      if (newscrollY >= heightLists[i] && newscrollY <= heightLists[i + 1]) {
        currentIndex.value = i
        distance.value = heightLists[i + 1] - newscrollY
      }
    }
  })

  function onScroll (pos) {
    scrollY.value = -pos.y
  }

  function calculate () {
    const list = groupRef.value.children
    let height = 0
    for (let i = 0; i < list.length; i++) {
      height += list[i].offsetHeight
      heightList.value.push(height)
    }
  }

  return {
    fixedTitle,
    groupRef,
    onScroll,
    currentIndex,
    fixedStyle
  }
}
