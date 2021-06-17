<template>
  <section class="main__section">
    <div class="main__experience">
      <div class="main__experience-wrapper">
        <div class="banner-slider">
          <vue-glide
            :keyboard="false"
            :per-view="1"
            bullet="true"
            type="slider"
            :autoplay="5000"
          >
            <vue-glide-slide
              v-for="(item, idx) in bannerExperiences"
              :key="idx"
            >
              <div class="banner">
                <div class="banner__image">
                  <img
                    class="h-full w-full object-left object-cover"
                    :src="item.experienceImg"
                  />
                </div>
              </div>
            </vue-glide-slide>
            <!-- <template slot="control">
            <div data-glide-el="controls" class="banner__controls">
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
          </template> -->
          </vue-glide>
        </div>
        <div class="experience">
          <div class="experience__headline">
            <span class="font-bold text-2xl text-white">
              Travel Secrets Experience
            </span>
          </div>
          <div class="card__list">
            <vs-card
              v-for="(item, idx) in cardExperiences"
              :key="idx"
              class="card__item"
            >
              <template #title>
                <span class="text-base font-bold">{{ item.title }}</span>
              </template>
              <template #img>
                <img :src="item.experienceImg" />
              </template>
              <template #text>
                <p>
                  {{ item.description }}
                </p>
              </template>
              <template #buttons>
                <div class="flex w-1/2 ml-auto pb-2 px-2">
                  <vs-button block color="dark">
                    <span class="span">More Info</span>
                  </vs-button>
                </div>
              </template>
            </vs-card>
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
    bannerExperiences: [
      {
        title: 'Tanah Lot TS Experience',
        experienceImg: require('~/assets/img/experience/experience-banner.png'),
      },
      {
        title: 'Tanah Lot TS Experience',
        experienceImg: require('~/assets/img/experience/experience-banner.png'),
      },
      {
        title: 'Tanah Lot TS Experience',
        experienceImg: require('~/assets/img/experience/experience-banner.png'),
      },
    ],
    cardExperiences: [
      {
        title: 'Tanah Lot TS Experience',
        description: `Price: IDR 500,000`,
        experienceImg: require('~/assets/img/experience/Tanah-Lot-TS-Experience.png'),
      },
      {
        title: 'Explore Malang in 1 Day',
        description: `Price: IDR 300,000`,
        experienceImg: require('~/assets/img/experience/Explore-Malang-in-1-Day.png'),
      },
      {
        title: 'Tanah Lot TS Experience',
        description: `Price: IDR 500,000`,
        experienceImg: require('~/assets/img/experience/Tanah-Lot-TS-Experience.png'),
      },
      {
        title: 'Explore Malang in 1 Day',
        description: `Price: IDR 300,000`,
        experienceImg: require('~/assets/img/experience/Explore-Malang-in-1-Day.png'),
      },
    ],
  }),
  methods: {
    handleControlCarousel(event) {
      if (event === 'next') {
        this.navCarousel = (this.navCarousel + 1) % this.banners.length
      } else {
        this.navCarousel = (this.navCarousel - 1) % this.banners.length
        if (this.navCarousel < 0) {
          this.navCarousel = this.banners.length - 1
        }
      }
    },
  },
}
</script>
<style></style>
