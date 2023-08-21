---
pageClass: routes
---

# 随机颜色 <Badge text="正常" type="tip"/>

## 接口 ID

``` 
39
```

## 请求示例

``` java
ApiClient apiClient = new ApiClient(accessKey, secretKey);
Api api = new Api();
api.setInterfaceId(39L);
BaseResponse result = apiClient.getResult(api);
```

## 请求参数

| 参数名      | 类型 | 必填 | 说明    |
| ----------- | ---- | ---- | ------- |
| interfaceId | long | 是   | 接口 ID |

## 返回数据

``` json
{
  "code": 0,
  "data": "#871F78",
  "message": "ok",
}
```

## 返回参数

| 参数名  | 类型   | 说明     |
| ------- | ------ | -------- |
| code    | int    | 状态码   |
| data    | String | 随机颜色 |
| message | String | 状态信息 |

<ads></ads>