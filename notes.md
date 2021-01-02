<!--
 * @Author: your name
 * @Date: 2021-01-01 21:13:17
 * @LastEditTime: 2021-01-02 16:51:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ant-design-vue-pro\notes.md
-->
# 开发经验分享
### Promise.all
    let p1 = new Promise((resolve, reject) => {
      resolve('p1成功')
    })

    let p2 = new Promise((resolve, reject) => {
      resolve('p2成功')
    })

    let p3 = Promise.reject('p3失败')

    Promise.all([p1, p2]).then((result) => {
      //['p1成功', 'p2成功']
      console.log(result)
      //Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的
    }).catch((error) => {
      console.log(error)
    })

    Promise.all([p1,p3,p2]).then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error)  // p3失败
    })
* Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态
### Object.assign()
> 用于对象的合并，将源对象（source）的所有可枚举属性（即对象的自身属性），复制（浅拷贝）到目标对象（target）

    const target = { a: 1 };
    const source1 = { b: 2 };
    const source2 = { c: 3 };
    //第一个参数是目标对象，后面的参数都是源对象
    //有同名属性，后面的属性会覆盖前面的属性
    Object.assign(target, source1, source2);
    target // {a:1, b:2, c:3}
    
    Object.assign([1, 2, 3], [4, 5])
    // [4, 5, 3]
### keep-alive
> keep-alive是一个抽象组件：它自身不会渲染一个DOM元素，也不会出现在父组件链中；使用keep-alive包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。

    // include定义缓存白名单,keep-alive会缓存命中的组件
    // exclude定义缓存黑名单,被命中的组件将不会被缓存
    // max定义缓存组件上限，超出上限使用LRU的策略置换缓存数据
    <keep-alive :include="whiteList" :exclude="blackList" :max="amount">
      <router-view></router-view>
    </keep-alive>