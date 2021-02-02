# setter getter

1.挂载点+vue实例
2.数据：先从data里找，再从computed属性里找

get: function(){}
set: function(value){
    var arr = value.split(" ");
    this.firstName = arr[0];
    this.lastName = arr[1];

}