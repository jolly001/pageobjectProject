const ExcelJs = require('exceljs');

const output = {row: -1, col: -1};
async function xlsRead(){
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile("C:/Users/Vivek Jolly/Downloads/download.xlsx");
    let worksheet = workbook.getWorksheet('Sheet1');
    worksheet.eachRow((row, rowNum)=>{
        row.eachCell((cell, colNum)=>{
            console.log(cell.value);
            if(cell.value ==="Mango"){
            output.row = rowNum;
            output.col = colNum;
            }
        })
    })
    const cell = worksheet.getCell(output.row, output.col);
    cell.value= "iPhone";
    await workbook.xlsx.writeFile("C:/Users/Vivek Jolly/Downloads/download.xlsx");

}
xlsRead();