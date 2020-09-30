<template>
    <div id="shouye">
      <!-- 轮播区 -->
      <mt-swipe :auto="0">
        <mt-swipe-item v-for="item in lunboarr" :key="item.url">
          <img :src="item.image_src">  
        </mt-swipe-item>
      </mt-swipe>
      <!-- 宫格 --> 
      <ul class="gezi">
        <router-link tag="li" to="/shouye/xinw">
          <span>
            <img src="https://p4.img.cctvpic.com/photoworkspace/2020/07/24/2020072409470511321.jpg" alt="">
          </span>
          <span>新闻资讯</span>
			  </router-link>
        <router-link tag="li" to="/shouye/tup">
          <span>
            <img src="https://p4.img.cctvpic.com/photoworkspace/2020/07/24/2020072409470511321.jpg" alt="">
          </span>
          <span>图片分享</span>
			  </router-link>
        <router-link class="last" tag="li" to="/shouye/shangp">
          <span>
            <img src="https://p4.img.cctvpic.com/photoworkspace/2020/07/24/2020072409470511321.jpg" alt="">
          </span>
          <span>商品购买</span>
			  </router-link>

        
        <router-link tag="li" to="/shouye/liuy">
          <span>
            <img src="https://p4.img.cctvpic.com/photoworkspace/2020/07/24/2020072409470511321.jpg" alt="">
          </span>
          <span>留言反馈</span>
			  </router-link>
        <router-link tag="li" to="/shouye/ship">
          <span>
            <img src="https://p4.img.cctvpic.com/photoworkspace/2020/07/24/2020072409470511321.jpg" alt="">
          </span>
          <span>视频专区</span>
			  </router-link>
        <router-link class="last" tag="li" to="/shouye/lianx">
          <span>
            <img src="https://p4.img.cctvpic.com/photoworkspace/2020/07/24/2020072409470511321.jpg" alt="">
          </span>
          <span>联系我们</span>
			  </router-link>
      </ul>

    </div>
</template>

<script>
//引入提示语组件
import {Toast} from "mint-ui"
export default {
  name:"first",
  data(){
    return{
      lunboarr:[]
    }
  },
  created(){
    this.getlunbo();
  },
  methods:{
    getlunbo(){
      this.axios.get('/home/swiperdata').then((res)=>{
        if(res.data.message.length!=""){
            this.lunboarr = res.data.message;
        }else{
           Toast("获取失败")
        }
    })
    }
  }
}
</script>

<style lang="less">
*{margin: 0;padding: 0;}
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
    width: 100%;
    height: 100%;
  }
}
.gezi li{
  list-style: none;
  display: inline-block;
  width: 30%;
  
  text-align: center;
  height: 80px;
  margin-right: 5%;
  margin-top: 20px;
  overflow: hidden;
}
.gezi .last{
  margin-right: 0;
}
.gezi li span{
  width: 100%;
  display: inline-block;
  flex-direction: column;
  
  img{
    width: 80%;
  }
}

 
</style>
