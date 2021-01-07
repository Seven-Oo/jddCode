# 注意事项:
## 1.components内的组件规则

/components/组件名(大驼峰)/index.vue

index.vue中name需填写与文件夹名称一致

如需快速创建,请使用 npm run new

## 2.iconfont请使用前缀为ln2-开头的图标
styles/iconfont.less已对ln2-开头图标做好初始化样式

## 3.store的使用
store使用子module的方式分割,所有子module

只需在/store/modules下面创建文件即可

子store以文件名的方式做命名空间区分
```
store.dispath("exampleStore/addAction",123);
store.commit("exampleStore/setCount",123);
```

## 4.store如何保持刷新不丢失
在store的export中localStorage的数组里填写需要持久化的state属性即可

例如:
```
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  localStorage: ['count'],
};
```

# FAQ:
### 1.遇到eslint换行符CRLF报错
windows下使用git bash客户端打开项目根目录,执行
```
npm run lf
```
### 2.如何快速创建vue/component/store
执行
```
npm run new
```
会快速创建相应模板


**********************************************
**********************************************
首页：

【已修复】导航中产品中心的菜单数据未展示，效果未处理；

【已修复】case区域的img选中后整个列表会有抖动；

【已添加】news区域的星星闪烁动画未添加；

【已添加】滑动后背景图的滚动效果未添加；

【已修复】footer在首页中的背景色需要另设；

【已修复】footer在首页和其他页上方有区分是否显示slogan；


产品中心：解决方案中的子菜单未添加跳转方法；


数科动态：

【已解决】列表中跳转到详情页，路由添加遇到问题；——不要添加子路由，直接是平级添加路由即可。

	文章页
	
	自身页面中的关联文章和上一篇下一篇，跳转遇到问题；



关于我们：

【已添加】大事记：未添加上下滚动的效果；

页面tab未添加滚动过后，固定在顶部导航下方；

页面tab点击，滑到页面相关区域；反之，滑动到相关区域时，tab添加active类；


	客户案例
		案例详情
			与上方问题一直，tab关联内容区域，滑动配合的问题；
			
			
产业AI中心
	论文top可以上下滑动的区域（关于我们大事记滑动，一样），还存在一些小问题，暂时可以达到上下滑动切换，但是如果多次点击会有问题；
