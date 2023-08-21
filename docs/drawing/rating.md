---
pageClass: routes
---

# 外卖评价生成 <Badge text="正常" type="tip"/>

## 接口 ID

``` 
32
```

## 请求示例

``` java
ApiClient apiClient = new ApiClient(accessKey, secretKey);
Api api = new Api();
api.setInterfaceId(32L);
api.setParameter("麻婆豆腐");
BaseResponse result = apiClient.getResult(api);
```

## 请求参数

| 参数名      | 类型   | 必填 | 说明         |
| ----------- | ------ | ---- | ------------ |
| interfaceId | long   | 是   | 接口 ID      |
| parameter   | String | 是   | 要评价的菜名 |

## 返回数据

``` json
{
  "code": 0,
  "data": "我喜欢麻婆豆腐的味道和口感，每次点外卖都会选择它。麻婆豆腐的豆腐口感细腻，入口即化，配上麻辣的酱汁，辣味浓郁但不过分，麻味十足，真的非常开胃。而且麻婆豆腐的豆腐块都非常新鲜，不会有异味或者变质的情况。每次打开外卖盒，看到那红亮亮的麻辣豆腐，就忍不住流口水了。而且外卖包装也很精致，没有漏油或者打翻的情况，能够保持食物的完整性和美味度。总的来说，麻婆豆腐是我最爱的外卖选择之一，绝对值得一试。",
  "message": "ok",
}
```

## 返回参数

| 参数名  | 类型   | 说明     |
| ------- | ------ | -------- |
| code    | int    | 状态码   |
| data    | String | 评价     |
| message | String | 状态信息 |

<ads></ads>