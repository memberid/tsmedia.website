<template>
  <section class="main__section">
    <div class="main__program">
      <!-- <vuescroll :ops="ops">
  <div class="program-wrapper">
    <div class="program__content">
      <div class="program__logo">
        <img :src="getAssetsURL(selectProgram.to, 'logo.svg')" alt="" />
      </div>
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
</vuescroll> -->
      <div v-dragscroll.x class="program-wrapper">
        <div
          v-gsap.fromTo="[
            { opacity: 0, x: 50, ease: 'Power2.easeInOut' },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: 'Power2.easeInOut',
            },
          ]"
          class="program__content"
        >
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
        <div
          v-gsap.fromTo="[
            { opacity: 0, y: 20, ease: 'Power2.easeInOut' },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.5,
              ease: 'Power2.easeInOut',
            },
          ]"
          class="program__backdrop"
        >
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
            :class="`program__assets-${idx} ${item.placement}`"
          >
            <div
              class="program__assets-image"
              :class="item.styleClass ? item.styleClass : ''"
            >
              <a
                :target="item.link ? '_blank' : ''"
                :href="item.link ? item.link : '#'"
              >
                <img
                  class="object-contain"
                  :src="getAssetsURL(selectProgram.to, item.filename)"
                  alt=""
                />
              </a>
            </div>
          </div>
        </template>
      </div>
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
import { dragscroll } from 'vue-dragscroll'
export default {
  // async asyncData({ $axios, $config: { baseURL } }) {
  //   const banners = await $axios
  //     .$get(`${baseURL}/programs/travel-secrets/logo.svg`)
  //     .then((res) => res.data)

  //   return { banners }
  // },
  directives: {
    dragscroll,
  },
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
            styleClass: 'shadow',
            placement: 'center',
          },
          {
            filename: 'mockup-socmed-1.png',
            styleClass: 'mockup',
            link:
              'https://www.instagram.com/p/CTKKWHKFJHB/?utm_medium=copy_link',
            placement: 'center',
          },
          {
            filename: 'program_gif-1.gif?tr=h-280',
            styleClass: 'shadow',
            placement: 'top',
          },
          {
            filename: 'program_image-2.png?tr=h-419,w-993',
            styleClass: 'shadow',
            placement: 'center',
          },
          {
            filename: 'program_gif-2.gif',
            styleClass: 'shadow',
            placement: 'bottom',
          },
          {
            filename: 'program_background.png?tr=h-419,w-993',
            styleClass: 'shadow',
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
            styleClass: 'shadow',
            placement: 'center',
          },
          {
            filename: 'mockup-socmed-1.png',
            styleClass: 'mockup',
            link:
              'https://www.instagram.com/p/CTo-2u_hdkg/?utm_medium=copy_link',
            placement: 'center',
          },
          {
            filename: 'program_gif-1.gif?tr=h-280',
            styleClass: 'shadow',
            placement: 'top',
          },
          {
            filename: 'program_image-2.png?tr=h-419,w-993',
            styleClass: 'shadow',
            placement: 'center',
          },
          {
            filename: 'program_gif-3.gif',
            styleClass: 'shadow',
            placement: 'bottom',
          },
          {
            filename: 'program_image-3.png?tr=h-419,w-993',
            styleClass: 'shadow',
            placement: 'center',
          },
          {
            filename: 'program_gif-2.gif',
            styleClass: 'shadow',
            placement: 'top',
          },
          {
            filename: 'program_background.png?tr=h-419,w-993',
            styleClass: 'shadow',
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
            styleClass: 'shadow',
            placement: 'center',
          },
          {
            filename: 'mockup-socmed-1.png',
            styleClass: 'mockup',
            link:
              'https://www.instagram.com/p/CNxKJ2Kg_k2/?utm_medium=copy_link',
            placement: 'center',
          },
          {
            filename: 'program_gif-1.gif?tr=h-280',
            styleClass: 'shadow',
            placement: 'top',
          },
          {
            filename: 'program_image-2.png?tr=h-419,w-993',
            styleClass: 'shadow',
            placement: 'center',
          },
          {
            filename: 'program_gif-2.gif',
            styleClass: 'shadow',
            placement: 'bottom',
          },
          {
            filename: 'program_background.png?tr=h-419,w-993',
            styleClass: 'shadow',
            placement: 'center',
          },
        ],
      },
      {
        title: 'Dates with JuNa',
        to: 'dates-with-juna',
        link: `https://www.youtube.com/playlist?list=PL9GuwZR5c2VJpg4lnVaOy9f3XOEXXQbir`,
        description:
          'Dates with a romantic dating talk-show that talks about relationships, current trends and culture with different hosts in every season.',
        assets: [
          {
            filename: 'program_image-1.png?tr=h-419,w-993',
            styleClass: 'shadow',
            placement: 'center',
          },
          {
            filename: 'program_gif-1.gif',
            styleClass: 'shadow',
            placement: 'top',
          },
          {
            filename: 'program_image-2.png?tr=h-419,w-993',
            styleClass: 'shadow',
            placement: 'center',
          },
        ],
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
            styleClass: 'shadow',
            placement: 'center',
          },
          {
            filename: 'mockup-socmed-1.png',
            styleClass: 'mockup',
            link: 'https://instagram.com/ts.hoki?utm_medium=copy_link',
            placement: 'center',
          },
          {
            filename: 'program_gif-2.gif',
            styleClass: 'shadow',
            placement: 'top',
          },
          {
            filename: 'program_image-1.png?tr=h-419,w-993',
            styleClass: 'shadow',
            placement: 'center',
          },
          {
            filename: 'program_gif-1.gif?tr=h-280',
            styleClass: 'shadow',
            placement: 'bottom',
          },
          {
            filename: 'program_background.png?tr=h-419,w-993',
            styleClass: 'shadow',
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
            styleClass: 'shadow',
            placement: 'center',
          },
          {
            filename: 'mockup-socmed-1.png',
            styleClass: 'mockup',
            link: 'https://instagram.com/ts.signature?utm_medium=copy_link',
            placement: 'center',
          },
          {
            filename: 'program_gif-1.gif?tr=h-280',
            styleClass: 'shadow',
            placement: 'top',
          },
          {
            filename: 'program_image-2.png?tr=h-419,w-993',
            styleClass: 'shadow',
            placement: 'center',
          },
          {
            filename: 'program_gif-2.gif',
            styleClass: 'shadow',
            placement: 'bottom',
          },
          {
            filename: 'program_background.png?tr=h-419,w-993',
            styleClass: 'shadow',
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
            styleClass: 'shadow',
            placement: 'center',
          },
          {
            filename: 'mockup-socmed-1.png',
            styleClass: 'mockup',
            link: 'https://instagram.com/ts.tanggalmerah?utm_medium=copy_link',
            placement: 'center',
          },

          {
            filename: 'program_gif-1.gif?tr=h-280',
            styleClass: 'shadow',
            placement: 'top',
          },
          {
            filename: 'program_image-1.png?tr=h-419,w-993',
            styleClass: 'shadow',
            placement: 'center',
          },
          {
            filename: 'program_gif-2.gif',
            styleClass: 'shadow',
            placement: 'bottom',
          },
          {
            filename: 'program_background.png?tr=h-419,w-993',
            styleClass: 'shadow',
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
            styleClass: 'shadow',
            placement: 'center',
          },
          {
            filename: 'mockup-socmed-1.png',
            styleClass: 'mockup',
            link: 'https://instagram.com/ts.mommapatz?utm_medium=copy_link',
            placement: 'center',
          },
          {
            filename: 'program_gif-1.gif?tr=h-280',
            styleClass: 'shadow',
            placement: 'top',
          },
          {
            filename: 'program_image-2.png?tr=h-419,w-993',
            styleClass: 'shadow',
            placement: 'center',
          },
          {
            filename: 'program_gif-2.gif',
            styleClass: 'shadow',
            placement: 'bottom',
          },
          {
            filename: 'program_background.png?tr=h-419,w-993',
            styleClass: 'shadow',
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
  mounted() {
    // this.$gsap.to('.program__assets-0', {
    //   y: 100,
    //   ease: 'Power2.easeInOut',
    //   scrollTrigger: {
    //     scroller: '.program-wrapper',
    //     trigger: '.program__assets-0',
    //     invalidateOnRefresh: true,
    //     start: 'top center',
    //     end: 'center top',
    //     scrub: true,
    //     markers: true,
    //   },
    // })
  },
  methods: {
    getAssetsURL(program, filename) {
      const data =
        this.$config.assetURL + '/programs/' + program + '/' + filename
      return data
    },
  },
}
</script>
<style></style>
