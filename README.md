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
