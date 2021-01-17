<template>
  <div v-if="isSidebarOpen" class="sidebar">
    <div class="sidebar__wrap">
      <nav class="sidebar__nav sidebar-nav">
        <a href="https://vk.com/hightwink" class="sidebar-nav__item button" target="_blank"> VK </a>
        <a href="https://discord.com/invite/WvWyh9N" class="sidebar-nav__item button" target="_blank"> DICKSCORD </a>
      </nav>
    </div>
    <div class="sidebar__close-bg" @click="toggleSidebar" />
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Sidebar',
  computed: {
    ...mapState({
      isSidebarOpen: state => state.isSidebarOpen
    })
  },
  methods: {
    ...mapActions({
      toggleSidebar: 'toggleSidebar'
    })
  }
}
</script>

<style scoped>

</style>
