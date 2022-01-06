import { ref, watch, nextTick } from 'vue'

export default function useFixed (props) {
  const fixedTitle = ref('xx')
  const heightList = ref([])
  const groupRef = ref(null)
  const currentIndex = ref(0)
  const scrollY = ref(0)

  heightList.value.push(0)

  watch(() => props.data, async () => {
    await nextTick()
    calculate()
  })

  watch(scrollY, (newscrollY) => {
    const heightLists = heightList.value
    for (let i = 0; i < heightLists.length - 1; i++) {
      if (newscrollY >= heightLists[i] && newscrollY < heightLists[i + 1]) {
        currentIndex.value = i
        console.log('score==', i)
      }
    }
  })

  function onScroll (pos) {
    scrollY.value = -pos.y
  }

  function calculate () {
    const list = groupRef.value.children
    for (let i = 0; i < list.length; i++) {
      heightList.value.push(list[i].offsetHeight)
    }
  }

  return {
    fixedTitle,
    groupRef,
    onScroll
  }
}
