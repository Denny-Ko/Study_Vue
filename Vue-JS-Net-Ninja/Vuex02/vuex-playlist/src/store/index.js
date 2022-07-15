import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Red Shells", price: 80 },
    ],
  },
  getters: {
    saleProducts: (state) => {
      let saleProducts = state.products.map((product) => {
        return {
          name: product.name,
          price: product.price / 2,
        };
      });
      return saleProducts;
    },
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => product.price -= payload)
    }
  },
  actions: {
    reducePrice: ({ commit }, payload) => {
      setTimeout(function () {
        commit('reducePrice', payload)
      }, 2000)
    }
  },
  modules: {
  }
})
