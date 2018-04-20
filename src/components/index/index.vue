<template>
  <div class="hello">
    <div class="video">
        <video src="http://www.bitone.com/template/1/default/_files/cn/video/banner-1.mp4" autoplay loop></video>
        <div class="video-txt">
          <div class="video-txt-box">
            <h2>2018SHOWREEL</h2>
            <p>啊鲁大师大家啊上的拉屎的了撒旦画了撒旦画实践活动拉屎了撒旦画拉屎拉屎拉屎的拉升的拉屎拉屎拉可适当拉屎的阿了撒旦画杀得好阿斯兰的萨达</p>
            <router-link :to="'/'">PLAY VIDEO 
              <span class="sp1"></span><span class="sp2"></span><span class="sp3"></span><span class="sp4"></span> 
            </router-link>
          </div>
        </div>
    </div>
    <div class="init">
        <div class="imgbox inline-block">
            <img class="block w100" src="@/assets/logo1.png" alt="">
        </div>
        <div class="init-txt">
            <p>国际化的专业汽车虚拟影像应用解决方案供应商。</p>
            <p>拥有一支经验丰富CG创作团队，采用丰富独特的创意，结合CG、实拍、虚拟现实等技术方式，</p>
            <p>为客户定制用于车展活动、发布会、广告等全媒体营销渠道的影像内容及互动方案。是</p>
        </div>
    </div>
    <div class="case">
        <ul class="flex">
            <li class="flex-1 overflow transition600 " v-for="(item,index) in caseList" :key="index" :style="{'height':caseH+'px'}">
                <router-link class="nav" :to="item.link" :style="{'background-image':item.img}">
                    <span>{{item.txt}}</span>
                </router-link>
            </li>
        </ul>
    </div>
    <div class="course">
        <ul>
            <li v-for="(item,index) in courseList" :key="index">
                <div>
                    <h2>{{item.title}}</h2>
                    <span>{{item.sub}}</span>
                    <p>{{item.txt}}</p>
                    <router-link :to="item.link">SHOW MORE</router-link>
                </div>
            </li>
        </ul>
    </div>
    <div class="works">
      <h2>作品展示</h2>
      <div>
        <router-link :to="item.link" v-for="(item,index) in works" :key="index">{{item.txt}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters , mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  data () {
    return {
      caseList:[
          {link:"/",img:"url(http://www.bitone.com/template/1/default/_files/cn/img/home/busineess-pic1.jpg)",txt:"CG及实拍影像"},
          {link:"/",img:"url(http://www.bitone.com/template/1/default/_files/cn/img/home/busineess-pic2.jpg)",txt:"虚拟影像互动展示"},
          {link:"/",img:"url(http://www.bitone.com/template/1/default/_files/cn/img/home/busineess-pic3.jpg)",txt:"数字演员"}
      ],
      caseH:0,
      courseList:[
        {link:"/",title:"aa",sub:"dadsa",txt:"件大事就打算的撒是"},
        {link:"/",title:"aa",sub:"dadsa",txt:"件大事就打算的撒是"},
        {link:"/",title:"aa",sub:"dadsa",txt:"件大事就打算的撒是"},
        {link:"/",title:"aa",sub:"dadsa",txt:"件大事就打算的撒是"},
      ],
      works:[
        {link:"/",txt:"全部"},
        {link:"/",txt:"三维产品动画"},
        {link:"/",txt:"影视广告TVC"},
        {link:"/",txt:"地产创意工厂"}
      ]
    }
  },
  mounted(){
    let WINDOWH = window.innerHeight;
    let VIDEOH = WINDOWH - 277;
    let VIDEOW = VIDEOH/.35
    document.querySelector("video").height = VIDEOH;
    document.querySelector("video").width = VIDEOW;
    this.caseH = window.innerWidth/4/.75;
    window.onresize = ()=>{
        this.caseH = window.innerWidth/4/.75;
    }
  },
  computed:{
    ...mapGetters(['getI'])
  },
  methods:{
    ...mapActions(['setI']),
    getMessage(){
      this.$axios.post('/app/getMessage',{}).then((res)=>{
        this.setI()
      })
    }
  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import  "./index.css"
</style>
