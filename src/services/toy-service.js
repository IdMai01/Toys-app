import { storageService } from './async-storage.service.js'
import { utilService } from './util-service.js'

const KEY = 'toysDB'

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
}

var gToys = _createToys()

// Toy: support paging and filtering and sorting
function query() {
  return storageService.query(KEY)
}

function getById(id) {
  return storageService.get(KEY, id)
}

function remove(id) {
  return storageService.remove(KEY, id)
}

function save(toy) {
  const savedToy = toy._id
    ? storageService.put(KEY, toy)
    : storageService.post(KEY, toy)
  return savedToy
}

function getEmptyToy() {
  return {
    _id: '',
    name: '',
    price: '',
    labels: '',
    createdAt: '',
    inStock: true
  }
}

function _createToys() {
  console.log('dsf: ')
  var toys = JSON.parse(localStorage.getItem(KEY))
  if (!toys || !toys.length) {
    toys = [
      _createToy('Doll'),
      _createToy('pazzel'),
      _createToy('book'),
    ]
    localStorage.setItem(KEY, JSON.stringify(toys))
  }
  return toys
}

function _createToy(name) {
  return {
    _id: utilService.makeId(),
    name,
    price: utilService.getRandomInt(80,360),
    labels: ['Toy', "Battery", "Baby"],
    createdAt: 1631031801011,
    inStock: true
  }
}
