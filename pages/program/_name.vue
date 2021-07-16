<template>
  <section class="main__section">
    <div class="main__program">
      <div class="main__program-wrapper">
        <div class="program">
          <div class="program__logo">
            <img :src="selectProgram.logo" alt="" />
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
          <div class="program__logo">
            <img :src="selectProgram.logo" alt="" />
          </div>
          <div class="program__backdrop-image">
            <img
              class="object-contain xl:object-cover"
              :src="selectProgram.backdropImg"
              alt=""
            />
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
    programs: [
      {
        title: 'Travel Secrets',
        to: 'travel-secrets',
        link: `https://youtube.com/playlist?list=PL9GuwZR5c2VLzY9OHyqe_J0f-x76u0vvh`,
        logo: require(`~/assets/img/programs/logo-travel-secrets.svg`),
        backdropImg: require(`~/assets/img/programs/Travel-Secrets_backdrop.png`),
        description:
          'A non-script webseries program hosted by Luna Maya and Marianne Rumantir. These two independent women are going to share their experience and inspirations to travelers from all over the world. Better yet, Travel Secrets will show you anti-mainstream travel locations or the hidden gems from many destinations.',
      },
      {
        title: 'TS Talks',
        to: 'ts-talks',
        link: `https://youtube.com/playlist?list=PL9GuwZR5c2VJkLoAy0CxGGLtSAOm1W27W`,
        logo: require(`~/assets/img/programs/logo-ts-talks.svg`),
        backdropImg: require(`~/assets/img/programs/TS-Talks_backdrop.png`),
        description:
          'Host by Luna and Marianne, TS Talks shares inspiring stories and guest interviews with different public figures across a variety of industry.',
      },
      {
        title: 'Cipika Cipiki',
        to: 'cipika-cipiki',
        link: `https://youtube.com/playlist?list=PL9GuwZR5c2VJJWkHC2FpPFAoraLUzIyA-`,
        logo: require(`~/assets/img/programs/logo-cipika-cipiki.svg`),
        backdropImg: require(`~/assets/img/programs/Cipika-Cipiki_backdrop.png`),
        description:
          'Cipika-Cipiki is a program where Luna and Marianne will be comparing the same cuisine from two different restaurants. How exciting Luna and Marianne on tasting the food? Watch it now only on TS Media YouTube Channel!',
      },
      {
        title: 'Dates with JuNa',
        to: 'dates-with-juna',
        link: `https://www.youtube.com/channel/UCxmrFvg9g2jdErW587nm7-g/videos`,
        logo: require(`~/assets/img/programs/logo-ju-na.svg`),
        backdropImg: require(`~/assets/img/programs/Dates-with-JuNa_backdrop.png`),
        description:
          'Dates with Ju-Na is a romantic dating talk show with Herjunot Ali and Luna Maya. They will be talking about romantic issues with some guests who also will share their experience of romantic dating.',
      },
      {
        title: 'HOKI',
        to: 'hoki',
        link: `https://youtube.com/playlist?list=PL9GuwZR5c2VKbpzTis-5z_9KX29MFygFh`,
        logo: require(`~/assets/img/programs/logo-hoki.svg`),
        backdropImg: require(`~/assets/img/programs/HOKI_backdrop.png`),
        description:
          'In HOKI, Dimas Beck will explore the hobbies of famous people in Indonesia. He will visit a different guest and talk about how much money they are spending on their hobbies. There is also an inspirative story behind their success.',
      },
      {
        title: 'Signature',
        to: 'signature',
        link: `https://youtube.com/playlist?list=PL9GuwZR5c2VL8tkHYrqKB7aff1GVB7mWI`,
        logo: require(`~/assets/img/programs/logo-signature.svg`),
        backdropImg: require(`~/assets/img/programs/Signature_backdrop.png`),
        description:
          'Hello, sports enthusiast! In this program, Sigi Wimala as our host for SIGnature will share her journey on exploring new sports. Sigi will also collaborate with another sports enthusiast and show us how to start a new journey on the sport. SIGnature is not only for experts but also for beginners, so don’t worry!',
      },

      {
        title: 'Tanngal Merah',
        to: 'tanggal-merah',
        link: `https://youtube.com/playlist?list=PL9GuwZR5c2VL66ye3_zJEuw7xgbiA9kWs`,
        logo: require(`~/assets/img/programs/logo-tanggal-merah.svg`),
        backdropImg: require(`~/assets/img/programs/Tanggal-Merah_backdrop.png`),
        description:
          'Budget traveling, why not? Tanggal Merah hosted by Jerome Kurnia and Carissa Perusset is a program where you can find many hidden gems in Indonesia at a low cost. It’s going to be fun and memorable in every place that they visited. So, if you like budget traveling, you have to watch Tanggal Merah as soon as possible because you will be tempted to visit the places too!',
      },
      {
        title: 'Momma Patz',
        to: 'momma-patz',
        link: `https://youtube.com/playlist?list=PL9GuwZR5c2VIpUj_4mC4dAistgbnSyAF1`,
        logo: require(`~/assets/img/programs/logo-momma-patz.svg`),
        backdropImg: require(`~/assets/img/programs/Momma-Patz_backdrop.png`),
        description:
          'It’s Momma Patz Time! A cooking show program hosted by the beautiful model, Patricia Panigoro. Familiarly called Pat, the model and a housewife, will be sharing to you various interesting recipes, including menus for dessert she often makes and creates. So, make sure you don’t miss out her new recipes!',
      },
    ],
  }),
  computed: {
    selectProgram() {
      const select = this.programs.filter((item) => {
        return item.to === this.$route.params.name
      })
      return select[0]
    },
  },
}
</script>
<style></style>
