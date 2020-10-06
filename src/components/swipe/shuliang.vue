<template>
        <!-- 购买数量的加减 mui-->
       <div class="mui-numbox">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input class="mui-input-numbox" type="number" value="1" />
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
</template>

<script>
//导入mui的js文件
import mui from "../../lib/mui/js/mui.min.js";
export default {

  name:"shuliang",
  data(){
    return{
    
    }
  },
  mounted() {
    //组件渲染完成后执行该钩子函数
    //初始化数字选择框组件
    mui('.mui-numbox').numbox()
  }
}
</script>

<style lang="less">

</style>
