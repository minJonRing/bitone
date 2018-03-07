<template>
    <header class="flex flex-mid flex-center-3">
        <div class="logo flex-1">
            <div class="img-box">
                <img class="block w100" src="@/assets/logo.png" alt="">
            </div>
            </div>
            <div class="nav flex-0 h100">
            <ul class="oneUl flex flex-mid flex-center-2 h100">
                <li class="oneLi relative h100 transition600" v-for="(item,index) in nav" :key="index">
                <span class="navBar transition600"></span>
                <router-link class="oneNav flex flex-mid wh100" :to="item.link"><span>{{item.txt}}</span></router-link>
                <ul class="towUl overflow" v-if="item.child">
                    <li class="towLi transition600" v-for="(i,j) in item.child" :key="j">
                    <router-link class="towNav flex-center-1" :to="i.link"><span>{{i.txt}}</span></router-link>
                    </li>
                </ul>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
    export default {
        data(){
            return {
                nav:[
                    {link:"/get/list",txt:"TTQR业务",child:[{link:"/",txt:"dadasad"},{link:"/",txt:"dadasad"},{link:"/",txt:"dadasad"}]},
                    {link:"/",txt:"案例展示"},
                    {link:"/",txt:"新闻动态"},
                    {link:"/",txt:"TTQR关于"},
                    {link:"/",txt:"我的客户"},
                    {link:"/",txt:"加入我们"},
                    {link:"/",txt:"联系我们"}
                ]
            }
        }
    }
</script>

<style scoped>
/*
*@header
*/
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 50px;
  background-color: rgba(0,0,0,.7);
  z-index: 999;
}
header .img-box{
  width: 45px;
  height: 45px;
  overflow: hidden;
}
/*
*@nav 按钮样式
*/
header .nav a.oneNav{
  padding: 0 25px;
  color: #fff;
  text-shadow: 0 0 1px rgba(255,255,255,1);
}
header .nav ul.towUl {
  background-color: rgba(0,0,0,.7);
  opacity: 0;
  transition-duration: 600ms;
}
header .nav li.towLi {
  padding: 0 6px;
}
header .nav a.towNav{
  display: flex;
  padding: 15px 0;
  color: #999;
  border-bottom: 1px #999 solid;
}
header .nav li.towLi:last-child a.towNav{
  border: none;
}
/* header .nav li.oneLi ul.towUl{
  width: 0%;
} */
header span.navBar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: #fff;
  width: 0;
}
/*
*@鼠标滑动样式
*/
header .nav li.oneLi:hover span.navBar {
  width: 100%;
}
header .nav li.oneLi:hover ul.towUl{
  opacity: 1;
  /* width: 100%; */
}
header .nav li.oneLi:hover a.oneNav{
  color: #999;
}
header .nav li.towLi:hover a.towNav {
  color: #fff;
}
</style>

