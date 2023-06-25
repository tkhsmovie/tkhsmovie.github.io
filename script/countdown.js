function set2fig(num) {
  // 数値が1桁だったら2桁の文字列にして返す
  var ret;
  if( num < 10 ) { ret = "0" + num; }
  else { ret = num; }
  return ret;
}

function showCountdown() {
  // 現在日時を数値(1970-01-01 00:00:00からのミリ秒)に変換
  var nowDate = new Date();
  var dnumNow = nowDate.getTime();

  // 指定日時を数値(1970-01-01 00:00:00からのミリ秒)に変換
  var targetDate = new Date( 2023, 8 - 1, 27, 9, 0, 0 );
  var dnumTarget = targetDate.getTime();

  // 引き算して日数(ミリ秒)の差を計算
  var diff2Dates = dnumTarget - dnumNow;

  // 差のミリ秒を、日数・時間・分・秒に分割
  var dDays  = diff2Dates / ( 1000 * 60 * 60 * 24 );   // 日数
  diff2Dates = diff2Dates % ( 1000 * 60 * 60 * 24 );
  var dHour  = diff2Dates / ( 1000 * 60 * 60 );   // 時間
  diff2Dates = diff2Dates % ( 1000 * 60 * 60 );
  var dMin   = diff2Dates / ( 1000 * 60 );   // 分
  diff2Dates = diff2Dates % ( 1000 * 60 );
  var dSec   = diff2Dates / 1000;   // 秒

  // 表示文字列の作成
  var msg;
  if( dnumTarget > dnumNow ) {
    // まだ期限が来ていない場合
    ctdn.style.display = "block";
    sugita.style.display = "none";
  }
  else {
    ctdn.style.display = "none";
    sugita.style.display = "block";
  }

  // 作成した文字列を表示
  day.innerHTML = Math.floor(dDays);
  hour.innerHTML = Math.floor(dHour);
  min.innerHTML = Math.floor(dMin);
  sec.innerHTML = Math.floor(dSec);
}
// 1秒ごとに実行
showCountdown()
setInterval('showCountdown()',1000);