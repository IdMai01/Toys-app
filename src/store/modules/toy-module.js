import { toyService } from '../../services/toy-service.js'

export default {
  state: {
    toys: '',
    filterBy: null,
  },
  getters: {
    getLabelsCount({ toys }) {
      if (!toys) return
      let labelsCount = {}
      toys.forEach((toy) => {
        toy.labels.forEach((label) => {
          if (!labelsCount[label]) labelsCount[label] = 0
          labelsCount[label]++
        })
      })
      return labelsCount
    },
    getToysStock({ toys }) {
      if (!toys) return
      let toysStock = [0, 0]
      toys.forEach((toy) => (toy.inStock ? toysStock[0]++ : toysStock[1]++))
      return toysStock
    },
    getToys({ toys, filterBy }) {
      if (!filterBy) {
        return toys
      }

      let { searchedTerm, label, availability } = filterBy

      const regex = new RegExp(searchedTerm, 'i')
      let filteredToys = toys.filter(toy => regex.test(toy.name))

      if (label && label.length) {
        filteredToys = filteredToys.filter((toy) =>
          label.some((currLabel) => toy.labels.includes(currLabel))
        )
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
      console.log('state.toys,toy: ',state.toys,toy)
      var toyIdx = state.toys.findIndex(currToy => toy._id === currToy._id)
      if (toyIdx < 0) {
      console.log('toy in store: ',toy)
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
