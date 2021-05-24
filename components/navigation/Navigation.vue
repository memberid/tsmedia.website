<template>
  <vs-navbar
    v-model="active"
    class="nav bg-transparent"
    text-white
    :color="'primary'"
    center-collapsed
  >
    <template #left>
      <div class="nav__brand">
        <img src="~/assets/img/logo-ts-media.svg" alt="" />
      </div>
    </template>
    <template #right>
      <vs-navbar-item
        v-for="(item, idx) in menu"
        :key="idx"
        :active="active == item"
        class="desktop"
      >
        <div class="nav__menu">
          {{ item }}
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
    menu: ['Our Talents', 'About Us', 'Shop', 'Experience', 'Contact Us'],
  }),
}
</script>
<style lang=""></style>
