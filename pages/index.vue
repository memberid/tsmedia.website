<template>
  <section class="main__section">
    <div class="content">
      <div class="content__wrapper">
        <div class="content__brand desktop">
          <img
            v-gsap.fromTo="[
              { opacity: 0, y: 50, ease: 'Power1.easeInOut' },
              { opacity: 1, y: 0, duration: 0.5, ease: 'Power1.easeInOut' },
            ]"
            :src="programs[navCarousel].logo.url"
            alt=""
          />
        </div>
        <div
          v-gsap.fromTo="[
            { opacity: 0, y: 50, ease: 'Power1.easeInOut' },
            { opacity: 1, y: 0, duration: 0.75, ease: 'Power1.easeInOut' },
          ]"
          class="content__description"
        >
          <p>
            {{ programs[navCarousel].description }}
          </p>
        </div>
        <div
          v-gsap.fromTo="[
            { opacity: 0, y: 50, ease: 'Power1.easeInOut' },
            { opacity: 1, y: 0, duration: 1.25, ease: 'Power1.easeInOut' },
          ]"
          class="content__button"
        >
          <vs-button
            class="font-bold"
            size="large"
            :to="
              programs[navCarousel].type === 'Programs'
                ? {
                    name: 'program-id-name',
                    params: {
                      name: programs[navCarousel].to,
                      id: programs[navCarousel].id,
                    },
                  }
                : false
            "
            :href="
              programs[navCarousel].type === 'Channels'
                ? programs[navCarousel].href
                : false
            "
            :blank="programs[navCarousel].type === 'Channels' ? true : false"
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
                <img :src="item.cover.url" />
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
    <div class="background opacity-90">
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
  async asyncData({ $axios, $config }) {
    const programs = await $axios
      .$get(`${$config.baseURL}/programs`)
      .then((res) => res)

    console.log(programs)

    return { programs }
  },
  data: () => ({
    programs: [
      {
        title: 'Travel Secrets',
        to: 'travel-secrets',
        type: 'programs',
        href: '#',
        description:
          'A non-scripted web-series program hosted by Luna Maya and Marianne Rumantir. These two adventurous females shares their experiences and travel discoveries from all around the world.',
      },
      {
        title: 'TS Talks',
        to: 'ts-talks',
        type: 'programs',
        href: '#',
        description:
          'TS Talks is an Indonesian talk show hosted by Luna and Marianne featuring guest interviews and a variety of fun segments with different public figures.',
      },
      {
        title: 'Cipika Cipiki',
        to: 'cipika-cipiki',
        type: 'programs',
        href: '#',
        description:
          'Cicip Piring Kanan - Cicip Piring Kiri is a fun culinary program where our hosts discover different cuisines from different areas of Indonesia and the world featuring special guests on every episode.',
      },
      {
        title: 'Dates with JuNa',
        to: 'dates-with-juna',
        type: 'programs',
        href: '#',
        description:
          'Dates with a romantic dating talk-show that talks about relationships, current trends and culture with different hosts in every season.',
      },
      {
        title: 'HOKI',
        to: 'hoki',
        type: 'programs',
        href: '#',
        description:
          'Hobi Orang Kece Indonesia with Dimas Beck explores the eccentricities of the unique hobbies of Indonesians.',
      },
      {
        title: 'Signature',
        to: 'signature',
        type: 'programs',
        href: '#',
        description:
          'Sigi Wimala takes the audience into the different world of sports and exciting adventures.',
      },

      {
        title: 'Tanngal Merah',
        to: 'tanggal-merah',
        type: 'programs',
        href: '#',
        description:
          'Dedicated for travelers who are looking for short-trips and adventurous travel ideas, Tanggal Merah takes you to hidden gems of Indonesia (and the world) that are smart and easy on the pocket type of travels.',
      },
      {
        title: 'Momma Patz',
        to: 'momma-patz',
        type: 'programs',
        href: '#',
        description:
          'In this baking show, our sexy next door momma, Patricia Panigoro, will share her secret recipes inspired from her travels around the world.',
      },
      {
        title: 'Lipstick Golfers',
        to: 'lipstick-golfers',
        type: 'channels',
        href: 'https://instagram.com/lipstickgolfers?utm_medium=copy_link',
        description: `Golf Community - Not your average female golfers`,
      },
      {
        title: 'Lipstick Riders',
        to: 'lipstick-riders',
        type: 'channels',
        href: 'https://instagram.com/lipstickriders?utm_medium=copy_link',
        description: `Cycling Community - We're not your average female cyclist`,
      },
      {
        title: 'Pointsgeek',
        to: 'pointsgeek',
        type: 'channels',
        href: 'https://pointsgeek.id/',
        description:
          'Your source for travel-hacking, points-hacking, hot deals, tips & tricks, review and recommendation place.',
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
        data.push(item.background.url)
      })
      console.log(data)
      return data
    },
  },
  mounted() {},
  methods: {
    getAssetsURL(type, foldername, filename) {
      const data =
        this.$config.assetURL + `/${type}/` + foldername + '/' + filename
      return data
    },
  },
}
</script>
