import { toyService } from '../../services/toy-service.js'

export default {
  state: {
    toys: null,
    currEdited: false,
  },
  getters: {
    getToys({ toys }) {
      return toys
    },
    getCurrEdited({ currEdited }) {
      return currEdited
    }
  },
  mutations: {
    removeToy(state, { toy }) {
      const idx = state.toys.findIndex(currToy => currToy._id === toy._id)
      state.toys.splice(idx, 1)
    },
    setToys(state, { toys }) {
      state.toys = toys
    },
    saveToy(state, { toy }) {
      state.toys.push(toy)
    },
    setCurrEdited(state, { toy = false }) {
      state.currEdited = toy
    }
  },
  actions: {
    removeToy({ commit }, payload) {
      commit(payload)
      return toyService.remove(payload.toy._id)
    },
    saveToy({ commit }, { toy }) {
      commit({ type: 'setCurrEdited' })
      return toyService.save(toy)
        .then((savedtoy) => {
          commit({ type: 'saveToy', toy: savedtoy })
          return savedtoy
        })
    },
    loadToys({ commit }) {
      toyService.query()
        .then((toys) => {
          commit({ type: 'setToys', toys })
        })
    },
  },
}
