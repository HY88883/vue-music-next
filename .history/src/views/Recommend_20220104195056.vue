<template>
    <div class="recommend">
       <scroll class="recommend-content">
      <div>
        <div class="slider-wrapper">
          <div class="slider-content">
            <slider v-if="sliders.length" :sliders="sliders"></slider>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title" v-show="!loading">热门歌单推荐</h1>
          <ul>
            <li
              v-for="item in albums"
              class="item"
              :key="item.id"
              @click="selectItem(item)"
            >
              <div class="icon">
                <img width="60" height="60" v-lazy="item.pic">
              </div>
              <div class="text">
                <h2 class="name">
                  {{ item.username }}
                </h2>
                <p class="title">
                  {{item.title}}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
</div>
</template>

<script>
import { getRecommend } from '../services/recommend'
import Slider from '@/components/base/slider'

export default {
  name: 'recommend',
  components: {
    Slider
  },
  data () {
    return {
      sliders: []
    }
  },
  async  mounted () {
    const result = await getRecommend()
    this.sliders = result.sliders
  }
}
</script>

<style>

</style>
