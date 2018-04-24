[TOC]



# vue-easycm



### 一个简单好用的 VUE 环境菜单 (Context Menu)





![http://boho.image.alimmdn.com/github/easycmdemo.gif?t=1524493555136](http://boho.image.alimmdn.com/github/easycmdemo.gif?t=1524493555136)

* 配置简单 自定义程度高

* ​

* 最高三层菜单

* 可添加字体图标

* 边界检测

  ​

  ​


> 更多demo:  



## Install



```
npm install vue-easycm --save
```



## Use

###   1.Import  导入



```js
ES6

// 1.通过use挂载
import VueEasyCm from 'vue-easycm'
Vue.use(VueEasyCm)


//  2.通过require 导入
var VueEasyCm = require('VueEasyCm')



// 3.或者直接导入js文件
<script src="./dist/vue-easycm.js"></script>

```



###   2.Basic Usage  基础用法 



1. 在需要触发 环境菜单 的容器上加上（固定写法）

   例：

   ```vue
   <div @contextmenu="$easycm($event,$root)"></div>
   ```

   ​

2. 任意位置导入组件（选项数组必传，格式见配置项）

   例：

   ```vue
   <easy-cm :list=""></easy-cm>
   ```




### 3.Options  配置项

|    选项名    | 是否必须 |      默认值      |       介绍       |
| :----------: | :------: | :--------------: | :--------------: |
|    :list     |   true   |        无        |     选项数组     |
|     :tag     |  false   |        无        | 配置多个时的标记 |
|    @ecmcb    |  false   |        无        | 返回触发元素序号 |
|  :underline  |  false   |      false       |  是否开启下划线  |
|    :arrow    |  false   |      false       |   是否开启箭头   |
|   :border    |  false   |       true       | 是否开启边界检测 |
|  :itemWidth  |  false   |       140        |    列表项宽度    |
| :itemHeight  |  false   |        36        |    列表项高度    |
|  :itemSize   |  false   |        14        |  列表项字体大小  |
|   :offset    |  false   | {   x: 6, y: 2 } |   显示点偏移量   |
| :borderWidth |  false   |        6         |     边界距离     |

详细介绍：

1. 数组格式如下

   ```js
   [{
         text: 'Play Now',
         icon: 'iconfont icon-bofang',  //选填 字体图标 class
         children: [] //选填
   }]
   ```

   *嵌套的子项格式一致

   ​

2. tag --> 标记

   需要配置多个菜单时添加 tag , 类似取个 id

   此时 @contextmenu="\$easycm(\$event,\$root,[tag])" 需要加上 tag 的值

   如:

   ```vue
   <div @contextmenu="$easycm($event,$root,1)">
       <p @contextmenu="$easycm($event,$root,2)"></p>
   </div>
   <easy-cm :tag="1"></easy-cm>
   <easy-cm :tag="2"></easy-cm>
   ```

   这个时候 在 p 元素上会触发 tag 为 2 的菜单

   div 的其他部分会触发 tag 为 1 的菜单

   ​

3. ecmcb --> 回调函数

   解释：返回触发的序号数组，便于触发相应逻辑 

   如: 

   ​	[0] 代表第一层的第一项

   ​	[0,1] 代表第一层的第一项的第二个子项

   详见 demo code

   ​

4. 边界检测 见 demo gif

   ​

5. offset  -->  显示点偏移量

   解释: 菜单显示位置的左上角离鼠标的距离

   如: {x:10,y:10}

   ​

   *数值参数均无需带单位





## 自定义样式

编写 预置的空 easy-cm-ul 样式类来修改样式

```html
// 代码结构
<ul class="easy-cm-ul">
    <li>
      <div></div>
      <ul class="easy-cm-ul">
        <li>
          <div></div>
          <ul class="easy-cm-ul">
            <li>
              <div></div>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
```

例如：

![http://boho.image.alimmdn.com/github/p1.png?t=1524498301156](http://boho.image.alimmdn.com/github/p1.png)

![http://boho.image.alimmdn.com/github/p2.png](http://boho.image.alimmdn.com/github/p2.png)



## Demo Code



```vue
// gif 图源码
<template>
  <div id="app" @contextmenu="$easycm($event,$root)">
    <easy-cm :list="cmList" 
             @ecmcb="test" 
             :underline="true" 
             :arrow="true">
    </easy-cm>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
        // 配置数组
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
      // 回调函数
    test(indexList){
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
```
