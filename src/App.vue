<template>
  <div class="demo">
    <h1>App</h1>
    <Demo></Demo>
  </div>
</template>
<script>
import Demo from './components/Demo'
export default {
  data(){
    return {

    }
  },
  beforeCreate(){
    console.log('创建前状态')
  },
  created(){
    console.log('创建完毕状态');
  },
  beforeMount(){
    console.log('挂载前状态');
  },
  mounted(){
    console.log('挂载结束状态');
  },
  beforeUpdate(){
    console.log('更新前状态');
  },
  updated(){
    console.log('更新完成状态');
  },
  beforeDestroy(){
    console.log('销毁前状态');
  },
  destroyed(){
    console.log('销毁完成状态');
  },
  components:{
    Demo
  },
  methods:{

  },
  computed: {

  }
}
</script>
