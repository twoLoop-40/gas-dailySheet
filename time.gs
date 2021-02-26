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
  makeRange(A1){
    return A1 ? this.currSheet().getRange(A1)
      : this.currSheet().getActiveRange();
  },
  valueOn(value){
    this.makeRange().setValue(value);
  }

};
Object.setPrototypeOf(RangeProto, SheetProto);

function insertDate(){
  const sheetHandler = Object.create(RangeProto);
  let date = makeDate();
  
  sheetHandler.valueOn(date);

}


function makeDate(){
  today = new Date();
  //테스트
  //console.log(today.toLocaleDateString("ko-KR", {timeZone: "Asia/Seoul"}));

  return today.toLocaleDateString("ko-KR", {timeZone: "Asia/Seoul"});

}

function makeTime(){
  today = new Date();
  console.log(today)
}