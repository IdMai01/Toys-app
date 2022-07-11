import { toyService } from '../../services/toy-service.js'

export default {
  state: {
    toys: '',
    currEdited: false,
    filterBy:{
      availability:false,
      label:'',
      searchedTerm:'',
    }
  },
  getters: {
    getToys({ filterBy, toys}) {
      if(!toys){

      }
      console.log('toys: ',toys)
      var filteredToys = toys
      if(filterBy.searchedTerm){
        const regex = new RegExp(filterBy.searchedTerm, 'i')
        filteredToys = toys.filter((toy) => regex.test(toy.name))
      }    
      if(filterBy.label){
        const regex2 = new RegExp(filterBy.label, 'i')
        filteredToys = toys.filter((toy) => {
          regex.test(toy.labels[1],toy.labels[2])})

      }

      if (filterBy.availability) {
        filteredToys = filteredToys.filter(
          (toy) => toy.inStock == true
        )
      }

      if(!filteredToys){
        return toys
      }
      else return filteredToys

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
