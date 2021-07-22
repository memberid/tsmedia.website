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
                <img :src="item.coverImg" />
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
        logo: require(`~/assets/img/programs/logo-travel-secrets.svg`),
        coverImg: require(`~/assets/img/programs/Travel-Secrets_cover.png`),
        backgroundImg: require(`~/assets/img/programs/Travel-Secrets_image.png`),
        description:
          'A non-script webseries program hosted by Luna Maya and Marianne Rumantir. These two independent women are going to share their experience and inspirations to travelers from all over the world.',
      },
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
          'Cipika-Cipiki is a program where Luna and Marianne will be comparing the same cuisine from two different restaurants.',
      },
      {
        title: 'Dates with JuNa',
        to: 'dates-with-juna',
        logo: require(`~/assets/img/programs/logo-ju-na.svg`),
        coverImg: require(`~/assets/img/programs/Dates-with-JuNa_cover.png`),
        backgroundImg: require(`~/assets/img/img-bg2.png`),
        description:
          'Dates with Ju-Na is a romantic dating talk show with Herjunot Ali and Luna Maya.',
      },
      {
        title: 'HOKI',
        to: 'hoki',
        logo: require(`~/assets/img/programs/logo-hoki.svg`),
        coverImg: require(`~/assets/img/programs/HOKI_cover.png`),
        backgroundImg: require(`~/assets/img/programs/HOKI_image.png`),
        description:
          'In HOKI, Dimas Beck will explore the hobbies of famous people in Indonesia.',
      },
      {
        title: 'Signature',
        to: 'signature',
        logo: require(`~/assets/img/programs/logo-signature.svg`),
        coverImg: require(`~/assets/img/programs/Signature_cover.png`),
        backgroundImg: require(`~/assets/img/programs/Signature_image.png`),
        description:
          'Hello, sports enthusiast! In this program, Sigi Wimala as our host for SIGnature will share her journey on exploring new sports.',
      },

      {
        title: 'Tanngal Merah',
        to: 'tanggal-merah',
        logo: require(`~/assets/img/programs/logo-tanggal-merah.svg`),
        coverImg: require(`~/assets/img/programs/Tanggal-Merah_cover.png`),
        backgroundImg: require(`~/assets/img/programs/Tanggal-Merah_image.png`),
        description:
          'Budget traveling, why not? Tanggal Merah hosted by Jerome Kurnia and Carissa Perusset is a program where you can find many hidden gems in Indonesia at a low cost.',
      },
      {
        title: 'Momma Patz',
        to: 'momma-patz',
        logo: require(`~/assets/img/programs/logo-momma-patz.svg`),
        coverImg: require(`~/assets/img/programs/Momma-Patz_cover.png`),
        backgroundImg: require(`~/assets/img/programs/Momma-Patz_image.png`),
        description:
          'It’s Momma Patz Time! A cooking show program hosted by the beautiful model, Patricia Panigoro',
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
  methods: {},
}
</script>
