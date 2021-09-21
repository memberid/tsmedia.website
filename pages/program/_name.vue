<template>
  <section class="main__section">
    <div class="main__program">
      <vuescroll :ops="ops">
        <!-- Your content... -->
        <div class="program-wrapper">
          <div class="program__content">
            <div class="program__logo">
              <img :src="getAssetsURL(selectProgram.to, 'logo.svg')" alt="" />
            </div>
            <!-- <div class="program__subtitle">
              <span>Cast :</span>
            </div> -->
            <div class="program__description">
              <p>
                {{ selectProgram.description }}
              </p>
            </div>
            <div class="program__button">
              <vs-button class="font-bold" blank :href="selectProgram.link">
                Watch on Youtube
              </vs-button>
            </div>
            <!-- <div class="program__hint">
              <font-awesome-icon icon="['fab', 'arrow-right']" />
            </div> -->
          </div>
          <div class="program__backdrop">
            <img
              class="object-contain"
              :src="getAssetsURL(selectProgram.to, 'talents_backdrop.png')"
              alt=""
            />
          </div>
          <template v-if="selectProgram.assets.length">
            <div
              v-for="(item, idx) in selectProgram.assets"
              :key="idx"
              class="program__assets mx-12 lg:mx-20"
              :class="item.placement"
            >
              <div class="program__assets-image">
                <img
                  class="object-contain"
                  :src="getAssetsURL(selectProgram.to, item.filename)"
                  alt=""
                />
              </div>
            </div>
          </template>
        </div>
      </vuescroll>
    </div>
    <div class="background opacity-40">
      <div class="h-full w-full">
        <img
          class="object-cover"
          :src="require('~/assets/img/bg-gradient-white.png')"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  // async asyncData({ $axios, $config: { baseURL } }) {
  //   const banners = await $axios
  //     .$get(`${baseURL}/programs/travel-secrets/logo.svg`)
  //     .then((res) => res.data)

  //   return { banners }
  // },
  data: () => ({
    programs: [
      {
        title: 'Travel Secrets',
        to: 'travel-secrets',
        link: `https://youtube.com/playlist?list=PL9GuwZR5c2VLzY9OHyqe_J0f-x76u0vvh`,
        description:
          'A non-scripted web-series program hosted by Luna Maya and Marianne Rumantir. These two adventurous females shares their experiences and travel discoveries from all around the world.',
        assets: [
          {
            filename: 'program_image-1.png?tr=h-419,w-993',
            placement: 'center',
          },
          {
            filename: 'program_gif-1.gif?tr=h-280',
            placement: 'top',
          },
          {
            filename: 'program_image-2.png?tr=h-419,w-993',
            placement: 'center',
          },
          {
            filename: 'program_gif-2.gif',
            placement: 'bottom',
          },
          {
            filename: 'program_background.png?tr=h-419,w-993',
            placement: 'center',
          },
        ],
      },
      {
        title: 'TS Talks',
        to: 'ts-talks',
        link: `https://youtube.com/playlist?list=PL9GuwZR5c2VJkLoAy0CxGGLtSAOm1W27W`,
        description:
          'TS Talks is an Indonesian talk show hosted by Luna and Marianne featuring guest interviews and a variety of fun segments with different public figures.',
        assets: [
          {
            filename: 'program_image-1.png?tr=h-419,w-993',
            placement: 'center',
          },
          {
            filename: 'program_gif-1.gif?tr=h-280',
            placement: 'top',
          },
          {
            filename: 'program_image-2.png?tr=h-419,w-993',
            placement: 'center',
          },
          {
            filename: 'program_gif-3.gif',
            placement: 'bottom',
          },
          {
            filename: 'program_image-3.png?tr=h-419,w-993',
            placement: 'center',
          },
          {
            filename: 'program_gif-2.gif',
            placement: 'top',
          },
          {
            filename: 'program_background.png?tr=h-419,w-993',
            placement: 'center',
          },
        ],
      },
      {
        title: 'Cipika Cipiki',
        to: 'cipika-cipiki',
        link: `https://youtube.com/playlist?list=PL9GuwZR5c2VJJWkHC2FpPFAoraLUzIyA-`,
        description:
          'Cicip Piring Kanan - Cicip Piring Kiri is a fun culinary program where our hosts discover different cuisines from different areas of Indonesia and the world featuring special guests on every episode. ',
        assets: [
          {
            filename: 'program_image-1.png?tr=h-419,w-993',
            placement: 'center',
          },
          {
            filename: 'program_gif-1.gif?tr=h-280',
            placement: 'top',
          },
          {
            filename: 'program_image-2.png?tr=h-419,w-993',
            placement: 'center',
          },
          {
            filename: 'program_gif-2.gif',
            placement: 'bottom',
          },
          {
            filename: 'program_background.png?tr=h-419,w-993',
            placement: 'center',
          },
        ],
      },
      {
        title: 'Dates with JuNa',
        to: 'dates-with-juna',
        link: `https://www.youtube.com/channel/UCxmrFvg9g2jdErW587nm7-g/videos`,
        description:
          'Dates with a romantic dating talk-show that talks about relationships, current trends and culture with different hosts in every season.',
        assets: [],
      },
      {
        title: 'HOKI',
        to: 'hoki',
        link: `https://youtube.com/playlist?list=PL9GuwZR5c2VKbpzTis-5z_9KX29MFygFh`,
        description:
          'Hobi Orang Kece Indonesia with Dimas Beck explores the eccentricities of the unique hobbies of Indonesians.',
        assets: [
          {
            filename: 'program_image-2.png?tr=h-419,w-993',
            placement: 'center',
          },
          {
            filename: 'program_gif-2.gif',
            placement: 'top',
          },
          {
            filename: 'program_image-1.png?tr=h-419,w-993',
            placement: 'center',
          },
          {
            filename: 'program_gif-1.gif?tr=h-280',
            placement: 'bottom',
          },
          {
            filename: 'program_background.png?tr=h-419,w-993',
            placement: 'center',
          },
        ],
      },
      {
        title: 'Signature',
        to: 'signature',
        link: `https://youtube.com/playlist?list=PL9GuwZR5c2VL8tkHYrqKB7aff1GVB7mWI`,
        description:
          'Sigi Wimala takes the audience into the different world of sports and exciting adventures.',
        assets: [
          {
            filename: 'program_image-1.png?tr=h-419,w-993',
            placement: 'center',
          },
          {
            filename: 'program_gif-1.gif?tr=h-280',
            placement: 'top',
          },
          {
            filename: 'program_image-2.png?tr=h-419,w-993',
            placement: 'center',
          },
          {
            filename: 'program_gif-2.gif',
            placement: 'bottom',
          },
          {
            filename: 'program_background.png?tr=h-419,w-993',
            placement: 'center',
          },
        ],
      },
      {
        title: 'Tanngal Merah',
        to: 'tanggal-merah',
        link: `https://youtube.com/playlist?list=PL9GuwZR5c2VL66ye3_zJEuw7xgbiA9kWs`,
        description:
          'Dedicated for travelers who are looking for short-trips and adventurous travel ideas, Tanggal Merah takes you to hidden gems of Indonesia (and the world) that are smart and easy on the pocket type of travels.',
        assets: [
          {
            filename: 'program_image-2.png?tr=h-419,w-993',
            placement: 'center',
          },

          {
            filename: 'program_gif-1.gif?tr=h-280',
            placement: 'top',
          },
          {
            filename: 'program_image-1.png?tr=h-419,w-993',
            placement: 'center',
          },
          {
            filename: 'program_gif-2.gif',
            placement: 'bottom',
          },
          {
            filename: 'program_background.png?tr=h-419,w-993',
            placement: 'center',
          },
        ],
      },
      {
        title: 'Momma Patz',
        to: 'momma-patz',
        link: `https://youtube.com/playlist?list=PL9GuwZR5c2VIpUj_4mC4dAistgbnSyAF1`,
        description:
          'In this baking show, our sexy next door momma, Patricia Panigoro, will share her secret recipes inspired from her travels around the world.',
        assets: [
          {
            filename: 'program_image-1.png?tr=h-419,w-993',
            placement: 'center',
          },
          {
            filename: 'program_gif-1.gif?tr=h-280',
            placement: 'top',
          },
          {
            filename: 'program_image-2.png?tr=h-419,w-993',
            placement: 'center',
          },
          {
            filename: 'program_gif-2.gif',
            placement: 'bottom',
          },
          {
            filename: 'program_background.png?tr=h-419,w-993',
            placement: 'center',
          },
        ],
      },
    ],
    ops: {
      scrollPanel: {
        scrollingY: false,
        speed: 1000,
        easing: 'easeInOutQuad',
      },
      scrollButton: {
        enable: true,
        opacity: 1,
        step: 180,
        mousedownStep: 30,
      },
      bar: {
        opacity: 0,
        size: '2px',
      },
      vuescroll: {
        mode: 'native',
        detectResize: false,
        wheelScrollDuration: 0,
        wheelDirectionReverse: true,
        checkShifKey: true,
        locking: false,
      },
    },
  }),
  computed: {
    selectProgram() {
      const select = this.programs.filter((item) => {
        return item.to === this.$route.params.name
      })
      return select[0]
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
<style></style>
