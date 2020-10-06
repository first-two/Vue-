<template>
    <div class="lunbo">
        <!-- 轮播组件-->
        <!-- 谁只用该组件，谁传递对应的数组lunboarr 父子传值-->
       <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunboarr" :key="item.url">
          <img :src="item.image_src" :class="{full:isfull}">  
        </mt-swipe-item>
      </mt-swipe>

    </div>
</template>

<script>

export default {
  props:[
      "lunboarr",//接收的轮播图片数组
      "isfull"//接收的数据的图片样式的控制，有的需要宽100%,有的需要高100%。用布尔值控制赋值类名
  ],
  name:"lunbo",
  data(){
    return{
    
    }
  }
}
</script>

<style lang="less">
.mint-swipe{
  height: 200px;
// cass的使用
  .mint-swipe-item {
    &:nth-child(1){
      background-color:#00cc00;
    }
    &:nth-child(2){
      background-color:#cccccc;
    }
    &:nth-child(3){
      background-color:#c9c8cc;
    }
  }
  img{
    height: 100%;
  }
}
.full{
    width: 100%;
}
</style>
