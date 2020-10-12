<template>
    <div class="ship">
<!-- 商品详情区域 -->
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner" v-for="(item, i) in gouwulist" :key="item.goods_id">
            <!-- mint-ui  Switch开关选择器-->
            <!-- 	<mt-switch v-model="$store.getters.gitselected[item.goods_id]"></mt-switch> -->
						<mt-switch 
            v-model="$store.getters.gitselected[43986]"
            @change = "gitchange(43986,$store.getters.gitselected[43986])"
            ></mt-switch>

            <img :src="item.image_src" alt="">
            <div class="title">
              <h1>{{item.open_type}}</h1>
              <p>
                <span class="price">{{item.goods_id}}</span>
                <!-- 初始化购物车打开时，选择框数量 -->
                <!-- {{$store.getters.gitdoogs[43984]}} 传参可直接获取对应id的数量值 -->
                <numbox :init="$store.getters.gitdoogs[43984]" :goodsid="item.goods_id"></numbox>
                <!-- prevent去除a的默认事件 i值是上面循环取到的索引，可作为删除值的索引-->
                <a href="#" @click.prevent="remove(43984,i)">删除</a>
              </p>
            </div>
					</div>
				</div>
			</div>
<!-- 计算区域 -->
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						  <div class="left">
                <p>总计</p>
                <p>已勾选商品<span class="red">{{$store.getters.gitjiesuan.count}}</span>件，总价<span class="red">${{$store.getters.gitjiesuan.amount}}</span></p>
              </div>
              <mt-button type=danger>去结算</mt-button>
					</div>
				</div>
			</div>
      <p>{{$store.getters.gitselected}}</p>
    </div>
</template>

<script>
//引入提示语组件
import {Toast} from "mint-ui"
//数字选择框组件2
import numbox from "../swipe/shuliang-two.vue"
export default {
  name:"first",
  components:{
    numbox
  },
  data(){
    return{ 
      gouwulist:[]//购物车中所有商品的数据
    }
  },
  created(){
    this.gouwu();
  },
  methods:{
      gouwu(){
        //取得store中所有的商品id，然后拼接出一个 用逗号隔开的字符串
        var idarr = [];
        this.$store.state.car.forEach(item=>idarr.push(item.id))
        //如果购物车为空，直接return出去,不请求接口
        if(idarr.length<=0){
          return;
        }
        //接下来直接请求接口即可
        //this.axios.get('/home/swiperdata'+idarr.join(",")) 请求接口，把商品id都带进去（本案例）
        this.axios.get('/home/swiperdata').then((res)=>{
          if(res.data.message.length!=""){
              this.gouwulist = res.data.message;
          }else{
            Toast("获取失败")
          }
    })
    },
    remove(id,index){
        //点击删除，把商品从store 中根据传递的id删除，同时，把当前组件中的gouwulist中，对应商品删除
        this.gouwulist.splice(index,1)
        this.$store.commit("removelist",id)
    },
    //修改商品选中转态
    gitchange(id,value){
      this.$store.commit("upselected",{id,selected:value})
    }
  }
}
</script>
 
<style lang="less">
 .ship{
   background-color: #eee;
   .mui-card-content-inner{
     display:flex;
     align-items: center;
   }
   .mui-card{
     img{
       width: 60px;
       height: 60px;
     }
     h1{
       font-size: 13px;
       margin-left: 20px;
     }
     .price{
       color: red;
     }
     p{
       padding: 10px 0 0 20px;
     }
   }
   .jiesuan{
     display: flex;
     justify-content: space-between;//横向对齐
     align-items: center;//纵向居中
     .red{
       color: red;
       font-size: 16px;
       font-weight: bold;
     }
   }
 }
</style>
