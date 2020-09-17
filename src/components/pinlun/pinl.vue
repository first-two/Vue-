<template>
    <div class="yonpin">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入（“不超过100字”）" maxlength="100"></textarea>
        <mt-button type="primary" size="large">提交</mt-button>
        <div class="plun">
            <div>
                <div class="name">一楼用户：一头智障&nbsp;&nbsp;时间：2020-10-17</div>
                <div class="yan">{{lyan.goods_name}}</div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
</template>

<script>
//引入提示语组件
import {Toast} from "mint-ui"
export default {
  name:"pinlun",
  props:[
      "id"
  ],
  data(){
    return{
      lyan:{},
      index:1//传递页吗
    }
  },
  created(){
    this.liuyan();
  },
  methods:{
    liuyan(){
      this.axios.get('goods/detail?goods_id='+this.id).then((res)=>{
        if(res.data.message.length!=""){
            this.lyan = res.data.message;
            //需要多次获取数据又不清空原数据，需拼用concat拼接数组
            //this.lyan = this.lyan.concat(res.data.message)
        }else{
           Toast("获取失败")
        }
    })
    },
    getmore(){
        console.log("加载更多"),
        index++
    }
  }
}
</script>

<style lang="less">
.yonpin{
    h3{
        font-size: 30px;
        color: #c9c9c9;
    }
    textarea{
        font-size: 20px;
        height: 80px;
    }
    .plun{
        font-size: 16px;
        margin: 20px 0 20px 0;
        .name{
            background-color: #ccc;
            line-height: 40px;
        }
        .yan{
            background-color: #fff;
            line-height: 40px;
            text-indent:2rem;
        }
    }
}
 
</style>
