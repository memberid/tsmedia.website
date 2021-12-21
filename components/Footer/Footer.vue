<template>
  <div class="footer">
    <div class="footer__copyrights">© 2021 TS MEDIA</div>
    <div class="footer__socmed">
      <div
        v-for="(item, idx) in socmeds"
        :key="idx"
        class="footer__socmed-item"
        @click="goTo(item.link)"
      >
        <font-awesome-icon :icon="['fab', item.icon]" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    socmeds: [],
    // socmeds: [
    //   {
    //     icon: 'youtube',
    //     link: 'https://www.youtube.com/channel/UCxmrFvg9g2jdErW587nm7-g',
    //   },
    //   {
    //     icon: 'instagram',
    //     link: 'https://www.instagram.com/travelsecrets.id/',
    //   },
    //   {
    //     icon: 'tiktok',
    //     link: 'https://www.tiktok.com/@travelsecretsid?lang=en',
    //   },
    //   {
    //     icon: 'facebook',
    //     link: 'https://web.facebook.com/travelsecretsid',
    //   },
    //   {
    //     icon: 'twitter',
    //     link: 'https://twitter.com/travelsecretsid',
    //   },
    // ],
  }),
  async created() {
    await this.getData()
  },
  methods: {
    goTo(name) {
      window.open(name, '_blank')
    },
    async getData() {
      this.loading = true
      try {
        const responseBody = await this.$axios
          .$get(`${this.$config.baseURL}/social-media`)
          .then((res) => res)

        this.socmeds = responseBody.socialMedia
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
<style lang=""></style>
