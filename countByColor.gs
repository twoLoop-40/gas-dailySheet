/**
 * 범위에서 지정된 색상의 개수를 반환합니다.
 *
 * @param {"B2:H2"} inputRange 개수를 셀 때 고려할 범위입니다.
 * @param {"#00ff00"} color 개수를 셀 색상(헥스 코드)입니다.
 * @param {$AR$1} $AR$1 함수값 자동 업데이트를 위한 것입니다. $AR$1로 고정!!!(onOpen()에 지정된 셀)
 * @return {number} 
 * @customfunction
 */

// function countColor(inputRange, color, $AR$1) {
//  var inputRangeCells = SpreadsheetApp.getActiveSheet().getRange(inputRange);
//  var rowColors = inputRangeCells.getBackgrounds();
//  var count = 0;

//  for(var r = 0; r < rowColors.length; r++) {
//    var cellColors = rowColors[r];
//    for(var c = 0; c < cellColors.length; c++) {
//      if(cellColors[c] == color) {
//        count++;
//      }
//    }
//  }

//  return count;
//}

//---------------------------------------------------------------------------
//새로고침시 자동 업데이트
//---------------------------------------------------------------------------

//function onOpen(e) {
//  SpreadsheetApp.getActiveSheet().getRange('AR1').setValue(Math.random());  
//}

