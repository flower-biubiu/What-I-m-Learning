# 注意点
1.v-for:最好用of
2.为了提高循环显示的性能，为每一个循环添加一个唯一的key值。
3.为了充分复用dom节点，一般后端返数据内容的时候。
4.vue中操作数组的方法：push/pop/shift/unshift/splice/sort/reverse
    不能直接通过修改下标的方式(页面不能跟着变)
    只能通过vue提供的数组遍历方法pop/push
5.数据改变页面动态改变：直接改数据的引用。