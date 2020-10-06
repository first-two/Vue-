<template>
    <div class="sd">

<!-- 方法一：使用 router-link来进行跳转-->
        <!-- <router-link tag="div" :to="'/shouye/jieshao/'+item.goods_id" class="shangdian" v-for="item in listshuzu" :key="item.goods_id">
            <div class="titimg"> 
                <img :src="item.goods_big_logo" alt="">
                <h5>{{item.goods_name}}</h5>
            </div>
            <div class="mane">
                <span class="new">￥{{item.goods_price}}</span>
                <span class="jiu">￥5000</span>
            </div>
            <div class="xiao">
              <span class="xiao">热卖中</span>
              <span class="shen">已售：{{item.goods_number}}</span>
            </div>
        </router-link> -->

<!-- 方法二，使用 vue-router中编程式导航-->

<div class="shangdian" v-for="item in listshuzu" :key="item.goods_id" @click="gogo(item.goods_id)">
            <div class="titimg"> 
                <img :src="item.goods_big_logo" alt="">
                <h5>{{item.goods_name}}</h5>
            </div>
            <div class="mane">
                <span class="new">￥{{item.goods_price}}</span>
                <span class="jiu">￥5000</span>
            </div>
            <div class="xiao">
              <span class="xiao">热卖中</span>
              <span class="shen">已售：{{item.goods_number}}</span>
            </div>
        </div>

     <mt-button type="danger" size="large" @click="jiazai">加载更多</mt-button>
    </div>
</template>

<script>
//引入提示语组件
import {Toast} from "mint-ui"
export default {
  name:"slhangpin",
  data(){
    return{
      pagenum:1,//页码
      pagesize:6,//页容量
      listshuzu:[]
    }
  },
  created(){
    this.getlunbo();
  },
  methods:{
    getlunbo(){
      this.axios.get('/goods/search?cid='+5+'&pagenum='+this.pagenum+'&pagesize='+this.pagesize).then((res)=>{
        if(res.data.message.length!=""){
            //this.listshuzu = res.data.message.goods;
            this.listshuzu = this.listshuzu.concat(res.data.message.goods);
        }else{
           Toast("获取失败")
        }
    })
    },
    jiazai(){
      this.pagenum++;
      this.getlunbo();
    },
    gogo(id){
      console.log(this)
      //使用js的形式进行路由导航
      //注意，一定要区分this.$route和this.$router这两个参数
      //this.$route 是路由 参数对象，所有路由中的参数，params,query都属于他
      //this.$router 是一个路由 导航对象，用它方便使用js代码，实现路由的前进和后退，跳转新的URL地址
      
      // 1.字符串
        this.$router.push('/shouye/jieshao/'+id)
      // 对象
        //this.$router.push({ path: '/shouye/jieshao/'+id })
      // 命名的路由
       // this.$router.push({ name: 'jieshao', params: { id: id }})
    }
  }
}
</script>

<style lang="less">
.sd{
  display: flex;
  flex-wrap: wrap;
}
  .shangdian{
    margin: 5px 1% ;
    width: 48%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px rgb(230, 168, 168);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{width: 100%;}
    h5{font-size: 12px;margin-left: 5px;}
    span{font-size: 12px;}
    .mane{
      background: #eee;
      justify-content: space-between;
      display: flex;
      padding: 0 10px 0 5px;
      .new{
        flex: 1;
        font-weight: bold;
        color: red;
      }
      .jiu{
        flex: 1;
        text-decoration: line-through;
      }
    }
    .xiao{
      background: #eee;
      // justify-content: space-between;
      // display: flex;
      padding: 0 10px 0 5px;
    }
  }
</style>
