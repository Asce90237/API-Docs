---
pageClass: routes
---

# 骚扰电话查询 <Badge text="正常" type="tip"/>

## 接口 ID

``` 
41
```

## 请求示例

``` java
ApiClient apiClient = new ApiClient(accessKey, secretKey);
Api api = new Api();
api.setInterfaceId(41L);
api.setParameter("13999999999");
BaseResponse result = apiClient.getResult(api);
```

## 请求参数

| 参数名      | 类型   | 必填 | 说明           |
| ----------- | ------ | ---- | -------------- |
| interfaceId | long   | 是   | 接口 ID        |
| parameter   | String | 是   | 要查询的手机号 |

## 返回数据

``` json
{
  "code": 0,
  "data": "tel:13999999999,
    360:正常号码,
    sougou:正常号码,
    baidu:正常号码",
  "message": "ok",
}
```

## 返回参数

| 参数名  | 类型   | 说明           |
| ------- | ------ | -------------- |
| code    | int    | 状态码         |
| data    | String | 是否为骚扰号码 |
| message | String | 状态信息       |

<ads></ads>