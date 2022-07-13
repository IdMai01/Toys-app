import { toyService } from '../../services/toy-service.js'

export default {
  state: {
    toys: '',
    filterBy: null,
  },
  getters: {
    getToys({ toys, filterBy }) {
      if (!filterBy) {
        return toys
      }

      let { searchedTerm, label, availability } = filterBy

      const regex = new RegExp(searchedTerm, 'i')
      let filteredToys = toys.filter(toy => regex.test(toy.name))

      if (label) {
        filteredToys = filteredToys.filter((toy) => toy.labels.includes(label))
      }

      if (availability) {
        filteredToys = filteredToys.filter(toy => toy.inStock == true)
      }
      return filteredToys

    },
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
      var toyIdx = state.toys.findIndex(currToy => toy._id === currToy._id)
      if (toyIdx < 0) {
        state.toys.push(toy)
      }
      else state.toys.splice(toyIdx, 1, toy)
    },
    setFilterBy(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    removeToy({ commit }, payload) {
      commit(payload)
      return toyService.remove(payload.toy._id)
    },
    saveToy({ commit }, { toy }) {
      if (typeof toy.labels === 'string') {
        toy.labels = toy.labels.split(',')
      }
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
    setFilterBy({ commit }, { filterBy }) {
      commit({ type: "setFilterBy", filterBy })
    },
  },
}
