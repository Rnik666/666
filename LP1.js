var Rnik = JSON.parse($response.body);
  Rnik.data.user.vipExpire = 4092599349;
Rnik.data.user.isVip = true;
Rnik.data.user.avatar = "https://file.shengmaapp.com/storage/assistant/20240610/50e92adb5462bac2d17a17bc9c8298eb.jpg";
Rnik.data.user.name = "Rnik666🎖";
  $done({body : JSON.stringify(Rnik)});
