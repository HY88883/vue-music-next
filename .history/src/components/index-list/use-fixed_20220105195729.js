import { ref, watch } from 'vue'

export default function useFixed (props) {
  const fixedTitle = ref('xx')
  const heightList = ref([])
  const groupRef = ref(null)

  heightList.value.push(0)

  watch(() => props.data, () => {

  })

  function calculate () {
    const list = groupRef.value.children
    for (let i = 0; i < list.length; i++) {
      heightList.value.push(list[i].offsetHeight)
    }
  }

  return {
    fixedTitle,
    groupRef
  }
}
