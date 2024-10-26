let body = $response.body;


body = body.replace(/("isUsable"\s*:\s*)\w+/g, '$1true');
body = body.replace(/("vipAuth"\s*:\s*)\d+/g, '$11');
body = body.replace(/("voiceType"\s*:\s*)\d+/g, '$10');
body = body.replace(/("expiredAt"\s*:\s*")w/g, '$12099-10-26T15:03:59.000+0800"');
body = body.replace(/("gender"\s*:\s*")[^"]*"/g, '$1FEMALE"');


$done({ body });
