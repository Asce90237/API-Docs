---
pageClass: routes
---

# 历史上的今天 <Badge text="正常" type="tip"/>

## 接口 ID

``` 
42
```

## 请求示例

``` java
ApiClient apiClient = new ApiClient(accessKey, secretKey);
Api api = new Api();
api.setInterfaceId(42L);
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
  "data": "人类历史上第一架望远镜面世,
    那达斯地伯爵的遗孀伊丽莎白·巴托里逝世,
    清朝戏曲家，著有《长生殿》的洪升出生,
    “法国史学之父”的儒勒·米什莱出生,
    美国篮球明星张伯伦出生,
    中苏签订《中苏互不侵犯条约》,
    前苏联共产党托洛茨基逝世,
    丹麦作家彭托皮丹逝世,
    美国正式宣布夏威夷为第五十个州,
    谷歌公司创始人美籍俄裔企业家谢尔盖·布林出生,
    斯威士兰国王索布扎二世逝世,
    牙买加短跑名将博尔特出生,
    世界集邮展览在北京开幕，
    首次在中国举办,
    埃塞俄比亚总统梅莱斯·泽纳维逝世",
  "message": "ok",
}
```

## 返回参数

| 参数名  | 类型   | 说明     |
| ------- | ------ | -------- |
| code    | int    | 状态码   |
| data    | String | 历史信息 |
| message | String | 状态信息 |

<ads></ads>