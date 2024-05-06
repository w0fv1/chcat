# Chcat

Chcat是一个简单的单文件的大语言对话页面。他不依赖任何库，只需一个html文件即可。

# 用法

## 聊天小猫 chcat.html

作为一个单文件的大语言对话页面，Chcat的用法非常简单。

只需下载chcat.html，然后自行修改config即可。

里面的代码逻辑也非常简单，你可以自行修改。

## 示例服务器 serve.ts

这是一个deno的示例对话服务器，用于提供一个简单的对话服务，包括基于sse的和普通post请求的对话服务。

你可以直接使用这个服务器，也可以自行修改代码以适应自己的需求。

如果你没有deno，请到[https://deno.com/](deno官网)下载deno并开始使用deno。

运行示例服务器`serve.ts`：

```shell
deno run --allow-net --allow-read serve.ts
```

然后访问`http://localhost:8000/chcat.html`即可。

# 为什么？

### 为什么要叫Chcat？怎么读？

Chcat是Chat和cat的组合，意思为“聊天小猫”。他是一个自洽的单位，同时也是一个独立的个体。

Chcat的读音为`/ʧkæt/`，类似于英文单词chat的发音。

### 为什么要做Chcat？

因为我在编写prompt或测试模型的时候，希望能够快速的测试效果。Chcat可以方便的嵌入到任何地方，只需修改一个config即可。

Chcat配合模板引擎使用效果更佳。

### 为什么没有commit记录？

因为对于小项目，我不希望频繁的commit打断我的思路。所以我选择了一次性提交。

# 其他

### `postSseRequest()`

sse通常是基于Get method的，但实际上我们通常需要使用request body来传输长文本。`postSseRequest()`是一个基于fetch利用post method发送SSE请求的函数。是手搓的，可能存在一些问题，但是可以满足基本的需求。