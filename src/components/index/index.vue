<template>
  <div class="hello">
    <Video></Video>
    <init></init>
    <case></case>
  </div>
</template>

<script>
import { mapGetters , mapActions } from 'vuex'
import Video from "./video"
import Init from "./init"
import Case from "./case"

export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  mounted(){

  },
  computed:{
    ...mapGetters(['getI'])
  },
  methods:{
    ...mapActions(['setI']),
    getMessage(){
      this.$axios.post('/app/getMessage',{}).then((res)=>{
        console.log(res)
        this.setI()
      })
    }
  },
  components:{
    Video:Video,
    Init:Init,
    Case:Case
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  min-height: 100%;
}
</style>
