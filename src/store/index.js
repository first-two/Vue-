import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//获取缓存中的数据,没有就给空数组
var car = JSON.parse(localStorage.getItem('car') || '[]')

export default new Vuex.Store({
  state: {//this.$store.state.***
    car:car//将购物车的商品数据，用数组存储起来，商品数组可设计为{id:商品id,count:数量,price:单价,selected:false}
  },
  mutations: {//this.$store.commit.('方法名称','按需传递唯一的参数')
    addcar(state,goodsinfo){
      //点击加入购物车，把商品信息保存到store中的car上
      //如果之前购物车已经有数据了，那么只更新数量就行，没有的话直接把商品push到car中即可,使用some方法，在购物车找到该商品后停止继续遍历
      
      //假设在购物车中没有找到对应商品
      var  flag= false;
      state.car.some(item=>{
        if(item.id == goodsinfo.id){
          item.count += parseInt(goodsinfo.count) 
          flag= true
          return true
        }
      })
      //如果没有找到对应商品，直接加入购物车
      if(!flag){
        state.car.push(goodsinfo)
      }
      //当更新car后，把car数组 存储到 本地localStorage中
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    //在修改购买数量时，应区分是在购物车进行了数量修改还是在商品详情页做了数量修改，以上↑方法是商品页修改购买数量时候的方法，下面是在购物车修改了购买数量调用的方法
    addcar2(state,goodsinfo2){
      state.car.some(item=>{
        if(item.id == goodsinfo2.id){
          item.count = parseInt(goodsinfo2.count) 
          return true
        }
      })
      //当更新car后，把car数组 存储到 本地localStorage中
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    removelist(state,id){
      //根据id，从store 中删除对应的数据
      state.car.some((item,i)=>{
        if(item.id == id){
            state.car.splice(i,1)
            return true
        }
      })
      //将删除完毕后的数据 更新 存储到 本地localStorage中
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    //根据id，修改对应商品的状态
    upselected(state,info){
      state.car.some((item,i)=>{
        if(item.id == info.id){
          item.selected=info.selected
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  getters:{//this.$store.getters.***
    // 相当于计算属性，也相当于filters,获取购物车内所有商品的数量
    gitall(state){
      var c=0;
      state.car.forEach(item=>{
        c+=item.count
      })
      return c;
    },
    //获取缓存数据中的商品id与数量，定义为一个新的数组，供后续调用，以id为键，数量为值
    gitdoogs(state){
      var o = {}
      state.car.forEach(item=>{
        o[item.id] = item.count
      })
      return o;
    },
    //获取购物车中每件商品的选中状态。以id为键，转态为值
    gitselected(state){
      var s = {}
      state.car.forEach(item=>{
        s[item.id] = item.selected
      })
      return s;
    },
    //总件数 总件数
    gitjiesuan(state){
      var w={
        count:0,//总数量
        amount:0//总价
      }
      state.car.forEach(item=>{
        if(item.selected){
          w.count +=item.count;
          w.amount +=item.price*item.count;
        }
      })
      return w;
    }
  },
  actions: {
  },
  modules: {
  }
})
