<template>
  <div class="footer">
    <div class="footer__copyrights">© 2021 PT GLOBAL LOYAL SEJAHTERA</div>
    <div class="footer__socmed">
      <div
        class="footer__socmed-item"
        @click="
          goTo('https://www.youtube.com/channel/UCxmrFvg9g2jdErW587nm7-g')
        "
      >
        <font-awesome-icon :icon="['fab', 'youtube']" />
      </div>
      <div
        class="footer__socmed-item"
        @click="goTo('https://www.instagram.com/travelsecrets.id/')"
      >
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </div>
      <div
        class="footer__socmed-item"
        @click="
          goTo(
            'https://www.tiktok.com/@travelsecretsid?_d=secCgYIASAHKAESMgowe3LgJJXKMQslf76guuEkzNDT5JOobwOLvWeFIqAaHoMLRg44dpyBwyWY3xaN3Bi6GgA%3D&language=en&sec_uid=MS4wLjABAAAAck76NJWva2-NGUmFMNAbokTcE6jzq9_Zx-TjCFSLeA-brcWebU9kS7bgtmxGeg-B&sec_user_id=MS4wLjABAAAAq1fQHefScjgLSha_fS1G2mhva_yy3Dz6JCK3Yo1GNTrJjzVhnmflcbqZIXxwQzwo&share_author_id=6888125851007910913&share_link_id=FA107D5A-F5DE-470B-BC6F-A356D1D02DBD&tt_from=copy&u_code=defm7db49433aa&user_id=6874494641053516802&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_t&_r=1'
          )
        "
      >
        <font-awesome-icon :icon="['fab', 'tiktok']" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goTo(name) {
      window.open(name, '_blank')
    },
  },
}
</script>
<style lang=""></style>
