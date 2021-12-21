<template>
  <section class="main__section">
    <div class="main__about">
      <div class="main__about-wrapper">
        <div class="about">
          <div class="about__headline">
            <span class="text-sm font-semibold">About Us</span>
          </div>
          <div class="about__description">
            <p
              class="about__haedline-text pb-4 font-bold text-2xl lg:text-5xl tracking-wider"
            >
              {{ abouts.title }}
            </p>
            <div class="about__description-child block">
              <p class="text-sm lg:text-xl">
                {{ abouts.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="about-points">
          <div
            v-gsap.fromTo="[
              { opacity: 0, y: 50, ease: 'Power2.easeInOut' },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'Power2.easeInOut',
              },
            ]"
            class="about__headline"
          >
            <span class="font-semibold">What We Do</span>
          </div>
          <div class="about-points__list">
            <div
              v-for="(item, idx) in abouts.whatWeDo"
              :key="idx"
              v-gsap.fromTo="[
                { opacity: 0, y: 50, ease: 'Power2.easeInOut' },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  delay: idx * 0.5,
                  ease: 'Power2.easeInOut',
                },
              ]"
              class="about-points__item"
            >
              <span class="font-bold text-2xl lg:text-4xl tracking-wider">
                {{ item.title }}
              </span>
              <p class="text-sm lg:text-base">
                {{ item.description }}
              </p>
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
  async asyncData({ $axios, $config }) {
    const abouts = await $axios
      .$get(`${$config.baseURL}/about-us`)
      .then((res) => res)

    console.log(abouts)

    return { abouts }
  },
  data() {
    return {}
  },
  mounted() {
    this.$gsap.fromTo(
      '.about__haedline-text, .about .about__headline',
      { opacity: 0, x: 50, ease: 'Power2.easeInOut' },
      {
        opacity: 1,
        x: 0,
        duration: 0.75,
        ease: 'Power2.easeInOut',
      }
    )

    this.$gsap.fromTo(
      '.about__description-child',
      { opacity: 0, y: 50, ease: 'Power2.easeInOut' },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 0.25,
        ease: 'Power2.easeInOut',
      }
    )
  },
}
</script>
<style></style>
