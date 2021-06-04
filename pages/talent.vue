<template>
  <section class="main__section">
    <div class="main__talent">
      <div class="main__glide">
        <vue-glide
          :keyboard="false"
          :per-touch="false"
          :drag-threshold="false"
          :breakpoints="settingCarousel.breakpoints"
          type="slider"
          @glide:swipe-move="handleControlCarousel"
        >
          <vue-glide-slide v-for="(item, i) in profiles" :key="i">
            <vs-card type="1" class="card m-4">
              <template #title>
                <span class="text-2xl font-semibold">{{ item.name }}</span>
              </template>
              <template #img>
                <img class="w-full h-full" :src="item.image" alt="" />
              </template>
              <template #text>
                <p class="text-md">
                  {{ item.description }}
                </p>
              </template>
            </vs-card>
          </vue-glide-slide>
          <template slot="control">
            <div data-glide-el="controls" class="controls">
              <vs-button
                id="prevTalent"
                icon
                shadow
                data-glide-dir="<"
                @click="handleControlCarousel('prev')"
              >
                <i class="bx bxs-chevron-left"></i>
              </vs-button>
              <vs-button
                id="nextTalent"
                icon
                shadow
                data-glide-dir=">"
                @click="handleControlCarousel('next')"
              >
                <i class="bx bxs-chevron-right"></i>
              </vs-button>
            </div>
          </template>
        </vue-glide>
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
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    profiles: [
      {
        name: 'Luna Maya',
        description:
          'Actress and entrepreneur, Luna has been in the entertainment industry for the last 20 years and can be seen in countless films, TV Series and shows. In addition to being the Co-Founder of TS Media, Luna is also building her own clothing brand Luna Habit and cosmetic line Nama Beauty.',
        image: require('~/assets/img/talents/Luna-Maya_profile.png'),
      },

      {
        name: 'Herjunot Ali',
        description:
          'Nihil sapiente eligendi et dicta quam dignissimos est. Facere voluptate eligendi ipsum beatae nesciunt neque dolorem est sunt. Voluptate earum minus tempore quos voluptas nihil dolores cupiditate. Delectus consequatur officiis repellat nisi repellat id repellat aut.',
        image: require('~/assets/img/talents/Junot_profile.png'),
      },
      {
        name: 'Marianne Rumantir',
        description: `Together with Luna, Marianne co-founded TS Media and is also the CEO of a technology company MEMBER.ID.
Marianne’s an avid traveler and have built her career as a marketing professional and entrepreneur in Asia, Australia and the United States. `,
        image: require('~/assets/img/talents/Mairanne-Rumantir_profile.png'),
      },
      {
        name: 'Sigi Wimala',
        description:
          'Started her career as a model at a very young age, Sigi continued her presence in the entertainment business as an actress, writer and filmmaker. A mother of two, Sigi is known as a lifestyle and sports influencer',
        image: require('~/assets/img/talents/Sigi-Wimala_profile.png'),
      },
      {
        name: 'Dimas Beck',
        description:
          'Nihil sapiente eligendi et dicta quam dignissimos est. Facere voluptate eligendi ipsum beatae nesciunt neque dolorem est sunt. Voluptate earum minus tempore quos voluptas nihil dolores cupiditate. Delectus consequatur officiis repellat nisi repellat id repellat aut.',
        image: require('~/assets/img/talents/Dimas_profile.png'),
      },
      {
        name: 'Carissa Perusset',
        description:
          'Nihil sapiente eligendi et dicta quam dignissimos est. Facere voluptate eligendi ipsum beatae nesciunt neque dolorem est sunt. Voluptate earum minus tempore quos voluptas nihil dolores cupiditate. Delectus consequatur officiis repellat nisi repellat id repellat aut.',
        image: require('~/assets/img/talents/Carissa_profile.png'),
      },
      {
        name: 'Jerome Kurnia',
        description:
          'Nihil sapiente eligendi et dicta quam dignissimos est. Facere voluptate eligendi ipsum beatae nesciunt neque dolorem est sunt. Voluptate earum minus tempore quos voluptas nihil dolores cupiditate. Delectus consequatur officiis repellat nisi repellat id repellat aut.',
        image: require('~/assets/img/talents/Jerome_profile.png'),
      },
      {
        name: 'Patricia Panigoro',
        description:
          'Nihil sapiente eligendi et dicta quam dignissimos est. Facere voluptate eligendi ipsum beatae nesciunt neque dolorem est sunt. Voluptate earum minus tempore quos voluptas nihil dolores cupiditate. Delectus consequatur officiis repellat nisi repellat id repellat aut.',
        image: require('~/assets/img/talents/Patricia_profile.png'),
      },
    ],
    navCarousel: 0,
    settingCarousel: {
      breakpoints: {
        // 640: {
        //   perView: 1,
        // },
        // 768: {
        //   perView: 3,
        //   focusAt: 1,
        //   gap: 50,
        // },
        // 1024: {
        //   perView: 2,
        //   focusAt: 0,
        //   gap: 150,
        // },
        1440: {
          perView: 3,
          focusAt: 0,
          gap: 1000,
        },
      },
    },
  }),
  methods: {
    handleControlCarousel(event) {
      if (event === 'next') {
        this.navCarousel = (this.navCarousel + 1) % this.profiles.length
        console.log(this.navCarousel)
      } else {
        this.navCarousel = (this.navCarousel - 1) % this.profiles.length
        if (this.navCarousel < 0) {
          this.navCarousel = this.profiles.length - 1
        }
      }
    },
  },
}
</script>
<style lang=""></style>
