# 3.什么是Ajax
实质:  异步请求与响应

ajax是用户和服务器之间ajax引擎，实现用户操作和服务器响应异步化。
通俗来讲，就是用来发送异步请求和从服务器获得请求数据的，关键在于从服务器获得数据。

# 3.1 如何理解异步？异步在ajax上的体现在哪？
即在发送请求a，等待响应a的过程中，仍可以进行发送请求b等其他操作，从而实现页面的局部刷新。  
前端异步场景：定时：setTimeout setInterval；网络请求：Ajax, 
其中异步的实现方式之一：回调。

# 3.2 ajax的组成
js, XMLHttpRequest, DOM  
其中：XMLHttpRequest是ajax的核心机制，用来发送请求和获取服务器数据。
获取数据后，然后js操作DOM更新页面。

# 3.3 手写XMLHttpRequest
```
/*创建连接*/
var xhr = null;
xhr = new XMLHttpRequest();

/*连接服务器*/
xhr.open('get', 'url', true);

/*发送请求*/
xhr.send(null)

/*接受请求*/
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            success(xhr.responseText);
        }else{
            fail && fail(xhr.status);
        }

    }
}
```

3.4优缺点  
优：局部刷新（不用重新加载页面），增强用户体验

减少服务器负载

优化传输






