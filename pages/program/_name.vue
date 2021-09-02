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
              class="program__assets mx-20"
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
          'A non-script webseries program hosted by Luna Maya and Marianne Rumantir. These two independent women are going to share their experience and inspirations to travelers from all over the world. Better yet, Travel Secrets will show you anti-mainstream travel locations or the hidden gems from many destinations.',
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
          'Host by Luna and Marianne, TS Talks shares inspiring stories and guest interviews with different public figures across a variety of industry.',
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
          'Cipika-Cipiki is a program where Luna and Marianne will be comparing the same cuisine from two different restaurants. How exciting Luna and Marianne on tasting the food? Watch it now only on TS Media YouTube Channel!',
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
          'Dates with Ju-Na is a romantic dating talk show with Herjunot Ali and Luna Maya. They will be talking about romantic issues with some guests who also will share their experience of romantic dating.',
        assets: [],
      },
      {
        title: 'HOKI',
        to: 'hoki',
        link: `https://youtube.com/playlist?list=PL9GuwZR5c2VKbpzTis-5z_9KX29MFygFh`,
        description:
          'In HOKI, Dimas Beck will explore the hobbies of famous people in Indonesia. He will visit a different guest and talk about how much money they are spending on their hobbies. There is also an inspirative story behind their success.',
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
          'Hello, sports enthusiast! In this program, Sigi Wimala as our host for SIGnature will share her journey on exploring new sports. Sigi will also collaborate with another sports enthusiast and show us how to start a new journey on the sport. SIGnature is not only for experts but also for beginners, so don’t worry!',
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
          'Budget traveling, why not? Tanggal Merah hosted by Jerome Kurnia and Carissa Perusset is a program where you can find many hidden gems in Indonesia at a low cost. It’s going to be fun and memorable in every place that they visited. So, if you like budget traveling, you have to watch Tanggal Merah as soon as possible because you will be tempted to visit the places too!',
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
          'It’s Momma Patz Time! A cooking show program hosted by the beautiful model, Patricia Panigoro. Familiarly called Pat, the model and a housewife, will be sharing to you various interesting recipes, including menus for dessert she often makes and creates. So, make sure you don’t miss out her new recipes!',
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
