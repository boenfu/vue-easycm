<template>
  <div id="app" @contextmenu="$easycm($event,$root)">
    <img src="./assets/logo.png" @contextmenu="$easycm($event,$root,2)">
    <easy-cm :list="cmList" @ecmcb="test" :underline="true" :arrow="true"></easy-cm>
    <easy-cm :list="cmList" @ecmcb="test" :tag="2"></easy-cm>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      cmList: [{
        text: 'Play Now',
        icon: 'iconfont icon-bofang'
      },{
        text: 'Play Next',
        icon: 'iconfont icon-xiayishou'
      },{
        text: 'More',
        children: [{
          text: 'Download',
          children: []
        },{
          text: 'Report'
        },{
          text: 'Other',
          icon: 'iconfont icon-bofang',
          children:[{
            text: 'Other-1'
          },{
            text: 'Other-2'
          },{
            text: 'Other-3'
          }]
        }]
      }]
    }
  },
  methods:{
    test(indexList){
      console.log(indexList);
      switch (indexList[0]){
        case 0:
          console.log('立即播放');
          break
        case 1:
          console.log('下一首播放')
          break
      }
    }
  }
}
</script>

<style>
  @import "iconfont/iconfont.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 ;
  padding: 0;
  width: 100%;
  height: 100%;
}

h1, h2 {
  font-weight: normal;
}
</style>
