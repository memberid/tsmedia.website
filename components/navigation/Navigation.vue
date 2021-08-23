<template>
  <div class="nav" :class="{ nav__active: activeMenu }">
    <vs-navbar
      v-model="active"
      class="bg-transparent"
      text-white
      :color="'primary'"
      center-collapsed
    >
      <template #left>
        <vs-navbar-item to="/" class="nav__brand" @click="activeMenu = false">
          <img src="~/assets/img/logo-ts-media.svg" alt="" />
        </vs-navbar-item>
      </template>
      <template #right>
        <vs-navbar-item
          v-for="(item, idx) in menu"
          :key="idx"
          :active="active == item"
          :to="item.to"
          class="tablet"
        >
          <div class="nav__menu">
            {{ item.title }}
          </div>
        </vs-navbar-item>
        <vs-button
          class="nav__menu-humburger mobile"
          icon
          @click="activeMenu = !activeMenu"
        >
          <svg
            class="menuicon"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 50 50"
          >
            <title>Toggle Menu</title>
            <g>
              <line class="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5" />
              <line class="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5" />
              <line class="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5" />
              <line class="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5" />
            </g>
          </svg>
        </vs-button>
      </template>
    </vs-navbar>
    <div class="nav__mobile">
      <ul class="nav__mobile-menu mobile" tabindex="-1">
        <li
          v-for="(item, idx) in menu"
          :key="idx"
          class="nav__item"
          @click="activeMenu = !activeMenu"
        >
          <NuxtLink :to="item.to" class="nav__link">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
      <div class="splash" />
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    menu: [
      { title: 'Our Talents', to: '/talents' },
      { title: 'About Us', to: '/about' },
      { title: 'Shop', to: '/shop' },
      // { title: 'Experience', to: '/experience' },
      { title: 'Contact Us', to: '/contact' },
    ],
    activeMenu: false,
  }),
}
</script>
<style lang=""></style>
