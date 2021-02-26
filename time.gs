const SheetProto = {
  currSheet(){
    const id = this.id;
    const name = this.name;
    let ss = id ? SpreadsheetApp.openById(id)
      : SpreadsheetApp.getActiveSpreadsheet();
    
    let sheet = name ? ss.getSheetByName(name)
      : ss.getActiveSheet();

    return sheet;
  }
}

const RangeProto = {
  makeRange(loc){
    // loc : array
    return loc ? this.currSheet().getRange(...loc)
      : this.currSheet().getActiveRange();
  },
  valueOn(value){
    this.makeRange(this.cellLoc).setValue(value);
  }

};
Object.setPrototypeOf(RangeProto, SheetProto);

function insertDate(){
  const sheetHandler = Object.create(RangeProto);

  let date = makeDate();
  
  sheetHandler.valueOn(date);

}

function insertTime(){
  const sheetHandler = Object.create(RangeProto);
  let time = makeTime();
  let currentCell = sheetHandler.makeRange();
  let rowNum = currentCell.getRow();
  sheetHandler.cellLoc = [rowNum, 8]
  console.log(sheetHandler)
  sheetHandler.valueOn(time);
}

function makeDate(){
  today = new Date();
  //테스트
  //console.log(today.toLocaleDateString("ko-KR", {timeZone: "Asia/Seoul"}));

  return today.toLocaleDateString("ko-KR", {timeZone: "Asia/Seoul"});

}

function makeTime(){
  today = new Date();
  //console.log(today.toLocaleTimeString('ko-Kr'));
  return today.toLocaleTimeString('en-US', {timeZone: "Asia/Seoul"});
}