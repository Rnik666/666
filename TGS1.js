var Rnik = JSON.parse($response.body);
Rnik ={
  "stat" : 1,
  "data" : {
    "closeEditorTime" : "1月9日",
    "amountLeft" : 9999,
    "id" : 23461326,
    "profession" : "",
    "amountLeftGif" : 999,
    "expire" : "2099-09-29",
    "isCloseOldEditor" : true,
    "isLogin" : true,
    "vipType" : 4,
    "isInvite" : 0,
    "tel" : "18888888888",
    "uniqueId" : "001",
    "vipName" : "解锁去水印会员功能",
    "industry" : "",
    "vipLevelType" : "⚠️仅支持编辑后截图保存-未支持无水印下载⚠️𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹",
    "deviceId" : "",
    "isNew" : true,
    "userVipSign" : 1,
    "vipNameInfo" : {
      "vipName" : "个人下载版",
      "extraAttributes" : 4
    },
    "supportTemplLevel" : [
      0
    ],
    "username" : "Rnik666🎖",
    "avatar" : "https://sz-1300098290.cos.ap-beijing.myqcloud.com/app/avatar/b74cc83011b511ef99db5baca73f87d2.png",
    "downloadPrompt" : "此次作品仅支持个人/公益使用，其中的版权字体和图片若用在商业用途中存在版权风险！",
    "accessToken" : "701ae09b5fac488419ded71fd19395f8",
    "isBusinessVip" : true,
    "isNewVersionUser" : true,
    "isRedEnvelopNewUser" : true,
    "newYearActivity" : 0,
    "popVipName" : "⚠️仅支持编辑后截图保存⚠️",
    "remind" : "仅支持编辑后截图保存",
    "isUpgrade" : true,
    "vipKind" : 4,
    "bindPhone" : true,
    "isCompanyVip" : true
  },
  "reason" : "success"
}


  
  
$done({ body: JSON.stringify(Rnik) });
