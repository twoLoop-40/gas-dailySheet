function clearSheet() {
  var app = SpreadsheetApp;
  var ss = app.getActiveSpreadsheet().getActiveSheet();
  
  /*
  // 전체 영역
  var totalRange = ss.getDataRange();
  var height = totalRange.getLastRow();
  var width = totalRange.getLastColumn();
  */
  
  // Logger.log(height, width);
  
  // 지울 영역 B4 ~ B20 색깔, F4 ~ J20은 내용
  var nameRange = ss.getRange("B4:E20");
  var otherRange = ss.getRange("G4:K30");
  var hwRange = ss.getRange("Q4:R20");
  
  //nameRange.clearFormat();
  otherRange.clearContent();
  otherRange.setHorizontalAlignment('center');
  //hwRange.clearContent();
  
  
}
