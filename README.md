# test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

> 要点

``` bash
#router
    this.$router.push({path:'/operator/indexlist',query:{title:e.dataset.title}})

    query:是指给下一个页面传递的参数   ?title=xxx,xxx=xxx

    参数接受：this.$route.query.title 获得页面传来的参数
