<template>
  <section class="main__section">
    <div class="content">
      <div class="content__wrapper">
        <div class="content__brand desktop">
          <img
            v-gsap.fromTo="[
              { opacity: 0, y: 200, ease: 'Power1.easeInOut' },
              { opacity: 1, y: 0, duration: 0.5, ease: 'Power1.easeInOut' },
            ]"
            :src="getAssetsURL(programs[navCarousel].to, 'logo.svg')"
            alt=""
          />
        </div>
        <div class="content__description">
          <p
            v-gsap.fromTo="[
              { opacity: 0, y: 100, ease: 'Power1.easeInOut' },
              { opacity: 1, y: 0, duration: 0.75, ease: 'Power1.easeInOut' },
            ]"
          >
            {{ programs[navCarousel].description }}
          </p>
        </div>
        <div class="content__button">
          <vs-button
            v-gsap.fromTo="[
              { opacity: 0, ease: 'Power1.easeInOut' },
              { opacity: 1, duration: 1, ease: 'Power1.easeInOut' },
            ]"
            class="font-bold"
            size="large"
            :to="'/program/' + programs[navCarousel].to"
            :active="active == 0"
            @click="active = 0"
          >
            Read More
          </vs-button>
        </div>
      </div>
      <div class="main__glide">
        <vue-glide
          v-model="navCarousel"
          :per-touch="1"
          :keyboard="false"
          :drag-threshold="false"
          :breakpoints="settingCarousel.breakpoints"
          type="carousel"
        >
          <vue-glide-slide v-for="(item, i) in programs" :key="i">
            <div class="slide one">
              <div class="slider-image">
                <img :src="getAssetsURL(item.to, 'program_cover.png')" />
              </div>
            </div>
          </vue-glide-slide>
          <template slot="control">
            <div data-glide-el="controls" class="controls">
              <vs-button id="prev" icon color="#ffffff" data-glide-dir="<">
                <i class="bx bxs-chevron-left"></i>
              </vs-button>
              <vs-button id="next" icon color="#ffffff" data-glide-dir=">">
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
          :src="require('~/assets/img/bg-gradient2.png')"
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
        title: 'Travel Secrets',
        to: 'travel-secrets',
        description:
          'A non-scripted web-series program hosted by Luna Maya and Marianne Rumantir. These two adventurous females shares their experiences and travel discoveries from all around the world.',
      },
      {
        title: 'TS Talks',
        to: 'ts-talks',
        description:
          'TS Talks is an Indonesian talk show hosted by Luna and Marianne featuring guest interviews and a variety of fun segments with different public figures.',
      },
      {
        title: 'Cipika Cipiki',
        to: 'cipika-cipiki',
        description:
          'Cicip Piring Kanan - Cicip Piring Kiri is a fun culinary program where our hosts discover different cuisines from different areas of Indonesia and the world featuring special guests on every episode.',
      },
      {
        title: 'Dates with JuNa',
        to: 'dates-with-juna',
        description:
          'Dates with a romantic dating talk-show that talks about relationships, current trends and culture with different hosts in every season.',
      },
      {
        title: 'HOKI',
        to: 'hoki',
        description:
          'Hobi Orang Kece Indonesia with Dimas Beck explores the eccentricities of the unique hobbies of Indonesians.',
      },
      {
        title: 'Signature',
        to: 'signature',
        description:
          'Sigi Wimala takes the audience into the different world of sports and exciting adventures.',
      },

      {
        title: 'Tanngal Merah',
        to: 'tanggal-merah',
        description:
          'Dedicated for travelers who are looking for short-trips and adventurous travel ideas, Tanggal Merah takes you to hidden gems of Indonesia (and the world) that are smart and easy on the pocket type of travels.',
      },
      {
        title: 'Momma Patz',
        to: 'momma-patz',
        description:
          'In this baking show, our sexy next door momma, Patricia Panigoro, will share her secret recipes inspired from her travels around the world.',
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
        return item.to
      })
      filter.forEach((item) => {
        data.push(this.getAssetsURL(item.to, 'program_background.png'))
      })
      console.log(data)
      return data
    },
  },
  mounted() {},
  methods: {
    getAssetsURL(program, filename) {
      const data =
        this.$config.assetURL + '/programs/' + program + '/' + filename
      console.log(data)
      return data
    },
  },
}
</script>
