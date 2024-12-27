var DG = JSON.parse($response.body);
DG = {
  "message" : {
    "code" : 200,
    "serverTime" : 1733924690381,
    "messageInfo" : "H20000"
  },
  "result" : {
    "unsign" : 1,
    "agreementNo" : "000001899416154",
    "isTrialPeriod" : false,
    "eventToken" : null,
    "expiresDate" : 32493834549000,
    "isVip" : 1,
    "skuType" : null
  }
}

  
  
$done({ body: JSON.stringify(DG) });
