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
              Created out of our passion for travel and sharing inspiring
              stories
            </p>
            <div class="about__description-child block">
              <p class="text-sm lg:text-xl">
                TS Media was established to inspire, educate and entertain
                audiences of different segments of travel, culinary, lifestyle,
                hobbies, sports and finance.
              </p>
              <p class="text-sm lg:text-xl">
                By collaborating with different brands and talents, together we
                can create quality contents and targeted digital campaigns by
                focusing on awareness, activation and retention.
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
              v-for="(item, idx) in whatWeDo"
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
                {{ item.text }}
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
  data() {
    return {
      whatWeDo: [
        {
          title: 'Content Production',
          text: `Producing high quality contents for any platform from YouTube,
                Television, OTT, Mobile Streaming and Social Media Contents.`,
        },
        {
          title: 'Creative Services',
          text: `Through our creative storytelling and using our various digital
                channels, we help brands create a market and product education
                to help build audience trust.`,
        },
        {
          title: 'Digital Strategist',
          text: `Helping brands create brand awareness, brand recall and
                activation through strategic marketing campaings using our
                existing platforms and social media networks.`,
        },
        {
          title: 'Talent Management',
          text: ` Connecting brands to a variety of talents for marketing
                campaigns executions through production and social media,
                ensuring all marketing communications are reaching the right
                audiences and segments.`,
        },
      ],
    }
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
