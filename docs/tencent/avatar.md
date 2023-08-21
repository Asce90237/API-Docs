---
pageClass: routes
---

# QQ头像 <Badge text="正常" type="tip"/>

## 接口 ID

``` 
34
```

## 请求示例

``` java
ApiClient apiClient = new ApiClient(accessKey, secretKey);
Api api = new Api();
api.setInterfaceId(34L);
api.setParameter("123456");
BaseResponse result = apiClient.getResult(api);
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| interfaceId | long | 是 | 接口 ID |
| parameter | String | 是 | QQ号 |

## 返回数据

```json
{
  "code": 0,
  "data": "https://q1.qlogo.cn/g?b=qq&nk=123456&s=100",
  "message": "ok",
}
```

## 返回参数

| 参数名  | 类型   | 说明       |
| ------- | ------ | ---------- |
| code    | int    | 状态码     |
| data    | String | QQ头像地址 |
| message | String | 状态信息   |

<ads></ads>