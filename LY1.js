let body = $response.body;
body = body.replace(/("isVip"\s*:\s*)\w+/g, '$1true');
body = body.replace(/("vipExpire"\s*:\s*)\d+/g, '$14092599349');
body = body.replace(/("name"\s*:\s*")[^"]*"/g, '$1Rnik666🎖"');
body = body.replace(/("amount"\s*:\s*")[^"]*"/g, '$1https://pavo.elongstatic.com/i/ori/1uG8Yb8CUWA.png"');

$done({ body });