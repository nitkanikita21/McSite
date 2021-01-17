<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <div class="header__logo">
          <nuxt-link to="/">
            <img alt="High twink" :src="require('~/assets/img/logo.png')">
          </nuxt-link>
        </div>

        <nav class="header__nav header-nav">
          <div class="header-nav__pages header-nav-pages">
            <nuxt-link to="/donate" class="header-nav-pages__link">
              Магазин
            </nuxt-link>
            <nuxt-link to="/forum" class="header-nav-pages__link">
              Форум
            </nuxt-link>
            <nuxt-link to="/staff" class="header-nav-pages__link">
              Наша команда
            </nuxt-link>
          </div>
          <div class="header-nav__links header-nav-links">
            <a href="https://vk.com/hightwink/" class="" target="_blank"> <img :src="require('~/assets/img/vk.png')" alt="" class="header-nav-links__img header-nav-links-img header-nav-links-img__vk"> </a>
            <a href="https://discord.com/invite/WvWyh9N" class="" target="_blank"> <img :src="require('~/assets/img/ds.png')" alt="" class="header-nav-links__img header-nav-links-img header-nav-links-img__ds"> </a>
          </div>
        </nav>
        <div class="header__menu-open" @click="toggleSidebar">
          <img :src="require('~/assets/img/openMenu.svg')" alt="Open Menu">
        </div>
      </div>
    </div>
  </header>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'Header',
  methods: {
    ...mapActions({
      toggleSidebar: 'toggleSidebar'
    })
  }
}
</script>

<style scoped>

</style>
