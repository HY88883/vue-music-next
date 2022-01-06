import { ref } from 'vue'

export default function useFixed (props) {
  const fixedTitle = ref('x')
  const heightList=ref([])



  return {
    fixedTitle
  }
}
