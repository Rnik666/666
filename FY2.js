var DG = JSON.parse($response.body);
DG = {
  "message" : {
    "messageInfo" : "H20000",
    "serverTime" : 1735287405545,
    "code" : 200
  },
  "result" : {
    "id" : "1872546728314408961",
    "phoneNum" : null,
    "pkg" : "id6502936581",
    "anid" : "85A612E4-2998-44FB-B299-53E45DBBC28D",
    "isVip" : 1,
    "bizId" : 88888888,
    "skuGroupId" : 1792865621713637400,
    "avatar" : "https://pavo.elongstatic.com/i/ori/1uG8Yb8CUWA.png",
    "token" : "5c6d8bc0196a8c77bd18b6936b2c7c97",
    "isForeverVip" : 1,
    "paymentThirdPlatformUserId" : null,
    "vipExpireTime" : 32493834549000,
    "isOld" : 0,
    "nickName" : "Rnik",
    "openId" : null,
    "appInstanceId" : null,
    "name" : "Dsp4VzA",
    "functionalPlanId" : null
  }
}

  
  
  
$done({ body: JSON.stringify(DG) });
