<template>
    <div class="jieshao">
      <!-- 加入购物车动画小球 -->
          <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter" v-bind:css="false" >
            <div class="ball" v-show="ballFlag" ref="ball" ></div>
          </transition>
      
    

        <!-- 轮播区 -->
          <div class="mui-card">
            <div class="mui-card-content">
              <div class="mui-card-content-inner">
               <swiper :lunboarr= "lunboarr" :isfull="false"></swiper>
              </div>
            </div>
			    </div>
        <!-- 购买区 -->
         <div class="mui-card">
          <div class="mui-card-header">{{spining.goods_name}}</div>
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <p class="price">
                市场价：<del>${{spining.goods_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">${{spining.goods_number}}</span>
              </p>
              <p>购买数量<numbox></numbox></p>
              <p>
                <mt-button type="primary" size="small" >立即购买</mt-button>
                <mt-button type="danger" size="small" @click="addmai">加入购物车</mt-button>
              </p>
            </div>
          </div>
          <div class="mui-card-footer">页脚</div>
        </div>
        <!-- 参数区 -->
        <div class="mui-card">
         <div class="mui-card-header">商品参数</div>
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <p>商品货号：{{spining.add_time}}</p>
              <p>库存情况：{{spining.add_time}}</p>
              <p>上架时间：{{spining.add_time}}</p>
            </div>
          </div>
          <div class="mui-card-footer">
            <mt-button type="primary" size="large" plain  @click="gogo(id)">图文介绍</mt-button>
            <br>
            <mt-button type="danger" size="large" plain >商品评论</mt-button>
          </div>
        </div>
    </div>
</template>

<script>
//引入提示语组件
import {Toast} from "mint-ui"
//轮播组件
import swiper from "../swipe/lunbo.vue"
//数字选择框组件
import numbox from "../swipe/shuliang.vue"

export default {
  name:"jieshao",
  data(){
    return{
      lunboarr:[],
      id:this.$route.params.id,//获取链接中传递的参数
      spining:{},
      ballFlag:false//控制小球的显隐
    }
  },
  components:{
    swiper,
    numbox
  },
  created(){
    this.getlunbo();
    this.spin();
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
    },
    spin(){
      this.axios.get('goods/detail?goods_id='+this.id).then((res)=>{
        if(res.data.message.length!=""){
            this.spining = res.data.message;
            //console.log(res)
        }else{
           Toast("获取失败")
        }
    })
    },
     gogo(id){
      // 1.字符串
        this.$router.push('/shouye/xiangqing/'+id)
    },
    addmai(){
      //添加高购物车
      this.ballFlag = !this.ballFlag
    },
    beforeEnter(el){
      el.style.transform="translate(0,0)"
    },
    enter(el,done){
      el.offsetWidth
      //获取小球在页面位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      //获取购物车标志位置
      const badgePosition = document.getElementById("badge").getBoundingClientRect();
      const x =badgePosition.left-ballPosition.left;
      const y =badgePosition.top-ballPosition.top;
      el.style.transform='translate(${x}px,${y}px)';

      //el.style.transform="translate(150px,350px)";
      el.style.transition=" all 1s ease";
      done()
    },
    afterEnter(el){
      this.ballFlag = !this.ballFlag
    }

  }
}
</script>

<style lang="less">
  .jieshao{
    background: #eee;
    overflow: hidden;

    .now_price{
      font-size: 16px;
      font-weight: bold;
    }
    .mui-card-footer{
      display: block;
    }
    .jia{
      margin-left: 20px;
    }
    .ball{
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: blue;
      position: absolute;
      z-index: 99;
      top: 408px;
      left: 136px;
      //transform:translate(100px,358px)
    }
  }
</style>
