---
pageClass: routes
---

# AI聊天<Badge text="正常" type="tip"/>

## 接口 ID

``` 
30
```

## 请求示例

``` java
ApiClient apiClient = new ApiClient(accessKey, secretKey);
Api api = new Api();
api.setInterfaceId(30L);
api.setParameter("你好");
BaseResponse result = apiClient.getResult(api);
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| interfaceId | long | 是 | 接口 ID |
| parameter | String | 是 | 要询问的问题 |

## 返回数据

``` json
{
  "code": 0,
  "data": "你好！有什么我可以帮助你的吗？",
  "message": "ok",
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| code | int | 状态码 |
| data | String | AI回答 |
| message | String | 状态信息 |

<ads></ads>