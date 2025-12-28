const ExcelJs = require('exceljs');

async function excelTest(){
let output = {row: -1, coll: -1};
let workbook = new ExcelJs.Workbook();
await workbook.xlsx.readFile('C:/Users/Vivek Jolly/Downloads/download.xlsx');
let worksheet = workbook.getWorksheet('Sheet1');
worksheet.eachRow((row, rowNum)=>{
    row.eachCell((cell, colNum)=>{
        if(cell.value === 'Kiwi'){
        output.row = rowNum;
        output.coll = colNum;
        }
    })
})
const cell = worksheet.getCell(output.row, output.coll);
cell.value = "Pommegranade";
await workbook.xlsx.writeFile('C:/Users/Vivek Jolly/Downloads/download.xlsx');
}
excelTest();