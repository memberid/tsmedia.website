<template>
  <div class="carousel__distortion">
    <DistortionCarousel
      :index="navigation"
      :image-urls="imageUrls"
      :distortion-texture-url="require(`~/assets/img/carousel/15.jpg`)"
      :max-width="1920"
      :ratio="{ width: 16, height: 9 }"
      :move-threshold="0.2"
      :duration-sec="2.5"
    />
  </div>
</template>

<script>
import { Power3 as Quart } from 'gsap'
import DistortionCarousel from '@kaave/vue-disortion-carousel'

export default {
  components: {
    DistortionCarousel,
  },
  props: {
    navigation: {
      type: Number,
      default: 0,
    },
    imageUrls: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      index: 0,
    }
  },
  // watch: {
  //   navigation: {
  //     deep: true,
  //     handler(newValue, beforeValue) {
  //       console.log(beforeValue, newValue)
  //     },
  //   },
  // },
  computed: {
    easing() {
      return Quart.easeInOut
    },
  },
  mounted() {
    // this.interval()
  },
  methods: {
    handleMove() {
      this.index = (this.index + 1) % this.imageUrls.length
    },
  },
}
</script>
