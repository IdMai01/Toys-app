import { storageService } from './async-storage.service.js'
import { utilService } from './util-service.js'
import axios from "axios";


export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
}

const KEY = 'toysDB'

_createToys()

function _getUrl(id = "") {
  const BASE_URL =
    process.env.NODE_ENV !== "development"
      ? "/api/toy"
      : "//localhost:3030/api/toy";
  return `${BASE_URL}/${id}`;
}

function query(filterBy = null) {
  return axios.get(_getUrl("toys"), { params: filterBy }).then((res) => res.data);
}

function getById(id) {
  return axios.get(_getUrl(id)).then((res) => res.data);
}


function remove(id) {
  return axios.delete(_getUrl(id)).then((res) => res.data);
}

function save(toy) {
  if (toy._id) {
    axios.put(_getUrl(toy._id), toy)
  } else {
    return axios.post(_getUrl(), toy).then((res) => res = res.data.ops[0]);
    }
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
    inStock: true,
    reviews:["best product ever!!","best design ive ever seen!"],
  }
}
