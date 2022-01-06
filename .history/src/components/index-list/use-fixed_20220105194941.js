import { ref } from 'vue'

export default function useFixed (props) {
  const fixedTitle = ref('xx')
  const heightList = ref([])
  const groupRef = ref(null)

  heightList.value.push(0)

  function calculate () {

  }

  return {
    fixedTitle,
    groupRef
  }
}
