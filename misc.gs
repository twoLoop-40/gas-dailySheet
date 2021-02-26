function addDay(){
  var sheet = SpreadsheetApp.getActiveSheet();
  var dataRange = sheet.getDataRange();
  var colLength = dataRange.getLastColumn();
  var rowLength = dataRange.getLastRow();
  var start = sheet.getRange(1,1);
  var firstRow = start.offset(0,0,1,rowlength);
  
  // 요일 찾기, 요일을 찾으면 그 열을 반환
  var colNum = 0;
  for(var i = 0; i in firstRow[0]; i++){
    if (firstRow[0][i] == "요일"){
      colNum = i + 1;
    }
  }
  
  // '요일'이 있는 열을 따라 내려가면서 요일이라는 말을 붙임
  var yoilRow = start.offset(colNum - 1 , 0, rowLength, 1);
  for( var i = 1; i in yoilRow ; i++){
    var nowOn = getRange
  
    }
}


function setHomework(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var homeworkRange = sheet.getRange('L4:Q40');
  homeworkRange.setHorizontalAlignment('center');
  homeworkRange.setVerticalAlignment('middle');
  homeworkRange.setFontSize(8);
}

function clearTLee(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  //var sheet = ss.getSheetByName('2020-5-7(목)')
  var sheet = ss.getActiveSheet();
  var TRange = sheet.getRange('T4:AC40');
  
  // 조건에 맞는 열찾기
  function findCol(condition){
    var startingPt = sheet.getRange('A2');
    var label = startingPt.getValue();
    var i = 0;
    while(label !== condition){
      label = startingPt.offset(0,i).getValue();
      i = i + 1;
    }
    return i;
  }
  //담당강사 열
  var lectureColNum = findCol('담당강사');
  
  // 조건에 맞는 행찾기
  function findRow(condition){
    var rows = [];
    var stRow = sheet.getRange(4, lectureColNum);
    
    for(var i =0; i< 40 ; i++){
      if(stRow.offset(i,0).getValue() === condition){
        rows.push(i+4);
      }
    }
    return rows;
  }
  var ljhRows = findRow('이준호');
  
  //Logger.log(ljhRows);
  
  var startCol = findCol('T1'); //Logger.log(startCol);
  var lastCol = findCol('T10'); //Logger.log(lastCol);
  
  var i = 0;
  while(i < ljhRows.length){
    var target = sheet.getRange(ljhRows[i],startCol, 1, lastCol - startCol + 1);
    target.setBackground('#ffffff');
    target.setHorizontalAlignment('center');
    target.setVerticalAlignment('middle');
    i = i + 1;
  }
}

function clearTSu(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  //var sheet = ss.getSheetByName('2020-5-7(목)')
  var sheet = ss.getActiveSheet();
  var TRange = sheet.getRange('T4:AC40');
  
  // 조건에 맞는 열찾기
  function findCol(condition){
    var startingPt = sheet.getRange('A2');
    var label = startingPt.getValue();
    var i = 0;
    while(label !== condition){
      label = startingPt.offset(0,i).getValue();
      i = i + 1;
    }
    return i;
  }
  //담당강사 열
  var lectureColNum = findCol('담당강사');
  
  // 조건에 맞는 행찾기
  function findRow(condition){
    var rows = [];
    var stRow = sheet.getRange(4, lectureColNum);
    
    for(var i =0; i< 40 ; i++){
      if(stRow.offset(i,0).getValue() === condition){
        rows.push(i+4);
      }
    }
    return rows;
  }
  var ljhRows = findRow('이수현');
  
  //Logger.log(ljhRows);
  
  var startCol = findCol('T1'); //Logger.log(startCol);
  var lastCol = findCol('T10'); //Logger.log(lastCol);
  
  var i = 0;
  while(i < ljhRows.length){
    var target = sheet.getRange(ljhRows[i],startCol, 1, lastCol - startCol + 1);
    target.setBackground('#ffffff');
    target.setHorizontalAlignment('center');
    i = i + 1;
  }
}  

function centerLee(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  //var sheet = ss.getSheetByName('2020-5-7(목)')
  var sheet = ss.getActiveSheet();
  var TRange = sheet.getRange('T4:AC40');
  
  // 조건에 맞는 열찾기
  function findCol(condition){
    var startingPt = sheet.getRange('A2');
    var label = startingPt.getValue();
    var i = 0;
    while(label !== condition){
      label = startingPt.offset(0,i).getValue();
      i = i + 1;
    }
    return i;
  }
  //담당강사 열
  var lectureColNum = findCol('담당강사');
  
  // 조건에 맞는 행찾기
  function findRow(condition){
    var rows = [];
    var stRow = sheet.getRange(4, lectureColNum);
    
    for(var i =0; i< 40 ; i++){
      if(stRow.offset(i,0).getValue() === condition){
        rows.push(i+4);
      }
    }
    return rows;
  }
  var ljhRows = findRow('이준호');
  
  //Logger.log(ljhRows);
  
  var startCol = findCol('T1'); //Logger.log(startCol);
  var lastCol = findCol('T10'); //Logger.log(lastCol);
  
  var i = 0;
  while(i < ljhRows.length){
    var target = sheet.getRange(ljhRows[i],startCol, 1, lastCol - startCol + 1);
    target.setHorizontalAlignment('center');
    target.setVerticalAlignment('middle');
    i = i + 1;
  }
}
        
        
        
        
  
  
      
      
      
    
  

