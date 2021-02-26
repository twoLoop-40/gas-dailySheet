/**
 * onOpen() 함수
 * 학생 데이타 관리 메뉴
 */
function onOpen(){
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('시트 관리')
  .addItem('새시트 만들기', 'duplicateAndOrganizeActiveSheetAndRename')
  .addItem('출결영역정리', 'clearSheet')
  .addItem('숙제 검사 결과', 'countColor')
 // .addItem('시트초기화','delSheet')
  .addItem('숙제영역정리','setHomework')
  .addItem('진행영역정리-이준호','clearTLee')
  .addItem('진행영역가운데정리-이준호', 'centerLee')
  .addItem('진행영역정리-이수현','clearTSu')
  .addToUi();
  
  ui.createMenu('데이터 관리')
  .addItem('그룹 숙제 붙이기', 'shiftHomework')
  .addItem('개인 숙제 붙이기', 'shiftHomeworkIndividual')
  .addItem('데이타 보내기', 'readWriteSc')
  .addItem('요일붙이기', 'addDay')
  .addToUi();
}




function duplicateAndOrganizeActiveSheetAndRename(){
  var mySS = SpreadsheetApp.getActiveSpreadsheet();
  
  //현재 연도, 달-1, 날짜
  var now = new Date();
  var thisYear = now.getFullYear();
  var thisMonth = now.getMonth();
  var thisDate = now.getDate();
  var thisDay = now.getDay();
  // 생성할 갯수
   
  // /*
  var intv = 7-thisDay +1;
  //var sheets =[];
  for(var i = 0; i <intv ; i++) {
    var sheetName  = checkTime(thisYear, thisMonth, i+(thisDate-7)); 
    var fullDate = checkTime(thisYear, thisMonth, thisDate+i);
    
    var modelSheet = mySS.getSheetByName(sheetName);
   
    if(!modelSheet){
      modelSheet = mySS.getSheetByName('시트양식');
    }
    //Logger.log(modelSheet.getSheetName());
    //Logger.log(fullDate);
    
    
     modelSheet.activate();
    var duplicateSheet = mySS.duplicateActiveSheet();
    mySS.moveActiveSheet(7);
    duplicateSheet.setName(fullDate);
    
  }
  
  
}

// 녹색 #00ff00

/**
 * 학생들 숙제 체크한 결과를 표시하는 함수
 *
 */
function countColor(){
  
  var sheet = SpreadsheetApp.getActiveSheet();
  var dataRange = sheet.getDataRange();
  
  // 시트 높이
  var height = dataRange.getLastRow() - 3 ;
  
  // ucode 열
  const lastCol = dataRange.getLastColumn();
  const STARTROW = 4, STARTCOL = 1, WIDTH = 1;
  const firstColInfo = [STARTROW, STARTCOL, lastCol,WIDTH];
  const firstCol = sheet.getRange(...firstColInfo).getValues().flat();
  const ucodeContainingRows = firstCol.map((item, idx) => (item !== '' && item !==undefined) ? idx+STARTROW: -1).filter(item => item > 0);
  ucodeContainingRows.map(row => sheet.getRange(row, 1)).forEach(range => countColorRow(range));
}

  
function countColorRow(row){
  var ucodeRange = row;
  // 숙제 영역 10 ~ 15
  var homeworkRange = ucodeRange.offset(0,11,1,6);
  
  // 숙제 체크 영역 16~17
  var checkRange = ucodeRange.offset(0, 17, 1, 2);
  var checkRangeValues = checkRange.getValues();
  
  // 숙제색깔 파란색 #4a86e8, 주황색 #ff9900 
  var blue = '#4a86e8'
  var orange = '#ff9900'
  
  // 색깔 복사
  var colorValues = homeworkRange.getBackgrounds();
  
  // 색깔 세기
  var blueCount = 0;
  var orangeCount = 0;
  for(var c = 0; c < colorValues[0].length; c++){
    if(colorValues[0][c] == blue){
      blueCount++; }
    else if(colorValues[0][c] == orange){
      orangeCount++;}
  }
  checkRangeValues[0][0] = blueCount;
  checkRangeValues[0][1] = orangeCount;
  
  checkRange.setValues(checkRangeValues);
}


// 숙제를 옮기기를 모든열에 적용
function shiftHomework(){
  
  var sheet = SpreadsheetApp.getActiveSheet();
  
  // ucode 열
  var start = sheet.getRange("A4");
  for(i = 0; i < 30; i++){
    var rowRange = start.offset(i, 0);
    recordHomework(rowRange);
  }
}
// 개인 숙제 붙이기
function shiftHomeworkIndividual(){
  // activate sheet
  var sheet = SpreadsheetApp.getActiveSheet();
  
  // ucode 선택
  var start = sheet.getActiveRange();
  // 해당학생 숙제 이동
  recordHomework(start);
}




function recordHomework(row){
  var ucodeRange = row;
  // 숙제 영역 18 ~ 27
  var homeworkRange = ucodeRange.offset(0,19,1,10);
  
  // 숙제 체크 영역 16~17
  var checkRange = ucodeRange.offset(0, 11, 1, 6);
  var checkRangeValues = checkRange.getValues();
  // 색깔 흰색으로 
  checkRange.setBackground('');
  
  // 숙제영역 값 모두 지우기
  for(var i = 0; i < 6; i++){
    checkRangeValues[0][i] = '';
    
    
      }
  checkRange.setValues(checkRangeValues);
  
  
  // 숙제색깔 파란색 #4a86e8, 주황색 #ff9900
  var green = '#00ff00'
  
  // 색깔 복사
  var colorValues = homeworkRange.getBackgrounds();
  var homeworkValues = homeworkRange.getValues();
  
  // 색깔 check
  var greenPastHomework = [];
  var greenPastHomeworkValues = checkRangeValues;
  for(var c = 0; c < colorValues[0].length; c++){
    if(colorValues[0][c] == green){
      greenPastHomework.push(homeworkValues[0][c]);
    
  }
    for(i = 0; i < 6; i++){
      if(greenPastHomework[i]){
      greenPastHomeworkValues[0][i] = greenPastHomework[i];
    }
    }
  checkRange.setValues(greenPastHomeworkValues);
}
}





