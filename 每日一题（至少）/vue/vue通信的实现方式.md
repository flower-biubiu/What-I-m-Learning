# 父传子
props

# 子传父

子组件的操作影响父组件（子组件通知父组件，子组件都订阅了相关事件，发布到父组件，父组件具体执行）
vm.$emit():触发当前实例上的事件，发布订阅功能
<br/>
$parent/$children
<br/>
$listeners
<br/>
.sync

# 兄弟通信
可以通过查找父组件中的子组件实现

# 跨多层次组件通信

provide/ inject

# 终极办法解决一切问题

只要不怕麻烦Vuex或者Event解决一切问题
