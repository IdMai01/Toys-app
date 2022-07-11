import { toyService } from '../../services/toy-service.js'

export default {
  state: {
    toys:null,
  },
  getters: {
    getToys({toys}){
      return toys
    }
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
  },
  },
  actions: {
    loadToys({ commit }) {
      toyService.query()
          .then((toys) => {
              commit({ type: 'setToys', toys })
          })
  },
  },
}
