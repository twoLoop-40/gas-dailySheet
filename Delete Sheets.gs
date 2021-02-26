function delSheet() {
  
   // 삭제하지 않아야 할 시트의 이름
  var names = ['문제출력용', '과정','주간수강명단',  '시트양식'];
  
  var SS = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = SS.getSheets();
  // sheets의 길이
  var n = sheets.length;
  
  // 날짜 
  var date = new Date();
  var tYear = date.getFullYear();
  var tMonth = date.getMonth();
  var tDate = date.getDate();
  
  // names에 지난 일주일 시트이름 추가
  var intval = 6;
  for(var i = 0; i< intval ; i++){
    names.push(checkTime(tYear, tMonth , tDate+i-6));
  }
  Logger.log(names);
  
  
  
               
  
  function checkName(nameArr, name , c){
      return nameArr[c] === undefined
      ?false
      :nameArr[c] === name
      ?true
      :checkName(nameArr, name , c+1)
    }
    
  
  function delASheet(sheets, endSheetNum ){
    if (endSheetNum >= 0){
      var name = sheets[endSheetNum].getName();
      if (!checkName(names, name, 0)){
        SS.deleteSheet(SS.getSheetByName(name));
      }
      endSheetNum = endSheetNum - 1;
      delASheet(sheets, endSheetNum);
    }
  }
  delASheet(sheets, n-1); 
  
}
    