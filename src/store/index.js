import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arr: [],
    count: 0
  },
  mutations: {
    add(state, obj) {
      // console.log(state.arr)
      const index = state.arr.findIndex(item => item.id === obj.id)
      if (index !== -1) {
        state.arr[index].num += obj.num
      } else {
        state.arr.push(obj)
      }
      window.localStorage.setItem('arr', JSON.stringify(state.arr))
      // 次数
      if (state.arr.length) {
        let num = 0
        state.arr.forEach(item => {
          num += item.num
        })
        state.count = num
      }
      // console.log(state.count)
    },
    editAdd(state, obj) {
      window.localStorage.clear()
      // console.log(state.arr)
      // console.log(obj)
      const index = state.arr.findIndex(item => item.id === obj.id)
      if (index !== -1) {
        // console.log(0)
        state.arr[index].num = obj.num
      }
      window.localStorage.setItem('arr', JSON.stringify(state.arr))
      // // 次数
      // if (state.arr.length) {
      //   let num = 0
      //   state.arr.forEach(item => {
      //     num += item.num
      //   })
      //   state.count = num
      // }
    },
    // 单独删除
    danDel(state, obj) {
      window.localStorage.clear()
      state.arr = []
      state.arr = obj
      window.localStorage.setItem('arr', JSON.stringify(state.arr))
    },
    // 全部删除
    // 获取
    get(state) {
      const arr = window.localStorage.getItem('arr')
      state.arr = JSON.parse(arr) || []
      // console.log(state.arr)
      // 次数
      if (state.arr.length) {
        let num = 0
        state.arr.forEach(item => {
          num += item.num
        })
        state.count = num
      }
      // console.log(state.count + 'assassda')
    }
  },
  actions: {},
  modules: {}
})
