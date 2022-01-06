import { ref } from 'vue'

export default function useFixed (props) {
  const fixedTitle = ref('xx')
  const heightList = ref([])
  const groupRef = ref(null)

  heightList.value.push(0)

  function calculate () {
      const list=heightList.value
      for (let i=0; i<list.length; i++) {

      }
  }

  return {
    fixedTitle,
    groupRef
  }
}
