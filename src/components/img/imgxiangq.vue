<template>
        <div class="xiang">
           <h4>{{newsinfo.goods_name}}</h4>
           <p>
            <span>时间：{{newsinfo.add_time | dateFormat}}</span>
            <span>点击了：{{newsinfo.goods_price}}次</span>
           </p>
           <div v-html="newsinfo.goods_introduce"></div>
           
           <hr>

           <!-- 缩略图区域，图片预览 使用vue-preview插件即可-->
           <div class="thumbs">
                  <vue-preview :slides="list" @close="handleClose"></vue-preview>
                  <div class="clear"></div>
           </div>
           <hr>
           
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
      newsinfo:{},
      list:[],//缩略图数组
    }
  },
  created(){
    this.getlunbo();
    this.lunbo()
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
    },
    lunbo(){
      this.axios.get('/home/swiperdata').then((resing)=>{
        if(resing.data.message.length!=""){
            //循环每条数据，补全图片的宽高(缩略图必须使用宽高这两个参数)
            resing.data.message.forEach(item => {
                item.w = 600;   //设置以大图浏览时的宽度
                item.h = 400;     //设置以大图浏览时的高度
                item.src = item.image_src;  //大图
                item.msrc = item.image_src;  //小图
            });
            //再把数据保存到定义的数组内
            this.list = resing.data.message;
        }else{
           Toast("获取失败")
        }
    })
    },
     handleClose () {
    console.log('close event')
    }
  }
}
</script>

<style lang="less">
*{
  margin: 0;padding: 0;
}
  .xiang{
   h3{
     font-size: 14px;
   }
   p{
     display: flex;
     justify-content: space-between;
   }
 }
 .thumbs{
   img{
     width: 100px;
   }
   figure{
    width: 100px;
    float: left;
    margin: 10px 10px;
   }
 }
     .clear{
        clear:both;
    }
</style>
