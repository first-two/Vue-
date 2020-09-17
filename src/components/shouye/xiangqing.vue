<template>
    <div class="xiangqing">
        <h3>{{newsinfo.goods_name}}</h3>
        <p>
          <span>时间：{{newsinfo.add_time | dateFormat}}</span>
          <span>点击了：{{newsinfo.goods_price}}次</span>
        </p>
        <div v-html="newsinfo.goods_introduce"></div>
        <pin :id="this.id" ></pin>
    </div>
</template>

<script>
//引入提示语组件
import {Toast} from "mint-ui"
//子组件的引入
import pin from '../pinlun/pinl.vue'

export default {
  name:"lianxi",
   components: {
     //注册子组件节点
      pin
  },
  data(){
    return{
      id:this.$route.params.id,//获取链接中传递的参数
      newsinfo:{}
    }
  },
  created(){
    this.getlunbo();
  },
  methods:{
    getlunbo(){
      this.axios.get('goods/detail?goods_id='+this.id).then((res)=>{
        if(res.data.message.length!=""){
            this.newsinfo = res.data.message;
            //console.log(res)
        }else{
           Toast("获取失败")
        }
    })
    }
  }
}
</script>

<style lang="less">
 .xiangqing{
   h3{
     font-size: 14px;
   }
   p{
     display: flex;
     justify-content: space-between;
   }
 }
</style>
