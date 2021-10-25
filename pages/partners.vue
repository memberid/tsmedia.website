<template>
  <section class="main__section">
    <div class="main__partners">
      <div class="main__partners-wrapper">
        <div class="partners">
          <!-- <div class="partners__head">

        </div> -->
          <div class="partners__body">
            <div class="partners__content">
              <div class="partners__content-subtitle">Partners</div>
              <div class="partners__content-category">
                <div
                  class="partners__content-title"
                  :class="[
                    selectCategory === 'Brands' ? 'opacity-100' : 'opacity-40',
                  ]"
                  @click="selectCategory = 'Brands'"
                >
                  Brands
                </div>
                <div
                  class="partners__content-title"
                  :class="
                    selectCategory === 'Channels' ? 'opacity-100' : 'opacity-40'
                  "
                  @click="selectCategory = 'Channels'"
                >
                  Channels
                </div>
              </div>
              <p class="partners__content-description">
                Meet our clients and partners from a variety of industries,
                Points Geek, Lipstick Riders & Lipstick Golfers. And we are open
                for any partnership and collaboration
              </p>
            </div>
            <div class="partners__wrapper">
              <!-- <vue-glide
                v-model="navCarousel"
                :per-touch="1"
                :keyboard="false"
                :drag-threshold="false"
                :breakpoints="settingCarousel.breakpoints"
                type="carousel"
              >
                <vue-glide-slide v-for="(item, i) in channels" :key="i">
                  <div class="partners__item">
                    <img
                      class="partners__logo object-contain"
                      :src="getAssetsURL(item.name, 'logo.png')"
                      alt=""
                    />
                    <div class="partners__title">Lorem Ipsum</div>
                  </div>
                </vue-glide-slide>
                <template slot="control">
                  <div data-glide-el="controls" class="controls">
                    <vs-button
                      id="prev"
                      icon
                      color="#ffffff"
                      data-glide-dir="<"
                    >
                      <i class="bx bxs-chevron-left"></i>
                    </vs-button>
                    <vs-button
                      id="next"
                      icon
                      color="#ffffff"
                      data-glide-dir=">"
                    >
                      <i class="bx bxs-chevron-right"></i>
                    </vs-button>
                  </div>
                </template>
              </vue-glide> -->
              <template v-if="selectCategory === 'Brands'">
                <vue-glide
                  v-gsap.fromTo="[
                    { opacity: 0, y: 50, ease: 'Power2.easeInOut' },
                    {
                      opacity: 1,
                      y: 0,
                      duration: 0.75,
                      ease: 'Power2.easeInOut',
                    },
                  ]"
                  :keyboard="false"
                  :drag-threshold="false"
                  :per-touch="1"
                  :breakpoints="settingCarousel.breakpoints"
                  type="slider"
                  bound
                >
                  <vue-glide-slide
                    v-for="(item, i) in brands"
                    :key="i"
                    v-gsap.fromTo="[
                      { opacity: 0, y: 50, ease: 'Power2.easeInOut' },
                      {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        delay: i * 0.3,
                        ease: 'Power2.easeInOut',
                      },
                    ]"
                  >
                    <div class="partners__item">
                      <img
                        class="partners__logo object-contain"
                        :src="getAssetsURL('/', 'brands', `${item.name}.png`)"
                        alt=""
                      />
                    </div>
                  </vue-glide-slide>
                  <template slot="control">
                    <div data-glide-el="controls" class="controls">
                      <vs-button
                        id="prev"
                        icon
                        color="#ffffff"
                        data-glide-dir="<"
                      >
                        <i class="bx bxs-chevron-left"></i>
                      </vs-button>
                      <vs-button
                        id="next"
                        icon
                        color="#ffffff"
                        data-glide-dir=">"
                      >
                        <i class="bx bxs-chevron-right"></i>
                      </vs-button>
                    </div>
                  </template>
                </vue-glide>
              </template>
              <template v-else-if="selectCategory === 'Channels'">
                <div class="partners__list">
                  <div
                    v-for="(item, idx) in channels"
                    :key="idx"
                    v-gsap.fromTo="[
                      { opacity: 0, y: 50, ease: 'Power2.easeInOut' },
                      {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        delay: idx * 0.3,
                        ease: 'Power2.easeInOut',
                      },
                    ]"
                    class="partners__item"
                  >
                    <a :href="item.link" target="_blank">
                      <img
                        class="partners__logo object-contain"
                        :src="getAssetsURL('/channels/', item.name, 'logo.svg')"
                        alt=""
                      />
                      <div class="partners__title">{{ item.title }}</div>
                    </a>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div class="analytics">
          <div class="analytics__headline">Our Key Values</div>
          <div class="analytics__list">
            <div class="analytics__item">
              <div class="analytics__value">100M +</div>
              <div class="analytics__title">Avg Monthly Impression</div>
            </div>
            <div class="analytics__item">
              <div class="analytics__value">40M +</div>
              <div class="analytics__title">Avg Monthly Reach</div>
            </div>
            <div class="analytics__item">
              <div class="analytics__value">30 +</div>
              <div class="analytics__title">Brand Collaboration</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="background">
      <div class="h-full w-full">
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
    selectCategory: 'Brands',
    channels: [
      {
        name: `pointsgeek`,
        title: `Loyalty & Travel Website`,
        link: `https://pointsgeek.id/`,
      },
      {
        name: `lipstick-golfers`,
        title: `Golf Community`,
        link: `https://www.instagram.com/lipstickgolfers/`,
      },
      {
        name: `lipstick-riders`,
        title: `Cycling Community`,
        link: `https://www.instagram.com/lipstickriders/`,
      },
    ],
    brands: [
      {
        name: `attaquer`,
      },
      {
        name: `bni`,
      },
      {
        name: `bri`,
      },
      {
        name: `bulgari`,
      },
      {
        name: `cervelo`,
      },
      {
        name: `fitbar`,
      },
      {
        name: `four-seasons`,
      },
      {
        name: `garuda-indonesia`,
      },
      {
        name: `link-aja`,
      },
      {
        name: `magnum`,
      },
      {
        name: `mercedes-benz`,
      },
      {
        name: `nirjhara`,
      },
      {
        name: `plataran`,
      },
      {
        name: `telkomsel-halo`,
      },
      {
        name: `tentrem`,
      },
      {
        name: `the-legian`,
      },
      {
        name: `traveloka`,
      },
      {
        name: `tripuri`,
      },
      {
        name: `turkish-airlines`,
      },
      {
        name: `uma-canggu`,
      },
      {
        name: `uob`,
      },
      {
        name: `vaya`,
      },
      {
        name: `viceroy`,
      },
    ],
    channelsCarousel: 0,
    brandsCarousel: 0,
    settingCarousel: {
      breakpoints: {
        640: {
          perView: 1,
        },
        768: {
          perView: 3,
          focusAt: 0,
          gap: 50,
        },
        1024: {
          perView: 3,
          focusAt: 0,
          gap: 50,
        },
        1440: {
          perView: 3,
          focusAt: 0,
          gap: 50,
        },
      },
    },
  }),
  mounted() {
    this.$gsap.fromTo(
      '.partners__content',
      { opacity: 0, x: 50, ease: 'Power2.easeInOut' },
      {
        opacity: 1,
        x: 0,
        duration: 0.75,
        ease: 'Power2.easeInOut',
      }
    )

    this.$gsap.fromTo(
      '.analytics__headline',
      { opacity: 0, y: 50, ease: 'Power2.easeInOut' },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 0.25,
        ease: 'Power2.easeInOut',
      }
    )

    this.$gsap.fromTo(
      '.analytics__item',
      { opacity: 0, y: 50, ease: 'Power2.easeInOut' },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 0.5,
        ease: 'Power2.easeInOut',
      }
    )
  },
  methods: {
    handleControlCarousel(event) {
      if (event === 'next') {
        this.navCarousel = (this.navCarousel + 1) % this.profiles.length
      } else {
        this.navCarousel = (this.navCarousel - 1) % this.profiles.length
        if (this.navCarousel < 0) {
          this.navCarousel = this.profiles.length - 1
        }
      }
    },
    getAssetsURL(dir, subdir, filename) {
      const data = this.$config.assetURL + dir + subdir + '/' + filename
      return data
    },
  },
}
</script>
<style></style>
