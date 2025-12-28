const ExcelJs = require ('exceljs');
const { channel } = require('node:diagnostics_channel');
const output = {row: -1, coll: -1};
async function readXls(searchText, replaceText,filePath){

const workbook = new ExcelJs.Workbook();
await workbook.xlsx.readFile(filePath);
let worksheet = workbook.getWorksheet('Sheet1');
 readExcelFile(worksheet,searchText);

   const cell = worksheet.getCell(output.row, output.coll);
    cell.value = replaceText;
     await workbook.xlsx.writeFile(filePath);

}

async function readExcelFile(worksheet,searchText){
    worksheet.eachRow((row, rowNum)=> {
    row.eachCell((cell, colNum) =>{
            //console.log(cell.value);
            if(cell.value===searchText){
                output.row = rowNum;
                output.coll= colNum;

            
            }


    })



})
}
readXls("399", "Mango", "C:/Users/Vivek Jolly/Downloads/download.xlsx");
