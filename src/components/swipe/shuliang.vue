<template>
        <!-- 购买数量的加减 mui-->
        <!-- 可以购买的最大数量应该是库存的最大值，从父组件中传递过来，为了避免父组件还没解析完接口就把空值传递给子组件导致最大值错误，
          可以使用witch来监听最大值max，直到有值了在赋值
         -->
       <div class="mui-numbox" data-numbox-min='1'>
          <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
          <!-- @change 监听文本框，只要发生变化就调用方法 -->
          <input id="test" class="mui-input-numbox" type="number" value="1" @change="num" ref="numbox" />
          <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
      </div>
</template>

<script>
//导入mui的js文件
import mui from "../../lib/mui/js/mui.min.js";
export default {
  props:[
    "max"
  ],
  watch:{
    //属性监听 当max发生变时执行
    max:function(newVal,oldVal){//第一个参数为新值，第二个参数为初始值
      mui(".mui-numbox").numbox().setOption("max",newVal)
    }
  },
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
        //console.log(this.$refs.numbox.value)
        this.$emit("gitcont",parseInt(this.$refs.numbox.value))
    }
  }
}
</script>

<style lang="less">

</style>
