<template>
  <scroll
    class="index-list"
    :probe-type="3"
    @scroll="onScroll"
    ref="scrollRef"
  >
    <ul ref="groupRef">
      <li
        v-for="group in data"
        :key="group.title"
        class="group"
      >
        <h2 class="title">{{group.title}}</h2>
        <ul>
          <li
            v-for="item in group.list"
            :key="item.id"
            class="item"
            @click="onItemClick(item)"
          >
            <img class="avatar" v-lazy="item.pic">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div
      class="fixed"
      v-show="fixedTitle"
      :style="fixedStyle"
    >
      <div class="fixed-title">{{fixedTitle}}</div>
    </div>
    <!-- <div
      class="shortcut"
      @touchstart.stop.prevent="onShortcutTouchStart"
      @touchmove.stop.prevent="onShortcutTouchMove"
      @touchend.stop.prevent
    >
      <ul>
        <li
          v-for="(item, index) in shortcutList"
          :key="item"
          :data-index="index"
          class="item"
          :class="{'current':currentIndex===index}">
          {{item}}
        </li>
      </ul>
    </div> -->
  </scroll>
</template>

<script>
import Scroll from '@/components/base/scroll'
import useFixed from './use-fixed'
export default {
  name: 'index-list',
  components: {
    Scroll
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  setup (props) {
    const { fixedTitle } = useFixed(props)
  }
}
</script>

<style>

</style>
