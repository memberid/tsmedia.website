<template>
  <section class="main__section">
    <div class="main__shop">
      <div class="main__shop-wrapper">
        <div class="banner-slider">
          <vue-glide
            :keyboard="false"
            :per-view="1"
            bullet="true"
            type="slider"
            :autoplay="5000"
          >
            <vue-glide-slide v-for="(item, idx) in banners" :key="idx">
              <div class="banner">
                <div class="banner__image">
                  <img
                    class="h-full w-full object-left object-cover"
                    :src="item.bannerImg"
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
        <div class="shop">
          <div class="shop__headline">
            <span class="font-bold text-2xl text-white">Apparel</span>
          </div>
          <div class="card__list">
            <vs-card v-for="(item, idx) in 12" :key="idx" class="card__item">
              <template #title>
                <span class="text-base font-bold">Travel Secret Men</span>
              </template>
              <template #img>
                <img
                  :src="require(`~/assets/img/merc/product-display.png`)"
                  alt=""
                />
              </template>
              <template #text>
                <p>
                  Size: S, M, L, XL
                  <br />
                  Price: IDR 250,000
                </p>
              </template>
              <template #buttons>
                <div class="flex w-2/3 lg:w-1/3 ml-auto pb-2 px-2">
                  <vs-button block color="dark">
                    <span class="span">Order</span>
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
    banners: [
      {
        title: 'banner 1',
        bannerImg: require('~/assets/img/merc/merc-banner.png'),
      },
      {
        title: 'banner 2',
        bannerImg: require('~/assets/img/merc/merc-banner.png'),
      },
      {
        title: 'banner 3',
        bannerImg: require('~/assets/img/merc/merc-banner.png'),
      },
      {
        title: 'banner 4',
        bannerImg: require('~/assets/img/merc/merc-banner.png'),
      },
      {
        title: 'banner 5',
        bannerImg: require('~/assets/img/merc/merc-banner.png'),
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
