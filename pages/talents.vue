<template>
  <section class="main__section">
    <div class="main__talent">
      <div class="main__glide">
        <vue-glide
          :keyboard="false"
          :drag-threshold="false"
          :per-touch="1"
          :breakpoints="settingCarousel.breakpoints"
          type="slider"
          @glide:swipe-move="handleControlCarousel"
        >
          <vue-glide-slide v-for="(item, i) in profiles" :key="i">
            <vs-card type="5" class="card__overview m-4">
              <template #title>
                <!-- <span class="text-xl lg:text-2xl font-semibold">
                  {{ item.name }}
                </span> -->
              </template>
              <template #img>
                <img class="w-full h-full" :src="item.image" alt="" />
              </template>
              <template #text>
                <p
                  class="tracking-tighter xl:tracking-tight font-medium p-4 max-h-44 overflow-auto"
                >
                  {{ item.description }}
                </p>
              </template>
              <template #interactions>
                <span
                  class="tracking-wider text-white text-3xl 2xl:text-4xl font-semibold"
                >
                  {{ item.name }}
                </span>
              </template>
            </vs-card>
          </vue-glide-slide>
          <template slot="control">
            <div data-glide-el="controls" class="controls">
              <div data-glide-dir="<" @click="handleControlCarousel('prev')">
                <i class="bx bxs-chevron-left"></i>
              </div>
              <div data-glide-dir=">" @click="handleControlCarousel('next')">
                <i class="bx bxs-chevron-right"></i>
              </div>
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
          'Herjunot Ali is an actor, a model, and an entertainment host who began his career in 2004 as a finalist in MTV VJ Hunt. His fist acting career started in 2004 as he started in the movie Lovely Luna and many more in the following years. He had also been nominated several times in Indonesian film festivals.',
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
          'Dimas Beck started his career as an actor in 2005, starring in the movie Apa Artinya Cinta. He is also a model, an entertainment host, and a singer. He became a singer after joining the group Bukan Bintang Biasa (BBB). There are many movies, soap operas, and TV shows to his name. Until today, he is still active in the entertainment industry.',
        image: require('~/assets/img/talents/Dimas_profile.png'),
      },
      {
        name: 'Carissa Perusset',
        description:
          'Carissa, a model of 9 years, has published her first book of poetry, and acted in her first movie in 2018 and her second one in 2019. Currently, Carissa is in the plan to publish another book and to direct an indie film. She is also taking the role as a scriptwriter in several upcoming movies!',
        image: require('~/assets/img/talents/Carissa_profile.png'),
      },
      {
        name: 'Jerome Kurnia',
        description:
          'Jerome began his career as a radio announcer in one of Indonesian radio station. Later in 2019, he took an acting role in the movie Bumi Manusia that boosted up his name. Until today, Jerome is still active in the entertainment industry as an entertainment host, an actor, and a model. His name also made it to the nominations in Indonesian film festival in 2019 and 2020.',
        image: require('~/assets/img/talents/Jerome_profile.png'),
      },
      {
        name: 'Patricia Panigoro',
        description: `Patricia has been actively modeling since she's 4 years old. Over the years, she developed an interest in the fashion industry and participated in modeling events in Singapore, Malaysia, and Hongkong. She won Elite Model Look Singapore and got a contract for full-time modeling job in Singapore. Patricia is currently a full time housewife and a mother of 3 beautiful kids. In addition, she is also passionate about cooking and baking.`,
        image: require('~/assets/img/talents/Patricia_profile.png'),
      },
    ],
    navCarousel: 0,
    settingCarousel: {
      breakpoints: {
        640: {
          perView: 1,
        },
        768: {
          perView: 2,
          gap: 20,
        },
        1024: {
          perView: 2,
          focusAt: 0,
          gap: 50,
        },
        1400: {
          perView: 3,
          focusAt: 0,
          gap: 800,
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
