<template>
  <div class="sidebar">
    <div class="sidebar__socmed">
      <vs-button
        v-for="(item, idx) in socmeds"
        :key="idx"
        icon
        class="sidebar__socmed-item"
        @click="goTo(item.link)"
      >
        <font-awesome-icon :icon="['fab', item.icon]" />
      </vs-button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    socmeds: [
      {
        icon: 'youtube',
        link: 'https://www.youtube.com/channel/UCxmrFvg9g2jdErW587nm7-g',
      },
      {
        icon: 'instagram',
        link: 'https://www.instagram.com/travelsecrets.id/',
      },
      {
        icon: 'tiktok',
        link: 'https://www.tiktok.com/@travelsecretsid?lang=en',
      },
      {
        icon: 'facebook',
        link: 'https://web.facebook.com/travelsecretsid',
      },
      {
        icon: 'twitter',
        link: 'https://twitter.com/travelsecretsid',
      },
    ],
  }),
  methods: {
    goTo(name) {
      window.open(name, '_blank')
    },
  },
}
</script>
<style></style>
