---
sidebarDepth: 0
---

# 本站介绍

官方文档地址：[https://docs.openapi.love](https://docs.openapi.love/)

在当今快节奏的技术环境中，为了满足开发者和用户对于获取特定信息和功能的需求，OpenAPI为开发者提供了一种简单且高效的方式访问各种服务和数据，同时为用户提供了一个统一的入口来获取他们所需的信息和功能。

OpenAPI 建于2023年05月16日，使用免费(目前购买功能仅为沙箱测试)，旨在为开发者和用户提供一个便捷快速的途径，让他们能够轻松地获取所需的信息和功能。通过提供一致的接口标准和易于使用的工具，我们希望促进开发者的创造力和用户的满意度，为用户和开发者带来更多的便利和价值，从而推动系统的集成和业务的发展。

目前支持两种请求方式，一种是登录主站通过网页请求，另一种面向开发者，客户端SDK调用。但不论是哪种，你都需要前往主站开通接口调用权限。

## 🌐 主站调用

主站地址：[https://www.openapi.love](https://www.openapi.love/)

你可以通过手机号注册方式注册账号，注册后你可以使用账号密码登录或是手机验证码方式登录，若你不想注册，本站还支持GitHub和Gitee第三方授权登录。

注册登录后，在左侧导航里找到在线调用，即可浏览你想要的使用的接口，单击查看接口详情信息以及可调用次数。

每一个接口在你注册时都为你分配了 `100` 次调用次数，而后每天你都可以登录主站领取次数，每天都可以领取 `50` 次调用次数，上限为1000。

> 接口频繁调用( `120/min` )会自动拉黑 `5min`，如果**多次导致**服务器负载过高(CPU 100%)，**影响其他用户正常使用**或提交**恶意参数**将会被**永久拉黑**。

## ⚙️ 客户端SDK调用

#### 0、引入 sdk

> 本站客户端SDK已发布至Maven中心仓库

```xml
<dependency>
    <groupId>love.openapi</groupId>
    <artifactId>api-client</artifactId>
    <version>0.0.2</version>
</dependency>
```

#### 1、登录 [OpenAPI](https://www.openapi.love) 获取开发者密钥对

> API密钥管理位于首页左下角头像右侧

![dsBuffer](./README/dsBuffer.png)

#### 2、初始化 ApiClient 对象

方法 1：自主 new 对象

```java
String accessKey = "你的 accessKey";
String secretKey = "你的 secretKey";
ApiClient apiClient = new ApiClient(accessKey,secretKey);
```

方法 2：通过配置注入对象

修改配置：

```yaml
api:
  client:
    access-key: 你的 access-key
    secret-key: 你的 secret-key
```

使用客户端对象：

```java
@Resource
private ApiClient apiClient;
```

#### 3、构造请求参数

```java
Api api = new Api();
api.setInterfaceId(1651468516836098050L);
api.setParameter("你好");
```

#### 4、调用接口

```java
BaseResponse apiClientResult = apiClient.getResult(api);
System.out.println(apiClientResult.getData());
```

#### 5、响应结果

```json
{
	"code": 0,
    "data": "你好，有什么需要帮助的吗?",
    "message": "ok"
}
```

## 🏗️ 参与贡献

欢迎感兴趣的同学一起来参与完善 Open API，帮助更多的人，我们期待你的 PR！

- 贡谢你的接口：文档地址 [Open-API-Docs](https://github.com/Asce90237/API-Docs)，在此提交你的接口实现，我们会进行审核，审核通过会通过邮件通知你，若成功接入你的接口，我们会给予你一定的奖励，欢迎提交 Issue 或者 Pull Requests

## 

:::tip

本平台始终拥护中国共产党的领导，坚持一个中国原则，坚决抵制任何反动言论，立志建设一个美好的网络环境，您如果在使用中出现不合规发言，平台将在提醒后采取强制封号措施， 为了您能正常使用平台功能，请您在使用中理智文明发言。

:::