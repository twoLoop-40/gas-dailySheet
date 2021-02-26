function checkTime(yr, mth, dte) {
  var now = new Date(yr, mth, dte);
  var year = now.getFullYear();
  var month = now.getMonth();
  var date = now.getDate();
  
  function dayTransform(dayNum){
    if (dayNum === 1){
      return "월"}
    else if(dayNum === 2){
      return "화"}
    else if(dayNum ===3){
      return "수"}
    else if(dayNum ===4){
      return "목"}
    else if(dayNum === 5){
      return "금"}
    else if(dayNum === 6){
      return "토"}
    else { return "일"}
  }
  var dateStr = year+"-"+(month +1) +"-"+date + "("+dayTransform(now.getDay())+")";
  
  return dateStr;
  
  
  
}

function checkDate(){
  var nowDate = new Date(2020, 3, 0);
  Logger.log(nowDate.getDate());
}
