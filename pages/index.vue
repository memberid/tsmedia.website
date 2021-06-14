<template>
  <section class="main__section">
    <div class="content">
      <div class="content__wrapper">
        <div class="content__brand desktop">
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
        <div class="content__button">
          <vs-button
            class="font-bold"
            size="large"
            :to="'/program/' + programs[navCarousel].to"
            :active="active == 0"
            @click="active = 0"
          >
            Get in Touch
          </vs-button>
        </div>
      </div>
      <div class="main__glide">
        <vue-glide
          :keyboard="false"
          :drag-threshold="false"
          :breakpoints="settingCarousel.breakpoints"
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
                id="prev"
                icon
                color="#ffffff"
                data-glide-dir="<"
                @click="handleControlCarousel('prev')"
              >
                <i class="bx bxs-chevron-left"></i>
              </vs-button>
              <vs-button
                id="next"
                icon
                color="#ffffff"
                data-glide-dir=">"
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
      <div class="desktop h-full w-full">
        <CarouselDistortion
          :navigation="navCarousel"
          :image-urls="backgroundPrograms"
        />
      </div>
      <div class="mobile h-full w-full">
        <img
          class="object-cover"
          :src="require('~/assets/img/bg-gradient.png')"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    programs: [
      {
        title: 'TS Talks',
        to: 'ts-talks',
        logo: require(`~/assets/img/programs/logo-ts-talks.svg`),
        coverImg: require(`~/assets/img/programs/TS-Talks_cover.png`),
        backgroundImg: require(`~/assets/img/programs/TS-Talks_image.png`),
        description:
          'TS Talks is an Indonesian talk show host by Luna and Marianne featuring guests interviews and variety of fun segments with different public figures on every exciting episode.',
      },
      {
        title: 'Cipika Cipiki',
        to: 'cipika-cipiki',
        logo: require(`~/assets/img/programs/logo-cipika-cipiki.svg`),
        coverImg: require(`~/assets/img/programs/Cipika-Cipiki_cover.png`),
        backgroundImg: require(`~/assets/img/img-bg.png`),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },
      {
        title: 'Dates with JuNa',
        to: 'dates-with-juna',
        logo: require(`~/assets/img/programs/logo-ju-na.svg`),
        coverImg: require(`~/assets/img/programs/Dates-with-JuNa_cover.png`),
        backgroundImg: require(`~/assets/img/img-bg2.png`),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },
      {
        title: 'HOKI',
        to: 'hoki',
        logo: require(`~/assets/img/programs/logo-hoki.svg`),
        coverImg: require(`~/assets/img/programs/HOKI_cover.png`),
        backgroundImg: require(`~/assets/img/programs/HOKI_image.png`),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },
      {
        title: 'Signature',
        to: 'signature',
        logo: require(`~/assets/img/programs/logo-signature.svg`),
        coverImg: require(`~/assets/img/programs/Signature_cover.png`),
        backgroundImg: require(`~/assets/img/programs/Signature_image.png`),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },

      {
        title: 'Tanngal Merah',
        to: 'tanggal-merah',
        logo: require(`~/assets/img/programs/logo-tanggal-merah.svg`),
        coverImg: require(`~/assets/img/programs/Tanggal-Merah_cover.png`),
        backgroundImg: require(`~/assets/img/programs/Tanggal-Merah_image.png`),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },
    ],
    navCarousel: 0,
    settingCarousel: {
      breakpoints: {
        640: {
          perView: 1,
        },
        768: {
          perView: 3,
          focusAt: 1,
          gap: 50,
        },
        1024: {
          perView: 2,
          focusAt: 0,
          gap: 150,
        },
        1440: {
          perView: 3,
          focusAt: 0,
          gap: 200,
        },
      },
    },
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
