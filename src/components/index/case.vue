<template>
  <div class="case">
      <ul class="flex">
          <li class="flex-1 overflow transition600 " v-for="(item,index) in list" :key="index" :style="{'height':h+'px'}">
              <router-link class="nav" :to="item.link" :style="{'background-image':item.img}">
                  <span>{{item.txt}}</span>
              </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                list:[
                    {link:"/",img:"url(http://www.bitone.com/template/1/default/_files/cn/img/home/busineess-pic1.jpg)",txt:"道具卡科技大厦加的"},
                    {link:"/",img:"url(http://www.bitone.com/template/1/default/_files/cn/img/home/busineess-pic2.jpg)",txt:"道具卡科技大厦加的"},
                    {link:"/",img:"url(http://www.bitone.com/template/1/default/_files/cn/img/home/busineess-pic3.jpg)",txt:"道具卡科技大厦加的"},
                    {link:"/",img:"url(http://www.bitone.com/template/1/default/_files/cn/img/home/busineess-pic4.jpg)",txt:"道具卡科技大厦加的"}
                ],
                h:0
            }
        },
        mounted(){
            this.h = window.innerWidth/4/.75;
            window.onresize = ()=>{
                this.h = window.innerWidth/4/.75;
                console.log(1)
            }
        }
    }
</script>

<style scoped>
li {
    max-height: 465px !important;
}
li:hover {
    flex-grow: 2.5;
    flex-shrink: 2.5;
}
.nav {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 9;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-image: url('http://www.bitone.com/template/1/default/_files/cn/img/home/busineess-pic1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
img {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    z-index: -1;
}
</style>

