---
pageClass: routes
---

# 手机号归属地查询 <Badge text="正常" type="tip"/>

## 接口 ID

``` 
28
```

## 请求示例

``` java
ApiClient apiClient = new ApiClient(accessKey, secretKey);
Api api = new Api();
api.setInterfaceId(28L);
api.setParameter("13999999999");
BaseResponse result = apiClient.getResult(api);
```

## 请求参数

| 参数名      | 类型   | 必填 | 说明         |
| ----------- | ------ | ---- | ------------ |
| interfaceId | long   | 是   | 接口 ID      |
| parameter   | String | 是   | 要查询的号码 |

## 返回数据

``` json
{
  "code": 0,
  "data": "浙江-杭州",
  "message": "ok",
}
```

## 返回参数

| 参数名  | 类型   | 说明       |
| ------- | ------ | ---------- |
| code    | int    | 状态码     |
| data    | String | 号码归属地 |
| message | String | 状态信息   |

<ads></ads>