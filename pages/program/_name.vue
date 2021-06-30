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
            <vs-button class="font-bold">Watch on Youtube</vs-button>
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
        title: 'TS Talks',
        to: 'ts-talks',
        logo: require(`~/assets/img/programs/logo-ts-talks.svg`),
        backdropImg: require(`~/assets/img/programs/TS-Talks_backdrop.png`),
        description:
          'Host by Luna and Marianne, TS Talks shares inspiring stories and guest interviews with different public figures across a variety of industry.',
      },
      // {
      //   title: 'Cipika Cipiki',
      //   to: 'cipika-cipiki',
      //   logo: require(`~/assets/img/programs/logo-cipika-cipiki.svg`),
      //   backdropImg:require(`~/assets/img/programs/ts-talks_backdrop.png`),
      //   description:
      //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      // },
      {
        title: 'Dates with JuNa',
        to: 'dates-with-juna',
        logo: require(`~/assets/img/programs/logo-ju-na.svg`),
        backdropImg: require(`~/assets/img/programs/Dates-with-JuNa_backdrop.png`),
        description:
          'Ever wonder what men and women want or think? Junot and Luna will go on dates to talk heart to heart about the different topics of life from love, relationship, trends to lifestyle.',
      },
      {
        title: 'HOKI',
        to: 'hoki',
        logo: require(`~/assets/img/programs/logo-hoki.svg`),
        backdropImg: require(`~/assets/img/programs/HOKI_backdrop.png`),
        description:
          'HOKI with Dimas Beck takes the audience into the world of unique hobbies around Indonesia that will blow your mind.',
      },
      // {
      //   title: 'Signature',
      //   to: 'signature',
      //   logo: require(`~/assets/img/programs/logo-signature.svg`),
      //   backdropImg:require(`~/assets/img/programs/ts-talks_backdrop.png`),
      //   description:
      //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      // },

      {
        title: 'Tanngal Merah',
        to: 'tanggal-merah',
        logo: require(`~/assets/img/programs/logo-tanggal-merah.svg`),
        backdropImg: require(`~/assets/img/programs/Tanggal-Merah_backdrop.png`),
        description:
          'Where should you go when you have a day off or need a quick getaway? Traveling can be for everyone and it doesn’t have to be expensive. Jerome and Carissa will take you to places you can afford and adventures you’d want to experience yourself.',
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
