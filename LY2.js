var Rnik = JSON.parse($response.body);
  Rnik.data.vipExpire = 4092599349;
Rnik.data.isVip = true;
Rnik.data.avatar = "https://file.shengmaapp.com/storage/assistant/20240610/50e92adb5462bac2d17a17bc9c8298eb.jpg";
Rnik.data.name = "Rnik666🎖";
  $done({body : JSON.stringify(Rnik)});
