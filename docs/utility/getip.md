---
pageClass: routes
---

# 用户IP信息 <Badge text="正常" type="tip"/>

## 接口 ID

``` 
40
```

## 请求示例

``` java
ApiClient apiClient = new ApiClient(accessKey, secretKey);
Api api = new Api();
api.setInterfaceId(40L);
api.setParameter("164.5.32.145");
BaseResponse result = apiClient.getResult(api);
```

## 请求参数

| 参数名      | 类型   | 必填 | 说明           |
| ----------- | ------ | ---- | -------------- |
| interfaceId | long   | 是   | 接口 ID        |
| parameter   | String | 是   | 要查询的ip地址 |

## 返回数据

``` json
{
  "code": 0,
  "data": "ip:164.5.32.145,
    country:芬兰,
    province:,
    city:,
    area:芬兰 ,
    isp:,
    os:Windows 10,
    browser:Chrome(75.0.3770.142)",
  "message": "ok",
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| ip | string | IP地址 |
| country | string | 国家 |
| province | string | 省份 |
| city | string | 城市 |
| area | string | 地区 |
| isp | string | 运营商 |
| os | string | 请求用户的操作系统 |
| browser | string | 请求用户的浏览器 |

<ads></ads>