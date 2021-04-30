<template>
  <div id="app">
    <section>
      <div class="content">
        <div class="content__wrapper">
          <div class="content__brand">
            <img
              v-gsap.fromTo="[
                { opacity: 0, y: 200, ease: 'sine' },
                { opacity: 1, y: 0, duration: 0.5, ease: 'sine' },
              ]"
              :src="programs[navCarousel].logo"
              alt=""
            />
          </div>
          <div class="content__description">
            <p
              v-gsap.fromTo="[
                { opacity: 0, y: 100, ease: 'sine' },
                { opacity: 1, y: 0, duration: 0.75, ease: 'sine' },
              ]"
            >
              {{ programs[navCarousel].description }}
            </p>
          </div>
          <vs-button
            class="w-1/5 font-bold"
            size="large"
            :active="active == 0"
            @click="active = 0"
          >
            Get in Touch
          </vs-button>
        </div>
        <div class="main__glide">
          <vue-glide
            :gap="100"
            :dragThreshold="false"
            type="carousel"
            @glide:swipe-move="handleControlCarousel"
          >
            <vue-glide-slide v-for="(item, i) in programs" :key="i">
              <div class="slide one">
                <div class="slider-image">
                  <img :src="item.coverImg" />
                </div>
              </div>
            </vue-glide-slide>
            <template slot="control">
              <div data-glide-el="controls" class="controls">
                <vs-button
                  icon
                  color="#ffffff"
                  data-glide-dir="<"
                  id="prev"
                  @click="handleControlCarousel('prev')"
                >
                  <i class="bx bxs-chevron-left"></i>
                </vs-button>
                <vs-button
                  icon
                  color="#ffffff"
                  data-glide-dir=">"
                  id="next"
                  @click="handleControlCarousel('next')"
                >
                  <i class="bx bxs-chevron-right"></i>
                </vs-button>
              </div>
            </template>
          </vue-glide>
        </div>
      </div>
      <div class="background">
        <CarouselDistortion
          :navigation="navCarousel"
          :imageUrls="backgroundPrograms"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js'

export default {
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
  },
  data: () => ({
    programs: [
      {
        title: 'TS Talks',
        logo: require(`~/assets/img/programs/logo-ts-talks.svg`),
        coverImg: require(`~/assets/img/programs/TS-Talks_cover.png`),
        backgroundImg: require(`~/assets/img/img-bg2.png`),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },
      {
        title: 'Cipika Cipiki',
        logo: require(`~/assets/img/programs/logo-cipika-cipiki.svg`),
        coverImg: require(`~/assets/img/programs/Cipika-Cipiki_cover.png`),
        backgroundImg: require(`~/assets/img/img-bg.png`),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },
      {
        title: 'Dates with JuNa',
        logo: require(`~/assets/img/programs/logo-ju-na.svg`),
        coverImg: require(`~/assets/img/programs/Dates-with-JuNa_cover.png`),
        backgroundImg: require(`~/assets/img/img-bg2.png`),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },
      {
        title: 'HOKI',
        logo: require(`~/assets/img/programs/logo-hoki.svg`),
        coverImg: require(`~/assets/img/programs/HOKI_cover.png`),
        backgroundImg: require(`~/assets/img/img-bg.png`),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },
      {
        title: 'Signature',
        logo: require(`~/assets/img/programs/logo-signature.svg`),
        coverImg: require(`~/assets/img/programs/Signature_cover.png`),
        backgroundImg: require(`~/assets/img/img-bg2.png`),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },

      {
        title: 'Tanngal Merah',
        logo: require(`~/assets/img/programs/logo-tanggal-merah.svg`),
        coverImg: require(`~/assets/img/programs/Tanggal-Merah_cover.png`),
        backgroundImg: require(`~/assets/img/img-bg.png`),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },
    ],
    navCarousel: 0,
  }),
  computed: {
    backgroundPrograms() {
      const data = []
      const filter = this.programs.filter((item) => {
        return item.backgroundImg
      })
      filter.forEach((item) => {
        data.push(item.backgroundImg)
      })
      console.log(data)
      return data
    },
  },
  mounted() {},
  methods: {
    handleControlCarousel(event) {
      if (event === 'next') {
        this.navCarousel = (this.navCarousel + 1) % this.programs.length
      } else {
        this.navCarousel = (this.navCarousel - 1) % this.programs.length
        if (this.navCarousel < 0) {
          this.navCarousel = this.programs.length - 1
        }
      }
    },
  },
}
</script>
