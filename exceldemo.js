//import {ExcelJs} from 'exceljs';
const ExcelJs = require('exceljs');

async function readExcelSheet(){

let output = {row: -1, coll: -1};
let workBook =new ExcelJs.Workbook();
await workBook.xlsx.readFile('C:/Users/Vivek Jolly/Downloads/download.xlsx');
let worksheet = workBook.getWorksheet('Sheet1');
worksheet.eachRow((row, rowNum) =>{

    row.eachCell((cell, colNum)=>{

        //console.log(cell.value);
        if(cell.value==="Apple"){
            console.log(rowNum + " "+ colNum);  
            output.row = rowNum;
            output.coll = colNum;
            console.log(output);
        }
        
    })
    
    


})
   const cell = worksheet.getCell(output.row, output.coll);
    cell.value = "Kiwi";
  await workBook.xlsx.writeFile('C:/Users/Vivek Jolly/Downloads/download.xlsx');
}
readExcelSheet();