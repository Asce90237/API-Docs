---
pageClass: routes
---

# Emoji表情转换 <Badge text="正常" type="tip"/>

## 接口 ID

``` 
31
```

## 请求示例

``` java
ApiClient apiClient = new ApiClient(accessKey, secretKey);
Api api = new Api();
api.setInterfaceId(31L);
api.setParameter("可爱");
BaseResponse result = apiClient.getResult(api);
```

## 请求参数

| 参数名      | 类型   | 必填 | 说明     |
| ----------- | ------ | ---- | -------- |
| interfaceId | long   | 是   | 接口 ID  |
| parameter   | String | 是   | 表情形容 |

## 返回数据

``` json
{
  "code": 0,
  "data": "😊",
  "message": "ok",
}
```

## 返回参数

| 参数名  | 类型   | 说明     |
| ------- | ------ | -------- |
| code    | int    | 状态码   |
| data    | String | 表情     |
| message | String | 状态信息 |

<ads></ads>