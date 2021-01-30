# 细节点
1.vue必须遵守H5规范。
例如：tbody下必须tr:is属性：模板标签中的bug
2.子组件中的data必须是一个函数，且要返回一个对象，每个子组件拥有自己的独立的数据。
3.vue中的ref
 ref:引用名
 this.$refs.ref:可以获得vue中的dom节点/组件的引用
3.1. 
4.父子组件通信（子传父：发布订阅）
子组件变，this.$emit(事件名)//向外触发事件
父组件监听：@事件名
5.父子组件通信（父 :属性 = js表达式  传 子：props)
5.1 单向数据流，只能父向子传递 ，子只能用父，不能改父（解决方法：子组件自己定义数据/类似深拷贝）

# 组件的参数校验

问：
：content是什么，，，数字必须有" ";"?????
props: {
    content:[String, Number],
    number: Number
}

validator : function(value){
    return (value.length > 5);
}

非props 特性（无法使用）

# 给组件绑定原生事件
Q：@click：绑定的原生事件/自定义事件

原生事件：@click.native --->即js自定义事件

# 非父子组件之间的传参
Vue.prototype.bus =  new Vue();

this.bus.$emit()
this.bus.$on()

# Vue中使用插槽

slot:传递父向子传递的内容。
<slot name=""></slot>

# Vue中的作用域插槽
<template slot-scope="props">
    <li>{{props.item}}</li>
</template>


# 动态组件与v-once指令
<component :is="type"></component>
v-once:放到内存里，有效提高静态内容的展示效率，只渲染元素和组件一次
自带动态效果





