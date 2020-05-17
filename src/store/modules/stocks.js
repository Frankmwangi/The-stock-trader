import Vue from 'vue'
import Vuex from 'vuex'
import stocks from '../../components/Data/stocks'

Vue.use(Vuex)

const state = {
    stocks: []
};
const mutations = {
    'SET_STOCKS'(state,stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {

    }
};
const actions = {
    buyStock: ({commit}, order) => {
        commit('BUY_STOCK',order);
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS',stocks);
    },
    randomizedStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};
const getters = {
    stocks: state => {
        return state.stocks;
    }
};


export default {
  state,
  mutations,
  actions,
  getters
}