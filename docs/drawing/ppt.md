---
pageClass: routes
---

# PPT大纲生成 <Badge text="正常" type="tip"/>

## 接口 ID

``` 
33
```

## 请求示例

``` java
ApiClient apiClient = new ApiClient(accessKey, secretKey);
Api api = new Api();
api.setInterfaceId(33L);
api.setParameter("飞机对人类的影响");
BaseResponse result = apiClient.getResult(api);
```

## 请求参数

| 参数名      | 类型   | 必填 | 说明    |
| ----------- | ------ | ---- | ------- |
| interfaceId | long   | 是   | 接口 ID |
| parameter   | String | 是   | PPT信息 |

## 返回数据

``` json
{
  "code": 0,
  "data": "I. 概述飞机对人类的影响
   A. 飞机的出现和发展
   B. 飞机对人类生活和社会的影响

II. 飞机对人类旅行的影响
   A. 方便和快速的交通工具
   B. 扩大了人类的旅行范围和机会
   C. 丰富了人们的旅行体验

III. 飞机对人类经济的影响
   A. 推动了航空业发展和相关产业的繁荣
   B. 促进了国际贸易和经济全球化
   C. 刺激了旅游业和观光业的发展

IV. 飞机对人类科技的影响
   A. 推动了航空科技的创新和进步
   B. 提高了航空安全和飞行效率
   C. 激发了人们的探索精神和科学研究的兴趣

V. 飞机对人类环境的影响
   A. 空气和噪音污染问题
   B. 节能减排和环保技术的发展

VI. 飞机对人类文化的影响
   A. 促进了不同文化之间的交流和融合
   B. 丰富了艺术、文学和电影等文化表达形式

VII. 结论
   A. 飞机对人类的影响是深远而多方面的
   B. 飞机在人类进步和发展中扮演着重要的角色",
  "message": "ok",
}
```

## 返回参数

| 参数名  | 类型   | 说明     |
| ------- | ------ | -------- |
| code    | int    | 状态码   |
| data    | String | PPT大纲  |
| message | String | 状态信息 |

<ads></ads>