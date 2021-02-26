function readWriteSc(){
  //var ws = SpreadsheetApp.openById('1VOHzA9rk5oGKjmenBa6FCXURcY42xGElwFAacGG6724');
  // 현재 행의 정보를 읽음
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  //테스트용
  //var sheet = ss.getSheetByName('2020-5-9(토)');
  var range = sheet.getActiveRange();
  var dateOfSheet = sheet.getName();
  
  //Logger.log(dateOfSheet);
  
  
  // readSchedule를 이용해서 정보 저장
  
  // getcurrentRow : 현재 행 읽기
  
  function readSchedule(rowNum){
    var storage = [];
    var storageBackground =['#ffffff'];
    var currentRange = sheet.getRange(rowNum, 1);
 
    for(var i = 0; i<2; i++){
      var range = currentRange.offset(0, i);
      storage.push(range.getValue());
    }               
    
    //날짜 정보 포함
    storage.push(sheet.getSheetName());
    
    // 데이터의 시작과 끝
    var start = findCol('숙제', sheet);
    var last = findCol('T10', sheet);
    //Logger.log(start, last);
    
    var startRange = sheet.getRange(rowNum, start);
    
    for(var i = 0 ; i< last-start+1  ; i++){
      var range = startRange.offset(0, i);
      storage.push(range.getValue());
      storageBackground.push(range.getBackground());
    }
    
   
         
    return [storage,storageBackground];
  }

// 이차원 행렬 받아서 데이터 쓰기  
  function writeSchedule(data){
    // 해당학생 시트 찾음 없으면 새로 생성
    var ws = SpreadsheetApp.openById('1VOHzA9rk5oGKjmenBa6FCXURcY42xGElwFAacGG6724');
    var sheetName = data[0][0] +"_" +data[0][1];
    
  
   function cutMarginOfSheet(sheet){
      let lastCol = sheet.getLastColumn();
      let maxCol = sheet.getMaxColumns();
      let lastRow = sheet.getLastRow();
      let maxRow = sheet.getMaxRows();
    
      if(maxRow - lastRow >1){
        sheet.deleteRows(lastRow+1, maxRow - lastRow-1);
    }
      if(maxCol - lastCol > 1){
      sheet.deleteColumns(lastCol+1, maxCol-lastCol-1);
      }
    
    }
    
    if(!ws.getSheetByName(sheetName)){
      var newSheet = ws.insertSheet(sheetName);
      var label = setupLabel();
      fillLabel(label, newSheet);
      cutMarginOfSheet(newSheet);
    }
    
  
    // 날짜 기록, 숙제 데이타 옮김, 진행 데이타 옮김
    var targetSheet = ws.getSheetByName(sheetName);
    var data1 = data[0].slice(2);
    var targetRange = targetSheet.getDataRange();
    var targetRowNum = targetRange.getLastRow();
    var targetColNum = targetRange.getLastColumn();
    var compRange = targetSheet.getRange(1, 1, targetRowNum , targetColNum);
    var compRangeValues = compRange.getValues();
    /*
    Logger.log(sheetName);
    Logger.log(targetRowNum);
    Logger.log(compRange);
    Logger.log(compRangeValues);
    Logger.log(data1);
    Logger.log(isEqualArr(compRangeValues, data1));
    */
    if(!isEqualArr(compRangeValues, data1)){
      targetSheet.appendRow(data1);
      //시트정리, 백그라운드 정보 옮겨서 색칠
      addInfo(targetSheet, [data[1]]);
    }
    
    
  }
  //var activeRow = sheet.getActiveRange().getRow();
  
  
  // 분홍색 #ead1dc
  // 노란색 #ffff00
  // 녹색 #d9ead3
  // 원하는 색깔이 있는 행을 배열로 리턴하는 함수
  function rowNums(sheet){
    //var ss = SpreadsheetApp.getActiveSpreadsheet();
    //var sheet = ss.getSheetByName('2020-5-11(월)');
    //끝나는 행 조사
    var range = sheet.getDataRange();
    var lastRow = range.getLastRow();
    var nameCol = sheet.getRange(4,2,lastRow-3, 1);
    var colors = nameCol.getBackgrounds();
    
    // colors 에 있는 색깔 정보가위이 색중 맞으면 rowNumber를 배열형태로 저장
    var rows = [];
    for(var i=0; i<colors.length;i++){
      if(colors[i][0] ==='#ead1dc' || colors[i][0] === '#ffff00' || colors[i][0] === '#d9ead3'){
        rows.push(i+4);
      }
    } 
    return rows;
  }  
  var activeRows = rowNums(sheet);
  
  //실행
  for (var i = 0; i<activeRows.length ; i++){
    writeSchedule(readSchedule(activeRows[i]));
    
  }
}



 // 조건에 맞는 열찾기
function findCol(condition, sheet){
  //var ss = SpreadsheetApp.getActiveSpreadsheet();
  //var sheet = ss.getSheetByName('2020-5-8(금)');
  //var sheet = ss.getActiveSheet();
  var startingPt = sheet.getRange('A2');
  var label = startingPt.getValue();
  var i = 0;
  while(label !== condition){
    label = startingPt.offset(0,i).getValue();
    i = i + 1;
  }
  return i;
}
  
function setupLabel(){
  var strs=['진행날짜'];
  //숙제 영역 표시
  for(var i = 0; i<6; i++){
    strs.push('H'+(i+1));
  }
  strs.push('제출', '미제출');
  //진행 영역 표시
  for(var i=0; i<10; i++){
    strs.push('T'+(i+1));
  }
  //Logger.log(strs);
  return strs;
}

// 첫번째 줄 셋업
function fillLabel(array, sheet){
  var labelRange =  sheet.getRange(1, 1, 1, array.length);
  var twoDimArray = [array];
  
  sheet.setColumnWidth(1, 90);
  sheet.setColumnWidths(2, array.length -1, 50);
  
  labelRange.setValues(twoDimArray);
  labelRange.setFontWeight('bold');
  labelRange.setHorizontalAlignment('center');
  labelRange.setVerticalAlignment('middle');
  labelRange.setBackground('#4bacc6');

}

//range 정리
function addInfo(sheet, info){
  var dataRange = sheet.getDataRange();
  var lastRow = dataRange.getLastRow();
  var lastCol = dataRange.getLastColumn();
  sheet.getRange(lastRow,1,1,lastCol).setBackgrounds(info);
  sheet.getRange(lastRow,1,1,lastCol).setHorizontalAlignment('center')
  .setVerticalAlignment('middle');
}


// array 두개 값비교
function isEqual(a1, a2){
    if(a1.length !== a2.length){return false}
  for(var i = 0; i< a1.length ; i++){
    if(a1[i] != a2[i]){ return false}
    
  }
  return true;
}

// two dim array 비교
function isEqualArr(twoDimArray, array){
  if(twoDimArray.length === 1){return false;}
  for(var i=0; i < twoDimArray.length; i++){
    if(isEqual(twoDimArray[i], array)){
      return isEqual(twoDimArray[i], array)
    }
  }
}  

// 분홍색 #ead1dc
// 노란색 #ffff00
// 녹색 #d9ead3
// 원하는 색깔이 있는 행을 배열로 리턴하는 함수
function rowNums(/*sheet*/){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('2020-5-11(월)');
  //끝나는 행 조사
  var range = sheet.getDataRange();
  var lastRow = range.getLastRow();
  var nameCol = sheet.getRange(4,2,lastRow-3, 1);
  var colors = nameCol.getBackgrounds();
 
  // colors 에 있는 색깔 정보가위이 색중 맞으면 rowNumber를 배열형태로 저장
  var rows = [];
  for(var i=0; i<colors.length;i++){
    if(colors[i][0] ==='#ead1dc' || colors[i][0] === '#ffff00' || colors[i][0] === '#d9ead3'){
      rows.push(i+4);
    }
  } 
  return rows;
}  
  /*
  Logger.log(lastRow);  
  Logger.log(colors);
  Logger.log(rows);
  */
  