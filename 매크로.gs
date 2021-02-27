/** @OnlyCurrentDoc */

function fillPurple() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveRange().setBackground('#ead1dc');
  insertTime();
};

function fillBlue() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveRangeList().setBackground('#4a86e8');
};

function fillCyan() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveRangeList().setBackground('#00ffff');
};

function fillGreen() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveRangeList().setBackground('#00ff00');
};

function fillOrange() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveRangeList().setBackground('#ff9900');
};

function fillgray() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveRangeList().setBackground('#efefef');
};

function fillyellow() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveRangeList().setBackground('#ffff00');
  insertTime();
};


function fillmint() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveRangeList().setBackground('#d9ead3');
  insertTime();
};

function duplicateAndOrganizeActiveSheet(){
  var mySS = SpreadsheetApp.getActiveSpreadsheet();
  var duplicateSheet = mySS.duplicateActiveSheet();
}



function fillblue() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('T4').activate();
  spreadsheet.getActiveRangeList().setBackground('#cfe2f3');
};

// 퍼플 #ead1dc
function fillPurple2() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveRangeList().setBackground('#d9d2e9');
};

function fillpink() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveRangeList().setBackground('#ead1dc');
  
};