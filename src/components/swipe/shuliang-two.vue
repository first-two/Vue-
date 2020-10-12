<template>
       <div class="mui-numbox" data-numbox-min='1'>
          <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
          <!-- @change 监听文本框，只要发生变化就调用方法 readonly使得文本框只读-->
          <input id="test" class="mui-input-numbox" type="number" :value="init" @change="num" ref="numbox" readonly />
          <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
      </div>
</template>

<script>
//导入mui的js文件
import mui from "../../lib/mui/js/mui.min.js";
export default {
  props:[
    "init",
    "goodsid"
  ],
  name:"shuliang",
  data(){
    return{
    
    }
  },
  mounted() {
    //组件渲染完成后执行该钩子函数
    //初始化数字选择框组件
    mui('.mui-numbox').numbox()
  },
  methods:{
    //文本框发生改变就之心该方法 先在DOM中使用ref标签进行了注册，然后便可以通过’this.$refs’再跟注册时的名称来引用DOM元素了
    num(){
      console.log(this.$refs.numbox.value)
      //调用vuex中定义的方法，修改购买商品数量
      //this.$store.commit('addcar2',{id:this.goodsid,count:this.$refs.numbox.value})
      // 暂时写死代替吧
      this.$store.commit('addcar2',{id:"43986",count:this.$refs.numbox.value})
    }
  }
}
</script>

<style lang="less">
.mui-numbox{
  height: 25px;
}
</style>
