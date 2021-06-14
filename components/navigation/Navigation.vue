<template>
  <vs-navbar
    v-model="active"
    class="nav bg-transparent"
    text-white
    :color="'primary'"
    center-collapsed
  >
    <template #left>
      <vs-navbar-item to="/">
        <div class="nav__brand">
          <img src="~/assets/img/logo-ts-media.svg" alt="" />
        </div>
      </vs-navbar-item>
    </template>
    <template #right>
      <vs-navbar-item
        v-for="(item, idx) in menu"
        :key="idx"
        :active="active == item"
        :to="item.to"
        class="desktop"
      >
        <div class="nav__menu">
          {{ item.title }}
        </div>
      </vs-navbar-item>
      <vs-button class="mobile" icon @click="activeSidebar = !activeSidebar">
        <i class="bx bx-menu"></i>
      </vs-button>
    </template>
  </vs-navbar>
</template>
<script>
export default {
  data: () => ({
    menu: [
      { title: 'Our Talents', to: '/talents' },
      { title: 'About Us', to: '/about' },
      { title: 'Shop', to: '/shop' },
      { title: 'Experience', to: '/experience' },
      { title: 'Contact Us', to: '/contact' },
    ],
  }),
}
</script>
<style lang=""></style>
