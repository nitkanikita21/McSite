export const state = {
  isSidebarOpen: false
}

export const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.isSidebarOpen = !state.isSidebarOpen
  }
}

export const actions = {
  toggleSidebar ({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}
